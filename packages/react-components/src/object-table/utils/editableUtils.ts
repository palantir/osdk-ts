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

import type { RowData } from "@tanstack/react-table";

export type EditablePredicate<TData extends RowData = RowData> =
  | boolean
  | ((rowData: TData) => boolean);

/**
 * Whether a column declares any editing behavior.
 *
 * Returns `true` when `editable` is `true` or a predicate function. The
 * predicate may still return `false` for individual rows — that decision is
 * made per-cell via {@link isCellEditable}. This function answers the
 * column-level question used to drive table-wide UI like the bottom edit bar.
 */
export function isColumnDeclaredEditable(
  editable: boolean | ((rowData: never) => boolean) | undefined,
): boolean {
  return editable === true || typeof editable === "function";
}

/**
 * Whether a specific cell is editable, given the column's `editable` value
 * and the row's data. Used at render time per cell.
 */
export function isCellEditable<TData extends RowData>(
  editable: EditablePredicate<TData> | undefined,
  rowData: TData,
): boolean {
  if (typeof editable === "function") {
    return editable(rowData);
  }
  return editable === true;
}
