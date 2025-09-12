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

/* eslint-disable no-console */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import { 
  getSnippetContext, 
  generateFileHeader, 
  generateClientFile, 
  extractHandlebarsVariables,
  findBlockVariables,
  processTemplate,
  generateBlockVariations
} from "./src/utils/index.js";


// Import necessary modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path constants
const OUTPUT_DIR = path.join(__dirname, "src/examples");

async function main() {
  try {
    console.log("Generating examples from typescript-sdk-docs...");

    // Get snippets from version 2.0.0
    const version = "2.0.0";
    const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;
    
    if (!snippets) {
      console.error(`No snippets found for version ${version}`);
      process.exit(1);
    }

    // Delete existing examples directory if it exists
    try {
      await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
      console.log("✓ Cleaned up existing examples directory");
    } catch (err) {
      // Directory might not exist, which is fine
    }

    // Ensure output directory exists
    await fs.mkdir(path.join(OUTPUT_DIR, "typescript", version), { recursive: true });

    // Generate examples for each snippet
    await generateAllExamples(snippets, version);
    
    // Generate client.ts file
    await generateClientFile(version, OUTPUT_DIR);

    console.log("✓ Examples generated successfully");
  } catch (error) {
    console.error("Error generating example snippets:", error);
    process.exit(1);
  }
}

/**
 * Generate examples for all snippets
 * This function processes each snippet template in the TYPESCRIPT_OSDK_SNIPPETS object,
 * applies context variables using Handlebars, and generates example files.
 * It also creates an index file and a snippetVariables.json file.
 * 
 * @param {Object} snippets The snippets object from TYPESCRIPT_OSDK_SNIPPETS
 * @param {string} version The version to generate examples for
 */
async function generateAllExamples(snippets, version) {
  // Create a snippetVariables object to track handlebars variables
  const snippetVariables = {};
  
  // Create index file content using the common header utility
  let indexContent = `${generateFileHeader(`index`, `TYPESCRIPT Examples - SDK Version ${version}`)}
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

    // Get the customized context for this specific snippet
    const context = getSnippetContext(snippetKey);
    
    // Extract and store the handlebars variables for this snippet
    const variables = extractHandlebarsVariables(snippetData.template);
    
    // Check if this snippet has block variables
    const blockVariables = findBlockVariables(variables);
    
    // Only add to snippetVariables if it doesn't have block variables
    // (block variations will be added later)
    if (blockVariables.length === 0) {
      snippetVariables[snippetKey] = variables;
    }
    
    if (blockVariables.length > 0) {      
      // For block templates, only generate variations, not base files
      // Generate variations for each block variable and add to snippetVariables
      const variations = await generateBlockVariations(
        snippetData.template, 
        snippetKey, 
        context, 
        blockVariables, 
        version, 
        OUTPUT_DIR
      );
      
      // Add each variation to snippetVariables
      for (const variationKey in variations) {
        snippetVariables[variationKey] = variations[variationKey];
      }
      
      // Add to index for variations only (no base file)
      indexContent += `// ${snippetKey} (variations only)`;      
      
      // Group block variables by name (without prefix)
      const blockVarsByName = {};
      for (const blockVar of blockVariables) {
        const varName = blockVar.replace(/^[#^/]/, ""); // Remove prefix
        const prefix = blockVar.charAt(0);
        if (prefix === "#" || prefix === "^") { // Only for block openings
          if (!blockVarsByName[varName]) {
            blockVarsByName[varName] = [];
          }
          blockVarsByName[varName].push(prefix);
        }
      }
      
      // Add each variation to the index
      for (const [varName, prefixes] of Object.entries(blockVarsByName)) {
        for (const prefix of prefixes) {
          if (prefix === "#") {
            indexContent += `\n// See: ./${snippetKey}_${prefix}${varName}.ts (Standard block: ${varName} = true)`;
          } else if (prefix === "^") {
            indexContent += `\n// See: ./${snippetKey}_${prefix}${varName}.ts (Inverted block: ${varName} = false)`;
          }
        }
      }
      
      indexContent += "\n\n";
    } else {
      // Process template with provided context
      const processedCode = processTemplate(snippetData.template, context);
      
      // Create file content with header
      const fileContent = `${generateFileHeader(snippetKey)}\n${processedCode}`;

      // Write to file
      const filePath = path.join(OUTPUT_DIR, "typescript", version, `${snippetKey}.ts`);
      await fs.writeFile(filePath, fileContent);
      
      // Add to index
      indexContent += `// ${snippetKey}\n// See: ./${snippetKey}.ts\n\n`;
      
      console.log(`✓ Generated example for ${snippetKey}`);
    }
  }
  
  // Write the index file
  await fs.writeFile(
    path.join(OUTPUT_DIR, "typescript", version, "index.ts"), 
    indexContent
  );
  
  // Write the snippetVariables.json file
  await fs.writeFile(
    path.join(__dirname, "snippetVariables.json"),
    JSON.stringify(snippetVariables, null, 2),
    "utf8"
  );
  console.log("✓ Generated snippetVariables.json");
  console.log("✓ All examples generated");
}

main();