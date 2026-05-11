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
import { dedupeAggregationRows, isNullRow } from "../filterValues.js";

describe("filterValues", () => {
  describe("isNullRow", () => {
    it("returns true only when row.isNull === true", () => {
      expect(isNullRow({ value: "", count: 1, isNull: true })).toBe(true);
      expect(isNullRow({ value: "", count: 1, isNull: false })).toBe(false);
      expect(isNullRow({ value: "", count: 1 })).toBe(false);
      expect(isNullRow({ value: "foo", count: 1 })).toBe(false);
      expect(isNullRow({ value: "foo", count: 1, isNull: true })).toBe(true);
    });
  });

  describe("dedupeAggregationRows", () => {
    it("returns the input unchanged when each row has a distinct key", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 3 },
        { value: "beta", count: 1 },
      ];
      expect(dedupeAggregationRows(input)).toEqual(input);
    });

    it("merges multiple null rows into one but never with literal empty", () => {
      const input: PropertyAggregationValue[] = [
        { value: "", count: 2, isNull: true },
        { value: "alpha", count: 5 },
        { value: "", count: 3, isNull: true },
        { value: "", count: 4 },
      ];
      expect(dedupeAggregationRows(input)).toEqual([
        { value: "", count: 5, isNull: true },
        { value: "alpha", count: 5 },
        { value: "", count: 4 },
      ]);
    });

    it("merges multiple literal empty rows into one", () => {
      const input: PropertyAggregationValue[] = [
        { value: "", count: 2 },
        { value: "alpha", count: 5 },
        { value: "", count: 3, isNull: false },
      ];
      expect(dedupeAggregationRows(input)).toEqual([
        { value: "", count: 5 },
        { value: "alpha", count: 5 },
      ]);
    });

    it("keeps null, literal empty, and whitespace strings as separate rows", () => {
      const input: PropertyAggregationValue[] = [
        { value: "", count: 2, isNull: true },
        { value: "", count: 4 },
        { value: " ", count: 3 },
        { value: "\t", count: 1 },
        { value: "alpha", count: 5 },
      ];
      expect(dedupeAggregationRows(input)).toEqual(input);
    });

    it("preserves the position of the first occurrence of each key", () => {
      const input: PropertyAggregationValue[] = [
        { value: "alpha", count: 5 },
        { value: "", count: 2, isNull: true },
        { value: "beta", count: 1 },
        { value: "", count: 3, isNull: true },
      ];
      expect(dedupeAggregationRows(input)).toEqual([
        { value: "alpha", count: 5 },
        { value: "", count: 5, isNull: true },
        { value: "beta", count: 1 },
      ]);
    });

    it("returns an empty array when given an empty array", () => {
      expect(dedupeAggregationRows([])).toEqual([]);
    });
  });
});
