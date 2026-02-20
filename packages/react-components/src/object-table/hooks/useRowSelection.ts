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
  PrimaryKeyType,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { RowSelectionState } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { getRowId, getRowIdFromPrimaryKey } from "../utils/getRowId.js";

export interface UseRowSelectionProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  selectionMode?: "single" | "multiple" | "none";
  selectedRows?: PrimaryKeyType<Q>[];
  onRowSelection?: (selectedRowIds: PrimaryKeyType<Q>[]) => void;
  data:
    | Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>
    | undefined;
}

export interface UseRowSelectionResult {
  rowSelection: RowSelectionState;
  isAllSelected: boolean;
  hasSelection: boolean;
  enableRowSelection: boolean;
  onToggleAll: () => void;
  onToggleRow: (
    rowId: string,
    rowIndex: number,
    isShiftClick?: boolean,
  ) => void;
}

export function useRowSelection<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  selectionMode = "none",
  selectedRows,
  onRowSelection,
  data,
}: UseRowSelectionProps<Q, RDPs>): UseRowSelectionResult {
  // The rowSelectionState in uncontrolled mode
  const [internalRowSelection, setInternalRowSelection] = useState<
    RowSelectionState
  >({});

  // Used for shift-click behavior in "multiple" mode
  const [lastSelectedRowIndex, setLastSelectedRowIndex] = useState<
    number | null
  >(null);

  const isControlled = selectedRows !== undefined;
  const enableRowSelection = selectionMode !== "none";

  // Row selection state
  // If controlled mode, return the state from selectedRows prop
  // If uncontrolled, return the internalRowSelection state
  const rowSelectionState: RowSelectionState = useMemo(() => {
    if (!enableRowSelection) return {};
    if (isControlled && selectedRows) {
      return getRowSelectionState(selectedRows);
    }
    return internalRowSelection;
  }, [
    enableRowSelection,
    isControlled,
    selectedRows,
    internalRowSelection,
  ]);

  const selectedCount = Object.values(rowSelectionState).filter(Boolean).length;
  const totalCount = data?.length ?? 0;
  const isAllSelected = totalCount > 0 && selectedCount === totalCount;
  const hasSelection = selectedCount > 0;

  const onToggleAll = useCallback(() => {
    if (!enableRowSelection || !data) return;

    const newSelectedRows: PrimaryKeyType<Q>[] = isAllSelected
      ? []
      : data.map(item => item.$primaryKey);

    if (!isControlled) {
      setInternalRowSelection(getRowSelectionState(newSelectedRows));
    }
    onRowSelection?.(newSelectedRows);
  }, [enableRowSelection, data, isAllSelected, isControlled, onRowSelection]);

  const onToggleRow = useCallback(
    (rowId: string, rowIndex: number, isShiftClick: boolean = false) => {
      if (!enableRowSelection || !data) return;

      let newSelectedRows: PrimaryKeyType<Q>[] = [];

      if (selectionMode === "single") {
        newSelectedRows = getSingleSelectionRows({
          rowId,
          rowIndex,
          data,
          rowSelectionState,
        });
        setLastSelectedRowIndex(rowIndex);
      } else {
        // Multiple selection mode

        // When user does shiftClick but lastSelectedRowIndex is null,
        // it is treated as a normal click in multiple selection
        if (isShiftClick && lastSelectedRowIndex != null) {
          newSelectedRows = getRangeSelectionRows(
            { rowId, rowIndex, data, lastSelectedRowIndex, rowSelectionState },
          );
        } else {
          newSelectedRows = getMultipleSelectionRows(
            { rowId, rowIndex, data, rowSelectionState },
          );
        }
        setLastSelectedRowIndex(rowIndex);
      }
      if (!isControlled) {
        setInternalRowSelection(getRowSelectionState(newSelectedRows));
      }
      onRowSelection?.(newSelectedRows);
    },
    [
      enableRowSelection,
      data,
      selectionMode,
      lastSelectedRowIndex,
      isControlled,
      rowSelectionState,
      onRowSelection,
    ],
  );

  return {
    rowSelection: rowSelectionState,
    isAllSelected,
    enableRowSelection,
    hasSelection,
    onToggleAll,
    onToggleRow,
  };
}

interface GetSelectedRowsProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  rowId: string;
  rowIndex: number;
  data: Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>;
  rowSelectionState: RowSelectionState;
  lastSelectedRowIndex?: number;
}

function getSingleSelectionRows<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  { rowId, rowIndex, data, rowSelectionState }: GetSelectedRowsProps<Q, RDPs>,
): PrimaryKeyType<Q>[] {
  const primaryKey = data[rowIndex].$primaryKey;
  // Toggle row selection in single selection mode
  const newSelectedRows = rowSelectionState[rowId] ? [] : [primaryKey];
  return newSelectedRows;
}

function getRangeSelectionRows<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  { lastSelectedRowIndex, rowIndex, data, rowSelectionState }:
    GetSelectedRowsProps<Q, RDPs>,
): PrimaryKeyType<Q>[] {
  // This function is only called if lastSelectedRowIndex is not null
  // This condition is added for typechecks only
  if (lastSelectedRowIndex != null) {
    const rowsInRange = getRowsInRange(data, lastSelectedRowIndex, rowIndex);
    const primaryKeysInRange = rowsInRange.map(item => item.$primaryKey);

    const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);

    // Add all rows in range to selectedRows if not yet selected
    const newSelectedRows = [...currentlySelected];
    primaryKeysInRange.forEach(item => {
      if (!newSelectedRows.includes(item)) {
        newSelectedRows.push(item);
      }
    });
    return newSelectedRows;
  }
  return [];
}

function getMultipleSelectionRows<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  { rowIndex, data, rowSelectionState }: GetSelectedRowsProps<Q, RDPs>,
): PrimaryKeyType<Q>[] {
  const primaryKey = data[rowIndex].$primaryKey;
  const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);
  // Handles single row toggle in multiple selection mode
  const newSelectedRows = currentlySelected.includes(primaryKey)
    ? currentlySelected.filter(i => i !== primaryKey)
    : [...currentlySelected, primaryKey];
  return newSelectedRows;
}

/**
 * Builds a range of rows from startIndex to endIndex
 */
function getRowsInRange<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  data: Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>,
  startIndex: number,
  endIndex: number,
): Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>> {
  const start = Math.min(startIndex, endIndex);
  const end = Math.max(startIndex, endIndex);
  const rows: Array<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  > = [];

  for (let i = start; i <= end; i++) {
    const item = data[i];
    if (item) {
      rows.push(item);
    }
  }

  return rows;
}

/**
 * Converts an array of primary keys to a RowSelectionState object
 */
function getRowSelectionState<Q extends ObjectOrInterfaceDefinition>(
  primaryKeys: PrimaryKeyType<Q>[],
): RowSelectionState {
  return primaryKeys.reduce<RowSelectionState>(
    (acc, primaryKey) => {
      acc[getRowIdFromPrimaryKey(primaryKey)] = true;
      return acc;
    },
    {},
  );
}

/**
 * Converts from a RowSelectionState object back to an array of primary keys
 */
function getSelectedPrimaryKeys<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  selectionState: RowSelectionState,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>,
): PrimaryKeyType<Q>[] {
  return data
    .filter(item => selectionState[getRowId(item)])
    .map(item => item.$primaryKey);
}
