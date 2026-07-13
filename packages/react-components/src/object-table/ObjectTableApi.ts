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
import type { QueryParameterType } from "@osdk/client/observable";
import type * as React from "react";

import type { CellEditInfo, EditFieldConfig } from "./utils/types.js";

export type { EditFieldConfig } from "./utils/types.js";

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
  /**
   * Defines what the column shows:
   * an object/interface property, a linked object property (derived property), a function
   * column, or a custom column — and carries that locator's configuration.
   */
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

  /**
   * Custom renderer for the cell value.
   *
   * Interaction with `editable` columns:
   * - When `editMode: "manual"` (default), `renderCell` is used while the
   *   table is read-only (Edit Table button visible) and the editable cell
   *   takes over once the user enters edit mode.
   * - When `editMode: "always"`, the editable cell always wins on editable
   *   columns and `renderCell` is ignored — `editMode: "always"` opts the
   *   column into a permanently-editable surface, leaving no read-only
   *   state for `renderCell` to render. Use `editMode: "manual"` if you
   *   need a custom display alongside editing.
   */
  renderCell?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    locator: ColumnDefinitionLocator<Q, RDPs, FunctionColumns>
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

interface EditableColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> extends SharedColumnDefinition<Q, RDPs, FunctionColumns> {
  /**
   * `editable` can be a boolean or a predicate that receives the row's object
   * and returns whether the cell is editable
   */
  editable:
    | true
    | ((
        object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
      ) => boolean);

  /**
   * Configuration for the cell editor component.
   *
   * When provided, the column uses the specified field component
   * (e.g. dropdown) instead of the default auto-detected text/number input.
   *
   * `getFieldComponentProps` receives the row's object and a map of any
   * pending edits for that row (keyed by column id), and returns the props to
   * pass to the field component. Editor configuration can depend on the
   * current row or on other in-progress edits within the row.
   */
  editFieldConfig?: EditFieldConfig<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >;

