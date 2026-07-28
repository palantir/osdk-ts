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
import { OptionLabel } from "./OptionLabel.js";
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

  const handleValueChange = useCallback(
    (value: string | null) => {
      onChange(value ?? undefined);
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

  const comboboxFilter = useMemo(
    () => (renderValue ? createRenderValueFilter(renderValue) : undefined),
    [renderValue]
  );

  const renderItem = useCallback(
    (value: string) => {
      return (
        <Combobox.Item key={value} value={value}>
          <Combobox.ItemIndicator />
          <span className={styles.itemLabel}>
            <OptionLabel value={value} renderValue={renderValue} />
          </span>
          {showCounts && (
            <span className={styles.itemCount}>
              ({(countByValue.get(value) ?? 0).toLocaleString()})
            </span>
          )}
        </Combobox.Item>
      );
    },
    [countByValue, showCounts, renderValue]
  );

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
              <Combobox.Positioner collisionBoundary={collisionBoundary}>
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
  SingleSelectInputInner
) as typeof SingleSelectInputInner;
