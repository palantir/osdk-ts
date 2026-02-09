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
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type * as React from "react";

export type ColumnDefinition<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = {
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
   * If not provided,
   * for a property column, the property displayName will be used
   * for other columns, the id will be used.
   */
  headerTitle?: string;

  renderHeader?: () => React.ReactNode;
};

export type ColumnDefinitionLocator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> =
  | {
    type: "property";
    id: PropertyKeys<Q>;
  }
  | {
    type: "function";
    id: keyof FunctionColumns;
  }
  | {
    type: "rdp";
    id: keyof RDPs;
    creator: DerivedProperty.Creator<Q, RDPs[keyof RDPs]>;
  }
  | {
    type: "custom";
    id: string;
  };

export interface ObjectTableProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  /**
   * The object type of the object
   */
  objectType: Q;

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
   * Whether the column configuration dialog is available to the user.
   *
   * @default true
   */
  enableColumnConfig?: boolean;

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
   * @param newWidth The new width of the column
   */
  onColumnResize?: (
    columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns,
    newWidth: number,
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
   * Called when the row selection changes.
   * Required when row selection is controlled.
   *
   * @param selectedRowIds The primary keys of currently selected rows
   */

  onRowSelection?: (selectedRowIds: PrimaryKeyType<Q>[]) => void;

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
