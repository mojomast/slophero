import { execSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const narrativeDir = './src/narrative';
const inklecatePath = './node_modules/inklecate/bin/inklecate.exe';

// Get all .ink files
const inkFiles = readdirSync(narrativeDir).filter(f => f.endsWith('.ink'));

console.log(`Compiling ${inkFiles.length} Ink files...`);

for (const file of inkFiles) {
  const inkPath = join(narrativeDir, file);
  const jsonPath = inkPath.replace('.ink', '.json');
  
  try {
    console.log(`  Compiling ${file}...`);
    execSync(`"${inklecatePath}" -o "${jsonPath}" "${inkPath}"`, {
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    // Read and strip BOM if present
    let json = readFileSync(jsonPath, 'utf-8');
    if (json.charCodeAt(0) === 0xFEFF) {
      json = json.slice(1);
    }
    
    // Validate JSON
    JSON.parse(json);
    
    // Write cleaned JSON
    writeFileSync(jsonPath, json, 'utf-8');
    
    console.log(`  ✓ ${file} -> ${file.replace('.ink', '.json')}`);
  } catch (error) {
    console.error(`  ✗ Failed to compile ${file}:`, error.message);
    process.exit(1);
  }
}

console.log('\n✓ All Ink files compiled successfully!');
