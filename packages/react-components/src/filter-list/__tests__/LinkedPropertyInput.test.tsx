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
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { FilterState } from "../FilterListItemApi.js";
import { LinkedPropertyInput } from "../inputs/LinkedPropertyInput.js";
import type { LinkedPropertyFilterDefinition } from "../types/LinkedFilterTypes.js";

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
    | "CHECKBOX_LIST"
    | "MULTI_SELECT"
    | "SINGLE_SELECT"
    | "CONTAINS_TEXT"
    | "TOGGLE"
    | "NUMBER_RANGE"
    | "DATE_RANGE"
    | "TIMELINE"
    | "LISTOGRAM"
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
        ...createDefinition("CHECKBOX_LIST"),
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
