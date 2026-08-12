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
import React, { useCallback, useState } from "react";

import type { FilterDefinitionControls } from "../FilterListItemApi.js";
import type { BaseFilterListProps } from "./BaseFilterListApi.js";
import { ExpandIcon } from "./FilterIcons.js";
import { FilterListBoundaryProvider } from "./FilterListBoundaryContext.js";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

import styles from "./FilterList.module.css";

// Declared locally because the CJS dts build type-checks this file without Node
// globals. Kept as a literal `process.env.NODE_ENV` read so bundlers can still
// substitute it and drop the warning from production builds.
declare const process: { env: { NODE_ENV?: string } };

export function BaseFilterList<D extends FilterDefinitionControls>(
  props: BaseFilterListProps<D>,
): React.ReactElement {
  const {
    title,
    titleIcon,
    enableCollapse = false,
    defaultCollapsed,
    collapsed: deprecatedCollapsed,
    onCollapsedChange,
    filterDefinitions,
    filterStates,
    onFilterStateChanged,
    renderInput,
    getFilterKey,
    getFilterLabel,
    getEmptyDisplayState,
    activeFilterCount,
    onReset,
    onFilterAdded,
    onFilterRemoved,
    onOrderChange,
    showResetButton = false,
    showActiveFilterCount = false,
    canReset,
    enableSorting,
    className,
    renderAddFilterButton,
  } = props;

  const [boundaryElement, setBoundaryElement] = useState<HTMLDivElement | null>(
    null,
  );

  const [internalCollapsed, setInternalCollapsed] = useState(
    () => defaultCollapsed ?? deprecatedCollapsed ?? false,
  );

  if (
    process.env.NODE_ENV !== "production" &&
    !enableCollapse &&
    (defaultCollapsed === true || deprecatedCollapsed === true)
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      "[FilterList] `" +
        (defaultCollapsed === true ? "defaultCollapsed" : "collapsed") +
        "` was set but collapse is disabled, so the panel renders expanded. " +
        "Pass `enableCollapse` to opt into the collapse control.",
    );
  }

  const showHeader =
    title ||
    titleIcon ||
    showResetButton ||
    showActiveFilterCount ||
    enableCollapse;

  const showAddButton = renderAddFilterButton != null || onFilterAdded != null;

  const setCollapsed = useCallback(
    (next: boolean) => {
      setInternalCollapsed(next);
      onCollapsedChange?.(next);
    },
    [onCollapsedChange],
  );

  const handleExpand = useCallback(() => {
    setCollapsed(false);
  }, [setCollapsed]);

  const isCollapsed = enableCollapse && internalCollapsed;

  return (
    <div className={classnames(styles.filterList, className)}>
      {isCollapsed && (
        <div className={styles.filterListCollapsed} data-collapsed="true">
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
        ref={setBoundaryElement}
        className={classnames(
          styles.expandedContent,
          isCollapsed && styles.hiddenContent,
        )}
        data-active-count={activeFilterCount}
      >
        <FilterListBoundaryProvider value={boundaryElement}>
          {showHeader && (
            <FilterListHeader
              title={title}
              titleIcon={titleIcon}
              showCollapseButton={enableCollapse}
              collapsed={isCollapsed}
              onCollapsedChange={setCollapsed}
              showResetButton={showResetButton}
              onReset={onReset}
              showActiveFilterCount={showActiveFilterCount}
              activeFilterCount={activeFilterCount}
              canReset={canReset}
            />
          )}

          <div className={styles.scrollableContent}>
            <FilterListContent
              filterDefinitions={filterDefinitions}
              filterStates={filterStates}
              onFilterStateChanged={onFilterStateChanged}
              onFilterRemoved={onFilterRemoved}
              onOrderChange={onOrderChange}
              renderInput={renderInput}
              getFilterKey={getFilterKey}
              getFilterLabel={getFilterLabel}
              getEmptyDisplayState={getEmptyDisplayState}
              enableSorting={enableSorting}
            />
          </div>

          {showAddButton && (
            <div className={styles.addButtonContainer}>
              {renderAddFilterButton ? (
                renderAddFilterButton()
              ) : (
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
        </FilterListBoundaryProvider>
      </div>
    </div>
  );
}
