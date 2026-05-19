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

import type { ObjectSet, WhereClause } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockObjectType } from "../../__tests__/testUtils.js";
import { ListogramFilterInput } from "../ListogramFilterInput.js";
import { MultiSelectFilterInput } from "../MultiSelectFilterInput.js";
import { SingleSelectFilterInput } from "../SingleSelectFilterInput.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

const EMPTY_WHERE = {} as WhereClause<typeof MockObjectType>;

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

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

/**
 * Provides scripted responses to two parallel `useOsdkAggregation` calls
 * inside a filter input running with `showFilteredOutValues`. The two calls
 * differ in which `objectSet` they target; we discriminate on a `_kind` tag
 * carried on the test fixtures (`baseSet`, `narrowedSet`) rather than on call
 * order, so the mock is robust to hook-order refactors.
 */
function mockDualAggregationData(
  narrowed: Array<{ name: string; count: number }>,
  base: Array<{ name: string; count: number }>,
): void {
  const toData = (groups: Array<{ name: string; count: number }>) => ({
    data: groups.map((g) => ({ $group: { name: g.name }, $count: g.count })),
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  });
  vi.mocked(useOsdkAggregation).mockImplementation((_objType, args) => {
    const kind = (args as { objectSet?: { _kind?: string } }).objectSet?._kind;
    const result = kind === "base" ? toData(base) : toData(narrowed);
    return result as unknown as ReturnType<typeof useOsdkAggregation>;
  });
}

describe("ghost initialFilterStates values", () => {
  describe("ListogramFilterInput", () => {
    it("renders ghost selected value as a checked row with count 0", () => {
      mockAggregationData([{ name: "Marketing", count: 5 }]);
      render(
        <ListogramFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "EXACT_MATCH",
            values: ["Marketing", "Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // Both rows render — "Marketing" from aggregation, "Research" synthesized
      const marketingRow = screen.getByRole("button", { name: /Marketing/ });
      const researchRow = screen.getByRole("button", { name: /Research/ });

      // Both are pressed (selected) since both are in filterState.values
      expect(marketingRow.getAttribute("aria-pressed")).toBe("true");
      expect(researchRow.getAttribute("aria-pressed")).toBe("true");

      // "Research" row shows count 0 (inside its own row, not just anywhere)
      expect(researchRow.textContent).toContain("0");
    });
  });

  describe("MultiSelectFilterInput", () => {
    it("renders ghost selected value as a chip when aggregation returns empty", () => {
      mockAggregationData([]);

      render(
        <MultiSelectFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "SELECT",
            selectedValues: ["Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // Without the fix, values.length === 0 shows "No options available"
      // and the Combobox never mounts — no chip, no way to see the selection.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByText("Research")).toBeDefined();
    });
  });

  describe("SingleSelectFilterInput", () => {
    it("mounts combobox for ghost selected value instead of showing empty message", () => {
      mockAggregationData([]);

      render(
        <SingleSelectFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "SELECT",
            selectedValues: ["Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // Without the fix, values.length === 0 renders "No options available"
      // and the Combobox never mounts. With the fix, the ghost value makes
      // values.length > 0, so the search input renders instead.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByLabelText("Select name")).toBeDefined();
    });
  });
});

describe("linked-filter ghost rendering (showFilteredOutValues)", () => {
  // A `whereClause` with a `$reverseLink` link entry: the walker pivots through
  // it to compute the narrowed scope; stripping it yields the wider scope.
  const linkedWhere = {
    lead: { $reverseLink: "peeps", fullName: "Alice" },
  } as unknown as WhereClause<typeof MockObjectType>;

  // Identifiable scopes: the walker calls
  // `base.pivotTo("lead").where(...).pivotTo("peeps")` and then
  // `base.intersect(...)` — so anything tagged "narrowed" is the post-intersect
  // result, "base" is the original.
  const narrowed = { _kind: "narrowed" } as unknown as ObjectSet<
    typeof MockObjectType
  >;
  const linkedScope = {
    where: vi.fn().mockReturnValue({
      pivotTo: vi.fn().mockReturnValue({ _kind: "linked" }),
    }),
  };
  const baseSet = {
    _kind: "base",
    pivotTo: vi.fn().mockReturnValue(linkedScope),
    intersect: vi.fn().mockReturnValue(narrowed),
  } as unknown as ObjectSet<typeof MockObjectType>;

  it("marks base-only values as data-ghost in ListogramFilterInput", () => {
    mockDualAggregationData(
      [{ name: "Engineering", count: 3 }],
      [{ name: "Engineering", count: 5 }, { name: "Marketing", count: 2 }],
    );
    render(
      <ListogramFilterInput
        objectType={MockObjectType}
        objectSet={baseSet}
        propertyKey="name"
        whereClause={linkedWhere}
        showFilteredOutValues={true}
        filterState={{ type: "EXACT_MATCH", values: [] }}
        onFilterStateChanged={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Engineering/ }).hasAttribute(
        "data-ghost",
      ),
    ).toBe(false);
    expect(
      screen.getByRole("button", { name: /Marketing/ }).hasAttribute(
        "data-ghost",
      ),
    ).toBe(true);
  });

  it("merges base-only values into the MultiSelect option list", () => {
    mockDualAggregationData(
      [{ name: "Engineering", count: 3 }],
      [{ name: "Engineering", count: 5 }, { name: "Marketing", count: 2 }],
    );
    render(
      <MultiSelectFilterInput
        objectType={MockObjectType}
        objectSet={baseSet}
        propertyKey="name"
        whereClause={linkedWhere}
        showFilteredOutValues={true}
        filterState={{ type: "SELECT", selectedValues: [] }}
        onFilterStateChanged={vi.fn()}
      />,
    );
    expect(
      screen.getByTitle("Approximate count of unique values").textContent,
    ).toContain("2");
  });
});
