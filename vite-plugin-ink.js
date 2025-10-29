import { execSync } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { tmpdir } from 'os';

export default function inkPlugin() {
  return {
    name: 'vite-plugin-ink',
    async transform(src, id) {
      // Match .ink files (with or without ?raw)
      if (id.includes('.ink')) {
        // Remove ?raw suffix to get actual file path
        const filePath = id.split('?')[0];
        
        // Create temp files for compilation
        const tempInkPath = join(tmpdir(), `temp_${Date.now()}.ink`);
        const tempJsonPath = tempInkPath.replace('.ink', '.json');
        
        try {
          // Read the source
          const inkSource = readFileSync(filePath, 'utf-8');
          
          // Write to temp file
          writeFileSync(tempInkPath, inkSource, 'utf-8');
          
          // Compile using inklecate
          const inklecatePath = join(process.cwd(), 'node_modules', 'inklecate', 'bin', 'inklecate.exe');
          const compileOutput = execSync(`"${inklecatePath}" -o "${tempJsonPath}" "${tempInkPath}"`, {
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'pipe'],
          });
          
          // Check if output file was created
          if (!existsSync(tempJsonPath)) {
            throw new Error(`Compilation failed. Output: ${compileOutput}`);
          }
          
          // Read compiled JSON and strip BOM if present
          let compiledJson = readFileSync(tempJsonPath, 'utf-8');
          
          // Remove BOM (Byte Order Mark) if present
          if (compiledJson.charCodeAt(0) === 0xFEFF) {
            compiledJson = compiledJson.slice(1);
          }
          
          // Validate it's actual JSON
          try {
            JSON.parse(compiledJson);
          } catch (e) {
            throw new Error(`Invalid JSON output: ${e.message}`);
          }
          
          // Clean up temp files
          unlinkSync(tempInkPath);
          unlinkSync(tempJsonPath);
          
          // Return the compiled JSON as a JavaScript string
          // The Story constructor expects a JSON string, not an object
          return {
            code: `export default ${JSON.stringify(compiledJson)};`,
            map: null,
          };
        } catch (error) {
          // Clean up on error
          try {
            unlinkSync(tempInkPath);
            if (existsSync(tempJsonPath)) unlinkSync(tempJsonPath);
          } catch {}
          
          console.error(`[vite-plugin-ink] Error compiling ${filePath}:`, error.message);
          this.error(`Ink compilation error in ${id}:\n${error.message}\n${error.stack}`);
          return;
        }
      }
    },
  };
}
