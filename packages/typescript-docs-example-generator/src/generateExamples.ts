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

import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import fs from "fs/promises";
import path from "path";
import {
  CodeTransformer,
  extractHandlebarsVariables,
  FileWriter,
  findBlockVariables,
  generateBlockVariations,
  generateClientFile,
  generateFileHeader,
  getSnippetContext,
  HierarchyBuilder,
  processTemplate,
} from "./utils/index.js";

/**
 * Generate TypeScript examples from SDK documentation templates
 * @param outputDir - Directory to output the generated examples
 * @param hierarchyOutputPath - Path to write the hierarchy TypeScript file
 * @param versions - Array of versions to generate examples for. Defaults to all versions > 2.0.0
 */
export async function generateExamples(
  outputDir: string,
  hierarchyOutputPath: string,
  versions: string[] = ["2.0.0", "2.1.0", "2.4.0"],
): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log("Generating examples from typescript-sdk-docs...");

    // Get all available versions and filter for supported ones
    const availableVersions = Object.keys(
      TYPESCRIPT_OSDK_SNIPPETS.versions || {},
    );
    const versionsToGenerate = versions.filter(v =>
      availableVersions.includes(v)
    );

    if (versionsToGenerate.length === 0) {
      throw new Error(
        `No supported versions found in ${
          versions.join(", ")
        }. Available versions: ${availableVersions.join(", ")}`,
      );
    }

    // eslint-disable-next-line no-console
    console.log(
      `Generating examples for versions: ${versionsToGenerate.join(", ")}`,
    );

    // Delete existing examples directory if it exists
    try {
      await fs.rm(outputDir, { recursive: true, force: true });
      // eslint-disable-next-line no-console
      console.log("✓ Cleaned up existing examples directory");
    } catch (err) {
      // Directory might not exist, which is fine
    }

    // Initialize utilities for batch processing
    const fileWriter = new FileWriter({ outputDir });
    const hierarchyBuilder = new HierarchyBuilder();

    // Generate examples for each version
    for (const version of versionsToGenerate) {
      const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;

      if (!snippets) {
        // eslint-disable-next-line no-console
        console.warn(`⚠️ No snippets found for version ${version}, skipping...`);
        continue;
      }

      // eslint-disable-next-line no-console
      console.log(`\n📝 Collecting examples for version ${version}...`);

      // Generate examples for each snippet in this version
      generateAllExamples(
        snippets,
        version,
        fileWriter,
        hierarchyBuilder,
      );

      // Generate client.ts file for this version
      const clientFile = generateClientFile(version);
      fileWriter.addFile(clientFile.path, clientFile.content);
    }

    // Generate both hierarchy files using the builder
    // eslint-disable-next-line no-console
    console.log("📝 Generating hierarchy files...");
    const { flat, nested } = hierarchyBuilder.generateHierarchyFiles();

    // Add hierarchy files to the writer
    fileWriter.addFile(
      path.relative(outputDir, hierarchyOutputPath),
      flat,
    );
    fileWriter.addFile(
      path.relative(
        outputDir,
        hierarchyOutputPath.replace(
          "typescriptOsdkExamples.ts",
          "typescriptOsdkContext.ts",
        ),
      ),
      nested,
    );

    // Batch write all files
    // eslint-disable-next-line no-console
    console.log(`📝 Writing ${fileWriter.getQueueSize()} files...`);
    await fileWriter.writeAll();

    // Display statistics
    const stats = hierarchyBuilder.getStats();
    // eslint-disable-next-line no-console
    console.log(
      `✓ Successfully generated ${stats.totalExamples} examples (${stats.variations} variations) across ${stats.versions} versions`,
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating example snippets:", error);
    throw error;
  }
}

/**
 * Generate examples for all snippets using the new utility approach
 * This function processes each snippet template in the TYPESCRIPT_OSDK_SNIPPETS object,
 * applies context variables using Handlebars, and collects files for batch writing.
 * It uses HierarchyBuilder for single-pass hierarchy generation.
 */
