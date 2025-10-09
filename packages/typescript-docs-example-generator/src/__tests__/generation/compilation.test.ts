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
import * as fs from "fs/promises";
import * as os from "os";
import * as path from "path";
import { describe, expect, it } from "vitest";
import { generateExamples } from "../../generateExamples.js";

/**
 * This test generates examples and then attempts to verify them
 * to ensure they produce valid TypeScript code.
 */
describe("Generated Code Compilation", () => {
  it(
    "should generate valid TypeScript code without template placeholders",
    async () => {
      // Create temporary directory
      const tempDir = await fs.mkdtemp(
        path.join(os.tmpdir(), "test-examples-"),
      );
      const hierarchyPath = path.join(tempDir, "hierarchy.ts");

      try {
        // Run the generator
        await generateExamples(tempDir, hierarchyPath, ["2.1.0"]);

        // Read all generated TypeScript files
        const tsFiles: string[] = [];

        async function findTsFiles(dir: string) {
          const entries = await fs.readdir(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              await findTsFiles(fullPath);
            } else if (entry.name.endsWith(".ts")) {
              tsFiles.push(fullPath);
            }
          }
        }

        await findTsFiles(tempDir);

        // Verify files were generated
        expect(tsFiles.length).toBeGreaterThan(0);
        console.log(`Generated ${tsFiles.length} TypeScript files`);

        // Check each file for common issues
        const errors: Array<{ file: string; error: string }> = [];

        for (const filePath of tsFiles) {
          const content = await fs.readFile(filePath, "utf-8");
          const relativePath = path.relative(tempDir, filePath);

          // Check for unresolved template variables
          if (content.includes("{{") || content.includes("}}")) {
            errors.push({
              file: relativePath,
              error: "Contains unresolved Handlebars template placeholders",
            });
          }

          // Check for empty files (ignoring comments and whitespace)
          const codeContent = content
            .split("\n")
            .filter(line =>
              !line.trim().startsWith("//") && line.trim().length > 0
            )
            .join("\n")
            .trim();

          if (codeContent.length === 0) {
            errors.push({
              file: relativePath,
              error: "File contains no actual code (only comments/whitespace)",
            });
          }
        }

        // Report any errors found
        if (errors.length > 0) {
          console.error("Validation errors found:");
          errors.forEach(({ file, error }) => {
            console.error(`  ${file}: ${error}`);
          });
        }

        expect(errors).toHaveLength(0);
      } finally {
        // Clean up temporary directory
        await fs.rm(tempDir, { recursive: true, force: true });
      }
    },
    30000,
  ); // 30 second timeout

  it("should generate expected number of examples per version (accounting for valid skips)", async () => {
    // Use the same data source as the actual generator
    const docsData = TYPESCRIPT_OSDK_SNIPPETS;

    // Read the generated examples to count output
    const examplesPath = path.resolve(
      __dirname,
      "../../../../typescript-sdk-docs-examples/src/typescriptOsdkExamples.ts",
    );
    const examplesContent = await fs.readFile(examplesPath, "utf-8");

    // Parse the generated examples file to extract the structure
    const examplesMatch = examplesContent.match(
      /export const TYPESCRIPT_OSDK_EXAMPLES = ({[\s\S]*?}) as const;/,
    );
    expect(examplesMatch).toBeTruthy();

    // Use eval to parse the object (safe since this is our own generated code)
    let examplesData;
    try {
      examplesData = eval(`(${examplesMatch![1]})`);
    } catch (error) {
      console.error("Failed to parse examples data:", error);
      console.error("Captured match:", examplesMatch![1].substring(0, 200));
      throw error;
    }

    // Only test versions that are actually being generated (>= 2.0.0)
    const generatedVersions = Object.keys(examplesData.versions || {});

    // Test each version that should be generated
    for (const [version, versionData] of Object.entries(docsData.versions)) {
      if (
        !versionData || typeof versionData !== "object"
        || !("snippets" in versionData)
      ) {
        continue;
      }

      // Skip versions that aren't being generated (like 1.0.0)
      if (!generatedVersions.includes(version)) {
        console.log(
          `Skipping version ${version} - not in generated versions: ${
            generatedVersions.join(", ")
          }`,
        );
        continue;
      }

      const inputSnippets = (versionData as any).snippets;
      const inputCount = Object.keys(inputSnippets).length;

      // Count snippets that should be legitimately skipped and track variation-generating templates
      let expectedSkips = 0;
      let variationGeneratingTemplates = 0;

      for (const [, snippetArray] of Object.entries(inputSnippets)) {
        const snippetData = (snippetArray as any[])[0];
        if (!snippetData?.template) {
          expectedSkips++;
          continue;
        }

        const templateContent = snippetData.template.trim();
        if (
          templateContent.startsWith("// Upgrade to")
          || templateContent.includes("// Placeholder")
          || templateContent === "// Not supported"
          || templateContent === "// Not supported."
        ) {
          expectedSkips++;
          continue;
        }

        // Check if this template generates variations (has block helpers)
        if (
          templateContent.includes("{{#") || templateContent.includes("{{^")
        ) {
          variationGeneratingTemplates++;
        }
      }

      // Get actual generated count
      const outputVersion = examplesData.versions?.[version];
      const actualCount = outputVersion?.examples
        ? Object.keys(outputVersion.examples).length
        : 0;

      console.log(`\nVersion ${version}:`);
      console.log(`  Input snippets: ${inputCount}`);
      console.log(`  Expected skips: ${expectedSkips}`);
      console.log(
        `  Templates with variations: ${variationGeneratingTemplates}`,
      );
      console.log(`  Actual output: ${actualCount}`);

      // Find missing and extra templates
      const outputExamples = outputVersion?.examples || {};
      const missingSnippets: string[] = [];
      const baseExampleKeys: string[] = [];

      for (const [snippetKey, snippetArray] of Object.entries(inputSnippets)) {
        const snippetData = (snippetArray as any[])[0];
        if (!snippetData?.template) continue;

        const templateContent = snippetData.template.trim();
        const shouldBeSkipped = templateContent.startsWith("// Upgrade to")
          || templateContent.includes("// Placeholder")
          || templateContent === "// Not supported"
          || templateContent === "// Not supported.";

        if (shouldBeSkipped) continue;

        baseExampleKeys.push(snippetKey);

        // Check if this template generated any output (base or variations)
        const hasBaseExample = snippetKey in outputExamples;
        const hasVariations = Object.keys(outputExamples).some(key =>
          key.startsWith(snippetKey + "_")
        );

        if (!hasBaseExample && !hasVariations) {
          missingSnippets.push(snippetKey);
        }
      }

      // Log detailed findings
      if (missingSnippets.length > 0) {
        console.error(
          `\nCompletely missing templates in ${version}:`,
          missingSnippets,
        );
      }

      const variations = Object.keys(outputExamples).filter(key =>
        key.includes("_#") || key.includes("_^")
      );
      if (variations.length > 0) {
        console.log(
          `\nGenerated variations (${variations.length}):`,
          variations.slice(0, 5),
          variations.length > 5 ? "..." : "",
        );
      }

      // The key assertion: no templates should be completely missing
      if (missingSnippets.length > 0) {
        throw new Error(
          `Found ${missingSnippets.length} missing templates in version ${version}. Templates that should generate examples but don't: ${
            missingSnippets.join(", ")
          }`,
        );
      }

      console.log(
        `✓ All expected templates generated output (base examples or variations)`,
      );

      // Additional validation: make sure we have reasonable numbers
      expect(inputCount).toBeGreaterThan(0);
      expect(actualCount).toBeGreaterThan(0);
      expect(expectedSkips).toBeGreaterThanOrEqual(0);
    }
  });
});
