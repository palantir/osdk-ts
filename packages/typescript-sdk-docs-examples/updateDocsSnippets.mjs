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
const DOCS_SECTIONS_PATH = path.join(__dirname, 'src/osdk-docs-sections.json');
const DOCS_MAPPING_PATH = path.join(__dirname, 'src/osdk-docs-mapping.json');

async function main() {
  try {
    console.log('Updating documentation snippets...');

    // Load the docs sections and mapping
    const docsSections = JSON.parse(await fs.readFile(DOCS_SECTIONS_PATH, 'utf8'));
    const docsMapping = JSON.parse(await fs.readFile(DOCS_MAPPING_PATH, 'utf8'));

    // Update sections with code snippets
    await updateAllSections(docsSections, docsMapping);

    // Write the updated docs sections back to the file
    await fs.writeFile(DOCS_SECTIONS_PATH, JSON.stringify(docsSections, null, 2), 'utf8');

    console.log('✓ Documentation snippets updated successfully');
  } catch (error) {
    console.error('Error updating documentation snippets:', error);
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
 * Find a section or subsection recursively by title
 * @param {Array} sections Array of sections/subsections
 * @param {string} title Title to search for
 * @returns {Object|null} The section object or null if not found
 */
function findSectionByCodeSnippetTitle(sections, title, currentPath = '') {
  for (const section of sections) {
    const newPath = currentPath ? `${currentPath}/${section.title}` : section.title;
    
    // Check if this section has code snippets with the target title
    if (section.code_snippets?.typescript?.["2.0.0"]) {
      for (const snippet of section.code_snippets.typescript["2.0.0"]) {
        if (snippet.title === title) {
          return { section, sectionPath: newPath, snippet };
        }
      }
    }
    
    // Recursively search subsections
    if (section.subsections) {
      const result = findSectionByCodeSnippetTitle(section.subsections, title, newPath);
      if (result) return result;
    }
  }
  
  return null;
}

/**
 * Updates all sections with code snippets from the mapping
 */
async function updateAllSections(docsSections, docsMapping) {
  // Default version to use from the mapping
  const templateVersion = docsMapping.defaultVersion || '2.0.0';
  const outputVersion = '2.0.0';
  const language = 'typescript';
  
  // For each mapping entry
  for (const [snippetTitle, snippetKey] of Object.entries(docsMapping.mapping)) {
    // Find section that contains this snippet title
    const result = findSectionByCodeSnippetTitle(docsSections.sections, snippetTitle);
    
    if (!result) {
      console.error(`Could not find section with code snippet titled "${snippetTitle}"`);
      continue;
    }
    
    const { section, sectionPath, snippet } = result;
    
    // Access the template from the SDK snippets
    const snippetData = TYPESCRIPT_OSDK_SNIPPETS.versions[templateVersion]?.snippets?.[snippetKey]?.[0];
    
    if (!snippetData) {
      console.error(`Could not find snippet ${snippetKey} for version ${templateVersion}`);
      continue;
    }
    
    console.log(`Found template for ${snippetKey} (${snippetTitle}) in ${sectionPath}. Variables:`, extractHandlebarsVariables(snippetData.template));
    
    // Set up the context for the template
    let context = {
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
    
    // Customize context based on snippet key
    switch (snippetKey) {
      case 'loadLinkedObjectReference':
        context.sourceObjectType = 'Employee',
        context.linkedObjectType = 'Equipment',
        context.linkApiName = 'assignedEquipment'
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
    
    // Process the template with the context
    const processedCode = processTemplate(snippetData.template, context);
    
    // Update the code snippet with the processed code
    snippet.code = processedCode;
    
    console.log(`✓ Updated "${snippetTitle}" with template ${snippetKey}`);
  }
  
  console.log('✓ All sections updated');
}

main();