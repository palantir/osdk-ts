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
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";
import React, { memo, useCallback, useMemo, useState } from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";

interface ListogramInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  maxVisibleItems?: number;
  barColor?: string;
  selectedBarColor?: string;
}

function ListogramInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  className,
  style,
  maxVisibleItems,
  barColor,
  selectedBarColor,
}: ListogramInputProps<Q, K>): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: values, maxCount, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    {},
  );

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

  const displayValues = useMemo(() => {
    if (isExpanded || !maxVisibleItems) return values;
    return values.slice(0, maxVisibleItems);
  }, [values, maxVisibleItems, isExpanded]);

  const hasMore = maxVisibleItems != null && values.length > maxVisibleItems;

  const rootClassName = className
    ? `filter-input--listogram ${className}`
    : "filter-input--listogram";

  return (
    <div className={rootClassName} style={style} data-loading={isLoading}>
      {isLoading && (
        <div className="filter-input__loading-message">
          Loading values...
        </div>
      )}

      {error && (
        <div className="filter-input__error-message">
          Error loading values: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className="filter-input__empty-message">
          No values available
        </div>
      )}

      {values.length > 0 && (
        <div className="filter-input__listogram-container">
          {displayValues.map(({ value, count }) => {
            const isSelected = selectedValues.includes(value);
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const fillColor = isSelected
              ? (selectedBarColor ?? "var(--filter-listogram-selected-color, #137cbd)")
              : (barColor ?? "var(--filter-listogram-bar-color, #d9e1e8)");

            return (
              <button
                key={value}
                type="button"
                className={`filter-input__listogram-row ${
                  isSelected ? "filter-input__listogram-row--selected" : ""
                }`}
                onClick={() => toggleValue(value)}
                aria-pressed={isSelected}
                style={
                  {
                    "--bar-fill-color": fillColor,
                  } as React.CSSProperties
                }
              >
                <span className="filter-input__listogram-label">{value}</span>
                <span className="filter-input__listogram-bar">
                  <span
                    className="filter-input__listogram-bar-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </span>
                <span className="filter-input__count">
                  {count.toLocaleString()}
                </span>
              </button>
            );
          })}

          {hasMore && !isExpanded && (
            <button
              type="button"
              className="filter-input__listogram-row"
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
