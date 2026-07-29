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

import type {
  Column,
  ColumnSizingState,
  Header,
  RowData,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";

import { type ColumnConfig, ColumnConfigDialog } from "./ColumnConfigDialog.js";
import { MultiColumnSortDialog } from "./MultiColumnSortDialog.js";
import { TableHeaderContent } from "./TableHeaderContent.js";
import {
  type HeaderMenuFeatureFlags,
  TableHeaderWithPopover,
} from "./TableHeaderWithPopover.js";
import { SELECTION_COLUMN_ID } from "./utils/constants.js";
import { getColumnPinningStyles } from "./utils/getColumnPinningStyles.js";
import type { ColumnOption } from "./utils/types.js";

import styles from "./TableHeader.module.css";

interface TableHeaderProps<TData extends RowData> {
  table: Table<TData>;
  headerMenuFeatureFlags?: HeaderMenuFeatureFlags;
  onColumnHeaderClick?: (columnId: string) => void;
}

const getHeaderName = <TData,>(
  column: Column<TData, unknown>,
  allHeaders: Header<TData, unknown>[]
) => {
  const { id, columnDef } = column;
  const header = allHeaders.find((header) => header.id === id);
  const headerDef = columnDef.header;

  if (headerDef) {
    if (typeof headerDef === "string") {
      return headerDef;
    }
    // Try to get header name from the renderHeader function
    if (header) {
      const displayedHeader = headerDef(header.getContext());
      if (typeof displayedHeader === "string") return displayedHeader;
    }
  }
  // Fallback to use the columnName provided by user or id
  const { meta } = columnDef;
  return meta?.columnName ?? id;
};

/**
 * Records the painted width of the column being resized and of every column
 * before it, so that a resize drag behaves the way the pointer says it should.
 *
 * Two problems this solves, both caused by stretched columns being painted wider
 * than `column.getSize()` (the extra width comes from flex-grow — see
 * `getColumnFlexGrow`):
 *
 * 1. TanStack takes the start width for a drag from `getSize()`, so the dragged
 *    column would snap back to that stored width on the first pointer move.
 * 2. The rows are stretched to at least the full container width, so any width
 *    the dragged column gives up is immediately re-claimed by whichever columns
 *    can still grow — *including columns to its left*. That pushes the dragged
 *    column's right edge back where it started, and the divider the user is
 *    holding does not move at all. Pinning the earlier columns takes them out of
 *    the pool, so the width can only come from the columns to the right and the
 *    divider tracks the pointer.
 *
 * `pointerdown` fires ahead of both `mousedown` and `touchstart`, which is what
 * makes this work: React commits the new sizing state before the resize handler
 * runs and reads it.
 *
 * Nothing moves on screen as a result. Leftover width is shared in proportion to
 * each column's own width, so the share a column stops claiming is exactly the
 * growth it keeps — every column keeps its painted width, including the ones
 * still growing.
 */
function pinPaintedColumnWidths<TData extends RowData>(
  table: Table<TData>,
  header: Header<TData, unknown>,
  resizer: HTMLElement
): void {
  const headerCell = resizer.closest("th");
  const headerRow = headerCell?.closest("tr");
  if (headerCell == null || headerRow == null) {
    return;
  }

  // The cells are rendered straight from `headers` in order, so their positions
  // line up.
  const cells = [...headerRow.children];
  const dragIndex = cells.indexOf(headerCell);
  if (dragIndex < 0) {
    return;
  }

  const { headers } = header.headerGroup;
  const paintedWidths: ColumnSizingState = {};

  for (const [index, cell] of cells.slice(0, dragIndex + 1).entries()) {
    const cellHeader = headers[index];
    if (cellHeader == null) {
      continue;
    }

    const paintedWidth = Math.round(cell.getBoundingClientRect().width);

    // A column that was never stretched needs no adjusting; the tolerance keeps
    // sub-pixel rounding from being reported as a resize.
    if (
      paintedWidth <= 0 ||
      Math.abs(paintedWidth - cellHeader.getSize()) <= 1
    ) {
      continue;
    }

    paintedWidths[cellHeader.column.id] = paintedWidth;
  }

  if (Object.keys(paintedWidths).length === 0) {
    return;
  }

  table.setColumnSizing((prev) => ({ ...prev, ...paintedWidths }));
}

export function TableHeader<TData extends RowData>({
  table,
  headerMenuFeatureFlags,
  onColumnHeaderClick,
}: TableHeaderProps<TData>): React.ReactElement {
  // TODO: If value is number type, right align header

  const { setColumnOrder, setColumnVisibility, setSorting } = table;

  const currentSorting = table.getState().sorting;
  const currentVisibility = table.getState().columnVisibility;
  const currentColumnOrder = table.getState().columnOrder;

  const isResizing = !!table.getState().columnSizingInfo?.isResizingColumn;

  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [multiSortDialogOpen, setMultiSortDialogOpen] = useState(false);

  const handleOpenColumnConfig = useCallback(() => {
    setConfigDialogOpen(true);
  }, []);

  const handleCloseColumnConfig = useCallback(() => {
    setConfigDialogOpen(false);
  }, []);

  const handleOpenMultiSort = useCallback(() => {
    setMultiSortDialogOpen(true);
  }, []);

  const handleCloseMultiSort = useCallback(() => {
    setMultiSortDialogOpen(false);
  }, []);

  const handleApplyMultiSort = useCallback(
    (sortColumns: SortingState) => {
      setMultiSortDialogOpen(false);
      setSorting?.(sortColumns);
    },
    [setSorting]
  );

  const handleApplyColumnConfig = useCallback(
    (updates: ColumnConfig[]) => {
      const newVisibilityState: VisibilityState = {};
      for (const update of updates) {
        newVisibilityState[update.columnId] = update.isVisible;
      }

      setColumnOrder(updates.map((col) => col.columnId));
      setColumnVisibility(newVisibilityState);
    },
    [setColumnOrder, setColumnVisibility]
  );

  const columnOptions: ColumnOption[] = useMemo(() => {
    const allHeaders = table
      .getHeaderGroups()
      .flatMap((headerGroup) => headerGroup.headers);

    return table
      .getAllColumns()
      .filter((column) => column.id !== SELECTION_COLUMN_ID)
      .map((column) => {
        return {
          id: column.id,
          name: getHeaderName(column, allHeaders),
          canSort: column.getCanSort(),
        };
      });
  }, [table]);

  return (
    <>
      <thead className={styles.osdkTableHeader} data-resizing={isResizing}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className={styles.osdkTableHeaderRow}>
            {headerGroup.headers.map((header) => {
              const { columnStyles } = getColumnPinningStyles(
                header.column,
                table
              );
              const isColumnPinned = header.column.getIsPinned();
              const isSelectColumn = header.id === SELECTION_COLUMN_ID;
              return (
                <th
                  key={header.id}
                  data-pinned={header.column.getIsPinned()}
                  className={classNames(styles.osdkTableHeaderCell, {
                    [styles.osdkTableSelectionHeaderCell]: isSelectColumn,
                  })}
                  style={columnStyles}
                >
                  {header.isPlaceholder ? null : isSelectColumn ? (
                    <TableHeaderContent header={header} />
                  ) : (
                    <TableHeaderWithPopover
                      table={table}
                      header={header}
                      isColumnPinned={isColumnPinned}
                      columnOptions={columnOptions}
                      featureFlags={headerMenuFeatureFlags}
                      onOpenColumnConfig={handleOpenColumnConfig}
                      onOpenMultiSort={handleOpenMultiSort}
                      onColumnHeaderClick={onColumnHeaderClick}
                    />
                  )}
                  {header.column.getCanResize() &&
                    headerMenuFeatureFlags?.showResizeItem !== false && (
                      <div
                        className={styles.osdkTableHeaderResizer}
                        onDoubleClick={() => header.column.resetSize()}
                        onPointerDown={(event) =>
                          pinPaintedColumnWidths(
                            table,
                            header,
                            event.currentTarget
                          )
                        }
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
      {!!columnOptions?.length && (
        <ColumnConfigDialog
          isOpen={configDialogOpen}
          onClose={handleCloseColumnConfig}
          columnOptions={columnOptions}
          currentVisibility={currentVisibility}
          currentColumnOrder={currentColumnOrder}
          onApply={handleApplyColumnConfig}
        />
      )}
      {columnOptions?.some((col) => col.canSort) && (
        <MultiColumnSortDialog
          isOpen={multiSortDialogOpen}
          onClose={handleCloseMultiSort}
          columnOptions={columnOptions}
          currentSorting={currentSorting}
          onApply={handleApplyMultiSort}
        />
      )}
    </>
  );
}
