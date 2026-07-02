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

import { LinkedPropertyInput } from "../../../inputs/LinkedPropertyInput.js";
import type { PropertyAggregationValue } from "../../../types/AggregationTypes.js";
import type { LinkedPropertyFilterDefinition } from "../../../types/LinkedFilterTypes.js";
import { NO_VALUE } from "../../../utils/filterValues.js";
import { createRenderValueFilter } from "../comboboxFilter.js";
import { ListogramInput } from "../ListogramInput.js";
import { MultiSelectInput } from "../MultiSelectInput.js";
import { SingleSelectInput } from "../SingleSelectInput.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
}));

afterEach(cleanup);

const mockValues: PropertyAggregationValue[] = [
  { value: "abc-123", count: 7 },
  { value: "def-456", count: 3 },
];

const LABELS: Record<string, string> = {
  "abc-123": "Alice Smith",
  "def-456": "Bob Jones",
};

const mockRenderValue = (value: string): string => LABELS[value] ?? value;

describe("ListogramInput renderValue", () => {
  it("renders custom display text via renderValue", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />
    );

    expect(screen.getByText("Alice Smith")).toBeDefined();
    expect(screen.getByText("Bob Jones")).toBeDefined();
  });

  it("falls back to raw string without renderValue", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />
    );

    expect(screen.getByText("abc-123")).toBeDefined();
    expect(screen.getByText("def-456")).toBeDefined();
  });

  it("renders 'No value' for the No-value sentinel even with renderValue", () => {
    const valuesWithNull: PropertyAggregationValue[] = [
      { value: NO_VALUE, count: 2, isNull: true },
      { value: "abc-123", count: 5 },
    ];

    render(
      <ListogramInput
        values={valuesWithNull}
        maxCount={5}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />
    );

    expect(screen.getByText("No value")).toBeDefined();
    expect(screen.getByText("Alice Smith")).toBeDefined();
  });

  it("renders '(empty string)' for a literal empty string, distinct from No value", () => {
    const valuesWithEmpty: PropertyAggregationValue[] = [
      { value: NO_VALUE, count: 2, isNull: true },
      { value: "", count: 4 },
      { value: "abc-123", count: 5 },
    ];

    render(
      <ListogramInput
        values={valuesWithEmpty}
        maxCount={5}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />
    );

    expect(screen.getByText("No value")).toBeDefined();
    expect(screen.getByText("(empty string)")).toBeDefined();
    expect(screen.getByText("Alice Smith")).toBeDefined();
  });

  it("filters by rendered value when searchQuery is provided", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
        searchQuery="Alice"
      />
    );

    expect(screen.getByText("Alice Smith")).toBeDefined();
    expect(screen.queryByText("Bob Jones")).toBeNull();
  });

  it("filters by raw value when no renderValue is provided", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        searchQuery="abc"
      />
    );

    expect(screen.getByText("abc-123")).toBeDefined();
    expect(screen.queryByText("def-456")).toBeNull();
  });
});

describe("MultiSelectInput renderValue", () => {
  it("renders custom display text in selected chips", () => {
    render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["abc-123"]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />
    );

    expect(screen.getByText("Alice Smith")).toBeDefined();
  });

  it("does not render custom text without renderValue", () => {
    render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["abc-123"]}
        onChange={vi.fn()}
      />
    );

    expect(screen.queryByText("Alice Smith")).toBeNull();
  });
});

describe("ListogramInput renderValue (ReactNode)", () => {
  const renderValueAsNode = (value: string): React.ReactNode => (
    <a href={`/user/${value}`} data-testid={`anchor-${value}`}>
      {LABELS[value] ?? value}
    </a>
  );

  it("renders JSX returned from renderValue", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={renderValueAsNode}
      />
    );

    expect(screen.getByTestId("anchor-abc-123")).toBeDefined();
    expect(screen.getByText("Alice Smith")).toBeDefined();
  });

  it("falls back to raw value for search when renderValue returns JSX", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={renderValueAsNode}
        searchQuery="abc"
      />
    );

    expect(screen.getByTestId("anchor-abc-123")).toBeDefined();
    expect(screen.queryByTestId("anchor-def-456")).toBeNull();
  });
});

