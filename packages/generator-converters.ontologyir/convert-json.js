#!/usr/bin/env node

import { OntologyIrToFullMetadataConverter } from './build/esm/index.js';
import fs from 'fs';

// Get command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
Usage: node convert-json.js <input-file> [output-file]

Converts an Ontology IR JSON file to OSDK Full Metadata format.

Arguments:
  input-file   Path to the Ontology IR JSON file
  output-file  (Optional) Path for the output file. If not specified,
               outputs to console

Example:
  node convert-json.js input.json output.json
  node convert-json.js input.json > output.json
  `);
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];

try {
  // Read the input file
  const inputData = fs.readFileSync(inputFile, 'utf8');
  const ontologyIr = JSON.parse(inputData)['ontology'];

  // Convert the IR to Full Metadata
  console.error(`Converting ${inputFile}...`);
  const fullMetadata = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(ontologyIr);

  // Output the result
  const outputJson = JSON.stringify(fullMetadata, null, 2);

  if (outputFile) {
    fs.writeFileSync(outputFile, outputJson);
    console.error(`✅ Successfully converted to ${outputFile}`);
  } else {
    console.log(outputJson);
  }

} catch (error) {
  console.error('❌ Error during conversion:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}