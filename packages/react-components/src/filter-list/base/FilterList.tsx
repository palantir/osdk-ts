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
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";
import { mergeClassNames } from "../types/ClassNameOverrides.js";
import type { FilterListTheme } from "../types/FilterThemeTypes.js";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

export interface FilterListComponentProps<Q extends ObjectTypeDefinition>
  extends FilterListProps<Q>
{
  classNames?: FilterListClassNames;
  renderAddFilterButton?: () => React.ReactNode;
}

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
  props: FilterListComponentProps<Q>,
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
    addFilterPosition = "fixed",
    showActiveFilterCount = false,
    theme,
    className,
    classNames,
    renderAddFilterButton,
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

  const rootClassName = mergeClassNames(
    classNames?.root,
    className,
  );

  return (
    <div
      className={rootClassName}
      style={themeToStyle(theme)}
      data-collapsed={collapsed}
      data-active-count={activeFilterCount}
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
        classNames={classNames}
      />

      {!collapsed && (
        <>
          <FilterListContent
            objectType={objectType}
            filterDefinitions={filterDefinitions}
            filterStates={filterStates}
            onFilterStateChanged={setFilterState}
            classNames={classNames}
          />

          {showAddFilterButton && addFilterPosition === "inline"
            && renderAddFilterButton && (
            <div
              className={classNames?.addButtonContainer}
              data-position="inline"
            >
              {renderAddFilterButton()}
            </div>
          )}
        </>
      )}

      {showAddFilterButton && addFilterPosition === "fixed" && !collapsed
        && renderAddFilterButton && (
        <div className={classNames?.addButtonContainer} data-position="fixed">
          {renderAddFilterButton()}
        </div>
      )}
    </div>
  );
}
