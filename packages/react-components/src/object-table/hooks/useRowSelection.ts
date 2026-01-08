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
import type { OnChangeFn, RowSelectionState } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";

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
  onRowSelectionChange: (updater: any) => void;
  isAllSelected: boolean;
  hasSelection: boolean;
  lastSelectedRowIndex: number | null;
  setLastSelectedRowIndex: (index: number | null) => void;
  onToggleAll: () => void;
  onToggleRow: (rowId: string, isShiftClick: boolean) => void;
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
  const [internalRowSelection, setInternalRowSelection] = useState<
    RowSelectionState
  >({});
  const [lastSelectedRowIndex, setLastSelectedRowIndex] = useState<
    number | null
  >(null);

  const isControlled = selectedRows !== undefined;
  const isSelectionEnabled = selectionMode !== "none";

  // Row selection state
  // If controlled mode, return the state from selectedRows prop
  // If uncontrolled, return the internalRowSelection state
  const rowSelection: RowSelectionState = useMemo(() => {
    if (!isSelectionEnabled) return {};

    if (isControlled && selectedRows && data) {
      const selectionState: RowSelectionState = selectedRows.reduce(
        (acc, selectedRowPk) => {
          return {
            ...acc,
            [selectedRowPk]: true,
          };
        },
        {},
      );

      return selectionState;
    }

    return internalRowSelection;
  }, [
    isSelectionEnabled,
    isControlled,
    selectedRows,
    data,
    internalRowSelection,
  ]);

  // Row selection event handler
  // Only provided if selection is enabled and it's uncontrolled mode
  const onRowSelectionChange: OnChangeFn<RowSelectionState> = useCallback(
    (updater) => {
      if (!isSelectionEnabled) return;

      if (!isControlled) {
        setInternalRowSelection(updater);
      } else {
        if (onRowSelection) {
          const updated: RowSelectionState = updater instanceof Function
            ? updater(rowSelection)
            : updater;

          const selectedRowIds: PrimaryKeyType<Q>[] = Object.entries(updated)
            .filter(([_, v]) => v)
            .map(([k]) => k as PrimaryKeyType<Q>);

          onRowSelection(selectedRowIds);
        }
      }
    },
    [isSelectionEnabled, isControlled],
  );

  const selectedCount = Object.values(rowSelection).filter(Boolean).length;
  const totalCount = data?.length ?? 0;
  const isAllSelected = totalCount > 0 && selectedCount === totalCount;
  const hasSelection = selectedCount > 0;

  const onToggleAll = useCallback(() => {
    if (!isSelectionEnabled || !data) return;

    const newSelection: RowSelectionState = {};
    if (!isAllSelected) {
      data.forEach((_, index) => {
        newSelection[index.toString()] = true;
      });
    }

    if (isControlled) {
      const newSelectedRows = isAllSelected
        ? []
        : data.map(item => item.$primaryKey as PrimaryKeyType<Q>);
      onRowSelection?.(newSelectedRows);
    } else {
      setInternalRowSelection(newSelection);
    }
  }, [isSelectionEnabled, data, isAllSelected, isControlled, onRowSelection]);

  const onToggleRow = useCallback((rowId: string, isShiftClick: boolean) => {
    if (!isSelectionEnabled) return;

    if (selectionMode === "single") {
      const newSelection: RowSelectionState = { [rowId]: !rowSelection[rowId] };

      if (isControlled && data) {
        const index = parseInt(rowId, 10);
        const item = data[index];
        const newSelectedRows = rowSelection[rowId]
          ? []
          : item
          ? [item.$primaryKey as PrimaryKeyType<Q>]
          : [];
        onRowSelection?.(newSelectedRows);
      } else {
        setInternalRowSelection(newSelection);
      }
      return;
    }

    if (isControlled) {
      const index = parseInt(rowId, 10);
      const item = data?.[index];
      if (!item) return;

      const primaryKey = item.$primaryKey as PrimaryKeyType<Q>;
      const currentlySelected = selectedRows || [];

      if (isShiftClick) {
        // For shift-click, always add to selection (don't toggle off)
        const newSelectedRows = currentlySelected.includes(primaryKey)
          ? currentlySelected
          : [...currentlySelected, primaryKey];
        onRowSelection?.(newSelectedRows);
      } else {
        const newSelectedRows = currentlySelected.includes(primaryKey)
          ? currentlySelected.filter(id => id !== primaryKey)
          : [...currentlySelected, primaryKey];
        onRowSelection?.(newSelectedRows);
      }
    } else {
      setInternalRowSelection(prev => {
        if (isShiftClick) {
          // For shift-click, always select (don't toggle)
          return { ...prev, [rowId]: true };
        }
        return {
          ...prev,
          [rowId]: !prev[rowId],
        };
      });
    }
  }, [
    isSelectionEnabled,
    selectionMode,
    rowSelection,
    isControlled,
    data,
    selectedRows,
    onRowSelection,
  ]);

  return {
    rowSelection,
    onRowSelectionChange,
    isAllSelected,
    hasSelection,
    lastSelectedRowIndex,
    setLastSelectedRowIndex,
    onToggleAll,
    onToggleRow,
  };
}
