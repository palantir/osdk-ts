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
import type { CellIdentifier } from "./getCellId.js";

export interface ColumnOption {
  id: string;
  name: string;
  canSort: boolean;
}

export interface CellEditEvent<
  TData extends RowData = unknown,
  CellValue = unknown,
> {
  rowId: string;
  columnId: string;
  newValue: CellValue;
  oldValue: CellValue;
  rowData: TData;
}

export interface CellEditInfo<
  TData extends RowData = unknown,
  CellValue = unknown,
> extends CellIdentifier {
  newValue: CellValue;
  oldValue: CellValue;
  originalRowData: TData;
}

export interface RowEditEvent<TData extends RowData = unknown> {
  rowId: string;
  rowData: TData;
  /*
   * A record of cell edits within the row, keyed by column ID.
   */
  edits: Record<string, CellEditEvent<TData>>;
}

export type EditMode =
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
  editMode: EditMode;
}
