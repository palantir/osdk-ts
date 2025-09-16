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
  extractHandlebarsVariables,
  findBlockVariables,
  generateBlockVariations,
  generateClientFile,
  generateFileHeader,
  getSnippetContext,
  processTemplate,
} from "./utils/index.js";

// Types
interface ExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: {
      examples: {
        [exampleName: string]: {
          code: string;
        };
      };
    };
  };
}

interface BlockVariationResult {
  variables: string[];
  code: string;
}

interface BlockVariations {
  [variationKey: string]: BlockVariationResult;
}

/**
 * Generate TypeScript examples from SDK documentation templates
 * @param outputDir - Directory to output the generated examples
 * @param hierarchyOutputPath - Path to write the hierarchy TypeScript file
 * @param versions - Array of versions to generate examples for. Defaults to all versions > 2.0.0
 */
export async function generateExamples(
  outputDir: string,
  hierarchyOutputPath: string,
  versions: string[] = ["2.1.0", "2.4.0"],
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

    // Generate examples for each version
    for (const version of versionsToGenerate) {
      const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;

      if (!snippets) {
        // eslint-disable-next-line no-console
        console.warn(`⚠️ No snippets found for version ${version}, skipping...`);
        continue;
      }

      // eslint-disable-next-line no-console
      console.log(`\n📝 Generating examples for version ${version}...`);

      // Ensure output directory exists for this version
      await fs.mkdir(path.join(outputDir, "typescript", version), {
        recursive: true,
      });

      // Generate examples for each snippet in this version
      await generateAllExamples(
        snippets,
        version,
        outputDir,
        hierarchyOutputPath,
        versionsToGenerate.length > 1, // isMultiVersion flag
        versionsToGenerate,
      );

      // Generate client.ts file for this version
      await generateClientFile(version, outputDir);
    }

    // Generate the nested context file after all versions are processed
    // eslint-disable-next-line no-console
    console.log("About to generate nested context...");
    try {
      await generateNestedContextFromFile(hierarchyOutputPath);
      // eslint-disable-next-line no-console
      console.log("Finished generating nested context.");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error in nested context generation:", error);
    }

    // eslint-disable-next-line no-console
    console.log("✓ Examples generated successfully");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating example snippets:", error);
    throw error;
  }
}

/**
 * Generate examples for all snippets
 * This function processes each snippet template in the TYPESCRIPT_OSDK_SNIPPETS object,
 * applies context variables using Handlebars, and generates example files.
 * It also creates an index file and examples hierarchy.
 */
async function generateAllExamples(
  snippets: any,
  version: string,
  outputDir: string,
  hierarchyOutputPath: string,
  isMultiVersion: boolean = false,
  versionsToGenerate: string[] = [],
): Promise<void> {
  // Create or update examples hierarchy object to track generated files
  let examplesHierarchy: ExamplesHierarchy;

  if (isMultiVersion) {
    // For multi-version generation, try to read existing hierarchy
    try {
      const existingContent = await fs.readFile(hierarchyOutputPath, "utf8");
      const match = existingContent.match(
        /export const TYPESCRIPT_OSDK_EXAMPLES = (.*?) as const;/s,
      );
      if (match) {
        examplesHierarchy = JSON.parse(match[1]);
      } else {
        throw new Error("No existing hierarchy found");
      }
    } catch {
      // Create new hierarchy if none exists
      examplesHierarchy = {
        kind: "examples",
        versions: {},
      };
    }

    // Ensure this version exists in the hierarchy
    if (!examplesHierarchy.versions[version]) {
      examplesHierarchy.versions[version] = { examples: {} };
    }
  } else {
    // Single version generation
    examplesHierarchy = {
      kind: "examples",
      versions: {
        [version]: {
          examples: {},
        },
      },
    };
  }

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

    // Skip tracking variables for snippetVariables.json as it's no longer needed

    if (blockVariables.length > 0) {
      // For block templates, only generate variations, not base files
      // Generate variations for each block variable
      const variations: BlockVariations = await generateBlockVariations(
        snippetData.template,
        snippetKey,
        context,
        blockVariables,
        version,
        outputDir,
      );

      // Add each variation to hierarchy
      for (const [variationKey, variation] of Object.entries(variations)) {
        // Add to hierarchy with trimmed code content
        examplesHierarchy.versions[version].examples[variationKey] = {
          code: variation.code, // Include the actual generated code content
        };
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

      // Create file content with header
      const fileContent = `${generateFileHeader(snippetKey)}\n${processedCode}`;

      // Write to file
      const filePath = path.join(
        outputDir,
        "typescript",
        version,
        `${snippetKey}.ts`,
      );
      await fs.writeFile(filePath, fileContent);

      // Add to hierarchy with trimmed code content
      examplesHierarchy.versions[version].examples[snippetKey] = {
        code: processedCode.trim(), // Include the actual generated code content
      };

      // Add to index
      indexContent += `// ${snippetKey}\n// See: ./${snippetKey}.ts\n\n`;

      // eslint-disable-next-line no-console
      console.log(`✓ Generated example for ${snippetKey}`);
    }
  }

  // Write the index file
  await fs.writeFile(
    path.join(outputDir, "typescript", version, "index.ts"),
    indexContent,
  );

  // snippetVariables.json generation removed as it was not being used

  // Write the examples hierarchy as a TypeScript file for easier importing
  const hierarchyContent = `/*
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
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/**
 * Generated examples hierarchy for SDK documentation
 * This provides a mapping of example names to their file paths
 * similar to how TYPESCRIPT_OSDK_SNIPPETS works for templates
 */
export const TYPESCRIPT_OSDK_EXAMPLES = ${
    JSON.stringify(examplesHierarchy, null, 2)
  } as const;
`;

  await fs.writeFile(
    hierarchyOutputPath,
    hierarchyContent,
    "utf8",
  );
  // eslint-disable-next-line no-console
  console.log(`✓ Generated typescriptOsdkExamples.ts for version ${version}`);

  // eslint-disable-next-line no-console
  console.log(`✓ All examples generated for version ${version}`);
}

