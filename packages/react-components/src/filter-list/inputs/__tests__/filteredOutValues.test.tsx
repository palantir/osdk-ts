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

import type {
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { mockAggregationByObjectSetKind } from "../../__tests__/aggregationMocks.js";
import { MockObjectType } from "../../__tests__/testUtils.js";
import type {
  LinkedFilter,
  LinkedPropertyFilterDefinition,
} from "../../types/LinkedFilterTypes.js";
import type { StaticValuesFilterDefinition } from "../../types/StaticValuesTypes.js";
import { LinkedPropertyInput } from "../LinkedPropertyInput.js";
import { ListogramFilterInput } from "../ListogramFilterInput.js";
import { MultiSelectFilterInput } from "../MultiSelectFilterInput.js";
import { SingleSelectFilterInput } from "../SingleSelectFilterInput.js";
import { StaticValuesFilterInput } from "../StaticValuesFilterInput.js";

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

function mockDualAggregationData(
  narrowed: Array<{ name: string; count: number }>,
  base: Array<{ name: string; count: number }>,
): void {
  mockAggregationByObjectSetKind({ narrowed, base, linked: narrowed });
}

describe("filtered-out initialFilterStates values", () => {
  describe("ListogramFilterInput", () => {
    it("renders filtered-out selected value as a checked row with count 0", () => {
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
    it("renders filtered-out selected value as a chip when aggregation returns empty", () => {
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
    it("mounts combobox for filtered-out selected value instead of showing empty message", () => {
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
      // and the Combobox never mounts. With the fix, the filtered-out value
      // makes values.length > 0, so the search input renders instead.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByLabelText("Select name")).toBeDefined();
    });
  });
});

describe("STATIC_VALUES filters", () => {
  it("does not mark unselected static listogram values as filtered out", () => {
    const definition = {
      type: "STATIC_VALUES",
      key: "department",
      filterComponent: "LISTOGRAM",
      values: ["Marketing", "Operations"],
      filterState: { type: "EXACT_MATCH", values: [] },
    } satisfies StaticValuesFilterDefinition<
      typeof MockObjectType,
      "LISTOGRAM"
    >;

    render(
      <StaticValuesFilterInput
        definition={definition}
        filterState={definition.filterState}
        onFilterStateChanged={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /Marketing/ }).hasAttribute(
        "data-filtered-out",
      ),
    ).toBe(false);
    expect(
      screen.getByRole("button", { name: /Operations/ }).hasAttribute(
        "data-filtered-out",
      ),
    ).toBe(false);
  });

  it("does not style unselected static multi-select values as filtered out", () => {
    const definition = {
      type: "STATIC_VALUES",
      key: "team",
      filterComponent: "MULTI_SELECT",
      values: ["Alpha", "Beta"],
      filterState: { type: "SELECT", selectedValues: [] },
    } satisfies StaticValuesFilterDefinition<
      typeof MockObjectType,
      "MULTI_SELECT"
    >;

    render(
      <StaticValuesFilterInput
        definition={definition}
        filterState={definition.filterState}
        onFilterStateChanged={vi.fn()}
        layout="inline"
      />,
    );

    expect(screen.getByRole("option", { name: /Alpha/ }).className).not
      .toContain("filteredOutItem");
    expect(screen.getByRole("option", { name: /Beta/ }).className).not
      .toContain("filteredOutItem");
  });
});

describe("linked-filter filtered-out rendering (showFilteredOutValues)", () => {
  const linkedFilters: ReadonlyArray<LinkedFilter<typeof MockObjectType>> = [
    {
      linkName: "lead",
      reverseLinkName: "peeps",
      innerWhere: { fullName: "Alice" } as unknown as WhereClause<
        typeof MockObjectType
      >,
    },
  ] as unknown as ReadonlyArray<LinkedFilter<typeof MockObjectType>>;

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

  const EMPTY = {} as WhereClause<typeof MockObjectType>;

  it("marks base-only values as data-filtered-out in ListogramFilterInput", () => {
    mockDualAggregationData(
      [{ name: "Engineering", count: 3 }],
      [{ name: "Engineering", count: 5 }, { name: "Marketing", count: 2 }],
    );
    render(
      <ListogramFilterInput
        objectType={MockObjectType}
        objectSet={baseSet}
        propertyKey="name"
        whereClause={EMPTY}
        linkedFilters={linkedFilters}
        showFilteredOutValues={true}
        filterState={{ type: "EXACT_MATCH", values: [] }}
        onFilterStateChanged={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Engineering/ }).hasAttribute(
        "data-filtered-out",
      ),
    ).toBe(false);
    expect(
      screen.getByRole("button", { name: /Marketing/ }).hasAttribute(
        "data-filtered-out",
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
        whereClause={EMPTY}
        linkedFilters={linkedFilters}
        showFilteredOutValues={true}
        filterState={{ type: "SELECT", selectedValues: [] }}
        onFilterStateChanged={vi.fn()}
      />,
    );
    expect(
      screen.getByTitle("Approximate count of unique values").textContent,
    ).toContain("2");
  });

  describe("linked-property facet (direct-filter narrowing)", () => {
    const LinkedManagerObjectType = {
      apiName: "Manager",
      type: "object",
      __DefinitionMetadata: {
        primaryKeyApiName: "id",
        primaryKeyType: "string",
        properties: { name: { type: "string", multiplicity: false } },
      },
    } as unknown as ObjectTypeDefinition;

    const linkedListogramDefinition = {
      type: "LINKED_PROPERTY",
      linkName: "manager",
      reverseLinkName: "peeps",
      linkedPropertyKey: "name" as PropertyKeys<ObjectTypeDefinition>,
      linkedFilterComponent: "LISTOGRAM",
      linkedFilterState: { type: "EXACT_MATCH", values: [] },
      filterState: {
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values: [] },
      },
    } as unknown as LinkedPropertyFilterDefinition<
      typeof MockObjectType,
      string,
      ObjectTypeDefinition,
      PropertyKeys<ObjectTypeDefinition>
    >;

    function makeMockSource() {
      const basePivot = {
        _kind: "base",
        $objectSetInternals: { def: LinkedManagerObjectType },
      };
      const scopedPivot = {
        _kind: "narrowed",
        $objectSetInternals: { def: LinkedManagerObjectType },
      };
      const scopedSourceSet = {
        pivotTo: vi.fn().mockReturnValue(scopedPivot),
      };
      const source = {
        pivotTo: vi.fn().mockReturnValue(basePivot),
        where: vi.fn().mockReturnValue(scopedSourceSet),
      } as unknown as ObjectSet<typeof MockObjectType>;
      return source;
    }

    it("marks linked values whose source rows were filtered out as filtered-out", () => {
      mockDualAggregationData(
        [{ name: "Alice", count: 4 }, { name: "Bob", count: 2 }],
        [
          { name: "Alice", count: 5 },
          { name: "Bob", count: 3 },
          { name: "Carol", count: 1 },
        ],
      );

      render(
        <LinkedPropertyInput
          objectSet={makeMockSource()}
          whereClause={{ department: "Engineering" } as unknown as WhereClause<
            typeof MockObjectType
          >}
          linkedFilters={[]}
          definition={linkedListogramDefinition}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          showFilteredOutValues={true}
        />,
      );

      expect(
        screen.getByRole("button", { name: /Alice/ }).hasAttribute(
          "data-filtered-out",
        ),
      ).toBe(false);
      expect(
        screen.getByRole("button", { name: /Bob/ }).hasAttribute(
          "data-filtered-out",
        ),
      ).toBe(false);
      const carolRow = screen.getByRole("button", { name: /Carol/ });
      expect(carolRow.hasAttribute("data-filtered-out")).toBe(true);
      expect(carolRow.textContent).toContain("0");
    });

    it("does not mark rows as filtered-out when showFilteredOutValues is false", () => {
      mockDualAggregationData(
        [{ name: "Alice", count: 4 }, { name: "Bob", count: 2 }],
        [
          { name: "Alice", count: 5 },
          { name: "Bob", count: 3 },
          { name: "Carol", count: 1 },
        ],
      );

      render(
        <LinkedPropertyInput
          objectSet={makeMockSource()}
          whereClause={{ department: "Engineering" } as unknown as WhereClause<
            typeof MockObjectType
          >}
          linkedFilters={[]}
          definition={linkedListogramDefinition}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          showFilteredOutValues={false}
        />,
      );

      expect(screen.queryByRole("button", { name: /Carol/ })).toBeNull();
    });
  });
});
