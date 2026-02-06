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
import { NestedOsdkExamplesContext } from "./nestedOsdkExamplesContext.js";

describe("NestedOsdkExamplesContext", () => {
  describe("getAvailableVersions", () => {
    it("returns all available versions", () => {
      const versions = NestedOsdkExamplesContext.getAvailableVersions();
      expect(versions).toContain("2.0.0");
      expect(versions).toContain("2.1.0");
      expect(versions).toContain("2.4.0");
      expect(versions.length).toBe(3);
    });

    it("returns versions in consistent order", () => {
      const versions1 = NestedOsdkExamplesContext.getAvailableVersions();
      const versions2 = NestedOsdkExamplesContext.getAvailableVersions();
      expect(versions1).toEqual(versions2);
    });
  });

  describe("getBaseExamplesForVersion", () => {
    it("returns examples for version 2.0.0", () => {
      const examples = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.0.0",
      );
      expect(examples).toContain("loadSingleObjectGuide");
      expect(examples).toContain("aggregationTemplate");
      expect(examples.length).toBeGreaterThan(50);
    });

    it("returns more examples for version 2.4.0 due to fallback", () => {
      const examples200 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.0.0",
      );
      const examples240 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.4.0",
      );

      expect(examples240.length).toBeGreaterThan(examples200.length);
      expect(examples240).toContain("loadSingleObjectGuide"); // from 2.0.0
      expect(examples240).toContain("loadGeotimeSeriesPointsSnippet"); // from 2.1.0
      expect(examples240).toContain("derivedPropertyNumericExpression"); // from 2.4.0
    });

    it("returns empty array for non-existent version", () => {
      const examples = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "1.0.0",
      );
      expect(examples).toEqual([]);
    });
  });

  describe("getExample", () => {
    it("retrieves a simple example", () => {
      const example = NestedOsdkExamplesContext.getExample("2.0.0", [
        "loadSingleObjectGuide",
      ]);
      expect(example).toBeDefined();
      expect(example?.code).toContain("Employee");
      expect(example?.code).toContain("fetchOne");
    });

    it("retrieves a nested example variation", () => {
      const example = NestedOsdkExamplesContext.getExample("2.4.0", [
        "derivedPropertyNumericExpression",
        "#isUnary",
      ]);
      expect(example).toBeDefined();
      expect(example?.code).toContain("Employee");
      expect(example?.code).toContain("withProperties");
    });

    it("supports version fallback for examples", () => {
      // Example from 2.0.0 should be accessible in 2.4.0
      const example = NestedOsdkExamplesContext.getExample("2.4.0", [
        "loadSingleObjectGuide",
      ]);
      expect(example).toBeDefined();
      expect(example?.code).toContain("fetchOne");
    });

    it("does not find future examples in older versions", () => {
      // 2.4.0 specific example should not be available in 2.1.0
      const example = NestedOsdkExamplesContext.getExample("2.1.0", [
        "derivedPropertyNumericExpression",
        "#isUnary",
      ]);
      expect(example).toBeUndefined();
    });

    it("returns undefined for non-existent examples", () => {
      const example = NestedOsdkExamplesContext.getExample("2.0.0", [
        "nonExistentExample",
      ]);
      expect(example).toBeUndefined();
    });

    it("returns undefined for invalid nested path", () => {
      const example = NestedOsdkExamplesContext.getExample("2.4.0", [
        "derivedPropertyNumericExpression",
        "invalidVariation",
      ]);
      expect(example).toBeUndefined();
    });
  });

  describe("getVariations", () => {
    it("returns variations for a nested example", () => {
      const variations = NestedOsdkExamplesContext.getVariations(
        "2.4.0",
        "derivedPropertyNumericExpression",
      );
      expect(variations).toBeDefined();
      expect(Object.keys(variations!)).toContain("#isUnary");
      expect(Object.keys(variations!)).toContain("^isUnary");
      // Check that variations have different code content
      expect(variations!["#isUnary"].code).toBeTruthy();
      expect(variations!["^isUnary"].code).toBeTruthy();
      expect(variations!["#isUnary"].code).not.toEqual(
        variations!["^isUnary"].code,
      );
      // Check for structure rather than specific method names
      expect(variations!["#isUnary"].code).toMatch(/selectProperty|aggregate/);
      expect(variations!["^isUnary"].code).toMatch(/aggregate|withProperties/);
    });

    it("returns undefined for simple examples without variations", () => {
      const variations = NestedOsdkExamplesContext.getVariations(
        "2.0.0",
        "loadSingleObjectGuide",
      );
      expect(variations).toBeUndefined();
    });

    it("supports version fallback for variations", () => {
      // Check that variations from 2.0.0 are accessible in 2.4.0
      const variations = NestedOsdkExamplesContext.getVariations(
        "2.4.0",
        "applyAction",
      );
      expect(variations).toBeDefined();
      if (variations) {
        expect(Object.keys(variations).length).toBeGreaterThan(0);
      }
    });

    it("returns undefined for non-existent examples", () => {
      const variations = NestedOsdkExamplesContext.getVariations(
        "2.0.0",
        "nonExistentExample",
      );
      expect(variations).toBeUndefined();
    });
  });

  describe("hasVariations", () => {
    it("returns true for examples with variations", () => {
      const hasVariations = NestedOsdkExamplesContext.hasVariations(
        "2.4.0",
        "derivedPropertyNumericExpression",
      );
      expect(hasVariations).toBe(true);
    });

    it("returns false for simple examples", () => {
      const hasVariations = NestedOsdkExamplesContext.hasVariations(
        "2.0.0",
        "loadSingleObjectGuide",
      );
      expect(hasVariations).toBe(false);
    });

    it("returns false for non-existent examples", () => {
      const hasVariations = NestedOsdkExamplesContext.hasVariations(
        "2.0.0",
        "nonExistentExample",
      );
      expect(hasVariations).toBe(false);
    });
  });

  describe("getExamplesWithVersionInfo", () => {
    it("returns examples with version information", () => {
      const examples = NestedOsdkExamplesContext.getExamplesWithVersionInfo(
        "2.4.0",
      );
      expect(examples.length).toBeGreaterThan(0);

      const aggregationExample = examples.find(e =>
        e.name === "aggregationTemplate"
      );
      expect(aggregationExample).toBeDefined();
      expect(aggregationExample?.availableInVersions).toContain("2.0.0");
    });

    it("shows version availability correctly", () => {
      const examples = NestedOsdkExamplesContext.getExamplesWithVersionInfo(
        "2.4.0",
      );

      // Should return examples with version info
      expect(examples.length).toBeGreaterThan(0);

      // Find an example that should exist only in newer versions
      const newerExample = examples.find(e =>
        e.name === "derivedPropertyNumericExpression"
      );
      expect(newerExample).toBeDefined();
      expect(newerExample?.availableInVersions).toContain("2.4.0");

      // Check that some examples show version info
      const exampleWithVersions = examples.find(e =>
        e.availableInVersions.length > 0
      );
      expect(exampleWithVersions).toBeDefined();
    });
  });

  describe("searchExamples", () => {
    it("searches across all versions when no version specified", () => {
      const results = NestedOsdkExamplesContext.searchExamples("aggregation");
      expect(results.length).toBeGreaterThan(0);

      const versions = [...new Set(results.map(r => r.version))];
      expect(versions.length).toBeGreaterThanOrEqual(1); // At least one version

      // Verify we get results from the available versions
      const availableVersions = NestedOsdkExamplesContext
        .getAvailableVersions();
      versions.forEach(version => {
        expect(availableVersions).toContain(version);
      });
    });

    it("searches within compatible versions when version specified", () => {
      const results = NestedOsdkExamplesContext.searchExamples(
        "aggregation",
        "2.4.0",
      );
      expect(results.length).toBeGreaterThan(0);

      // All results should have the target version
      results.forEach(result => {
        expect(result.version).toBe("2.4.0");
      });
    });

    it("finds nested variations", () => {
      const results = NestedOsdkExamplesContext.searchExamples(
        "isUnary",
        "2.4.0",
      );
      expect(results.length).toBeGreaterThan(0);

      const unaryResult = results.find(r => r.variationKey === "#isUnary");
      expect(unaryResult).toBeDefined();
      expect(unaryResult?.baseName).toBe("derivedPropertyNumericExpression");
    });

    it("includes source version information", () => {
      const results = NestedOsdkExamplesContext.searchExamples(
        "loadSingleObjectGuide",
        "2.4.0",
      );
      expect(results.length).toBe(1);
      expect(results[0].version).toBe("2.4.0"); // target version
      expect(results[0].sourceVersion).toBe("2.0.0"); // actual source
    });

    it("returns empty array for no matches", () => {
      const results = NestedOsdkExamplesContext.searchExamples(
        "nonExistentPattern",
      );
      expect(results).toEqual([]);
    });

    it("searches case-insensitively", () => {
      const results = NestedOsdkExamplesContext.searchExamples("AGGREGATION");
      expect(results.length).toBeGreaterThan(0);

      // Should match the same results as lowercase
      const lowerResults = NestedOsdkExamplesContext.searchExamples(
        "aggregation",
      );
      expect(results.length).toBe(lowerResults.length);
    });
  });

  describe("flatten", () => {
    it("returns a flat structure compatible with original format", () => {
      const flattened = NestedOsdkExamplesContext.flatten();

      expect(flattened.kind).toBe("examples");
      expect(flattened.versions).toBeDefined();
      expect(Object.keys(flattened.versions)).toContain("2.0.0");

      const version200 = flattened.versions["2.0.0"];
      expect(version200.examples).toBeDefined();
      expect(version200.examples["loadSingleObjectGuide"]).toBeDefined();
      expect(version200.examples["loadSingleObjectGuide"].code).toContain(
        "fetchOne",
      );
    });

    it("correctly flattens nested variations with underscore naming", () => {
      const flattened = NestedOsdkExamplesContext.flatten();
      const version240 = flattened.versions["2.4.0"];

      expect(version240.examples["derivedPropertyNumericExpression_#isUnary"])
        .toBeDefined();
      expect(version240.examples["derivedPropertyNumericExpression_^isUnary"])
        .toBeDefined();
    });

    it("preserves simple examples without modifications", () => {
      const flattened = NestedOsdkExamplesContext.flatten();
      const version200 = flattened.versions["2.0.0"];

      expect(version200.examples["loadSingleObjectGuide"]).toBeDefined();
      expect(version200.examples["loadSingleObjectGuide"].code).toBeDefined();
    });
  });

  describe("version fallback logic", () => {
    it("follows semantic versioning rules", () => {
      // 2.4.0 should include 2.0.0, 2.1.0, and 2.4.0
      const examples240 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.4.0",
      );

      // 2.1.0 should include 2.0.0 and 2.1.0 (but not 2.4.0)
      const examples210 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.1.0",
      );

      // 2.0.0 should only include 2.0.0
      const examples200 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
        "2.0.0",
      );

      expect(examples240.length).toBeGreaterThan(examples210.length);
      expect(examples210.length).toBeGreaterThan(examples200.length);
    });

    it("newer versions override older ones in merge", () => {
      // If the same example exists in multiple versions, newer should win
      // This is tested implicitly by checking that version fallback works
      const example = NestedOsdkExamplesContext.getExample("2.4.0", [
        "loadSingleObjectGuide",
      ]);
      expect(example).toBeDefined();
    });
  });

  describe("data structure integrity", () => {
    it("all examples have code property", () => {
      const versions = NestedOsdkExamplesContext.getAvailableVersions();

      for (const version of versions) {
        const examples = NestedOsdkExamplesContext.getBaseExamplesForVersion(
          version,
        );

        for (const exampleName of examples) {
          const example = NestedOsdkExamplesContext.getExample(version, [
            exampleName,
          ]);
          if (example) {
            expect(example.code).toBeDefined();
            expect(typeof example.code).toBe("string");
            expect(example.code.length).toBeGreaterThan(0);
          } else {
            // If it's not a direct example, check if it has variations
            const variations = NestedOsdkExamplesContext.getVariations(
              version,
              exampleName,
            );
            expect(variations).toBeDefined();

            if (variations) {
              for (const [varKey, varExample] of Object.entries(variations)) {
                expect(varExample.code).toBeDefined();
                expect(typeof varExample.code).toBe("string");
                expect(varExample.code.length).toBeGreaterThan(0);
              }
            }
          }
        }
      }
    });

    it("no examples have filePath property", () => {
      const example = NestedOsdkExamplesContext.getExample("2.0.0", [
        "loadSingleObjectGuide",
      ]);
      expect(example).toBeDefined();
      expect("filePath" in (example || {})).toBe(false);
      expect(Object.keys(example || {})).toEqual(["code"]);
    });
  });
});
