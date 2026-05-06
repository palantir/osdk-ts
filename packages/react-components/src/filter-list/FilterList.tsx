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
import React, { useCallback, useMemo, useRef } from "react";
import { AddFilterPopover } from "./base/AddFilterPopover.js";
import { BaseFilterList } from "./base/BaseFilterList.js";
import type { RenderFilterInput } from "./base/BaseFilterListApi.js";
import { FilterInput } from "./FilterInput.js";
import type {
  FilterDefinitionUnion,
  FilterKey,
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
    onFilterVisibilityChange,
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

  // TODO: Refactor to consolidate dragOrder management in useFilterVisibility.
  // This ref shadows dragOrder so we can compute the visible-key
  // order for onFilterVisibilityChange without lifting state.
  const orderedVisibleKeysRef = useRef<string[] | null>(null);
  const setDragOrderRef = useRef<((next: string[] | null) => void) | null>(
    null,
  );

  const fireOnFilterVisibilityChange = useCallback(
    (
      visibleKeys: string[],
      hiddenDefs: Array<FilterDefinitionUnion<Q>>,
    ) => {
      if (!onFilterVisibilityChange) {
        return;
      }
      const states: Array<{ filterKey: FilterKey<Q>; isVisible: boolean }> = [];
      for (const key of visibleKeys) {
        states.push({ filterKey: key as FilterKey<Q>, isVisible: true });
      }
      for (const def of hiddenDefs) {
        states.push({
          filterKey: getFilterKey(def) as FilterKey<Q>,
          isVisible: false,
        });
      }
      onFilterVisibilityChange(states);
    },
    [onFilterVisibilityChange],
  );

  const handleReset = useCallback(() => {
    reset();
    resetVisibility();
    orderedVisibleKeysRef.current = null;
    setDragOrderRef.current?.(null);
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
        const currentOrder = orderedVisibleKeysRef.current
          ?? managedVisibleDefinitions.map(getFilterKey);
        const nextOrder = currentOrder.filter((k) => k !== filterKey);
        orderedVisibleKeysRef.current = nextOrder;
        const removedDef = managedVisibleDefinitions.find(
          (d) => getFilterKey(d) === filterKey,
        );
        const nextHidden = removedDef
          ? [...managedHiddenDefinitions, removedDef]
          : managedHiddenDefinitions;
        fireOnFilterVisibilityChange(nextOrder, nextHidden);
      }
      onFilterRemoved?.(filterKey);
    },
    [
      clearFilterState,
      uncontrolledAddFilterMode,
      hideFilter,
      onFilterRemoved,
      managedVisibleDefinitions,
      managedHiddenDefinitions,
      fireOnFilterVisibilityChange,
    ],
  );

  const handleFilterShown = useCallback(
    (filterKey: string) => {
      showFilter(filterKey);
      const currentOrder = orderedVisibleKeysRef.current
        ?? managedVisibleDefinitions.map(getFilterKey);
      const nextOrder = [...currentOrder, filterKey];
      orderedVisibleKeysRef.current = nextOrder;
      // Sync FilterListContent's drag order so the newly-added filter renders
      // at the bottom of the list, matching the callback semantics.
      setDragOrderRef.current?.(nextOrder);
      const nextHidden = managedHiddenDefinitions.filter(
        (d) => getFilterKey(d) !== filterKey,
      );
      fireOnFilterVisibilityChange(nextOrder, nextHidden);
      onFilterAdded?.(filterKey, filterDefinitions ?? []);
    },
    [
      showFilter,
      onFilterAdded,
      filterDefinitions,
      managedVisibleDefinitions,
      managedHiddenDefinitions,
      fireOnFilterVisibilityChange,
    ],
  );

  const handleOrderChange = useCallback(
    (orderedKeys: string[]) => {
      orderedVisibleKeysRef.current = orderedKeys;
      fireOnFilterVisibilityChange(orderedKeys, managedHiddenDefinitions);
    },
    [fireOnFilterVisibilityChange, managedHiddenDefinitions],
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
        filterKey,
        filterState,
        onFilterStateChanged,
        searchQuery,
        excludeRowOpen,
      },
    ) => (
      <FilterInput
        objectType={objectType}
        objectSet={objectSet}
        definition={definition}
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
        whereClause={perFilterWhereClauses.get(filterKey)
          ?? ({} as WhereClause<Q>)}
        searchQuery={searchQuery}
        excludeRowOpen={excludeRowOpen}
      />
    ),
    [objectType, objectSet, perFilterWhereClauses],
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
      onOrderChange={handleOrderChange}
      setDragOrderRef={setDragOrderRef}
      className={className}
      renderAddFilterButton={effectiveRenderAddFilterButton}
    />
  );
}
