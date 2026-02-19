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

import classnames from "classnames";
import React, { memo, type ReactNode, useCallback } from "react";
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";
import styles from "./FilterListHeader.module.css";

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
    <div className={classnames(styles.header, classNames?.header)}>
      {showCollapseButton && (
        <button
          type="button"
          className={classnames(
            styles.collapseButton,
            classNames?.collapseButton,
          )}
          onClick={handleCollapseClick}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand filters" : "Collapse filters"}
        >
          <span
            className={classnames(
              styles.collapseIcon,
              classNames?.collapseIcon,
            )}
            data-collapsed={collapsed}
          />
        </button>
      )}

      <div
        className={styles.headerContentWrapper}
        data-collapsed={collapsed}
      >
        <div className={styles.headerContentInner}>
          <div
            className={classnames(
              styles.titleContainer,
              classNames?.titleContainer,
            )}
          >
            {titleIcon && (
              <span
                className={classnames(styles.titleIcon, classNames?.titleIcon)}
              >
                {titleIcon}
              </span>
            )}
            {title && (
              <span className={classnames(styles.title, classNames?.title)}>
                {title}
              </span>
            )}
            {showActiveFilterCount && activeFilterCount > 0 && (
              <span
                className={classnames(
                  styles.activeCount,
                  classNames?.activeCount,
                )}
              >
                ({activeFilterCount})
              </span>
            )}
          </div>

          {showResetButton && (
            <button
              type="button"
              className={classnames(
                styles.resetButton,
                classNames?.resetButton,
              )}
              onClick={onReset}
              disabled={activeFilterCount === 0}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const FilterListHeader: React.MemoExoticComponent<
  typeof FilterListHeaderInner
> = memo(FilterListHeaderInner);
