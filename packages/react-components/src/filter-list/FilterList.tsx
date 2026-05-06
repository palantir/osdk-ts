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
import React, { useCallback, useMemo } from "react";
import { AddFilterPopover } from "./base/AddFilterPopover.js";
import { BaseFilterList } from "./base/BaseFilterList.js";
import type { RenderFilterInput } from "./base/BaseFilterListApi.js";
import { FilterInput } from "./FilterInput.js";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "./FilterListApi.js";
import { useFilterListState } from "./hooks/useFilterListState.js";
import { useFilterVisibility } from "./hooks/useFilterVisibility.js";
import { getFilterKey } from "./utils/getFilterKey.js";
import { getFilterLabel } from "./utils/getFilterLabel.js";

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): React.ReactElement {
  const {
    objectType,
    objectSet,
    title,
    titleIcon,
    collapsed,
    onCollapsedChange,
    filterDefinitions,
    addFilterMode = "uncontrolled",
    showResetButton = false,
    onReset,
    showActiveFilterCount = false,
    className,
    enableSorting,
    onFilterAdded,
    onFilterRemoved,
    renderAddFilterButton,
  } = props;

  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
    activeFilterCount,
    reset,
  } = useFilterListState(props);

  const uncontrolledAddFilterMode = addFilterMode === "uncontrolled";

  const getIsVisible = useCallback(
    (def: FilterDefinitionUnion<Q>) => def.isVisible !== false,
    [],
  );

  const {
    visibleDefinitions: managedVisibleDefinitions,
    hiddenDefinitions: managedHiddenDefinitions,
    showFilter,
    hideFilter,
    hasVisibilityChanges,
    resetVisibility,
  } = useFilterVisibility(filterDefinitions, getFilterKey, getIsVisible);

  const handleReset = useCallback(() => {
    reset();
    resetVisibility();
    onReset?.();
  }, [reset, resetVisibility, onReset]);

  const simpleVisibleDefinitions = useMemo(() => {
    if (filterDefinitions == null) {
      return undefined;
    }
    return filterDefinitions.filter(
      (def: FilterDefinitionUnion<Q>) => def.isVisible !== false,
    );
  }, [filterDefinitions]);

  const effectiveVisibleDefinitions = uncontrolledAddFilterMode
    ? managedVisibleDefinitions
    : simpleVisibleDefinitions;

  const handleFilterRemoved = useCallback(
    (filterKey: string) => {
      clearFilterState(filterKey);
      if (uncontrolledAddFilterMode) {
        hideFilter(filterKey);
      }
      onFilterRemoved?.(filterKey);
    },
    [clearFilterState, uncontrolledAddFilterMode, hideFilter, onFilterRemoved],
  );

  const handleFilterShown = useCallback(
    (filterKey: string) => {
      showFilter(filterKey);
      onFilterAdded?.(filterKey, filterDefinitions ?? []);
    },
    [showFilter, onFilterAdded, filterDefinitions],
  );

  const hiddenFilterItems = useMemo(
    () =>
      managedHiddenDefinitions.map((def) => ({
        key: getFilterKey(def),
        label: getFilterLabel(def),
      })),
    [managedHiddenDefinitions],
  );

  const effectiveRenderAddFilterButton = useMemo(() => {
    if (uncontrolledAddFilterMode) {
      if (managedHiddenDefinitions.length === 0) {
        return undefined;
      }
      return () => (
        <AddFilterPopover
          hiddenDefinitions={hiddenFilterItems}
          onShowFilter={handleFilterShown}
          renderTrigger={renderAddFilterButton}
        />
      );
    }
    return renderAddFilterButton;
  }, [
    uncontrolledAddFilterMode,
    managedHiddenDefinitions.length,
    hiddenFilterItems,
    handleFilterShown,
    renderAddFilterButton,
  ]);

  const effectiveOnFilterRemoved = uncontrolledAddFilterMode
    ? handleFilterRemoved
    : onFilterRemoved;

  const renderInput = useCallback<RenderFilterInput<FilterDefinitionUnion<Q>>>(
    (
      {
        definition,
        filterState,
        onFilterStateChanged,
        searchQuery,
        excludeRowOpen,
        whereClauseForFilter,
      },
    ) => (
      <FilterInput
        objectType={objectType}
        objectSet={objectSet}
        definition={definition}
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
        whereClause={(whereClauseForFilter as WhereClause<Q> | undefined)
          ?? ({} as WhereClause<Q>)}
        searchQuery={searchQuery}
        excludeRowOpen={excludeRowOpen}
      />
    ),
    [objectType, objectSet],
  );

  return (
    <BaseFilterList
      title={title}
      titleIcon={titleIcon}
      collapsed={collapsed}
      onCollapsedChange={onCollapsedChange}
      filterDefinitions={effectiveVisibleDefinitions}
      filterStates={filterStates}
      onFilterStateChanged={setFilterState}
      renderInput={renderInput}
      getFilterKey={getFilterKey}
      getFilterLabel={getFilterLabel}
      activeFilterCount={activeFilterCount}
      onReset={handleReset}
      showResetButton={showResetButton}
      showActiveFilterCount={showActiveFilterCount}
      hasVisibilityChanges={hasVisibilityChanges}
      enableSorting={enableSorting}
      onFilterRemoved={effectiveOnFilterRemoved}
      className={className}
      renderAddFilterButton={effectiveRenderAddFilterButton}
      perFilterWhereClauses={perFilterWhereClauses}
    />
  );
}
