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
import { Collapsible } from "@base-ui/react/collapsible";
import { CaretDown, Search } from "@blueprintjs/icons";
import { arrayMove } from "@dnd-kit/sortable";
import type {
  ObjectOrInterfaceDefinition,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { ColumnOrderState, VisibilityState } from "@tanstack/react-table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Checkbox } from "../base-components/checkbox/Checkbox.js";
import { Dialog, DialogButton } from "../base-components/dialog/Dialog.js";
import styles from "./ColumnConfigDialog.module.css";
import { DraggableList } from "./DraggableList.js";
import type { ColumnOption } from "./utils/types.js";

export interface ColumnConfig {
  columnId: string;
  isVisible: boolean;
  order: number;
}

export interface ColumnConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  columnOptions: ColumnOption[];
  currentVisibility?: VisibilityState;
  currentColumnOrder?: ColumnOrderState;
  onApply: (
    columns: ColumnConfig[],
  ) => void;
}

interface ColumnItem {
  id: string;
  label: string;
  isVisible: boolean;
}

export function ColumnConfigDialog<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  isOpen,
  onClose,
  columnOptions,
  currentVisibility,
  currentColumnOrder,
  onApply,
}: ColumnConfigDialogProps):
  | React.ReactElement
  | null
{
  const [visibleColumns, setVisibleColumns] = useState<ColumnItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allColumns = useMemo(() => {
    return columnOptions.map((opt) => {
      const isVisible = currentVisibility
        ? currentVisibility[opt.id]
        : true;
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
    const result = allColumns.map((col) => ({
      columnId: col.id,
      isVisible: visibleColumns.some((v) => v.id === col.id),
      order: visibleColumns.findIndex((v) => v.id === col.id),
    }));

    // Sort by visibility order, non-visible at the end
    result.sort((a, b) => {
      if (a.isVisible && !b.isVisible) return -1;
      if (!a.isVisible && b.isVisible) return 1;
      if (a.isVisible && b.isVisible) return a.order - b.order;
      return 0;
    });

    // Re-assign orders
    result.forEach((item, index) => {
      item.order = index;
    });

    onApply(result);
    onClose();
  }, [allColumns, visibleColumns, onApply, onClose]);

  const isApplyDisabled = visibleColumns.length === 0;

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
      <DialogButton onClick={onClose}>Cancel</DialogButton>
      <DialogButton
        variant="primary"
        onClick={handleApply}
        disabled={isApplyDisabled}
      >
        Apply
      </DialogButton>
    </>
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Configure Columns"
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
      <h4 className={styles.sectionTitle}>Visible Columns</h4>
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
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search available columns"
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
