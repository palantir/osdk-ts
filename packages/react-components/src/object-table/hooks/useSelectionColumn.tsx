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
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { ColumnDef } from "@tanstack/react-table";
import React, { useMemo } from "react";
import { SelectionCell, SelectionHeaderCell } from "../SelectionCells.js";
import { SELECTION_COLUMN_ID } from "../utils/constants.js";

interface UseSelectionColumnProps {
  selectionMode?: "single" | "multiple" | "none";
  isAllSelected: boolean;
  hasSelection: boolean;
  onToggleAll: () => void;
  onToggleRow: (id: string, rowIndex: number, isShiftClick: boolean) => void;
}

export const useSelectionColumn = <
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
>({
  selectionMode,
  isAllSelected,
  hasSelection,
  onToggleAll,
  onToggleRow,
}: UseSelectionColumnProps):
  | ColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >
  | null =>
{
  const selectionColumn = useMemo(() => {
    if (selectionMode === "none") return null;

    const colDef: ColumnDef<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
    > = {
      id: SELECTION_COLUMN_ID,
      header: () => (
        selectionMode === "multiple"
          ? (
            <SelectionHeaderCell
              isAllSelected={isAllSelected}
              hasSelection={hasSelection}
              onToggleAll={onToggleAll}
            />
          )
          : null
      ),
      cell: ({ row }: { row: any }) => (
        <SelectionCell
          row={row}
          onToggleRow={onToggleRow}
        />
      ),
      size: 50,
      minSize: 50,
      maxSize: 50,
      enableSorting: false,
      enableResizing: false,
      enablePinning: false,
    };

    return colDef;
  }, [
    selectionMode,
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
  ]);

  return selectionColumn;
};
