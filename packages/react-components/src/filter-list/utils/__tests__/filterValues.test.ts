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
import type { FilterState } from "../../FilterListItemApi.js";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import {
  clearFilterState,
  dedupeEmptyAggregationRows,
  getEffectiveFilterState,
  getSelectedValueCount,
  isEmptyValue,
} from "../filterValues.js";

describe("filterValues", () => {
  describe("isEmptyValue", () => {
    it.each(
      [
        [null, true],
        [undefined, true],
        ["", true],
        [" ", false],
        ["   ", false],
        ["\t\n", false],
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

    it("leaves whitespace-only strings as their own rows", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 5 },
        { value: "   ", count: 4 },
        { value: "\t", count: 2 },
      ];
      expect(dedupeEmptyAggregationRows(input)).toEqual(input);
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

  describe("getEffectiveFilterState", () => {
    it("returns undefined when given undefined", () => {
      expect(getEffectiveFilterState(undefined)).toBeUndefined();
    });

    it("unwraps linkedProperty wrappers", () => {
      const inner: FilterState = {
        type: "SELECT",
        selectedValues: ["x"],
        isExcluding: true,
      };
      const outer: FilterState = {
        type: "linkedProperty",
        linkedFilterState: inner,
      };
      expect(getEffectiveFilterState(outer)).toBe(inner);
    });

    it("returns non-linked states unchanged", () => {
      const state: FilterState = {
        type: "CONTAINS_TEXT",
        value: "foo",
      };
      expect(getEffectiveFilterState(state)).toBe(state);
    });
  });

  describe("getSelectedValueCount", () => {
    it("returns 0 for undefined", () => {
      expect(getSelectedValueCount(undefined)).toBe(0);
    });

    it("counts SELECT selectedValues", () => {
      expect(
        getSelectedValueCount({
          type: "SELECT",
          selectedValues: ["a", "b", "c"],
        }),
      ).toBe(3);
    });

    it("counts EXACT_MATCH values", () => {
      expect(
        getSelectedValueCount({
          type: "EXACT_MATCH",
          values: ["a"],
        }),
      ).toBe(1);
    });

    it("unwraps linkedProperty before counting", () => {
      expect(
        getSelectedValueCount({
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["a", "b"],
          },
        }),
      ).toBe(2);
    });

    it("returns 0 for non-selection states", () => {
      expect(
        getSelectedValueCount({ type: "TOGGLE", enabled: true }),
      ).toBe(0);
    });
  });

  describe("clearFilterState", () => {
    it("returns undefined when given undefined", () => {
      expect(clearFilterState(undefined)).toBeUndefined();
    });

    it("preserves isExcluding when clearing SELECT", () => {
      expect(
        clearFilterState({
          type: "SELECT",
          selectedValues: ["a", "b"],
          isExcluding: true,
        }),
      ).toEqual({
        type: "SELECT",
        selectedValues: [],
        isExcluding: true,
      });
    });

    it("clears EXACT_MATCH values while preserving isExcluding", () => {
      expect(
        clearFilterState({
          type: "EXACT_MATCH",
          values: ["x"],
          isExcluding: false,
        }),
      ).toEqual({
        type: "EXACT_MATCH",
        values: [],
        isExcluding: false,
      });
    });

    it("clears NUMBER_RANGE bounds", () => {
      expect(
        clearFilterState({
          type: "NUMBER_RANGE",
          minValue: 1,
          maxValue: 10,
          includeNull: true,
        }),
      ).toEqual({
        type: "NUMBER_RANGE",
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      });
    });

    it("clears DATE_RANGE bounds", () => {
      const min = new Date("2020-01-01");
      const max = new Date("2020-12-31");
      expect(
        clearFilterState({
          type: "DATE_RANGE",
          minValue: min,
          maxValue: max,
        }),
      ).toEqual({
        type: "DATE_RANGE",
        minValue: undefined,
        maxValue: undefined,
        includeNull: false,
      });
    });

    it("clears TIMELINE preserving isExcluding", () => {
      expect(
        clearFilterState({
          type: "TIMELINE",
          startDate: new Date("2020-01-01"),
          endDate: new Date("2020-12-31"),
          isExcluding: true,
        }),
      ).toEqual({
        type: "TIMELINE",
        startDate: undefined,
        endDate: undefined,
        isExcluding: true,
      });
    });

    it("recursively clears linkedProperty inner state", () => {
      const cleared = clearFilterState({
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: ["a", "b"],
          isExcluding: true,
        },
      });
      expect(cleared).toEqual({
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: [],
          isExcluding: true,
        },
      });
    });

    it("clears keywordSearch term but keeps operator", () => {
      expect(
        clearFilterState({
          type: "keywordSearch",
          searchTerm: "foo",
          operator: "OR",
        }),
      ).toEqual({
        type: "keywordSearch",
        searchTerm: "",
        operator: "OR",
      });
    });
  });
});
