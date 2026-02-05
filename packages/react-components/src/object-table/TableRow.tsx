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
import React, { useCallback } from "react";
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
}

export function TableRow<TData extends RowData>({
  row,
  virtualRow,
  onRowClick,
  renderCellContextMenu,
}: TableRowProps<TData>): React.ReactElement {
  const handleClick = useCallback(() => {
    onRowClick?.(row.original);
  }, [onRowClick, row.original]);

  return (
    <tr
      data-selected={row.getIsSelected()}
      className={styles.osdkTableRow}
      style={{
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`,
      }}
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
