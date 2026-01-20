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

import type { Cell, RowData } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import type { ReactNode} from "react";
import React, { useRef } from "react";
import { CellContextMenu } from "./CellContextMenu.js";
import { useCellContextMenu } from "./hooks/useCellContextMenu.js";
import { SELECTION_COLUMN_ID } from "./hooks/useSelectionColumn.js";

interface TableCellProps<TData extends RowData> {
  cell: Cell<TData, unknown>;
  renderCellContextMenu?: (
    row: TData,
    cell: Cell<TData, unknown>,
  ) => React.ReactNode;
}

export function TableCell<TData extends RowData>(
  { cell, renderCellContextMenu }: TableCellProps<TData>,
): React.ReactElement {
  const tdRef = useRef<HTMLTableCellElement>(null);
  const isSelectColumn = cell.column.id === SELECTION_COLUMN_ID;

  const {
    isContextMenuOpen,
    handleOpenContextMenu,
    handleCloseContextMenu,
    popoverPosition,
  } = useCellContextMenu({
    tdRef,
  });

  const shouldRenderContextMenu = !isSelectColumn && isContextMenuOpen
    && !!popoverPosition
    && !!renderCellContextMenu;

  return (
    <>
      <td
        ref={tdRef}
        style={{
          display: "flex",
          alignItems: "center",
          width: cell.column.getSize(),
        }}
        onContextMenu={handleOpenContextMenu}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext()) as
          | ReactNode
          | React.JSX.Element}
      </td>
      {shouldRenderContextMenu
        && (
          <CellContextMenu
            cell={cell}
            position={popoverPosition}
            onClose={handleCloseContextMenu}
            renderContent={renderCellContextMenu}
          />
        )}
    </>
  );
}
