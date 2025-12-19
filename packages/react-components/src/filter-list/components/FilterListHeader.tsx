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

import classNames from "classnames";
import React, { type ReactNode } from "react";

interface FilterListHeaderProps {
  title?: string;
  titleIcon?: ReactNode;
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  showResetButton?: boolean;
  onReset?: () => void;
  showActiveFilterCount?: boolean;
  activeFilterCount: number;
}

export function FilterListHeader({
  title,
  titleIcon,
  collapsed,
  onCollapsedChange,
  showResetButton,
  onReset,
  showActiveFilterCount,
  activeFilterCount,
}: FilterListHeaderProps): React.ReactElement {
  return (
    <div className="filter-list__header">
      <button
        type="button"
        className={classNames(
          "bp5-button",
          "bp5-minimal",
          "bp5-small",
          "filter-list__collapse-button",
        )}
        onClick={() => onCollapsedChange(!collapsed)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand filters" : "Collapse filters"}
      >
        <span
          className={classNames(
            "bp5-icon",
            collapsed ? "bp5-icon-chevron-right" : "bp5-icon-chevron-down",
          )}
        />
      </button>

      {!collapsed && (
        <>
          <div className="filter-list__title-container">
            {titleIcon && (
              <span className="filter-list__title-icon">{titleIcon}</span>
            )}
            {title && <span className="filter-list__title">{title}</span>}
            {showActiveFilterCount && activeFilterCount > 0 && (
              <span className="filter-list__active-count bp5-text-muted bp5-text-small">
                ({activeFilterCount})
              </span>
            )}
          </div>

          {showResetButton && (
            <button
              type="button"
              className="bp5-button bp5-minimal bp5-small bp5-intent-primary"
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
