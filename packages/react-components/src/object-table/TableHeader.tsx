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
  Header,
  RowData,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
import React, { useCallback, useMemo, useState } from "react";
import { type ColumnConfig, ColumnConfigDialog } from "./ColumnConfigDialog.js";
import { MultiColumnSortDialog } from "./MultiColumnSortDialog.js";
import styles from "./TableHeader.module.css";
import { TableHeaderContent } from "./TableHeaderContent.js";
import {
  type HeaderMenuFeatureFlags,
  TableHeaderWithPopover,
} from "./TableHeaderWithPopover.js";
import { SELECTION_COLUMN_ID } from "./utils/constants.js";
import { getColumnPinningStyles } from "./utils/getColumnPinningStyles.js";
import type { ColumnOption } from "./utils/types.js";

interface TableHeaderProps<
  TData extends RowData,
> {
  table: Table<TData>;
  headerMenuFeatureFlags?: HeaderMenuFeatureFlags;
}

const getHeaderName = <TData,>(
  column: Column<TData, unknown>,
  allHeaders: Header<TData, unknown>[],
) => {
  const { id, columnDef } = column;
  const header = allHeaders.find(header => header.id === id);
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

export function TableHeader<
  TData extends RowData,
>({
  table,
  headerMenuFeatureFlags,
}: TableHeaderProps<TData>): React.ReactElement {
  // TODO: If value is number type, right align header

  const {
    setColumnOrder,
    setColumnVisibility,
    setSorting,
  } = table;

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
    [setSorting],
  );

  const handleApplyColumnConfig = useCallback(
    (updates: ColumnConfig[]) => {
      const newVisibilityState: VisibilityState = {};
      for (const update of updates) {
        newVisibilityState[update.columnId] = update.isVisible;
      }

      setColumnOrder(updates.map(col => col.columnId));
      setColumnVisibility(newVisibilityState);
    },
    [setColumnOrder, setColumnVisibility],
  );

  const columnOptions: ColumnOption[] = useMemo(() => {
    const allHeaders = table.getHeaderGroups().flatMap(headerGroup =>
      headerGroup.headers
    );

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
                        table={table}
                        header={header}
                        isColumnPinned={isColumnPinned}
                        columnOptions={columnOptions}
                        featureFlags={headerMenuFeatureFlags}
                        onOpenColumnConfig={handleOpenColumnConfig}
                        onOpenMultiSort={handleOpenMultiSort}
                      />
                    )}
                  {header.column.getCanResize()
                    && headerMenuFeatureFlags?.showResizeItem !== false && (
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
      {columnOptions?.some(col => col.canSort) && (
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
