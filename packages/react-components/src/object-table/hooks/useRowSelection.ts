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

import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
import type { RowSelectionState } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { getRowId, getRowIdFromPrimaryKey } from "../utils/getRowId.js";

export interface UseRowSelectionProps<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
> {
  selectionMode?: "single" | "multiple" | "none";
  selectedRows?: PrimaryKeyType<Q>[];
  onRowSelection?: (selectedRowIds: PrimaryKeyType<Q>[]) => void;
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>> | undefined;
}

export interface UseRowSelectionResult<Q extends ObjectTypeDefinition> {
  rowSelection: RowSelectionState;
  isAllSelected: boolean;
  hasSelection: boolean;
  onToggleAll: () => void;
  onToggleRow: (id: string, rowIndex: number, isShiftClick: boolean) => void;
}

export function useRowSelection<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>({
  selectionMode = "none",
  selectedRows,
  onRowSelection,
  data,
}: UseRowSelectionProps<Q, RDPs>): UseRowSelectionResult<Q> {
  // The rowSelectionState in uncontrolled mode
  const [internalRowSelection, setInternalRowSelection] = useState<
    RowSelectionState
  >({});

  // Used for shift-click behavior in "multiple" mode
  const [lastSelectedRowIndex, setLastSelectedRowIndex] = useState<
    number | null
  >(null);

  const isControlled = selectedRows !== undefined;
  const isSelectionEnabled = selectionMode !== "none";

  // Row selection state
  // If controlled mode, return the state from selectedRows prop
  // If uncontrolled, return the internalRowSelection state
  const rowSelectionState: RowSelectionState = useMemo(() => {
    if (!isSelectionEnabled) return {};
    if (isControlled && selectedRows) {
      return getRowSelectionState(selectedRows);
    }
    return internalRowSelection;
  }, [
    isSelectionEnabled,
    isControlled,
    selectedRows,
    data,
    internalRowSelection,
  ]);

  const selectedCount = Object.values(rowSelectionState).filter(Boolean).length;
  const totalCount = data?.length ?? 0;
  const isAllSelected = totalCount > 0 && selectedCount === totalCount;
  const hasSelection = selectedCount > 0;

  // Called by the SelectionHeaderCell
  const onToggleAll = useCallback(() => {
    if (!isSelectionEnabled || !data) return;

    const newSelectedRows: PrimaryKeyType<Q>[] = isAllSelected
      ? []
      : data.map(item => item.$primaryKey);

    if (!isControlled) {
      setInternalRowSelection(getRowSelectionState(newSelectedRows));
    }
    onRowSelection?.(newSelectedRows);
  }, [isSelectionEnabled, data, isAllSelected, isControlled, onRowSelection]);

  // Called by the row-level SelectionCell
  const onToggleRow = useCallback(
    (id: string, rowIndex: number, isShiftClick: boolean) => {
      if (!isSelectionEnabled || !data) return;

      if (selectionMode === "single") {
        handleSingleSelection(
          id,
          rowIndex,
          data,
          isControlled,
          rowSelectionState,
          onRowSelection,
          setInternalRowSelection,
          setLastSelectedRowIndex,
        );
        return;
      }

      // Multiple selection mode
      if (isShiftClick && lastSelectedRowIndex != null) {
        handleRangeSelection(
          rowIndex,
          data,
          lastSelectedRowIndex,
          isControlled,
          rowSelectionState,
          onRowSelection,
          setInternalRowSelection,
        );
      } else {
        handleMultipleSelectionToggle(
          rowIndex,
          data,
          isControlled,
          rowSelectionState,
          onRowSelection,
          setInternalRowSelection,
          setLastSelectedRowIndex,
        );
      }
    },
    [
      isSelectionEnabled,
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
    hasSelection,
    onToggleAll,
    onToggleRow,
  };
}

// Handles single selection mode toggle
function handleSingleSelection<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>(
  id: string,
  rowIndex: number,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>>,
  isControlled: boolean,
  rowSelectionState: RowSelectionState,
  onRowSelection: ((selectedRowIds: PrimaryKeyType<Q>[]) => void) | undefined,
  setInternalRowSelection: React.Dispatch<
    React.SetStateAction<RowSelectionState>
  >,
  setLastSelectedRowIndex: React.Dispatch<React.SetStateAction<number | null>>,
) {
  const primaryKey = data[rowIndex].$primaryKey;
  const newSelectedRows = rowSelectionState[id] ? [] : [primaryKey];

  if (!isControlled) {
    setInternalRowSelection(getRowSelectionState(newSelectedRows));
  }
  onRowSelection?.(newSelectedRows);
  setLastSelectedRowIndex(rowIndex);
}

// Handles range selection in multiple selection mode (shift-click)
function handleRangeSelection<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>(
  rowIndex: number,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>>,
  lastSelectedRowIndex: number,
  isControlled: boolean,
  rowSelectionState: RowSelectionState,
  onRowSelection: ((selectedRowIds: PrimaryKeyType<Q>[]) => void) | undefined,
  setInternalRowSelection: React.Dispatch<
    React.SetStateAction<RowSelectionState>
  >,
) {
  const rowsInRange = getRowsInRange(data, lastSelectedRowIndex, rowIndex);
  const primaryKeysInRange = rowsInRange.map(item => item.$primaryKey);

  const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);
  const newSelectedRows = addUniqueItems(currentlySelected, primaryKeysInRange);

  if (!isControlled) {
    setInternalRowSelection(getRowSelectionState(newSelectedRows));
  }
  onRowSelection?.(newSelectedRows);
}

