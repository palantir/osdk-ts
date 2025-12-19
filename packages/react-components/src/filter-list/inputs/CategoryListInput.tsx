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
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import type {
  FilterDataIndicator,
  FilterItemColor,
} from "../FilterDisplayTypes.js";
import { useDistinctValues } from "../hooks/useDistinctValues.js";

interface CategoryListInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  allowMultiple?: boolean;
  maxVisibleItems?: number;
  dataIndicator?: FilterDataIndicator;
  color?: FilterItemColor;
  valueColors?: Record<string, FilterItemColor>;
}

export function CategoryListInput<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  allowMultiple = false,
  maxVisibleItems,
  dataIndicator = "none",
  color,
  valueColors,
}: CategoryListInputProps<Q, K>): React.ReactElement {
  const { values, isLoading, error } = useDistinctValues(
    objectType,
    propertyKey,
  );

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

  const { data: countData } = useOsdkAggregation(objectType, {
    aggregate: aggregateOptions,
  });

  // AggregationsResults is dynamically typed based on AggregateOpts, so we cast
  // to a concrete iterable type for processing the results.
  const { valueCounts } = useMemo(() => {
    if (!showCounts || !countData) {
      return { valueCounts: new Map<string, number>() };
    }
    const counts = new Map<string, number>();
    const dataArray = countData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;
    for (const item of dataArray) {
      const value = String(item.$group[propertyKey as string] ?? "");
      const count = item.$count ?? 0;
      if (value) {
        counts.set(value, count);
      }
    }
    return { valueCounts: counts };
  }, [showCounts, countData, propertyKey]);

  const handleClick = useCallback(
    (value: string) => {
      const isSelected = selectedValues.includes(value);

      if (allowMultiple) {
        if (isSelected) {
          onChange(selectedValues.filter((v) => v !== value));
        } else {
          onChange([...selectedValues, value]);
        }
      } else {
        if (isSelected) {
          onChange([]);
        } else {
          onChange([value]);
        }
      }
    },
    [selectedValues, onChange, allowMultiple],
  );

  const displayValues = maxVisibleItems
    ? values.slice(0, maxVisibleItems)
    : values;
  const hasMore = maxVisibleItems && values.length > maxVisibleItems;

  return (
    <div className="filter-input--category-list">
      {isLoading && (
        <div className="bp5-text-muted bp5-text-small">Loading values...</div>
      )}

      {error && (
        <div className="bp5-text-small bp5-intent-danger">
          Error loading values: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className="bp5-text-muted bp5-text-small">No values available</div>
      )}

      {values.length > 0 && (
        <>
          {displayValues.map((value) => {
            const isSelected = selectedValues.includes(value);
            const itemColor = valueColors?.[value] ?? color;
            const count = valueCounts.get(value) ?? 0;

            return (
              <button
                key={value}
                type="button"
                className={classNames(
                  "filter-input__category-item",
                  "bp5-button",
                  "bp5-minimal",
                  isSelected && "filter-input__category-item--selected",
                  isSelected && "bp5-intent-primary",
                )}
                style={itemColor
                  ? ({
                    "--item-bg": itemColor.background,
                    "--item-text": itemColor.text,
                    "--item-border": itemColor.border,
                    "--item-histogram": itemColor.histogramBar,
                  } as React.CSSProperties)
                  : undefined}
                onClick={() => handleClick(value)}
                aria-pressed={isSelected}
              >
                {value}
                {showCounts && (
                  <span className="filter-input__count">
                    {count.toLocaleString()}
                  </span>
                )}
              </button>
            );
          })}
          {hasMore && (
            <div
              className={classNames(
                "filter-input__more",
                "bp5-text-muted",
                "bp5-text-small",
              )}
            >
              +{values.length - maxVisibleItems} more
            </div>
          )}
        </>
      )}
    </div>
  );
}
