#!/usr/bin/env node

/**
 * Direct OSDK Generator from OntologyFullMetadata JSON
 *
 * Generates an OSDK package directly from a JSON file containing
 * OntologyFullMetadata, bypassing Foundry API calls.
 */

import { generateClientSdkVersionTwoPointZero } from '@osdk/generator';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 1 || args.includes('--help')) {
  console.log(`
Generate OSDK from OntologyFullMetadata JSON

Usage:
  node generate-from-metadata-json.mjs <metadata.json> [package-name] [version] [output-dir]

Arguments:
  metadata.json   Path to JSON file with OntologyFullMetadata
  package-name    Package name (default: my-foundry-sdk)
  version         Package version (default: 1.0.0)
  output-dir      Output directory (default: ./generated-sdk)

Example:
  node generate-from-metadata-json.mjs ontology.json my-sdk 1.0.0 ./output

The JSON file should have this structure:
{
  "ontology": {
    "apiName": "...",
    "rid": "...",
    "displayName": "..."
  },
  "objectTypes": { ... },
  "actionTypes": { ... },
  "queryTypes": { ... },
  "interfaceTypes": { ... },
  "sharedPropertyTypes": { ... }
}
`);
  process.exit(args.includes('--help') ? 0 : 1);
}

const inputFile = args[0];
const packageName = args[1] || 'my-foundry-sdk';
const packageVersion = args[2] || '1.0.0';
const outputDir = args[3] || './generated-sdk';

async function generate() {
  try {
    console.log('🚀 Generating OSDK from JSON metadata\n');
    console.log(`📄 Input:    ${inputFile}`);
    console.log(`📦 Package:  ${packageName}@${packageVersion}`);
    console.log(`📁 Output:   ${outputDir}`);
    console.log('');

    // Load metadata
    console.log('Loading metadata...');
    const jsonContent = await fs.readFile(inputFile, 'utf-8');
    const metadata = JSON.parse(jsonContent);

    // Validate structure
    if (!metadata.ontology || !metadata.objectTypes) {
      throw new Error('Invalid metadata format. Expected OntologyFullMetadata.');
    }

    const ontologyName = metadata.ontology.displayName || metadata.ontology.apiName || 'Unknown';
    console.log(`✓ Loaded ontology: ${ontologyName}`);
    console.log(`  - Objects: ${Object.keys(metadata.objectTypes || {}).length}`);
    console.log(`  - Actions: ${Object.keys(metadata.actionTypes || {}).length}`);
    console.log(`  - Queries: ${Object.keys(metadata.queryTypes || {}).length}`);
    console.log('');

    // Create output directory
    const fullOutputDir = path.join(outputDir, packageName);
    await fs.mkdir(fullOutputDir, { recursive: true });

    // Create file system interface
    const files = {};
    const hostFs = {
      async writeFile(filePath, contents) {
        const normalizedPath = path.normalize(filePath);
        files[normalizedPath] = contents;
        // Also write to disk immediately
        const fullPath = path.isAbsolute(filePath) ? filePath : path.join(fullOutputDir, filePath);
        await fs.mkdir(path.dirname(fullPath), { recursive: true });
        await fs.writeFile(fullPath, contents, 'utf-8');
      },
      async mkdir(dirPath) {
        const fullPath = path.isAbsolute(dirPath) ? dirPath : path.join(fullOutputDir, dirPath);
        await fs.mkdir(fullPath, { recursive: true });
      },
      async readdir(dirPath) {
        return fs.readdir(dirPath);
      }
    };

    // Generate SDK
    console.log('Generating SDK code...');
    const userAgent = `osdk-generator/${packageVersion} (from-json)`;

    await generateClientSdkVersionTwoPointZero(
      metadata,              // OntologyFullMetadata
      userAgent,            // User agent string
      hostFs,               // File system interface
      fullOutputDir,        // Output directory
      'module',             // Module type: 'module' or 'commonjs'
      new Map(),            // externalObjects
      new Map(),            // externalInterfaces
      new Map(),            // externalSpts
      false,                // forInternalUse
      []                    // fixedVersionQueryTypes
    );

    // Create package.json
    console.log('Creating package.json...');
    const packageJson = {
      name: packageName,
      version: packageVersion,
      description: `OSDK for ${ontologyName}`,
      main: './dist/index.js',
      module: './dist/index.mjs',
      types: './dist/index.d.ts',
      type: 'module',
      scripts: {
        build: 'tsc',
        clean: 'rm -rf dist',
        'build:watch': 'tsc --watch'
      },
      dependencies: {
        '@osdk/client': '^2.0.0'
      },
      devDependencies: {
        'typescript': '^5.0.0',
        '@types/node': '^20.0.0'
      },
      files: [
        'dist',
        'src'
      ]
    };

    await fs.writeFile(
      path.join(fullOutputDir, 'package.json'),
      JSON.stringify(packageJson, null, 2),
      'utf-8'
    );

    // Create tsconfig.json
    console.log('Creating tsconfig.json...');
    const tsconfig = {
      compilerOptions: {
        target: 'ES2020',
        module: 'ES2020',
        moduleResolution: 'node',
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true
      },
      include: ['src/**/*'],
      exclude: ['node_modules', 'dist']
    };

    await fs.writeFile(
      path.join(fullOutputDir, 'tsconfig.json'),
      JSON.stringify(tsconfig, null, 2),
      'utf-8'
    );

    // Save original metadata for reference
    console.log('Saving metadata reference...');
    await fs.writeFile(
      path.join(fullOutputDir, 'ontology-metadata.json'),
      JSON.stringify(metadata, null, 2),
      'utf-8'
    );

    console.log('\n✅ Successfully generated OSDK!\n');
    console.log('📁 Output: ' + fullOutputDir);
    console.log('');
    console.log('Next steps:');
    console.log('1. Navigate to the package:');
    console.log(`   cd ${fullOutputDir}`);
    console.log('');
    console.log('2. Install dependencies:');
    console.log('   npm install');
    console.log('');
    console.log('3. Build the package:');
    console.log('   npm run build');
    console.log('');
    console.log('4. Use in your project:');
    console.log(`   npm link                    # In ${fullOutputDir}`);
    console.log(`   npm link ${packageName}     # In your project`);
    console.log('');
    console.log('5. Import and use:');
    console.log(`   import { $ontologyRid } from '${packageName}';`);
    console.log(`   const client = createClient({ ... });`);
    console.log(`   const objects = await client.ontology.objects.YourObjectType.page();`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);

    console.log('\n💡 Troubleshooting:');
    console.log('- Ensure your JSON file contains valid OntologyFullMetadata');
    console.log('- Check that all required dependencies are built');
    console.log('- Verify the JSON structure matches the schema');

    process.exit(1);
  }
}

generate();