  /**
   * Additional function to validate the cell value during edit.
   *
   * @param value the current cell value
   * @returns a promise that resolves to an error message string if validation fails, or undefined if validation succeeds
   */
  validateEdit?: (value: unknown) => Promise<string | undefined>;
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

export type ExtractQueryParameters<Q extends QueryDefinition> =
  CompileTimeMetadata<Q>["parameters"] extends Record<string, never>
    ? undefined
    : QueryParameterType<CompileTimeMetadata<Q>["parameters"]>;

export interface PropertyColumnLocator<Q extends ObjectOrInterfaceDefinition> {
  type: "property";
  id: PropertyKeys<Q>;
}

/**
 * Concrete function column locator for a single key K.
 * Correlates the id, queryDefinition, and getFunctionParams types.
 */
interface FunctionColumnLocatorForKey<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
  K extends keyof FunctionColumns,
> {
  /**
   * This is equivalent to workshop's function-backed columns.
   * The function needs to meet the specifications stated in https://www.palantir.com/docs/foundry/workshop/widgets-object-table/#function-backed-columns
   */
  type: "function";
  id: K;
  queryDefinition: FunctionColumns[K];

  /**
   * The function will be called with the current object set to get the input parameters for the function query.
   * @param objectSet - The current object set.
   * @returns - The function's input parameters including the object set.
   */
  getFunctionParams: (
    objectSet: ObjectSet<Q, RDPs>
  ) => ExtractQueryParameters<FunctionColumns[K]>;

  /**
   * Function to generate keys for looking up results in the FunctionsMap.
   * @param object - The object instance
   * @returns - The key to use for looking up this object's result in the FunctionsMap
   */
  getKey: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
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

  /**
   * Object type apiNames the function reads but doesn't take as a parameter (e.g.
   * linked object types the function traverses internally). The column auto-revalidates
   * when an action edits an object of any of these types. Param-derived types are
   * tracked automatically and don't need to be listed here.
   */
  dependsOn?: string[];
}

/**
 * Distributes over each key in FunctionColumns so that id, queryDefinition,
 * and getFunctionParams are correlated per key.
 */
export type FunctionColumnLocator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = keyof FunctionColumns extends infer K
  ? K extends keyof FunctionColumns
    ? FunctionColumnLocatorForKey<Q, RDPs, FunctionColumns, K>
    : never
  : never;

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
   * If provided, the table fetches through this object set instead of fetching based on
   * objectType. Supported for both object and interface types.
   *
   * For an interface object set, rows expose the interface's declared properties (plus any
   * `withProperties` derived from `rdp` column locators); the underlying concrete object's
   * non-interface properties are not loaded. Use objectType-based fetching if you need those.
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
   * Enable streaming updates via websocket subscription.
   * When true, the table will automatically update when matching
   * objects are added, updated, or removed in Foundry.
   *
   * Limitations: `streamUpdates` cannot be used together with `pivotTo` or
   * `withProperties`. The server does not support websocket subscriptions
   * for link-traversal or derived-property queries. Those queries still
   * fetch data normally but won't receive real-time updates.
   *
   * @default false
   */
  streamUpdates?: boolean;

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
   * Whether to render the bottom edit footer that hosts the
   * "Edit Table" / "Cancel" / "Submit Edits" buttons and the edit-state
   * indicators (modification count, validation errors).
   *
   * @default true whenever the table has at least one column declared
   * editable (i.e. any column with `editable: true` or `editable: (object) => boolean`).
   * When `false`, the "Edit Table" and "Submit Edits" buttons will not be shown.
   */
  showEditFooter?: boolean;

  /**
   * The default order by clause to sort the objects in the table.
   * If provided without orderBy prop, the sorting is uncontrolled.
   * If both orderBy and defaultOrderBy are provided, orderBy takes precedence.
   */
  defaultOrderBy?: Array<{
    property: PropertyKeys<Q> | keyof RDPs;
    direction: "asc" | "desc";
  }>;

  /**
   * The current order by clause to sort the objects in the table.
   * If provided, the sorting is controlled.
   * If both orderBy and defaultOrderBy are provided, orderBy takes precedence.
   */
  orderBy?: Array<{
    property: PropertyKeys<Q> | keyof RDPs;
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
      property: PropertyKeys<Q> | keyof RDPs;
      direction: "asc" | "desc";
    }>
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
    >
  ) => void;

  /**
   * If provided, the "Submit Edits" button will be shown in the edit footer.
   *
   * @param edits an array of edit info containing details about the edited cells
   * including the rowId, columnId, new and old values, and the row data before the edit
   * @return a promise that resolves to true if the edits were successfully submitted
   */
  onSubmitEdits?: (
    edits: CellEditInfo<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
      unknown
    >[]
  ) => Promise<boolean>;

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
    }>
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
    }>
  ) => void;

  /**
   * Called when a column is resized.
   *
   * @param columnId The ID of the resized column
   * @param newWidth The new width of the column. When newWidth = null, the column size is reset.
   */
  onColumnResize?: (
    columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns,
    newWidth: number | null
  ) => void;

  /**
   * Called when a row is clicked.
   *
   * @param object The object representing the clicked row
   */
  onRowClick?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  ) => void;

  /**
   * The primary key of the row to render as visually focused (the
   * "last interacted" row). When provided, focus state is controlled by
   * the caller.
   *
   * Stored as a primary key rather than a full object so the focus does
   * not go stale when the underlying row data changes.
   *
   * Pass `null` to render no row as focused.
   */
  focusedRow?: PrimaryKeyType<Q> | null;

  /**
   * Called when the focused row changes — fires in both controlled and
   * uncontrolled modes so callers can observe focus without taking it
   * over.
   *
   * @param row The newly-focused row object, or `null` if focus was
   * cleared
   */
  onFocusedRowChanged?: (
    row: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs> | null
  ) => void;

  /**
   * Called when a column header is clicked.
   *
   * The columnId matches the `locator.id` configured on the column definition.
   * The dropdown menu trigger is excluded — clicking the chevron opens the
   * header menu instead of firing this callback.
   *
   * @param columnId The id of the clicked column
   */
  onColumnHeaderClick?: (
    columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns
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
   *
   * @deprecated Use {@link onRowSelectionChanged} instead. The new callback
   * delivers a {@link RowSelectionChange} object with `selectedRows`,
   * `isSelectAll`, and a derived `objectSet`. This legacy callback
   * continues to fire alongside the new one for backwards compatibility.
   *
   * @param selectedRowIds The primary keys of currently selected rows
   * @param isSelectAll Whether the change was triggered by a "select all" action. Defaults to false
   */
  onRowSelection?: (
    selectedRowIds: PrimaryKeyType<Q>[],
    isSelectAll?: boolean
  ) => void;

  /**
   * Called when the row selection changes, with a {@link RowSelectionChange}
   * payload describing the new state.
   *
   * @param change The new selection state. See {@link RowSelectionChange}.
   */
  onRowSelectionChanged?: (change: RowSelectionChange<Q, RDPs>) => void;
  /**
   * If provided, will render this context menu when right clicking on a cell
   */
  renderCellContextMenu?: (
    row: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    cellValue: unknown
  ) => React.ReactNode;

  /**
   * Render override for the empty state. Called when the table has no
   * rows and no error. When omitted, a default "No Data" indicator is
   * rendered.
   */
  renderEmptyState?: () => React.ReactNode;

  /**
   * The height of each row in pixels.
   *
   * @default 40
   */
  rowHeight?: number;

  /**
   * Returns extra HTML attributes (typically `data-*`) to apply to each
   * row element. Use this to drive conditional row styling
   */
  getRowAttributes?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  ) => Record<string, string | undefined>;

  /**
   * Imperative handle for programmatic table actions. Pass a ref
   * (`useRef<ObjectTableHandle<Q, RDPs>>(null)`) to call
   * {@link ObjectTableHandle} methods such as
   * {@link ObjectTableHandle.getSnapshot}.
   */
  tableRef?: React.Ref<ObjectTableHandle<Q, RDPs>>;

  className?: string;
}

