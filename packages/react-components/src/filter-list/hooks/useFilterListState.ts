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
import { useOsdkMetadata } from "@osdk/react";
import { useCallback, useMemo, useState } from "react";
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FilterListProps } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";
import {
  buildWhereClause,
  type PropertyTypeInfo,
} from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<string, FilterState>;
  setFilterState: (
    filterKey: string,
    state: FilterState,
  ) => void;
  clearFilterState: (filterKey: string) => void;
  whereClause: WhereClause<Q>;
  perFilterWhereClauses: Map<string, WhereClause<Q>>;
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
            type: "linkedProperty",
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
    onFilterStateChanged,
    onFilterClauseChanged,
    initialFilterStates,
  } = props;

  const objectType = objectSet.$objectSetInternals.def;
  const { metadata } = useOsdkMetadata(objectType);

  const propertyTypes = useMemo(() => {
    const map = new Map<string, PropertyTypeInfo>();
    if (metadata?.properties) {
      for (const [key, prop] of Object.entries(metadata.properties)) {
        if (typeof prop.type === "string") {
          map.set(key, {
            type: prop.type,
            multiplicity: prop.multiplicity === true,
          });
        }
      }
    }
    return map;
  }, [metadata?.properties]);

  const [filterStates, setFilterStates] = useState<
    Map<string, FilterState>
  >(() => {
    const states = buildInitialStates(filterDefinitions);
    if (initialFilterStates) {
      for (const [key, state] of initialFilterStates) {
        states.set(key, state);
      }
    }
    return states;
  });

  const setFilterState = useCallback(
    (filterKey: string, state: FilterState) => {
      let newWhereClause: WhereClause<Q> | undefined;

      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(filterKey, state);

        newWhereClause = buildWhereClause(
          filterDefinitions,
          next,
          propertyTypes,
        );

        return next;
      });

      if (newWhereClause !== undefined) {
        onFilterClauseChanged?.(newWhereClause);
      }
      const definition = filterDefinitions?.find(
        (d) => getFilterKey(d) === filterKey,
      );
      if (definition) {
        onFilterStateChanged?.(definition, state);
      }
    },
    [
      filterDefinitions,
      propertyTypes,
      onFilterClauseChanged,
      onFilterStateChanged,
    ],
  );

  const clearFilterState = useCallback(
    (filterKey: string) => {
      const initialStates = buildInitialStates(filterDefinitions);
      const initialState = initialStates.get(filterKey);

      setFilterStates((prev) => {
        const next = new Map(prev);
        if (initialState) {
          next.set(filterKey, initialState);
        } else {
          next.delete(filterKey);
        }
        return next;
      });

      const updatedStates = new Map(filterStates);
      if (initialState) {
        updatedStates.set(filterKey, initialState);
      } else {
        updatedStates.delete(filterKey);
      }
      const newWhereClause = buildWhereClause(
        filterDefinitions,
        updatedStates,
        propertyTypes,
      );
      onFilterClauseChanged?.(newWhereClause);
    },
    [filterDefinitions, filterStates, propertyTypes, onFilterClauseChanged],
  );

  const whereClause = useMemo(
    () =>
      buildWhereClause(
        filterDefinitions,
        filterStates,
        propertyTypes,
      ),
    [filterDefinitions, filterStates, propertyTypes],
  );

  const perFilterWhereClauses = useMemo(() => {
    const map = new Map<string, WhereClause<Q>>();
    if (!filterDefinitions) {
      return map;
    }
    for (const definition of filterDefinitions) {
      const key = getFilterKey(definition);
      map.set(
        key,
        buildWhereClause(
          filterDefinitions,
          filterStates,
          propertyTypes,
          key,
        ),
      );
    }
    return map;
  }, [filterDefinitions, filterStates, propertyTypes]);

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
    const initialStates = buildInitialStates(filterDefinitions);
    setFilterStates(initialStates);

    const newWhereClause = buildWhereClause(
      filterDefinitions,
      initialStates,
      propertyTypes,
    );
    onFilterClauseChanged?.(newWhereClause);
  }, [filterDefinitions, propertyTypes, onFilterClauseChanged]);

  return useMemo(() => ({
    filterStates,
    setFilterState,
    clearFilterState,
    whereClause,
    perFilterWhereClauses,
    activeFilterCount,
    reset,
  }), [
    filterStates,
    setFilterState,
    clearFilterState,
    whereClause,
    perFilterWhereClauses,
    activeFilterCount,
    reset,
  ]);
}
