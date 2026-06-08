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

import type { PropertyKeys } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MockObjectType } from "../../__tests__/testUtils.js";
import { NO_VALUE } from "../../utils/filterValues.js";
import { usePropertyAggregation } from "../usePropertyAggregation.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

function mockAggregationData(
  groups: Array<{ name: string; count: number }>,
): void {
  vi.mocked(useOsdkAggregation).mockReturnValue({
    data: groups.map((g) => ({ $group: { name: g.name }, $count: g.count })),
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useOsdkAggregation>);
}

describe("usePropertyAggregation activeValues", () => {
  it("appends filtered-out values with count 0 when absent from aggregation", () => {
    mockAggregationData([{ name: "Marketing", count: 5 }]);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
        { activeValues: ["Marketing", "Research"] },
      )
    );

    const values = result.current.data;
    expect(values).toEqual([
      { value: "Marketing", count: 5 },
      { value: "Research", count: 0 },
    ]);
  });

  it("sorts filtered-out values together with real values by value", () => {
    mockAggregationData([
      { name: "Charlie", count: 3 },
      { name: "Alpha", count: 1 },
    ]);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
        { sortBy: "value", activeValues: ["Bravo"] },
      )
    );

    expect(result.current.data.map((d) => d.value)).toEqual([
      "Alpha",
      "Bravo",
      "Charlie",
    ]);
  });

  it("sorts filtered-out values together with real values by count", () => {
    mockAggregationData([
      { name: "Alpha", count: 10 },
      { name: "Charlie", count: 2 },
    ]);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
        { sortBy: "count", activeValues: ["Bravo"] },
      )
    );

    // count sort descending, then alphabetical tie-break
    // Alpha(10), Charlie(2), Bravo(0)
    expect(result.current.data.map((d) => d.value)).toEqual([
      "Alpha",
      "Charlie",
      "Bravo",
    ]);
  });

  it("does not duplicate values already in aggregation results", () => {
    mockAggregationData([
      { name: "Marketing", count: 5 },
      { name: "Engineering", count: 3 },
    ]);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
        { activeValues: ["Marketing"] },
      )
    );

    expect(result.current.data).toEqual([
      { value: "Marketing", count: 5 },
      { value: "Engineering", count: 3 },
    ]);
  });

  it("groups null and undefined under one No-value row but keeps empty string as its own row", () => {
    // Aggregation represents missing property values as null/undefined; the hook
    // coerces those to a single No-value bucket keyed by the NO_VALUE sentinel.
    // A literal empty string ("") is a real value and must remain a distinct row.
    vi.mocked(useOsdkAggregation).mockReturnValue({
      data: [
        { $group: { name: null }, $count: 3 },
        { $group: { name: undefined }, $count: 2 },
        { $group: { name: "" }, $count: 1 },
        { $group: { name: "Real" }, $count: 5 },
      ],
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useOsdkAggregation>);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
      )
    );

    // The No-value bucket merges only null + undefined (3 + 2 = 5).
    const noValueEntries = result.current.data.filter((d) =>
      d.value === NO_VALUE
    );
    expect(noValueEntries).toHaveLength(1);
    expect(noValueEntries[0].isNull).toBe(true);
    expect(noValueEntries[0].count).toBe(5);

    // The empty string is its own non-null row with its own count.
    const emptyStringEntries = result.current.data.filter((d) =>
      d.value === ""
    );
    expect(emptyStringEntries).toHaveLength(1);
    expect(emptyStringEntries[0].isNull).toBeUndefined();
    expect(emptyStringEntries[0].count).toBe(1);
  });

  it("returns data unchanged when activeValues is empty", () => {
    mockAggregationData([{ name: "Marketing", count: 5 }]);

    const { result } = renderHook(() =>
      usePropertyAggregation(
        MockObjectType,
        "name" as PropertyKeys<typeof MockObjectType>,
        undefined,
        { activeValues: [] },
      )
    );

    expect(result.current.data).toEqual([
      { value: "Marketing", count: 5 },
    ]);
  });
});
