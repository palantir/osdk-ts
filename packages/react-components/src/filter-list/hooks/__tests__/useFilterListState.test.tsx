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
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
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

  describe("onEffectiveObjectSet", () => {
    it("emits a where()-narrowed objectSet on filter changes", () => {
      const onEffectiveObjectSet = vi.fn();
      const narrowed = { _kind: "narrowed" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const objectSet = {
        where: vi.fn().mockReturnValue(narrowed),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        objectSet,
        onEffectiveObjectSet,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(
          getFilterKey(nameDef),
          createExactMatchState(["John"]),
        );
      });

      expect(objectSet.where).toHaveBeenCalledWith({ name: "John" });
      expect(onEffectiveObjectSet).toHaveBeenLastCalledWith(narrowed);
    });

    it("fires on reset() with the definition-default objectSet", () => {
      const onEffectiveObjectSet = vi.fn();
      const narrowed = { _kind: "narrowed-john" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const objectSet = {
        where: vi.fn().mockImplementation((w: Record<string, unknown>) =>
          w.name === "John" ? narrowed : objectSet
        ),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const initialFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["John"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        objectSet,
        initialFilterStates,
        onEffectiveObjectSet,
      });
      const { result } = renderHook(() => useFilterListState(props));

      onEffectiveObjectSet.mockClear();

      act(() => {
        result.current.reset();
      });

      expect(result.current.whereClause).toEqual({});
      expect(onEffectiveObjectSet).toHaveBeenLastCalledWith(objectSet);
    });
  });

  describe("onFilterClauseChanged", () => {
    it("fires on mount with the initial whereClause", () => {
      const onFilterClauseChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const initialFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["Seed"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        initialFilterStates,
        onFilterClauseChanged,
      });
      renderHook(() => useFilterListState(props));
      expect(onFilterClauseChanged).toHaveBeenCalledWith({ name: "Seed" });
    });

    it("fires after setFilterState with the updated whereClause", () => {
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
      expect(onFilterClauseChanged).toHaveBeenLastCalledWith({ name: "John" });
    });
  });

  describe("reset()", () => {
    it("rebuilds from current filterDefinitions, not the mount snapshot", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const initialFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["Seed"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        initialFilterStates,
      });
      const { result } = renderHook(() => useFilterListState(props));
      expect(result.current.whereClause).toEqual({ name: "Seed" });

      act(() => {
        result.current.reset();
      });
      expect(result.current.whereClause).toEqual({});
    });
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
        result.current.setFilterState(
          nameKey,
          createExactMatchState(["John"]),
        );
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

  describe("perFilterWhereClauses ref stability", () => {
    it(
      "preserves the entry reference for the just-changed filter (its excluding-self clause is unchanged)",
      () => {
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

        const beforeName = result.current.perFilterWhereClauses.get(nameKey);
        expect(beforeName).toBeDefined();

        act(() => {
          result.current.setFilterState(
            nameKey,
            createExactMatchState(["John"]),
          );
        });

        const afterName = result.current.perFilterWhereClauses.get(nameKey);
        expect(afterName).toBe(beforeName);
      },
    );

    it(
      "rebuilds the entry reference for sibling filters whose excluding-self clause content changed",
      () => {
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

        const beforeActive = result.current.perFilterWhereClauses.get(
          activeKey,
        );

        act(() => {
          result.current.setFilterState(
            nameKey,
            createExactMatchState(["John"]),
          );
        });

        const afterActive = result.current.perFilterWhereClauses.get(activeKey);
        expect(afterActive).not.toBe(beforeActive);
        expect(afterActive).toEqual({ name: "John" });
      },
    );

    it("preserves all entry refs when setFilterState writes an equal value", () => {
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
        result.current.setFilterState(
          nameKey,
          createExactMatchState(["John"]),
        );
      });

      const beforeName = result.current.perFilterWhereClauses.get(nameKey);
      const beforeActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(beforeName).toBeDefined();
      expect(beforeActive).toBeDefined();

      act(() => {
        result.current.setFilterState(
          nameKey,
          createExactMatchState(["John"]),
        );
      });

      const afterName = result.current.perFilterWhereClauses.get(nameKey);
      const afterActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(afterName).toBe(beforeName);
      expect(afterActive).toBe(beforeActive);
    });

    it("preserves all entry refs when filterDefinitions is a fresh array", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const activeDef = createPropertyFilterDef(
        "active",
        "TOGGLE",
        createToggleState(false),
      );
      const { result, rerender } = renderHook(
        (defs: FilterListProps<typeof MockObjectType>["filterDefinitions"]) =>
          useFilterListState(createProps({ filterDefinitions: defs })),
        { initialProps: [nameDef, activeDef] },
      );
      const nameKey = getFilterKey(nameDef);
      const activeKey = getFilterKey(activeDef);

      const beforeName = result.current.perFilterWhereClauses.get(nameKey);
      const beforeActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(beforeName).toBeDefined();
      expect(beforeActive).toBeDefined();

      rerender([
        createPropertyFilterDef(
          "name",
          "LISTOGRAM",
          createExactMatchState(["John"]),
        ),
        createPropertyFilterDef(
          "active",
          "TOGGLE",
          createToggleState(false),
        ),
      ]);

      const afterName = result.current.perFilterWhereClauses.get(nameKey);
      const afterActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(afterName).toBe(beforeName);
      expect(afterActive).toBe(beforeActive);
    });
  });
});
