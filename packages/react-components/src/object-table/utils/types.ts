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

import type { RowData } from "@tanstack/react-table";

export interface ColumnOption {
  id: string;
  name: string;
  canSort: boolean;
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
  onCellEdit: (
    cellId: string,
    info: CellEditInfo<TData, CellValue>,
  ) => void;
  onSubmitEdits?: () => Promise<boolean>;
  clearEdits: () => void;
  editModeState: EditModeState;
  onCellValidationError: (
    cellId: string,
    error: string,
  ) => void;
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
   */
  itemToStringLabel?: (item: V) => string;

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
   * When true, renders a Combobox with a search input.
   * When false (default), renders a Select dropdown.
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
 * Maps each supported editable field component to its user-facing config.
 */
interface EditFieldPropsByType {
  DROPDOWN: DropdownEditConfig;
}

type EditFieldComponent = keyof EditFieldPropsByType;

/**
 * Configuration for an editable cell's field component.
 *
 * @example
 * ```ts
 * editFieldConfig: {
 *   fieldComponent: "DROPDOWN",
 *   fieldComponentProps: {
 *     items: ["Active", "Inactive", "Pending"],
 *   },
 * }
 * ```
 */
export type EditFieldConfig = {
  [K in EditFieldComponent]: {
    fieldComponent: K;
    fieldComponentProps: EditFieldPropsByType[K];
  };
}[EditFieldComponent];