describe("MultiSelectInput renderValue (ReactNode)", () => {
  it("renders JSX returned from renderValue inside a selected chip", () => {
    const renderValueAsNode = (value: string): React.ReactNode => (
      <a href={`/user/${value}`} data-testid={`chip-anchor-${value}`}>
        {LABELS[value] ?? value}
      </a>
    );

    render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["abc-123"]}
        onChange={vi.fn()}
        renderValue={renderValueAsNode}
      />
    );

    expect(screen.getByTestId("chip-anchor-abc-123")).toBeDefined();
    expect(screen.getByText("Alice Smith")).toBeDefined();
  });
});

describe("createRenderValueFilter", () => {
  // Covers the search-fallback behavior shared by MultiSelectInput and
  // SingleSelectInput's `comboboxFilter`. Dropdown items live in a Combobox
  // portal that jsdom can't mount, so the filter is tested directly.

  it("matches against the rendered string when renderValue returns a string", () => {
    const filter = createRenderValueFilter((value) => LABELS[value] ?? value);

    expect(filter("abc-123", "alice")).toBe(true);
    expect(filter("def-456", "alice")).toBe(false);
  });

  it("falls back to the raw value when renderValue returns JSX", () => {
    const filter = createRenderValueFilter((value) => (
      <a href={`/user/${value}`}>{LABELS[value] ?? value}</a>
    ));

    expect(filter("abc-123", "abc")).toBe(true);
    expect(filter("abc-123", "alice")).toBe(false);
  });
});

describe("SingleSelectInput renderValue", () => {
  // SingleSelectInput renders dropdown items inside a Combobox portal
  // which only mounts when opened — not testable in jsdom without
  // full browser event sequences. Filter behavior (including the
  // ReactNode fallback) is covered by the `createRenderValueFilter`
  // tests above. These tests verify the component accepts the prop
  // and renders without errors.

  it("mounts with renderValue without error", () => {
    const { container } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />
    );

    expect(container.querySelector("input")).toBeDefined();
  });

  it("mounts without renderValue without error", () => {
    render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />
    );

    expect(screen.queryByText("Alice Smith")).toBeNull();
  });
});

const MockLinkedObjectType = {
  apiName: "Office",
  type: "object",
  __DefinitionMetadata: {
    primaryKeyApiName: "officeId",
    primaryKeyType: "string",
    properties: {
      officeId: { type: "string", multiplicity: false },
      name: { type: "string", multiplicity: false },
    },
  },
} as unknown as ObjectTypeDefinition;

