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
import React, { memo, useCallback, useMemo, useState } from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import type { MultiSelectInputClassNames } from "../../types/ClassNameOverrides.js";

interface MultiSelectInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  whereClause?: WhereClause<Q>;
  classNames?: MultiSelectInputClassNames;
  placeholder?: string;
  maxDisplayedTags?: number;
  showSelectAll?: boolean;
  showClearAll?: boolean;
}

function MultiSelectInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  whereClause,
  classNames,
  placeholder = "Select values...",
  maxDisplayedTags = 3,
  showSelectAll = true,
  showClearAll = true,
}: MultiSelectInputProps<Q, K>): React.ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data: values, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { whereClause },
  );

  const filteredValues = useMemo(() => {
    if (!searchValue.trim()) return values;
    const lowerSearch = searchValue.toLowerCase();
    return values.filter((v) => v.value.toLowerCase().includes(lowerSearch));
  }, [values, searchValue]);

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

  const removeValue = useCallback(
    (value: string) => {
      onChange(selectedValues.filter((v) => v !== value));
    },
    [selectedValues, onChange],
  );

  const selectAll = useCallback(() => {
    onChange(values.map((v) => v.value));
  }, [values, onChange]);

  const clearAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const displayedTags = selectedValues.slice(0, maxDisplayedTags);
  const remainingCount = selectedValues.length - maxDisplayedTags;

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
        <>
          <div className={classNames?.tagContainer}>
            {displayedTags.map((value) => (
              <span key={value} className={classNames?.tag}>
                {value}
                <button
                  type="button"
                  className={classNames?.tagRemoveButton}
                  onClick={() => removeValue(value)}
                  aria-label={`Remove ${value}`}
                >
                  ×
                </button>
              </span>
            ))}
            {remainingCount > 0 && (
              <span className={classNames?.tag}>
                +{remainingCount} more
              </span>
            )}
          </div>

          <div className={classNames?.inputContainer}>
            <input
              type="text"
              className={classNames?.input}
              placeholder={
                selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : placeholder
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => {
                // Delay to allow click on dropdown item
                setTimeout(() => setIsDropdownOpen(false), 150);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsDropdownOpen(false);
                }
              }}
              aria-label={`Search ${propertyKey} values`}
            />
            {showClearAll && selectedValues.length > 0 && (
              <button
                type="button"
                className={classNames?.clearAllButton}
                onClick={clearAll}
                aria-label="Clear all selections"
              >
                ×
              </button>
            )}
          </div>

          {isDropdownOpen && (
            <div className={classNames?.dropdown}>
              {showSelectAll && (
                <button
                  type="button"
                  className={classNames?.dropdownItem}
                  onClick={selectAll}
                >
                  Select all ({values.length})
                </button>
              )}
              {filteredValues.map(({ value, count }) => {
                const isSelected = selectedValues.includes(value);
                return (
                  <button
                    key={value}
                    type="button"
                    className={`${classNames?.dropdownItem ?? ""} ${
                      isSelected ? classNames?.dropdownItemSelected ?? "" : ""
                    }`}
                    onClick={() => toggleValue(value)}
                  >
                    {value} ({count.toLocaleString()})
                  </button>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export const MultiSelectInput = memo(
  MultiSelectInputInner,
) as typeof MultiSelectInputInner;
