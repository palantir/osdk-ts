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

// cspell:ignore listoption

import { InputGroup, MenuItem } from "@blueprintjs/core";
import {
  type ItemRenderer,
  MultiSelect,
  QueryList,
  type QueryListRendererProps,
} from "@blueprintjs/select";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";

import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { useFilterListBoundary } from "../FilterListBoundaryContext.js";
import { createRenderValueFilter } from "./comboboxFilter.js";
import { OptionLabel } from "./OptionLabel.js";
import { SelectInputSkeleton } from "./SelectInputSkeleton.js";
import { useStableData } from "./useStableData.js";

import styles from "./MultiSelectInput.module.css";
import sharedStyles from "./shared.module.css";

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
  const stableValues = useStableData(values, isLoading);
  const items = useMemo(
    () => stableValues.map(({ value }) => value),
    [stableValues],
  );
  const countByValue = useMemo(
    () => new Map(stableValues.map(({ value, count }) => [value, count])),
    [stableValues],
  );
  const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);
  const itemPredicate = useMemo(
    () =>
      renderValue == null
        ? defaultItemPredicate
        : createRenderValueFilter(renderValue),
    [renderValue],
  );
  const handleItemSelect = useCallback(
    (value: string) => {
      onChange(
        selectedSet.has(value)
          ? selectedValues.filter((selectedValue) => selectedValue !== value)
          : [...selectedValues, value],
      );
    },
    [onChange, selectedSet, selectedValues],
  );
  const handleRemove = useCallback(
    (value: string) => {
      onChange(
        selectedValues.filter((selectedValue) => selectedValue !== value),
      );
    },
    [onChange, selectedValues],
  );
  const handleClear = useCallback(() => onChange([]), [onChange]);
  const renderItem = useCallback<ItemRenderer<string>>(
    (value, { handleClick, modifiers }) => {
      if (!modifiers.matchesPredicate) return null;
      const count = countByValue.get(value) ?? 0;
      const isFilteredOut =
        showFilteredOutValues && count === 0 && !selectedSet.has(value);
      return (
        <MenuItem
          active={modifiers.active}
          className={isFilteredOut ? styles.filteredOutItem : undefined}
          key={value}
          labelElement={
            showCounts ? (
              <span className={styles.itemCount}>
                ({count.toLocaleString()})
              </span>
            ) : undefined
          }
          onClick={handleClick}
          roleStructure="listoption"
          selected={selectedSet.has(value)}
          shouldDismissPopover={false}
          text={
            <span className={styles.itemLabel}>
              <OptionLabel value={value} renderValue={renderValue} />
            </span>
          }
        />
      );
    },
    [countByValue, renderValue, selectedSet, showCounts, showFilteredOutValues],
  );
  const renderTag = useCallback(
    (value: string) => <OptionLabel value={value} renderValue={renderValue} />,
    [renderValue],
  );
  const renderInlineList = useCallback(
    (queryListProps: QueryListRendererProps<string>) => (
      <div>
        <InputGroup
          aria-activedescendant={queryListProps.activeItemId}
          aria-controls={queryListProps.listId}
          aria-label={ariaLabel}
          className={styles.inlineInput}
          onChange={queryListProps.handleQueryChange}
          onKeyDown={queryListProps.handleKeyDown}
          onKeyUp={queryListProps.handleKeyUp}
          placeholder={placeholder}
          role="combobox"
          value={queryListProps.query}
        />
        {queryListProps.itemList}
      </div>
    ),
    [ariaLabel, placeholder],
  );

  const isNoData = !error && stableValues.length === 0;
  const isReloading = isLoading && stableValues.length > 0;
  const noResults = (
    <MenuItem
      disabled={true}
      roleStructure="listoption"
      text="No matching options"
    />
  );

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

      {stableValues.length > 0 && layout === "inline" && (
        <QueryList<string>
          itemPredicate={itemPredicate}
          itemRenderer={renderItem}
          items={items}
          noResults={noResults}
          onItemSelect={handleItemSelect}
          renderer={renderInlineList}
        />
      )}
      {stableValues.length > 0 && layout === "dropdown" && (
        <MultiSelect<string>
          fill={true}
          itemPredicate={itemPredicate}
          itemRenderer={renderItem}
          items={items}
          noResults={noResults}
          onClear={handleClear}
          onItemSelect={handleItemSelect}
          onRemove={handleRemove}
          placeholder={placeholder}
          popoverProps={{
            boundary: collisionBoundary,
            matchTargetWidth: true,
            minimal: true,
          }}
          selectedItems={selectedValues}
          tagInputProps={{ inputProps: { "aria-label": ariaLabel } }}
          tagRenderer={renderTag}
        />
      )}
    </div>
  );
}

function defaultItemPredicate(query: string, value: string): boolean {
  return value.toLocaleLowerCase().includes(query.toLocaleLowerCase());
}

export const MultiSelectInput = memo(
  MultiSelectInputInner,
) as typeof MultiSelectInputInner;
