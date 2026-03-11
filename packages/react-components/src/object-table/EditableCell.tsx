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

import type { WirePropertyTypes } from "@osdk/api";
import type { RowData } from "@tanstack/react-table";
import React, { useCallback } from "react";
import { InputComponent } from "../base-components/input/InputComponent.js";
import type { CellEditInfo } from "./utils/types.js";

const NUMBER_TYPES: WirePropertyTypes[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

export interface EditableCellProps<TData extends RowData, CellValue = unknown> {
  initialValue: CellValue;
  currentValue: CellValue;
  cellId: string;
  dataType?: WirePropertyTypes;
  onCellEdit: (cellId: string, info: CellEditInfo<TData, CellValue>) => void;
  onCellValidationError?: (cellId: string) => void;
  originalRowData: TData;
  rowId: string;
  columnId: string;
  validate?: (value: CellValue | null) => Promise<boolean>;
  onValidationError?: () => string;
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
  const handleValidationError = useCallback(() => {
    const errorMessage = onValidationError
      ? onValidationError()
      : VALIDATION_ERROR_MESSAGE;
    onCellValidationError?.(cellId);
    return errorMessage;
  }, [cellId, onCellValidationError, onValidationError]);

  const handleBlur = useCallback((
    { newValue, oldValue }: {
      newValue: CellValue | null;
      oldValue: CellValue | null;
    },
  ) => {
    onCellEdit(cellId, {
      rowId,
      columnId,
      newValue,
      oldValue,
      originalRowData,
    });
  }, [onCellEdit, cellId, rowId, columnId, originalRowData]);

  const inputType = dataType && NUMBER_TYPES.includes(dataType)
    ? "number"
    : "text";

  return (
    <InputComponent
      initialValue={initialValue}
      currentValue={currentValue}
      inputType={inputType}
      onBlur={handleBlur}
      validate={validate}
      onValidationError={handleValidationError}
    />
  );
}

export const EditableCell = React.memo(
  EditableCellInner,
) as typeof EditableCellInner;
