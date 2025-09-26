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
import { TemplateAnalyzer } from "./analyzer/template-analyzer.js";
import {
  type GeneratorError,
  toErrorResult,
} from "./errors/generator-errors.js";
import type {
  ExampleCollection,
  GenerationReport,
  GenerationSummary,
  ProcessingError,
  Result,
} from "./types/index.js";
import {
  contextToRecord,
  processingErrorToError,
} from "./utils/ast-helpers.js";
import { BatchProcessor } from "./utils/batch-processor.js";
import {
  CodeTransformer,
  FileWriter,
  generateBlockVariations,
  generateClientFile,
  generateFileHeader,
  getSnippetContext,
  HierarchyBuilder,
} from "./utils/index.js";
import { processTemplateV2 } from "./utils/processTemplate.v2.js";
import { TemplateValidator } from "./validation/template-validator.js";

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
): Promise<Result<GenerationReport, GeneratorError>> {
  const startTime = Date.now();
  const report: GenerationReport = {
    successful: 0,
    failed: 0,
    errors: [],
    warnings: [],
    versions: [],
    totalVariations: 0,
  };

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
      return toErrorResult(
        new Error(
          `No supported versions found in ${
            versions.join(", ")
          }. Available versions: ${availableVersions.join(", ")}`,
        ),
      );
    }

    // eslint-disable-next-line no-console
    console.log(
      `Generating examples for versions: ${versionsToGenerate.join(", ")}`,
    );
    report.versions = versionsToGenerate;

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
    const analyzer = new TemplateAnalyzer();
    const templateValidator = new TemplateValidator();

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
      const versionResult = generateAllExamplesForVersion(
        snippets,
        version,
        fileWriter,
        hierarchyBuilder,
        analyzer,
        templateValidator,
      );

      if (!versionResult.success) {
        report.errors.push({
          templateId: `version-${version}`,
          error: versionResult.error as GeneratorError,
        });
        continue;
      }

      // Update report with results
      report.successful += versionResult.value.successful;
      report.failed += versionResult.value.failed;
      report.totalVariations += versionResult.value.totalVariations;

      // Add version prefix to error template IDs for better reporting
      const versionErrors = versionResult.value.errors.map(error => ({
        ...error,
        templateId: `${version}/${error.templateId}`,
      }));
      report.errors.push(...versionErrors);
      report.warnings.push(...versionResult.value.warnings);

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
    const processingTime = Date.now() - startTime;
    // eslint-disable-next-line no-console
    console.log(
      `✓ Successfully generated ${stats.totalExamples} examples (${stats.variations} variations) across ${stats.versions} versions in ${processingTime}ms`,
    );

    // Display any warnings or errors
    if (report.warnings.length > 0) {
      // eslint-disable-next-line no-console
      console.warn(`\n⚠️  Warnings:\n${report.warnings.join("\n")}`);
    }

    if (report.failed > 0) {
      // eslint-disable-next-line no-console
      console.error(`\n❌ Failed to generate ${report.failed} examples`);
      report.errors.forEach(err => {
        // eslint-disable-next-line no-console
        console.error(`  - ${err.templateId}: ${err.error.message}`);
        if (err.error.getSuggestion) {
          // eslint-disable-next-line no-console
          console.error(`    Suggestion: ${err.error.getSuggestion()}`);
        }
      });

      const firstError = report.errors[0];
      return toErrorResult(
        new Error(
          `Template generation failed for ${report.failed} templates. First error in ${firstError.templateId}: ${firstError.error.message}`,
        ),
      );
    }

    return { success: true, value: report };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating example snippets:", error);
    return toErrorResult(error);
  }
}

/**
 * Generate examples for all snippets in a specific version using the new utility approach
 * This function processes each snippet template in the TYPESCRIPT_OSDK_SNIPPETS object,
 * applies context variables using Mustache, and collects files for batch writing.
 * It uses HierarchyBuilder for single-pass hierarchy generation.
 */
