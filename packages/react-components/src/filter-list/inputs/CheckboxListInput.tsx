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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import React, { useCallback } from "react";
import { useDistinctValues } from "../hooks/useDistinctValues.js";

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
}: CheckboxListInputProps<Q, K>): React.ReactElement {
  const { values, isLoading, error } = useDistinctValues(
    objectType,
    propertyKey,
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

  const toggleAll = useCallback(() => {
    if (selectedValues.length === values.length) {
      onChange([]);
    } else {
      onChange([...values]);
    }
  }, [selectedValues, values, onChange]);

  if (isLoading) {
    return (
      <div className="osdk-filter-input osdk-filter-input--loading">
        Loading values...
      </div>
    );
  }

  if (error) {
    return (
      <div className="osdk-filter-input osdk-filter-input--error">
        Error loading values: {error.message}
      </div>
    );
  }

  if (values.length === 0) {
    return (
      <div className="osdk-filter-input osdk-filter-input--empty">
        No values available
      </div>
    );
  }

  const displayValues = maxVisibleItems
    ? values.slice(0, maxVisibleItems)
    : values;
  const hasMore = maxVisibleItems && values.length > maxVisibleItems;
  const allSelected = selectedValues.length === values.length;
  const someSelected = selectedValues.length > 0
    && selectedValues.length < values.length;

  return (
    <div className="osdk-filter-input osdk-filter-input--checkbox-list">
      {showSelectAll && values.length > 1 && (
        <label className="osdk-filter-checkbox osdk-filter-checkbox--select-all">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(el) => {
              if (el) {
                el.indeterminate = someSelected;
              }
            }}
            onChange={toggleAll}
          />
          <span className="osdk-filter-checkbox__label">Select All</span>
        </label>
      )}

      {displayValues.map((value) => (
        <label key={value} className="osdk-filter-checkbox">
          <input
            type="checkbox"
            checked={selectedValues.includes(value)}
            onChange={() =>
              toggleValue(value)}
          />
          <span className="osdk-filter-checkbox__label">{value}</span>
        </label>
      ))}

      {hasMore && (
        <div className="osdk-filter-checkbox__more">
          +{values.length - maxVisibleItems} more
        </div>
      )}
    </div>
  );
}
