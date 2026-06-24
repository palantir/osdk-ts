/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { evaluateFilter } from "./evaluateFilter.js";

describe("evaluateFilter", () => {
  describe("$in filter", () => {
    it("returns true when value is in the array", () => {
      expect(evaluateFilter("$in", 5, [1, 5, 10], true)).toBe(true);
      expect(evaluateFilter("$in", "active", ["active", "pending"], true)).toBe(
        true,
      );
    });

    it("returns false when value is not in the array", () => {
      expect(evaluateFilter("$in", 7, [1, 5, 10], true)).toBe(false);
      expect(evaluateFilter("$in", "deleted", ["active", "pending"], true))
        .toBe(
          false,
        );
    });

    it("handles empty arrays", () => {
      expect(evaluateFilter("$in", 5, [], true)).toBe(false);
    });

    it("handles undefined expected value gracefully", () => {
      expect(evaluateFilter("$in", 5, undefined, true)).toBe(false);
    });

    it("handles null expected value gracefully", () => {
      expect(evaluateFilter("$in", 5, null, true)).toBe(false);
    });

    it("handles non-array expected value gracefully", () => {
      expect(evaluateFilter("$in", 5, { $in: [1, 5, 10] }, true)).toBe(false);
    });
  });

  describe("comparison filters", () => {
    it("$eq returns true for equal values", () => {
      expect(evaluateFilter("$eq", 5, 5, true)).toBe(true);
      expect(evaluateFilter("$eq", "test", "test", true)).toBe(true);
    });

    it("$eq returns false for unequal values", () => {
      expect(evaluateFilter("$eq", 5, 6, true)).toBe(false);
    });

    it("$ne returns true for unequal values", () => {
      expect(evaluateFilter("$ne", 5, 6, true)).toBe(true);
    });

    it("$gt returns true when value is greater", () => {
      expect(evaluateFilter("$gt", 10, 5, true)).toBe(true);
      expect(evaluateFilter("$gt", 5, 10, true)).toBe(false);
    });

    it("$lt returns true when value is less", () => {
      expect(evaluateFilter("$lt", 5, 10, true)).toBe(true);
      expect(evaluateFilter("$lt", 10, 5, true)).toBe(false);
    });

    it("$gte returns true when value is greater or equal", () => {
      expect(evaluateFilter("$gte", 10, 5, true)).toBe(true);
      expect(evaluateFilter("$gte", 5, 5, true)).toBe(true);
      expect(evaluateFilter("$gte", 4, 5, true)).toBe(false);
    });

    it("$lte returns true when value is less or equal", () => {
      expect(evaluateFilter("$lte", 5, 10, true)).toBe(true);
      expect(evaluateFilter("$lte", 5, 5, true)).toBe(true);
      expect(evaluateFilter("$lte", 6, 5, true)).toBe(false);
    });
  });

  describe("string filters", () => {
    it("$startsWith returns true when string starts with prefix", () => {
      expect(evaluateFilter("$startsWith", "hello world", "hello", true)).toBe(
        true,
      );
      expect(evaluateFilter("$startsWith", "hello world", "world", true)).toBe(
        false,
      );
    });

    it("$startsWith returns false for null/undefined values without throwing", () => {
      // $title is `string | undefined`, so filtering by `$title` can reach a
      // null value here — it must not throw on the `.startsWith` call.
      expect(evaluateFilter("$startsWith", undefined, "hello", true)).toBe(
        false,
      );
      expect(evaluateFilter("$startsWith", null, "hello", true)).toBe(false);
      // A missing value definitively cannot match, so loose mode is false too.
      expect(evaluateFilter("$startsWith", undefined, "hello", false)).toBe(
        false,
      );
      expect(evaluateFilter("$startsWith", null, "hello", false)).toBe(false);
    });

    it("$startsWith returns false for non-string values", () => {
      expect(evaluateFilter("$startsWith", 42, "4", true)).toBe(false);
    });
  });

  describe("null checks", () => {
    it("$isNull returns true for null values", () => {
      expect(evaluateFilter("$isNull", null, true, true)).toBe(true);
      expect(evaluateFilter("$isNull", undefined, true, true)).toBe(true);
    });

    it("$isNull returns false for non-null values", () => {
      expect(evaluateFilter("$isNull", "value", true, true)).toBe(false);
      expect(evaluateFilter("$isNull", 0, true, true)).toBe(false);
    });
  });

  describe("strict vs loose mode", () => {
    it("$contains returns false in strict mode", () => {
      expect(evaluateFilter("$contains", "hello world", "world", true)).toBe(
        false,
      );
    });

    it("$contains returns true in loose mode", () => {
      expect(evaluateFilter("$contains", "hello world", "world", false)).toBe(
        true,
      );
    });

    it("$intersects returns false in strict mode", () => {
      expect(evaluateFilter("$intersects", {}, {}, true)).toBe(false);
    });

    it("$intersects returns true in loose mode", () => {
      expect(evaluateFilter("$intersects", {}, {}, false)).toBe(true);
    });
  });

  // `long`/`decimal` arrive over the wire as strings. Comparing them with raw
  // JS operators is lexicographic ("10" < "2") and precision-sensitive
  // ("5.30" !== "5.3"). When the declared property type is a string-encoded
  // numeric type, the filter must compare by numeric value instead.
  describe("string-encoded numeric properties", () => {
    // Behavior 1: ordered comparisons compare numerically, not lexically.
    it.each(["long", "decimal"])(
      "ordered comparisons compare numerically for %s",
      (propertyType) => {
        expect(evaluateFilter("$gt", "10", "2", true, propertyType)).toBe(true);
        expect(evaluateFilter("$lt", "10", "2", true, propertyType)).toBe(
          false,
        );
        expect(evaluateFilter("$gte", "5", "5", true, propertyType)).toBe(true);
        expect(evaluateFilter("$lte", "5", "5", true, propertyType)).toBe(true);
        expect(evaluateFilter("$gt", "5", "5", true, propertyType)).toBe(false);
      },
    );

    // Behavior 2: $eq/$ne are precision-insensitive and cross-type aware.
    it("$eq / $ne compare by numeric value", () => {
      expect(evaluateFilter("$eq", "5.30", "5.3", true, "decimal")).toBe(true);
      expect(evaluateFilter("$eq", "5.30", "5.4", true, "decimal")).toBe(false);
      expect(evaluateFilter("$ne", "5.30", "5.3", true, "decimal")).toBe(false);
      expect(evaluateFilter("$ne", "5.30", "5.4", true, "decimal")).toBe(true);
    });

    it("$eq routes a cross-type (string vs number) expected through numeric comparison", () => {
      expect(evaluateFilter("$eq", "10", 10, true, "long")).toBe(true);
    });

    // Behavior 3: $in membership is precision-insensitive.
    it("$in compares membership by numeric value", () => {
      expect(evaluateFilter("$in", "5.30", ["5.3", "6"], true, "decimal")).toBe(
        true,
      );
      expect(evaluateFilter("$in", "7", ["1", "5", "10"], true, "long")).toBe(
        false,
      );
    });

    it("$in returns false for a non-array expected on a numeric column", () => {
      expect(evaluateFilter("$in", "5", null, true, "long")).toBe(false);
    });

    // Behavior 5: empty/whitespace/null edge cases on numeric columns.
    it.each(["long", "decimal"])(
      "handles empty / whitespace / null without throwing for %s",
      (propertyType) => {
        expect(evaluateFilter("$eq", "", "", true, propertyType)).toBe(true);
        expect(evaluateFilter("$gt", "5", "", true, propertyType)).toBe(true);
        expect(evaluateFilter("$lt", "", "5", true, propertyType)).toBe(true);
        expect(evaluateFilter("$gt", null, "5", true, propertyType)).toBe(
          false,
        );
        expect(evaluateFilter("$isNull", null, undefined, true, propertyType))
          .toBe(true);
      },
    );

    // Behavior 4: non-numeric property types are unaffected. A careless
    // implementation that always routes through compareNumericStrings would
    // break these (e.g. it would coerce "a" to malformed and mis-handle, or
    // mangle boolean / integer comparisons).
    it.each([undefined, "string", "integer"] as const)(
      "leaves non-numeric comparisons unchanged for propertyType=%s",
      (propertyType) => {
        expect(evaluateFilter("$gt", 10, 5, true, propertyType)).toBe(true);
        expect(evaluateFilter("$eq", "a", "a", true, propertyType)).toBe(true);
        expect(evaluateFilter("$ne", "a", "b", true, propertyType)).toBe(true);
        expect(
          evaluateFilter("$startsWith", "hello", "he", true, propertyType),
        ).toBe(true);
        expect(evaluateFilter("$eq", true, true, true, propertyType)).toBe(
          true,
        );
        expect(evaluateFilter("$isNull", null, true, true, propertyType)).toBe(
          true,
        );
        expect(evaluateFilter("$in", 5, [1, 5, 10], true, propertyType)).toBe(
          true,
        );
        // strict-vs-loose deferral for unsupported ops is preserved.
        expect(
          evaluateFilter("$contains", "hello", "ell", true, propertyType),
        ).toBe(false);
        expect(
          evaluateFilter("$contains", "hello", "ell", false, propertyType),
        ).toBe(true);
        expect(evaluateFilter("$intersects", {}, {}, true, propertyType)).toBe(
          false,
        );
        expect(evaluateFilter("$intersects", {}, {}, false, propertyType)).toBe(
          true,
        );
      },
    );
  });
});
