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

import type {
  FilterChangeCause,
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { LinkedFilter } from "../types/LinkedFilterTypes.js";
import {
  buildWhereClause,
  getActiveLinkedFilters,
  type PropertyTypeInfo,
} from "../utils/filterStateToWhereClause.js";
import { filterHasActiveState } from "../utils/filterValues.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { getSeedFilterState } from "../utils/getSeedFilterState.js";
import { narrowObjectSet } from "../utils/narrowObjectSet.js";
import { useStableMapEntries } from "./useStableMapEntries.js";

export interface UseFilterListStateResult<Q extends ObjectTypeDefinition> {
  filterStates: Map<string, FilterState>;
  setFilterState: (filterKey: string, state: FilterState) => void;
  clearFilterState: (filterKey: string) => void;
  /** Direct (non-link-traversing) filters combined into a `WhereClause<Q>`. */
  whereClause: WhereClause<Q>;
  /** Active HAS_LINK and LINKED_PROPERTY records */
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
  definitions: FilterListProps<Q>["filterDefinitions"],
): Map<string, FilterState> {
  const states = new Map<string, FilterState>();

  if (!definitions) {
    return states;
  }

  for (const definition of definitions) {
    const state = getSeedFilterState(definition);
    if (state) {
      states.set(getFilterKey(definition), state);
    }
  }

  return states;
}

interface FilterSnapshot<Q extends ObjectTypeDefinition> {
  whereClause: WhereClause<Q>;
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>;
  effectiveObjectSet: ObjectSet<Q> | undefined;
}

function deriveSnapshot<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  propertyTypes: Map<string, PropertyTypeInfo>,
  objectSet: ObjectSet<Q> | undefined,
): FilterSnapshot<Q> {
  const whereClause = buildWhereClause(
    definitions,
    filterStates,
    propertyTypes,
  );
  const linkedFilters = getActiveLinkedFilters(definitions, filterStates);
  return {
    whereClause,
    linkedFilters,
    effectiveObjectSet:
      objectSet == null
        ? undefined
        : narrowObjectSet(objectSet, whereClause, linkedFilters),
  };
}

