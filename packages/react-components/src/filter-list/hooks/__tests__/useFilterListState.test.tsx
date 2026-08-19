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
  createCustomFilterDef,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
  createStaticValuesFilterDef,
  createToggleState,
  MockObjectType,
} from "../../__tests__/testUtils.js";
import type { ExactMatchFilterState } from "../../FilterListItemApi.js";
import type { LinkedPropertyFilterState } from "../../types/LinkedFilterTypes.js";

function createExactMatchState(
  values: string[],
): ExactMatchFilterState<string> {
  return { type: "EXACT_MATCH", values };
}
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../../FilterListApi.js";
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

  it("initializes filter states from defaultFilterState for property filters", () => {
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

  describe("defaultFilterState seeding across definition kinds", () => {
    it("seeds every filter kind from the same field", () => {
      const propertyDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["Alice"]),
      );
      const hasLinkDef = createHasLinkFilterDef("primaryOffice");
      const keywordDef = createKeywordSearchFilterDef(["name"]);
      const customDef = createCustomFilterDef("custom");
      const staticDef = createStaticValuesFilterDef(
        "region",
        "LISTOGRAM",
        ["East"],
        createExactMatchState(["East"]),
      );
      const definitions = [
        propertyDef,
        hasLinkDef,
        keywordDef,
        customDef,
        staticDef,
      ];
      const props = createProps({ filterDefinitions: definitions });

      const { result } = renderHook(() => useFilterListState(props));

      for (const definition of definitions) {
        expect(
          result.current.filterStates.get(getFilterKey(definition)),
        ).toBeDefined();
      }
    });

    it("leaves a filter unseeded when it declares no defaultFilterState", () => {
      const bareDef = {
        type: "PROPERTY" as const,
        key: "name",
        filterComponent: "LISTOGRAM" as const,
      };
      const props = createProps({ filterDefinitions: [bareDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.size).toBe(0);
      expect(result.current.activeFilterCount).toBe(0);
    });
  });

  describe("activeFilterCount for CUSTOM filters", () => {
    function customDefWithClause(
      state: unknown,
      toWhereClause: (s: { customState: Record<string, unknown> }) => unknown,
    ) {
      return {
        type: "CUSTOM" as const,
        key: "custom",
        filterComponent: "CUSTOM" as const,
        defaultFilterState: state,
        renderInput: () => null,
        toWhereClause,
      } as unknown as FilterDefinitionUnion<typeof MockObjectType>;
    }

    // A seeded custom filter is only "active" if its own `toWhereClause` turns
    // that state into a clause — the state itself is opaque to FilterList.
    it("does not count a seeded filter whose toWhereClause returns undefined", () => {
      const definition = customDefWithClause(
        { type: "custom", customState: { value: "all" } },
        () => undefined,
      );
      const props = createProps({ filterDefinitions: [definition] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.size).toBe(1);
      expect(result.current.activeFilterCount).toBe(0);
    });

    it("does not count a seeded filter whose toWhereClause returns an empty clause", () => {
      const definition = customDefWithClause(
        { type: "custom", customState: {} },
        () => ({}),
      );
      const props = createProps({ filterDefinitions: [definition] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.activeFilterCount).toBe(0);
    });

    it("counts a seeded filter that produces a clause", () => {
      const definition = customDefWithClause(
        { type: "custom", customState: { value: "located" } },
        () => ({ name: { $isNull: false } }),
      );
      const props = createProps({ filterDefinitions: [definition] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.activeFilterCount).toBe(1);
    });
  });

  describe("deprecated seed fields stay honoured", () => {
    it("seeds from the deprecated initialFilterStates prop", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        initialFilterStates: new Map([
          [getFilterKey(nameDef), createExactMatchState(["Legacy"])],
        ]),
      });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.get(getFilterKey(nameDef))).toEqual(
        createExactMatchState(["Legacy"]),
      );
    });

    it("prefers defaultFilterStates over the deprecated initialFilterStates", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const key = getFilterKey(nameDef);
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates: new Map([[key, createExactMatchState(["Wins"])]]),
        initialFilterStates: new Map([[key, createExactMatchState(["Loses"])]]),
      });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.get(key)).toEqual(
        createExactMatchState(["Wins"]),
      );
    });

    it("seeds a PROPERTY filter from the deprecated filterState", () => {
      const legacyDef = {
        type: "PROPERTY" as const,
        key: "name",
        filterComponent: "LISTOGRAM" as const,
        filterState: createExactMatchState(["Legacy"]),
      };
      const props = createProps({ filterDefinitions: [legacyDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.get(getFilterKey(legacyDef))).toEqual(
        createExactMatchState(["Legacy"]),
      );
    });

    it("prefers defaultFilterState over the deprecated filterState", () => {
      const bothDef = {
        type: "PROPERTY" as const,
        key: "name",
        filterComponent: "LISTOGRAM" as const,
        defaultFilterState: createExactMatchState(["Wins"]),
        filterState: createExactMatchState(["Loses"]),
      };
      const props = createProps({ filterDefinitions: [bothDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.get(getFilterKey(bothDef))).toEqual(
        createExactMatchState(["Wins"]),
      );
    });

    it("still ignores filterState on kinds that never read it", () => {
      // Cast for the same reason testUtils casts: spreading the definition
      // union widens `filterState` past the HAS_LINK member.
      const hasLinkDef = {
        ...createHasLinkFilterDef("primaryOffice"),
        defaultFilterState: undefined,
        filterState: { type: "hasLink" as const, hasLink: true },
      } as FilterDefinitionUnion<typeof MockObjectType>;
      const props = createProps({ filterDefinitions: [hasLinkDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.size).toBe(0);
    });
  });

  describe("LINKED_PROPERTY seeding", () => {
    it("wraps a LINKED_PROPERTY seed in a linkedProperty state", () => {
      const linkedDef = createLinkedPropertyFilterDef("primaryOffice", "name");
      const props = createProps({ filterDefinitions: [linkedDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.get(getFilterKey(linkedDef))).toEqual({
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values: [] },
      } satisfies LinkedPropertyFilterState);
    });

    it("seeds a LINKED_PROPERTY filter from the deprecated defaultLinkedFilterState", () => {
      const legacyLinkedDef = {
        ...createLinkedPropertyFilterDef("primaryOffice", "name"),
        defaultFilterState: undefined,
        defaultLinkedFilterState: createExactMatchState(["Legacy"]),
      };
      const props = createProps({ filterDefinitions: [legacyLinkedDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(
        result.current.filterStates.get(getFilterKey(legacyLinkedDef)),
      ).toEqual({
        type: "linkedProperty",
        linkedFilterState: createExactMatchState(["Legacy"]),
      } satisfies LinkedPropertyFilterState);
    });

    it("prefers defaultFilterState over the deprecated defaultLinkedFilterState", () => {
      // Cast for the same reason testUtils casts: spreading the definition
      // union widens both seed fields past the LINKED_PROPERTY member.
      const bothLinkedDef = {
        ...createLinkedPropertyFilterDef("primaryOffice", "name"),
        defaultFilterState: createExactMatchState(["Wins"]),
        defaultLinkedFilterState: createExactMatchState(["Loses"]),
      } as FilterDefinitionUnion<typeof MockObjectType>;
      const props = createProps({ filterDefinitions: [bothLinkedDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(
        result.current.filterStates.get(getFilterKey(bothLinkedDef)),
      ).toEqual({
        type: "linkedProperty",
        linkedFilterState: createExactMatchState(["Wins"]),
      } satisfies LinkedPropertyFilterState);
    });

    // Such a definition renders as unsupported, so seeding it would narrow the
    // object set off a filter the user can neither see nor clear.
    it("does not seed when neither component field is set", () => {
      const noComponentDef = {
        ...createLinkedPropertyFilterDef("primaryOffice", "name"),
        filterComponent: undefined,
      } as FilterDefinitionUnion<typeof MockObjectType>;
      const props = createProps({ filterDefinitions: [noComponentDef] });

      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.filterStates.size).toBe(0);
    });
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

    it("fires on reset() with the snapshot's effectiveObjectSet", () => {
      const onEffectiveObjectSet = vi.fn();
      const narrowedJohn = { _kind: "narrowed-john" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const narrowedJane = { _kind: "narrowed-jane" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const objectSet = {
        where: vi.fn().mockImplementation((w: Record<string, unknown>) => {
          if (w.name === "John") return narrowedJohn;
          if (w.name === "Jane") return narrowedJane;
          return objectSet;
        }),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const defaultFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["John"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        objectSet,
        defaultFilterStates,
        onEffectiveObjectSet,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(
          getFilterKey(nameDef),
          createExactMatchState(["Jane"]),
        );
      });

      onEffectiveObjectSet.mockClear();

      act(() => {
        result.current.reset();
      });

      expect(result.current.whereClause).toEqual({ name: "John" });
      expect(onEffectiveObjectSet).toHaveBeenLastCalledWith(narrowedJohn);
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
      const defaultFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["Seed"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates,
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

  describe("onFilterChanged", () => {
    it("reports the changed state, clause, filtered objectSet and linked filters together", () => {
      const onFilterChanged = vi.fn();
      const filtered = { _kind: "filtered" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const objectSet = {
        where: vi.fn().mockReturnValue(filtered),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        objectSet,
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      const newState = createExactMatchState(["John"]);
      act(() => {
        result.current.setFilterState(getFilterKey(nameDef), newState);
      });

      expect(onFilterChanged).toHaveBeenCalledTimes(1);
      expect(onFilterChanged).toHaveBeenCalledWith({
        cause: "SET",
        filterKey: getFilterKey(nameDef),
        newState,
        filterClause: { name: "John" },
        filteredObjectSet: filtered,
        activeFilters: [
          {
            kind: "PROPERTY",
            filterKey: getFilterKey(nameDef),
            state: newState,
            clause: { name: "John" },
          },
        ],
      });
    });

    it("does not fire on mount", () => {
      const onFilterChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates: new Map([
          [getFilterKey(nameDef), createExactMatchState(["Seed"])],
        ]),
        onFilterChanged,
      });
      renderHook(() => useFilterListState(props));
      expect(onFilterChanged).not.toHaveBeenCalled();
    });

    it("reports filteredObjectSet as undefined without an objectSet", () => {
      const onFilterChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(
          getFilterKey(nameDef),
          createExactMatchState(["John"]),
        );
      });

      expect(onFilterChanged.mock.lastCall?.[0]).toMatchObject({
        filterClause: { name: "John" },
        filteredObjectSet: undefined,
      });
    });

    it("includes clauses from other active filters", () => {
      const onFilterChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const idDef = createPropertyFilterDef(
        "id",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef, idDef],
        defaultFilterStates: new Map([
          [getFilterKey(nameDef), createExactMatchState(["John"])],
        ]),
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(
          getFilterKey(idDef),
          createExactMatchState(["abc"]),
        );
      });

      expect(onFilterChanged.mock.lastCall?.[0].filterClause).toEqual({
        $and: [{ name: "John" }, { id: "abc" }],
      });
    });

    it("reports active linked filters", () => {
      const onFilterChanged = vi.fn();
      const linkedDef = createLinkedPropertyFilterDef("employees", "name");
      const props = createProps({
        filterDefinitions: [linkedDef],
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      const linkedState: LinkedPropertyFilterState = {
        type: "linkedProperty",
        linkedFilterState: createExactMatchState(["John"]),
      };
      act(() => {
        result.current.setFilterState(getFilterKey(linkedDef), linkedState);
      });

      const event = onFilterChanged.mock.lastCall?.[0];
      expect(event.filterClause).toEqual({});
      expect(event.activeFilters).toEqual([
        {
          kind: "LINKED_PROPERTY",
          filterKey: getFilterKey(linkedDef),
          state: linkedState,
          innerState: createExactMatchState(["John"]),
          linkName: "employees",
          innerWhere: { name: "John" },
          isExcluding: false,
        },
      ]);
    });

    it("reports active HAS_LINK filters", () => {
      const onFilterChanged = vi.fn();
      const hasLinkDef = createHasLinkFilterDef("employees");
      const props = createProps({
        filterDefinitions: [hasLinkDef],
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(getFilterKey(hasLinkDef), {
          type: "hasLink",
          hasLink: true,
        });
      });

      const event = onFilterChanged.mock.lastCall?.[0];
      expect(event.filterClause).toEqual({});
      expect(event.activeFilters).toEqual([
        {
          kind: "HAS_LINK",
          filterKey: getFilterKey(hasLinkDef),
          state: { type: "hasLink", hasLink: true },
          linkName: "employees",
          isExcluding: false,
        },
      ]);
    });

    it("filters the objectSet by the link count for a linked filter", () => {
      const onFilterChanged = vi.fn();
      const filtered = { _kind: "filtered" } as unknown as ObjectSet<
        typeof MockObjectType
      >;
      const withCounts = {
        where: vi.fn().mockReturnValue(filtered),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const objectSet = {
        withProperties: vi.fn().mockReturnValue(withCounts),
      } as unknown as ObjectSet<typeof MockObjectType>;
      const hasLinkDef = createHasLinkFilterDef("employees");
      const props = createProps({
        filterDefinitions: [hasLinkDef],
        objectSet,
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(getFilterKey(hasLinkDef), {
          type: "hasLink",
          hasLink: true,
        });
      });

      expect(onFilterChanged.mock.lastCall?.[0].filteredObjectSet).toBe(
        filtered,
      );
      expect(vi.mocked(withCounts.where).mock.calls[0][0]).toEqual({
        [`osdkFilterListLinkCount_${getFilterKey(hasLinkDef)}`]: { $gt: 0 },
      });
    });

    it("reports a cleared filter with the clause it left behind", () => {
      const onFilterChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const idDef = createPropertyFilterDef(
        "id",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef, idDef],
        defaultFilterStates: new Map([
          [getFilterKey(nameDef), createExactMatchState(["John"])],
          [getFilterKey(idDef), createExactMatchState(["abc"])],
        ]),
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.clearFilterState(getFilterKey(nameDef));
      });

      expect(onFilterChanged).toHaveBeenCalledTimes(1);
      expect(onFilterChanged.mock.lastCall?.[0]).toMatchObject({
        cause: "CLEAR",
        filterKey: getFilterKey(nameDef),
        filterClause: { id: "abc" },
      });
      expect(onFilterChanged.mock.lastCall?.[0].newState).toBeUndefined();
      expect(onFilterChanged.mock.lastCall?.[0].activeFilters).toHaveLength(1);
    });

    it("does not fire when clearing a filter that has no state", () => {
      const onFilterChanged = vi.fn();
      const unseededDef = {
        type: "PROPERTY" as const,
        key: "name",
        filterComponent: "LISTOGRAM" as const,
      };
      const props = createProps({
        filterDefinitions: [unseededDef],
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.clearFilterState(getFilterKey(unseededDef));
      });

      expect(onFilterChanged).not.toHaveBeenCalled();
    });

    it("reports a reset with the restored clause", () => {
      const onFilterChanged = vi.fn();
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates: new Map([
          [getFilterKey(nameDef), createExactMatchState(["Seed"])],
        ]),
        onFilterChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      act(() => {
        result.current.setFilterState(
          getFilterKey(nameDef),
          createExactMatchState(["John"]),
        );
      });
      act(() => {
        result.current.reset();
      });

      expect(onFilterChanged.mock.lastCall?.[0]).toMatchObject({
        cause: "RESET",
        filterClause: { name: "Seed" },
      });
      expect(onFilterChanged.mock.lastCall?.[0].filterKey).toBeUndefined();
    });
  });

  describe("reset()", () => {
    it("restores the mount snapshot of defaultFilterStates", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const defaultFilterStates = new Map([
        [getFilterKey(nameDef), createExactMatchState(["Seed"])],
      ]);
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates,
      });
      const { result } = renderHook(() => useFilterListState(props));
      expect(result.current.whereClause).toEqual({ name: "Seed" });

      act(() => {
        result.current.setFilterState(
          getFilterKey(nameDef),
          createExactMatchState(["Other"]),
        );
      });
      expect(result.current.whereClause).toEqual({ name: "Other" });

      act(() => {
        result.current.reset();
      });
      expect(result.current.whereClause).toEqual({ name: "Seed" });
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

  describe("perFilterWhereClauses ref stability", () => {
    it("preserves the entry reference for the just-changed filter (its excluding-self clause is unchanged)", () => {
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
        result.current.setFilterState(nameKey, createExactMatchState(["John"]));
      });

      const afterName = result.current.perFilterWhereClauses.get(nameKey);
      expect(afterName).toBe(beforeName);
    });

    it("rebuilds the entry reference for sibling filters whose excluding-self clause content changed", () => {
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

      const beforeActive = result.current.perFilterWhereClauses.get(activeKey);

      act(() => {
        result.current.setFilterState(nameKey, createExactMatchState(["John"]));
      });

      const afterActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(afterActive).not.toBe(beforeActive);
      expect(afterActive).toEqual({ name: "John" });
    });

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
        result.current.setFilterState(nameKey, createExactMatchState(["John"]));
      });

      const beforeName = result.current.perFilterWhereClauses.get(nameKey);
      const beforeActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(beforeName).toBeDefined();
      expect(beforeActive).toBeDefined();

      act(() => {
        result.current.setFilterState(nameKey, createExactMatchState(["John"]));
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
        createPropertyFilterDef("active", "TOGGLE", createToggleState(false)),
      ]);

      const afterName = result.current.perFilterWhereClauses.get(nameKey);
      const afterActive = result.current.perFilterWhereClauses.get(activeKey);
      expect(afterName).toBe(beforeName);
      expect(afterActive).toBe(beforeActive);
    });
  });

  describe("LINKED_PROPERTY narrowing", () => {
    function createLinkedState(values: string[]): LinkedPropertyFilterState {
      return {
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values },
      };
    }

    it("narrows on every active linked filter", () => {
      const managerDef = createLinkedPropertyFilterDef("manager", "fullName");
      const officeDef = createLinkedPropertyFilterDef("office", "city");
      const props = createProps({
        filterDefinitions: [managerDef, officeDef],
        defaultFilterStates: new Map([
          [getFilterKey(managerDef), createLinkedState(["Alice"])],
          [getFilterKey(officeDef), createLinkedState(["Berlin"])],
        ]),
      });
      const { result } = renderHook(() => useFilterListState(props));

      expect(result.current.linkedFilters.map((f) => f.linkName)).toEqual([
        "manager",
        "office",
      ]);
    });

    it("fires onFilterStateChanged for empty linked state but omits it from linkedFilters", () => {
      const def = createLinkedPropertyFilterDef("office", "city");
      const onFilterStateChanged = vi.fn();
      const props = createProps({
        filterDefinitions: [def],
        onFilterStateChanged,
      });
      const { result } = renderHook(() => useFilterListState(props));

      const nextState = createLinkedState([]);
      act(() => {
        result.current.setFilterState(getFilterKey(def), nextState);
      });

      expect(onFilterStateChanged).toHaveBeenCalledWith(def, nextState);
      expect(result.current.linkedFilters).toHaveLength(0);
    });
  });

  describe("hasChangesFromInitial", () => {
    it("is false when filterDefinitions is empty", () => {
      const props = createProps({ filterDefinitions: undefined });
      const { result } = renderHook(() => useFilterListState(props));
      expect(result.current.hasChangesFromInitial).toBe(false);
    });

    it("is false on mount when definitions carry a populated initial filterState", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      expect(result.current.hasChangesFromInitial).toBe(false);
    });

    it("becomes true after setFilterState writes a structurally different value", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["Jane"]),
        );
      });
      expect(result.current.hasChangesFromInitial).toBe(true);
    });

    it("returns to false after setFilterState writes back the snapshot value", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["Jane"]),
        );
      });
      expect(result.current.hasChangesFromInitial).toBe(true);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["John"]),
        );
      });
      expect(result.current.hasChangesFromInitial).toBe(false);
    });

    it("becomes true after clearFilterState removes a key from the snapshot", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.clearFilterState(filterKey);
      });
      expect(result.current.hasChangesFromInitial).toBe(true);
    });

    it("returns to false after reset() when definitions are unchanged", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState(["John"]),
      );
      const props = createProps({
        filterDefinitions: [nameDef],
      });
      const { result } = renderHook(() => useFilterListState(props));
      const filterKey = getFilterKey(nameDef);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["Jane"]),
        );
      });
      expect(result.current.hasChangesFromInitial).toBe(true);

      act(() => {
        result.current.reset();
      });
      expect(result.current.hasChangesFromInitial).toBe(false);
    });

    it("returns to false after reset() when mounted with defaultFilterStates", () => {
      const nameDef = createPropertyFilterDef(
        "name",
        "LISTOGRAM",
        createExactMatchState([]),
      );
      const filterKey = getFilterKey(nameDef);
      const props = createProps({
        filterDefinitions: [nameDef],
        defaultFilterStates: new Map([
          [filterKey, createExactMatchState(["Seed"])],
        ]),
      });
      const { result } = renderHook(() => useFilterListState(props));
      expect(result.current.hasChangesFromInitial).toBe(false);

      act(() => {
        result.current.setFilterState(
          filterKey,
          createExactMatchState(["Other"]),
        );
      });
      expect(result.current.hasChangesFromInitial).toBe(true);

      act(() => {
        result.current.reset();
      });
      expect(result.current.hasChangesFromInitial).toBe(false);
    });
  });
});
