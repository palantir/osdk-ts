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
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  InputGroup,
  Section,
  SectionCard,
} from "@blueprintjs/core";
import { Cog, Search, SmallInfoSign } from "@blueprintjs/icons";
import { arrayMove } from "@dnd-kit/sortable";
import type { ColumnOrderState, VisibilityState } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { DraggableList } from "../base-components/draggable-list/DraggableList.js";
import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../shared/PortalContainerContext.js";
import type { ColumnOption } from "./utils/types.js";

import styles from "./ColumnConfigDialog.module.css";

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
  onApply: (columns: ColumnConfig[]) => void;
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
}: ColumnConfigDialogProps): React.ReactElement | null {
  const portalContainer = resolvePortalContainerElement(usePortalContainer());
  const [visibleColumns, setVisibleColumns] = useState<ColumnItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allColumns: ColumnItem[] = useMemo(() => {
    return columnOptions.map((opt) => {
      const isVisible = currentVisibility ? currentVisibility[opt.id] : false;

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
        prev.some((v) => v.id === col.id),
      );
      if (allSelected) {
        // Deselect all filtered columns
        return prev.filter((v) => !columns.some((col) => col.id === v.id));
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
        (col.label?.toLowerCase().includes(query) ?? false) ||
        col.id.toLowerCase().includes(query),
    );
  }, [allColumns, searchQuery]);

  const footer = useMemo(
    () => (
      <>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          intent="primary"
          onClick={handleApply}
          disabled={isApplyDisabled}
        >
          Apply
        </Button>
      </>
    ),
    [onClose, handleApply, isApplyDisabled],
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={DialogTitle}
      className={styles.columnConfigDialog}
      portalContainer={portalContainer}
    >
      <DialogBody>
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
      </DialogBody>
      <DialogFooter actions={footer} />
    </Dialog>
  );
}

const DialogTitle = (
  <div className={styles.title}>
    <Cog />
    Configure Table Columns
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
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span>Visible Columns</span>
          <span className={styles.countTag}>{columns.length}</span>
        </div>
        <div className={styles.sectionHint}>Drag to reorder</div>
      </div>
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
    visibleColumns.some((v) => v.id === col.id),
  );
  const someFilteredSelected = filteredColumns.some((col) =>
    visibleColumns.some((v) => v.id === col.id),
  );

  const handleSelectAllClick = useCallback(() => {
    onSelectAll(filteredColumns);
  }, [filteredColumns, onSelectAll]);

  return (
    <div className={styles.availableColumnsContainer}>
      <div className={classNames(styles.sectionHeader, styles.sectionTitle)}>
        Add or Remove Columns
      </div>
      <InputGroup
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search..."
        aria-label="Search available columns"
        className={styles.searchContainer}
        leftIcon={<Search />}
      />
      <Section
        collapsible={true}
        className={styles.propertiesList}
        title="Available columns"
        rightElement={
          <span className={styles.categoryCount}>
            {selectedCount}/{totalCount}
          </span>
        }
      >
        <SectionCard className={styles.propertyList}>
          <Checkbox
            checked={allFilteredSelected}
            indeterminate={someFilteredSelected && !allFilteredSelected}
            onChange={handleSelectAllClick}
            className={styles.checkbox}
            label="All Columns"
          />
          {filteredColumns.length === 0 ? (
            <div className={styles.emptyState}>No matching columns found</div>
          ) : (
            filteredColumns.map((column) => (
              <PropertyItem
                key={column.id}
                column={column}
                isSelected={visibleColumns.some((v) => v.id === column.id)}
                onToggle={onToggleColumn}
              />
            ))
          )}
        </SectionCard>
      </Section>
    </div>
  );
}

interface PropertyItemProps {
  column: ColumnItem;
  isSelected: boolean;
  onToggle: (column: ColumnItem) => void;
  showInfoIcon?: boolean;
}

function PropertyItem({
  column,
  isSelected,
  onToggle,
  showInfoIcon = false,
}: PropertyItemProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onToggle(column);
  }, [onToggle, column]);

  return (
    <div className={styles.propertyItem}>
      <Checkbox
        checked={isSelected}
        onChange={handleClick}
        className={styles.checkbox}
        labelElement={
          <span className={styles.propertyName}>{column.label}</span>
        }
      />
      {showInfoIcon && <SmallInfoSign className={styles.infoIcon} />}
    </div>
  );
}
