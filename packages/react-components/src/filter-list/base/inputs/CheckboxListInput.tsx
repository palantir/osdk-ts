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
import React, { memo, useCallback, useMemo } from "react";
import { Checkbox } from "../../../base-components/checkbox/Checkbox.js";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import styles from "./CheckboxListInput.module.css";
import sharedStyles from "./shared.module.css";

interface CheckboxListInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  colorMap?: Record<string, string>;
  className?: string;
  style?: React.CSSProperties;
}

function CheckboxListInputInner({
  values,
  isLoading,
  error,
  selectedValues,
  onChange,
  colorMap,
  className,
  style,
}: CheckboxListInputProps): React.ReactElement {
  const displayValues = useMemo(
    () => values.map((item) => item.value),
    [values],
  );

  const selectedSet = useMemo(
    () => new Set(selectedValues),
    [selectedValues],
  );

  const toggleValue = useCallback(
    (value: string) => {
      if (selectedSet.has(value)) {
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
    },
    [selectedValues, selectedSet, onChange],
  );

  const allSelected = displayValues.length > 0
    && displayValues.every((v) => selectedSet.has(v));
  const someSelected = !allSelected && selectedValues.length > 0;

  const handleSelectAll = useCallback(
    () => {
      if (allSelected) {
        onChange([]);
      } else {
        onChange([...displayValues]);
      }
    },
    [allSelected, displayValues, onChange],
  );

  return (
    <div
      className={classnames(styles.checkboxList, className)}
      style={style}
      data-loading={isLoading}
    >
      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading values: {error.message}
        </div>
      )}

      {!error && displayValues.length === 0 && (
        <div className={sharedStyles.emptyMessage}>
          {isLoading ? "Loading values..." : "No values available"}
        </div>
      )}

      {displayValues.length > 0 && (
        <>
          {isLoading && (
            <div className={sharedStyles.loadingMessage}>
              Updating...
            </div>
          )}
          <div
            className={styles.checkboxRow}
            data-select-all
          >
            <label className={styles.checkboxLabel}>
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected}
                onCheckedChange={handleSelectAll}
              />
              <span className={styles.valueText}>Select all</span>
            </label>
          </div>
          {displayValues.map((value) => {
            const isSelected = selectedSet.has(value);
            const color = colorMap?.[value];

            return (
              <div
                key={value}
                className={styles.checkboxRow}
                data-selected={isSelected}
              >
                <label className={styles.checkboxLabel}>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleValue(value)}
                  />
                  {color && (
                    <span
                      className={styles.colorDot}
                      style={{ backgroundColor: color }}
                    />
                  )}
                  <span className={styles.valueText}>
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
