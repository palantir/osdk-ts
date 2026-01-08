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

import type { Row, RowData, Table } from "@tanstack/react-table";
import React, { useCallback } from "react";

interface SelectionHeaderCellProps {
  isAllSelected: boolean;
  hasSelection: boolean;
  onToggleAll: () => void;
}

export function SelectionHeaderCell({
  isAllSelected,
  hasSelection,
  onToggleAll,
}: SelectionHeaderCellProps): React.ReactElement {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        checked={isAllSelected}
        ref={(input) => {
          if (input) input.indeterminate = hasSelection && !isAllSelected;
        }}
        onChange={onToggleAll}
        aria-label="Select all rows"
      />
    </div>
  );
}

interface SelectionCellProps<TData extends RowData> {
  row: Row<TData>;
  table: Table<TData>;
  onToggleRow: (rowId: string, isShiftClick: boolean) => void;
  lastSelectedRowIndex: number | null;
  setLastSelectedRowIndex: (index: number | null) => void;
}

export function SelectionCell<TData extends RowData>({
  row,
  table,
  onToggleRow,
  lastSelectedRowIndex,
  setLastSelectedRowIndex,
}: SelectionCellProps<TData>): React.ReactElement {
  const isSelected = row.getIsSelected();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();

      const isShiftClick = e.shiftKey;

      if (isShiftClick && lastSelectedRowIndex != null) {
        const currentIndex = row.index;
        const startIndex = Math.min(lastSelectedRowIndex, currentIndex);
        const endIndex = Math.max(lastSelectedRowIndex, currentIndex);

        const rows = table.getRowModel().rows;
        for (let i = startIndex; i <= endIndex; i++) {
          const targetRow = rows[i];
          if (targetRow) {
            onToggleRow(targetRow.id, true);
          }
        }
      } else {
        onToggleRow(row.id, false);
        setLastSelectedRowIndex(row.index);
      }
    },
    [row, table, onToggleRow, lastSelectedRowIndex, setLastSelectedRowIndex],
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onClick={handleClick}
        aria-label={`Select row ${row.index + 1}`}
      />
    </div>
  );
}
