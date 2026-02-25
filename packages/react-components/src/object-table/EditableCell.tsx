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

import { Input } from "@base-ui/react/input";
import { Tooltip } from "@base-ui/react/tooltip";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./EditableCell.module.css";
import type { CellEditEvent } from "./utils/types.js";

export interface EditableCellProps<TData = unknown> {
  initialValue: unknown;
  currentValue: unknown;
  cellId: string;
  dataType?: string;
  onCellEdit?: (cellId: string, event: CellEditEvent<TData, unknown>) => void;
  rowData: TData;
  rowId: string;
  columnId: string;
  validate?: (value: unknown) => Promise<boolean>;
  onValidationError?: (error: { type: string; error: string }) => string;
}

const NUMBER_TYPES: string[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

function valueToString(value: unknown): string {
  if (value == null) {
    return "";
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  // At this point, value is a primitive (string, number, boolean, symbol, bigint)
  return String(value as string | number | boolean | symbol | bigint);
}

function parseValueByType(
  value: string,
  dataType?: string,
): unknown {
  if (!dataType || !NUMBER_TYPES.includes(dataType)) {
    return value;
  }

  if (value === "") {
    return null;
  }

  const parsedNumber = Number(value);

  if (isNaN(parsedNumber)) {
    return value;
  }

  return parsedNumber;
}

export function EditableCell<TData = unknown>({
  initialValue,
  currentValue,
  cellId,
  dataType,
  onCellEdit,
  rowData,
  rowId,
  columnId,
  validate,
  onValidationError,
}: EditableCellProps<TData>): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>(
    valueToString(currentValue),
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const isCancelled = useRef(false);

  useEffect(() => {
    setInputValue(valueToString(currentValue));
  }, [currentValue]);

  const handleBlur = useCallback(async () => {
    // Do not commit the edit if it was cancelled with Escape key
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }

    const parsedValue = parseValueByType(inputValue, dataType);

    // Perform validation if validate function is provided
    if (validate) {
      try {
        const isValid = await validate(parsedValue);
        if (!isValid) {
          const error = { type: "validate", error: "Validation failed" };
          const errorMessage = onValidationError
            ? onValidationError(error)
            : error.error;
          setValidationError(errorMessage);
          return;
        }
      } catch (err) {
        const error = { type: "validate", error: "Validation error" };
        const errorMessage = onValidationError
          ? onValidationError(error)
          : error.error;
        setValidationError(errorMessage);
        return;
      }
    }

    setValidationError(null);
    onCellEdit?.(cellId, {
      rowId,
      columnId,
      newValue: parsedValue,
      oldValue: initialValue,
      rowData,
    });
  }, [
    inputValue,
    initialValue,
    onCellEdit,
    cellId,
    dataType,
    rowId,
    columnId,
    rowData,
    validate,
    onValidationError,
  ]);

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError(null);
    }
  }, [validationError]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.currentTarget.blur();
      }
      if (e.key === "Escape") {
        isCancelled.current = true;
        setInputValue(valueToString(currentValue));
        e.currentTarget.blur();
      }
    },
    [currentValue],
  );

  const inputType = dataType && NUMBER_TYPES.includes(dataType)
    ? "number"
    : "text";

  const isEdited = currentValue !== initialValue;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className={styles.editableCellWrapper}>
          <Input
            className={classNames(styles.osdkEditableInput, {
              [styles.invalid]: !!validationError,
              [styles.osdkEditedInput]: isEdited,
            })}
            type={inputType}
            value={inputValue}
            onValueChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            aria-invalid={!!validationError}
          />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4}>
            <Tooltip.Popup className={styles.tooltipPopup}>
              {validationError}
              <Tooltip.Arrow className={styles.tooltipArrow} />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