function generateAllExamplesForVersion(
  snippets: any,
  version: string,
  fileWriter: FileWriter,
  hierarchyBuilder: HierarchyBuilder,
  analyzer: TemplateAnalyzer,
  templateValidator: TemplateValidator,
): Result<GenerationSummary, ProcessingError> {
  const collection: ExampleCollection = {
    examples: new Map(),
    versions: [version],
    totalExamples: 0,
    totalVariations: 0,
  };
  const { errors, addError, hasErrors } = BatchProcessor.createErrorCollector();
  const warnings: string[] = [];
  let indexContent = `${
    generateFileHeader(`index`, `TYPESCRIPT Examples - SDK Version ${version}`)
  }
// This file was automatically generated from the typescript-sdk-docs package

`;

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

    // Analyze the template first - CRITICAL: Template analysis failures should fail the build
    const analysis = analyzer.analyze(snippetData.template);
    if (!analysis.success) {
      // DO NOT convert template parsing errors to warnings - they indicate broken templates
      // Template syntax errors should stop generation immediately
      // Convert ProcessingError to Error for error collector compatibility
      addError(snippetKey, processingErrorToError(analysis.error));
      collection.totalExamples++;
      continue;
    }

    // Extract blocks using TemplateAnalyzer
    const blocks = analysis.value.blocks;

    if (blocks.length > 0) {
      // For block templates, only generate variations, not base files
      // Generate variations for each block variable
      const blockResult = generateBlockVariations(
        snippetData.template,
        snippetKey,
        context,
        blocks,
        version,
      );

      if (!blockResult.success) {
        addError(snippetKey, blockResult.error as GeneratorError);
        collection.totalExamples++;
        continue;
      }

      const { variations, files } = blockResult.value;

      fileWriter.addFiles(files);

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
      for (const block of blocks) {
        const varName = block.name.replace(/^[#^]/, "");
        const prefix = block.isInverted ? "^" : "#";

        if (!blockVarsByName[varName]) {
          blockVarsByName[varName] = [];
        }
        blockVarsByName[varName].push(prefix);
      }

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
      const processResult = processTemplateV2(
        snippetData.template,
        context,
        { templateId: snippetKey, useCache: true },
      );

      if (!processResult.success) {
        addError(snippetKey, processResult.error as GeneratorError);
        collection.totalExamples++;
        continue;
      }

      const processedCode = processResult.value;

      // Apply code transformations using the utility
      const transformedCode = CodeTransformer.applyCommonTransforms(
        processedCode,
      );

      const fileContent = `${
        generateFileHeader(snippetKey)
      }\n${transformedCode}`;

      fileWriter.addFile(`typescript/${version}/${snippetKey}.ts`, fileContent);

      hierarchyBuilder.addExample(version, snippetKey, processedCode.trim());

      collection.examples.set(`${version}/${snippetKey}`, {
        templateId: snippetKey,
        code: transformedCode,
        metadata: {
          generatedAt: new Date(),
          context: contextToRecord(context),
          blockStates: {},
        },
      });
      collection.totalExamples++;
      indexContent += `// ${snippetKey}\n// See: ./${snippetKey}.ts\n\n`;

      // eslint-disable-next-line no-console
      console.log(`✓ Prepared example for ${snippetKey}`);
    }
  }

  fileWriter.addFile(`typescript/${version}/index.ts`, indexContent);

  // eslint-disable-next-line no-console
  console.log(`✓ All examples collected for version ${version}`);

  // Convert BatchProcessor errors back to expected format
  const formattedErrors = errors.map(error => ({
    templateId: error.id,
    error: error.error as GeneratorError,
  }));

  return {
    success: true,
    value: {
      successful: collection.totalExamples - formattedErrors.length,
      failed: formattedErrors.length,
      errors: formattedErrors,
      warnings,
      totalVariations: collection.totalVariations,
    },
  };
}