function createMockLinkedObjectSet(): ObjectSet<ObjectTypeDefinition> {
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

function createLinkedDefinition(
  linkedFilterComponent: "MULTI_SELECT" | "LISTOGRAM" | "SINGLE_SELECT",
  renderValue?: (value: string) => React.ReactNode
): LinkedPropertyFilterDefinition<
  ObjectTypeDefinition,
  string,
  ObjectTypeDefinition,
  PropertyKeys<ObjectTypeDefinition>
> {
  const innerStateType =
    linkedFilterComponent === "LISTOGRAM"
      ? { type: "EXACT_MATCH" as const, values: [] }
      : { type: "SELECT" as const, selectedValues: [] };

  return {
    type: "LINKED_PROPERTY",
    linkName: "primaryOffice",
    reverseLinkName: "occupants",
    linkedPropertyKey: "name" as PropertyKeys<ObjectTypeDefinition>,
    linkedFilterComponent,
    linkedFilterState: innerStateType,
    filterState: {
      type: "linkedProperty",
      linkedFilterState: innerStateType,
    },
    renderValue,
  } as LinkedPropertyFilterDefinition<
    ObjectTypeDefinition,
    string,
    ObjectTypeDefinition,
    PropertyKeys<ObjectTypeDefinition>
  >;
}

function mockLinkedAggregationData(
  groups: Array<{ name: string; count: number }>
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

describe("LinkedPropertyInput renderValue", () => {
  const renderValueAsNode = (value: string): React.ReactNode => (
    <a href={`/user/${value}`} data-testid={`linked-anchor-${value}`}>
      {LABELS[value] ?? value}
    </a>
  );

  it("renders JSX returned from renderValue inside a MULTI_SELECT chip", () => {
    mockLinkedAggregationData([
      { name: "abc-123", count: 4 },
      { name: "def-456", count: 2 },
    ]);

    render(
      <LinkedPropertyInput
        objectSet={createMockLinkedObjectSet()}
        whereClause={{} as WhereClause<ObjectTypeDefinition>}
        definition={createLinkedDefinition("MULTI_SELECT", renderValueAsNode)}
        filterState={{
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["abc-123"],
          },
        }}
        onFilterStateChanged={vi.fn()}
      />
    );

    expect(screen.getByTestId("linked-anchor-abc-123")).toBeDefined();
    expect(screen.getByText("Alice Smith")).toBeDefined();
  });

  it("renders JSX returned from renderValue inside a LISTOGRAM row", () => {
    mockLinkedAggregationData([
      { name: "abc-123", count: 4 },
      { name: "def-456", count: 2 },
    ]);

    render(
      <LinkedPropertyInput
        objectSet={createMockLinkedObjectSet()}
        whereClause={{} as WhereClause<ObjectTypeDefinition>}
        definition={createLinkedDefinition("LISTOGRAM", renderValueAsNode)}
        filterState={{
          type: "linkedProperty",
          linkedFilterState: {
            type: "EXACT_MATCH",
            values: [],
          },
        }}
        onFilterStateChanged={vi.fn()}
      />
    );

    expect(screen.getByTestId("linked-anchor-abc-123")).toBeDefined();
    expect(screen.getByTestId("linked-anchor-def-456")).toBeDefined();
  });

  it("falls back to raw value for LISTOGRAM search when renderValue returns JSX", () => {
    mockLinkedAggregationData([
      { name: "abc-123", count: 4 },
      { name: "def-456", count: 2 },
    ]);

    render(
      <LinkedPropertyInput
        objectSet={createMockLinkedObjectSet()}
        whereClause={{} as WhereClause<ObjectTypeDefinition>}
        definition={createLinkedDefinition("LISTOGRAM", renderValueAsNode)}
        filterState={{
          type: "linkedProperty",
          linkedFilterState: {
            type: "EXACT_MATCH",
            values: [],
          },
        }}
        onFilterStateChanged={vi.fn()}
        searchQuery="abc"
      />
    );

    expect(screen.getByTestId("linked-anchor-abc-123")).toBeDefined();
    expect(screen.queryByTestId("linked-anchor-def-456")).toBeNull();
  });

  it("mounts SINGLE_SELECT with renderValue without error", () => {
    // LinkedSingleSelectInput renders dropdown items inside a Combobox portal
    // that jsdom can't mount — see the SingleSelectInput renderValue block
    // above. Smoke-check that LinkedPropertyInput accepts renderValue on the
    // SINGLE_SELECT path without throwing.
    mockLinkedAggregationData([
      { name: "abc-123", count: 4 },
      { name: "def-456", count: 2 },
    ]);

    const { container } = render(
      <LinkedPropertyInput
        objectSet={createMockLinkedObjectSet()}
        whereClause={{} as WhereClause<ObjectTypeDefinition>}
        definition={createLinkedDefinition("SINGLE_SELECT", renderValueAsNode)}
        filterState={{
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: [],
          },
        }}
        onFilterStateChanged={vi.fn()}
      />
    );

    expect(container.querySelector("input")).toBeDefined();
  });
});
