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

// ObjectTable that loads and displays data for a given objectSet
import { ObjectTable as _ObjectTable } from "../../object-table/ObjectTable.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const ObjectTable: typeof _ObjectTable = withOsdkMetrics(
  _ObjectTable,
  "ObjectTable"
);
export type {
  ColumnDefinition,
  ColumnDefinitionLocator,
  CustomColumnLocator,
  EditFieldConfig,
  FunctionColumnLocator,
  ObjectTableDataColumn,
  ObjectTableDataRow,
  ObjectTableHandle,
  ObjectTableProps,
  ObjectTableSnapshot,
  ObjectTableSnapshotOptions,
  PropertyColumnLocator,
  RdpColumnLocator,
} from "../../object-table/ObjectTableApi.js";
export type { CellEditInfo } from "../../object-table/utils/types.js";

// BaseTable that does not handle data fetching
export type { BaseTableProps } from "../../object-table/Table.js";
export { BaseTable } from "../../object-table/Table.js";

export { ColumnConfigDialog } from "../../object-table/ColumnConfigDialog.js";
export type {
  ColumnConfigDialogProps,
  ColumnConfigOptions,
} from "../../object-table/ColumnConfigDialog.js";

export { MultiColumnSortDialog } from "../../object-table/MultiColumnSortDialog.js";
export type {
  MultiColumnSortDialogProps,
  SortColumnItem,
} from "../../object-table/MultiColumnSortDialog.js";

// Loading cell components for custom column renderers.
// Use `LoadingCell` when rendering a full `<td>` element (e.g. in a custom row renderer).
// Use `LoadingCellContent` when rendering just the skeleton content inside an existing cell.
export {
  LoadingCell,
  LoadingCellContent,
} from "../../object-table/LoadingCell.js";

// Headless hooks — the building blocks `ObjectTable` composes internally.
// Feed their outputs into your own TanStack `useReactTable` instance (from
// `@osdk/react-components`'s `@tanstack/react-table` peer dependency) to build a
// fully custom table while keeping OSDK data fetching, sorting, selection,
// editing, and snapshot behavior. See the "Headless Hooks" section in
// `docs/ObjectTable.md` for a worked example.

// Data loading (OSDK-aware)
export {
  type FunctionColumnData,
  useFunctionColumnsData,
  type UseFunctionColumnsDataProps,
} from "../../object-table/hooks/useFunctionColumnsData.js";
export {
  useObjectTableData,
  type UseObjectTableDataProps,
  type UseObjectTableDataResult,
} from "../../object-table/hooks/useObjectTableData.js";

// Column definitions
export {
  useColumnDefs,
  type UseColumnDefsResult,
} from "../../object-table/hooks/useColumnDefs.js";
export {
  useSelectionColumn,
  type UseSelectionColumnProps,
} from "../../object-table/hooks/useSelectionColumn.js";

// Column state
export {
  useColumnPinning,
  type UseColumnPinningProps,
  type UseColumnPinningResult,
} from "../../object-table/hooks/useColumnPinning.js";
export {
  useColumnResize,
  type UseColumnResizeProps,
  type UseColumnResizeResult,
} from "../../object-table/hooks/useColumnResize.js";
export {
  useColumnVisibility,
  type UseColumnVisibilityProps,
  type UseColumnVisibilityResult,
} from "../../object-table/hooks/useColumnVisibility.js";

// Row state
export {
  useFocusedRow,
  type UseFocusedRowProps,
  type UseFocusedRowResult,
} from "../../object-table/hooks/useFocusedRow.js";
export {
  useRowSelection,
  type UseRowSelectionChange,
  type UseRowSelectionProps,
  type UseRowSelectionResult,
} from "../../object-table/hooks/useRowSelection.js";

// Sorting
export {
  useTableSorting,
  type UseTableSortingProps,
  type UseTableSortingResult,
} from "../../object-table/hooks/useTableSorting.js";

// Editing
export {
  useEditableTable,
  type UseEditableTableProps,
} from "../../object-table/hooks/useEditableTable.js";

// Snapshot / export
export {
  useObjectTableSnapshot,
  type UseObjectTableSnapshotProps,
} from "../../object-table/hooks/useObjectTableSnapshot.js";

// Cell context menu
export {
  useCellContextMenu,
  type UseCellContextMenuProps,
  type UseCellContextMenuResult,
} from "../../object-table/hooks/useCellContextMenu.js";

// Supporting types referenced by the hook signatures above
export type { PopoverPosition } from "../../object-table/hooks/useCellContextMenu.js";
export type {
  ObjectSetOptions,
  RowSelectionChange,
} from "../../object-table/ObjectTableApi.js";
export type { AsyncCellData } from "../../object-table/utils/AsyncCellData.js";
export type {
  EditableConfig,
  EditModeState,
  OrderBy,
} from "../../object-table/utils/types.js";
