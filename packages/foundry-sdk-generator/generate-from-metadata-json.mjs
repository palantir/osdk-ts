import { generateClientSdkVersionTwoPointZero } from '@osdk/generator';
import fs from 'fs/promises';
import path from 'path';


// Parse command line arguments
const args = process.argv.slice(2);

const inputFile = args[0];
const packageName = args[1] || 'my-foundry-sdk';
const packageVersion = args[2] || '1.0.0';
const outputDir = args[3] || './generated-sdk';

async function generate() {
  try {
    const jsonContent = await fs.readFile(inputFile, 'utf-8');
    const metadata = JSON.parse(jsonContent);

    // Validate structure
    if (!metadata.ontology || !metadata.objectTypes) {
      throw new Error('Invalid metadata format. Expected OntologyFullMetadata.');
    }

    const ontologyName = metadata.ontology.displayName || metadata.ontology.apiName || 'Unknown';


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

    await generateClientSdkVersionTwoPointZero(
      metadata,              // OntologyFullMetadata
      `osdk-generator/${packageVersion} (from-json)`,            // User agent string
      hostFs,               // File system interface
      fullOutputDir,        // Output directory
      'module',             // Module type: 'module' or 'commonjs'
      new Map(),            // externalObjects
      new Map(),            // externalInterfaces
      new Map(),            // externalSpts
      false,                // forInternalUse
      []                    // fixedVersionQueryTypes
    );

    await fs.writeFile(
      path.join(fullOutputDir, 'ontology-metadata.json'),
      JSON.stringify(metadata, null, 2),
      'utf-8'
    );

  } catch (error) {
    console.error('❌ Error during generation:', error);
  }
}

generate();
