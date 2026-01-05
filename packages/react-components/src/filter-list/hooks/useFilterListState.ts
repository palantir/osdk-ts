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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { FilterKey, FilterListProps } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { FilterListPersistedState } from "../FilterPanelTypes.js";
import { assertUnreachable } from "../utils/assertUnreachable.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import { getFilterKey } from "../utils/getFilterKey.js";

interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  filterStates: Map<string, FilterState>;
  setFilterState: (key: string, state: FilterState) => void;
  whereClause: WhereClause<Q>;
  activeFilterCount: number;
  reset: () => void;
}

function buildInitialStates<Q extends ObjectTypeDefinition>(
  definitions: FilterListProps<Q>["filterDefinitions"],
): Map<string, FilterState> {
  const states = new Map<string, FilterState>();

  if (!definitions) {
    return states;
  }

  for (const definition of definitions) {
    const key = getFilterKey(definition);

    switch (definition.type) {
      case "property": {
        const state = definition.filterState ?? definition.defaultFilterState;
        if (state) {
          states.set(key, state);
        }
        break;
      }
      case "hasLink":
      case "linkedProperty":
      case "keywordSearch":
      case "custom":
        break;
    }
  }

  return states;
}

function countActiveFilters(filterStates: Map<string, FilterState>): number {
  let count = 0;

  for (const state of filterStates.values()) {
    if (isFilterActive(state)) {
      count++;
    }
  }

  return count;
}

function isFilterActive(state: FilterState): boolean {
  switch (state.type) {
    case "CHECKBOX_LIST":
      return state.selectedValues.length > 0;
    case "CONTAINS_TEXT":
      return !!state.value;
    case "TOGGLE":
      return state.enabled;
    case "DATE_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined;
    case "NUMBER_RANGE":
      return state.minValue !== undefined || state.maxValue !== undefined;
    case "EXACT_MATCH":
      return state.values.length > 0;
    case "SINGLE_SELECT":
      return state.selectedValue !== undefined;
    case "MULTI_SELECT":
      return state.selectedValues.length > 0;
    case "SINGLE_DATE":
      return state.selectedDate !== undefined;
    case "MULTI_DATE":
      return state.selectedDates.length > 0;
    case "TIMELINE":
      return state.startDate !== undefined || state.endDate !== undefined;
    default:
      return assertUnreachable(state);
  }
}

function isValidPersistedState(value: unknown): boolean {
  if (typeof value !== "object" || value == null) return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.collapsed === "boolean"
    && Array.isArray(obj.filterDefinitions)
    && typeof obj.filterClause === "object"
  );
}

function loadFromStorage<Q extends ObjectTypeDefinition>(
  key: string,
): FilterListPersistedState<Q> | undefined {
  try {
    const stored = sessionStorage.getItem(key);
    if (stored) {
      const parsed: unknown = JSON.parse(stored);
      // Runtime validation ensures structure matches FilterListPersistedState
      if (isValidPersistedState(parsed)) {
        return parsed as FilterListPersistedState<Q>;
      }
    }
  } catch {
    // Silently fail - storage may not be available or data corrupted
  }
  return undefined;
}

function saveToStorage<Q extends ObjectTypeDefinition>(
  key: string,
  state: FilterListPersistedState<Q>,
): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(state));
  } catch {
    // Silently fail - storage may be full or unavailable
  }
}

export function useFilterListState<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): UseFilterListStateResult<Q> {
  const {
    filterDefinitions,
    filterOperator = "and",
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onCollapsedChange,
    onFilterStateChanged,
    persistenceKey,
    onPersistState,
    initialPersistedState,
  } = props;

  // Load persisted state only once on mount - intentionally ignoring prop changes
  // to avoid overwriting user's in-session filter state
  const persistedState = useMemo(() => {
    if (initialPersistedState) {
      return initialPersistedState;
    }
    if (persistenceKey) {
      return loadFromStorage<Q>(persistenceKey);
    }
    return undefined;
  }, []);

  const [internalCollapsed, setInternalCollapsed] = useState(
    persistedState?.collapsed ?? defaultCollapsed,
  );
  const isCollapsedControlled = controlledCollapsed !== undefined;
  const collapsed = isCollapsedControlled
    ? controlledCollapsed
    : internalCollapsed;

  const setCollapsed = useCallback(
    (newCollapsed: boolean) => {
      if (!isCollapsedControlled) {
        setInternalCollapsed(newCollapsed);
      }
      onCollapsedChange?.(newCollapsed);
    },
    [isCollapsedControlled, onCollapsedChange],
  );

  const [filterStates, setFilterStates] = useState<Map<string, FilterState>>(
    () => buildInitialStates(filterDefinitions),
  );

  const setFilterState = useCallback(
    (key: string, state: FilterState) => {
      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(key, state);
        return next;
      });
      // Cast is safe: keys are derived from filter definitions via getFilterKey()
      onFilterStateChanged?.(key as FilterKey<Q>, state);
    },
    [onFilterStateChanged],
  );

  const whereClause = useMemo(
    () => buildWhereClause(filterDefinitions, filterStates, filterOperator),
    [filterDefinitions, filterStates, filterOperator],
  );

  const activeFilterCount = useMemo(
    () => countActiveFilters(filterStates),
    [filterStates],
  );

  const reset = useCallback(() => {
    setFilterStates(buildInitialStates(filterDefinitions));
  }, [filterDefinitions]);

  useEffect(() => {
    if (!persistenceKey && !onPersistState) {
      return;
    }

    const stateToSave: FilterListPersistedState<Q> = {
      collapsed,
      filterDefinitions: filterDefinitions ?? [],
      filterClause: whereClause,
    };

    if (persistenceKey) {
      saveToStorage(persistenceKey, stateToSave);
    }

    onPersistState?.(stateToSave);
  }, [
    collapsed,
    filterDefinitions,
    whereClause,
    persistenceKey,
    onPersistState,
  ]);

  return {
    collapsed,
    setCollapsed,
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  };
}
