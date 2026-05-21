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

import React, { memo } from "react";
import type { FilterState } from "../FilterListItemApi.js";
import { getSelectedCount } from "../utils/filterValues.js";
import styles from "./FilterListItem.module.css";

interface FilterInputExcludeRowProps {
  filterState: FilterState | undefined;
  totalValueCount?: number;
  children: React.ReactNode;
}

/**
 * Renders the "N of M values" count summary above the filter input.
 * Keep / Exclude, Clear all, and Remove now live in the item-level overflow
 * (`...`) menu rendered by `FilterListItem`; this wrapper preserves the count
 * badge that previously rendered alongside them.
 */
function FilterInputExcludeRowInner({
  filterState,
  totalValueCount,
  children,
}: FilterInputExcludeRowProps): React.ReactElement {
  const selectedCount = getSelectedCount(filterState);
  const showCount = totalValueCount != null && totalValueCount > 0;

  return (
    <>
      {showCount && (
        <div className={styles.valueCountRow}>
          <span
            className={styles.valueCountLabel}
            title="Approximate count of unique values"
          >
            {selectedCount.toLocaleString()} of{" "}
            {totalValueCount.toLocaleString()} values
          </span>
        </div>
      )}
      {children}
    </>
  );
}

export const FilterInputExcludeRow: React.MemoExoticComponent<
  typeof FilterInputExcludeRowInner
> = memo(FilterInputExcludeRowInner);
