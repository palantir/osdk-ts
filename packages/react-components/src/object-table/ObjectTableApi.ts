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
  CompileTimeMetadata,
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { QueryParameterType } from "@osdk/client/unstable-do-not-use";
import type * as React from "react";
import type { CellEditInfo, EditFieldConfig } from "./utils/types.js";

export type {
  DatePickerEditConfig,
  DropdownEditConfig,
  EditFieldConfig,
} from "./utils/types.js";

export type ColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> =
  | EditableColumnDefinition<Q, RDPs, FunctionColumns>
  | ReadonlyColumnDefinition<Q, RDPs, FunctionColumns>;

interface SharedColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  locator: ColumnDefinitionLocator<Q, RDPs, FunctionColumns>;

  /**
   * @default true
   */
  isVisible?: boolean;

  /**
   * @default none
   */
  pinned?: "left" | "right" | "none";
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  resizable?: boolean;
  orderable?: boolean;
  filterable?: boolean;

  renderCell?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    locator: ColumnDefinitionLocator<Q, RDPs, FunctionColumns>,
  ) => React.ReactNode;

  /**
   * If provided, this will be used in the column header.
   * If both columnName and renderHeader are provided, renderHeader will take precedence in the table header.
   * columnName will still be used in other parts where the column name is displayed.
   *
   * If not provided,
   * for a property column, the property displayName will be used
   * for other columns, the id will be used.
   */
  columnName?: string;

  /**
   * If provided, this will be used to render the header component.
   * When both columnName and renderHeader are provided, renderHeader will take precedence in the table header.
   */
  renderHeader?: () => React.ReactNode;
}

/**
 * Column definition for an editable column. Setting `editable: true`
 * unlocks `editFieldConfig` and `validateEdit`.
 */
interface EditableColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> extends SharedColumnDefinition<Q, RDPs, FunctionColumns> {
  editable: true;

  /**
   * Configuration for the cell editor component.
   *
   * When provided, the column uses the specified field component
   * (e.g. dropdown) instead of the default auto-detected text/number input.
   */
  editFieldConfig?: EditFieldConfig;

  /**
   * Additional function to validate the cell value during edit.
   *
   * @param value the current cell value
   * @returns a promise that resolves to an error message string if validation fails, or undefined if validation succeeds
   */
  validateEdit?: (
    value: unknown,
  ) => Promise<string | undefined>;
}

/**
 * Column definition for a read-only column (default).
 * `editFieldConfig` and `validateEdit` are not available.
 */
interface ReadonlyColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> extends SharedColumnDefinition<Q, RDPs, FunctionColumns> {
  editable?: false;
}

export type ExtractQueryParameters<
  Q extends QueryDefinition,
> = CompileTimeMetadata<Q>["parameters"] extends Record<string, never>
  ? undefined
  : QueryParameterType<CompileTimeMetadata<Q>["parameters"]>;

export interface PropertyColumnLocator<Q extends ObjectOrInterfaceDefinition> {
  type: "property";
  id: PropertyKeys<Q>;
}

export interface FunctionColumnLocator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  /**
   * This is equivalent to workshop's function-backed columns.
   * The function needs to meet the specifications stated in https://www.palantir.com/docs/foundry/workshop/widgets-object-table/#function-backed-columns
   */
  type: "function";
  id: keyof FunctionColumns;
  queryDefinition: FunctionColumns[keyof FunctionColumns];

  /**
   * The function will be called with the current object set to get the input parameters for the function query.
   * @param objectSet - The current object set.
   * @returns - The function's input parameters including the object set.
   */
  getFunctionParams: (
    objectSet: ObjectSet<Q, RDPs>,
  ) => ExtractQueryParameters<FunctionColumns[keyof FunctionColumns]>;

  /**
   * Function to generate keys for looking up results in the FunctionsMap.
   * @param object - The object instance
   * @returns - The key to use for looking up this object's result in the FunctionsMap
   */
  getKey: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  ) => string;

  /**
   * Function to extract the cell value from the raw cell data returned by the function.
   * This is useful when functions return custom types with multiple properties.
   * @param cellData - The raw data returned by the function for this object
   * @returns - The value to display in the cell
   */
  getValue?: (cellData?: unknown) => unknown;

  /**
   * Minimum time between re-fetches of the same function with the same parameters, in milliseconds.
   * Defaults to 5 minutes as it is expensive to fetch function columns for a large object set
   * and they are expected to be relatively static in the context of an object table
   *
   * @default 300_000 (5 minutes)
   */
  dedupeIntervalMs?: number;
}

export interface RdpColumnLocator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  type: "rdp";
  id: keyof RDPs;
  creator: DerivedProperty.Creator<Q, RDPs[keyof RDPs]>;
}

export interface CustomColumnLocator {
  type: "custom";
  id: string;
}

export type ColumnDefinitionLocator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> =
  | PropertyColumnLocator<Q>
  | FunctionColumnLocator<Q, RDPs, FunctionColumns>
  | RdpColumnLocator<Q, RDPs>
  | CustomColumnLocator;

