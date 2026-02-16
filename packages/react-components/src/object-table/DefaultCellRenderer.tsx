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

import type { CellContext } from "@tanstack/react-table";
import React from "react";
import { EditableCell } from "./EditableCell.js";
import { getCellId } from "./utils/getCellId.js";

export function renderDefaultCell<TData>(
  cellContext: CellContext<TData, unknown>,
): React.ReactElement | unknown {
  const meta = cellContext.table.options.meta;
  const columnMeta = cellContext.column.columnDef.meta;

  if (columnMeta?.editable && meta?.onCellEdit) {
    const rowId = cellContext.row.id;
    const columnId = cellContext.column.id;
    const cellId = getCellId({ rowId, columnId });

    return (
      <EditableCell
        initialValue={cellContext.getValue()}
        cellId={cellId}
        dataType={columnMeta?.dataType}
        onCellEdit={meta.onCellEdit}
      />
    );
  }

  return cellContext.getValue();
}
