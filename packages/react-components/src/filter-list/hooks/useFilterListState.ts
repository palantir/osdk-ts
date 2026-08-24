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

import { useDebouncedCallback } from "../../shared/hooks/useDebouncedCallback.js";
import type {
  FilterChangeCause,
  FilterChangeEvent,
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
import { getActiveFilters } from "../utils/getActiveFilters.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { getSeedFilterState } from "../utils/getSeedFilterState.js";
import { narrowObjectSet } from "../utils/narrowObjectSet.js";
import { useStableMapEntries } from "./useStableMapEntries.js";

const ON_FILTER_CHANGED_DEBOUNCE_MS = 300;

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
    filterStates: controlledFilterStates,
    defaultFilterStates,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat fallback for the pre-rename prop
    initialFilterStates,
  } = props;
  const seededFilterStates = defaultFilterStates ?? initialFilterStates;
  const { metadata } = useOsdkMetadata(objectType);

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

  const emitFilterChanged = useDebouncedCallback(
    (change: FilterChangeEvent<Q>) => {
      onFilterChangedRef.current?.(change);
    },
    ON_FILTER_CHANGED_DEBOUNCE_MS,
  );

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

  // The baseline the reset button restores to: the states the component was
  // last handed from outside, whether that was the mount seeds or a later
  // `filterStates` push.
  const [baselineFilterStates, setBaselineFilterStates] = useState<
    Map<string, FilterState>
  >(() => {
    if (controlledFilterStates != null) {
      return new Map(controlledFilterStates);
    }
    const snapshot = buildInitialStates(filterDefinitions);
    if (seededFilterStates) {
      for (const [key, state] of seededFilterStates) {
        snapshot.set(key, state);
      }
    }
    return snapshot;
  });

  const [filterStates, setFilterStates] = useState<Map<string, FilterState>>(
    () => new Map(baselineFilterStates),
  );

  // Back-to-back writes can occur before React commits, so each transition must
  // build on the latest eagerly computed state rather than the render snapshot.
  const filterStatesRef = useRef(filterStates);
  filterStatesRef.current = filterStates;

  // Edits land in local state first so typing stays responsive and the consumer
  // only has to re-render on its own schedule. Adopting a pushed map during
  // render rather than in an effect keeps the outgoing states from painting for
  // a frame; the identity check makes it run once per distinct map, and the
  // deep check ignores a consumer echoing back what it just read out.
  const lastControlledFilterStatesRef = useRef(controlledFilterStates);
  const pendingReplaceEmitRef = useRef<Map<string, FilterState> | undefined>(
    undefined,
  );
  if (
    controlledFilterStates != null &&
    controlledFilterStates !== lastControlledFilterStatesRef.current
  ) {
    lastControlledFilterStatesRef.current = controlledFilterStates;
    if (!isEqual(controlledFilterStates, filterStatesRef.current)) {
      const adopted = new Map(controlledFilterStates);
      filterStatesRef.current = adopted;
      setFilterStates(adopted);
      setBaselineFilterStates(adopted);
      pendingReplaceEmitRef.current = adopted;
    }
  }

  const reportChange = useCallback(
    (next: Map<string, FilterState>, event: FilterChangeCause) => {
      if (onFilterChangedRef.current == null) {
        return;
      }
      const snapshot = deriveSnapshot(
        filterDefinitionsRef.current,
        next,
        propertyTypesRef.current,
        objectSetRef.current,
      );
      emitFilterChanged({
        ...event,
        filterClause: snapshot.whereClause,
        activeFilters: getActiveFilters(
          filterDefinitionsRef.current,
          next,
          propertyTypesRef.current,
        ),
        filteredObjectSet: snapshot.effectiveObjectSet,
        filterStates: next,
      });
    },
    [emitFilterChanged],
  );

  // A pushed map supersedes any edit still waiting out the debounce, so the
  // consumer never gets the outgoing states attributed to the incoming ones.
  useEffect(() => {
    const replaced = pendingReplaceEmitRef.current;
    if (replaced == null) {
      return;
    }
    pendingReplaceEmitRef.current = undefined;
    reportChange(replaced, { event: "REPLACE" });
  }, [filterStates, reportChange]);

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
      reportChange(next, event);
    },
    [reportChange],
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
    applyChange(() => new Map(baselineFilterStates), { event: "RESET" });
  }, [applyChange, baselineFilterStates]);

  const { whereClause, linkedFilters, effectiveObjectSet } = useMemo(
    () =>
      deriveSnapshot(filterDefinitions, filterStates, propertyTypes, objectSet),
    [filterDefinitions, filterStates, propertyTypes, objectSet],
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
    () => !isEqual(filterStates, baselineFilterStates),
    [filterStates, baselineFilterStates],
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
