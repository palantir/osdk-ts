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
  onCellValidationError?: (
    cellId: string,
    error: string,
  ) => void;
  clearCellValidationError?: (cellId: string) => void;
  validationError?: string;
  originalRowData: TData;
  rowId: string;
  columnId: string;
  validateEdit?: (value: unknown) => Promise<string | undefined>;
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

function parseValueByType<CellValue = unknown>(
  value: string,
  dataType?: string,
): CellValue | null {
  if (!dataType || !NUMBER_TYPES.includes(dataType)) {
    return value as unknown as CellValue;
  }

  if (value === "") {
    return null;
  }

  const parsedNumber = Number(value);

  if (isNaN(parsedNumber)) {
    return value as unknown as CellValue;
  }

  return parsedNumber as unknown as CellValue;
}

const VALIDATION_ERROR_MESSAGE = "Validation error";

function EditableCellInner<TData extends RowData, CellValue = unknown>({
  initialValue,
  currentValue,
  cellId,
  dataType,
  onCellEdit,
  onCellValidationError,
  clearCellValidationError,
  originalRowData,
  rowId,
  columnId,
  validateEdit,
  validationError,
}: EditableCellProps<TData, CellValue>): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>(
    valueToString(currentValue),
  );
  const isCancelled = useRef(false);
  const validationAbortControllerRef = useRef<AbortController | null>(null);

  const abortController = useCallback(() => {
    if (validationAbortControllerRef.current) {
      validationAbortControllerRef.current.abort();
      validationAbortControllerRef.current = null;
    }
  }, []);

  const hasValidationError = validationError != null;
  const isEdited = currentValue !== initialValue;

  useEffect(() => {
    setInputValue(valueToString(currentValue));
  }, [currentValue]);

  useEffect(() => {
    // Cleanup abort controller on unmount
    return () => {
      abortController();
    };
  }, [abortController]);

  const handleBlur = useCallback(() => {
    // Do not commit the edit if it was cancelled with Escape key
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }

    // Cancel any in-flight validation
    abortController();

    const parsedValue = parseValueByType<CellValue>(inputValue, dataType);

    onCellEdit(cellId, {
      rowId,
      columnId,
      newValue: parsedValue,
      oldValue: initialValue,
      originalRowData,
    });

    if (validateEdit) {
      // Create new AbortController for this validation
      const abortController = new AbortController();
      validationAbortControllerRef.current = abortController;

      const validationPromise = validateEdit(parsedValue);

      // Race between validation and abort
      Promise.race([
        validationPromise,
        new Promise<string | undefined>((_, reject) => {
          abortController.signal.addEventListener("abort", () => {
            reject(new DOMException("Aborted", "AbortError"));
          });
        }),
      ]).then(
        (errorMessage) => {
          if (!abortController.signal.aborted) {
            if (errorMessage) {
              onCellValidationError?.(cellId, errorMessage);
            } else {
              clearCellValidationError?.(cellId);
            }
          }
        },
        (error) => {
          if (!abortController.signal.aborted && error.name !== "AbortError") {
            onCellValidationError?.(cellId, VALIDATION_ERROR_MESSAGE);
          }
        },
      );
    }
  }, [
    abortController,
    inputValue,
    dataType,
    onCellEdit,
    cellId,
    rowId,
    columnId,
    initialValue,
    originalRowData,
    validateEdit,
    onCellValidationError,
    clearCellValidationError,
  ]);

  const handleChange = useCallback((value: string) => {
    // Cancel any in-flight validation
    abortController();
    setInputValue(value);
  }, [abortController]);

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

  return (
    <Tooltip.Provider>
      <Tooltip.Root disabled={!hasValidationError}>
        <Tooltip.Trigger>
          <div
            className={classNames(styles.osdkEditableCell, {
              [styles.error]: hasValidationError,
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
              aria-invalid={hasValidationError}
            />
            {hasValidationError && <Error className={styles.errorIcon} />}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4} side={"bottom"}>
            <Tooltip.Popup>
              <div className={styles.validationError}>
                <Error className={styles.errorIcon} />
                {validationError}
              </div>
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
