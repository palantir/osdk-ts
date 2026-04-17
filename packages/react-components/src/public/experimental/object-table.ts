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
export { ObjectTable } from "../../object-table/ObjectTable.js";
export type {
  ColumnDefinition,
  ColumnDefinitionLocator,
  CustomColumnLocator,
  DatePickerEditConfig,
  DropdownEditConfig,
  EditFieldConfig,
  FunctionColumnLocator,
  ObjectTableProps,
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
