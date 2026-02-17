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

import type {
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";
import { Checkbox } from "../../../base-components/checkbox/Checkbox.js";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import styles from "./CheckboxListInput.module.css";
import sharedStyles from "./shared.module.css";

interface CheckboxListInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  objectSet?: ObjectSet<Q>;
  whereClause?: WhereClause<Q>;
  className?: string;
  style?: React.CSSProperties;
}

function CheckboxListInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  selectedValues,
  onChange,
  whereClause,
  className,
  style,
}: CheckboxListInputProps<Q, K>): React.ReactElement {
  const { data, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { where: whereClause },
  );

  const values = useMemo(
    () => data.map((item) => item.value),
    [data],
  );

  // Use Set for O(1) membership checks
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

      {!error && values.length === 0 && (
        <div className={sharedStyles.emptyMessage}>
          {isLoading ? "Loading values..." : "No values available"}
        </div>
      )}

      {values.length > 0 && (
        <>
          {isLoading && (
            <div className={sharedStyles.loadingMessage}>
              Updating...
            </div>
          )}
          {values.map((value) => {
            const isSelected = selectedSet.has(value);

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
