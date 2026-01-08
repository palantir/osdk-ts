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
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useMemo } from "react";
import { useColumnDefs } from "./hooks/useColumnDefs.js";
import { useDefaultTableStates } from "./hooks/useDefaultTableStates.js";
import { useObjectTableData } from "./hooks/useObjectTableData.js";
import { useRowSelection } from "./hooks/useRowSelection.js";
import type { ObjectTableProps } from "./ObjectTableApi.js";
import { SelectionCell, SelectionHeaderCell } from "./SelectionCells.js";
import { Table } from "./Table.js";

/**
 * ObjectTable - A headless table component for displaying OSDK object sets
 *
 * @example
 * ```tsx
 * <ObjectTable objectSet={myObjectSet} objectType={MyObjectType} />
 * ```
 */

export function ObjectTable<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  objectSet,
  objectType,
  columnDefinitions,
  onRowClick,
  rowHeight,
  selectionMode = "none",
  selectedRows,
  onRowSelection,
}: ObjectTableProps<Q, RDPs, FunctionColumns>): React.ReactElement {
  const { data, fetchMore, isLoading } = useObjectTableData<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectSet,
    columnDefinitions,
  );

  const { columns, loading: isColumnsLoading } = useColumnDefs<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectType,
    columnDefinitions,
  );

  const { columnVisibility } = useDefaultTableStates({ columnDefinitions });

  const {
    rowSelection,
    onRowSelectionChange,
    isAllSelected,
    hasSelection,
    lastSelectedRowIndex,
    setLastSelectedRowIndex,
    onToggleAll,
    onToggleRow,
  } = useRowSelection<Q, RDPs>({
    selectionMode,
    selectedRows,
    onRowSelection,
    data,
  });

  const selectionColumn = useMemo(() => {
    if (selectionMode === "none") return null;

    return {
      id: "__selection__",
      header: () => (
        selectionMode === "multiple"
          ? (
            <SelectionHeaderCell
              isAllSelected={isAllSelected}
              hasSelection={hasSelection}
              onToggleAll={onToggleAll}
            />
          )
          : null
      ),
      cell: ({ row, table }: { row: any; table: any }) => (
        <SelectionCell
          row={row}
          table={table}
          onToggleRow={onToggleRow}
          lastSelectedRowIndex={lastSelectedRowIndex}
          setLastSelectedRowIndex={setLastSelectedRowIndex}
        />
      ),
      size: 50,
      minSize: 50,
      maxSize: 50,
      enableSorting: false,
      enableResizing: false,
      enablePinning: true,
    };
  }, [
    selectionMode,
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
    lastSelectedRowIndex,
    setLastSelectedRowIndex,
  ]);

  const allColumns = useMemo(() => {
    return selectionColumn ? [selectionColumn, ...columns] : columns;
  }, [selectionColumn, columns]);

  const table = useReactTable<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >({
    data: data ?? [],
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      rowSelection,
    },
    onRowSelectionChange,
    enableRowSelection: selectionMode !== "none",
    getRowId: (row) => row.$primaryKey.toString(),
  });

  const isTableLoading = isLoading || isColumnsLoading;

  return (
    <Table
      table={table}
      isLoading={isTableLoading}
      fetchNextPage={fetchMore}
      onRowClick={onRowClick}
      rowHeight={rowHeight}
    />
  );
}
