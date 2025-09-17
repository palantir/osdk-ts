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

import { getSnippetContext } from "./baseContext.js";
import type { BaseContext } from "./baseContext.js";
import { CodeTransformer } from "./codeTransformer.js";
import type { FileContent } from "./fileWriter.js";
import { generateFileHeader } from "./generateFileHeader.js";
import { processTemplate } from "./processTemplate.js";

export interface BlockVariationResult {
  variables: string[];
  code: string;
}

export interface BlockVariations {
  [variationKey: string]: BlockVariationResult;
}

export interface BlockVariationFiles {
  variations: BlockVariations;
  files: FileContent[];
}

/**
 * Create optimized variable list for variations
 * @param blockVariables All block variables from template
 * @returns Deduplicated list of variables for variations
 */
function createVariationVariables(blockVariables: string[]): string[] {
  const regularVariables = blockVariables.filter(v =>
    !v.startsWith("#") && !v.startsWith("^") && !v.startsWith("/")
  );

  const commonVariables = [
    "linkedObjectType",
    "packageName",
    "sourceObjectType",
    "linkApiName",
  ];

  return [...new Set([...regularVariables, ...commonVariables])];
}

/**
 * Generate example file variations for each block variable in a template
 * @param template The template string
 * @param snippetKey The snippet key
 * @param baseContext The base context for template processing
 * @param blockVariables Array of block variables
 * @param version The version number
 * @returns Object with variations and file contents to write
 */
export function generateBlockVariations(
  template: string,
  snippetKey: string,
  baseContext: BaseContext,
  blockVariables: string[],
  version: string,
): BlockVariationFiles {
  // Create an object to store information about each variation
  const variations: BlockVariations = {};
  const files: FileContent[] = [];

  // Group block variables by their name (without # or ^ prefix)
  const blockGroups: { [varName: string]: string[] } = {};

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

  // Generate variations for each block group
  for (const [varName, blockVars] of Object.entries(blockGroups)) {
    // Check if there's a standard (#) or inverted (^) block for this variable
    const hasStandardBlock = blockVars.some(v => v.startsWith("#"));
    const hasInvertedBlock = blockVars.some(v => v.startsWith("^"));

    // Create standard block variation if it exists
    if (hasStandardBlock) {
      // Get customized context for this block variation
      const standardContext = getSnippetContext(snippetKey, `#${varName}`);

      // Process template with standard context
      const standardCode = processTemplate(template, standardContext);

      // Apply code transformations using the utility
      const transformedStandardCode = CodeTransformer.applyCommonTransforms(
        standardCode,
      );

      // Create file content with header
      const standardContent = `${
        generateFileHeader(snippetKey, `Variation: #${varName}`)
      }
${transformedStandardCode}`;

      // Add to files collection with variation suffix
      const variationKey = `${snippetKey}_#${varName}`;
      files.push({
        path: `typescript/${version}/${variationKey}.ts`,
        content: standardContent,
      });

      // Create optimized variable list for variations
      const variationVariables = createVariationVariables(blockVariables);
      variations[variationKey] = {
        variables: variationVariables,
        code: standardCode.trim(), // Include the original generated code content
      };

      // Log message can be enabled in production but disabled in tests
      // eslint-disable-next-line no-console
      console.log(`✓ Prepared #${varName} variation for ${snippetKey}`);
    }

    // Create inverted block variation if it exists
    if (hasInvertedBlock) {
      // Get customized context for this block variation
      const invertedContext = getSnippetContext(snippetKey, `^${varName}`);

      // Process template with inverted context
      const invertedCode = processTemplate(template, invertedContext);

      // Apply code transformations using the utility
      const transformedInvertedCode = CodeTransformer.applyCommonTransforms(
        invertedCode,
      );

      // Create file content with header
      const invertedContent = `${
        generateFileHeader(snippetKey, `Variation: ^${varName}`)
      }
${transformedInvertedCode}`;

      // Add to files collection with variation suffix
      const variationKey = `${snippetKey}_^${varName}`;
      files.push({
        path: `typescript/${version}/${variationKey}.ts`,
        content: invertedContent,
      });

      // Create optimized variable list for variations
      const variationVariables = createVariationVariables(blockVariables);
      variations[variationKey] = {
        variables: variationVariables,
        code: invertedCode.trim(), // Include the original generated code content
      };

      // Log message can be enabled in production but disabled in tests
      // eslint-disable-next-line no-console
      console.log(`✓ Prepared ^${varName} variation for ${snippetKey}`);
    }
  }
  return { variations, files };
}
