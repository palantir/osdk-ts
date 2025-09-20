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

import {
  type GeneratorError,
  toErrorResult,
} from "../errors/generator-errors.js";
import type { BaseTemplateContext } from "../types/context.js";
import type { BlockVariable, Result } from "../types/index.js";
import { getSnippetContext } from "./baseContext.js";
import { CodeTransformer } from "./codeTransformer.js";
import type { FileContent } from "./fileWriter.js";
import { generateFileHeader } from "./generateFileHeader.js";
import { processTemplateV2 } from "./processTemplate.v2.js";

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
 * @param blocks All block variables from template
 * @returns Deduplicated list of variables for variations
 */
function createVariationVariables(blocks: BlockVariable[]): string[] {
  // Extract variable names from blocks (remove # or ^ prefix)
  const regularVariables = blocks.map(block => block.name.replace(/^[#^]/, ""));

  const commonVariables = [
    "linkedObjectType",
    "packageName",
    "sourceObjectType",
    "linkApiName",
  ];

  return [...new Set([...regularVariables, ...commonVariables])];
}

/**
 * Create a single block variation (standard or inverted)
 * @param template The template string
 * @param snippetKey The snippet key
 * @param varName The variable name (without prefix)
 * @param prefix Either '#' for standard or '^' for inverted
 * @param blocks Array of all block variables
 * @param version The version number
 * @returns Result with variation key, file content, and variation data
 */
function createBlockVariation(
  template: string,
  snippetKey: string,
  varName: string,
  prefix: "#" | "^",
  blocks: BlockVariable[],
  version: string,
): Result<
  {
    variationKey: string;
    fileContent: FileContent;
    variation: BlockVariationResult;
  },
  GeneratorError
> {
  // Get customized context for this block variation
  const context = getSnippetContext(snippetKey, `${prefix}${varName}`);

  // Process template with context using Result-based approach
  const processResult = processTemplateV2(
    template,
    context,
    { templateId: `${snippetKey}${prefix}${varName}`, useCache: true },
  );

  if (!processResult.success) {
    return toErrorResult(
      new Error(
        `Failed to process block variation ${snippetKey}${prefix}${varName}: ${processResult.error.message}`,
      ),
    );
  }

  const code = processResult.value;

  // Apply code transformations using the utility
  const transformedCode = CodeTransformer.applyCommonTransforms(code);

  // Create file content with header
  const content = `${
    generateFileHeader(snippetKey, `Variation: ${prefix}${varName}`)
  }\n${transformedCode}`;

  // Create variation key and file path
  const variationKey = `${snippetKey}_${prefix}${varName}`;
  const fileContent: FileContent = {
    path: `typescript/${version}/${variationKey}.ts`,
    content,
  };

  // Create optimized variable list for variations
  const variationVariables = createVariationVariables(blocks);
  const variation: BlockVariationResult = {
    variables: variationVariables,
    code: code.trim(),
  };

  // Log message can be enabled in production but disabled in tests
  // eslint-disable-next-line no-console
  console.log(`✓ Prepared ${prefix}${varName} variation for ${snippetKey}`);

  return { success: true, value: { variationKey, fileContent, variation } };
}

/**
 * Generate example file variations for each block variable in a template
 * @param template The template string
 * @param snippetKey The snippet key
 * @param baseContext The base context for template processing
 * @param blocks Array of block variables from TemplateAnalyzer
 * @param version The version number
 * @returns Result with variations and file contents to write, or error if template processing fails
 */
export function generateBlockVariations(
  template: string,
  snippetKey: string,
  baseContext: BaseTemplateContext,
  blocks: BlockVariable[],
  version: string,
): Result<BlockVariationFiles, GeneratorError> {
  // Create an object to store information about each variation
  const variations: BlockVariations = {};
  const files: FileContent[] = [];

  // Group block variables by their name (without # or ^ prefix)
  const blockGroups: { [varName: string]: BlockVariable[] } = {};

  for (const block of blocks) {
    // Extract variable name without prefix
    const varName = block.name.replace(/^[#^]/, "");

    if (!blockGroups[varName]) {
      blockGroups[varName] = [];
    }
    blockGroups[varName].push(block);
  }

  // Generate variations for each block group
  for (const [varName, blockVars] of Object.entries(blockGroups)) {
    // Check if there's a standard (#) or inverted (^) block for this variable
    const hasStandardBlock = blockVars.some(block => !block.isInverted);
    const hasInvertedBlock = blockVars.some(block => block.isInverted);

    // Create standard block variation if it exists
    if (hasStandardBlock) {
      const standardResult = createBlockVariation(
        template,
        snippetKey,
        varName,
        "#",
        blocks,
        version,
      );

      if (!standardResult.success) {
        return standardResult;
      }

      const { variationKey, fileContent, variation } = standardResult.value;
      files.push(fileContent);
      variations[variationKey] = variation;
    }

    // Create inverted block variation if it exists
    if (hasInvertedBlock) {
      const invertedResult = createBlockVariation(
        template,
        snippetKey,
        varName,
        "^",
        blocks,
        version,
      );

      if (!invertedResult.success) {
        return invertedResult;
      }

      const { variationKey, fileContent, variation } = invertedResult.value;
      files.push(fileContent);
      variations[variationKey] = variation;
    }
  }
  return { success: true, value: { variations, files } };
}
