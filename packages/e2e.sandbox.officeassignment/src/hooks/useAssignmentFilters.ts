/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectSet, WhereClause } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type {
  FilterDefinitionUnion,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import React from "react";

import { ASSIGNMENT_BASE_WHERE } from "../constants/baseFilter.js";
import { Assignment } from "../generatedNoCheck2/index.js";
import { ASSIGNMENT_FILTER_DEFS } from "../tables/AssignmentsTable/AssignmentsFilterDefs.js";
import { getFilterDefId, type IdentifiedFilterDef } from "../types/filters.js";
import { applyVisibilityState } from "../utils/applyVisibilityState.js";
import { combineWhere, isNonEmptyWhere } from "../utils/combineWhere.js";
import type { LatestStatusSelection } from "../utils/statusFilter.js";
import { useMatchedAssignmentKeys } from "./useMatchedAssignmentKeys.js";

export interface UseAssignmentFiltersResult {
  /** Active + permanent assignments, narrowed by the latest-status selections. Feeds FilterList + table. */
  readonly narrowedObjectSet: ObjectSet<Assignment>;
  /** Latest-status selections and their AND/OR composition (driven by LatestStatusFilter). */
  readonly latestSelections: LatestStatusSelection[];
  readonly setLatestSelections: (s: LatestStatusSelection[]) => void;
  readonly composeAcrossTypes: "$and" | "$or";
  readonly setComposeAcrossTypes: (c: "$and" | "$or") => void;
  /** Property facet clause emitted by FilterList (never empty `{}` — sanitized to undefined). */
  readonly filterClause: WhereClause<Assignment> | undefined;
  readonly setFilterClause: (c: WhereClause<Assignment>) => void;
  /** Per-filter UI state + visibility/order, for FilterList rehydration. */
  readonly filterStates: Map<string, FilterState>;
  readonly orderedFilterDefs: Array<IdentifiedFilterDef<Assignment>>;
  readonly handleFilterStateChanged: (
    def: FilterDefinitionUnion<Assignment>,
    newState: FilterState,
  ) => void;
  readonly handleFilterVisibilityChange: (
    newStates: Array<{ filterKey: string; isVisible: boolean }>,
  ) => void;
  /** Bumped on reset so the FilterList can be remounted to clear internal state. */
  readonly resetKey: number;
  readonly handleReset: () => void;
  /** Combined property + latest-status clause (excludes the base filter); used for metrics. */
  readonly tableFilter: WhereClause<Assignment> | undefined;
  readonly isMatching: boolean;
  readonly matchError: Error | undefined;
  readonly hasActiveFilters: boolean;
}

export function useAssignmentFilters(): UseAssignmentFiltersResult {
  const client = useOsdkClient();

  const [latestSelections, setLatestSelections] = React.useState<
    LatestStatusSelection[]
  >([]);
  const [composeAcrossTypes, setComposeAcrossTypes] = React.useState<
    "$and" | "$or"
  >("$and");
  const [filterClause, setFilterClauseRaw] = React.useState<
    WhereClause<Assignment> | undefined
  >(undefined);
  const [filterStates, setFilterStates] = React.useState<
    Map<string, FilterState>
  >(() => new Map());
  const [filterVisibility, setFilterVisibility] = React.useState<
    Array<{ id: string; isVisible: boolean }> | undefined
  >(undefined);
  const [resetKey, setResetKey] = React.useState(0);

  const baseObjectSet = React.useMemo(
    () => client(Assignment).where(ASSIGNMENT_BASE_WHERE),
    [client],
  );

  const {
    matchedKeys,
    isLoading: isMatching,
    error: matchError,
  } = useMatchedAssignmentKeys(latestSelections, composeAcrossTypes);

  // Narrow the object set by the latest-status matched keys.
  const narrowedObjectSet = React.useMemo(
    () =>
      matchedKeys != null
        ? baseObjectSet.where({ $primaryKey: { $in: matchedKeys } })
        : baseObjectSet,
    [baseObjectSet, matchedKeys],
  );

  // FilterList may emit an empty `{}` clause; the OSDK rejects `.where({})`, so coerce to undefined.
  const setFilterClause = React.useCallback(
    (clause: WhereClause<Assignment>) => {
      setFilterClauseRaw(isNonEmptyWhere(clause) ? clause : undefined);
    },
    [],
  );

  const orderedFilterDefs = React.useMemo(
    () =>
      applyVisibilityState(
        ASSIGNMENT_FILTER_DEFS,
        filterVisibility,
        (def) => def.id,
      ),
    [filterVisibility],
  );

  const handleFilterStateChanged = React.useCallback(
    (def: FilterDefinitionUnion<Assignment>, newState: FilterState) => {
      const id = getFilterDefId(def);
      if (id != null) {
        setFilterStates((prev) => {
          const next = new Map(prev);
          next.set(id, newState);
          return next;
        });
      }
    },
    [],
  );

  const handleFilterVisibilityChange = React.useCallback(
    (newStates: Array<{ filterKey: string; isVisible: boolean }>) => {
      setFilterVisibility(
        newStates.map(({ filterKey, isVisible }) => ({
          id: filterKey,
          isVisible,
        })),
      );
    },
    [],
  );

  const handleReset = React.useCallback(() => {
    setLatestSelections([]);
    setComposeAcrossTypes("$and");
    setFilterClauseRaw(undefined);
    setFilterStates(new Map());
    setFilterVisibility(undefined);
    setResetKey((prev) => prev + 1);
  }, []);

  const tableFilter = React.useMemo<WhereClause<Assignment> | undefined>(
    () =>
      combineWhere<Assignment>([
        filterClause,
        matchedKeys != null ? { $primaryKey: { $in: matchedKeys } } : undefined,
      ]),
    [filterClause, matchedKeys],
  );

  const hasActiveFilters = latestSelections.length > 0
    || isNonEmptyWhere(filterClause);

  return {
    narrowedObjectSet,
    latestSelections,
    setLatestSelections,
    composeAcrossTypes,
    setComposeAcrossTypes,
    filterClause,
    setFilterClause,
    filterStates,
    orderedFilterDefs,
    handleFilterStateChanged,
    handleFilterVisibilityChange,
    resetKey,
    handleReset,
    tableFilter,
    isMatching,
    matchError,
    hasActiveFilters,
  };
}
