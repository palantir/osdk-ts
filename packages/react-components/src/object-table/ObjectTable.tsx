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
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { Cell } from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useCallback, useMemo } from "react";
import { useColumnDefs } from "./hooks/useColumnDefs.js";
import { useColumnPinning } from "./hooks/useColumnPinning.js";
import { useColumnResize } from "./hooks/useColumnResize.js";
import { useColumnVisibility } from "./hooks/useColumnVisibility.js";
import { useEditableTable } from "./hooks/useEditableTable.js";
import { useObjectTableData } from "./hooks/useObjectTableData.js";
import { useRowSelection } from "./hooks/useRowSelection.js";
import { useSelectionColumn } from "./hooks/useSelectionColumn.js";
import { useTableSorting } from "./hooks/useTableSorting.js";
import type { ObjectTableProps } from "./ObjectTableApi.js";
import { BaseTable } from "./Table.js";
import type { HeaderMenuFeatureFlags } from "./TableHeaderWithPopover.js";
import { getRowId } from "./utils/getRowId.js";

/**
 * ObjectTable - A headless table component for displaying OSDK object sets
 *
 * @example
 * ```tsx
 * <ObjectTable objectType={MyObjectType} />
 * ```
 */

export function ObjectTable<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  objectType,
  columnDefinitions,
  filter,
  orderBy,
  defaultOrderBy,
  onOrderByChanged,
  onColumnsPinnedChanged,
  onColumnResize,
  onRowSelection,
  renderCellContextMenu,
  selectionMode = "none",
  selectedRows,
  onColumnVisibilityChanged,
  onCellValueChanged,
  onSubmitEdits,
  enableOrdering = true,
  enableColumnPinning = true,
  enableColumnResizing = true,
  enableColumnConfig = true,
  ...props
}: ObjectTableProps<Q, RDPs, FunctionColumns>): React.ReactElement {
  const { columnSizing, onColumnSizingChange } = useColumnResize({
    onColumnResize,
  });

  const {
    cellEdits,
    clearEdits,
    handleCellEdit,
    handleSubmitEdits,
  } = useEditableTable({
    onCellValueChanged,
    onSubmitEdits,
  });

  const { sorting, onSortingChange } = useTableSorting<
    Q,
    RDPs,
    FunctionColumns
  >(
    {
      orderBy,
      defaultOrderBy,
      onOrderByChanged,
    },
  );

  const { data, fetchMore, isLoading, error } = useObjectTableData<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectType,
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

  const {
    rowSelection,
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
    enableRowSelection,
  } = useRowSelection<Q, RDPs>({
    selectionMode,
    selectedRows,
    onRowSelection,
    data,
  });

  const selectionColumn = useSelectionColumn<Q, RDPs>(
    { selectionMode, isAllSelected, hasSelection, onToggleAll, onToggleRow },
  );

  const {
    columnVisibility,
    onColumnVisibilityChange,
    columnOrder,
    onColumnOrderChange,
  } = useColumnVisibility({
    allColumns: columns,
    onColumnVisibilityChanged,
  });

  const { columnPinning, onColumnPinningChange } = useColumnPinning({
    columnDefinitions,
    hasSelectionColumn: enableRowSelection,
    onColumnsPinnedChanged,
  });

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
      columnOrder,
      rowSelection,
      sorting,
      columnSizing,
      columnPinning,
    },
    onSortingChange,
    onColumnSizingChange,
    onColumnPinningChange,
    onColumnVisibilityChange,
    onColumnOrderChange,
    enableRowSelection,
    enableSorting: enableOrdering,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    manualSorting: true, // Enable manual sorting to indicate server-side sorting
    defaultColumn: {
      minSize: 80,
    },
    getRowId,
    meta: {
      onCellEdit: handleCellEdit,
      cellEdits,
    },
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

  const headerMenuFeatureFlags: HeaderMenuFeatureFlags = useMemo(() => ({
    showSortingItems: enableOrdering,
    showPinningItems: enableColumnPinning,
    showResizeItem: enableColumnResizing,
    showConfigItem: enableColumnConfig,
  }), [
    enableOrdering,
    enableColumnPinning,
    enableColumnResizing,
    enableColumnConfig,
  ]);

  const editableConfig = useMemo(() => {
    if (!onSubmitEdits) {
      return;
    }

    return {
      onSubmitEdits: handleSubmitEdits,
      clearEdits,
      cellEdits,
    };
  }, [onSubmitEdits, handleSubmitEdits, clearEdits, cellEdits]);

  return (
    <BaseTable<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>
      table={table}
      isLoading={isTableLoading}
      fetchNextPage={fetchMore}
      onRowClick={props.onRowClick}
      rowHeight={props.rowHeight}
      renderCellContextMenu={onRenderCellContextMenu}
      className={props.className}
      error={error}
      headerMenuFeatureFlags={headerMenuFeatureFlags}
      editableConfig={editableConfig}
    />
  );
}
