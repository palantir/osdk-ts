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

import { Error } from "@blueprintjs/icons";
import type { RowData } from "@tanstack/react-table";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import { DatePickerCellField } from "./components/DatePickerCellField.js";
import { DropdownCellField } from "./components/DropdownCellField.js";
import { TextInputCellField } from "./components/TextInputCellField.js";
import styles from "./EditableCell.module.css";
import type { CellEditInfo, EditFieldConfig } from "./utils/types.js";

const NUMBER_TYPES: readonly string[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

const DATE_TYPES: readonly string[] = [
  "datetime",
  "timestamp",
];

const VALIDATION_ERROR_MESSAGE = "Validation error";

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
  editFieldConfig?: EditFieldConfig;
  isRowFocused?: boolean;
}

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
  editFieldConfig,
  isRowFocused = false,
}: EditableCellProps<TData, CellValue>): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>(
    valueToString(currentValue),
  );
  const isCancelled = useRef(false);
  const validationAbortControllerRef = useRef<AbortController | null>(null);

  const abortValidation = useCallback(() => {
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
    return () => {
      abortValidation();
    };
  }, [abortValidation]);

  const runValidation = useCallback(
    (parsedValue: unknown) => {
      if (!validateEdit) {
        return;
      }

      const controller = new AbortController();
      validationAbortControllerRef.current = controller;

      const validationPromise = validateEdit(parsedValue);

      // Race between validation and abort
      Promise.race([
        validationPromise,
        new Promise<string | undefined>((_, reject) => {
          controller.signal.addEventListener("abort", () => {
            reject(new DOMException("Aborted", "AbortError"));
          });
        }),
      ]).then(
        (errorMessage) => {
          if (controller.signal.aborted) {
            return;
          }
          if (errorMessage) {
            onCellValidationError?.(cellId, errorMessage);
          } else {
            clearCellValidationError?.(cellId);
          }
        },
        (error) => {
          if (
            !controller.signal.aborted
            && error.name !== "AbortError"
          ) {
            onCellValidationError?.(cellId, VALIDATION_ERROR_MESSAGE);
          }
        },
      );
    },
    [validateEdit, onCellValidationError, clearCellValidationError, cellId],
  );

  const commitEdit = useCallback(
    (newValue: CellValue) => {
      abortValidation();

      onCellEdit(cellId, {
        rowId,
        columnId,
        newValue,
        oldValue: initialValue,
        originalRowData,
      });

      runValidation(newValue);
    },
    [
      abortValidation,
      onCellEdit,
      cellId,
      rowId,
      columnId,
      initialValue,
      originalRowData,
      runValidation,
    ],
  );

  // Text/number input: commit on blur
  const handleBlur = useCallback(() => {
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }

    const parsedValue = parseValueByType(inputValue, dataType) as CellValue;
    commitEdit(parsedValue);
  }, [inputValue, dataType, commitEdit]);

  const handleInputChange = useCallback((value: string) => {
    // Cancel any in-flight validation
    abortValidation();
    setInputValue(value);
  }, [abortValidation]);

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

  const handleCommit = useCallback(
    (newValue: unknown) => {
      commitEdit(newValue as CellValue);
    },
    [commitEdit],
  );

  const inputType = dataType && NUMBER_TYPES.includes(dataType)
    ? "number"
    : "text";

  const renderFieldInput = () => {
    switch (editFieldConfig?.fieldComponent) {
      case "DROPDOWN":
        return (
          <DropdownCellField
            editFieldConfig={editFieldConfig as EditFieldConfig & {
              fieldComponent: "DROPDOWN";
            }}
            isRowFocused={isRowFocused}
            inputValue={inputValue}
            hasValidationError={hasValidationError}
            isEdited={isEdited}
            onChange={handleCommit}
          />
        );
      case "DATE_PICKER":
        return (
          <DatePickerCellField
            editFieldConfig={editFieldConfig as EditFieldConfig & {
              fieldComponent: "DATE_PICKER";
            }}
            isRowFocused={isRowFocused}
            inputValue={inputValue}
            hasValidationError={hasValidationError}
            isEdited={isEdited}
            onChange={handleCommit}
          />
        );
      default:
        if (dataType != null && DATE_TYPES.includes(dataType)) {
          return (
            <DatePickerCellField
              isRowFocused={isRowFocused}
              inputValue={inputValue}
              hasValidationError={hasValidationError}
              isEdited={isEdited}
              onChange={handleCommit}
              dataType={dataType}
            />
          );
        }
        return (
          <TextInputCellField
            inputType={inputType}
            inputValue={inputValue}
            hasValidationError={hasValidationError}
            isEdited={isEdited}
            onValueChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        );
    }
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root disabled={!hasValidationError}>
        <Tooltip.Trigger
          className={styles.osdkEditableCellTrigger}
        >
          {renderFieldInput()}
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
"";
