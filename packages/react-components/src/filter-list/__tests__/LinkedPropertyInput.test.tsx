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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { FilterState } from "../FilterListItemApi.js";
import { LinkedPropertyInput } from "../inputs/LinkedPropertyInput.js";
import type { LinkedPropertyFilterDefinition } from "../types/LinkedFilterTypes.js";

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

  return {
    $objectSetInternals: {
      def: {
        apiName: "Employee",
        type: "object",
      } as ObjectTypeDefinition,
    },
    pivotTo: vi.fn().mockReturnValue(linkedObjectSet),
  } as unknown as ObjectSet<ObjectTypeDefinition>;
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
          definition={createDefinition("TOGGLE")}
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
        />,
      );

      expect(mockObjectSet.pivotTo).toHaveBeenCalledWith("primaryOffice");
    });
  });

  describe("ghost initialFilterStates values", () => {
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

    it("renders ghost selected value as a chip in MULTI_SELECT", () => {
      mockAggregationData([]);
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
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

    it("mounts combobox for ghost selected value in SINGLE_SELECT", () => {
      mockAggregationData([]);
      const mockObjectSet = createMockObjectSet();

      render(
        <LinkedPropertyInput
          objectSet={mockObjectSet}
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
      // and the Combobox never mounts. With the fix, the ghost value makes
      // values.length > 0, so the search input renders instead.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByLabelText("Select name")).toBeDefined();
    });

    it("renders ghost selected value as a checked row with count 0 in LISTOGRAM", () => {
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
          definition={definition}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );

      const dateInput = screen.getByLabelText("Select date");
      expect(dateInput).toBeTruthy();
      expect(dateInput.getAttribute("type")).toBe("date");
    });
  });
});
