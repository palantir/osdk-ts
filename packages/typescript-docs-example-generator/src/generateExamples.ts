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
          filePath: string;
          code: string;
        };
      };
    };
  };
}

interface SnippetVariables {
  [snippetKey: string]: string[];
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
 * @param snippetVariablesPath - Path to write the snippetVariables.json file
 * @param hierarchyOutputPath - Path to write the hierarchy TypeScript file
 */
export async function generateExamples(
  outputDir: string,
  snippetVariablesPath: string,
  hierarchyOutputPath: string,
): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log("Generating examples from typescript-sdk-docs...");

    // Get snippets from version 2.0.0
    const version = "2.0.0";
    const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;

    if (!snippets) {
      throw new Error(`No snippets found for version ${version}`);
    }

    // Delete existing examples directory if it exists
    try {
      await fs.rm(outputDir, { recursive: true, force: true });
      // eslint-disable-next-line no-console
      console.log("✓ Cleaned up existing examples directory");
    } catch (err) {
      // Directory might not exist, which is fine
    }

    // Ensure output directory exists
    await fs.mkdir(path.join(outputDir, "typescript", version), {
      recursive: true,
    });

    // Generate examples for each snippet
    await generateAllExamples(
      snippets,
      version,
      outputDir,
      snippetVariablesPath,
      hierarchyOutputPath,
    );

    // Generate client.ts file
    await generateClientFile(version, outputDir);

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
 * It also creates an index file and a snippetVariables.json file.
 */
async function generateAllExamples(
  snippets: any,
  version: string,
  outputDir: string,
  snippetVariablesPath: string,
  hierarchyOutputPath: string,
): Promise<void> {
  // Create a snippetVariables object to track handlebars variables
  const snippetVariables: SnippetVariables = {};

  // Create examples hierarchy object to track generated files
  const examplesHierarchy: ExamplesHierarchy = {
    kind: "examples",
    versions: {
      [version]: {
        examples: {},
      },
    },
  };

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
      const variations: BlockVariations = await generateBlockVariations(
        snippetData.template,
        snippetKey,
        context,
        blockVariables,
        version,
        outputDir,
      );

      // Add each variation to snippetVariables and hierarchy
      for (const [variationKey, variation] of Object.entries(variations)) {
        snippetVariables[variationKey] = variation.variables;

        // Add to hierarchy with trimmed code content
        examplesHierarchy.versions[version].examples[variationKey] = {
          filePath: `examples/typescript/${version}/${variationKey}.ts`,
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
        filePath: `examples/typescript/${version}/${snippetKey}.ts`,
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

  // Write the snippetVariables.json file
  await fs.writeFile(
    snippetVariablesPath,
    JSON.stringify(snippetVariables, null, 2),
    "utf8",
  );
  // eslint-disable-next-line no-console
  console.log("✓ Generated snippetVariables.json");

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
  console.log("✓ Generated typescriptOsdkExamples.ts");

  // eslint-disable-next-line no-console
  console.log("✓ All examples generated");
}
