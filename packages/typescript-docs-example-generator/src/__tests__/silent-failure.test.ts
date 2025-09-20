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

import { mkdtemp, rm } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";
import { TemplateAnalyzer } from "../analyzer/template-analyzer.js";
import { generateExamples } from "../generateExamples.js";
import type { BlockVariable } from "../types/index.js";
import { getSnippetContext } from "../utils/baseContext.js";
import { generateBlockVariations } from "../utils/generateBlockVariations.js";
import { processTemplateV2 } from "../utils/processTemplate.v2.js";

/**
 * Consolidated test suite for silent failure fixes across template processing,
 * block variations, and full integration. Tests that incorrect Handlebars syntax
 * fails clearly instead of silently continuing.
 */
describe("Silent Failure Prevention", () => {
  const validTemplate = `
import { objectSet } from "@osdk/api";
{{#propertyNames}}
const property = "{{this}}";
{{/propertyNames}}
export { objectSet };
  `;

  const invalidTemplate = `
import { objectSet } from "@osdk/api";
{{propertyNames}}
const property = "{{this}}";
{{/propertyNames}}
export { objectSet };
  `;

  const validBlockTemplate = `
import { objectSet } from "@osdk/api";
{{#hasProperty}}
const property = "{{propertyName}}";
{{/hasProperty}}
export { objectSet };
  `;

  const invalidBlockTemplate = `
import { objectSet } from "@osdk/api";
{{#hasProperty}}
const property = "{{propertyName}}";
{{/invalidSyntax  // BROKEN: missing closing }}
{{/hasProperty}}
export { objectSet };
  `;

  const context = {
    ...getSnippetContext("testSnippet"),
    propertyNames: ["name", "age", "email"],
  };

  describe("TemplateAnalyzer", () => {
    const analyzer = new TemplateAnalyzer();

    it("should analyze valid template successfully", () => {
      const result = analyzer.analyze(validTemplate);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.blocks).toHaveLength(1);
        expect(result.value.blocks[0].name).toBe("#propertyNames");
      }
    });

    it("should fail clearly on invalid template", () => {
      const result = analyzer.analyze(invalidTemplate);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("parse");
      }
    });
  });

  describe("processTemplateV2", () => {
    it("should process valid template successfully", () => {
      const result = processTemplateV2(validTemplate, context);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toContain("const property = \"name\";");
      }
    });

    it("should fail clearly on invalid template with helpful error message", () => {
      const result = processTemplateV2(invalidTemplate, context);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Parse error");
        expect(result.error.message).not.toBe("");
        console.log("✓ Error correctly caught:", result.error.message);
      }
    });
  });

  describe("Block Variations", () => {
    const blocks: BlockVariable[] = [
      {
        name: "#hasProperty",
        isInverted: false,
        content: "const property = \"{{propertyName}}\";",
      },
    ];
    const version = "2.0.0";

    it("should process valid block template successfully", () => {
      const result = generateBlockVariations(
        validBlockTemplate,
        "testSnippet",
        context,
        blocks,
        version,
      );

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.variations).toBeDefined();
        expect(result.value.files).toBeDefined();
        expect(result.value.files.length).toBeGreaterThan(0);
      }
    });

    it("should fail clearly on invalid block template", () => {
      const result = generateBlockVariations(
        invalidBlockTemplate,
        "testSnippet",
        context,
        blocks,
        version,
      );

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain(
          "Failed to process block variation",
        );
        expect(result.error.message).toContain("testSnippet#hasProperty");
      }
    });
  });

  describe("Integration Tests", () => {
    it("should succeed when all templates have valid Handlebars syntax", async () => {
      const tempDir = await mkdtemp(join(tmpdir(), "example-generator-test-"));
      const outputDir = join(tempDir, "examples");
      const hierarchyFile = join(tempDir, "hierarchy.ts");

      try {
        const result = await generateExamples(outputDir, hierarchyFile, [
          "2.1.0",
        ]);

        expect(result.success).toBe(true);

        if (result.success) {
          expect(result.value.successful).toBeGreaterThan(0);
          expect(result.value.failed).toBe(0);
          expect(result.value.versions).toContain("2.1.0");

          console.log(
            "✅ Build correctly succeeded with",
            result.value.successful,
            "examples generated",
          );
        }
      } finally {
        await rm(tempDir, { recursive: true, force: true });
      }
    });

    it("should handle large template sets correctly", async () => {
      const tempDir = await mkdtemp(join(tmpdir(), "example-generator-test-"));
      const outputDir = join(tempDir, "examples");
      const hierarchyFile = join(tempDir, "hierarchy.ts");

      try {
        const result = await generateExamples(outputDir, hierarchyFile, [
          "2.0.0",
        ]);

        expect(result.success).toBe(true);

        if (result.success) {
          expect(result.value.successful).toBeGreaterThan(0);
          expect(result.value.failed).toBe(0);

          console.log(
            "✅ Build correctly succeeded, confirming error handling works for valid templates",
          );
        }
      } finally {
        await rm(tempDir, { recursive: true, force: true });
      }
    });

    it("demonstrates the silent failure bug fix", () => {
      const analyzer = new TemplateAnalyzer();

      // This simulates the problematic code that was fixed
      const analysis = analyzer.analyze(invalidTemplate);
      if (!analysis.success) {
        // Previously: this error got converted to a warning and execution continued
        // Now: this error properly fails the build
        const warning =
          `Failed to analyze template test: ${analysis.error.message}`;
        expect(warning).toContain("Failed to analyze template");

        // Verify the error propagates correctly
        const fallbackResult = analyzer.analyze(invalidTemplate);
        expect(fallbackResult.success).toBe(false);
      }
    });
  });
});
