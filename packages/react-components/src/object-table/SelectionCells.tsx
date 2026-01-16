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

import { Checkbox } from "@base-ui/react/checkbox";
import type { Row, RowData } from "@tanstack/react-table";
import React, { useCallback } from "react";
import "./SelectionCells.css";

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
  const isIndeterminate = hasSelection && !isAllSelected;
  return (
    <Checkbox.Root
      className="osdk-selection-checkbox-root"
      checked={isAllSelected}
      indeterminate={isIndeterminate}
      onCheckedChange={onToggleAll}
    >
      <Checkbox.Indicator className={"osdk-selection-checkbox-indicator"}>
        {isIndeterminate
          ? <DashIcon className={"osdk-selection-checkbox-icon"} />
          : <CheckIcon className={"osdk-selection-checkbox-icon"} />}
      </Checkbox.Indicator>
    </Checkbox.Root>
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

  const handleCheckedChange = useCallback(
    (_: boolean, eventDetails: Checkbox.Root.ChangeEventDetails) => {
      const isShiftClick = "shiftKey" in eventDetails.event
        ? !!eventDetails.event.shiftKey
        : false;
      onToggleRow(row.id, row.index, isShiftClick);
    },
    [row, onToggleRow],
  );

  return (
    <Checkbox.Root
      checked={isSelected}
      onCheckedChange={handleCheckedChange}
      className="osdk-selection-checkbox-root"
    >
      <Checkbox.Indicator className={"osdk-selection-checkbox-indicator"}>
        <CheckIcon className={"osdk-selection-checkbox-icon"} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

// Replace with Blueprint Icon
function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentcolor"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

function DashIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="8"
        x2="12"
        y2="8"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
