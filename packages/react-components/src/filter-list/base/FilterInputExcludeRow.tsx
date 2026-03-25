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
import React, { memo, useCallback } from "react";
import type { FilterState } from "../FilterListItemApi.js";
import { supportsExcluding } from "../utils/filterValues.js";
import { ExcludeDropdown } from "./ExcludeDropdown.js";
import styles from "./FilterListItem.module.css";

interface FilterInputExcludeRowProps {
  excludeRowOpen?: boolean;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  totalValueCount?: number;
  children: React.ReactNode;
}

function FilterInputExcludeRowInner({
  excludeRowOpen,
  filterState,
  onFilterStateChanged,
  totalValueCount,
  children,
}: FilterInputExcludeRowProps): React.ReactElement {
  const handleToggleExclude = useCallback(() => {
    if (filterState) {
      onFilterStateChanged({
        ...filterState,
        isExcluding: !filterState.isExcluding,
      });
    }
  }, [filterState, onFilterStateChanged]);

  const isExcluding = filterState?.isExcluding ?? false;
  const isOpen = excludeRowOpen ?? false;

  if (!supportsExcluding(filterState)) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        data-exclude-row
        className={classnames(styles.excludeRow, {
          [styles.excludeRowVisible]: isOpen,
        })}
      >
        <ExcludeDropdown
          isExcluding={isExcluding}
          onToggleExclude={handleToggleExclude}
        />
        {totalValueCount != null && totalValueCount > 0 && (
          <span
            className={styles.excludeCountLabel}
            title="Approximate count of unique values"
          >
            {totalValueCount.toLocaleString()} values
          </span>
        )}
      </div>
      {children}
    </>
  );
}

export const FilterInputExcludeRow: React.MemoExoticComponent<
  typeof FilterInputExcludeRowInner
> = memo(FilterInputExcludeRowInner);
