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
import type {
  Cell,
  ColumnSizingState,
  SortingState,
} from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useCallback, useMemo, useState } from "react";
import { useColumnDefs } from "./hooks/useColumnDefs.js";
import { useColumnPinning } from "./hooks/useColumnPinning.js";
import { useColumnVisibility } from "./hooks/useColumnVisibility.js";
import { useObjectTableData } from "./hooks/useObjectTableData.js";
import { useRowSelection } from "./hooks/useRowSelection.js";
import { useSelectionColumn } from "./hooks/useSelectionColumn.js";
import type { ObjectTableProps } from "./ObjectTableApi.js";
import { Table } from "./Table.js";
import { getRowId } from "./utils/getRowId.js";

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
  filter,
  onRowSelection,
  renderCellContextMenu,
  selectionMode = "none",
  selectedRows,
  ...props
}: ObjectTableProps<Q, RDPs, FunctionColumns>): React.ReactElement {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

  const { data, fetchMore, isLoading } = useObjectTableData<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectSet,
    columnDefinitions,
    filter,
    sorting,
  );

  const { columns, loading: isColumnsLoading } = useColumnDefs<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectType,
    columnDefinitions,
  );

  const columnVisibility = useColumnVisibility({ columnDefinitions });

  const {
    rowSelection,
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
  } = useRowSelection<Q, RDPs>({
    selectionMode,
    selectedRows,
    onRowSelection,
    data,
  });

  const selectionColumn = useSelectionColumn<Q, RDPs>(
    { selectionMode, isAllSelected, hasSelection, onToggleAll, onToggleRow },
  );

  const allColumns = useMemo(() => {
    return selectionColumn ? [selectionColumn, ...columns] : columns;
  }, [selectionColumn, columns]);

  const [columnPinning, setColumnPinning] = useColumnPinning({
    columnDefinitions,
    hasSelectionColumn: selectionColumn != null,
  });

  const table = useReactTable<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >({
    data: data ?? [],
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      rowSelection,
      sorting,
      columnSizing,
      columnPinning,
    },
    onSortingChange: setSorting,
    onColumnSizingChange: setColumnSizing,
    onColumnPinningChange: setColumnPinning,
    enableRowSelection: selectionMode !== "none",
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    manualSorting: true, // Enable manual sorting to indicate server-side sorting
    defaultColumn: {
      minSize: 80,
    },
    getRowId,
  });

  const onRenderCellContextMenu = useCallback(
    (
      row: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
      cell: Cell<
        Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
        unknown
      >,
    ) => {
      return renderCellContextMenu?.(row, cell.getValue());
    },
    [renderCellContextMenu],
  );

  const isTableLoading = isLoading || isColumnsLoading;

  return (
    <Table
      table={table}
      isLoading={isTableLoading}
      fetchNextPage={fetchMore}
      onRowClick={props.onRowClick}
      rowHeight={props.rowHeight}
      renderCellContextMenu={onRenderCellContextMenu}
    />
  );
}
