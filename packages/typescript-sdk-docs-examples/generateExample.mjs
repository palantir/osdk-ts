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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCHEMA_PATH = path.join(__dirname, 'src/osdk-docs-schema.json');
const SECTIONS_PATH = path.join(__dirname, 'src/osdk-docs-sections.json');
const MAPPING_PATH = path.join(__dirname, 'src/osdk-docs-mapping.json');
const OUTPUT_DIR = path.join(__dirname, 'src/examples');

async function main() {
  console.log('Validating and processing documentation sections...');
  
  try {
    // Load schema, sections and mapping
    const schema = JSON.parse(await fs.readFile(SCHEMA_PATH, 'utf8'));
    const sections = JSON.parse(await fs.readFile(SECTIONS_PATH, 'utf8'));
    const mapping = JSON.parse(await fs.readFile(MAPPING_PATH, 'utf8'));
    
    // Validate sections against schema
    const valid = await validateAgainstSchema(sections, schema);
    
    if (!valid) {
      console.error('Validation failed');
      process.exit(1);
    }
    
    console.log('✓ Documentation sections validated successfully');
    
    // Delete existing examples directory if it exists
    try {
      await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
      console.log('✓ Cleaned up existing examples directory');
    } catch (err) {
      // Directory might not exist, which is fine
    }
    
    // Create output directory
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Process sections to extract examples
    await processExamples(sections, mapping);
    
    console.log('✓ Examples generated successfully');
  } catch (error) {
    console.error('Error processing documentation sections:', error);
    process.exit(1);
  }
}

async function validateAgainstSchema(data, schema) {
  try {
    // Since we're in ESM context, dynamically import Ajv
    const { default: Ajv } = await import('ajv');
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (!valid) {
      console.error('Validation errors:', validate.errors);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating schema:', error);
    return false;
  }
}

async function processExamples(sections, mapping) {
  // Process each section and extract code snippets
  const examples = extractCodeSnippets(sections.sections, '', mapping);
  
  // Group snippets by language and version
  const groupedSnippets = groupSnippets(examples);
  
  // Write examples to files
  await writeExampleFiles(groupedSnippets, mapping);
  
  // Generate client.ts file for each version
  await generateClientFiles(Object.keys(groupedSnippets).map(key => {
    const [language, version] = key.split('/');
    return { language, version };
  }));
}

function extractCodeSnippets(sections, prefix = '', mapping) {
  let snippets = [];
  
  for (const section of sections) {
    const sectionTitle = prefix ? `${prefix}/${section.title}` : section.title;
    
    // Extract code snippets from this section
    if (section.code_snippets) {
      // Handle new nested structure with language/version keys
      for (const language of Object.keys(section.code_snippets)) {
        const languageSnippets = section.code_snippets[language];
        
        for (const version of Object.keys(languageSnippets)) {
          for (const snippet of languageSnippets[version]) {
            // Get the mapping key for this snippet title if it exists
            const mappingKey = mapping?.mapping?.[snippet.title] || '';
            
            snippets.push({
              path: sectionTitle,
              title: section.title,
              description: section.description,
              language,
              version,
              code: snippet.code,
              snippetTitle: snippet.title || '',
              mappingKey: mappingKey
            });
          }
        }
      }
    }
    
    // Process subsections recursively
    if (section.subsections && section.subsections.length > 0) {
      snippets = snippets.concat(extractCodeSnippets(section.subsections, sectionTitle, mapping));
    }
  }
  
  return snippets;
}

function groupSnippets(snippets) {
  const grouped = {};
  
  for (const snippet of snippets) {
    const key = `${snippet.language}/${snippet.version}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(snippet);
  }
  
  return grouped;
}

async function writeExampleFiles(groupedSnippets, mapping) {
  for (const [key, snippets] of Object.entries(groupedSnippets)) {
    const [language, version] = key.split('/');
    const baseDirPath = path.join(OUTPUT_DIR, language, version);
    
    // Create base directory for this language/version
    await fs.mkdir(baseDirPath, { recursive: true });
    
    // Create an index file
    let indexContent = `/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// ${language.toUpperCase()} Examples - SDK Version ${version}
// This file was automatically generated from the documentation sections

`;
    
    // Write individual example files
    for (const snippet of snippets) {
      // Use the mapping key as the filename if it exists, otherwise fall back to the previous naming scheme
      let fileName;
      if (snippet.mappingKey) {
        fileName = `${snippet.mappingKey}.${language === 'typescript' ? 'ts' : language}`;
      } else {
        // Create a safer file name without path separators
        // Include the snippetTitle to make filenames more specific
        const safeSnippetTitle = (snippet.snippetTitle || '').replace(/[^a-zA-Z0-9]/g, '_');
        const safeTitle = snippet.path.replace(/[^a-zA-Z0-9]/g, '_');
        fileName = `${safeTitle}${safeSnippetTitle ? `_${safeSnippetTitle}` : ''}.${language === 'typescript' ? 'ts' : language}`;
      }
      const filePath = path.join(baseDirPath, fileName);
      
      let fileContent = `/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: ${snippet.path}
// Title: ${snippet.snippetTitle || snippet.title}
// Description: ${snippet.description || 'No description provided'}

`;
      fileContent += snippet.code;
      
      await fs.writeFile(filePath, fileContent);
      
      // Add to index
      indexContent += `// ${snippet.path} - ${snippet.snippetTitle || 'Main example'}\n`;
      indexContent += `// See: ./${fileName}\n\n`;
    }
    
    // Write the index file
    await fs.writeFile(path.join(baseDirPath, `index.${language === 'typescript' ? 'ts' : language}`), indexContent);
  }
}

/**
 * Generates client.ts files for each language/version combination
 * @param {Array<{language: string, version: string}>} versions 
 */
async function generateClientFiles(versions, mapping) {
  console.log('Generating client.ts files...');
  
  const clientTemplate = `/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
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
  
  for (const { language, version } of versions) {
    if (language === 'typescript') {
      const dirPath = path.join(OUTPUT_DIR, language, version);
      const clientFilePath = path.join(dirPath, 'client.ts');
      
      await fs.writeFile(clientFilePath, clientTemplate);
      console.log(`✓ Generated client.ts for ${language}/${version}`);
    }
  }
}

main();