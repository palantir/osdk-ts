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

import { describe, expect, it } from "vitest";
import { TemplateAnalyzer } from "../analyzer/template-analyzer.js";
import { getSnippetContext } from "../baseContext.js";
import { TemplateParseError } from "../errors/generator-errors.js";
import { processTemplateV2 } from "../utils/processTemplate.v2.js";

/**
 * Comprehensive error handling tests to prevent regression of silent failures
 * These tests verify that template syntax errors are caught and reported properly
 */
describe("Error Handling - No Silent Failures", () => {
  describe("Mustache Syntax Errors", () => {
    const testCases = [
      {
        name: "Missing # in block opening",
        template: "{{propertyNames}}content{{/propertyNames}}",
        expectedError: "Unopened section",
      },
      {
        name: "Unmatched block closing",
        template: "{{#each items}}content{{/wrong}}",
        expectedError: "Unclosed section",
      },
      {
        name: "Invalid helper syntax",
        template: "{{#if}}missing condition{{/if}}",
        expectedError: "", // Mustache doesn't have if helper - this is valid section syntax
      },
      {
        name: "Nested blocks with wrong closing",
        template: "{{#if condition}}{{#each items}}content{{/if}}{{/each}}",
        expectedError: "Unclosed section",
      },
      {
        name: "Incomplete mustache",
        template: "{{incomplete",
        expectedError: "Unclosed tag",
      },
    ];

    testCases.forEach(({ name, template, expectedError }) => {
      describe(name, () => {
        it("TemplateAnalyzer should return error result on invalid syntax", () => {
          const analyzer = new TemplateAnalyzer();
          const result = analyzer.analyze(template);
          if (expectedError === "") {
            // This case should succeed in Mustache
            expect(result.success).toBe(true);
          } else {
            expect(result.success).toBe(false);
            if (!result.success) {
              expect(result.error.message).toContain("parse");
            }
          }
        });

        it("processTemplateV2 should return error result", () => {
          const result = processTemplateV2(template, getSnippetContext("test"));
          if (expectedError === "") {
            // This case should succeed in Mustache
            expect(result.success).toBe(true);
          } else {
            expect(result.success).toBe(false);
            if (!result.success) {
              expect(result.error.message).toContain(expectedError);
            }
          }
        });

        it("TemplateAnalyzer should return error result", () => {
          const analyzer = new TemplateAnalyzer();
          const result = analyzer.analyze(template);
          if (expectedError === "") {
            // This case should succeed in Mustache
            expect(result.success).toBe(true);
          } else {
            expect(result.success).toBe(false);
            if (!result.success) {
              expect(result.error.message).toContain("parse");
            }
          }
        });
      });
    });
  });

  describe("TemplateParseError", () => {
    it("should provide detailed error information", () => {
      const error = new TemplateParseError(
        "test-template",
        "Parse error on line 5: unexpected token",
        5,
        10,
      );

      expect(error.message).toContain("test-template");
      expect(error.message).toContain("line 5");
      expect(error.templateId).toBe("test-template");
      expect(error.line).toBe(5);
      expect(error.column).toBe(10);
      expect(error.getSuggestion()).toContain("Check template syntax");
    });
  });

  describe("Error Propagation", () => {
    it("should not swallow errors in try-catch blocks", () => {
      const invalidTemplate = "{{#missing}}{{/different}}";

      // Simulate the old problematic pattern where errors were swallowed
      let caughtError: any = null;

      try {
        const result = processTemplateV2(
          invalidTemplate,
          getSnippetContext("test"),
        );
        if (!result.success) {
          // This should happen - the error should be in the result
          caughtError = result.error;
        }
      } catch (error) {
        // This should NOT happen - errors should be in Result format
        expect.fail("Errors should be returned as Result, not thrown");
      }

      expect(caughtError).toBeTruthy();
      expect(caughtError.message).toContain("Unclosed section");
    });
  });

  describe("Context Validation", () => {
    it("should handle missing context variables gracefully", () => {
      const template = "Hello {{name}}!";
      const result = processTemplateV2(template, getSnippetContext("test")); // Using base context

      // This should succeed but produce empty output for missing variables
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toBe("Hello !");
      }
    });

    it("should handle undefined context", () => {
      const template = "Hello {{name}}!";
      const result = processTemplateV2(template, null as any);

      expect(result.success).toBe(false);
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty templates", () => {
      const result = processTemplateV2("", getSnippetContext("test"));
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toBe("");
      }
    });

    it("should handle templates with only whitespace", () => {
      const result = processTemplateV2(
        "   \n  \t  ",
        getSnippetContext("test"),
      );
      expect(result.success).toBe(true);
    });

    it("should handle very large context objects", () => {
      const largeContext = {
        ...getSnippetContext("test"),
        ...Object.fromEntries(
          Array.from({ length: 1000 }, (_, i) => [`key${i}`, `value${i}`]),
        ),
      };

      const template = "{{key0}} ... {{key999}}";
      const result = processTemplateV2(template, largeContext);
      expect(result.success).toBe(true);
    });
  });
});
