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
  WhereClause,
} from "@osdk/api";
import React, { memo, useCallback } from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import type { SingleSelectInputClassNames } from "../../types/ClassNameOverrides.js";

interface SingleSelectInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValue: string | undefined;
  onChange: (value: string | undefined) => void;
  whereClause?: WhereClause<Q>;
  classNames?: SingleSelectInputClassNames;
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
  whereClause,
  classNames,
  placeholder = "Select a value...",
  showClearButton = true,
  showCounts = false,
}: SingleSelectInputProps<Q, K>): React.ReactElement {
  const { data: values, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { whereClause },
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

  return (
    <div className={classNames?.root} data-loading={isLoading}>
      {isLoading && (
        <div className={classNames?.loadingMessage}>
          Loading options...
        </div>
      )}

      {error && (
        <div className={classNames?.errorMessage}>
          Error loading options: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className={classNames?.emptyMessage}>
          No options available
        </div>
      )}

      {values.length > 0 && (
        <div className={classNames?.selectContainer}>
          <select
            className={classNames?.select}
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
              className={classNames?.clearButton}
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
