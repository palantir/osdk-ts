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
import { Checkbox } from "../../../base-components/checkbox/Checkbox.js";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { filterValuesBySearch, isNullRow } from "../../utils/filterValues.js";
import { EmptyStringLabel } from "./EmptyStringLabel.js";
import styles from "./ListogramInput.module.css";
import { ListogramSkeleton } from "./ListogramSkeleton.js";
import { NoValueLabel } from "./NoValueLabel.js";
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
  /**
   * Whether the SQL-null row is currently selected. Bound to the filter
   * state's `includeNull` field. When `onIncludeNullChange` is omitted, the
   * null row is rendered but acts as a no-op control.
   */
  includeNull?: boolean;
  onIncludeNullChange?: (include: boolean) => void;
  colorMap?: Record<string, string>;
  displayMode?: ListogramDisplayMode;
  showCount?: boolean;
  isExcluding?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxVisibleItems?: number;
  searchQuery?: string;
  renderValue?: (value: string) => string;
}

function ListogramInputInner({
  values,
  maxCount,
  isLoading,
  error,
  selectedValues,
  onChange,
  includeNull,
  onIncludeNullChange,
  colorMap,
  displayMode = "full",
  showCount = true,
  isExcluding,
  className,
  style,
  maxVisibleItems,
  searchQuery,
  renderValue,
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

  const toggleNull = useCallback(() => {
    onIncludeNullChange?.(!includeNull);
  }, [includeNull, onIncludeNullChange]);

  const isRowSelected = useCallback(
    (row: PropertyAggregationValue): boolean =>
      isNullRow(row) ? includeNull === true : selectedSet.has(row.value),
    [includeNull, selectedSet],
  );

  const filteredValues = useMemo(() => {
    if (searchQuery) {
      return filterValuesBySearch(
        stableValues,
        searchQuery,
        (v) => isNullRow(v) ? "" : (renderValue?.(v.value) ?? v.value),
      );
    }
    return stableValues;
  }, [stableValues, searchQuery, renderValue]);

  const sortedValues = useMemo(() => {
    const selected = filteredValues.filter((v) => isRowSelected(v));
    const unselected = filteredValues.filter((v) => !isRowSelected(v));
    return [...selected, ...unselected];
  }, [filteredValues, isRowSelected]);

  const displayValues = useMemo(() => {
    if (isExpanded || !maxVisibleItems) return sortedValues;
    return sortedValues.slice(0, maxVisibleItems);
  }, [sortedValues, maxVisibleItems, isExpanded]);

  const hasMore = maxVisibleItems != null
    && sortedValues.length > maxVisibleItems;

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
        <div className={sharedStyles.emptyMessage}>No values available</div>
      )}

      {filteredValues.length > 0 && (
        <div className={styles.container}>
          {displayValues.map((row) => {
            const { value, count } = row;
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const isNull = isNullRow(row);
            const perRowColor = isNull ? undefined : colorMap?.[value];
            const rowSelected = isRowSelected(row);
            const rowKey = isNull ? "__osdk_null__" : `v:${value}`;
            const handleRowToggle = isNull
              ? toggleNull
              : () => toggleValue(value);

            return (
              <Button
                key={rowKey}
                className={styles.row}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={handleRowToggle}
                aria-pressed={rowSelected}
                style={perRowColor || percentage > 0
                  ? ({
                    "--osdk-filter-listogram-bar-fill-scale": percentage / 100,
                    ...(perRowColor
                      ? {
                        "--osdk-filter-listogram-row-bar-color": perRowColor,
                      }
                      : undefined),
                  } as React.CSSProperties)
                  : undefined}
              >
                <span
                  className={styles.checkbox}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={rowSelected}
                    onCheckedChange={handleRowToggle}
                    isExcluding={isExcluding}
                  />
                </span>
                <span
                  className={styles.label}
                  data-excluding={(isExcluding && rowSelected) || undefined}
                >
                  {isNull
                    ? <NoValueLabel className={styles.noValueLabel} />
                    : value === ""
                    ? <EmptyStringLabel className={styles.noValueLabel} />
                    : (renderValue?.(value) ?? value)}
                </span>
                {showCount && displayMode !== "minimal" && (
                  <span className={styles.count}>{count.toLocaleString()}</span>
                )}
                {displayMode === "full" && (
                  <span className={styles.bar}>
                    <span className={styles.barFill} />
                  </span>
                )}
              </Button>
            );
          })}

          {hasMore && !isExpanded && (
            <Button
              type="button"
              className={styles.viewAllButton}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setIsExpanded(true)}
            >
              View all ({sortedValues.length})
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
