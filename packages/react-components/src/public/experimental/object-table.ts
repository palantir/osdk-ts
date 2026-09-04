/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type * as Api from "@osdk/api";
import type * as Table from "@tanstack/react-table";

import * as Stable from "../object-table.js";

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const ObjectTable: typeof Stable.ObjectTable = Stable.ObjectTable;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ColumnDefinition<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.ColumnDefinition<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ColumnDefinitionLocator<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.ColumnDefinitionLocator<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type CustomColumnLocator = Stable.CustomColumnLocator;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type EditFieldConfig<TData = unknown> = Stable.EditFieldConfig<TData>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type FunctionColumnLocator<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.FunctionColumnLocator<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type LoadedObjectsChange<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.LoadedObjectsChange<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableDataColumn = Stable.ObjectTableDataColumn;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableDataRow<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.ObjectTableDataRow<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableHandle<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.ObjectTableHandle<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.ObjectTableProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableSnapshot<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.ObjectTableSnapshot<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectTableSnapshotOptions = Stable.ObjectTableSnapshotOptions;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type PropertyColumnLocator<Q extends Api.ObjectOrInterfaceDefinition> =
  Stable.PropertyColumnLocator<Q>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type RdpColumnLocator<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.RdpColumnLocator<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type CellEditInfo<
  TData extends Table.RowData = unknown,
  CellValue = unknown,
> = Stable.CellEditInfo<TData, CellValue>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type BaseTableProps<TData extends Table.RowData> =
  Stable.BaseTableProps<TData>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const BaseTable: typeof Stable.BaseTable = Stable.BaseTable;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const ColumnConfigDialog: typeof Stable.ColumnConfigDialog =
  Stable.ColumnConfigDialog;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ColumnConfigDialogProps = Stable.ColumnConfigDialogProps;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ColumnConfigOptions = Stable.ColumnConfigOptions;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const MultiColumnSortDialog: typeof Stable.MultiColumnSortDialog =
  Stable.MultiColumnSortDialog;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type MultiColumnSortDialogProps = Stable.MultiColumnSortDialogProps;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type SortColumnItem = Stable.SortColumnItem;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const LoadingCell: typeof Stable.LoadingCell = Stable.LoadingCell;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const LoadingCellContent: typeof Stable.LoadingCellContent =
  Stable.LoadingCellContent;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type FunctionColumnData = Stable.FunctionColumnData;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useFunctionColumnsData: typeof Stable.useFunctionColumnsData =
  Stable.useFunctionColumnsData;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseFunctionColumnsDataProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.UseFunctionColumnsDataProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useObjectTableData: typeof Stable.useObjectTableData =
  Stable.useObjectTableData;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseObjectTableDataProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.UseObjectTableDataProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseObjectTableDataResult<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseObjectTableDataResult<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useColumnDefs: typeof Stable.useColumnDefs = Stable.useColumnDefs;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnDefsResult<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseColumnDefsResult<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useSelectionColumn: typeof Stable.useSelectionColumn =
  Stable.useSelectionColumn;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseSelectionColumnProps = Stable.UseSelectionColumnProps;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useColumnPinning: typeof Stable.useColumnPinning =
  Stable.useColumnPinning;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnPinningProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.UseColumnPinningProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnPinningResult = Stable.UseColumnPinningResult;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useColumnResize: typeof Stable.useColumnResize =
  Stable.useColumnResize;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnResizeProps = Stable.UseColumnResizeProps;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnResizeResult = Stable.UseColumnResizeResult;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useColumnVisibility: typeof Stable.useColumnVisibility =
  Stable.useColumnVisibility;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnVisibilityProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
  TData = unknown,
> = Stable.UseColumnVisibilityProps<Q, RDPs, FunctionColumns, TData>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseColumnVisibilityResult = Stable.UseColumnVisibilityResult;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useFocusedRow: typeof Stable.useFocusedRow = Stable.useFocusedRow;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseFocusedRowProps<TData> = Stable.UseFocusedRowProps<TData>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseFocusedRowResult<TData> = Stable.UseFocusedRowResult<TData>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useLoadedObjectsChanged: typeof Stable.useLoadedObjectsChanged =
  Stable.useLoadedObjectsChanged;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseLoadedObjectsChangedProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseLoadedObjectsChangedProps<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useRowSelection: typeof Stable.useRowSelection =
  Stable.useRowSelection;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseRowSelectionChange<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseRowSelectionChange<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseRowSelectionProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseRowSelectionProps<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseRowSelectionResult = Stable.UseRowSelectionResult;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useTableSorting: typeof Stable.useTableSorting =
  Stable.useTableSorting;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseTableSortingProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.UseTableSortingProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseTableSortingResult<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.UseTableSortingResult<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useEditableTable: typeof Stable.useEditableTable =
  Stable.useEditableTable;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseEditableTableProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = Stable.UseEditableTableProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useObjectTableSnapshot: typeof Stable.useObjectTableSnapshot =
  Stable.useObjectTableSnapshot;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseObjectTableSnapshotProps<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef>,
  FunctionColumns extends Record<string, Api.QueryDefinition<{}>>,
> = Stable.UseObjectTableSnapshotProps<Q, RDPs, FunctionColumns>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export const useCellContextMenu: typeof Stable.useCellContextMenu =
  Stable.useCellContextMenu;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseCellContextMenuProps = Stable.UseCellContextMenuProps;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type UseCellContextMenuResult = Stable.UseCellContextMenuResult;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type PopoverPosition = Stable.PopoverPosition;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type ObjectSetOptions<Q extends Api.ObjectOrInterfaceDefinition> =
  Stable.ObjectSetOptions<Q>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type RowSelectionChange<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.RowSelectionChange<Q, RDPs>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type AsyncCellData = Stable.AsyncCellData;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type EditableConfig<
  TData extends Table.RowData = unknown,
  CellValue = unknown,
> = Stable.EditableConfig<TData, CellValue>;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type EditModeState = Stable.EditModeState;

/** @deprecated Import from `@osdk/react-components/object-table` instead. */
export type OrderBy<
  Q extends Api.ObjectOrInterfaceDefinition,
  RDPs extends Record<string, Api.SimplePropertyDef> = {},
> = Stable.OrderBy<Q, RDPs>;
