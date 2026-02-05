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

import { Menu } from "@base-ui/react/menu";
import {
  Add,
  CaretDown,
  SortAlphabetical,
  SortAlphabeticalDesc,
} from "@blueprintjs/icons";
import type { SortingState } from "@tanstack/react-table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dialog, DialogButton } from "../base-components/dialog/Dialog.js";
import styles from "./MultiColumnSortDialog.module.css";
import { type SortableItem, SortableItemsList } from "./SortableItemsList.js";
import type { ColumnOption } from "./utils/types.js";

export interface SortColumnItem extends ColumnOption {
  direction: "asc" | "desc";
}

interface MultiColumnSortDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (sortColumns: SortingState) => void;
  currentSorting: SortingState;
  columnOptions: ColumnOption[];
}

export function MultiColumnSortDialog({
  isOpen,
  onClose,
  onApply,
  currentSorting,
  columnOptions,
}: MultiColumnSortDialogProps): React.ReactElement {
  const [selectedSortColumns, setSelectedSortColumns] = useState<
    SortColumnItem[]
  >([]);

  // Initialize selected sort columns from current sorting
  useEffect(() => {
    if (isOpen) {
      const selectedColumns: SortColumnItem[] = [];
      for (const sort of currentSorting) {
        const column = columnOptions.find((col) => col.id === sort.id);
        if (column) {
          selectedColumns.push({
            ...column,
            direction: sort.desc ? "desc" : "asc",
          });
        }
      }
      setSelectedSortColumns(selectedColumns);
    }
  }, [isOpen, currentSorting, columnOptions]);

  const handleAddColumn = useCallback((column: ColumnOption) => {
    setSelectedSortColumns((prev) => [
      ...prev,
      { ...column, direction: "asc" },
    ]);
  }, []);

  const handleRemoveSortColumn = useCallback((id: string) => {
    setSelectedSortColumns((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleReorderSortColumns = useCallback(
    (fromIndex: number, toIndex: number) => {
      setSelectedSortColumns((prev) => {
        const newColumns = [...prev];
        const [removed] = newColumns.splice(fromIndex, 1);
        newColumns.splice(toIndex, 0, removed);
        return newColumns;
      });
    },
    [],
  );

  const handleToggleSortDirection = useCallback((id: string) => {
    setSelectedSortColumns((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, direction: item.direction === "asc" ? "desc" : "asc" }
          : item
      )
    );
  }, []);

  const handleApply = useCallback(() => {
    const sortingState: SortingState = selectedSortColumns.map((col) => ({
      id: col.id,
      desc: col.direction === "desc",
    }));
    onApply(sortingState);
    onClose();
  }, [selectedSortColumns, onApply, onClose]);

  const availableColumns = useMemo(
    () =>
      columnOptions.filter(
        (col) =>
          col.canSort
          && !selectedSortColumns.some((selected) => selected.id === col.id),
      ),
    [columnOptions, selectedSortColumns],
  );

  const sortableItems: SortableItem[] = useMemo(() => {
    return selectedSortColumns.map((item) => ({
      id: item.id,
      content: (
        <div className={styles.sortColumnItem}>
          <span className={styles.sortColumnName}>{item.name}</span>
          <button
            className={styles.sortDirectionButton}
            onClick={() => handleToggleSortDirection(item.id)}
            aria-label={`Toggle sort direction for ${item.name}`}
          >
            {item.direction === "asc"
              ? <SortAlphabetical className={styles.sortIcon} />
              : <SortAlphabeticalDesc className={styles.sortIcon} />}
          </button>
        </div>
      ),
    }));
  }, [selectedSortColumns, handleToggleSortDirection]);

  const footer = (
    <>
      <DialogButton onClick={onClose}>Cancel</DialogButton>
      <DialogButton variant="primary" onClick={handleApply}>
        Apply Sorts
      </DialogButton>
    </>
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Sort on Multiple Columns"
      footer={footer}
    >
      <div className={styles.sortColumnsList}>
        {selectedSortColumns.length > 0 && (
          <SortableItemsList
            items={sortableItems}
            onReorder={handleReorderSortColumns}
            onRemove={handleRemoveSortColumn}
          />
        )}
        <Menu.Root>
          <Menu.Trigger
            className={styles.addColumnButton}
            disabled={availableColumns.length === 0}
          >
            <Add className={styles.addIcon} />
            <span className={styles.addColumnText}>Add Column to Sort</span>
            <CaretDown color={"currentColor"} />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner className={styles.menuPositioner} sideOffset={4}>
              <Menu.Popup className={styles.dropdownMenu}>
                {availableColumns.map((column) => (
                  <Menu.Item
                    key={column.id}
                    className={styles.dropdownItem}
                    onClick={() => handleAddColumn(column)}
                  >
                    {column.name}
                  </Menu.Item>
                ))}
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>
    </Dialog>
  );
}
