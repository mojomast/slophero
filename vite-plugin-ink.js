import { readFileSync, existsSync } from 'fs';

export default function inkPlugin() {
  return {
    name: 'vite-plugin-ink',
    async transform(src, id) {
      // Match .ink files (with or without ?raw)
      if (id.includes('.ink')) {
        // Remove ?raw suffix to get actual file path
        const filePath = id.split('?')[0];
        
        // Look for pre-compiled .json file
        const jsonPath = filePath.replace('.ink', '.json');
        
        if (!existsSync(jsonPath)) {
          this.error(
            `Pre-compiled JSON not found: ${jsonPath}\n` +
            'Run "node compile-ink.js" to compile Ink files before building.'
          );
          return;
        }
        
        try {
          // Read pre-compiled JSON
          let compiledJson = readFileSync(jsonPath, 'utf-8');
          
          // Remove BOM (Byte Order Mark) if present
          if (compiledJson.charCodeAt(0) === 0xFEFF) {
            compiledJson = compiledJson.slice(1);
          }
          
          // Validate it's actual JSON
          try {
            JSON.parse(compiledJson);
          } catch (e) {
            throw new Error(`Invalid JSON in ${jsonPath}: ${e.message}`);
          }
          
          // Return the compiled JSON as a JavaScript string
          // The Story constructor expects a JSON string, not an object
          return {
            code: `export default ${JSON.stringify(compiledJson)};`,
            map: null,
          };
        } catch (error) {
          console.error(`[vite-plugin-ink] Error loading ${jsonPath}:`, error.message);
          this.error(`Ink loading error in ${id}:\n${error.message}`);
          return;
        }
      }
    },
  };
}
