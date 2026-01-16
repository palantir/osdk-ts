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
import { useCallback, useMemo, useRef, useState } from "react";
import type { FilterKey, FilterListProps } from "../FilterListApi.js";
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
    onFilterClauseChanged,
  } = props;

  const objectType = objectSet.$objectSetInternals.def;

  const [internalFilterStates, setInternalFilterStates] = useState<
    Map<string, FilterState>
  >(
    () => buildInitialStates(filterDefinitions),
  );

  const filterStates = internalFilterStates;

  // Use refs to avoid stale closures in setFilterState callback
  const filterDefinitionsRef = useRef(filterDefinitions);
  filterDefinitionsRef.current = filterDefinitions;

  const filterOperatorRef = useRef(filterOperator);
  filterOperatorRef.current = filterOperator;

  const objectTypeRef = useRef(objectType);
  objectTypeRef.current = objectType;

  const onFilterClauseChangedRef = useRef(onFilterClauseChanged);
  onFilterClauseChangedRef.current = onFilterClauseChanged;

  const setFilterState = useCallback(
    (key: string, state: FilterState) => {
      let newWhereClause: WhereClause<Q> | undefined;

      setInternalFilterStates((prev) => {
        const next = new Map(prev);
        next.set(key, state);

        // Compute inside updater for access to 'next', store for callback outside
        newWhereClause = buildWhereClause(
          filterDefinitionsRef.current,
          next,
          filterOperatorRef.current,
          objectTypeRef.current,
        );

        return next;
      });

      // Call callback OUTSIDE the updater - safe for React Strict Mode
      if (newWhereClause !== undefined) {
        onFilterClauseChangedRef.current?.(newWhereClause);
      }
      // Cast is safe: keys are derived from filter definitions via getFilterKey()
      onFilterStateChanged?.(key as FilterKey<Q>, state);
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
    const initialStates = buildInitialStates(filterDefinitionsRef.current);
    setInternalFilterStates(initialStates);

    // Build and emit the where clause for initial states
    const newWhereClause = buildWhereClause(
      filterDefinitionsRef.current,
      initialStates,
      filterOperatorRef.current,
      objectTypeRef.current,
    );
    onFilterClauseChangedRef.current?.(newWhereClause);
  }, []);

  return {
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  };
}
