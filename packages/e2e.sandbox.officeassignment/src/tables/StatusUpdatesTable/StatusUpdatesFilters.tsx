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
