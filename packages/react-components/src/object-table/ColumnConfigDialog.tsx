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

import { Collapsible } from "@base-ui/react/collapsible";
import { Input } from "@base-ui/react/input";
import { CaretDown, Cog, Search } from "@blueprintjs/icons";
import { arrayMove } from "@dnd-kit/sortable";
import type { ColumnOrderState, VisibilityState } from "@tanstack/react-table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../base-components/button/Button.js";
import { Checkbox } from "../base-components/checkbox/Checkbox.js";
import { Dialog } from "../base-components/dialog/Dialog.js";
import { DraggableList } from "../base-components/draggable-list/DraggableList.js";
import styles from "./ColumnConfigDialog.module.css";
import type { ColumnOption } from "./utils/types.js";

export interface ColumnConfig {
  columnId: string;
  isVisible: boolean;
}

export type ColumnConfigOptions = Array<Pick<ColumnOption, "id" | "name">>;

export interface ColumnConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  columnOptions: ColumnConfigOptions;
  currentVisibility?: VisibilityState;
  currentColumnOrder?: ColumnOrderState;
  onApply: (
    columns: ColumnConfig[],
  ) => void;
  isValidConfig?: (columns: ColumnConfig[]) => boolean;
}

interface ColumnItem {
  id: string;
  label: string;
  isVisible: boolean;
}

export function ColumnConfigDialog({
  isOpen,
  onClose,
  columnOptions,
  currentVisibility,
  currentColumnOrder,
  onApply,
  isValidConfig,
}: ColumnConfigDialogProps):
  | React.ReactElement
  | null
{
  const [visibleColumns, setVisibleColumns] = useState<ColumnItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allColumns: ColumnItem[] = useMemo(() => {
    return columnOptions.map((opt) => {
      const isVisible = currentVisibility
        ? currentVisibility[opt.id]
        : false;

      return {
        id: opt.id,
        label: opt.name,
        isVisible,
      };
    });
  }, [columnOptions, currentVisibility]);

  // Sync local state with prop when dialog is opened
  useEffect(() => {
    if (isOpen) {
      const visibleCols = allColumns.filter((col) => col.isVisible);

      // Sort by current column order if available
      if (!!currentColumnOrder?.length) {
        visibleCols.sort((a, b) => {
          const indexA = currentColumnOrder.indexOf(a.id);
          const indexB = currentColumnOrder.indexOf(b.id);
          // If not in order array, put at end
          const orderA = indexA === -1 ? Infinity : indexA;
          const orderB = indexB === -1 ? Infinity : indexB;
          return orderA - orderB;
        });
      }

      setVisibleColumns(visibleCols);
      setSearchQuery("");
    }
  }, [isOpen, allColumns, currentColumnOrder]);

  const handleApply = useCallback(() => {
    onApply(getColumnConfig(allColumns, visibleColumns));
    onClose();
  }, [allColumns, visibleColumns, onApply, onClose]);

  // If no condition provided, default to valid
  const isValid = isValidConfig
    ? isValidConfig(getColumnConfig(allColumns, visibleColumns))
    : true;

  const isApplyDisabled = visibleColumns.length === 0 || !isValid;

  const handleReorderColumns = useCallback(
    (fromIndex: number, toIndex: number) => {
      setVisibleColumns((items) => arrayMove(items, fromIndex, toIndex));
    },
    [],
  );

  const handleRemoveColumn = useCallback((columnId: string) => {
    setVisibleColumns((prev) => prev.filter((col) => col.id !== columnId));
  }, []);

  const handleToggleColumn = useCallback((column: ColumnItem) => {
    setVisibleColumns((prev) => {
      const isCurrentlyVisible = prev.some((col) => col.id === column.id);
      if (isCurrentlyVisible) {
        return prev.filter((col) => col.id !== column.id);
      } else {
        return [...prev, column];
      }
    });
  }, []);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [],
  );

  const handleSelectAll = useCallback((columns: ColumnItem[]) => {
    setVisibleColumns((prev) => {
      const allSelected = columns.every((col) =>
        prev.some((v) => v.id === col.id)
      );
      if (allSelected) {
        // Deselect all filtered columns
        return prev.filter(
          (v) => !columns.some((col) => col.id === v.id),
        );
      } else {
        // Select all filtered columns that aren't already selected
        const newColumns = columns.filter(
          (col) => !prev.some((v) => v.id === col.id),
        );
        return [...prev, ...newColumns];
      }
    });
  }, []);

  const filteredAvailableColumns = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return allColumns;
    }
    return allColumns.filter(
      (col) =>
        (col.label?.toLowerCase().includes(query) ?? false)
        || col.id.toLowerCase().includes(query),
    );
  }, [allColumns, searchQuery]);

  const footer = (
    <>
      <Button onClick={onClose}>Cancel</Button>
      <Button
        variant="primary"
        onClick={handleApply}
        disabled={isApplyDisabled}
      >
        Apply
      </Button>
    </>
  );

  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onClose}
      title={DialogTitle}
      footer={footer}
      className={styles.content}
    >
      <div className={styles.dialogLayout}>
        <VisibleColumnsList
          columns={visibleColumns}
          onReorder={handleReorderColumns}
          onRemove={handleRemoveColumn}
        />
        <AvailableColumnsList
          visibleColumns={visibleColumns}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onToggleColumn={handleToggleColumn}
          onSelectAll={handleSelectAll}
          filteredColumns={filteredAvailableColumns}
        />
      </div>
    </Dialog>
  );
}

