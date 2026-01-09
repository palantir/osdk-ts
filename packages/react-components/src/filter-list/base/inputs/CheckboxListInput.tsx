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

import type {
  AggregateOpts,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CheckboxListInputClassNames } from "../../types/ClassNameOverrides.js";
import type {
  FilterDataIndicator,
  FilterInteractionMode,
  FilterItemColor,
} from "../../types/FilterDisplayTypes.js";

interface CheckboxListInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  /**
   * WhereClause from other filters to chain aggregation queries.
   * When provided, the aggregation will respect other active filters.
   */
  whereClause?: WhereClause<Q>;
  showSelectAll?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  showSelectionCount?: boolean;
  showClearAll?: boolean;
  maxVisibleItems?: number;
  dataIndicator?: FilterDataIndicator;
  interactionMode?: FilterInteractionMode;
  color?: FilterItemColor;
  valueColors?: Record<string, FilterItemColor>;
  classNames?: CheckboxListInputClassNames;
}

function CheckboxListInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  whereClause,
  showSelectAll = true,
  showSearch = false,
  searchPlaceholder,
  showSelectionCount = false,
  showClearAll = false,
  maxVisibleItems,
  dataIndicator = "none",
  interactionMode = "checkbox",
  color,
  valueColors,
  classNames,
}: CheckboxListInputProps<Q, K>): React.ReactElement {
  const showCounts = dataIndicator === "histogram" || dataIndicator === "count";
  const isCategoryMode = interactionMode === "category";

  // AggregateOpts requires specific property keys from Q, but we're dynamically
  // using propertyKey. The cast is unavoidable for this dynamic filter pattern.
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: { [propertyKey as string]: "exact" as const },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const { data: countData, isLoading, error } = useOsdkAggregation(objectType, {
    where: whereClause,
    aggregate: aggregateOptions,
  });

  // Extract values and counts from aggregation results
  const { values, valueCounts, maxCount } = useMemo(() => {
    if (!countData) {
      return {
        values: [] as string[],
        valueCounts: new Map<string, number>(),
        maxCount: 0,
      };
    }
    const counts = new Map<string, number>();
    const extractedValues: string[] = [];
    let max = 0;
    // The aggregation result type varies by query structure. Since we're building
    // the query dynamically based on propertyKey, we cast to a known shape that
    // matches the $groupBy + $count aggregation pattern.
    const dataArray = countData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;
    for (const item of dataArray) {
      const rawValue = item.$group[propertyKey as string];
      const value = rawValue != null ? String(rawValue) : "";
      const count = item.$count ?? 0;
      if (value) {
        extractedValues.push(value);
        counts.set(value, count);
        max = Math.max(max, count);
      }
    }
    extractedValues.sort((a, b) => a.localeCompare(b));
    return { values: extractedValues, valueCounts: counts, maxCount: max };
  }, [countData, propertyKey]);

  const toggleValue = useCallback(
    (value: string) => {
      if (isCategoryMode) {
        // In category mode, clicking selects only that value (deselects others)
        // Clicking the same value again deselects it
        if (selectedValues.length === 1 && selectedValues[0] === value) {
          onChange([]);
        } else {
          onChange([value]);
        }
      } else {
        // In checkbox mode, toggle the value
        if (selectedValues.includes(value)) {
          onChange(selectedValues.filter((v) => v !== value));
        } else {
          onChange([...selectedValues, value]);
        }
      }
    },
    [selectedValues, onChange, isCategoryMode],
  );

  const toggleAll = useCallback(() => {
    if (selectedValues.length === values.length) {
      onChange([]);
    } else {
      onChange([...values]);
    }
  }, [selectedValues, values, onChange]);

  const clearAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredValues = useMemo(() => {
    if (!searchValue.trim()) return values;
    const lowerSearch = searchValue.toLowerCase();
    return values.filter((v) => v.toLowerCase().includes(lowerSearch));
  }, [values, searchValue]);

  const hasMore = maxVisibleItems != null
    && filteredValues.length > maxVisibleItems;
  const displayValues = isExpanded || !maxVisibleItems
    ? filteredValues
    : filteredValues.slice(0, maxVisibleItems);
  const allSelected = values.length > 0
    && selectedValues.length === values.length;
  const someSelected = selectedValues.length > 0
    && selectedValues.length < values.length;

  const selectAllCheckboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (selectAllCheckboxRef.current) {
      selectAllCheckboxRef.current.indeterminate = someSelected;
    }
  }, [someSelected]);

  return (
    <div className={classNames?.root} data-loading={isLoading}>
      {isLoading && (
        <div className={classNames?.loadingMessage}>
          Loading values...
        </div>
      )}

      {error && (
        <div className={classNames?.errorMessage}>
          Error loading values: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className={classNames?.emptyMessage}>
          No values available
        </div>
      )}

      {values.length > 0 && (
        <>
          {showSearch && (
            <div className={classNames?.searchContainer}>
              <input
                type="text"
                className={classNames?.searchInput}
                placeholder={searchPlaceholder ?? "Search..."}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                aria-label={`Search ${propertyKey} values`}
              />
              {searchValue && (
                <button
                  type="button"
                  className={classNames?.searchClearButton}
                  onClick={() => setSearchValue("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {(showSelectionCount || showClearAll) && (
            <div className={classNames?.selectionInfo}>
              {showSelectionCount && (
                <span className={classNames?.selectionCount}>
                  Keeping {selectedValues.length} of {values.length} values
                </span>
              )}
              {showClearAll && selectedValues.length > 0 && (
                <button
                  type="button"
                  className={classNames?.clearAllButton}
                  onClick={clearAll}
                >
                  Clear all
                </button>
              )}
            </div>
          )}

          {showSelectAll && values.length > 1 && !isCategoryMode && (
            <div className={classNames?.selectAllContainer}>
              <label className={classNames?.selectAllCheckbox}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={selectAllCheckboxRef}
                  onChange={toggleAll}
                  aria-label={`Select all ${propertyKey} values`}
                />
                <span className={classNames?.checkboxIndicator} />
                <span className={classNames?.selectAllLabel}>
                  Select All
                </span>
              </label>
            </div>
          )}

          {displayValues.map((value) => {
            const count = valueCounts.get(value) ?? 0;
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const itemColor = valueColors?.[value] ?? color;
            const isSelected = selectedValues.includes(value);

            return (
              <div
                key={value}
                className={classNames?.checkboxRow}
                data-selected={isSelected}
                data-interaction-mode={interactionMode}
                style={itemColor
                  ? ({
                    "--item-bg": itemColor.background,
                    "--item-text": itemColor.text,
                    "--item-border": itemColor.border,
                    "--item-histogram": itemColor.histogramBar,
                  } as React.CSSProperties)
                  : undefined}
              >
                {isCategoryMode ? (
                  <button
                    type="button"
                    className={classNames?.checkbox}
                    onClick={() => toggleValue(value)}
                    aria-pressed={isSelected}
                  >
                    <span className={classNames?.valueText}>
                      {value}
                    </span>
                  </button>
                ) : (
                  <label className={classNames?.checkbox}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleValue(value)}
                    />
                    <span
                      className={classNames?.checkboxIndicator}
                    />
                    <span className={classNames?.valueText}>
                      {value}
                    </span>
                  </label>
                )}
                {showCounts && (
                  <span className={classNames?.count}>
                    {count.toLocaleString()}
                  </span>
                )}
                {dataIndicator === "histogram" && (
                  <span
                    className={classNames?.histogramBar}
                    style={{ width: `${percentage}%` }}
                  />
                )}
              </div>
            );
          })}

          {hasMore && !isExpanded && (
            <button
              type="button"
              className={classNames?.moreIndicator}
              onClick={() => setIsExpanded(true)}
            >
              View all ({filteredValues.length})
            </button>
          )}
        </>
      )}
    </div>
  );
}

export const CheckboxListInput = memo(
  CheckboxListInputInner,
) as typeof CheckboxListInputInner;