/**
 * Imperative handle exposing programmatic actions on an {@link ObjectTable}.
 * Obtain it by passing {@link ObjectTableProps.tableRef}.
 */
export interface ObjectTableHandle<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  /**
   * Loads every row matching the object set and returns a format-agnostic
   * snapshot of the table's columns, row values, and total count. The caller
   * is responsible for turning the snapshot into a downloadable artifact
   * (CSV, Excel, JSON, clipboard, …).
   *
   * Property, derived-property, and function-backed columns are included.
   * Function-backed cells are fetched per page during snapshot collection;
   * when a page's fetch fails, `row.getValue(columnId)` returns the thrown
   * `Error` instance for the affected cells while the rest of the snapshot
   * resolves normally.
   * Columns defined with `locator.type === "custom"` are omitted because
   * they have no underlying value to export.
   *
   * The returned promise rejects up front when the object set's `totalCount`
   * exceeds `rowLimit`. When `totalCount` is unavailable, it instead rejects
   * mid-load once more than `rowLimit` rows have been pulled, so an unknown
   * count can't drain an unbounded set into the client. Otherwise every
   * matching row is loaded.
   *
   * @param options See {@link ObjectTableSnapshotOptions}.
   */
  getSnapshot: (
    options?: ObjectTableSnapshotOptions
  ) => Promise<ObjectTableSnapshot<Q, RDPs>>;
}

/**
 * Options for {@link ObjectTableHandle["getSnapshot"]}.
 */
export interface ObjectTableSnapshotOptions {
  /**
   * Upper bound on how many rows the snapshot may contain. When the object
   * set's total row count exceeds this value, `getSnapshot` rejects;
   * otherwise every matching row is loaded.
   *
   * @default 10_000
   */
  rowLimit?: number;
}

/**
 * A point-in-time capture of an {@link ObjectTable}'s columns and row values,
 * returned by {@link ObjectTableHandle.getSnapshot}.
 */
export interface ObjectTableSnapshot<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  columns: ObjectTableDataColumn[];
  rows: ObjectTableDataRow<Q, RDPs>[];
  /**
   * Total number of objects matching the underlying object set, as reported
   * by the API. `undefined` when the API did not provide a count. Encoded as
   * a string to match the underlying list-payload representation.
   */
  totalCount: string | undefined;
}

/**
 * A single column in an {@link ObjectTableSnapshot}.
 */
export interface ObjectTableDataColumn {
  /** Column id, matching the `locator.id` of the column definition. */
  id: string;
  /** Display name shown in the table header. */
  name: string;
}

/**
 * A single row in an {@link ObjectTableSnapshot}.
 */
export interface ObjectTableDataRow<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  /** Row id (the underlying object's `$primaryKey` rendered as a string). */
  id: string;
  /** The underlying loaded object. */
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>;
  /**
   * Returns the cell value for a given column id, or `undefined` when the
   * column is not part of the snapshot. Function-backed cells whose query
   * failed surface the thrown `Error` instance as their value.
   */
  getValue: (columnId: string) => unknown;
}

/**
 * Payload for {@link ObjectTableProps.onRowSelectionChanged}. Consolidates
 * the loaded row instances, the `isSelectAll` semantic intent, and an
 * `ObjectSet` covering the selection.
 */
export interface RowSelectionChange<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  /**
   * Loaded row instances currently selected. When `isSelectAll` is true,
   * this reflects only the rows currently in the table — pages not yet
   * fetched are absent. Use `objectSet` for the cross-page view, and
   * `selectedRows.map(r => r.$primaryKey)` if you need the primary keys.
   */
  selectedRows: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[];

  /**
   * True when the user invoked "select all" (header checkbox) or when
   * controlled mode supplies `isAllSelected={true}`. Distinct from "every
   * loaded row happens to be selected" — that condition is reflected by
   * `selectedRows.length` matching the visible row count but does not set
   * this flag.
   */
  isSelectAll: boolean;

  /**
   * An `ObjectSet` representing the selection.
   *
   * - "Select all" → the underlying `ObjectSet` (`objectSet` prop if
   *   provided, otherwise derived from `objectType` via `client(...)`).
   *   This includes rows not yet loaded into the table.
   * - Partial selection → the underlying `ObjectSet` narrowed to
   *   `{ $primaryKey: { $in: selectedRows.map(r => r.$primaryKey) } }`.
   * - "Deselect all" → an empty `ObjectSet` (`$in: []`).
   *
   * Works for both object and interface types, since the `$primaryKey`
   * special property does not require resolving the underlying primary key
   * property name. `undefined` only when there is no underlying `ObjectSet`
   * to derive from.
   */
  objectSet: ObjectSet<Q, RDPs> | undefined;
}

export interface ObjectSetOptions<Q extends ObjectOrInterfaceDefinition> {
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
