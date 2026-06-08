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

import type {
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { FilterState } from "../FilterListItemApi.js";
import { LinkedPropertyInput } from "../inputs/LinkedPropertyInput.js";
import type {
  LinkedFilter,
  LinkedPropertyFilterDefinition,
} from "../types/LinkedFilterTypes.js";
import { mockAggregationByObjectSetKind } from "./aggregationMocks.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

const MockLinkedObjectType = {
  apiName: "Office",
  type: "object",
  __DefinitionMetadata: {
    primaryKeyApiName: "officeId",
    primaryKeyType: "string",
    properties: {
      officeId: { type: "string", multiplicity: false },
      name: { type: "string", multiplicity: false },
      capacity: { type: "integer", multiplicity: false },
    },
  },
} as unknown as ObjectTypeDefinition;

function createMockObjectSet() {
  const linkedObjectSet = {
    $objectSetInternals: {
      def: MockLinkedObjectType,
    },
  };

  const mock: ObjectSet<ObjectTypeDefinition> = {
    $objectSetInternals: {
      def: {
        apiName: "Employee",
        type: "object",
      } as ObjectTypeDefinition,
    },
    pivotTo: vi.fn().mockReturnValue(linkedObjectSet),
    where: vi.fn(),
  } as unknown as ObjectSet<ObjectTypeDefinition>;
  // Default `where` returns the mock itself so chained calls work; tests that
  // assert on `.where()` override this.
  vi.mocked(mock.where).mockReturnValue(mock);
  return mock;
}

function createDefinition(
  linkedFilterComponent:
    | "LISTOGRAM"
    | "MULTI_SELECT"
    | "SINGLE_SELECT"
    | "CONTAINS_TEXT"
    | "TOGGLE"
    | "NUMBER_RANGE"
    | "DATE_RANGE"
    | "TIMELINE"
    | "TEXT_TAGS"
    | "SINGLE_DATE"
    | "MULTI_DATE",
): LinkedPropertyFilterDefinition<
  ObjectTypeDefinition,
  string,
  ObjectTypeDefinition,
  PropertyKeys<ObjectTypeDefinition>
> {
  return {
    type: "LINKED_PROPERTY",
    linkName: "primaryOffice",
    reverseLinkName: "occupants",
    linkedPropertyKey: "name" as PropertyKeys<ObjectTypeDefinition>,
    linkedFilterComponent,
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
  } as LinkedPropertyFilterDefinition<
    ObjectTypeDefinition,
    string,
    ObjectTypeDefinition,
    PropertyKeys<ObjectTypeDefinition>
  >;
}

describe("LinkedPropertyInput", () => {
  afterEach(() => {
    cleanup();
  });

  describe("state wrapping", () => {
    it("wraps child onChange in LINKED_PROPERTY state", () => {
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      const toggle = screen.getByRole("switch");
      toggle.click();

      expect(onFilterStateChanged).toHaveBeenCalledWith({
        type: "linkedProperty",
        linkedFilterState: {
          type: "TOGGLE",
          enabled: true,
        },
      });
    });
  });

  describe("state unwrapping", () => {
    it("extracts linkedFilterState from LINKED_PROPERTY wrapper", () => {
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      const filterState: FilterState = {
        type: "linkedProperty",
        linkedFilterState: {
          type: "TOGGLE",
          enabled: true,
        },
      };

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={filterState}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      const toggle = screen.getByRole("switch");
      expect(toggle.getAttribute("aria-checked")).toBe("true");
    });

    it("handles undefined filterState gracefully", () => {
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      const toggle = screen.getByRole("switch");
      expect(toggle.getAttribute("aria-checked")).toBe("false");
    });

    it("handles filterState with wrong type gracefully", () => {
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      const wrongState: FilterState = {
        type: "SELECT",
        selectedValues: ["value1"],
      };

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={wrongState}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      const toggle = screen.getByRole("switch");
      expect(toggle.getAttribute("aria-checked")).toBe("false");
    });
  });

  describe("ObjectSet pivoting", () => {
    it("calls pivotTo with correct link name", () => {
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      expect(mockObjectSet.pivotTo).toHaveBeenCalledWith("primaryOffice");
    });

    it("pivots the raw objectSet for emptySource when showFilteredOutValues is true and whereClause is non-empty", () => {
      const scopedLinkedSet = {
        $objectSetInternals: { def: MockLinkedObjectType },
      };
      const rawLinkedSet = {
        $objectSetInternals: { def: MockLinkedObjectType },
      };
      const scopedSourceSet = {
        pivotTo: vi.fn().mockReturnValue(scopedLinkedSet),
      };
      const mockObjectSet = {
        $objectSetInternals: {
          def: { apiName: "Employee", type: "object" } as ObjectTypeDefinition,
        },
        pivotTo: vi.fn().mockReturnValue(rawLinkedSet),
        where: vi.fn().mockReturnValue(scopedSourceSet),
      } as unknown as ObjectSet<ObjectTypeDefinition>;

      vi.mocked(useOsdkAggregation).mockReturnValue({
        data: [],
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as unknown as ReturnType<typeof useOsdkAggregation>);

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{ department: "Engineering" } as unknown as WhereClause<
            ObjectTypeDefinition
          >}
          linkedFilters={[]}
          definition={createDefinition("MULTI_SELECT")}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          showFilteredOutValues={true}
        />,
      );

      expect(mockObjectSet.where).toHaveBeenCalled();
      expect(scopedSourceSet.pivotTo).toHaveBeenCalledWith("primaryOffice");
      expect(mockObjectSet.pivotTo).toHaveBeenCalledWith("primaryOffice");
    });
  });

  describe("filtered-out initialFilterStates values", () => {
    function mockAggregationData(
      groups: Array<{ name: string; count: number }>,
    ): void {
      vi.mocked(useOsdkAggregation).mockReturnValue({
        data: groups.map((g) => ({
          $group: { name: g.name },
          $count: g.count,
        })),
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as unknown as ReturnType<typeof useOsdkAggregation>);
    }

    it("renders filtered-out selected value as a chip in MULTI_SELECT", () => {
      mockAggregationData([]);
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("MULTI_SELECT")}
          filterState={{
            type: "linkedProperty",
            linkedFilterState: {
              type: "SELECT",
              selectedValues: ["Research"],
            },
          }}
          onFilterStateChanged={vi.fn()}
        />,
      );

      // Without the fix, values.length === 0 shows "No options available"
      // and the Combobox never mounts — no chip, no way to see the selection.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByText("Research")).toBeDefined();
    });

    it("mounts combobox for filtered-out selected value in SINGLE_SELECT", () => {
      mockAggregationData([]);
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("SINGLE_SELECT")}
          filterState={{
            type: "linkedProperty",
            linkedFilterState: {
              type: "SELECT",
              selectedValues: ["Research"],
            },
          }}
          onFilterStateChanged={vi.fn()}
        />,
      );

      // Without the fix, values.length === 0 renders "No options available"
      // and the Combobox never mounts. With the fix, the filtered-out value
      // makes values.length > 0, so the search input renders instead.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByLabelText("Select name")).toBeDefined();
    });

    it("renders filtered-out selected value as a checked row with count 0 in LISTOGRAM", () => {
      mockAggregationData([{ name: "Marketing", count: 5 }]);
      const mockObjectSet = createMockObjectSet();

      const definition = {
        ...createDefinition("LISTOGRAM"),
        linkedFilterState: { type: "EXACT_MATCH" as const, values: [] },
        filterState: {
          type: "linkedProperty" as const,
          linkedFilterState: {
            type: "EXACT_MATCH" as const,
            values: [],
          },
        },
      } as LinkedPropertyFilterDefinition<
        ObjectTypeDefinition,
        string,
        ObjectTypeDefinition,
        PropertyKeys<ObjectTypeDefinition>
      >;

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={definition}
          filterState={{
            type: "linkedProperty",
            linkedFilterState: {
              type: "EXACT_MATCH",
              values: ["Marketing", "Research"],
            },
          }}
          onFilterStateChanged={vi.fn()}
        />,
      );

      // Both rows render — "Marketing" from aggregation, "Research" synthesized
      const marketingRow = screen.getByRole("button", { name: /Marketing/ });
      const researchRow = screen.getByRole("button", { name: /Research/ });

      expect(marketingRow.getAttribute("aria-pressed")).toBe("true");
      expect(researchRow.getAttribute("aria-pressed")).toBe("true");
      expect(researchRow.textContent).toContain("0");
    });
  });

  describe("component selection", () => {
    it("renders ToggleInput for TOGGLE component", () => {
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("TOGGLE")}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );

      expect(screen.getByRole("switch")).toBeTruthy();
    });

    it("renders ContainsTextInput for CONTAINS_TEXT component", () => {
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("CONTAINS_TEXT")}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );

      expect(screen.getByRole("textbox")).toBeTruthy();
      expect(screen.getByPlaceholderText("Search name...")).toBeTruthy();
    });

    it("renders SingleDateInput for SINGLE_DATE component", () => {
      const mockObjectSet = createMockObjectSet();
      const definition = {
        ...createDefinition("LISTOGRAM"),
        linkedFilterComponent: "SINGLE_DATE" as const,
      } as LinkedPropertyFilterDefinition<
        ObjectTypeDefinition,
        string,
        ObjectTypeDefinition,
        PropertyKeys<ObjectTypeDefinition>
      >;

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={definition}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );

      const dateInput = screen.getByLabelText("Select date");
      expect(dateInput).toBeTruthy();
      expect(dateInput.getAttribute("role")).toBe("combobox");
    });
  });

  describe("showFilteredOutValues (linked filtered-out rows)", () => {
    function mockDualLinkedAggregation(
      scoped: Array<{ name: string; count: number }>,
      emptySource: Array<{ name: string; count: number }>,
    ): void {
      mockAggregationByObjectSetKind({
        scoped,
        emptySource,
        "scoped-intersected": scoped,
        chained: scoped,
      });
    }

    function makeChainable(
      kind: string,
    ): ObjectSet<ObjectTypeDefinition> {
      const set = {
        _kind: kind,
        $objectSetInternals: { def: MockLinkedObjectType },
        where: vi.fn(),
        pivotTo: vi.fn(),
        intersect: vi.fn(),
      } as unknown as ObjectSet<ObjectTypeDefinition>;
      vi.mocked(set.where).mockImplementation(() => makeChainable("chained"));
      vi.mocked(set.pivotTo).mockImplementation(() => makeChainable(kind));
      vi.mocked(set.intersect).mockImplementation(() => makeChainable(kind));
      return set;
    }

    function createDualScopeMock(): ObjectSet<ObjectTypeDefinition> {
      const emptySourcePivoted = makeChainable("emptySource");
      const scopedPivoted = makeChainable("scoped");
      const intersected = {
        ...makeChainable("scoped-intersected"),
      } as ObjectSet<ObjectTypeDefinition>;
      vi.mocked(intersected.pivotTo).mockImplementation(() => scopedPivoted);

      const base = makeChainable("base");
      vi.mocked(base.pivotTo).mockImplementation(() => emptySourcePivoted);
      vi.mocked(base.intersect).mockImplementation(() => intersected);
      return base;
    }

    it("merges emptySource linked-facet values into LISTOGRAM as count=0 filtered-out rows when showFilteredOutValues + linkedFilters", () => {
      mockDualLinkedAggregation(
        [{ name: "Alice", count: 2 }],
        [{ name: "Alice", count: 5 }, { name: "Bob", count: 3 }],
      );
      const objectSet = createDualScopeMock();
      const linkedFilters: ReadonlyArray<LinkedFilter<ObjectTypeDefinition>> = [
        {
          linkName: "manager",
          reverseLinkName: "reports",
          innerWhere: {} as WhereClause<ObjectTypeDefinition>,
        },
      ];

      render(
        <LinkedPropertyInput
          objectSet={objectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          linkedFilters={linkedFilters}
          showFilteredOutValues={true}
          definition={createDefinition("LISTOGRAM")}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );

      // Both rows render — "Alice" from scoped, "Bob" synthesized from
      // emptySource as a count=0 filtered-out row.
      expect(screen.getByRole("button", { name: /Alice/ })).toBeTruthy();
      const bobRow = screen.getByRole("button", { name: /Bob/ });
      expect(bobRow.hasAttribute("data-filtered-out")).toBe(true);
    });
  });

  describe("include/exclude controls", () => {
    function mockEmptyAggregation(): void {
      vi.mocked(useOsdkAggregation).mockReturnValue({
        data: [],
        isLoading: false,
        error: null,
        refetch: vi.fn(),
      } as unknown as ReturnType<typeof useOsdkAggregation>);
    }

    it("renders the keeping/excluding dropdown and Clear all for a linked MULTI_SELECT with a selection", () => {
      const selectedState: FilterState = {
        type: "linkedProperty",
        linkedFilterState: { type: "SELECT", selectedValues: ["Research"] },
      };
      mockEmptyAggregation();
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("MULTI_SELECT")}
          filterState={selectedState}
          onFilterStateChanged={vi.fn()}
          excludeRowOpen={true}
        />,
      );

      expect(screen.getByRole("button", { name: "Keeping" })).toBeDefined();
      expect(screen.getByText("Clear all")).toBeDefined();
    });

    it("clears the inner selection through the LINKED_PROPERTY wrapper when Clear all is clicked", () => {
      const selectedState: FilterState = {
        type: "linkedProperty",
        linkedFilterState: { type: "SELECT", selectedValues: ["Research"] },
      };
      mockEmptyAggregation();
      const mockObjectSet = createMockObjectSet();
      const onFilterStateChanged = vi.fn();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("MULTI_SELECT")}
          filterState={selectedState}
          onFilterStateChanged={onFilterStateChanged}
          excludeRowOpen={true}
        />,
      );

      fireEvent.click(screen.getByText("Clear all"));

      expect(onFilterStateChanged).toHaveBeenCalledWith({
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: [],
          isExcluding: undefined,
        },
      });
    });

    it("does not render exclude controls for a linked NUMBER_RANGE filter", () => {
      mockEmptyAggregation();
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
          whereClause={{} as WhereClause<ObjectTypeDefinition>}
          definition={createDefinition("NUMBER_RANGE")}
          filterState={{
            type: "linkedProperty",
            linkedFilterState: {
              type: "NUMBER_RANGE",
              minValue: 1,
              maxValue: 5,
            },
          }}
          onFilterStateChanged={vi.fn()}
          excludeRowOpen={true}
        />,
      );

      expect(screen.queryByRole("button", { name: "Keeping" })).toBeNull();
    });
  });
});
