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

import type { ObjectSet } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { mockAggregationByObjectSetKind } from "../../__tests__/aggregationMocks.js";
import { MockObjectType } from "../../__tests__/testUtils.js";
import { useDualScopeAggregation } from "../useDualScopeAggregation.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

const scopedSet = { _kind: "scoped" } as unknown as ObjectSet<
  typeof MockObjectType
>;
const emptySourceSet = { _kind: "emptySource" } as unknown as ObjectSet<
  typeof MockObjectType
>;

afterEach(() => {
  vi.clearAllMocks();
});

describe("useDualScopeAggregation", () => {
  it("returns only scoped values when emptySourceObjectSet is undefined", () => {
    mockAggregationByObjectSetKind({
      scoped: [{ name: "Engineering", count: 3 }],
    });

    const { result } = renderHook(() =>
      useDualScopeAggregation(MockObjectType, "name", scopedSet, undefined)
    );

    expect(result.current.data.map((d) => d.value)).toEqual(["Engineering"]);
    expect(result.current.data.find((d) => d.value === "Engineering")?.count)
      .toBe(3);
  });

  it("merges emptySource-only values into the result as count=0 filtered-out rows", () => {
    mockAggregationByObjectSetKind({
      scoped: [{ name: "Engineering", count: 3 }],
      emptySource: [
        { name: "Engineering", count: 5 },
        { name: "Marketing", count: 2 },
      ],
    });

    const { result } = renderHook(() =>
      useDualScopeAggregation(MockObjectType, "name", scopedSet, emptySourceSet)
    );

    const values = result.current.data.map((d) => d.value);
    expect(values).toContain("Engineering");
    expect(values).toContain("Marketing");
    expect(
      result.current.data.find((d) => d.value === "Marketing")?.count,
    ).toBe(0);
  });

  it("falls back to scoped-only when emptySource aggregation errors", () => {
    vi.mocked(useOsdkAggregation).mockImplementation((_objType, args) => {
      const kind = (args as { objectSet?: { _kind?: string } }).objectSet
        ?._kind;
      if (kind === "emptySource") {
        return {
          data: undefined,
          isLoading: false,
          error: new Error("aggregation failed"),
          refetch: vi.fn(),
        } as unknown as ReturnType<typeof useOsdkAggregation>;
      }
      return {
        data: [{ $group: { name: "Engineering" }, $count: 3 }],
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as unknown as ReturnType<typeof useOsdkAggregation>;
    });

    const { result } = renderHook(() =>
      useDualScopeAggregation(MockObjectType, "name", scopedSet, emptySourceSet)
    );

    expect(result.current.data.map((d) => d.value)).toEqual(["Engineering"]);
  });

  it("respects explicit selectedValues even in single-scope mode", () => {
    mockAggregationByObjectSetKind({
      scoped: [{ name: "Engineering", count: 3 }],
    });

    const { result } = renderHook(() =>
      useDualScopeAggregation(
        MockObjectType,
        "name",
        scopedSet,
        undefined,
        { selectedValues: ["Marketing"] },
      )
    );

    const values = result.current.data.map((d) => d.value);
    expect(values).toContain("Engineering");
    expect(values).toContain("Marketing");
    expect(
      result.current.data.find((d) => d.value === "Marketing")?.count,
    ).toBe(0);
  });
});
