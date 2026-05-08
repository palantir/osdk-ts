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
import {
  filterValuesBySearch,
  isEmptyValue,
} from "../../utils/filterValues.js";
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

  // Aggregations may return both "" and null as separate rows; merge them
  // into a single "No value" placeholder at the position of the first match.
  const dedupedValues = useMemo(() => {
    const out: PropertyAggregationValue[] = [];
    let emptyCount = 0;
    let firstEmptyIndex = -1;
    for (const v of values) {
      if (v.value === "" || v.value == null) {
        if (firstEmptyIndex === -1) {
          firstEmptyIndex = out.length;
        }
        emptyCount += v.count;
      } else {
        out.push(v);
      }
    }
    if (firstEmptyIndex >= 0 && emptyCount > 0) {
      out.splice(firstEmptyIndex, 0, {
        value: "",
        count: emptyCount,
        isNull: true,
      });
    }
    return out;
  }, [values]);

  const stableValues = useStableData(dedupedValues, isLoading);

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
      return filterValuesBySearch(
        stableValues,
        searchQuery,
        (v) => renderValue?.(v.value) ?? v.value,
      );
    }
    return stableValues;
  }, [stableValues, searchQuery, renderValue]);

  const sortedValues = useMemo(() => {
    const selected = filteredValues.filter((v) => selectedSet.has(v.value));
    const unselected = filteredValues.filter((v) => !selectedSet.has(v.value));
    return [...selected, ...unselected];
  }, [filteredValues, selectedSet]);

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
          {displayValues.map(({ value, count }) => {
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const perRowColor = colorMap?.[value];
            const isEmpty = isEmptyValue(value);

            return (
              <Button
                key={value}
                className={styles.row}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => toggleValue(value)}
                aria-pressed={selectedSet.has(value)}
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
                    checked={selectedSet.has(value)}
                    // eslint-disable-next-line react/jsx-no-bind
                    onCheckedChange={() => toggleValue(value)}
                    isExcluding={isExcluding}
                  />
                </span>
                <span
                  className={styles.label}
                  data-excluding={(isExcluding && selectedSet.has(value))
                    || undefined}
                >
                  {isEmpty
                    ? <NoValueLabel className={styles.noValueLabel} />
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
