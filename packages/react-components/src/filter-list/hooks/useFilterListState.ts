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
import { useCallback, useMemo, useRef, useState } from "react";
import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FilterListProps } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";
import { applyWhereClauseToObjectSet } from "../utils/applyWhereClauseToObjectSet.js";
import {
  buildWhereClause,
  type PropertyTypeInfo,
} from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { stripLinkEntries } from "../utils/stripLinkEntries.js";
import { useStableMapEntries } from "./useStableMapEntries.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<string, FilterState>;
  setFilterState: (
    filterKey: string,
    state: FilterState,
  ) => void;
  clearFilterState: (filterKey: string) => void;
  whereClause: WhereClause<Q>;
  /** Per-filter excluding-self clauses keyed by `getFilterKey`. */
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
      case "STATIC_VALUES": {
        const state = definition.filterState;
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
    objectType,
    objectSet,
    filterDefinitions,
    onFilterStateChanged,
    onFilterClauseChanged,
    onEffectiveObjectSetChanged,
    initialFilterStates,
  } = props;
  const { metadata } = useOsdkMetadata(objectType);
  const onFilterClauseChangedRef = useRef(onFilterClauseChanged);
  onFilterClauseChangedRef.current = onFilterClauseChanged;
  const onEffectiveObjectSetChangedRef = useRef(onEffectiveObjectSetChanged);
  onEffectiveObjectSetChangedRef.current = onEffectiveObjectSetChanged;
  const objectSetRef = useRef(objectSet);
  objectSetRef.current = objectSet;
  const filterDefinitionsRef = useRef(filterDefinitions);
  filterDefinitionsRef.current = filterDefinitions;

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
  const propertyTypesRef = useRef(propertyTypes);
  propertyTypesRef.current = propertyTypes;

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

  // Tracks the latest map written by a setter so multiple synchronous setter
  // calls within one event see the cumulative state. Setters update both the
  // ref and React state, so the ref never lags behind committed state. It is
  // NOT written from render — that would clobber optimistic writes.
  const filterStatesRef = useRef(filterStates);

  const notifyChange = useCallback(
    (next: Map<string, FilterState>) => {
      const extendedClause = buildWhereClause(
        filterDefinitionsRef.current,
        next,
        propertyTypesRef.current,
      );
      const propertyOnlyClause = stripLinkEntries(extendedClause)
        .clause as WhereClause<Q>;
      onFilterClauseChangedRef.current?.(propertyOnlyClause);

      const currentObjectSet = objectSetRef.current;
      if (currentObjectSet != null && onEffectiveObjectSetChangedRef.current) {
        const effective = applyWhereClauseToObjectSet(
          currentObjectSet,
          extendedClause,
        );
        onEffectiveObjectSetChangedRef.current(effective);
      }
    },
    [],
  );

  const setFilterState = useCallback(
    (filterKey: string, state: FilterState) => {
      const next = new Map(filterStatesRef.current);
      next.set(filterKey, state);
      filterStatesRef.current = next;
      setFilterStates(next);
      notifyChange(next);

      const definition = filterDefinitionsRef.current?.find(
        (d) => getFilterKey(d) === filterKey,
      );
      if (definition) {
        onFilterStateChanged?.(definition, state);
      }
    },
    [onFilterStateChanged, notifyChange],
  );

  const clearFilterState = useCallback(
    (filterKey: string) => {
      const next = new Map(filterStatesRef.current);
      next.delete(filterKey);
      filterStatesRef.current = next;
      setFilterStates(next);
      notifyChange(next);
    },
    [notifyChange],
  );

  const whereClause = useMemo(() => {
    const extended = buildWhereClause(
      filterDefinitions,
      filterStates,
      propertyTypes,
    );
    return stripLinkEntries(extended).clause as WhereClause<Q>;
  }, [filterDefinitions, filterStates, propertyTypes]);

  // Preserve per-key clause references when content hasn't changed so
  // FilterInput.memo can hold and aggregations don't refetch unnecessarily.
  const perFilterWhereClauses = useStableMapEntries(
    useMemo(() => {
      const map = new Map<string, WhereClause<Q>>();
      for (const definition of filterDefinitions ?? []) {
        const key = getFilterKey(definition);
        map.set(
          key,
          buildWhereClause(
            filterDefinitions,
            filterStates,
            propertyTypes,
            key,
          ) as unknown as WhereClause<Q>,
        );
      }
      return map;
    }, [filterDefinitions, filterStates, propertyTypes]),
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
    const next = buildInitialStates(filterDefinitionsRef.current);
    filterStatesRef.current = next;
    setFilterStates(next);
    notifyChange(next);
  }, [notifyChange]);

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
