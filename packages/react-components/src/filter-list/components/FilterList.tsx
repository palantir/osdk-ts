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
import classNames from "classnames";
import React, { useCallback, useEffect } from "react";
import type { FilterListProps } from "../FilterListApi.js";
import type { FilterListTheme } from "../FilterThemeTypes.js";
import { useFilterListState } from "../hooks/useFilterListState.js";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

function themeToStyle(
  theme: FilterListTheme | undefined,
): React.CSSProperties | undefined {
  if (!theme) return undefined;

  const style: React.CSSProperties & Record<`--${string}`, string> = {};

  if (theme.panelBgColor) style["--filter-panel-bg-color"] = theme.panelBgColor;
  if (theme.itemBgColor) style["--filter-item-bg-color"] = theme.itemBgColor;
  if (theme.itemHoverBgColor) {
    style["--filter-item-hover-bg-color"] = theme.itemHoverBgColor;
  }
  if (theme.itemActiveBgColor) {
    style["--filter-item-active-bg-color"] = theme.itemActiveBgColor;
  }
  if (theme.panelBorderColor) {
    style["--filter-panel-border-color"] = theme.panelBorderColor;
  }
  if (theme.histogramColor) {
    style["--filter-histogram-color"] = theme.histogramColor;
  }
  if (theme.countTextColor) {
    style["--filter-count-text-color"] = theme.countTextColor;
  }
  if (theme.headerBgColor) {
    style["--filter-header-bg-color"] = theme.headerBgColor;
  }

  return Object.keys(style).length > 0 ? style : undefined;
}

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

  return (
    <div
      className={classNames(
        "filter-list",
        collapsed && "filter-list--collapsed",
        className,
      )}
      style={themeToStyle(theme)}
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
              className={classNames(
                "bp6-button",
                "bp6-minimal",
                "bp6-intent-primary",
                "filter-list__add-button",
                "filter-list__add-button--inline",
              )}
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
          className={classNames(
            "bp6-button",
            "bp6-minimal",
            "bp6-intent-primary",
            "filter-list__add-button",
            "filter-list__add-button--fixed",
          )}
          onClick={onAddFilter}
        >
          + Add filter
        </button>
      )}
    </div>
  );
}