export function useFilterListState<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): UseFilterListStateResult<Q> {
  const {
    objectType,
    objectSet,
    filterDefinitions,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat callback still supported
    onFilterStateChanged,
    onFilterChanged,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat callback still supported
    onFilterClauseChanged,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat callback still supported
    onEffectiveObjectSet,
    defaultFilterStates,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat fallback for the pre-rename prop
    initialFilterStates,
  } = props;
  const seededFilterStates = defaultFilterStates ?? initialFilterStates;
  const { metadata, loading: metadataLoading } = useOsdkMetadata(objectType);

  const onFilterStateChangedRef = useRef(onFilterStateChanged);
  onFilterStateChangedRef.current = onFilterStateChanged;
  const onFilterClauseChangedRef = useRef(onFilterClauseChanged);
  onFilterClauseChangedRef.current = onFilterClauseChanged;
  const onEffectiveObjectSetRef = useRef(onEffectiveObjectSet);
  onEffectiveObjectSetRef.current = onEffectiveObjectSet;
  const onFilterChangedRef = useRef(onFilterChanged);
  onFilterChangedRef.current = onFilterChanged;
  const filterDefinitionsRef = useRef(filterDefinitions);
  filterDefinitionsRef.current = filterDefinitions;
  const objectSetRef = useRef(objectSet);
  objectSetRef.current = objectSet;

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

  const emitFilterChanged = useCallback(
    (states: Map<string, FilterState>, cause: FilterChangeCause) => {
      const onChange = onFilterChangedRef.current;
      if (onChange == null) {
        return;
      }
      const snapshot = deriveSnapshot(
        filterDefinitionsRef.current,
        states,
        propertyTypesRef.current,
        objectSetRef.current,
      );
      onChange({
        ...cause,
        filterClause: snapshot.whereClause,
        filteredObjectSet: snapshot.effectiveObjectSet,
      });
    },
    [],
  );

  // Captured once on first render to provide a stable baseline for the reset
  // button's enabled state. `useState`'s lazy initializer pins the value for
  // the lifetime of the component (unlike `useMemo`, which React may discard).
  const [initialFilterStatesSnapshot] = useState<Map<string, FilterState>>(
    () => {
      const snapshot = buildInitialStates(filterDefinitions);
      if (seededFilterStates) {
        for (const [key, state] of seededFilterStates) {
          snapshot.set(key, state);
        }
      }
      return snapshot;
    },
  );

  const [filterStates, setFilterStates] = useState<Map<string, FilterState>>(
    () => new Map(initialFilterStatesSnapshot),
  );

  // Back-to-back writes can occur before React commits, so each transition must
  // build on the latest eagerly computed state rather than the render snapshot.
  const filterStatesRef = useRef(filterStates);
  filterStatesRef.current = filterStates;

  const applyChange = useCallback(
    (
      transition: (
        previous: Map<string, FilterState>,
      ) => Map<string, FilterState> | undefined,
      event: FilterChangeCause,
    ) => {
      const next = transition(filterStatesRef.current);
      if (next === undefined) {
        return;
      }
      filterStatesRef.current = next;
      setFilterStates(next);
      emitFilterChanged(next, event);
    },
    [emitFilterChanged],
  );

  const setFilterState = useCallback(
    (filterKey: string, state: FilterState) => {
      const definition = filterDefinitionsRef.current?.find(
        (candidate) => getFilterKey(candidate) === filterKey,
      );
      if (definition) {
        onFilterStateChangedRef.current?.(definition, state);
      }
      applyChange(
        (previous) => {
          const next = new Map(previous);
          next.set(filterKey, state);
          return next;
        },
        { event: "SET", filterKey, newState: state },
      );
    },
    [applyChange],
  );

  const clearFilterState = useCallback(
    (filterKey: string) => {
      applyChange(
        (previous) => {
          if (!previous.has(filterKey)) {
            return;
          }
          const next = new Map(previous);
          next.delete(filterKey);
          return next;
        },
        { event: "CLEAR", filterKey },
      );
    },
    [applyChange],
  );

  const reset = useCallback(() => {
    applyChange(() => new Map(initialFilterStatesSnapshot), { event: "RESET" });
  }, [applyChange, initialFilterStatesSnapshot]);

  const { whereClause, linkedFilters, effectiveObjectSet } = useMemo(
    () =>
      deriveSnapshot(filterDefinitions, filterStates, propertyTypes, objectSet),
    [filterDefinitions, filterStates, propertyTypes, objectSet],
  );

  const hasEmittedInit = useRef(false);
  useEffect(() => {
    // `propertyTypes` is empty until metadata resolves, and a keyword search
    // over `properties: "all"` builds no clause without it, so the first
    // payload has to wait for the load to settle either way.
    if (hasEmittedInit.current || metadataLoading) {
      return;
    }
    hasEmittedInit.current = true;
    emitFilterChanged(filterStatesRef.current, { event: "INIT" });
  }, [metadataLoading, emitFilterChanged]);

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
          buildWhereClause(filterDefinitions, filterStates, propertyTypes, key),
        );
      }
      return map;
    }, [filterDefinitions, filterStates, propertyTypes]),
  );

  const perFilterLinkedFilters = useStableMapEntries(
    useMemo(() => {
      const map = new Map<string, ReadonlyArray<LinkedFilter<Q>>>();
      for (const definition of filterDefinitions ?? []) {
        const key = getFilterKey(definition);
        map.set(
          key,
          getActiveLinkedFilters(filterDefinitions, filterStates, key),
        );
      }
      return map;
    }, [filterDefinitions, filterStates]),
  );

  const activeFilterCount = useMemo(() => {
    let count = 0;
    for (const definition of filterDefinitions ?? []) {
      const state = filterStates.get(getFilterKey(definition));
      if (state == null) {
        continue;
      }
      // A custom filter's state is opaque, so `filterHasActiveState` can only
      // say "some state exists". Only its own `toWhereClause` knows whether
      // that state filters anything, so match what `buildWhereClause` keeps.
      if (definition.type === "CUSTOM") {
        if (state.type === "custom") {
          const clause = definition.toWhereClause(state);
          if (clause != null && Object.keys(clause).length > 0) {
            count++;
          }
        }
        continue;
      }
      if (filterHasActiveState(state)) {
        count++;
      }
    }
    return count;
  }, [filterDefinitions, filterStates]);

  const hasChangesFromInitial = useMemo(
    () => !isEqual(filterStates, initialFilterStatesSnapshot),
    [filterStates, initialFilterStatesSnapshot],
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
    ],
  );
}
