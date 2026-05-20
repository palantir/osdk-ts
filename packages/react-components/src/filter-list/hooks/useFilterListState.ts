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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { useStableMapEntries } from "./useStableMapEntries.js";

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
  hasChangesFromInitial: boolean;
  reset: () => void;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object"
    && value != null
    && !Array.isArray(value)
    && !(value instanceof Date)
  );
}

/**
 * Recursive structural equality for the JSON-shaped FilterState union.
 * Avoids JSON.stringify so key ordering doesn't produce false negatives.
 */
function areValuesEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) {
    return true;
  }
  if (a instanceof Date || b instanceof Date) {
    if (!(a instanceof Date) || !(b instanceof Date)) {
      return false;
    }
    return a.getTime() === b.getTime();
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!areValuesEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  if (!isPlainRecord(a) || !isPlainRecord(b)) {
    return false;
  }
  const aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length) {
    return false;
  }
  for (const key of aKeys) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) {
      return false;
    }
    if (!areValuesEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

function areFilterStatesEqual(
  a: Map<string, FilterState>,
  b: Map<string, FilterState>,
): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const [key, value] of a) {
    if (!b.has(key)) {
      return false;
    }
    if (!areValuesEqual(value, b.get(key))) {
      return false;
    }
  }
  return true;
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
    filterDefinitions,
    onFilterStateChanged,
    onFilterClauseChanged,
    initialFilterStates,
  } = props;
  const { metadata } = useOsdkMetadata(objectType);
  const onFilterClauseChangedRef = useRef(onFilterClauseChanged);
  onFilterClauseChangedRef.current = onFilterClauseChanged;

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

  const initialFilterStatesSnapshotRef = useRef<
    Map<string, FilterState> | null
  >(
    null,
  );
  let initialFilterStatesSnapshot = initialFilterStatesSnapshotRef.current;
  if (initialFilterStatesSnapshot == null) {
    initialFilterStatesSnapshot = buildInitialStates(filterDefinitions);
    if (initialFilterStates) {
      for (const [key, state] of initialFilterStates) {
        initialFilterStatesSnapshot.set(key, state);
      }
    }
    initialFilterStatesSnapshotRef.current = initialFilterStatesSnapshot;
  }

  const setFilterState = useCallback(
    (filterKey: string, state: FilterState) => {
      setFilterStates((prev) => {
        const next = new Map(prev);
        next.set(filterKey, state);
        return next;
      });

      const definition = filterDefinitions?.find(
        (d) => getFilterKey(d) === filterKey,
      );
      if (definition) {
        onFilterStateChanged?.(definition, state);
      }
    },
    [
      filterDefinitions,
      onFilterStateChanged,
    ],
  );

  const clearFilterState = useCallback(
    (filterKey: string) => {
      setFilterStates((prev) => {
        const next = new Map(prev);
        next.delete(filterKey);
        return next;
      });
    },
    [],
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

  useEffect(() => {
    onFilterClauseChangedRef.current?.(whereClause);
  }, [whereClause]);

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
          ),
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

  const hasChangesFromInitial = useMemo(
    () => !areFilterStatesEqual(filterStates, initialFilterStatesSnapshot),
    [filterStates, initialFilterStatesSnapshot],
  );

  const reset = useCallback(() => {
    setFilterStates(buildInitialStates(filterDefinitions));
  }, [filterDefinitions]);

  return useMemo(() => ({
    filterStates,
    setFilterState,
    clearFilterState,
    whereClause,
    perFilterWhereClauses,
    activeFilterCount,
    hasChangesFromInitial,
    reset,
  }), [
    filterStates,
    setFilterState,
    clearFilterState,
    whereClause,
    perFilterWhereClauses,
    activeFilterCount,
    hasChangesFromInitial,
    reset,
  ]);
}
