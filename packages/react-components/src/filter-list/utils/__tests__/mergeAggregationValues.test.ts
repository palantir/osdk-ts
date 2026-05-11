/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import { mergeAggregationValues } from "../mergeAggregationValues.js";

describe("mergeAggregationValues", () => {
  it("returns data unchanged when all selected values are present", () => {
    const data: PropertyAggregationValue[] = [
      { value: "A", count: 5 },
      { value: "B", count: 3 },
    ];
    const result = mergeAggregationValues(data, ["A", "B"]);
    expect(result).toEqual([
      { value: "A", count: 5 },
      { value: "B", count: 3 },
    ]);
  });

  it("appends missing selected values with count 0", () => {
    const data: PropertyAggregationValue[] = [
      { value: "A", count: 5 },
    ];
    const result = mergeAggregationValues(data, ["A", "B"]);
    expect(result).toEqual([
      { value: "A", count: 5 },
      { value: "B", count: 0 },
    ]);
  });

  it("returns all selections as count-0 entries when data is empty", () => {
    const result = mergeAggregationValues([], ["X", "Y"]);
    expect(result).toEqual([
      { value: "X", count: 0 },
      { value: "Y", count: 0 },
    ]);
  });

  it("returns data unchanged when selectedValues is empty", () => {
    const data: PropertyAggregationValue[] = [
      { value: "A", count: 5 },
    ];
    const result = mergeAggregationValues(data, []);
    expect(result).toEqual([
      { value: "A", count: 5 },
    ]);
  });
});
