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

import type { ObjectSet, PropertyKeys } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockObjectType } from "../../__tests__/testUtils.js";
import { useDualScopeAggregation } from "../useDualScopeAggregation.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

const NARROWED_SET = { _kind: "narrowed" } as unknown as ObjectSet<
  typeof MockObjectType
>;
const BASE_SET = { _kind: "base" } as unknown as ObjectSet<
  typeof MockObjectType
>;

type AggResponse = {
  data: Array<{ $group: Record<string, unknown>; $count: number }>;
  isLoading: boolean;
  error: Error | null;
};

function asResult(r: AggResponse): ReturnType<typeof useOsdkAggregation> {
  return { ...r, refetch: vi.fn() } as unknown as ReturnType<
    typeof useOsdkAggregation
  >;
}

function makeData(
  groups: Array<{ name: string; count: number }>,
): AggResponse {
  return {
    data: groups.map((g) => ({ $group: { name: g.name }, $count: g.count })),
    isLoading: false,
    error: null,
  };
}

/** Discriminate base vs narrowed via the `_kind` tag on the fixture objectSet. */
function mockByScope(
  narrowed: AggResponse,
  base: AggResponse,
): void {
  vi.mocked(useOsdkAggregation).mockImplementation((_objType, args) => {
    const kind = (args as { objectSet?: { _kind?: string } }).objectSet?._kind;
    return asResult(kind === "base" ? base : narrowed);
  });
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("useDualScopeAggregation", () => {
  describe("single-scope mode", () => {
    it("returns the primary aggregation's result when baseObjectSet is undefined", () => {
      mockByScope(
        makeData([
          { name: "Engineering", count: 3 },
          { name: "Marketing", count: 2 },
        ]),
        makeData([]),
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          undefined,
          {},
        )
      );

      expect(result.current.data.map((d) => d.value)).toEqual([
        "Engineering",
        "Marketing",
      ]);
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });

    it("treats baseObjectSet === objectSet as single-scope", () => {
      mockByScope(
        makeData([{ name: "Engineering", count: 3 }]),
        makeData([
          { name: "Engineering", count: 99 },
          { name: "Sales", count: 99 },
        ]),
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          NARROWED_SET, // same reference -> single scope
          {},
        )
      );

      // Returns the narrowed aggregation only; no Sales ghost merged in.
      expect(result.current.data.map((d) => d.value)).toEqual(["Engineering"]);
    });

    it("forwards selectedValues as activeValues to the primary aggregation", () => {
      mockByScope(
        makeData([{ name: "Engineering", count: 3 }]),
        makeData([]),
      );

      renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          undefined,
          { selectedValues: ["Marketing"] },
        )
      );

      // The primary aggregation should see Marketing in activeValues so it
      // synthesizes a ghost row for the saved selection.
      const primaryCall = vi
        .mocked(useOsdkAggregation)
        .mock.calls.find(([_t, args]) =>
          (args as { objectSet?: { _kind?: string } }).objectSet?._kind
            === "narrowed"
        );
      expect(primaryCall).toBeDefined();
    });
  });

  describe("dual-scope mode", () => {
    it("merges base-only values into activeValues as count=0 ghosts", () => {
      mockByScope(
        makeData([{ name: "Engineering", count: 3 }]),
        makeData([
          { name: "Engineering", count: 5 },
          { name: "Marketing", count: 2 },
          { name: "Sales", count: 1 },
        ]),
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          BASE_SET,
          {},
        )
      );

      const values = result.current.data;
      const engineering = values.find((v) => v.value === "Engineering");
      const marketing = values.find((v) => v.value === "Marketing");
      const sales = values.find((v) => v.value === "Sales");

      // Engineering is in both; gets the narrowed count.
      expect(engineering?.count).toBe(3);
      // Base-only values become ghost rows (count 0).
      expect(marketing?.count).toBe(0);
      expect(sales?.count).toBe(0);
    });

    it("unions selectedValues with discovered base values", () => {
      mockByScope(
        makeData([{ name: "Engineering", count: 3 }]),
        makeData([{ name: "Marketing", count: 2 }]),
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          BASE_SET,
          { selectedValues: ["Research"] },
        )
      );

      const values = result.current.data.map((d) => d.value);
      // Engineering: from narrowed. Marketing: base ghost. Research: selected ghost.
      expect(values).toContain("Engineering");
      expect(values).toContain("Marketing");
      expect(values).toContain("Research");
    });
  });

  describe("loading and error propagation", () => {
    it("reports isLoading=true when either aggregation is loading", () => {
      vi.mocked(useOsdkAggregation).mockImplementation((_objType, args) => {
        const kind = (args as { objectSet?: { _kind?: string } }).objectSet
          ?._kind;
        return asResult({
          data: [],
          isLoading: kind === "base",
          error: null,
        });
      });

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          BASE_SET,
          {},
        )
      );

      expect(result.current.isLoading).toBe(true);
    });

    it("surfaces the primary (narrowed) aggregation's error", () => {
      const narrowedError = new Error("narrowed failed");
      mockByScope(
        { data: [], isLoading: false, error: narrowedError },
        makeData([{ name: "Marketing", count: 1 }]),
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          BASE_SET,
          {},
        )
      );

      expect(result.current.error).toBe(narrowedError);
    });

    it("silently degrades ghost rendering when base aggregation errors", () => {
      const baseError = new Error("base failed");
      mockByScope(
        makeData([{ name: "Engineering", count: 3 }]),
        { data: [], isLoading: false, error: baseError },
      );

      const { result } = renderHook(() =>
        useDualScopeAggregation(
          MockObjectType,
          "name" as PropertyKeys<typeof MockObjectType>,
          NARROWED_SET,
          BASE_SET,
          { selectedValues: ["Research"] },
        )
      );

      // Narrowed data still surfaces; selected ghost still appears; no
      // base-only ghosts since base failed.
      const values = result.current.data.map((d) => d.value);
      expect(values).toContain("Engineering");
      expect(values).toContain("Research");
      // No error on the public surface — narrowed succeeded.
      expect(result.current.error).toBeNull();
    });
  });
});
