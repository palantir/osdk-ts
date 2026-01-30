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

import type { RowData, Table } from "@tanstack/react-table";
import React from "react";
import styles from "./TableHeader.module.css";
import { TableHeaderContent } from "./TableHeaderContent.js";
import { TableHeaderWithPopover } from "./TableHeaderWithPopover.js";
import { SELECTION_COLUMN_ID } from "./utils/constants.js";
import { getColumnPinningStyles } from "./utils/getColumnPinningStyles.js";

interface TableHeaderProps<TData extends RowData> {
  table: Table<TData>;
}

export function TableHeader<TData extends RowData>({
  table,
}: TableHeaderProps<TData>): React.ReactElement {
  // TODO: If value is number type, right align header

  const isResizing = !!table.getState().columnSizingInfo?.isResizingColumn;

  return (
    <thead className={styles.osdkTableHeader} data-resizing={isResizing}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className={styles.osdkTableHeaderRow}
        >
          {headerGroup.headers.map((header) => {
            const { columnStyles } = getColumnPinningStyles(header.column);
            const isColumnPinned = header.column.getIsPinned();
            const isSelectColumn = header.id === SELECTION_COLUMN_ID;
            return (
              <th
                key={header.id}
                data-pinned={header.column.getIsPinned()}
                className={styles.osdkTableHeaderCell}
                style={columnStyles}
              >
                {header.isPlaceholder
                  ? null
                  : isSelectColumn
                  ? <TableHeaderContent header={header} />
                  : (
                    <TableHeaderWithPopover
                      header={header}
                      isColumnPinned={isColumnPinned}
                      setColumnPinning={table.setColumnPinning}
                    />
                  )}
                {header.column.getCanResize() && (
                  <div
                    className={styles.osdkTableHeaderResizer}
                    onDoubleClick={() => header.column.resetSize()}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                  />
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}
