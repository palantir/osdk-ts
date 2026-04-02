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

import { Button } from "@base-ui/react/button";
import classnames from "classnames";
import React, { useCallback } from "react";
import type { BaseFilterListProps } from "./BaseFilterListApi.js";
import { ExpandIcon } from "./FilterIcons.js";
import styles from "./FilterList.module.css";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

export function BaseFilterList<D>(
  props: BaseFilterListProps<D>,
): React.ReactElement {
  const {
    title,
    titleIcon,
    collapsed = false,
    onCollapsedChange,
    filterDefinitions,
    filterStates,
    onFilterStateChanged,
    renderInput,
    getFilterKey,
    getFilterLabel,
    activeFilterCount,
    onReset,
    onFilterAdded,
    onFilterRemoved,
    showResetButton = false,
    showActiveFilterCount = false,
    hasVisibilityChanges,
    enableSorting,
    className,
    renderAddFilterButton,
  } = props;

  const showHeader = title || titleIcon || showResetButton
    || showActiveFilterCount || onCollapsedChange;

  const showAddButton = renderAddFilterButton != null || onFilterAdded != null;

  const handleExpand = useCallback(() => {
    onCollapsedChange?.(false);
  }, [onCollapsedChange]);

  const isCollapsed = collapsed && onCollapsedChange != null;

  return (
    <div className={classnames(styles.filterList, className)}>
      {isCollapsed && (
        <div
          className={styles.filterListCollapsed}
          data-collapsed="true"
        >
          <Button
            className={styles.expandButton}
            onClick={handleExpand}
            aria-label="Expand filters"
          >
            <ExpandIcon />
          </Button>
          <span className={styles.collapsedLabel}>{title ?? "Filters"}</span>
        </div>
      )}
      <div
        className={classnames(
          styles.expandedContent,
          isCollapsed && styles.hiddenContent,
        )}
        data-active-count={activeFilterCount}
      >
        {showHeader && (
          <FilterListHeader
            title={title}
            titleIcon={titleIcon}
            collapsed={collapsed}
            onCollapsedChange={onCollapsedChange}
            showResetButton={showResetButton}
            onReset={onReset}
            showActiveFilterCount={showActiveFilterCount}
            activeFilterCount={activeFilterCount}
            hasVisibilityChanges={hasVisibilityChanges}
          />
        )}

        <div className={styles.scrollableContent}>
          <FilterListContent
            filterDefinitions={filterDefinitions}
            filterStates={filterStates}
            onFilterStateChanged={onFilterStateChanged}
            onFilterRemoved={onFilterRemoved}
            renderInput={renderInput}
            getFilterKey={getFilterKey}
            getFilterLabel={getFilterLabel}
            enableSorting={enableSorting}
          />
        </div>

        {showAddButton && (
          <div className={styles.addButtonContainer}>
            {renderAddFilterButton
              ? renderAddFilterButton()
              : (
                <Button
                  type="button"
                  className={styles.addButton}
                  onClick={onFilterAdded}
                >
                  + Add filter
                </Button>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