const DialogTitle = (
  <div className={styles.title}>
    <Cog />Configure Columns
  </div>
);

const getColumnConfig = (
  allColumns: ColumnItem[],
  visibleColumns: ColumnItem[],
): ColumnConfig[] => {
  const hiddenColumns = allColumns.filter(
    (col) => !visibleColumns.some((v) => v.id === col.id),
  );

  return [
    ...visibleColumns.map((col) => ({ columnId: col.id, isVisible: true })),
    ...hiddenColumns.map((col) => ({ columnId: col.id, isVisible: false })),
  ];
};

interface VisibleColumnsListProps {
  columns: ColumnItem[];
  onReorder: (fromIndex: number, toIndex: number) => void;
  onRemove: (columnId: string) => void;
}

function VisibleColumnsList({
  columns,
  onReorder,
  onRemove,
}: VisibleColumnsListProps): React.ReactElement {
  return (
    <div className={styles.visibleColumnsContainer}>
      <div className={styles.sectionTitle}>Visible Columns</div>
      <DraggableList
        items={columns}
        onReorder={onReorder}
        onRemove={onRemove}
        removeIconVariant="trash"
        emptyMessage="No visible columns"
        className={styles.columnList}
      />
    </div>
  );
}

interface AvailableColumnsListProps {
  visibleColumns: ColumnItem[];
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleColumn: (column: ColumnItem) => void;
  onSelectAll: (columns: ColumnItem[]) => void;
  filteredColumns: ColumnItem[];
}

function AvailableColumnsList({
  visibleColumns,
  searchQuery,
  onSearchChange,
  onToggleColumn,
  onSelectAll,
  filteredColumns,
}: AvailableColumnsListProps): React.ReactElement {
  const selectedCount = visibleColumns.length;
  const totalCount = filteredColumns.length;
  const allFilteredSelected = filteredColumns.every((col) =>
    visibleColumns.some((v) => v.id === col.id)
  );
  const someFilteredSelected = filteredColumns.some((col) =>
    visibleColumns.some((v) => v.id === col.id)
  );

  const handleSelectAllClick = useCallback(() => {
    onSelectAll(filteredColumns);
  }, [filteredColumns, onSelectAll]);

  return (
    <div className={styles.availableColumnsContainer}>
      <div className={styles.searchContainer}>
        <div
          className={styles.searchInputWrapper}
        >
          <Search className={styles.searchIcon} />
          <Input
            type="text"
            placeholder="Search available columns"
            aria-label="Search available columns"
            value={searchQuery}
            onChange={onSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>
      <Collapsible.Root defaultOpen className={styles.propertiesList}>
        <div className={styles.categoryHeader}>
          <Checkbox
            checked={allFilteredSelected}
            indeterminate={someFilteredSelected && !allFilteredSelected}
            onCheckedChange={handleSelectAllClick}
            className={styles.checkbox}
          />
          <Collapsible.Trigger className={styles.categoryTrigger}>
            <span className={styles.categoryTitle}>Available Columns</span>
            <span className={styles.categoryCount}>
              {selectedCount} / {totalCount}
            </span>
            <CaretDown className={styles.caretIcon} />
          </Collapsible.Trigger>
        </div>
        <Collapsible.Panel className={styles.propertyList}>
          {filteredColumns.length === 0
            ? (
              <div className={styles.emptyState}>
                No matching columns found
              </div>
            )
            : (
              filteredColumns.map((column) => (
                <PropertyItem
                  key={column.id}
                  column={column}
                  isSelected={visibleColumns.some((v) => v.id === column.id)}
                  onToggle={onToggleColumn}
                />
              ))
            )}
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  );
}

interface PropertyItemProps {
  column: ColumnItem;
  isSelected: boolean;
  onToggle: (column: ColumnItem) => void;
}

function PropertyItem({
  column,
  isSelected,
  onToggle,
}: PropertyItemProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onToggle(column);
  }, [onToggle, column]);

  return (
    <Button className={styles.propertyItem} onClick={handleClick}>
      <Checkbox
        checked={isSelected}
        onCheckedChange={handleClick}
        className={styles.checkbox}
      />
      <span className={styles.propertyName}>{column.label}</span>
    </Button>
  );
}
