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
  const [internalRowSelection, setInternalRowSelection] = useState<
    RowSelectionState
  >({});

  const [lastSelectedRowIndex, setLastSelectedRowIndex] = useState<
    number | null
  >(null);

  const isControlled = selectedRows !== undefined;
  const isSelectionEnabled = selectionMode !== "none";

  // Row selection state
  // If controlled mode, return the state from selectedRows prop (converted to string IDs)
  // If uncontrolled, return the internalRowSelection state
  const rowSelection: RowSelectionState = useMemo(() => {
    if (!isSelectionEnabled) return {};

    if (isControlled && selectedRows && data) {
      const selectionState: RowSelectionState = selectedRows.reduce(
        (acc, primaryKey) => {
          return {
            ...acc,
            [primaryKey.toString()]: true,
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

  const selectedCount = Object.values(rowSelection).filter(Boolean).length;
  const totalCount = data?.length ?? 0;
  const isAllSelected = totalCount > 0 && selectedCount === totalCount;
  const hasSelection = selectedCount > 0;

  const onToggleAll = useCallback(() => {
    if (!isSelectionEnabled || !data) return;

    const newSelection: RowSelectionState = {};
    if (!isAllSelected) {
      data.forEach((item) => {
        newSelection[item.$primaryKey.toString()] = true;
      });
    }

    if (isControlled) {
      const newSelectedRows = isAllSelected
        ? []
        : data.map(item => item.$primaryKey);
      onRowSelection?.(newSelectedRows);
    } else {
      setInternalRowSelection(newSelection);
    }
  }, [isSelectionEnabled, data, isAllSelected, isControlled, onRowSelection]);

  const onToggleRow = useCallback(
    (id: string, rowIndex: number, isShiftClick: boolean) => {
      if (!isSelectionEnabled) return;

      if (selectionMode === "single") {
        // In single selection mode, ignore shift-click
        const newSelection: RowSelectionState = {
          [id]: !rowSelection[id],
        };

        if (isControlled && data) {
          const primaryKey = data[rowIndex].$primaryKey;

          const newSelectedRows = rowSelection[id]
            ? []
            : [primaryKey];
          onRowSelection?.(newSelectedRows);
        } else {
          setInternalRowSelection(newSelection);
        }
        setLastSelectedRowIndex(rowIndex);
        return;
      }

      // Multiple selection mode
      if (isShiftClick && lastSelectedRowIndex != null && data) {
        // Handle shift-click range selection
        const startIndex = Math.min(lastSelectedRowIndex, rowIndex);
        const endIndex = Math.max(lastSelectedRowIndex, rowIndex);

        if (isControlled) {
          const currentlySelected = selectedRows || [];
          const newSelectedRows = [...currentlySelected];

          // Add all rows in the range to selection
          for (let i = startIndex; i <= endIndex; i++) {
            const item = data[i];
            if (item) {
              const primaryKey = item.$primaryKey;
              if (!newSelectedRows.includes(primaryKey)) {
                newSelectedRows.push(primaryKey);
              }
            }
          }

          onRowSelection?.(newSelectedRows);
        } else {
          setInternalRowSelection(prev => {
            const newSelection = { ...prev };
            // Select all rows in the range
            for (let i = startIndex; i <= endIndex; i++) {
              const item = data[i];
              if (item) {
                newSelection[item.$primaryKey.toString()] = true;
              }
            }
            return newSelection;
          });
        }
      } else {
        if (isControlled && data) {
          const primaryKey = data[rowIndex].$primaryKey;
          const currentlySelected = selectedRows || [];
          const newSelectedRows = currentlySelected.includes(primaryKey)
            ? currentlySelected.filter(pk => pk !== primaryKey)
            : [...currentlySelected, primaryKey];

          onRowSelection?.(newSelectedRows);
        } else {
          setInternalRowSelection(prev => ({
            ...prev,
            [id]: !prev[id],
          }));
        }

        setLastSelectedRowIndex(rowIndex);
      }
    },
    [
      isSelectionEnabled,
      selectionMode,
      rowSelection,
      isControlled,
      data,
      selectedRows,
      onRowSelection,
      lastSelectedRowIndex,
    ],
  );

  return {
    rowSelection,
    onRowSelectionChange,
    isAllSelected,
    hasSelection,
    onToggleAll,
    onToggleRow,
  };
}
