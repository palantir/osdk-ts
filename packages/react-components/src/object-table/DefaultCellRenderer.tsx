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
import { getCellId } from "./utils/getCellId.js";
import type { AsyncCellData } from "./utils/types.js";

export function renderDefaultCell<TData extends RowData>(
  cellContext: CellContext<TData, unknown>,
): React.ReactNode {
  const meta = cellContext.table.options.meta;
  const columnMeta = cellContext.column.columnDef.meta;

  const cellValue = cellContext.getValue();

  const asyncCellData = isAsyncCellData(cellValue)
    ? cellValue
    : undefined;

  if (columnMeta?.isAsyncColumn && asyncCellData) {
    const { data, isLoading, error } = asyncCellData;
    return (
      <AsyncValueCell
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  }

  if (!columnMeta?.editable || !meta?.onCellEdit || !meta?.isInEditMode) {
    return <>{cellValue}</>;
  }

  const rowId = cellContext.row.id;
  const columnId = cellContext.column.id;
  const cellId = getCellId({ rowId, columnId });

  const cellEdits = meta.cellEdits;
  const editedValue = cellEdits?.[cellId];
  const currentValue = editedValue?.newValue ?? cellValue;
  const validationError = meta.validationErrors?.get(cellId);

  return (
    <EditableCell<TData>
      initialValue={cellValue}
      currentValue={currentValue}
      cellId={cellId}
      dataType={columnMeta?.dataType}
      onCellEdit={meta.onCellEdit}
      onCellValidationError={meta.onCellValidationError}
      clearCellValidationError={meta.clearCellValidationError}
      originalRowData={cellContext.row.original}
      rowId={rowId}
      columnId={columnId}
      validateEdit={columnMeta?.validateEdit}
      validationError={validationError}
    />
  );
}

const isAsyncCellData = (value: unknown): value is AsyncCellData => {
  return (
    value != null
    && typeof value === "object"
    && "isLoading" in value
  );
};
