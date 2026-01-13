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
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import { filterValuesBySearch } from "../../utils/filterValues.js";

interface MultiSelectInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  objectSet?: ObjectSet<Q>;
  className?: string;
  style?: React.CSSProperties;
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
  objectSet,
  className,
  style,
  placeholder = "Select values...",
  maxDisplayedTags = 3,
  showSelectAll = true,
  showClearAll = true,
}: MultiSelectInputProps<Q, K>): React.ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const { data: values, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { objectSet },
  );

  const filteredValues = useMemo(
    () => filterValuesBySearch(values, searchValue, (v) => v.value),
    [values, searchValue],
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

  const rootClassName = className
    ? `filter-input--multi-select ${className}`
    : "filter-input--multi-select";

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
        <>
          <div className="filter-input__tag-container">
            {displayedTags.map((value) => (
              <span key={value} className="filter-input__tag">
                {value}
                <button
                  type="button"
                  className="filter-input__tag-remove"
                  onClick={() => removeValue(value)}
                  aria-label={`Remove ${value}`}
                >
                  ×
                </button>
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="filter-input__tag">
                +{remainingCount} more
              </span>
            )}
          </div>

          <div className="filter-input__input-container">
            <input
              type="text"
              className="filter-input__input"
              placeholder={
                selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : placeholder
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => {
                setTimeout(() => {
                  if (isMountedRef.current) {
                    setIsDropdownOpen(false);
                  }
                }, 150);
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
                className="filter-input__clear-all"
                onClick={clearAll}
                aria-label="Clear all selections"
              >
                ×
              </button>
            )}
          </div>

          {isDropdownOpen && (
            <div className="filter-input__dropdown">
              {showSelectAll && (
                <button
                  type="button"
                  className="filter-input__dropdown-item"
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
                    className={`filter-input__dropdown-item ${
                      isSelected ? "filter-input__dropdown-item--selected" : ""
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
