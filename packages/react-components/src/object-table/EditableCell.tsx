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
import { Error } from "@blueprintjs/icons";
import type { RowData } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import styles from "./EditableCell.module.css";
import type { CellEditInfo } from "./utils/types.js";

export interface EditableCellProps<TData extends RowData, CellValue = unknown> {
  initialValue: CellValue;
  currentValue: CellValue;
  cellId: string;
  dataType?: string;
  onCellEdit: (cellId: string, info: CellEditInfo<TData, CellValue>) => void;
  onCellValidationError?: (cellId: string) => void;
  originalRowData: TData;
  rowId: string;
  columnId: string;
  validate?: (value: unknown) => Promise<boolean>;
  onValidationError?: () => string;
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

const VALIDATION_ERROR_MESSAGE = "Validation failed";

function EditableCellInner<TData extends RowData, CellValue = unknown>({
  initialValue,
  currentValue,
  cellId,
  dataType,
  onCellEdit,
  onCellValidationError,
  originalRowData,
  rowId,
  columnId,
  validate,
  onValidationError,
}: EditableCellProps<TData, CellValue>): React.ReactElement {
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
          const errorMessage = onValidationError
            ? onValidationError()
            : VALIDATION_ERROR_MESSAGE;
          setValidationError(errorMessage);
          onCellValidationError?.(cellId);
          return;
        }
      } catch (err) {
        const errorMessage = onValidationError
          ? onValidationError()
          : VALIDATION_ERROR_MESSAGE;
        setValidationError(errorMessage);
        onCellValidationError?.(cellId);
        return;
      }
    }

    setValidationError(null);
    onCellEdit(cellId, {
      rowId,
      columnId,
      newValue: parsedValue as CellValue,
      oldValue: initialValue,
      originalRowData,
    });
  }, [
    inputValue,
    initialValue,
    onCellEdit,
    onCellValidationError,
    cellId,
    dataType,
    rowId,
    columnId,
    originalRowData,
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

  const isEdited = inputValue !== valueToString(initialValue);

  return (
    <Tooltip.Provider>
      <Tooltip.Root disabled={!validationError}>
        <Tooltip.Trigger>
          <div
            className={classNames(styles.osdkEditableCell, {
              [styles.error]: !!validationError,
              [styles.osdkEditedInput]: isEdited,
            })}
          >
            <Input
              type={inputType}
              value={inputValue}
              className={styles.osdkEditableInput}
              onValueChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              aria-invalid={!!validationError}
            />
            {validationError && <Error className={styles.errorIcon} />}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4} side={"bottom"}>
            <Tooltip.Popup>
              {
                <div className={styles.validationError}>
                  <Error className={styles.errorIcon} />
                  {validationError}
                </div>
              }
              <Tooltip.Arrow />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const EditableCell = React.memo(
  EditableCellInner,
) as typeof EditableCellInner;
