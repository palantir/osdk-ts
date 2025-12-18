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

import type { ObjectTypeDefinition } from "@osdk/api";
import React, { useCallback, useEffect } from "react";
import type { FilterListProps } from "../FilterListApi.js";
import { useFilterListState } from "../hooks/useFilterListState.js";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): React.ReactElement {
  const {
    objectType,
    title,
    titleIcon,
    filterDefinitions,
    onFilterClauseChanged,
    showResetButton = false,
    onReset,
    showAddFilterButton = false,
    onAddFilter,
    addFilterPosition = "fixed",
    showActiveFilterCount = false,
    theme,
    className,
  } = props;

  const {
    collapsed,
    setCollapsed,
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  } = useFilterListState(props);

  useEffect(() => {
    onFilterClauseChanged?.(whereClause);
  }, [whereClause, onFilterClauseChanged]);

  const handleReset = useCallback(() => {
    reset();
    onReset?.();
  }, [reset, onReset]);

  const themeStyle = theme
    ? {
      "--osdk-filter-panel-bg": theme.panelBgColor,
      "--osdk-filter-item-bg": theme.itemBgColor,
      "--osdk-filter-item-hover-bg": theme.itemHoverBgColor,
      "--osdk-filter-item-active-bg": theme.itemActiveBgColor,
      "--osdk-filter-panel-border": theme.panelBorderColor,
      "--osdk-filter-histogram": theme.histogramColor,
      "--osdk-filter-count-text": theme.countTextColor,
      "--osdk-filter-header-bg": theme.headerBgColor,
    }
    : undefined;

  return (
    <div
      className={`osdk-filter-list ${
        collapsed ? "osdk-filter-list--collapsed" : ""
      } ${className ?? ""}`}
      style={themeStyle as React.CSSProperties}
    >
      <FilterListHeader
        title={title}
        titleIcon={titleIcon}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        showResetButton={showResetButton}
        onReset={handleReset}
        showActiveFilterCount={showActiveFilterCount}
        activeFilterCount={activeFilterCount}
      />

      {!collapsed && (
        <>
          <FilterListContent
            objectType={objectType}
            filterDefinitions={filterDefinitions}
            filterStates={filterStates}
            onFilterStateChanged={setFilterState}
          />

          {showAddFilterButton && addFilterPosition === "inline" && (
            <button
              type="button"
              className="osdk-filter-list__add-button osdk-filter-list__add-button--inline"
              onClick={onAddFilter}
            >
              + Add filter
            </button>
          )}
        </>
      )}

      {showAddFilterButton && addFilterPosition === "fixed" && !collapsed && (
        <button
          type="button"
          className="osdk-filter-list__add-button osdk-filter-list__add-button--fixed"
          onClick={onAddFilter}
        >
          + Add filter
        </button>
      )}
    </div>
  );
}
