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
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { dedupeEmptyAggregationRows, isEmptyValue } from "../filterValues.js";

describe("filterValues", () => {
  describe("isEmptyValue", () => {
    it.each(
      [
        [null, true],
        [undefined, true],
        ["", true],
        ["   ", true],
        ["\t\n", true],
        ["foo", false],
        ["  foo  ", false],
        ["0", false],
      ] as const,
    )("isEmptyValue(%j) === %s", (input, expected) => {
      expect(isEmptyValue(input)).toBe(expected);
    });
  });

  describe("dedupeEmptyAggregationRows", () => {
    it("returns the input unchanged when no empty rows are present", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 3 },
        { value: "beta", count: 1 },
      ];
      expect(dedupeEmptyAggregationRows(input)).toEqual(input);
    });

    it("merges separate null and empty-string rows into one", () => {
      const input: PropertyAggregationValue[] = [
        { value: "", count: 2, isNull: true },
        { value: "alpha", count: 5 },
        { value: "", count: 3 },
      ];
      expect(dedupeEmptyAggregationRows(input)).toEqual([
        { value: "", count: 5, isNull: true },
        { value: "alpha", count: 5 },
      ]);
    });

    it("places the merged row at the position of the first empty row", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 5 },
        { value: "", count: 2, isNull: true },
        { value: "beta", count: 1 },
        { value: "", count: 3 },
      ];
      const result = dedupeEmptyAggregationRows(input);
      expect(result).toEqual([
        { value: "alpha", count: 5 },
        { value: "", count: 5, isNull: true },
        { value: "beta", count: 1 },
      ]);
    });

    it("treats whitespace-only strings as empty", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 5 },
        { value: "   ", count: 4 },
        { value: "\t", count: 2 },
      ];
      expect(dedupeEmptyAggregationRows(input)).toEqual([
        { value: "alpha", count: 5 },
        { value: "", count: 6, isNull: true },
      ]);
    });

    it("returns an empty array when given an empty array", () => {
      expect(dedupeEmptyAggregationRows([])).toEqual([]);
    });

    it("does not insert an empty row when emptyCount is 0", () => {
      const input: PropertyAggregationValue[] = [
        { value: "", count: 0 },
        { value: "alpha", count: 5 },
      ];
      expect(dedupeEmptyAggregationRows(input)).toEqual([
        { value: "alpha", count: 5 },
      ]);
    });
  });
});
