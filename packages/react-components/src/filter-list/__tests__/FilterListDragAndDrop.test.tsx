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

import type { ObjectSet } from "@osdk/api";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FilterListContent } from "../base/FilterListContent.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import {
  createPropertyFilterDef,
  createSelectState,
  MockObjectType,
} from "./testUtils.js";

afterEach(cleanup);

const mockObjectSet = {
  $objectSetInternals: { def: MockObjectType },
  where: vi.fn(),
} as unknown as ObjectSet<typeof MockObjectType>;

function createDefinitions() {
  return [
    createPropertyFilterDef("name", "CHECKBOX_LIST", createSelectState([])),
    createPropertyFilterDef("age", "NUMBER_RANGE", {
      type: "NUMBER_RANGE",
      minValue: undefined,
      maxValue: undefined,
    }),
    createPropertyFilterDef(
      "active",
      "TOGGLE",
      { type: "TOGGLE", enabled: false },
    ),
  ];
}

function createFilterStates(
  definitions: FilterDefinitionUnion<typeof MockObjectType>[],
): Map<FilterDefinitionUnion<typeof MockObjectType>, FilterState> {
  const map = new Map<
    FilterDefinitionUnion<typeof MockObjectType>,
    FilterState
  >();
  for (const def of definitions) {
    map.set(def, def.filterState);
  }
  return map;
}

describe("FilterList drag and drop", () => {
  it("does not render drag handles when onFiltersReordered is not provided", () => {
    const definitions = createDefinitions();
    const filterStates = createFilterStates(definitions);

    render(
      <FilterListContent
        objectType={MockObjectType}
        objectSet={mockObjectSet}
        filterDefinitions={definitions}
        filterStates={filterStates}
        onFilterStateChanged={vi.fn()}
      />,
    );

    const dragHandles = screen.queryAllByLabelText(/Reorder/);
    expect(dragHandles).toHaveLength(0);
  });

  it("renders drag handles when onFiltersReordered is provided", async () => {
    const definitions = createDefinitions();
    const filterStates = createFilterStates(definitions);

    render(
      <FilterListContent
        objectType={MockObjectType}
        objectSet={mockObjectSet}
        filterDefinitions={definitions}
        filterStates={filterStates}
        onFilterStateChanged={vi.fn()}
        onFiltersReordered={vi.fn()}
      />,
    );

    const dragHandles = await screen.findAllByLabelText(/Reorder/);
    expect(dragHandles).toHaveLength(3);
  });

  it("renders correct aria labels on drag handles", async () => {
    const definitions = [
      {
        ...createPropertyFilterDef(
          "name",
          "CHECKBOX_LIST",
          createSelectState([]),
        ),
        label: "Full Name",
      } as FilterDefinitionUnion<typeof MockObjectType>,
      createPropertyFilterDef("age", "NUMBER_RANGE", {
        type: "NUMBER_RANGE",
        minValue: undefined,
        maxValue: undefined,
      }),
    ];
    const filterStates = createFilterStates(definitions);

    render(
      <FilterListContent
        objectType={MockObjectType}
        objectSet={mockObjectSet}
        filterDefinitions={definitions}
        filterStates={filterStates}
        onFilterStateChanged={vi.fn()}
        onFiltersReordered={vi.fn()}
      />,
    );

    expect(await screen.findByLabelText("Reorder Full Name")).toBeDefined();
    expect(await screen.findByLabelText("Reorder age")).toBeDefined();
  });

  it("preserves filter state references after providing reorder callback", async () => {
    const definitions = createDefinitions();
    const filterStates = createFilterStates(definitions);
    const stateRef = definitions[0].filterState;

    render(
      <FilterListContent
        objectType={MockObjectType}
        objectSet={mockObjectSet}
        filterDefinitions={definitions}
        filterStates={filterStates}
        onFilterStateChanged={vi.fn()}
        onFiltersReordered={vi.fn()}
      />,
    );

    await screen.findAllByLabelText(/Reorder/);

    expect(filterStates.get(definitions[0])).toBe(stateRef);
  });

  it("renders empty state when no filter definitions provided", () => {
    render(
      <FilterListContent
        objectType={MockObjectType}
        objectSet={mockObjectSet}
        filterDefinitions={[]}
        filterStates={new Map()}
        onFilterStateChanged={vi.fn()}
        onFiltersReordered={vi.fn()}
      />,
    );

    const dragHandles = screen.queryAllByLabelText(/Reorder/);
    expect(dragHandles).toHaveLength(0);
  });
});
