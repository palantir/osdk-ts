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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useEventCallback } from "../../shared/hooks/useEventCallback.js";
import { getRowId, getRowIdFromPrimaryKey } from "../utils/getRowId.js";

/**
 * Payload delivered by {@link UseRowSelectionProps.onRowSelectionChanged}.
 * Mirrors the OSDK-level `RowSelectionChange` but without the `objectSet`
 * field, which requires OSDK context and is composed in `ObjectTable`.
 */
export interface UseRowSelectionChange<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  selectedRows: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[];
  isSelectAll: boolean;
}

export interface UseRowSelectionProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  selectionMode?: "single" | "multiple" | "none";
  selectedRows?: PrimaryKeyType<Q>[];
  isAllSelected?: boolean;
  onRowSelectionChanged?: (change: UseRowSelectionChange<Q, RDPs>) => void;
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
    isShiftClick?: boolean
  ) => void;
}

export function useRowSelection<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  selectionMode = "none",
  selectedRows,
  isAllSelected: isAllSelectedProp,
  onRowSelectionChanged,
  data,
}: UseRowSelectionProps<Q, RDPs>): UseRowSelectionResult {
  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});

  // When true, newly fetched rows are auto-selected (uncontrolled mode only).
  const [internalIsAllSelected, setInternalIsAllSelected] = useState(false);

  const [lastSelectedRowIndex, setLastSelectedRowIndex] = useState<
    number | null
  >(null);

  const isControlled = selectedRows !== undefined;
  const enableRowSelection = selectionMode !== "none";

  const rowSelectionState: RowSelectionState = useMemo(() => {
    if (!enableRowSelection) return {};
    if (isControlled) {
      const selectedRowIds = isAllSelectedProp
        ? (data ?? []).map((item) => item.$primaryKey)
        : selectedRows;
      return getRowSelectionState(selectedRowIds);
    }
    if (internalIsAllSelected) {
      return getRowSelectionState((data ?? []).map((item) => item.$primaryKey));
    }
    return internalRowSelection;
  }, [
    enableRowSelection,
    isControlled,
    selectedRows,
    isAllSelectedProp,
    internalIsAllSelected,
    internalRowSelection,
    data,
  ]);

  const selectedCount = useMemo(
    () => Object.values(rowSelectionState).filter(Boolean).length,
    [rowSelectionState]
  );
  const totalCount = data?.length ?? 0;
  const isAllSelected = deriveIsAllSelected(
    isControlled,
    isAllSelectedProp,
    internalIsAllSelected,
    selectedCount,
    totalCount
  );
  const hasSelection = isAllSelected || selectedCount > 0;

  // Dedupes refires when "select all" is active and data grows.
  const lastFiredAllSelectedIdsRef = useRef<string | null>(null);

  const fireSelectionCallbacks = useEventCallback(
    (ids: PrimaryKeyType<Q>[], isSelectAll: boolean) => {
      if (onRowSelectionChanged) {
        const currentData = data ?? [];
        const selectedKeySet = new Set(ids.map((id) => String(id)));
        const instances = currentData.filter((item) =>
          selectedKeySet.has(String(item.$primaryKey))
        );
        onRowSelectionChanged({
          selectedRows: instances,
          isSelectAll,
        });
      }
    }
  );

  const onToggleAll = useCallback(() => {
    if (!enableRowSelection || !data) return;

    // Any existing selection (full or partial/indeterminate) clears on click;
    // only an empty selection promotes to "select all".
    const newIsAllSelected = !hasSelection;
    const newSelectedRows: PrimaryKeyType<Q>[] = newIsAllSelected
      ? data.map((item) => item.$primaryKey)
      : [];

    if (!isControlled) {
      setInternalIsAllSelected(newIsAllSelected);
      setInternalRowSelection(getRowSelectionState(newSelectedRows));
    }
    lastFiredAllSelectedIdsRef.current = newIsAllSelected
      ? JSON.stringify(newSelectedRows)
      : null;
    fireSelectionCallbacks(newSelectedRows, newIsAllSelected);
  }, [
    enableRowSelection,
    data,
    hasSelection,
    isControlled,
    fireSelectionCallbacks,
  ]);

  const onToggleRow = useCallback(
    (rowId: string, rowIndex: number, isShiftClick: boolean = false) => {
      if (!enableRowSelection || !data) return;

      let newSelectedRows: PrimaryKeyType<Q>[];

      if (selectionMode === "single") {
        newSelectedRows = getSingleSelectionRows({
          rowId,
          rowIndex,
          data,
          rowSelectionState,
        });
      } else {
        if (isShiftClick && lastSelectedRowIndex != null) {
          newSelectedRows = getRangeSelectionRows({
            rowId,
            rowIndex,
            data,
            lastSelectedRowIndex,
            rowSelectionState,
          });
          setLastSelectedRowIndex(rowIndex);
        } else {
          newSelectedRows = getMultipleSelectionRows({
            rowId,
            rowIndex,
            data,
            rowSelectionState,
          });
          if (
            !isCurrentlySelected<Q, RDPs>({ rowIndex, data, rowSelectionState })
          ) {
            setLastSelectedRowIndex(rowIndex);
          }
        }
      }
      if (!isControlled) {
        setInternalIsAllSelected(false);
        setInternalRowSelection(getRowSelectionState(newSelectedRows));
      }
      lastFiredAllSelectedIdsRef.current = null;
      fireSelectionCallbacks(newSelectedRows, false);
    },
    [
      enableRowSelection,
      data,
      selectionMode,
      isControlled,
      fireSelectionCallbacks,
      rowSelectionState,
      lastSelectedRowIndex,
    ]
  );

  // Refire callbacks when uncontrolled "select all" is active and new rows arrive.
  useEffect(
    function syncSelectAllOnDataChange() {
      if (isControlled || !internalIsAllSelected || !data) {
        if (!internalIsAllSelected) {
          lastFiredAllSelectedIdsRef.current = null;
        }
        return;
      }
      const ids = data.map((item) => item.$primaryKey);
      const serializedIds = JSON.stringify(ids);
      if (lastFiredAllSelectedIdsRef.current === serializedIds) return;
      lastFiredAllSelectedIdsRef.current = serializedIds;
      fireSelectionCallbacks(ids, true);
    },
    [isControlled, internalIsAllSelected, data, fireSelectionCallbacks]
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
>({
  rowId,
  rowIndex,
  data,
  rowSelectionState,
}: GetSelectedRowsProps<Q, RDPs>): PrimaryKeyType<Q>[] {
  const primaryKey = data[rowIndex].$primaryKey;
  return rowSelectionState[rowId] ? [] : [primaryKey];
}

function getRangeSelectionRows<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  lastSelectedRowIndex,
  rowIndex,
  data,
  rowSelectionState,
}: GetSelectedRowsProps<Q, RDPs>): PrimaryKeyType<Q>[] {
  if (lastSelectedRowIndex != null) {
    const rowsInRange = getRowsInRange(data, lastSelectedRowIndex, rowIndex);
    const primaryKeysInRange = rowsInRange.map((item) => item.$primaryKey);

    const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);

    const newSelectedRows = [...currentlySelected];
    primaryKeysInRange.forEach((item) => {
      if (!newSelectedRows.includes(item)) {
        newSelectedRows.push(item);
      }
    });
    return newSelectedRows;
  }
  return [];
}

