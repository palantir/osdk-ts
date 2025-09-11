#!/usr/bin/env node
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';
import { TYPESCRIPT_OSDK_SNIPPETS } from '@osdk/typescript-sdk-docs';

// Import necessary modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path constants
const OUTPUT_DIR = path.join(__dirname, 'src/examples');

async function main() {
  try {
    console.log('Generating example snippets from typescript-sdk-docs...');

    // Get snippets from version 2.0.0
    const version = '2.0.0';
    const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;
    
    if (!snippets) {
      console.error(`No snippets found for version ${version}`);
      process.exit(1);
    }

    // Delete existing examples directory if it exists
    try {
      await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
      console.log('✓ Cleaned up existing examples directory');
    } catch (err) {
      // Directory might not exist, which is fine
    }

    // Ensure output directory exists
    await fs.mkdir(path.join(OUTPUT_DIR, 'typescript', version), { recursive: true });

    // Generate examples for each snippet
    await generateAllExamples(snippets, version);
    
    // Generate client.ts file
    await generateClientFile(version);

    console.log('✓ Example snippets generated successfully');
  } catch (error) {
    console.error('Error generating example snippets:', error);
    process.exit(1);
  }
}

/**
 * Process a template using Handlebars
 * @param {string} template The template string
 * @param {Object} context The context object with template variables
 * @returns {string} The processed template
 */
function processTemplate(template, context) {
  try {
    const compiledTemplate = Handlebars.compile(template);
    return compiledTemplate(context);
  } catch (error) {
    console.error('Error processing template:', error);
    return template; // Return original template if processing fails
  }
}

/**
 * Extract variables used in a handlebars template
 * @param {string} template The template string
 * @returns {string[]} Array of variable names
 */
function extractHandlebarsVariables(template) {
  const regex = /{{(?:\\{)?([^}]+)(?:\\})?}}/g;
  const matches = [...template.matchAll(regex)];
  return [...new Set(matches.map(match => match[1].trim()))];
}

/**
 * Generate examples for all snippets
 * @param {Object} snippets The snippets object from TYPESCRIPT_OSDK_SNIPPETS
 * @param {string} version The version to generate examples for
 */
async function generateAllExamples(snippets, version) {
  // Create a global context object for templates
  const baseContext = {
    packageName: '../../../generatedNoCheck',
    objectType: 'Employee',
    titleProperty: 'fullName',
    property: 'fullName',
    operation: 'lt',
    propertyValueV2: 100,
    primaryKeyPropertyV2: { apiName: 'employeeId', type: 'integer' },
    // For linked objects
    sourceObjectType: 'Employee',
    linkedObjectType: 'Employee',
    linkedPrimaryKeyPropertyV2: { apiName: "fullName", type: 'string' },
    linkedOneSidePropertyV2: { apiName: "fullName", type: 'string' },
    linkedManySidePropertyV2: { apiName: "salary", type: 'decimal' },
    linkApiName: 'lead',
    // for structured properties
    structPropertyApiName: 'contactInfo',
    structSubPropertyApiName: 'phone',
    linkedPrimaryKeyProperty: "equipmentId-12345"
  };
  
  // Create index file content
  let indexContent = `/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// TYPESCRIPT Examples - SDK Version ${version}
// This file was automatically generated from the typescript-sdk-docs package

`;

  // Process each snippet
  for (const [snippetKey, snippetArray] of Object.entries(snippets)) {
    if (!snippetArray || snippetArray.length === 0) {
      console.log(`No template found for ${snippetKey}, skipping...`);
      continue;
    }
    
    const snippetData = snippetArray[0];
    if (!snippetData.template) {
      console.log(`No template content for ${snippetKey}, skipping...`);
      continue;
    }

    // Create a specific context for this snippet
    let context = { ...baseContext };
    
    // Customize context based on snippet key
    switch (snippetKey) {
      case 'loadLinkedObjectReference':
        context.sourceObjectType = 'Employee';
        context.linkedObjectType = 'Equipment';
        context.linkApiName = 'assignedEquipment';
        context.linkedPrimaryKeyPropertyV2 = { apiName: 'equipmentId', type: 'string' };
        break;
      case 'stringStartsWithTemplate':
        context.property = 'fullName';
        context.structPropertyApiName = 'contactInfo';
        context.structSubPropertyApiName = 'phone';
        break;
      case 'rangeTemplate':
        context.property = 'salary';
        context.operation = 'lt';
        context.propertyValueV2 = 100;
        context.structPropertyApiName = 'contactInfo';
        context.structSubPropertyApiName = 'houseNumber';
        break;
      case 'equalityTemplate':
        context.property = 'department';
        context.propertyValueV2 = 'Engineering';
        break;
      case 'exactGroupByTemplate':
        context.property = 'department';
        break;
      // Add more cases as needed for specific snippets
    }
    
    console.log(`Processing template for ${snippetKey}. Variables:`, extractHandlebarsVariables(snippetData.template));
    
    // Process the template with the context
    const processedCode = processTemplate(snippetData.template, context);
    
    // Create file content with header
    const fileContent = `/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: ${snippetKey}

${processedCode}`;
    
    // Write to file
    const filePath = path.join(OUTPUT_DIR, 'typescript', version, `${snippetKey}.ts`);
    await fs.writeFile(filePath, fileContent);
    
    // Add to index
    indexContent += `// ${snippetKey}\n// See: ./${snippetKey}.ts\n\n`;
    
    console.log(`✓ Generated example for ${snippetKey}`);
  }
  
  // Write the index file
  await fs.writeFile(
    path.join(OUTPUT_DIR, 'typescript', version, 'index.ts'), 
    indexContent
  );
  
  console.log('✓ All examples generated');
}

async function generateClientFile(version) {
  const clientTemplate = `/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

import { createClient } from "@osdk/client";
import { $ontologyRid } from "../../../generatedNoCheck";

export const client = createClient(
  "https://example.com",
  $ontologyRid,
  async () => {
    return "";
  },
);
`;

  const dirPath = path.join(OUTPUT_DIR, 'typescript', version);
  const clientFilePath = path.join(dirPath, 'client.ts');
  
  await fs.writeFile(clientFilePath, clientTemplate);
  console.log(`✓ Generated client.ts for typescript/${version}`);
}

main();
