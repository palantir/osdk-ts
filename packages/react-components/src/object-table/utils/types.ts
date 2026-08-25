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

import type { DateInputProps } from "@blueprintjs/datetime";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { RowData } from "@tanstack/react-table";

export interface ColumnOption {
  id: string;
  name: string;
  canSort: boolean;
  /**
   * The column's underlying property type, i.e. an OSDK `WirePropertyTypes` value
   */
  dataType?: string;
}

export interface CellIdentifier {
  rowId: string;
  columnId: string;
}

export interface CellEditInfo<
  TData extends RowData = unknown,
  CellValue = unknown,
> extends CellIdentifier {
  newValue: CellValue | null;
  oldValue: CellValue | null;
  originalRowData: TData;
}

export type EditModeState =
  | { type: "always"; isActive: true }
  | { type: "manual"; isActive: boolean; setActive: (value: boolean) => void };

export interface EditableConfig<
  TData extends RowData = unknown,
  CellValue = unknown,
> {
  cellEdits: Record<string, CellEditInfo<TData, CellValue>>;
  onCellEdit: (cellId: string, info: CellEditInfo<TData, CellValue>) => void;
  onSubmitEdits?: () => Promise<boolean>;
  clearEdits: () => void;
  editModeState: EditModeState;
  onCellValidationError: (cellId: string, error: string) => void;
  validationErrors: Map<string, string>;
  clearCellValidationError: (cellId: string) => void;
}

/**
 * User-facing configuration for a dropdown editor in a table cell.
 *
 * This is intentionally a standalone interface rather than re-exporting
 * `DropdownFieldProps` from ActionForm, so the table API doesn't break
 * when ActionForm's prop shape changes (e.g. adding form-specific fields).
 */
export interface DropdownEditConfig<V = unknown> {
  /**
   * Available items for the dropdown.
   */
  items: V[];

  /**
   * Converts an item to a display string. Defaults to `String()`.
   *
   * `item` may be `undefined` when the cell has no value yet — the formatter
   * is responsible for producing a sensible label in that case.
   */
  itemToStringLabel?(item: V | undefined): string;

  /**
   * Returns a unique string key for a list item. Used as the React `key`.
   * Falls back to the item's index when not provided.
   */
  itemToKey?: (item: V) => string;

  /**
   * Custom equality check for item values. Defaults to `Object.is`.
   * Required when items are objects to ensure correct selection matching.
   */
  isItemEqual?: (a: V, b: V) => boolean;

  /**
   * Whether the dropdown allows searching/filtering.
   * When true, shows Blueprint's query input inside the dropdown.
   * When false (default), the dropdown is not filterable.
   */
  isSearchable?: boolean;

  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;

  /**
   * Whether multiple values can be selected.
   */
  isMultiple?: boolean;
}

/**
 * User-facing configuration for a date picker editor in a table cell.
 *
 * Uses Blueprint's DateInput props directly, excluding values managed by the
 * editable table.
 */
export type DatePickerEditConfig = Omit<
  DateInputProps,
  "defaultValue" | "disabled" | "onChange" | "value"
>;

/**
 * Maps each supported editable field component to its user-facing config.
 */
interface EditFieldPropsByType {
  DROPDOWN: DropdownEditConfig;
  DATE_PICKER: DatePickerEditConfig;
}

type EditFieldComponent = keyof EditFieldPropsByType;

/**
 * Configuration for an editable cell's field component.
 *
 * `getFieldComponentProps` is called with the row's object and a map of any
 * pending cell edits for the same row, keyed by `columnId`. This lets the
 * configuration depend on row state or on other in-progress edits within the
 * row (e.g. dropdown items that change once another column is edited).
 */
export type EditFieldConfig<TData = unknown> = {
  [K in EditFieldComponent]: {
    fieldComponent: K;
    getFieldComponentProps: (
      object: TData,
      edits?: Record<string, CellEditInfo<TData, unknown>>,
    ) => EditFieldPropsByType[K];
  };
}[EditFieldComponent];

export type OrderBy<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = {
  [K in PropertyKeys<Q> | keyof RDPs]?: "asc" | "desc";
};