function isCurrentlySelected<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  rowIndex,
  data,
  rowSelectionState,
}: Pick<
  GetSelectedRowsProps<Q, RDPs>,
  "rowIndex" | "data" | "rowSelectionState"
>): boolean {
  const primaryKey = data[rowIndex].$primaryKey;
  const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);
  return currentlySelected.includes(primaryKey);
}

function getMultipleSelectionRows<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  rowIndex,
  data,
  rowSelectionState,
}: GetSelectedRowsProps<Q, RDPs>): PrimaryKeyType<Q>[] {
  const primaryKey = data[rowIndex].$primaryKey;
  const currentlySelected = getSelectedPrimaryKeys(rowSelectionState, data);
  return isCurrentlySelected<Q, RDPs>({ rowIndex, data, rowSelectionState })
    ? currentlySelected.filter((i) => i !== primaryKey)
    : [...currentlySelected, primaryKey];
}

function getRowsInRange<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  data: Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>,
  startIndex: number,
  endIndex: number
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

function deriveIsAllSelected(
  isControlled: boolean,
  isAllSelectedProp: boolean | undefined,
  internalIsAllSelected: boolean,
  selectedCount: number,
  totalCount: number
): boolean {
  if (isControlled && isAllSelectedProp !== undefined) return isAllSelectedProp;
  if (!isControlled && internalIsAllSelected) return true;
  return totalCount > 0 && selectedCount === totalCount;
}

function getRowSelectionState<Q extends ObjectOrInterfaceDefinition>(
  primaryKeys: PrimaryKeyType<Q>[]
): RowSelectionState {
  return primaryKeys.reduce<RowSelectionState>((acc, primaryKey) => {
    acc[getRowIdFromPrimaryKey(primaryKey)] = true;
    return acc;
  }, {});
}

function getSelectedPrimaryKeys<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  selectionState: RowSelectionState,
  data: Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>
): PrimaryKeyType<Q>[] {
  return data
    .filter((item) => selectionState[getRowId(item)])
    .map((item) => item.$primaryKey);
}
