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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { isEqual } from "lodash-es";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FilterListProps } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type {
  LinkedFilter,
  LinkedPropertyFilterState,
} from "../types/LinkedFilterTypes.js";
import {
  buildWhereClause,
  getActiveLinkedFilters,
  type PropertyTypeInfo,
} from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { narrowObjectSet } from "../utils/narrowObjectSet.js";
import { useStableMapEntries } from "./useStableMapEntries.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<string, FilterState>;
  setFilterState: (filterKey: string, state: FilterState) => void;
  clearFilterState: (filterKey: string) => void;
  /** Direct (non-link-traversing) filters combined into a `WhereClause<Q>`. */
  whereClause: WhereClause<Q>;
  /** Active linked-property records; apply via `narrowObjectSet`. */
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>;
  /** Per-filter excluding-self where clauses keyed by `getFilterKey`. */
  perFilterWhereClauses: Map<string, WhereClause<Q>>;
  /** Per-filter excluding-self linked filters keyed by `getFilterKey`. */
  perFilterLinkedFilters: Map<string, ReadonlyArray<LinkedFilter<Q>>>;
  activeFilterCount: number;
  hasChangesFromInitial: boolean;
  reset: () => void;
}

function buildInitialStates<Q extends ObjectTypeDefinition>(
  definitions: FilterListProps<Q>["filterDefinitions"]
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
  props: FilterListProps<Q>
): UseFilterListStateResult<Q> {
  const {
    objectType,
    objectSet,
    filterDefinitions,
    onFilterStateChanged,
    onFilterClauseChanged,
    onEffectiveObjectSet,
    initialFilterStates,
  } = props;
  const { metadata } = useOsdkMetadata(objectType);
  const onFilterClauseChangedRef = useRef(onFilterClauseChanged);
  onFilterClauseChangedRef.current = onFilterClauseChanged;
  const onEffectiveObjectSetRef = useRef(onEffectiveObjectSet);
  onEffectiveObjectSetRef.current = onEffectiveObjectSet;
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

  // Captured once on first render to provide a stable baseline for the reset
  // button's enabled state. `useState`'s lazy initializer pins the value for
  // the lifetime of the component (unlike `useMemo`, which React may discard).
  const [initialFilterStatesSnapshot] = useState<Map<string, FilterState>>(
    () => {
      const snapshot = buildInitialStates(filterDefinitions);
      if (initialFilterStates) {
        for (const [key, state] of initialFilterStates) {
          snapshot.set(key, state);
        }
      }
      return snapshot;
    }
  );

  const [filterStates, setFilterStates] = useState<Map<string, FilterState>>(
    () => new Map(initialFilterStatesSnapshot)
  );

  const setFilterState = useCallback(
    (filterKey: string, state: FilterState) => {
      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(filterKey, state);
        return next;
      });

      const definition = filterDefinitionsRef.current?.find(
        (d) => getFilterKey(d) === filterKey
      );
      if (definition) {
        onFilterStateChanged?.(definition, state);
      }
    },
    [onFilterStateChanged]
  );

  const clearFilterState = useCallback((filterKey: string) => {
    setFilterStates((prev) => {
      const next = new Map(prev);
      next.delete(filterKey);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setFilterStates(new Map(initialFilterStatesSnapshot));
  }, [initialFilterStatesSnapshot]);

  const whereClause = useMemo(
    () => buildWhereClause(filterDefinitions, filterStates, propertyTypes),
    [filterDefinitions, filterStates, propertyTypes]
  );

  const linkedFilters = useMemo(
    () => getActiveLinkedFilters(filterDefinitions, filterStates),
    [filterDefinitions, filterStates]
  );

  const effectiveObjectSet = useMemo<ObjectSet<Q> | undefined>(
    () =>
      objectSet == null
        ? undefined
        : narrowObjectSet(objectSet, whereClause, linkedFilters),
    [objectSet, whereClause, linkedFilters]
  );

  useEffect(() => {
    onFilterClauseChangedRef.current?.(whereClause);
  }, [whereClause]);

  useEffect(() => {
    if (effectiveObjectSet == null) {
      return;
    }
    onEffectiveObjectSetRef.current?.(effectiveObjectSet);
  }, [effectiveObjectSet]);

  const perFilterWhereClauses = useStableMapEntries(
    useMemo(() => {
      const map = new Map<string, WhereClause<Q>>();
      for (const definition of filterDefinitions ?? []) {
        const key = getFilterKey(definition);
        map.set(
          key,
          buildWhereClause(filterDefinitions, filterStates, propertyTypes, key)
        );
      }
      return map;
    }, [filterDefinitions, filterStates, propertyTypes])
  );

  const perFilterLinkedFilters = useStableMapEntries(
    useMemo(() => {
      const map = new Map<string, ReadonlyArray<LinkedFilter<Q>>>();
      for (const definition of filterDefinitions ?? []) {
        const key = getFilterKey(definition);
        map.set(
          key,
          getActiveLinkedFilters(filterDefinitions, filterStates, key)
        );
      }
      return map;
    }, [filterDefinitions, filterStates])
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

  const hasChangesFromInitial = useMemo(
    () => !isEqual(filterStates, initialFilterStatesSnapshot),
    [filterStates, initialFilterStatesSnapshot]
  );

  return useMemo(
    () => ({
      filterStates,
      setFilterState,
      clearFilterState,
      whereClause,
      linkedFilters,
      perFilterWhereClauses,
      perFilterLinkedFilters,
      activeFilterCount,
      hasChangesFromInitial,
      reset,
    }),
    [
      filterStates,
      setFilterState,
      clearFilterState,
      whereClause,
      linkedFilters,
      perFilterWhereClauses,
      perFilterLinkedFilters,
      activeFilterCount,
      hasChangesFromInitial,
      reset,
    ]
  );
}