// Handles single row toggle in multiple selection mode
function handleMultipleSelectionToggle<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>(
  rowIndex: number,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>>,
  isControlled: boolean,
  rowSelectionState: RowSelectionState,
  onRowSelection: ((selectedRowIds: PrimaryKeyType<Q>[]) => void) | undefined,
  setInternalRowSelection: React.Dispatch<
    React.SetStateAction<RowSelectionState>
  >,
  setLastSelectedRowIndex: React.Dispatch<React.SetStateAction<number | null>>,
) {
  const primaryKey = data[rowIndex].$primaryKey;
  const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);
  const newSelectedRows = toggleItem(currentlySelected, primaryKey);

  if (!isControlled) {
    setInternalRowSelection(getRowSelectionState(newSelectedRows));
  }
  onRowSelection?.(newSelectedRows);
  setLastSelectedRowIndex(rowIndex);
}

/**
 * Builds a range of rows from startIndex to endIndex
 */
function getRowsInRange<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>(
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>>,
  startIndex: number,
  endIndex: number,
): Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>> {
  const start = Math.min(startIndex, endIndex);
  const end = Math.max(startIndex, endIndex);
  const rows: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>> = [];

  for (let i = start; i <= end; i++) {
    const item = data[i];
    if (item) {
      rows.push(item);
    }
  }

  return rows;
}

/**
 * Adds unique items to an array. Used to merge selections while avoiding duplicates.
 */
function addUniqueItems<T>(currentItems: T[], newItems: T[]): T[] {
  const result = [...currentItems];
  newItems.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

/**
 * Toggles an item in an array. Removes it if present, adds it if absent.
 */
function toggleItem<T>(items: T[], item: T): T[] {
  return items.includes(item)
    ? items.filter(i => i !== item)
    : [...items, item];
}

/**
 * Converts an array of primary keys to a RowSelectionState object
 */
function getRowSelectionState<Q extends ObjectTypeDefinition>(
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
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, any> = Record<string, never>,
>(
  selectionState: RowSelectionState,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", any, RDPs>>,
): PrimaryKeyType<Q>[] {
  return data
    .filter(item => selectionState[getRowId(item)])
    .map(item => item.$primaryKey);
}
