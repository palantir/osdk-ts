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
import sharedStyles from "./shared.module.css";
import styles from "./SingleSelectInput.module.css";

interface SingleSelectInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValue: string | undefined;
  onChange: (value: string | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  showClearButton?: boolean;
  showCounts?: boolean;
  ariaLabel?: string;
  renderValue?: (value: string) => string;
}

function SingleSelectInputInner({
  values,
  isLoading,
  error,
  selectedValue,
  onChange,
  className,
  style,
  placeholder = "Select a value...",
  showClearButton = true,
  showCounts = true,
  ariaLabel = "Select value",
  renderValue,
}: SingleSelectInputProps): React.ReactElement {
  const handleValueChange = useCallback(
    (value: string | null) => {
      onChange(value ?? undefined);
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
        {showCounts && (
          <span className={styles.itemCount}>
            ({(countByValue.get(value) ?? 0).toLocaleString()})
          </span>
        )}
      </Combobox.Item>
    ),
    [countByValue, showCounts, renderValue],
  );

  return (
    <div
      className={classnames(styles.singleSelect, className)}
      style={style}
      data-loading={isLoading}
    >
      {isLoading && (
        <div className={sharedStyles.loadingMessage}>
          Loading options...
        </div>
      )}

      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading options: {error.message}
        </div>
      )}

      {!isLoading && !error && values.length === 0 && (
        <div className={sharedStyles.emptyMessage}>
          No options available
        </div>
      )}

      {(values.length > 0 || isLoading) && (
        <div className={styles.selectContainer}>
          <Combobox.Root<string>
            value={selectedValue ?? null}
            onValueChange={handleValueChange}
            items={items}
            filter={comboboxFilter}
          >
            <Combobox.SearchInput
              placeholder={placeholder}
              aria-label={ariaLabel}
            />
            {showClearButton && selectedValue !== undefined && (
              <Combobox.Clear className={styles.clearButton} />
            )}
            <Combobox.Portal>
              <Combobox.Positioner>
                <Combobox.Popup>
                  <Combobox.Empty>No matching options</Combobox.Empty>
                  <Combobox.List>{renderItem}</Combobox.List>
                </Combobox.Popup>
              </Combobox.Positioner>
            </Combobox.Portal>
          </Combobox.Root>
        </div>
      )}
    </div>
  );
}

export const SingleSelectInput = memo(
  SingleSelectInputInner,
) as typeof SingleSelectInputInner;
