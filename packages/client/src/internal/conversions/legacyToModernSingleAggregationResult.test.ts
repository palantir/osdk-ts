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
import { legacyToModernSingleAggregationResult } from "./legacyToModernSingleAggregationResult.js";
import { modernToLegacyAggregationClause } from "./modernToLegacyAggregationClause.js";

describe("legacyToModernSingleAggregationResult", () => {
  it("returns undefined metric values when metrics array is empty (aggregating over 0 objects)", () => {
    const result = legacyToModernSingleAggregationResult(
      {
        group: {},
        metrics: [],
      },
      { "priority:max": "unordered" },
    );
    expect(result).toEqual({ priority: { max: undefined } });
  });

  it("returns populated metric values when metrics are present", () => {
    const result = legacyToModernSingleAggregationResult(
      {
        group: {},
        metrics: [
          { name: "priority.max", value: 5 },
          { name: "priority.avg", value: 3 },
        ],
      },
      { "priority:max": "unordered", "priority:avg": "unordered" },
    );
    expect(result).toEqual({ priority: { max: 5, avg: 3 } });
  });

  it("modernToLegacyAggregationClause output can be used as metrics input", () => {
    const select = {
      "salary:avg": "unordered",
      "salary:max": "unordered",
      "age:min": "unordered",
    } as const;

    const wireMetrics = modernToLegacyAggregationClause(select).map(
      (agg) => ({ name: agg.name!, value: 42 }),
    );

    const result = legacyToModernSingleAggregationResult(
      { group: {}, metrics: wireMetrics },
      select,
    );

    expect(result).toEqual({
      salary: { avg: 42, max: 42 },
      age: { min: 42 },
    });
  });
});
