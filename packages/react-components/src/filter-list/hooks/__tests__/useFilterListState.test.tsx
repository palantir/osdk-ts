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
import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  createPropertyFilterDef,
  createSelectState,
  createToggleState,
  MockObjectType,
} from "../../__tests__/testUtils.js";
import type { FilterListProps } from "../../FilterListApi.js";
import { getFilterKey } from "../../utils/getFilterKey.js";
import { useFilterListState } from "../useFilterListState.js";

function createMockObjectSet(): ObjectSet<typeof MockObjectType> {
  return {
    $objectSetInternals: {
      def: MockObjectType,
    },
  } as ObjectSet<typeof MockObjectType>;
}

function createProps(
  overrides: Partial<FilterListProps<typeof MockObjectType>> = {},
): FilterListProps<typeof MockObjectType> {
  return {
    objectSet: createMockObjectSet(),
    ...overrides,
  };
}

describe("useFilterListState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("initializes with empty filter states when no definitions", () => {
    const props = createProps({ filterDefinitions: undefined });
    const { result } = renderHook(() => useFilterListState(props));
    expect(result.current.filterStates.size).toBe(0);
  });

  it("initializes filter states from filterState for property filters", () => {
    const initialState = createSelectState([]);
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      initialState,
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    expect(result.current.filterStates.get(getFilterKey(nameDef))).toEqual(
      initialState,
    );
  });

  it("updates filter state via setFilterState", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createSelectState(["selected"]),
      );
    });
    expect(result.current.filterStates.get(getFilterKey(nameDef))).toEqual(
      createSelectState(["selected"]),
    );
  });

  it("calls onFilterStateChanged callback", () => {
    const onFilterStateChanged = vi.fn();
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
      onFilterStateChanged,
    });
    const { result } = renderHook(() => useFilterListState(props));
    const newState = createSelectState(["selected"]);
    act(() => {
      result.current.setFilterState(getFilterKey(nameDef), newState);
    });
    expect(onFilterStateChanged).toHaveBeenCalledWith(nameDef, newState);
  });

  it("builds whereClause from filter states", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createSelectState(["John"]),
      );
    });
    expect(result.current.whereClause).toEqual({ name: "John" });
  });

  it("handles multiple filter definitions", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState([]),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(false),
    );
    const props = createProps({
      filterDefinitions: [nameDef, activeDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createSelectState(["John"]),
      );
      result.current.setFilterState(
        getFilterKey(activeDef),
        createToggleState(true),
      );
    });
    expect(result.current.whereClause).toEqual({
      $and: [{ name: "John" }, { active: true }],
    });
  });
});
