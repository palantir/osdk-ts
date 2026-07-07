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
import { filterValuesBySearch, isNoValue } from "../../utils/filterValues.js";
import { formatCompactCount } from "./formatCompactCount.js";
import { ListogramSkeleton } from "./ListogramSkeleton.js";
import { OptionLabel } from "./OptionLabel.js";
import { useStableData } from "./useStableData.js";

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
  showCount?: boolean;
  isExcluding?: boolean;
  showFilteredOutValues?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxVisibleItems?: number;
  searchQuery?: string;
  renderValue?: (value: string) => React.ReactNode;
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
  showCount = true,
  isExcluding,
  showFilteredOutValues = true,
  className,
  style,
  maxVisibleItems,
  searchQuery,
  renderValue,
}: ListogramInputProps): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  // Below-fold values the user has unchecked in the collapsed view. They stay
  // pinned at the tail so the row never vanishes under the cursor on toggle and
  // can be re-checked in place.
  const [pinnedBelowFold, setPinnedBelowFold] = useState<ReadonlySet<string>>(
    () => new Set()
  );

  const stableValues = useStableData(values, isLoading);

  const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const filteredValues = useMemo(() => {
    if (searchQuery) {
      return filterValuesBySearch(stableValues, searchQuery, (v) => {
        const rendered = renderValue?.(v.value);
        return typeof rendered === "string" ? rendered : v.value;
      });
    }
    return stableValues;
  }, [stableValues, searchQuery, renderValue]);

  const toggleValue = useCallback(
    (value: string) => {
      if (selectedSet.has(value)) {
        // Unchecking. Only remember the value if it sits below the collapsed
        // fold right now, so it keeps its tail slot instead of vanishing under
        // the cursor. Head rows never vanish on toggle, so surfacing them would
        // only create stale tail pins if their count later drops them below the
        // fold.
        const isBelowFold =
          !isExpanded &&
          maxVisibleItems != null &&
          filteredValues.findIndex((v) => v.value === value) >= maxVisibleItems;
        if (isBelowFold) {
          setPinnedBelowFold((prev) => {
            if (prev.has(value)) return prev;
            const next = new Set(prev);
            next.add(value);
            return next;
          });
        }
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    },
    [
      selectedValues,
      selectedSet,
      onChange,
      isExpanded,
      maxVisibleItems,
      filteredValues,
    ]
  );

  // Render in natural count/value order regardless of selection — toggling a
  // checkbox must never reorder rows. In the collapsed view we still keep
  // below-fold values visible by appending them at the tail (matching Foundry
  // Workshop's listogram), without hoisting them or displacing the head. A
  // below-fold value earns a tail slot while it is selected or once it has been
  // pinned (see toggleValue).
  const displayValues = useMemo(() => {
    if (isExpanded || maxVisibleItems == null) return filteredValues;
    const head = filteredValues.slice(0, maxVisibleItems);
    const belowFoldVisible = filteredValues
      .slice(maxVisibleItems)
      .filter(
        ({ value }) => selectedSet.has(value) || pinnedBelowFold.has(value)
      );
    return [...head, ...belowFoldVisible];
  }, [
    filteredValues,
    maxVisibleItems,
    isExpanded,
    selectedSet,
    pinnedBelowFold,
  ]);

  const hasMore =
    maxVisibleItems != null && filteredValues.length > maxVisibleItems;

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
          {displayValues.map(({ value, count }) => {
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const perRowColor = colorMap?.[value];
            const isEmpty = isNoValue(value) || value === "";

            const isFilteredOut =
              showFilteredOutValues && count === 0 && !selectedSet.has(value);
            return (
              <Button
                key={value}
                className={styles.row}
                data-empty={isEmpty || undefined}
                data-filtered-out={isFilteredOut || undefined}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => toggleValue(value)}
                aria-pressed={selectedSet.has(value)}
                style={
                  perRowColor || percentage > 0
                    ? ({
                        "--osdk-filter-listogram-bar-fill-scale":
                          percentage / 100,
                        ...(perRowColor
                          ? {
                              "--osdk-filter-listogram-row-bar-color":
                                perRowColor,
                            }
                          : undefined),
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <span
                  className={styles.checkbox}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={selectedSet.has(value)}
                    // eslint-disable-next-line react/jsx-no-bind
                    onCheckedChange={() => toggleValue(value)}
                    isExcluding={isExcluding}
                  />
                </span>
                <span
                  className={styles.label}
                  data-excluding={
                    (isExcluding && selectedSet.has(value)) || undefined
                  }
                >
                  <OptionLabel
                    value={value}
                    renderValue={renderValue}
                    className={styles.noValueLabel}
                  />
                </span>
                {showCount && displayMode !== "minimal" && (
                  <span className={styles.count} title={count.toLocaleString()}>
                    {formatCompactCount(count)}
                  </span>
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
              View all ({filteredValues.length})
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export const ListogramInput = memo(
  ListogramInputInner
) as typeof ListogramInputInner;
