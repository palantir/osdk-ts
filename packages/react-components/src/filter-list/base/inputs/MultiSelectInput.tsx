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
  ariaLabel?: string;
  renderValue?: (value: string) => string;
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
  ariaLabel = "Search values",
  renderValue,
}: MultiSelectInputProps): React.ReactElement {
  const handleValueChange = useCallback(
    (newValues: string[] | null) => {
      onChange(newValues ?? []);
    },
    [onChange],
  );

  const items = useMemo(
    () => values.map(({ value }) => value),
    [values],
  );

  const countByValue = useMemo(
    () => new Map(values.map(({ value, count }) => [value, count])),
    [values],
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
          {renderValue ? renderValue(value) : value}
        </span>
        <span className={styles.itemCount}>
          ({(countByValue.get(value) ?? 0).toLocaleString()})
        </span>
      </Combobox.Item>
    ),
    [countByValue, renderValue],
  );

  const renderChips = useCallback(
    (selectedItems: string[]) => (
      <>
        {selectedItems.map((value) => (
          <Combobox.Chip
            key={value}
            aria-label={value}
          >
            {renderValue ? renderValue(value) : value}
            <Combobox.ChipRemove />
          </Combobox.Chip>
        ))}
        <Combobox.Input
          placeholder={selectedItems.length > 0 ? "" : placeholder}
          aria-label={ariaLabel}
        />
      </>
    ),
    [placeholder, ariaLabel, renderValue],
  );

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

      {(values.length > 0 || isLoading) && (
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
}

export const MultiSelectInput = memo(
  MultiSelectInputInner,
) as typeof MultiSelectInputInner;
