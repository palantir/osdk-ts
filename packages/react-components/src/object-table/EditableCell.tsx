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
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import { DatePickerCellField } from "./components/DatePickerCellField.js";
import { DropdownCellField } from "./components/DropdownCellField.js";
import { TextInputCellField } from "./components/TextInputCellField.js";
import { useObjectTableLabels } from "./ObjectTableLabels.js";
import { cellValuesEqual } from "./utils/editableUtils.js";
import type { CellEditInfo, EditFieldConfig } from "./utils/types.js";

import styles from "./EditableCell.module.css";

const NUMBER_TYPES: readonly string[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

const DATE_TYPES: readonly string[] = ["datetime", "timestamp"];

export interface EditableCellProps<TData extends RowData, CellValue = unknown> {
  initialValue: CellValue;
  currentValue: CellValue;
  cellId: string;
  dataType?: string;
  onCellEdit: (cellId: string, info: CellEditInfo<TData, CellValue>) => void;
  onCellValidationError?: (cellId: string, error: string) => void;
  clearCellValidationError?: (cellId: string) => void;
  validationError?: string;
  originalRowData: TData;
  rowId: string;
  columnId: string;
  validateEdit?: (value: unknown) => Promise<string | undefined>;
  editFieldConfig?: EditFieldConfig<TData>;
  /**
   * Pending edits for this row, keyed by `columnId`. Forwarded to
   * `EditFieldConfig#getFieldComponentProps`. Filtering happens in
   * `DefaultCellRenderer` so unedited rows receive a stable `undefined`
   * reference and `React.memo` can skip them.
   */
  rowCellEdits?: Record<string, CellEditInfo<TData, unknown>>;
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

function parseValueByType(value: string, dataType?: string): unknown {
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
  rowCellEdits,
  isRowFocused = false,
}: EditableCellProps<TData, CellValue>): React.ReactElement {
  const labels = useObjectTableLabels();
  const [inputValue, setInputValue] = useState<string>(
    valueToString(currentValue)
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
  const isEdited = !cellValuesEqual(currentValue, initialValue);

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
          if (!controller.signal.aborted && error.name !== "AbortError") {
            onCellValidationError?.(cellId, labels.cellValidationError);
          }
        }
      );
    },
    [
      validateEdit,
      onCellValidationError,
      clearCellValidationError,
      cellId,
      labels,
    ]
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
    ]
  );

  // Text/number input: commit on blur
  const handleBlur = useCallback(() => {
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }

    // No-op when the input wasn't actually changed by the user
    if (inputValue === valueToString(currentValue)) {
      return;
    }

    const parsedValue = parseValueByType(inputValue, dataType) as CellValue;
    commitEdit(parsedValue);
  }, [inputValue, currentValue, dataType, commitEdit]);

  const handleInputChange = useCallback(
    (value: string) => {
      // Cancel any in-flight validation
      abortValidation();
      setInputValue(value);
    },
    [abortValidation]
  );

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
    [currentValue]
  );

  const handleCommit = useCallback(
    (newValue: unknown) => {
      // No-op if the value hasn't actually moved from what the cell already
      // displays. null and undefined are treated as the same empty state so
      // a dropdown that clears a never-set cell doesn't fire; "" stays
      // distinct since an empty string can be meaningful data.
      if (cellValuesEqual(newValue, currentValue)) return;
      commitEdit(newValue as CellValue);
    },
    [commitEdit, currentValue]
  );

  const inputType =
    dataType && NUMBER_TYPES.includes(dataType) ? "number" : "text";

  // Compute field-component props once per (editFieldConfig, originalRowData, rowCellEdits).
  // The narrowed return type is preserved in each useMemo
  const dropdownFieldProps = useMemo(
    () =>
      editFieldConfig?.fieldComponent === "DROPDOWN"
        ? editFieldConfig.getFieldComponentProps(originalRowData, rowCellEdits)
        : undefined,
    [editFieldConfig, originalRowData, rowCellEdits]
  );

  const datePickerFieldProps = useMemo(
    () =>
      editFieldConfig?.fieldComponent === "DATE_PICKER"
        ? editFieldConfig.getFieldComponentProps(originalRowData, rowCellEdits)
        : undefined,
    [editFieldConfig, originalRowData, rowCellEdits]
  );

  const renderFieldInput = () => {
    switch (editFieldConfig?.fieldComponent) {
      case "DROPDOWN":
        return (
          <DropdownCellField
            fieldComponentProps={dropdownFieldProps!}
            isRowFocused={isRowFocused}
            inputValue={inputValue}
            value={currentValue}
            hasValidationError={hasValidationError}
            isEdited={isEdited}
            onChange={handleCommit}
          />
        );
      case "DATE_PICKER":
        return (
          <DatePickerCellField
            fieldComponentProps={datePickerFieldProps}
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
          render={<span className={styles.osdkTooltipTriggerWrapper} />}
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
  EditableCellInner
) as typeof EditableCellInner;
("");