function generateAllExamples(
  snippets: any,
  version: string,
  fileWriter: FileWriter,
  hierarchyBuilder: HierarchyBuilder,
): void {
  // Create index file content using the common header utility
  let indexContent = `${
    generateFileHeader(`index`, `TYPESCRIPT Examples - SDK Version ${version}`)
  }
// This file was automatically generated from the typescript-sdk-docs package

`;

  // Process each snippet
  for (const [snippetKey, snippetArray] of Object.entries(snippets)) {
    if (!Array.isArray(snippetArray) || snippetArray.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`No template found for ${snippetKey}, skipping...`);
      continue;
    }

    const snippetData = snippetArray[0];
    if (!snippetData?.template) {
      // eslint-disable-next-line no-console
      console.log(`No template content for ${snippetKey}, skipping...`);
      continue;
    }

    // Skip templates that only contain upgrade comments or invalid syntax
    const templateContent = snippetData.template.trim();
    if (
      templateContent.startsWith("// Upgrade to")
      || templateContent.includes("...")
      || templateContent.includes("// Placeholder")
    ) {
      // eslint-disable-next-line no-console
      console.log(
        `Skipping ${snippetKey} - contains upgrade comment or placeholder syntax`,
      );
      continue;
    }

    // Get the customized context for this specific snippet
    const context = getSnippetContext(snippetKey);

    // Extract and store the handlebars variables for this snippet
    const variables = extractHandlebarsVariables(snippetData.template);

    // Check if this snippet has block variables
    const blockVariables = findBlockVariables(variables);

    if (blockVariables.length > 0) {
      // For block templates, only generate variations, not base files
      // Generate variations for each block variable
      const { variations, files } = generateBlockVariations(
        snippetData.template,
        snippetKey,
        context,
        blockVariables,
        version,
      );

      // Add files to the writer
      fileWriter.addFiles(files);

      // Add each variation to hierarchy builder
      for (const [variationKey, variation] of Object.entries(variations)) {
        // Parse the variation key to get base name and variation
        const underscoreIndex = variationKey.indexOf("_");
        const baseName = variationKey.substring(0, underscoreIndex);
        const variationSuffix = variationKey.substring(underscoreIndex + 1);

        hierarchyBuilder.addVariation(
          version,
          baseName,
          variationSuffix,
          variation.code,
        );
      }

      // Add to index for variations only (no base file)
      indexContent += `// ${snippetKey} (variations only)`;

      // Group block variables by name (without prefix)
      const blockVarsByName: { [varName: string]: string[] } = {};
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
            indexContent +=
              `\n// See: ./${snippetKey}_${prefix}${varName}.ts (Standard block: ${varName} = true)`;
          } else if (prefix === "^") {
            indexContent +=
              `\n// See: ./${snippetKey}_${prefix}${varName}.ts (Inverted block: ${varName} = false)`;
          }
        }
      }

      indexContent += "\n\n";
    } else {
      // Process template with provided context
      const processedCode = processTemplate(snippetData.template, context);

      // Apply code transformations using the utility
      const transformedCode = CodeTransformer.applyCommonTransforms(
        processedCode,
      );

      // Create file content with header
      const fileContent = `${
        generateFileHeader(snippetKey)
      }\n${transformedCode}`;

      // Add file to the writer
      fileWriter.addFile(`typescript/${version}/${snippetKey}.ts`, fileContent);

      // Add to hierarchy builder
      hierarchyBuilder.addExample(version, snippetKey, processedCode.trim());

      // Add to index
      indexContent += `// ${snippetKey}\n// See: ./${snippetKey}.ts\n\n`;

      // eslint-disable-next-line no-console
      console.log(`✓ Prepared example for ${snippetKey}`);
    }
  }

  // Add the index file to the writer
  fileWriter.addFile(`typescript/${version}/index.ts`, indexContent);

  // eslint-disable-next-line no-console
  console.log(`✓ All examples collected for version ${version}`);
}
