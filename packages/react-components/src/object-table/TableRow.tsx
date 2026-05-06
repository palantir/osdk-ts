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

import type { Cell, Row, RowData } from "@tanstack/react-table";
import type { VirtualItem } from "@tanstack/react-virtual";
import React, { useCallback, useMemo } from "react";
import { TableCell } from "./TableCell.js";
import styles from "./TableRow.module.css";

interface TableRowProps<TData extends RowData> {
  row: Row<TData>;
  virtualRow: VirtualItem;
  onRowClick?: (row: TData) => void;
  renderCellContextMenu?: (
    row: TData,
    cell: Cell<TData, unknown>,
  ) => React.ReactNode;
  isFocused: boolean;
  setFocusedRowId?: (rowId: string | null) => void;
  isInEditMode?: boolean;
  getRowAttributes?: (
    rowData: TData,
  ) => Record<string, string | boolean | undefined>;
}

export function TableRow<TData extends RowData>({
  row,
  virtualRow,
  onRowClick,
  renderCellContextMenu,
  isFocused,
  setFocusedRowId,
  isInEditMode,
  getRowAttributes,
}: TableRowProps<TData>): React.ReactElement {
  // Use the capture phase so row focus is set even when children call
  // stopPropagation on the click event (e.g. DatetimePickerField's input).
  const handleClickCapture = useCallback(() => {
    setFocusedRowId?.(row.id);
  }, [row.id, setFocusedRowId]);

  const handleClick = useCallback(() => {
    if (!isInEditMode) {
      onRowClick?.(row.original);
    }
  }, [isInEditMode, onRowClick, row.original]);

  const customRowAttributes = useMemo(() => {
    if (!getRowAttributes) {
      return;
    }
    return Object.fromEntries(
      Object.entries(getRowAttributes(row.original))
        .filter((entry): entry is [string, string | boolean] =>
          entry[1] != null
        ),
    );
  }, [getRowAttributes, row.original]);

  return (
    <tr
      {...customRowAttributes}
      data-selected={row.getIsSelected()}
      data-focused={isFocused}
      data-row-parity={virtualRow.index % 2 === 0 ? "even" : "odd"}
      className={styles.osdkTableRow}
      style={{
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`,
      }}
      onClickCapture={handleClickCapture}
      onClick={handleClick}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          cell={cell}
          renderCellContextMenu={renderCellContextMenu}
        />
      ))}
    </tr>
  );
}