export interface ObjectTableProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  /**
   * The object or interface type of the object
   * If objectSet is not provided, objects will be fetched based on this type.
   */
  objectType: Q;

  /**
   * The set of objects to show in the table.
   * If provided and the objectType is not an interface, the table will use objectSet to fetch objects instead of fetching based on objectType.
   */
  objectSet?: ObjectSet<Q>;

  objectSetOptions?: ObjectSetOptions<Q>;

  /**
   * Minimum time between fetch requests in milliseconds.
   * Increasing this value reduces redundant network calls when the same data
   * is requested multiple times in quick succession.
   *
   * @default 60_000 1 minute
   */
  dedupeIntervalMs?: number;

  /**
   * Number of objects to fetch per page.
   *
   * @default 50
   */
  pageSize?: number;

  /**
   * Ordered list of column definitions to show in the table
   *
   * If not provided, all of the properties of the object type will be shown in default order.
   */
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>;

  /**
   * Whether the table is filterable by the user.
   *
   * @default true
   */
  enableFiltering?: boolean;

  /**
   * The current where clause to filter the objects in the table.
   * If provided, the filter is controlled.
   */
  filter?: WhereClause<Q, RDPs>;

  /**
   * Called when the where clause is changed.
   * Required when filter is controlled.
   *
   * @param newWhere The new where clause
   */
  onFilterChanged?: (newWhere: WhereClause<Q, RDPs>) => void;

  /**
   * Whether the table is sortable by the user.
   *
   * @default true
   */
  enableOrdering?: boolean;

  /**
   * Whether columns can be pinned by the user.
   *
   * @default true
   */
  enableColumnPinning?: boolean;

  /**
   * Whether columns can be resized by the user.
   *
   * @default true
   */
  enableColumnResizing?: boolean;

  /**
   * Whether the column configuration dialog for column visibility and ordering is available to the user.
   *
   * @default true
   */
  enableColumnConfig?: boolean;

  /**
   * Controls the edit mode behavior of the table.
   * - "always": Editable cells are immediately in edit mode on row clicked.
   * - "manual": User can toggle edit mode on/off via the Edit Table button.
   *
   * @default "manual"
   */
  editMode?: "always" | "manual";

  /**
   * The default order by clause to sort the objects in the table.
   * If provided without orderBy prop, the sorting is uncontrolled.
   * If both orderBy and defaultOrderBy are provided, orderBy takes precedence.
   */
  defaultOrderBy?: Array<{
    property: PropertyKeys<Q>;
    direction: "asc" | "desc";
  }>;

  /**
   * The current order by clause to sort the objects in the table.
   * If provided, the sorting is controlled.
   * If both orderBy and defaultOrderBy are provided, orderBy takes precedence.
   */
  orderBy?: Array<{
    property: PropertyKeys<Q>;
    direction: "asc" | "desc";
  }>;

  /**
   * Called when the order by clause is changed.
   * Required when sorting is controlled.
   *
   * @param newOrderBy The new order by clause
   */
  onOrderByChanged?: (
    newOrderBy: Array<{
      property: PropertyKeys<Q>;
      direction: "asc" | "desc";
    }>,
  ) => void;

  /**
   * Called after the value of a cell is edited and committed by the user.
   *
   * @param info An object containing details about the cell that was edited,
   * including the rowId, columnId, new and old values, and the row data before the edit
   */
  onCellValueChanged?: (
    info: CellEditInfo<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
      unknown
    >,
  ) => void;

  /**
   * If provided, the button Submit Edits will be shown in the table
   *
   * @param edits an array of edit info containing details about the edited cells
   * including the rowId, columnId, new and old values, and the row data before the edit
   * @return a promise that resolves to true if the edits were successfully submitted
   */
  onSubmitEdits?: (edits: CellEditInfo<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    unknown
  >[]) => Promise<boolean>;

  /**
   * Called when the column visibility or ordering changed.
   *
   * If provided, the table will allow the user to show/hide columns.
   *
   * @param newStates The columns sorted in their display order in the table and their visibility state.
   */
  onColumnVisibilityChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      isVisible: boolean;
    }>,
  ) => void;

  /**
   * Called when the pinned columns change.
   *
   * If provided, the table will allow the user to pin/unpin columns.
   *
   * @param newStates The new list of column pin states
   */
  onColumnsPinnedChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      pinned: "left" | "right" | "none";
    }>,
  ) => void;

  /**
   * Called when a column is resized.
   *
   * @param columnId The ID of the resized column
   * @param newWidth The new width of the column. When newWidth = null, the column size is reset.
   */
  onColumnResize?: (
    columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns,
    newWidth: number | null,
  ) => void;

  /**
   * Called when a row is clicked.
   *
   * @param object The object representing the clicked row
   */
  onRowClick?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  ) => void;

  /**
   * Selection mode for the table rows.
   *
   * If multiple, a checkbox will be shown for each row to allow selecting multiple rows
   * as well as a top-level checkbox in the header to select all rows.
   *
   * @default "none"
   */
  selectionMode?: "single" | "multiple" | "none";

  /**
   * The currently selected rows in the table.
   * If provided, the row selection is controlled.
   */
  selectedRows?: PrimaryKeyType<Q>[];

  /**
   * Indicates whether all rows are selected in controlled mode.
   * When true, the table will show all rows as selected regardless of the selectedRows array.
   */
  isAllSelected?: boolean;

  /**
   * Called when the row selection changes.
   * Required when row selection is controlled.
   *
   * @param selectedRowIds The primary keys of currently selected rows
   * @param isSelectAll Whether the change was triggered by a "select all" action. Defaults to false
   */
  onRowSelection?: (
    selectedRowIds: PrimaryKeyType<Q>[],
    isSelectAll?: boolean,
  ) => void;
  /**
   * If provided, will render this context menu when right clicking on a cell
   */
  renderCellContextMenu?: (
    row: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    cellValue: unknown,
  ) => React.ReactNode;

  /**
   * The height of each row in pixels.
   *
   * @default 40
   */
  rowHeight?: number;

  className?: string;
}

export interface ObjectSetOptions<
  Q extends ObjectOrInterfaceDefinition,
> {
  /**
   * Object sets to union with
   */
  union?: ObjectSet<Q>[];

  /**
   * Object sets to intersect with
   */
  intersect?: ObjectSet<Q>[];

  /**
   * Object sets to subtract from
   */
  subtract?: ObjectSet<Q>[];
}
