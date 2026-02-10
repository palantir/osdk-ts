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
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";
import { assertUnreachable } from "../utils/assertUnreachable.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { useLatestRef } from "./useLatestRef.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<FilterDefinitionUnion<Q>, FilterState>;
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
 * Uses filter definition objects as keys (object identity).
 */
function buildInitialStates<Q extends ObjectTypeDefinition>(
  definitions: FilterListProps<Q>["filterDefinitions"],
): Map<FilterDefinitionUnion<Q>, FilterState> {
  const states = new Map<FilterDefinitionUnion<Q>, FilterState>();

  if (!definitions) {
    return states;
  }

  for (const definition of definitions) {
    switch (definition.type) {
      case "PROPERTY": {
        const state = definition.filterState;
        if (state) {
          states.set(definition, state);
        }
        break;
      }
      case "HAS_LINK":
      case "KEYWORD_SEARCH":
      case "CUSTOM": {
        const state = definition.defaultFilterState;
        if (state) {
          states.set(definition, state);
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
          states.set(definition, state);
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
    Map<FilterDefinitionUnion<Q>, FilterState>
  >(() => buildInitialStates(filterDefinitions));

  // Use refs to avoid stale closures in callbacks
  const filterDefinitionsRef = useLatestRef(filterDefinitions);
  const filterOperatorRef = useLatestRef(filterOperator);
  const objectTypeRef = useLatestRef(objectType);
  const onFilterClauseChangedRef = useLatestRef(onFilterClauseChanged);
  const onFilterStateChangedRef = useLatestRef(onFilterStateChanged);

  const setFilterState = useCallback(
    (definition: FilterDefinitionUnion<Q>, state: FilterState) => {
      let newWhereClause: WhereClause<Q> | undefined;

      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(definition, state);

        // Compute inside updater for access to 'next', store for callback outside
        newWhereClause = buildWhereClause(
          filterDefinitionsRef.current,
          next,
          filterOperatorRef.current,
          objectTypeRef.current,
        );

        return next;
      });

      // Call callbacks OUTSIDE the updater - safe for React Strict Mode
      if (newWhereClause !== undefined) {
        onFilterClauseChangedRef.current?.(newWhereClause);
      }
      onFilterStateChangedRef.current?.(definition, state);
    },
    [],
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
    setFilterStates(initialStates);

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
