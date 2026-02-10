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
  ChevronDown,
  Pin,
  Remove,
  Settings,
  Sort,
  SortAlphabetical,
  SortAlphabeticalDesc,
  Unpin,
  VerticalDistribution,
} from "@blueprintjs/icons";
import type {
  Header,
  RowData,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { type ColumnConfig, ColumnConfigDialog } from "./ColumnConfigDialog.js";
import { MultiColumnSortDialog } from "./MultiColumnSortDialog.js";
import { TableHeaderContent } from "./TableHeaderContent.js";
import styles from "./TableHeaderWithPopover.module.css";
import type { ColumnOption } from "./utils/types.js";

interface HeaderMenuItemProps {
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  label: string;
  active?: boolean;
}

function HeaderMenuItem({
  onClick,
  icon: Icon,
  label,
  active = false,
}: HeaderMenuItemProps): React.ReactElement {
  return (
    <Menu.Item
      closeOnClick
      className={classNames(
        styles.osdkCenterContainer,
        styles.osdkContentGap,
        styles.osdkHeaderMenuItem,
        active && styles.osdkHeaderActiveMenuItem,
      )}
      onClick={onClick}
    >
      <Icon className={styles.osdkHeaderIcon} color="currentColor" />
      <span>{label}</span>
    </Menu.Item>
  );
}

export interface HeaderMenuFeatureFlags {
  /**
   * Whether sorting menu items should be shown.
   * When false, hides "Sort ascending", "Sort descending", "Sort on multiple columns", and "Clear all sorts".
   */
  showSortingItems?: boolean;
  /**
   * Whether pinning menu items should be shown.
   * When false, hides "Pin column" and "Unpin Column".
   */
  showPinningItems?: boolean;
  /**
   * Whether resize menu item should be shown.
   * When false, hides "Reset Column Size".
   */
  showResizeItem?: boolean;
  /**
   * Whether column config menu item should be shown.
   * When false, hides "Configure Columns".
   */
  showConfigItem?: boolean;
}

interface TableHeaderWithPopoverProps<
  TData extends RowData,
> {
  table: Table<TData>;
  header: Header<TData, unknown>;
  isColumnPinned: false | "left" | "right";
  onResetSize?: () => void;
  columnOptions?: ColumnOption[];
  featureFlags?: HeaderMenuFeatureFlags;
}

export function TableHeaderWithPopover<
  TData extends RowData,
>({
  header,
  table,
  isColumnPinned,
  onResetSize,
  columnOptions,
  featureFlags,
}: TableHeaderWithPopoverProps<TData>): React.ReactElement {
  const {
    showSortingItems = false,
    showPinningItems = false,
    showResizeItem = false,
    showConfigItem = false,
  } = featureFlags ?? {};

  const {
    setColumnPinning,
    setColumnOrder,
    setColumnVisibility,
    setSorting,
  } = table;

  const currentSorting = table.getState().sorting;
  const currentVisibility = table.getState().columnVisibility;
  const currentColumnOrder = table.getState().columnOrder;

  const [isOpen, setIsOpen] = useState(false);
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [multiSortDialogOpen, setMultiSortDialogOpen] = useState(false);

  const handlePinLeft = useCallback(() => {
    setColumnPinning((prev) => {
      return {
        left: [...(prev.left || []), header.column.id],
        right: prev.right?.filter((id) => id !== header.column.id) || [],
      };
    });
  }, [header.column.id, setColumnPinning]);

  const handleUnpin = useCallback(() => {
    setColumnPinning((prev) => {
      return {
        left: prev.left?.filter((id) => id !== header.column.id) || [],
        right: prev.right?.filter((id) => id !== header.column.id) || [],
      };
    });
  }, [header.column.id, setColumnPinning]);

  const handleSortAscending = useCallback(() => {
    header.column.toggleSorting(false);
    setSorting?.([{ id: header.column.id, desc: false }]);
  }, [header.column, setSorting]);

  const handleSortDescending = useCallback(() => {
    header.column.toggleSorting(true);
    setSorting?.([{ id: header.column.id, desc: true }]);
  }, [header.column, setSorting]);

  const handleClearAllSorts = useCallback(() => {
    header.column.clearSorting();
    setSorting?.([]);
  }, [header.column, setSorting]);

  const handleResetSize = useCallback(() => {
    header.column.resetSize();
    if (onResetSize) {
      onResetSize();
    }
  }, [header.column, onResetSize]);

  const handleInteraction = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    },
    [],
  );

  const handleOpenColumnConfig = useCallback(() => {
    setConfigDialogOpen(true);
    setIsOpen(false);
  }, []);

  const handleCloseColumnConfig = useCallback(() => {
    setConfigDialogOpen(false);
  }, []);

  const handleOpenMultiSort = useCallback(() => {
    setMultiSortDialogOpen(true);
    setIsOpen(false);
  }, []);

  const handleCloseMultiSort = useCallback(() => {
    setMultiSortDialogOpen(false);
  }, []);

  const handleApplyMultiSort = useCallback(
    (sortColumns: SortingState) => {
      setMultiSortDialogOpen(false);
      setSorting?.(sortColumns);
    },
    [setSorting],
  );

  const handleApplyColumnConfig = useCallback(
    (
      updates: ColumnConfig[],
    ) => {
      const newVisibilityState: VisibilityState = {};
      for (const update of updates) {
        newVisibilityState[update.columnId] = update.isVisible;
      }

      setColumnOrder(updates.map(col => col.columnId));
      setColumnVisibility(newVisibilityState);
    },
    [
      setColumnOrder,
      setColumnVisibility,
    ],
  );

  const isSorted = header.column.getIsSorted();
  const isSortable = header.column.getCanSort();
  const sortIndex = currentSorting?.findIndex(s => s.id === header.column.id)
    ?? -1;

  const hasAnyMenuItems = showPinningItems
    || (showSortingItems && isSortable)
    || showResizeItem
    || showConfigItem;

  return (
    <>
      <Menu.Root open={isOpen} onOpenChange={setIsOpen}>
        <div
          className={classNames(
            styles.osdkCenterContainer,
            styles.osdkContentGap,
            styles.osdkHeaderContainer,
          )}
          onContextMenu={handleInteraction}
        >
          <div
            className={classNames(
              styles.osdkCenterContainer,
              styles.osdkContentGap,
              styles.osdkHeaderContentLeft,
            )}
          >
            {isColumnPinned && (
              <Pin
                className={styles.osdkHeaderIcon}
                color={"currentColor"}
              />
            )}
            <TableHeaderContent header={header} />
          </div>
          <div
            className={classNames(
              styles.osdkCenterContainer,
              styles.osdkContentGap,
              styles.osdkHeaderContentRight,
            )}
          >
            {isSorted && (
              <div className={styles.osdkCenterContainer}>
                {isSorted === "asc"
                  ? (
                    <SortAlphabetical
                      className={styles.osdkHeaderIcon}
                    />
                  )
                  : (
                    <SortAlphabeticalDesc
                      className={styles.osdkHeaderIcon}
                    />
                  )}
                {currentSorting.length > 1 && sortIndex >= 0
                  && <span className={styles.sortIndex}>{sortIndex + 1}</span>}
              </div>
            )}
            {hasAnyMenuItems && (
              <Menu.Trigger
                aria-label={`Open header menu for column with id=${header.column.id}`}
                className={classNames(
                  styles.osdkCenterContainer,
                  styles.osdkHeaderPopoverTrigger,
                )}
              >
                <ChevronDown
                  className={styles.osdkHeaderIcon}
                />
              </Menu.Trigger>
            )}
          </div>
          <Menu.Portal container={document.body}>
            <Menu.Positioner sideOffset={4}>
              <Menu.Popup
                className={styles.osdkHeaderPopup}
              >
                {showPinningItems && !isColumnPinned && (
                  <HeaderMenuItem
                    onClick={handlePinLeft}
                    icon={Pin}
                    label="Pin column"
                  />
                )}

                {showPinningItems && isColumnPinned && (
                  <HeaderMenuItem
                    onClick={handleUnpin}
                    icon={Unpin}
                    label="Unpin Column"
                    active={true}
                  />
                )}
                {showSortingItems && isSortable && (
                  <>
                    <HeaderMenuItem
                      onClick={handleSortAscending}
                      icon={SortAlphabetical}
                      label="Sort ascending"
                      active={isSorted === "asc"}
                    />
                    <HeaderMenuItem
                      onClick={handleSortDescending}
                      icon={SortAlphabeticalDesc}
                      label="Sort descending"
                      active={isSorted === "desc"}
                    />
                    {columnOptions?.some(col => col.canSort) && (
                      <HeaderMenuItem
                        onClick={handleOpenMultiSort}
                        icon={Sort}
                        label="Sort on multiple columns"
                      />
                    )}
                  </>
                )}
                {showSortingItems && !!currentSorting?.length
                  && (
                    <HeaderMenuItem
                      onClick={handleClearAllSorts}
                      icon={Remove}
                      label="Clear all sorts"
                    />
                  )}
                {showResizeItem && (
                  <HeaderMenuItem
                    onClick={handleResetSize}
                    icon={VerticalDistribution}
                    label="Reset Column Size"
                  />
                )}
                {showConfigItem && (
                  <HeaderMenuItem
                    onClick={handleOpenColumnConfig}
                    icon={Settings}
                    label="Configure Columns"
                  />
                )}
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </div>
      </Menu.Root>
      {!!columnOptions?.length && (
        <ColumnConfigDialog
          isOpen={configDialogOpen}
          onClose={handleCloseColumnConfig}
          columnOptions={columnOptions}
          currentVisibility={currentVisibility}
          currentColumnOrder={currentColumnOrder}
          onApply={handleApplyColumnConfig}
        />
      )}
      {columnOptions?.some(col => col.canSort) && (
        <MultiColumnSortDialog
          isOpen={multiSortDialogOpen}
          onClose={handleCloseMultiSort}
          columnOptions={columnOptions}
          currentSorting={currentSorting}
          onApply={handleApplyMultiSort}
        />
      )}
    </>
  );
}
