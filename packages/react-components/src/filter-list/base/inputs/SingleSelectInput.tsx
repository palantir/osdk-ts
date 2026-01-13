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
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";
import React, { memo, useCallback } from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";

interface SingleSelectInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValue: string | undefined;
  onChange: (value: string | undefined) => void;
  objectSet?: ObjectSet<Q>;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  showClearButton?: boolean;
  showCounts?: boolean;
}

function SingleSelectInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValue,
  onChange,
  objectSet,
  className,
  style,
  placeholder = "Select a value...",
  showClearButton = true,
  showCounts = false,
}: SingleSelectInputProps<Q, K>): React.ReactElement {
  const { data: values, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { objectSet },
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      onChange(value === "" ? undefined : value);
    },
    [onChange],
  );

  const handleClear = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  const rootClassName = className
    ? `filter-input--single-select ${className}`
    : "filter-input--single-select";

  return (
    <div className={rootClassName} style={style} data-loading={isLoading}>
      {isLoading && (
        <div className="filter-input__loading-message">
          Loading options...
        </div>
      )}

      {error && (
        <div className="filter-input__error-message">
          Error loading options: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className="filter-input__empty-message">
          No options available
        </div>
      )}

      {values.length > 0 && (
        <div className="filter-input__select-container">
          <select
            className="filter-input__select"
            value={selectedValue ?? ""}
            onChange={handleChange}
            aria-label={`Select ${propertyKey}`}
          >
            <option value="">{placeholder}</option>
            {values.map(({ value, count }) => (
              <option key={value} value={value}>
                {showCounts ? `${value} (${count.toLocaleString()})` : value}
              </option>
            ))}
          </select>
          {showClearButton && selectedValue !== undefined && (
            <button
              type="button"
              className="filter-input__clear"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              ×
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export const SingleSelectInput = memo(
  SingleSelectInputInner,
) as typeof SingleSelectInputInner;
