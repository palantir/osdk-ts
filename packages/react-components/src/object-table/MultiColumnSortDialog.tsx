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

import { Button } from "@base-ui/react/button";
import { Menu } from "@base-ui/react/menu";
import {
  Add,
  CaretDown,
  Cog,
  SortAlphabetical,
  SortAlphabeticalDesc,
} from "@blueprintjs/icons";
import { arrayMove } from "@dnd-kit/sortable";
import type { SortingState } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { Dialog } from "../base-components/dialog/Dialog.js";
import { SearchBar } from "../base-components/search-bar/SearchBar.js";
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
  const [menuSearchQuery, setMenuSearchQuery] = useState("");

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
      setSelectedSortColumns((items) => arrayMove(items, fromIndex, toIndex));
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

  const filteredAvailableColumns = useMemo(() => {
    const query = menuSearchQuery.toLowerCase().trim();
    if (!query) {
      return availableColumns;
    }
    return availableColumns.filter((col) =>
      col.name.toLowerCase().includes(query)
    );
  }, [availableColumns, menuSearchQuery]);

  const handleMenuSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMenuSearchQuery(event.target.value);
    },
    [],
  );

  const handleMenuOpenChange = useCallback((open: boolean) => {
    if (open) {
      setMenuSearchQuery("");
    }
  }, []);

  const sortableItems: SortableItem[] = useMemo(() => {
    return selectedSortColumns.map((item) => ({
      id: item.id,
      label: item.name,
      content: (
        <div className={styles.sortColumnItem}>
          <span className={classNames(styles.sortColumnName, styles.truncate)}>
            {item.name}
          </span>
          <Button
            className={styles.sortDirectionButton}
            onClick={() => handleToggleSortDirection(item.id)}
            aria-label={`Toggle sort direction for ${item.name}`}
          >
            {item.direction === "asc"
              ? <SortAlphabetical className={styles.sortIcon} />
              : <SortAlphabeticalDesc className={styles.sortIcon} />}
          </Button>
        </div>
      ),
    }));
  }, [selectedSortColumns, handleToggleSortDirection]);

  const footer = useMemo(() => (
    <>
      <ActionButton onClick={onClose}>Cancel</ActionButton>
      <ActionButton variant="primary" onClick={handleApply}>
        Apply
      </ActionButton>
    </>
  ), [handleApply, onClose]);

  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onClose}
      title={DialogTitle}
      footer={footer}
    >
      <div className={styles.sortColumnsList}>
        <SortableItemsList
          items={sortableItems}
          onReorder={handleReorderSortColumns}
          onRemove={handleRemoveSortColumn}
          className={styles.sortableList}
        />
        <Menu.Root onOpenChange={handleMenuOpenChange}>
          <Menu.Trigger
            className={styles.addColumnButton}
            disabled={availableColumns.length === 0}
            aria-label="Add column to sort"
          >
            <Add className={styles.addIcon} />
            <span className={styles.addColumnText}>
              Add Column to Sort
            </span>
            <CaretDown color={"currentColor"} />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner className={styles.menuPositioner} sideOffset={4}>
              <Menu.Popup className={styles.dropdownMenu}>
                <SearchBar
                  value={menuSearchQuery}
                  onChange={handleMenuSearchChange}
                  placeholder="Search columns"
                  aria-label="Search columns to sort"
                  className={styles.menuSearchContainer}
                  onKeyDown={(e) => e.stopPropagation()}
                />
                {filteredAvailableColumns.map((column) => (
                  <AvailableColumnMenuItem
                    key={column.id}
                    column={column}
                    onAddColumn={handleAddColumn}
                  />
                ))}
                {filteredAvailableColumns.length === 0 && (
                  <div className={styles.menuEmptyState}>
                    No matching columns
                  </div>
                )}
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>
    </Dialog>
  );
}

const DialogTitle = (
  <div className={styles.title}>
    <Cog />Sort on Multiple Columns
  </div>
);
function AvailableColumnMenuItem(
  { column, onAddColumn }: {
    column: ColumnOption;
    onAddColumn: (column: ColumnOption) => void;
  },
) {
  const onClick = useCallback(() => onAddColumn(column), [onAddColumn, column]);

  return (
    <Menu.Item
      className={classNames(styles.dropdownItem, styles.truncate)}
      onClick={onClick}
    >
      {column.name}
    </Menu.Item>
  );
}
