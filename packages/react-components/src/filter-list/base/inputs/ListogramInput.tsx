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
import React, { memo, useCallback, useMemo, useState } from "react";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { filterValuesBySearch } from "../../utils/filterValues.js";
import styles from "./ListogramInput.module.css";
import { ListogramSkeleton } from "./ListogramSkeleton.js";
import sharedStyles from "./shared.module.css";
import { useStableData } from "./useStableData.js";

export type ListogramDisplayMode = "full" | "count" | "minimal";

interface ListogramInputProps {
  values: PropertyAggregationValue[];
  maxCount: number;
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  colorMap?: Record<string, string>;
  displayMode?: ListogramDisplayMode;
  className?: string;
  style?: React.CSSProperties;
  maxVisibleItems?: number;
  searchQuery?: string;
}

function ListogramInputInner({
  values,
  maxCount,
  isLoading,
  error,
  selectedValues,
  onChange,
  colorMap,
  displayMode = "full",
  className,
  style,
  maxVisibleItems,
  searchQuery,
}: ListogramInputProps): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  const stableValues = useStableData(values, isLoading);

  const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const toggleValue = useCallback(
    (value: string) => {
      if (selectedSet.has(value)) {
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    },
    [selectedValues, selectedSet, onChange],
  );

  const filteredValues = useMemo(() => {
    if (searchQuery) {
      return filterValuesBySearch(stableValues, searchQuery, (v) => v.value);
    }
    return stableValues;
  }, [stableValues, searchQuery]);

  const displayValues = useMemo(() => {
    if (isExpanded || !maxVisibleItems) return filteredValues;
    return filteredValues.slice(0, maxVisibleItems);
  }, [filteredValues, maxVisibleItems, isExpanded]);

  const hasMore = maxVisibleItems != null
    && filteredValues.length > maxVisibleItems;

  return (
    <div
      className={classnames(styles.listogram, className)}
      style={style}
      data-loading={isLoading && filteredValues.length > 0}
    >
      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading values: {error.message}
        </div>
      )}

      {!error && filteredValues.length === 0 && isLoading && (
        <ListogramSkeleton />
      )}
      {!error && filteredValues.length === 0 && !isLoading && (
        <div className={sharedStyles.emptyMessage}>
          No values available
        </div>
      )}

      {filteredValues.length > 0 && (
        <div className={styles.container}>
          {displayValues.map(({ value, count }) => {
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const perRowColor = colorMap?.[value];

            return (
              <Button
                key={value}
                className={styles.row}
                onClick={() => toggleValue(value)}
                aria-pressed={selectedSet.has(value)}
                style={perRowColor || percentage > 0
                  ? {
                    "--osdk-filter-listogram-bar-fill-scale": percentage / 100,
                    ...(perRowColor
                      ? {
                        "--osdk-filter-listogram-row-bar-color": perRowColor,
                      }
                      : undefined),
                  } as React.CSSProperties
                  : undefined}
              >
                <span className={styles.label}>{value}</span>
                {displayMode === "full" && (
                  <span className={styles.bar}>
                    <span className={styles.barFill} />
                  </span>
                )}
                {displayMode !== "minimal" && (
                  <span className={styles.count}>
                    {count.toLocaleString()}
                  </span>
                )}
              </Button>
            );
          })}

          {hasMore && !isExpanded && (
            <Button
              type="button"
              className={styles.row}
              onClick={() => setIsExpanded(true)}
            >
              View all ({filteredValues.length})
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export const ListogramInput = memo(
  ListogramInputInner,
) as typeof ListogramInputInner;
