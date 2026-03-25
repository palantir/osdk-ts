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
import { filterValuesBySearch } from "../../utils/filterValues.js";
import styles from "./CheckboxListInput.module.css";
import { CheckboxListSkeleton } from "./CheckboxListSkeleton.js";
import sharedStyles from "./shared.module.css";
import { useStableData } from "./useStableData.js";

interface CheckboxListInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  colorMap?: Record<string, string>;
  searchQuery?: string;
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
  searchQuery,
  className,
  style,
}: CheckboxListInputProps): React.ReactElement {
  const stableValues = useStableData(values, isLoading);

  const selectedSet = useMemo(
    () => new Set(selectedValues),
    [selectedValues],
  );

  const displayValues = useMemo(
    () => {
      const allValues = stableValues.map((item) => item.value);
      const filtered = searchQuery
        ? filterValuesBySearch(allValues, searchQuery, (v) => v)
        : allValues;
      const selected = filtered.filter(v => selectedSet.has(v));
      const unselected = filtered.filter(v => !selectedSet.has(v));
      return [...selected, ...unselected];
    },
    [stableValues, searchQuery, selectedSet],
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

  return (
    <div
      className={classnames(styles.checkboxList, className)}
      style={style}
      data-loading={isLoading && displayValues.length > 0}
    >
      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading values: {error.message}
        </div>
      )}

      {!error && displayValues.length === 0 && isLoading && (
        <CheckboxListSkeleton />
      )}
      {!error && displayValues.length === 0 && !isLoading && (
        <div className={sharedStyles.emptyMessage}>
          No values available
        </div>
      )}

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
    </div>
  );
}

export const CheckboxListInput = memo(
  CheckboxListInputInner,
) as typeof CheckboxListInputInner;
