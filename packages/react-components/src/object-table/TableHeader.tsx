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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type {
  Column,
  Header,
  RowData,
  SortingState,
  Table,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import styles from "./TableHeader.module.css";
import { TableHeaderContent } from "./TableHeaderContent.js";
import { TableHeaderWithPopover } from "./TableHeaderWithPopover.js";
import { SELECTION_COLUMN_ID } from "./utils/constants.js";
import { getColumnPinningStyles } from "./utils/getColumnPinningStyles.js";
import type { ColumnOption } from "./utils/types.js";

interface TableHeaderProps<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  table: Table<TData>;
  onSortChange?: (sorting: SortingState) => void;
  onColumnVisibilityChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      isVisible: boolean;
    }>,
  ) => void;
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
    // Try to get header title from the renderHeader function
    if (header) {
      const displayedHeader = headerDef(header.getContext());
      if (typeof displayedHeader === "string") return displayedHeader;
    }
  }
  // Fallback to use the headerTitle provided by user or id
  const { meta } = columnDef;
  return meta?.headerTitle ?? id;
};

export function TableHeader<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  table,
  onSortChange,
  onColumnVisibilityChanged,
}: TableHeaderProps<TData, Q, RDPs, FunctionColumns>): React.ReactElement {
  // TODO: If value is number type, right align header

  const isResizing = !!table.getState().columnSizingInfo?.isResizingColumn;
  // Get column options for dialogs
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
                      onSortChange={onSortChange}
                      currentSorting={table.getState().sorting}
                      columnOptions={columnOptions}
                      onColumnVisibilityChanged={onColumnVisibilityChanged}
                      setColumnVisibility={table.setColumnVisibility}
                      currentVisibility={table.getState().columnVisibility}
                      setColumnOrder={table.setColumnOrder}
                      currentColumnOrder={table.getState().columnOrder}
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
