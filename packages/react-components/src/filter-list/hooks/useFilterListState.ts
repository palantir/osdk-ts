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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";
import { assertUnreachable } from "../utils/assertUnreachable.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: ReadonlyMap<string, FilterState>;
  setFilterState: (
    definition: FilterDefinitionUnion<Q>,
    state: FilterState,
  ) => void;
  whereClause: WhereClause<Q>;
  activeFilterCount: number;
  reset: () => void;
}

/**
 * Build initial states from filter definitions.
 * Uses string keys derived from getFilterKey() for stable lookups.
 */
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
      case "PROPERTY": {
        const state = definition.filterState;
        if (state) {
          states.set(key, state);
        }
        break;
      }
      case "HAS_LINK":
      case "KEYWORD_SEARCH":
      case "CUSTOM": {
        const state = definition.defaultFilterState;
        if (state) {
          states.set(key, state);
        }
        break;
      }
      case "LINKED_PROPERTY": {
        const innerState = definition.defaultLinkedFilterState;
        if (innerState) {
          const state: LinkedPropertyFilterState = {
            type: "LINKED_PROPERTY",
            linkedFilterState: innerState,
          };
          states.set(key, state);
        }
        break;
      }
      default:
        assertUnreachable(definition);
    }
  }

  return states;
}

export function useFilterListState<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): UseFilterListStateResult<Q> {
  const {
    objectSet,
    filterDefinitions,
    filterOperator = "and",
    onFilterStateChanged,
    onFilterClauseChanged,
  } = props;

  const objectType = objectSet.$objectSetInternals.def;

  const [filterStates, setFilterStates] = useState<
    Map<string, FilterState>
  >(() => buildInitialStates(filterDefinitions));

  const setFilterState = useCallback(
    (definition: FilterDefinitionUnion<Q>, state: FilterState) => {
      const key = getFilterKey(definition);
      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(key, state);
        return next;
      });
      onFilterStateChanged?.(definition, state);
    },
    [onFilterStateChanged],
  );

  const whereClause = useMemo(
    () =>
      buildWhereClause(
        filterDefinitions,
        filterStates,
        filterOperator,
        objectType,
      ),
    [filterDefinitions, filterStates, filterOperator, objectType],
  );

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onFilterClauseChanged?.(whereClause);
  }, [whereClause, onFilterClauseChanged]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    for (const state of filterStates.values()) {
      if (filterHasActiveState(state)) {
        count++;
      }
    }
    return count;
  }, [filterStates]);

  const reset = useCallback(() => {
    setFilterStates(buildInitialStates(filterDefinitions));
  }, [filterDefinitions]);

  return useMemo(() => ({
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  }), [filterStates, setFilterState, whereClause, activeFilterCount, reset]);
}
