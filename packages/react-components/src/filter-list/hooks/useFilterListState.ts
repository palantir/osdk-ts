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
  FilterKey,
  FilterListProps,
} from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";
import { assertUnreachable } from "../utils/assertUnreachable.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<string, FilterState>;
  setFilterState: (key: string, state: FilterState) => void;
  whereClause: WhereClause<Q>;
  activeFilterCount: number;
  reset: () => void;
}

/**
 * Build initial states from filter definitions.
 */
function buildInitialStates<Q extends ObjectTypeDefinition>(
  definitions: FilterListProps<Q>["filterDefinitions"],
): Map<string, FilterState> {
  const states = new Map<string, FilterState>();

  if (!definitions) {
    return states;
  }

  for (let i = 0; i < definitions.length; i++) {
    const definition = definitions[i];
    const filterKey = getFilterKey(definition);
    const instanceKey = `${filterKey}:${i}`;

    switch (definition.type) {
      case "property": {
        const state = definition.filterState;
        if (state) {
          states.set(instanceKey, state);
        }
        break;
      }
      case "hasLink":
      case "keywordSearch":
      case "custom": {
        const state = definition.defaultFilterState;
        if (state) {
          states.set(instanceKey, state);
        }
        break;
      }
      case "linkedProperty": {
        const innerState = definition.defaultLinkedFilterState;
        if (innerState) {
          const state: LinkedPropertyFilterState = {
            type: "LINKED_PROPERTY",
            linkedFilterState: innerState,
          };
          states.set(instanceKey, state);
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
  } = props;

  const objectType = objectSet.$objectSetInternals.def;

  const [internalFilterStates, setInternalFilterStates] = useState<Map<string, FilterState>>(
    () => buildInitialStates(filterDefinitions),
  );

  const filterStates = internalFilterStates;

  const setFilterState = useCallback(
    (key: string, state: FilterState) => {
      setInternalFilterStates((prev) => {
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
    () => buildWhereClause(filterDefinitions, filterStates, filterOperator, objectType),
    [filterDefinitions, filterStates, filterOperator, objectType],
  );

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
    setInternalFilterStates(buildInitialStates(filterDefinitions));
  }, [filterDefinitions]);

  return {
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  };
}
