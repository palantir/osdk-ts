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
import React, { memo, useCallback, useMemo, useState } from "react";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import styles from "./ListogramInput.module.css";
import sharedStyles from "./shared.module.css";

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
  barColor?: string;
  selectedBarColor?: string;
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
  barColor,
  selectedBarColor,
}: ListogramInputProps): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedSet = useMemo(
    () => new Set(selectedValues),
    [selectedValues],
  );

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

  const displayValues = useMemo(() => {
    if (isExpanded || !maxVisibleItems) return values;
    return values.slice(0, maxVisibleItems);
  }, [values, maxVisibleItems, isExpanded]);

  const hasMore = maxVisibleItems != null && values.length > maxVisibleItems;

  return (
    <div
      className={classnames(styles.listogram, className)}
      style={style}
      data-loading={isLoading}
    >
      {isLoading && (
        <div className={sharedStyles.loadingMessage}>
          Loading values...
        </div>
      )}

      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading values: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className={sharedStyles.emptyMessage}>
          No values available
        </div>
      )}

      {values.length > 0 && (
        <div className={styles.container}>
          {displayValues.map(({ value, count }) => {
            const isSelected = selectedSet.has(value);
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const perRowColor = colorMap?.[value];
            const fillColor = perRowColor
              ?? (isSelected
                ? (selectedBarColor
                  ?? "var(--osdk-filter-listogram-selected-color)")
                : (barColor ?? "var(--osdk-filter-listogram-bar-color)"));

            return (
              <button
                key={value}
                type="button"
                className={styles.row}
                onClick={() => toggleValue(value)}
                aria-pressed={isSelected}
                style={{
                  "--bar-fill-color": fillColor,
                } as React.CSSProperties}
              >
                <span className={styles.label}>{value}</span>
                {displayMode === "full" && (
                  <span className={styles.bar}>
                    <span
                      className={styles.barFill}
                      style={{ width: `${percentage}%` }}
                    />
                  </span>
                )}
                {displayMode !== "minimal" && (
                  <span className={styles.count}>
                    {count.toLocaleString()}
                  </span>
                )}
              </button>
            );
          })}

          {hasMore && !isExpanded && (
            <button
              type="button"
              className={styles.row}
              onClick={() => setIsExpanded(true)}
            >
              View all ({values.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export const ListogramInput = memo(
  ListogramInputInner,
) as typeof ListogramInputInner;
