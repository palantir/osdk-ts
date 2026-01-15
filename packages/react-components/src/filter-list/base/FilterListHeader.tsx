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

import React, { memo, type ReactNode, useCallback } from "react";
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";

interface FilterListHeaderProps {
  title?: string;
  titleIcon?: ReactNode;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  showResetButton?: boolean;
  onReset?: () => void;
  showActiveFilterCount?: boolean;
  activeFilterCount?: number;
  classNames?: FilterListClassNames;
}

function FilterListHeaderInner({
  title,
  titleIcon,
  collapsed = false,
  onCollapsedChange,
  showResetButton,
  onReset,
  showActiveFilterCount,
  activeFilterCount = 0,
  classNames,
}: FilterListHeaderProps): React.ReactElement {
  const showCollapseButton = onCollapsedChange != null;

  const handleCollapseClick = useCallback(() => {
    onCollapsedChange?.(!collapsed);
  }, [onCollapsedChange, collapsed]);

  return (
    <div className={classNames?.header ?? "filter-list__header"}>
      {showCollapseButton && (
        <button
          type="button"
          className={classNames?.collapseButton}
          onClick={handleCollapseClick}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand filters" : "Collapse filters"}
        >
          <span
            className={classNames?.collapseIcon}
            data-collapsed={collapsed}
          />
        </button>
      )}

      {!collapsed && (
        <>
          <div
            className={classNames?.titleContainer
              ?? "filter-list__title-container"}
          >
            {titleIcon && (
              <span className={classNames?.titleIcon}>
                {titleIcon}
              </span>
            )}
            {title && (
              <span className={classNames?.title ?? "filter-list__title"}>
                {title}
              </span>
            )}
            {showActiveFilterCount && activeFilterCount > 0 && (
              <span
                className={classNames?.activeCount
                  ?? "filter-list__active-count"}
              >
                ({activeFilterCount})
              </span>
            )}
          </div>

          {showResetButton && (
            <button
              type="button"
              className={classNames?.resetButton ?? "filter-list__reset-button"}
              onClick={onReset}
              disabled={activeFilterCount === 0}
            >
              Reset
            </button>
          )}
        </>
      )}
    </div>
  );
}

export const FilterListHeader = memo(FilterListHeaderInner);
