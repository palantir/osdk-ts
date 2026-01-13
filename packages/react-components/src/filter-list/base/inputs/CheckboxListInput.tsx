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
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

interface CheckboxListInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  objectSet?: ObjectSet<Q>;
  className?: string;
  style?: React.CSSProperties;
}

function CheckboxListInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  objectSet,
  className,
  style,
}: CheckboxListInputProps<Q, K>): React.ReactElement {
  const aggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $groupBy: { [propertyKey as string]: "exact" as const },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const aggOptions = {
    aggregate: aggregateOptions,
    ...(objectSet && { objectSet }),
  };
  const { data: countData, isLoading, error } = useOsdkAggregation(objectType, aggOptions);

  const values = useMemo(() => {
    if (!countData) {
      return [] as string[];
    }
    const extractedValues: string[] = [];
    const dataArray = countData as Iterable<{
      $group: Record<string, unknown>;
      $count?: number;
    }>;
    for (const item of dataArray) {
      const rawValue = item.$group[propertyKey as string];
      const value = rawValue != null ? String(rawValue) : "";
      if (value) {
        extractedValues.push(value);
      }
    }
    extractedValues.sort((a, b) => a.localeCompare(b));
    return extractedValues;
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

  const rootClassName = className
    ? `filter-input--checkbox-list ${className}`
    : "filter-input--checkbox-list";

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
        <>
          {values.length > 1 && (
            <div className="filter-input--checkbox-list-select-all">
              <label className="bp6-control bp6-checkbox">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={selectAllCheckboxRef}
                  onChange={toggleAll}
                  aria-label={`Select all ${propertyKey} values`}
                />
                <span className="bp6-control-indicator" />
                Select All
              </label>
            </div>
          )}

          {values.map((value) => {
            const isSelected = selectedValues.includes(value);

            return (
              <div
                key={value}
                className="filter-input__checkbox-row"
                data-selected={isSelected}
              >
                <label className="bp6-control bp6-checkbox">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleValue(value)}
                  />
                  <span className="bp6-control-indicator" />
                  <span className="filter-input__value-text">
                    {value}
                  </span>
                </label>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export const CheckboxListInput = memo(
  CheckboxListInputInner,
) as typeof CheckboxListInputInner;
