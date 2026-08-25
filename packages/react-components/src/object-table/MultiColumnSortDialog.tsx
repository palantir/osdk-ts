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

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  MenuItem,
} from "@blueprintjs/core";
import { Add, CaretDown, Cog } from "@blueprintjs/icons";
import {
  Select,
  type ItemPredicate,
  type ItemRenderer,
} from "@blueprintjs/select";
import { arrayMove } from "@dnd-kit/sortable";
import type { SortingState } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../shared/PortalContainerContext.js";
import { type SortableItem, SortableItemsList } from "./SortableItemsList.js";
import { getSortIcons } from "./utils/getSortIcons.js";
import type { ColumnOption } from "./utils/types.js";

import styles from "./MultiColumnSortDialog.module.css";

export interface SortColumnItem extends ColumnOption {
  direction: "asc" | "desc";
}

const COLUMN_SELECT_INPUT_PROPS = { placeholder: "Search columns" };
const NO_MATCHING_COLUMNS = (
  <MenuItem disabled={true} text="No matching columns" />
);

const filterColumnOption: ItemPredicate<ColumnOption> = (query, column) =>
  column.name.toLowerCase().includes(query.toLowerCase().trim());

const renderColumnOption: ItemRenderer<ColumnOption> = (
  column,
  { handleClick, modifiers },
) => {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      active={modifiers.active}
      key={column.id}
      onClick={handleClick}
      text={column.name}
    />
  );
};

export interface MultiColumnSortDialogProps {
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
  const portalContainer = resolvePortalContainerElement(usePortalContainer());
  const selectPopoverProps = useMemo(
    () => ({ portalContainer }),
    [portalContainer],
  );
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
      setSelectedSortColumns((items) => arrayMove(items, fromIndex, toIndex));
    },
    [],
  );

  const handleToggleSortDirection = useCallback((id: string) => {
    setSelectedSortColumns((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, direction: item.direction === "asc" ? "desc" : "asc" }
          : item,
      ),
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
          col.canSort &&
          !selectedSortColumns.some((selected) => selected.id === col.id),
      ),
    [columnOptions, selectedSortColumns],
  );

  const sortableItems: SortableItem[] = useMemo(() => {
    return selectedSortColumns.map((item) => {
      const { asc: SortAscendingIcon, desc: SortDescendingIcon } = getSortIcons(
        item.dataType,
      );
      return {
        id: item.id,
        label: item.name,
        content: (
          <div className={styles.sortColumnItem}>
            <span
              className={classNames(styles.sortColumnName, styles.truncate)}
            >
              {item.name}
            </span>
            <Button
              className={styles.sortDirectionButton}
              onClick={() => handleToggleSortDirection(item.id)}
              aria-label={`Toggle sort direction for ${item.name}`}
            >
              {item.direction === "asc" ? (
                <SortAscendingIcon className={styles.sortIcon} />
              ) : (
                <SortDescendingIcon className={styles.sortIcon} />
              )}
            </Button>
          </div>
        ),
      };
    });
  }, [selectedSortColumns, handleToggleSortDirection]);

  const footer = useMemo(
    () => (
      <>
        <Button onClick={onClose}>Cancel</Button>
        <Button intent="primary" onClick={handleApply}>
          Apply
        </Button>
      </>
    ),
    [handleApply, onClose],
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={DialogTitle}
      portalContainer={portalContainer}
    >
      <DialogBody>
        <div className={styles.sortColumnsList}>
          <SortableItemsList
            items={sortableItems}
            onReorder={handleReorderSortColumns}
            onRemove={handleRemoveSortColumn}
            className={styles.sortableList}
          />
          <Select<ColumnOption>
            items={availableColumns}
            itemPredicate={filterColumnOption}
            itemRenderer={renderColumnOption}
            onItemSelect={handleAddColumn}
            inputProps={COLUMN_SELECT_INPUT_PROPS}
            noResults={NO_MATCHING_COLUMNS}
            popoverProps={selectPopoverProps}
          >
            <Button
              className={styles.addColumnButton}
              disabled={availableColumns.length === 0}
              icon={<Add className={styles.addIcon} />}
              rightIcon={<CaretDown />}
              text="Add Column to Sort"
            />
          </Select>
        </div>
      </DialogBody>
      <DialogFooter actions={footer} />
    </Dialog>
  );
}

const DialogTitle = (
  <div className={styles.title}>
    <Cog />
    Sort on Multiple Columns
  </div>
);
