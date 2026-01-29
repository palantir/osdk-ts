#!/usr/bin/env node

import { OntologyIrToFullMetadataConverter } from './build/esm/index.js';
import fs from 'fs';

const args = process.argv.slice(2);

const inputFile = args[0];
const outputFile = args[1];
const inputData = fs.readFileSync(inputFile, 'utf8');
const ontologyIr = JSON.parse(inputData)['ontology'];

const fullMetadata = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(ontologyIr);

const outputJson = JSON.stringify(fullMetadata, null, 2);

fs.writeFileSync(outputFile, outputJson);
