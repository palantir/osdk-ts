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

import { Button, MenuItem } from "@blueprintjs/core";
import { Cross } from "@blueprintjs/icons";
import { type ItemRenderer, Suggest } from "@blueprintjs/select";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";

import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { useFilterListBoundary } from "../FilterListBoundaryContext.js";
import { createRenderValueFilter } from "./comboboxFilter.js";
import { getOptionLabelText, OptionLabel } from "./OptionLabel.js";
import { SelectInputSkeleton } from "./SelectInputSkeleton.js";
import { useStableData } from "./useStableData.js";

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
  renderValue?: (value: string) => React.ReactNode;
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
  showCounts = false,
  ariaLabel = "Select value",
  renderValue,
}: SingleSelectInputProps): React.ReactElement {
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
  const itemPredicate = useMemo(
    () =>
      renderValue == null
        ? defaultItemPredicate
        : createRenderValueFilter(renderValue),
    [renderValue],
  );
  const renderItem = useCallback<ItemRenderer<string>>(
    (value, { handleClick, modifiers }) => {
      if (!modifiers.matchesPredicate) return null;
      return (
        <MenuItem
          active={modifiers.active}
          key={value}
          labelElement={
            showCounts ? (
              <span className={styles.itemCount}>
                ({(countByValue.get(value) ?? 0).toLocaleString()})
              </span>
            ) : undefined
          }
          onClick={handleClick}
          roleStructure="listoption"
          selected={value === selectedValue}
          text={
            <span className={styles.itemLabel}>
              <OptionLabel value={value} renderValue={renderValue} />
            </span>
          }
        />
      );
    },
    [countByValue, renderValue, selectedValue, showCounts],
  );
  const inputValueRenderer = useCallback(
    (value: string) => {
      const rendered = renderValue?.(value);
      return typeof rendered === "string"
        ? rendered
        : getOptionLabelText(value);
    },
    [renderValue],
  );
  const handleClear = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      onChange(undefined);
    },
    [onChange],
  );
  const clearButton =
    showClearButton && selectedValue !== undefined ? (
      <Button
        aria-label="Clear selected value"
        icon={<Cross />}
        onClick={handleClear}
        variant="minimal"
      />
    ) : undefined;

  const isNoData = !error && stableValues.length === 0;
  const isReloading = isLoading && stableValues.length > 0;

  return (
    <div
      className={classnames(styles.singleSelect, className)}
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
        <Suggest<string>
          fill={true}
          inputProps={{
            "aria-label": ariaLabel,
            placeholder,
            rightElement: clearButton,
          }}
          inputValueRenderer={inputValueRenderer}
          itemPredicate={itemPredicate}
          itemRenderer={renderItem}
          items={items}
          noResults={
            <MenuItem
              disabled={true}
              roleStructure="listoption"
              text="No matching options"
            />
          }
          onItemSelect={onChange}
          popoverProps={{ boundary: collisionBoundary, minimal: true }}
          selectedItem={selectedValue ?? null}
        />
      )}
    </div>
  );
}

function defaultItemPredicate(query: string, value: string): boolean {
  return value.toLocaleLowerCase().includes(query.toLocaleLowerCase());
}

export const SingleSelectInput = memo(
  SingleSelectInputInner,
) as typeof SingleSelectInputInner;