/**
 * Generate nested context structure by reading the flat hierarchy file
 */
async function generateNestedContextFromFile(
  hierarchyOutputPath: string,
): Promise<void> {
  // eslint-disable-next-line no-console
  console.log("📝 Generating nested context from flat hierarchy...");
  try {
    // Read the generated flat hierarchy file
    const flatContent = await fs.readFile(hierarchyOutputPath, "utf8");

    // Extract the TYPESCRIPT_OSDK_EXAMPLES object from the file
    const match = flatContent.match(
      /export const TYPESCRIPT_OSDK_EXAMPLES = (.*) as const;/s,
    );
    if (!match) {
      throw new Error(
        "Could not find TYPESCRIPT_OSDK_EXAMPLES in the flat hierarchy file",
      );
    }

    const examplesHierarchy: ExamplesHierarchy = JSON.parse(match[1]);

    // Transform flat structure to nested structure
    const nestedContext = {
      kind: "examples",
      versions: {} as Record<string, any>,
    };

    for (
      const [version, versionData] of Object.entries(examplesHierarchy.versions)
    ) {
      nestedContext.versions[version] = {};

      for (
        const [exampleName, exampleData] of Object.entries(versionData.examples)
      ) {
        // Split on underscore to find base name and variation
        const underscoreIndex = exampleName.indexOf("_");

        if (underscoreIndex === -1) {
          // Direct example (no variation)
          nestedContext.versions[version][exampleName] = {
            code: exampleData.code,
          };
        } else {
          // Template variation
          const baseName = exampleName.substring(0, underscoreIndex);
          const variationSuffix = exampleName.substring(underscoreIndex + 1);

          // Initialize base name if needed
          if (!nestedContext.versions[version][baseName]) {
            nestedContext.versions[version][baseName] = {};
          }

          // Add the variation
          nestedContext.versions[version][baseName][variationSuffix] = {
            code: exampleData.code,
          };
        }
      }
    }

    // Generate the nested context file
    const contextOutputPath = hierarchyOutputPath.replace(
      "typescriptOsdkExamples.ts",
      "typescriptOsdkContext.ts",
    );

    const contextContent = `/*
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
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/**
 * Metadata for a single example
 */
export interface NestedExampleMetadata {
  code: string;
}

/**
 * A nested example entry that can either be a direct example or contain nested variations
 */
export type NestedExampleEntry = NestedExampleMetadata | {
  [variationKey: string]: NestedExampleMetadata | NestedExampleEntry;
};

/**
 * Version-specific nested examples structure
 */
export interface NestedVersionExamples {
  [exampleName: string]: NestedExampleEntry;
}

/**
 * Complete nested examples hierarchy
 */
export interface NestedExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: NestedVersionExamples;
  };
}

/**
 * The nested OSDK documentation context with template variations grouped under their base names.
 * Generated from TYPESCRIPT_OSDK_EXAMPLES.
 */
export const TYPESCRIPT_OSDK_CONTEXT: NestedExamplesHierarchy = ${
      JSON.stringify(nestedContext, null, 2)
    } as const;
`;

    await fs.writeFile(contextOutputPath, contextContent, "utf8");

    // eslint-disable-next-line no-console
    console.log("✓ Generated typescriptOsdkContext.ts");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating nested context:", error);
    throw error;
  }
}
