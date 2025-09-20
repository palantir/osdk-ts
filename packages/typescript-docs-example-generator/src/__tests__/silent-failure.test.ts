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

import { describe, it, expect } from "vitest";
import { extractHandlebarsVariables } from "../utils/extractHandlebarsVariables.js";
import { processTemplateV2 } from "../utils/processTemplate.v2.js";
import { TemplateAnalyzer } from "../analyzer/template-analyzer.js";
import { getSnippetContext } from "../utils/baseContext.js";

/**
 * Test to reproduce the silent failure issue described in MASTER-PLAN.md
 * This demonstrates the problem where incorrect Handlebars syntax fails silently
 */
describe("Silent Failure Reproduction", () => {
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

  const context = {
    ...getSnippetContext("testSnippet"),
    propertyNames: ["name", "age", "email"]
  };

  describe("extractHandlebarsVariables", () => {
    it("should handle valid template with block syntax", () => {
      const variables = extractHandlebarsVariables(validTemplate);
      expect(variables).toContain("#propertyNames");
      expect(variables).toContain("/propertyNames");
    });

    it("should throw or fail clearly on invalid template", () => {
      // The current issue: this might fail silently or throw unexpectedly
      expect(() => {
        const variables = extractHandlebarsVariables(invalidTemplate);
      }).toThrow(); // We expect this to throw, not fail silently
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
      // Should return a clear error, not succeed or fail silently
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Parse error");
        expect(result.error.message).not.toBe(""); // Should not be empty
        console.log("✓ Error correctly caught:", result.error.message);
      }
    });
  });

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
      // Should return a clear error indicating the problem
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("parse");
      }
    });
  });

  describe("Integration: The Silent Failure Bug", () => {
    it("demonstrates how template analysis errors get swallowed", () => {
      const analyzer = new TemplateAnalyzer();
      
      // This simulates the problematic code in generateExamples.ts:268
      const analysis = analyzer.analyze(invalidTemplate);
      if (!analysis.success) {
        // The bug: this error gets converted to a warning and execution continues
        const warning = `Failed to analyze template test: ${analysis.error.message}`;
        expect(warning).toContain("Failed to analyze template");
        
        // Then the code falls back to extractHandlebarsVariables which might throw
        expect(() => {
          extractHandlebarsVariables(invalidTemplate);
        }).toThrow();
      }
    });
  });
});