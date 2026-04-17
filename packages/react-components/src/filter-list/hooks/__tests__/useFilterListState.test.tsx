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

import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@osdk/react", () => ({
  useOsdkMetadata: vi.fn(() => ({ loading: false, metadata: undefined })),
}));
import {
  createPropertyFilterDef,
  createToggleState,
  MockObjectType,
} from "../../__tests__/testUtils.js";
import type { ExactMatchFilterState } from "../../FilterListItemApi.js";

function createExactMatchState(
  values: string[],
): ExactMatchFilterState<string> {
  return { type: "EXACT_MATCH", values };
}
import type { FilterListProps } from "../../FilterListApi.js";
import { getFilterKey } from "../../utils/getFilterKey.js";
import { useFilterListState } from "../useFilterListState.js";

function createProps(
  overrides: Partial<FilterListProps<typeof MockObjectType>> = {},
): FilterListProps<typeof MockObjectType> {
  return {
    objectType: MockObjectType,
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
    const initialState = createExactMatchState([]);
    const nameDef = createPropertyFilterDef("name", "LISTOGRAM", initialState);
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
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createExactMatchState(["selected"]),
      );
    });
    expect(result.current.filterStates.get(getFilterKey(nameDef))).toEqual(
      createExactMatchState(["selected"]),
    );
  });

  it("calls onFilterStateChanged callback", () => {
    const onFilterStateChanged = vi.fn();
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
      onFilterStateChanged,
    });
    const { result } = renderHook(() => useFilterListState(props));
    const newState = createExactMatchState(["selected"]);
    act(() => {
      result.current.setFilterState(getFilterKey(nameDef), newState);
    });
    expect(onFilterStateChanged).toHaveBeenCalledWith(nameDef, newState);
  });

  it("builds whereClause from filter states", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createExactMatchState(["John"]),
      );
    });
    expect(result.current.whereClause).toEqual({ name: "John" });
  });

  it("does not call onFilterClauseChanged on mount", () => {
    const onFilterClauseChanged = vi.fn();
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
      onFilterClauseChanged,
    });
    renderHook(() => useFilterListState(props));
    expect(onFilterClauseChanged).not.toHaveBeenCalled();
  });

  it("calls onFilterClauseChanged synchronously on setFilterState", () => {
    const onFilterClauseChanged = vi.fn();
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
      onFilterClauseChanged,
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createExactMatchState(["John"]),
      );
    });
    expect(onFilterClauseChanged).toHaveBeenCalledTimes(1);
    expect(onFilterClauseChanged).toHaveBeenCalledWith({ name: "John" });
  });

  it("calls onFilterClauseChanged on reset", () => {
    const onFilterClauseChanged = vi.fn();
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
      onFilterClauseChanged,
    });
    const { result } = renderHook(() => useFilterListState(props));
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createExactMatchState(["John"]),
      );
    });
    onFilterClauseChanged.mockClear();
    act(() => {
      result.current.reset();
    });
    expect(onFilterClauseChanged).toHaveBeenCalledTimes(1);
    expect(onFilterClauseChanged).toHaveBeenCalledWith({});
  });

  describe("clearFilterState", () => {
    it("removes filter state entirely regardless of initial default", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["default"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["John"]),
        );
      });
      expect(result.current.filterStates.has(filterKey)).toBe(true);

      act(() => {
        result.current.clearFilterState(filterKey);
      });
      expect(result.current.filterStates.has(filterKey)).toBe(false);
    });

    it("calls onFilterClauseChanged with updated clause", () => {
      const onFilterClauseChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        onFilterClauseChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["John"]),
        );
      });
      onFilterClauseChanged.mockClear();

      act(() => {
        result.current.clearFilterState(filterKey);
      });
      expect(onFilterClauseChanged).toHaveBeenCalledTimes(1);
      expect(onFilterClauseChanged).toHaveBeenCalledWith({});
    });

    it("updates whereClause after clearing", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["John"]),
        );
      });
      expect(result.current.whereClause).toEqual({ name: "John" });

      act(() => {
        result.current.clearFilterState(filterKey);
      });
      expect(result.current.whereClause).toEqual({});
    });

    it("decrements activeFilterCount after clearing", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["John"]),
        );
      });
      expect(result.current.activeFilterCount).toBe(1);

      act(() => {
        result.current.clearFilterState(filterKey);
      });
      expect(result.current.activeFilterCount).toBe(0);
    });

    it("only clears the targeted filter, leaving others intact", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
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
      const nameKey = getFilterKey(nameDef);
      const activeKey = getFilterKey(activeDef);

      act(() => {
        result.current.setFilterState(nameKey, createExactMatchState(["John"]));
        result.current.setFilterState(activeKey, createToggleState(true));
      });
      expect(result.current.activeFilterCount).toBe(2);

      act(() => {
        result.current.clearFilterState(nameKey);
      });
      expect(result.current.filterStates.has(nameKey)).toBe(false);
      expect(result.current.filterStates.get(activeKey)).toEqual(
        createToggleState(true),
      );
      expect(result.current.activeFilterCount).toBe(1);
    });
  });

  it("works without objectSet (objectType only)", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
    );
    const props = createProps({
      filterDefinitions: [nameDef],
    });
    expect(props.objectSet).toBeUndefined();
    const { result } = renderHook(() => useFilterListState(props));
    expect(result.current.filterStates.size).toBe(1);
    act(() => {
      result.current.setFilterState(
        getFilterKey(nameDef),
        createExactMatchState(["John"]),
      );
    });
    expect(result.current.whereClause).toEqual({ name: "John" });
    act(() => {
      result.current.reset();
    });
    expect(result.current.whereClause).toEqual({});
  });

  it("handles multiple filter definitions", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      createExactMatchState([]),
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
        createExactMatchState(["John"]),
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
