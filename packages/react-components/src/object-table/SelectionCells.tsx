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

import type { Row, RowData } from "@tanstack/react-table";
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
  onToggleRow: (rowId: string, rowIndex: number, isShiftClick: boolean) => void;
}

export function SelectionCell<TData extends RowData>({
  row,
  onToggleRow,
}: SelectionCellProps<TData>): React.ReactElement {
  const isSelected = row.getIsSelected();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      // Prevent onRowClick call
      e.stopPropagation();

      onToggleRow(row.id, row.index, e.shiftKey);
    },
    [row, onToggleRow],
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
