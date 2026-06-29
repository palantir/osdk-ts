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
import { useFilterListBoundary } from "../FilterListBoundaryContext.js";
import { createRenderValueFilter } from "./comboboxFilter.js";
import { MultiSelectDropdownLayout } from "./MultiSelectDropdownLayout.js";
import { MultiSelectInlineLayout } from "./MultiSelectInlineLayout.js";
import { getOptionLabelText, OptionLabel } from "./OptionLabel.js";
import { SelectInputSkeleton } from "./SelectInputSkeleton.js";
import { useStableData } from "./useStableData.js";

import styles from "./MultiSelectInput.module.css";
import sharedStyles from "./shared.module.css";

/**
 * Layout for the value list:
 * - `"dropdown"` (default): chips inline + portaled Combobox popup. Use when
 *   the input drives its own surface (e.g. standalone in a row).
 * - `"inline"`: search input + always-visible value list rendered in flow.
 *   Use when wrapping the input in your own popover so the values are
 *   immediately visible without an extra inner trigger.
 */
export type MultiSelectInputLayout = "dropdown" | "inline";

interface MultiSelectInputProps {
  values: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  showCounts?: boolean;
  showFilteredOutValues?: boolean;
  ariaLabel?: string;
  renderValue?: (value: string) => React.ReactNode;
  layout?: MultiSelectInputLayout;
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
  showCounts = true,
  showFilteredOutValues = true,
  ariaLabel = "Search values",
  renderValue,
  layout = "dropdown",
}: MultiSelectInputProps): React.ReactElement {
  const collisionBoundary = useFilterListBoundary();

  const handleValueChange = useCallback(
    (newValues: string[] | null) => {
      onChange(newValues ?? []);
    },
    [onChange]
  );

  const stableValues = useStableData(values, isLoading);

  const items = useMemo(
    () => stableValues.map(({ value }) => value),
    [stableValues]
  );

  const countByValue = useMemo(
    () => new Map(stableValues.map(({ value, count }) => [value, count])),
    [stableValues]
  );

  const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const comboboxFilter = useMemo(
    () => (renderValue ? createRenderValueFilter(renderValue) : undefined),
    [renderValue]
  );

  const renderItem = useCallback(
    (value: string) => {
      const count = countByValue.get(value) ?? 0;
      const isFilteredOut =
        showFilteredOutValues && count === 0 && !selectedSet.has(value);
      return (
        <Combobox.Item
          key={value}
          value={value}
          className={isFilteredOut ? styles.filteredOutItem : undefined}
        >
          <Combobox.ItemIndicator />
          <span className={styles.itemLabel}>
            <OptionLabel value={value} renderValue={renderValue} />
          </span>
          {showCounts && (
            <span className={styles.itemCount}>({count.toLocaleString()})</span>
          )}
        </Combobox.Item>
      );
    },
    [countByValue, selectedSet, showCounts, showFilteredOutValues, renderValue]
  );

  const renderChips = useCallback(
    (selectedItems: string[]) => (
      <>
        {selectedItems.map((value) => {
          return (
            <Combobox.Chip key={value} aria-label={getOptionLabelText(value)}>
              <OptionLabel value={value} renderValue={renderValue} />
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
    [placeholder, ariaLabel, renderValue]
  );

  const isNoData = !error && stableValues.length === 0;
  const isReloading = isLoading && stableValues.length > 0;

  return (
    <div
      className={classnames(styles.multiSelect, className)}
      style={style}
      data-loading={isReloading}
    >
      <span className={sharedStyles.srOnly} role="status">
        {isLoading ? "Loading options" : ""}
      </span>

      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading options: {error.message}
        </div>
      )}

      {isNoData && isLoading && <SelectInputSkeleton />}
      {isNoData && !isLoading && (
        <div className={sharedStyles.emptyMessage}>No options available</div>
      )}

      {stableValues.length > 0 && (
        <Combobox.Root<string, true>
          multiple={true}
          value={selectedValues}
          onValueChange={handleValueChange}
          items={items}
          filter={comboboxFilter}
        >
          {layout === "inline" ? (
            <MultiSelectInlineLayout
              placeholder={placeholder}
              ariaLabel={ariaLabel}
              renderItem={renderItem}
            />
          ) : (
            <MultiSelectDropdownLayout
              renderChips={renderChips}
              renderItem={renderItem}
              collisionBoundary={collisionBoundary}
            />
          )}
        </Combobox.Root>
      )}
    </div>
  );
}

export const MultiSelectInput = memo(
  MultiSelectInputInner
) as typeof MultiSelectInputInner;
