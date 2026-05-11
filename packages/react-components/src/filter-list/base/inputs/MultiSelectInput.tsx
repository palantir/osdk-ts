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
import { Combobox } from "../../../base-components/combobox/Combobox.js";
import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { displayLiteralValue } from "../../utils/filterValues.js";
import styles from "./MultiSelectInput.module.css";
import { NullValueWrapper } from "./NullValueWrapper.js";
import sharedStyles from "./shared.module.css";
import { usePartitionedAggregationRows } from "./usePartitionedAggregationRows.js";

interface MultiSelectInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  includeNull?: boolean;
  onIncludeNullChange?: (include: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  showCounts?: boolean;
  ariaLabel?: string;
  renderValue?: (value: string) => string;
}

function MultiSelectInputInner({
  values,
  isLoading,
  error,
  selectedValues,
  onChange,
  includeNull,
  onIncludeNullChange,
  className,
  style,
  placeholder = "Select values...",
  showCounts = true,
  ariaLabel = "Search values",
  renderValue,
}: MultiSelectInputProps): React.ReactElement {
  const handleValueChange = useCallback(
    (newValues: string[] | null) => {
      onChange(newValues ?? []);
    },
    [onChange],
  );

  const { dataRows, nullRow } = usePartitionedAggregationRows(values);

  const items = useMemo(
    () => dataRows.map(({ value }) => value),
    [dataRows],
  );

  const countByValue = useMemo(
    () => new Map(dataRows.map(({ value, count }) => [value, count])),
    [dataRows],
  );

  const comboboxFilter = useMemo(
    () =>
      renderValue
        ? (itemValue: string, query: string) =>
          renderValue(itemValue).toLowerCase().includes(query.toLowerCase())
        : undefined,
    [renderValue],
  );

  const renderItem = useCallback(
    (value: string) => (
      <Combobox.Item key={value} value={value}>
        <Combobox.ItemIndicator />
        <span className={styles.itemLabel}>
          {renderValue ? renderValue(value) : displayLiteralValue(value)}
        </span>
        {showCounts && (
          <span className={styles.itemCount}>
            ({(countByValue.get(value) ?? 0).toLocaleString()})
          </span>
        )}
      </Combobox.Item>
    ),
    [countByValue, showCounts, renderValue],
  );

  const renderChips = useCallback(
    (selectedItems: string[]) => (
      <>
        {selectedItems.map((value) => {
          const display = renderValue
            ? renderValue(value)
            : displayLiteralValue(value);
          return (
            <Combobox.Chip key={value} aria-label={display}>
              {display}
              <Combobox.ChipRemove />
            </Combobox.Chip>
          );
        })}
        <Combobox.Input
          placeholder={selectedItems.length > 0 ? "" : placeholder}
          aria-label={ariaLabel}
        />
      </>
    ),
    [placeholder, ariaLabel, renderValue],
  );

  const combobox = (
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

      {!error && dataRows.length === 0 && nullRow === undefined && (
        <div className={sharedStyles.emptyMessage}>
          {isLoading ? "Loading options..." : "No options available"}
        </div>
      )}

      {(dataRows.length > 0 || isLoading) && (
        <Combobox.Root<string, true>
          multiple={true}
          value={selectedValues}
          onValueChange={handleValueChange}
          items={items}
          filter={comboboxFilter}
        >
          {isLoading && (
            <div className={sharedStyles.loadingMessage}>
              Updating...
            </div>
          )}

          <Combobox.Chips>
            <Combobox.Value>{renderChips}</Combobox.Value>
          </Combobox.Chips>

          <Combobox.Portal>
            <Combobox.Positioner>
              <Combobox.Popup>
                <Combobox.Empty>No matching options</Combobox.Empty>
                <Combobox.List>{renderItem}</Combobox.List>
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>
      )}
    </div>
  );

  return nullRow !== undefined && onIncludeNullChange !== undefined
    ? (
      <NullValueWrapper
        nullCount={nullRow.count}
        isLoading={isLoading}
        error={error}
        includeNull={includeNull}
        onIncludeNullChange={onIncludeNullChange}
        showNullCount={showCounts}
      >
        {combobox}
      </NullValueWrapper>
    )
    : combobox;
}

export const MultiSelectInput = memo(
  MultiSelectInputInner,
) as typeof MultiSelectInputInner;
