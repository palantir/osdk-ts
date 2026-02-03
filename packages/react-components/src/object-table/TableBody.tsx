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

import type { Cell, HeaderGroup, Row, RowData } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useLayoutEffect } from "react";
import { LoadingRow } from "./LoadingRow.js";
import styles from "./TableBody.module.css";
import { TableRow } from "./TableRow.js";

interface TableBodyProps<TData extends RowData> {
  rows: Array<Row<TData>>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  onRowClick?: (row: TData) => void;
  rowHeight?: number;
  renderCellContextMenu?: (
    row: TData,
    cell: Cell<TData, unknown>,
  ) => React.ReactNode;
  isLoadingMore?: boolean;
  headerGroups?: Array<HeaderGroup<TData>>;
}

export function TableBody<TData extends RowData>({
  rows,
  tableContainerRef,
  onRowClick,
  renderCellContextMenu,
  rowHeight = 40,
  isLoadingMore = false,
  headerGroups = [],
}: TableBodyProps<TData>): React.ReactElement {
  // Important: Keep the row virtualizer in the lowest component possible to avoid unnecessary re-renders.
  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
    count: rows.length,
    estimateSize: () => rowHeight,
    getScrollElement: () => tableContainerRef.current,
    overscan: 5,
  });

  // Measure the virtualizer after the DOM has been laid out to ensure proper dimensions
  useLayoutEffect(() => {
    rowVirtualizer.measure();
  }, [rowVirtualizer, rows.length]);

  const totalSize = rowVirtualizer.getTotalSize();
  const bodyHeight = isLoadingMore
    ? totalSize + rowHeight
    : totalSize;

  const headers = headerGroups[0]?.headers ?? [];

  return (
    <tbody
      className={styles.osdkTableBody}
      style={{
        height: `${bodyHeight}px`,
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = rows[virtualRow.index];

        return (
          <TableRow
            key={row.id}
            row={row}
            virtualRow={virtualRow}
            onRowClick={onRowClick}
            renderCellContextMenu={renderCellContextMenu}
          />
        );
      })}
      {isLoadingMore && (
        <LoadingRow
          headers={headers}
          translateY={totalSize}
          rowHeight={rowHeight}
          columnCount={headers.length}
        />
      )}
    </tbody>
  );
}
