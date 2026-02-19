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

import classnames from "classnames";
import React, { memo, useCallback } from "react";
import { Combobox } from "../../../base-components/combobox/Combobox.js";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import styles from "./MultiSelectInput.module.css";
import sharedStyles from "./shared.module.css";

interface MultiSelectInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  maxDisplayedTags?: number;
  showClearAll?: boolean;
  ariaLabel?: string;
}

function MultiSelectInputInner({
  values,
  isLoading,
  error,
  selectedValues,
  onChange,
  className,
  style,
  placeholder = "Select values...",
  maxDisplayedTags = 3,
  showClearAll = true,
  ariaLabel = "Search values",
}: MultiSelectInputProps): React.ReactElement {
  const handleValueChange = useCallback(
    (newValues: string[] | null) => {
      onChange(newValues ?? []);
    },
    [onChange],
  );

  const removeValue = useCallback(
    (value: string) => {
      onChange(selectedValues.filter((v) => v !== value));
    },
    [selectedValues, onChange],
  );

  const clearAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const displayedTags = selectedValues.slice(0, maxDisplayedTags);
  const remainingCount = selectedValues.length - maxDisplayedTags;

  return (
    <div
      className={classnames(styles.multiSelect, className)}
      style={style}
      data-loading={isLoading}
    >
      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading options: {error.message}
        </div>
      )}

      {!error && values.length === 0 && (
        <div className={sharedStyles.emptyMessage}>
          {isLoading ? "Loading options..." : "No options available"}
        </div>
      )}

      {values.length > 0 && (
        <Combobox.Root<string, true>
          multiple
          value={selectedValues}
          onValueChange={handleValueChange}
        >
          {isLoading && (
            <div className={sharedStyles.loadingMessage}>
              Updating...
            </div>
          )}

          {selectedValues.length > 0 && (
            <div className={sharedStyles.tagContainer}>
              {displayedTags.map((value) => (
                <span key={value} className={sharedStyles.tag}>
                  {value}
                  <button
                    type="button"
                    className={sharedStyles.tagRemove}
                    onClick={() =>
                      removeValue(value)}
                    aria-label={`Remove ${value}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              {remainingCount > 0 && (
                <span className={sharedStyles.tag}>
                  +{remainingCount} more
                </span>
              )}
            </div>
          )}

          <div className={styles.inputRow}>
            <Combobox.Input
              placeholder={selectedValues.length > 0
                ? `${selectedValues.length} selected`
                : placeholder}
              aria-label={ariaLabel}
            />
            {showClearAll && selectedValues.length > 0 && (
              <Combobox.Clear
                className={styles.clearButton}
                onClick={clearAll}
                aria-label="Clear all selections"
              />
            )}
          </div>

          <Combobox.Portal>
            <Combobox.Positioner>
              <Combobox.Popup>
                {values.length === 0
                  ? <Combobox.Empty>No options available</Combobox.Empty>
                  : values.map(({ value, count }) => (
                    <Combobox.Item key={value} value={value}>
                      <span>{value}</span>
                      <span className={styles.itemCount}>
                        ({count.toLocaleString()})
                      </span>
                    </Combobox.Item>
                  ))}
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>
      )}
    </div>
  );
}

export const MultiSelectInput = memo(
  MultiSelectInputInner,
) as typeof MultiSelectInputInner;
