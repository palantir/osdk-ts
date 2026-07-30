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
import type {
  FilterDefinitionUnion,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import React from "react";

import { StatusUpdate } from "../../generatedNoCheck2/index.js";
import type { IdentifiedFilterDef } from "../../types/filters.js";

interface StatusUpdatesFiltersProps {
  objectSet: ObjectSet<StatusUpdate>;
  filterDefinitions: Array<IdentifiedFilterDef<StatusUpdate>>;
  filterClause: WhereClause<StatusUpdate> | undefined;
  onFilterClauseChanged: (clause: WhereClause<StatusUpdate>) => void;
  onFilterStateChanged?: (
    definition: FilterDefinitionUnion<StatusUpdate>,
    newState: FilterState,
  ) => void;
  onFilterVisibilityChange?: (
    newStates: Array<{ filterKey: string; isVisible: boolean }>,
  ) => void;
  onReset?: () => void;
  initialFilterStates?: Map<string, FilterState>;
  className?: string;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

/** Status Updates FilterList wrapper. */
export const StatusUpdatesFilters = React.memo<StatusUpdatesFiltersProps>(
  function StatusUpdatesFiltersFn({
    objectSet,
    filterDefinitions,
    filterClause,
    onFilterClauseChanged,
    onFilterStateChanged,
    onFilterVisibilityChange,
    onReset,
    initialFilterStates,
    className,
    collapsed,
    onCollapsedChange,
  }) {
    return (
      <FilterList
        className={className}
        objectType={StatusUpdate}
        objectSet={objectSet}
        filterDefinitions={filterDefinitions}
        filterClause={filterClause}
        onFilterClauseChanged={onFilterClauseChanged}
        onFilterStateChanged={onFilterStateChanged}
        onFilterVisibilityChange={onFilterVisibilityChange}
        onReset={onReset}
        initialFilterStates={initialFilterStates}
        title="Filters"
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
        showResetButton={true}
        showActiveFilterCount={true}
        enableSorting={true}
        addFilterMode="uncontrolled"
      />
    );
  },
);
