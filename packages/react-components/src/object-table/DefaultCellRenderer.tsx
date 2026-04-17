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

import type { CellContext, RowData } from "@tanstack/react-table";
import React from "react";
import { AsyncValueCell } from "./components/AsyncValueCell.js";
import { EditableCell } from "./EditableCell.js";
import { isAsyncCellData } from "./utils/AsyncCellData.js";
import { getCellId } from "./utils/getCellId.js";

export function renderDefaultCell<TData extends RowData>(
  cellContext: CellContext<TData, unknown>,
): React.ReactNode {
  const meta = cellContext.table.options.meta;
  const columnMeta = cellContext.column.columnDef.meta;

  const cellValue = cellContext.getValue();

  const asyncCellData = isAsyncCellData(cellValue) ? cellValue : undefined;

  // Function-backed columns are read-only: the value is server-computed
  // and cannot be edited in the table. Return the async cell directly.
  if (columnMeta?.isAsyncColumn && asyncCellData) {
    return <AsyncValueCell {...asyncCellData} />;
  }

  if (!columnMeta?.editable || !meta?.onCellEdit || !meta?.isInEditMode) {
    return <>{cellValue}</>;
  }

  const rowId = cellContext.row.id;
  const columnId = cellContext.column.id;
  const cellId = getCellId({ rowId, columnId });

  const cellEdits = meta.cellEdits;
  const editedValue = cellEdits?.[cellId];
  // If newValue is explicitly set to null, treat it as null. Otherwise, fall back to the original cell value.
  const currentValue =
    editedValue?.newValue === undefined ? cellValue : editedValue?.newValue;
  const validationError = meta.validationErrors?.get(cellId);
  const isRowFocused = meta.focusedRowId === rowId;

  return (
    <EditableCell<TData>
      initialValue={cellValue}
      currentValue={currentValue}
      cellId={cellId}
      dataType={columnMeta?.dataType}
      editFieldConfig={columnMeta?.editFieldConfig}
      onCellEdit={meta.onCellEdit}
      onCellValidationError={meta.onCellValidationError}
      clearCellValidationError={meta.clearCellValidationError}
      originalRowData={cellContext.row.original}
      rowId={rowId}
      columnId={columnId}
      validateEdit={columnMeta?.validateEdit}
      validationError={validationError}
      isRowFocused={isRowFocused}
    />
  );
}
