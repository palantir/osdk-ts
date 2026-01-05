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
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import type {
  FilterDataIndicator,
  FilterItemColor,
} from "../FilterDisplayTypes.js";

interface CheckboxListInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  showSelectAll?: boolean;
  maxVisibleItems?: number;
  dataIndicator?: FilterDataIndicator;
  color?: FilterItemColor;
  valueColors?: Record<string, FilterItemColor>;
}

export function CheckboxListInput<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  showSelectAll = true,
  maxVisibleItems,
  dataIndicator = "none",
  color,
  valueColors,
}: CheckboxListInputProps<Q, K>): React.ReactElement {
  const showCounts = dataIndicator === "histogram" || dataIndicator === "count";

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
      const value = String(item.$group[propertyKey as string] ?? "");
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
      if (selectedValues.includes(value)) {
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    },
    [selectedValues, onChange],
  );

  const toggleAll = useCallback(() => {
    if (selectedValues.length === values.length) {
      onChange([]);
    } else {
      onChange([...values]);
    }
  }, [selectedValues, values, onChange]);

  const displayValues = maxVisibleItems
    ? values.slice(0, maxVisibleItems)
    : values;
  const hasMore = maxVisibleItems && values.length > maxVisibleItems;
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
    <div className="filter-input--checkbox-list">
      {isLoading && (
        <div className="bp6-text-muted bp6-text-small">Loading values...</div>
      )}

      {error && (
        <div className="bp6-text-small bp6-intent-danger">
          Error loading values: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className="bp6-text-muted bp6-text-small">No values available</div>
      )}

      {values.length > 0 && (
        <>
          {showSelectAll && values.length > 1 && (
            <div className="filter-input--checkbox-list-select-all">
              <label className="bp6-control bp6-checkbox">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={selectAllCheckboxRef}
                  onChange={toggleAll}
                />
                <span className="bp6-control-indicator" />
                Select All
              </label>
            </div>
          )}

          {displayValues.map((value) => {
            const count = valueCounts.get(value) ?? 0;
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const itemColor = valueColors?.[value] ?? color;

            return (
              <div
                key={value}
                className="filter-input__checkbox-row"
                style={itemColor
                  ? ({
                    "--item-bg": itemColor.background,
                    "--item-text": itemColor.text,
                    "--item-border": itemColor.border,
                    "--item-histogram": itemColor.histogramBar,
                  } as React.CSSProperties)
                  : undefined}
              >
                {dataIndicator === "histogram" && (
                  <div
                    className="filter-input__histogram-bar"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <label className="bp6-control bp6-checkbox filter-input__checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(value)}
                    onChange={() => toggleValue(value)}
                  />
                  <span className="bp6-control-indicator" />
                  <span className="filter-input__value-text">{value}</span>
                  {showCounts && (
                    <span className="filter-input__count">
                      {count.toLocaleString()}
                    </span>
                  )}
                </label>
              </div>
            );
          })}

          {hasMore && (
            <div className="bp6-text-muted bp6-text-small">
              +{values.length - (maxVisibleItems ?? 0)} more
            </div>
          )}
        </>
      )}
    </div>
  );
}
