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

/**
 * Determines if a cell should be rendered as editable
 *
 * @param editable - Whether the column is marked as editable
 * @param onCellEdit - The onCellEdit callback from table meta (indicates edit handlers exist)
 * @param isInEditMode - Whether the table is currently in edit mode
 * @returns true if the cell should be rendered with edit controls
 */
export function shouldShowEditableCell(
  editable: boolean | undefined,
  onCellEdit: unknown,
  isInEditMode: boolean | undefined,
): boolean {
  return editable === true
    && onCellEdit != null
    && isInEditMode === true;
}
