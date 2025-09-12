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

import fs from "fs/promises";
import path from "path";
import { generateFileHeader } from "./generateFileHeader.js";
import { processTemplate } from "./processTemplate.js";

/**
 * Generate example file variations for each block variable in a template
 * @param {string} template The template string
 * @param {string} snippetKey The snippet key
 * @param {Object} baseContext The base context for template processing
 * @param {string[]} blockVariables Array of block variables
 * @param {string} version The version number
 * @param {string} outputDir The directory to output files to
 * @returns {Object} Object with variation keys and their variables
 */
export async function generateBlockVariations(
  template, 
  snippetKey, 
  baseContext, 
  blockVariables, 
  version,
  outputDir
) {
  // Create an object to store information about each variation
  const variations = {};
  
  // Group block variables by their name (without # or ^ prefix)
  const blockGroups = {};
  
  for (const blockVar of blockVariables) {
    const prefix = blockVar.charAt(0); // # or ^
    const varName = blockVar.replace(/^[#^/]/, ""); // Remove prefix
    
    // Skip closing tags
    if (prefix === "/") continue;
    
    if (!blockGroups[varName]) {
      blockGroups[varName] = [];
    }
    blockGroups[varName].push(prefix + varName);
  }
  // For debugging: console.log(blockGroups);
  // Generate variations for each block group
  for (const [varName, blockVars] of Object.entries(blockGroups)) {
    // Check if there's a standard (#) or inverted (^) block for this variable
    const hasStandardBlock = blockVars.some(v => v.startsWith("#"));
    const hasInvertedBlock = blockVars.some(v => v.startsWith("^"));
    
    // Create standard block variation if it exists
    if (hasStandardBlock) {
      // Create a modified context for standard block
      const standardContext = JSON.parse(JSON.stringify(baseContext));
      standardContext[varName] = true;
      
      // Process template with standard context
      const standardCode = processTemplate(template, standardContext);
      
      // Create file content with header
      const standardContent = `${generateFileHeader(snippetKey, `Variation: #${varName}`)}
${standardCode}`;

      // Write to file with variation suffix
      const variationKey = `${snippetKey}_#${varName}`;
      const standardPath = path.join(outputDir, "typescript", version, `${variationKey}.ts`);
      await fs.writeFile(standardPath, standardContent);
      
      // Extract all regular variables used in the template (not block markers)
      const regularVariables = blockVariables.filter(v => !v.startsWith("#") && !v.startsWith("^") && !v.startsWith("/"));
      
      // For the variation, include only regular variables (not block markers)
      const variationVariables = [
        ...regularVariables,        // Include all regular variables
        "linkedObjectType",        // Common variables needed for most templates
        "packageName",
        "sourceObjectType",
        "linkApiName"
      ];
      
      // Add to variations object - remove duplicates
      variations[variationKey] = [...new Set(variationVariables)];
      
      // Log message can be enabled in production but disabled in tests
      // eslint-disable-next-line no-console
      console.log(`✓ Generated #${varName} variation for ${snippetKey}`);
    }
    
    // Create inverted block variation if it exists
    if (hasInvertedBlock) {
      // Create a modified context for inverted block
      const invertedContext = JSON.parse(JSON.stringify(baseContext));
      invertedContext[varName] = false;
      
      // Process template with inverted context
      const invertedCode = processTemplate(template, invertedContext);
      
      // Create file content with header
      const invertedContent = `${generateFileHeader(snippetKey, `Variation: ^${varName}`)}
${invertedCode}`;
      
      // Write to file with variation suffix
      const variationKey = `${snippetKey}_^${varName}`;
      const invertedPath = path.join(outputDir, "typescript", version, `${variationKey}.ts`);
      await fs.writeFile(invertedPath, invertedContent);
      
      // Extract all regular variables used in the template (not block markers)
      const regularVariables = blockVariables.filter(v => !v.startsWith("#") && !v.startsWith("^") && !v.startsWith("/"));
      
      // For the variation, include only regular variables (not block markers)
      const variationVariables = [
        ...regularVariables,        // Include all regular variables
        "linkedObjectType",        // Common variables needed for most templates
        "packageName",
        "sourceObjectType",
        "linkApiName"
      ];
      
      // Add to variations object - remove duplicates
      variations[variationKey] = [...new Set(variationVariables)];
      
      // Log message can be enabled in production but disabled in tests
      // eslint-disable-next-line no-console
      console.log(`✓ Generated ^${varName} variation for ${snippetKey}`);
    }
  }
  return variations;
}