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

import { StatusUpdate } from "../generatedNoCheck2/index.js";
import { STATUS_UPDATE_FILTER_DEFS } from "../tables/StatusUpdatesTable/StatusUpdatesFilterDefs.js";
import { getFilterDefId, type IdentifiedFilterDef } from "../types/filters.js";
import { applyVisibilityState } from "../utils/applyVisibilityState.js";
import { isNonEmptyWhere } from "../utils/combineWhere.js";

export interface UseStatusUpdateFiltersResult {
  readonly objectSet: ObjectSet<StatusUpdate>;
  readonly filterClause: WhereClause<StatusUpdate> | undefined;
  readonly setFilterClause: (c: WhereClause<StatusUpdate>) => void;
  readonly filterStates: Map<string, FilterState>;
  readonly orderedFilterDefs: Array<IdentifiedFilterDef<StatusUpdate>>;
  readonly handleFilterStateChanged: (
    def: FilterDefinitionUnion<StatusUpdate>,
    newState: FilterState
  ) => void;
  readonly handleFilterVisibilityChange: (
    newStates: Array<{ filterKey: string; isVisible: boolean }>
  ) => void;
  readonly resetKey: number;
  readonly handleReset: () => void;
}

export function useStatusUpdateFilters(): UseStatusUpdateFiltersResult {
  const client = useOsdkClient();
  const objectSet = React.useMemo(() => client(StatusUpdate), [client]);

  const [filterClause, setFilterClauseRaw] = React.useState<
    WhereClause<StatusUpdate> | undefined
  >(undefined);
  const [filterStates, setFilterStates] = React.useState<
    Map<string, FilterState>
  >(() => new Map());
  const [filterVisibility, setFilterVisibility] = React.useState<
    Array<{ id: string; isVisible: boolean }> | undefined
  >(undefined);
  const [resetKey, setResetKey] = React.useState(0);

  const setFilterClause = React.useCallback(
    (clause: WhereClause<StatusUpdate>) => {
      setFilterClauseRaw(isNonEmptyWhere(clause) ? clause : undefined);
    },
    []
  );

  const orderedFilterDefs = React.useMemo(
    () =>
      applyVisibilityState(
        STATUS_UPDATE_FILTER_DEFS,
        filterVisibility,
        (def) => def.id
      ),
    [filterVisibility]
  );

  const handleFilterStateChanged = React.useCallback(
    (def: FilterDefinitionUnion<StatusUpdate>, newState: FilterState) => {
      const id = getFilterDefId(def);
      if (id != null) {
        setFilterStates((prev) => {
          const next = new Map(prev);
          next.set(id, newState);
          return next;
        });
      }
    },
    []
  );

  const handleFilterVisibilityChange = React.useCallback(
    (newStates: Array<{ filterKey: string; isVisible: boolean }>) => {
      setFilterVisibility(
        newStates.map(({ filterKey, isVisible }) => ({
          id: filterKey,
          isVisible,
        }))
      );
    },
    []
  );

  const handleReset = React.useCallback(() => {
    setFilterClauseRaw(undefined);
    setFilterStates(new Map());
    setFilterVisibility(undefined);
    setResetKey((prev) => prev + 1);
  }, []);

  return {
    objectSet,
    filterClause,
    setFilterClause,
    filterStates,
    orderedFilterDefs,
    handleFilterStateChanged,
    handleFilterVisibilityChange,
    resetKey,
    handleReset,
  };
}
