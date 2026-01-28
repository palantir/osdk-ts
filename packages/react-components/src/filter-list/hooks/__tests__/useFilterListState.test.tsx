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
  createCheckboxListState,
  createPropertyFilterDef,
  createToggleState,
  MockObjectType,
} from "../../__tests__/testUtils.js";
import type { FilterListProps } from "../../FilterListApi.js";
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
    const initialState = createCheckboxListState([]);
    const props = createProps({
      filterDefinitions: [
        createPropertyFilterDef("name", "CHECKBOX_LIST", initialState),
      ],
    });
    const { result } = renderHook(() => useFilterListState(props));
    expect(result.current.filterStates.get("name:0")).toEqual(initialState);
  });

  it("updates filter state via setFilterState", () => {
    const props = createProps({
      filterDefinitions: [
        createPropertyFilterDef(
          "name",
          "CHECKBOX_LIST",
          createCheckboxListState([]),
        ),
      ],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        "name:0",
        createCheckboxListState(["selected"]),
      );
    });
    expect(result.current.filterStates.get("name:0")).toEqual(
      createCheckboxListState(["selected"]),
    );
  });

  it("calls onFilterStateChanged callback", () => {
    const onFilterStateChanged = vi.fn();
    const props = createProps({
      filterDefinitions: [
        createPropertyFilterDef(
          "name",
          "CHECKBOX_LIST",
          createCheckboxListState([]),
        ),
      ],
      onFilterStateChanged,
    });
    const { result } = renderHook(() => useFilterListState(props));
    const newState = createCheckboxListState(["selected"]);
    act(() => {
      result.current.setFilterState("name:0", newState);
    });
    expect(onFilterStateChanged).toHaveBeenCalledWith("name:0", newState);
  });

  it("builds whereClause from filter states", () => {
    const props = createProps({
      filterDefinitions: [
        createPropertyFilterDef(
          "name",
          "CHECKBOX_LIST",
          createCheckboxListState([]),
        ),
      ],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        "name:0",
        createCheckboxListState(["John"]),
      );
    });
    expect(result.current.whereClause).toEqual({ name: { $in: ["John"] } });
  });

  it("handles multiple filter definitions", () => {
    const props = createProps({
      filterDefinitions: [
        createPropertyFilterDef(
          "name",
          "CHECKBOX_LIST",
          createCheckboxListState([]),
        ),
        createPropertyFilterDef("active", "TOGGLE", createToggleState(false)),
      ],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        "name:0",
        createCheckboxListState(["John"]),
      );
      result.current.setFilterState("active:1", createToggleState(true));
    });
    expect(result.current.whereClause).toEqual({
      $and: [
        { name: { $in: ["John"] } },
        { active: true },
      ],
    });
  });
});
