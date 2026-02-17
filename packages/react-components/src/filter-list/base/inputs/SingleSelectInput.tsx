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

import { Cross } from "@blueprintjs/icons";
import type {
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";
import { Select } from "../../../base-components/select/Select.js";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import sharedStyles from "./shared.module.css";
import styles from "./SingleSelectInput.module.css";

interface SingleSelectInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValue: string | undefined;
  onChange: (value: string | undefined) => void;
  objectSet?: ObjectSet<Q>;
  whereClause?: WhereClause<Q>;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  showClearButton?: boolean;
  showCounts?: boolean;
}

function SingleSelectInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValue,
  onChange,
  objectSet,
  whereClause,
  className,
  style,
  placeholder = "Select a value...",
  showClearButton = true,
  showCounts = false,
}: SingleSelectInputProps<Q, K>): React.ReactElement {
  const { data: values, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { where: whereClause },
  );

  const handleValueChange = useCallback(
    (value: string | null) => {
      onChange(value ?? undefined);
    },
    [onChange],
  );

  const handleClear = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  const items = useMemo(() => {
    const result: Record<string, string> = {};
    for (const { value, count } of values) {
      result[value] = showCounts
        ? `${value} (${count.toLocaleString()})`
        : value;
    }
    return result;
  }, [values, showCounts]);

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

      {values.length > 0 && (
        <div className={styles.selectContainer}>
          <Select.Root<string>
            value={selectedValue ?? null}
            onValueChange={handleValueChange}
            items={items}
          >
            <Select.Trigger
              placeholder={placeholder}
              aria-label={`Select ${propertyKey}`}
            />
            <Select.Portal>
              <Select.Positioner>
                <Select.Popup>
                  {values.map(({ value, count }) => (
                    <Select.Item key={value} value={value}>
                      {showCounts
                        ? `${value} (${count.toLocaleString()})`
                        : value}
                    </Select.Item>
                  ))}
                </Select.Popup>
              </Select.Positioner>
            </Select.Portal>
          </Select.Root>
          {showClearButton && selectedValue !== undefined && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear selection"
            >
              <Cross color="currentColor" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export const SingleSelectInput = memo(
  SingleSelectInputInner,
) as typeof SingleSelectInputInner;
