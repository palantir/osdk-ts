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
});
