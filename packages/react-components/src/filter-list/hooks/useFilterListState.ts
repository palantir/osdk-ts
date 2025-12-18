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
import { useCallback, useMemo, useState } from "react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";

interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  filterStates: Map<string, FilterState>;
  setFilterState: (key: string, state: FilterState) => void;
  whereClause: WhereClause<Q>;
  activeFilterCount: number;
  reset: () => void;
}

function getFilterKey<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  switch (definition.type) {
    case "property":
      return definition.key as string;
    case "hasLink":
    case "linkedProperty":
      return definition.linkName as string;
    case "keywordSearch":
      return `keywordSearch-${
        Array.isArray(definition.properties)
          ? definition.properties.join("-")
          : "all"
      }`;
    case "custom":
      return definition.key;
    default:
      return "unknown";
  }
}

function buildInitialStates<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
): Map<string, FilterState> {
  const states = new Map<string, FilterState>();

  if (!definitions) {
    return states;
  }

  for (const definition of definitions) {
    const key = getFilterKey(definition);

    if ("filterState" in definition && definition.filterState) {
      states.set(key, definition.filterState as FilterState);
    } else if (
      "defaultFilterState" in definition && definition.defaultFilterState
    ) {
      states.set(key, definition.defaultFilterState as FilterState);
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
      return false;
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
  } = props;

  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
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
      props.onFilterStateChanged?.(
        key as ReturnType<typeof getFilterKey<Q>>,
        state,
      );
    },
    [props],
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
