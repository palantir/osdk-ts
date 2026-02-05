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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type {
  ColumnOrderState,
  ColumnPinningState,
  Header,
  OnChangeFn,
  RowData,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { ColumnConfigDialog } from "./ColumnConfigDialog.js";
import { MultiColumnSortDialog } from "./MultiColumnSortDialog.js";
import { TableHeaderContent } from "./TableHeaderContent.js";
import styles from "./TableHeaderWithPopover.module.css";
import { SELECTION_COLUMN_ID } from "./utils/constants.js";
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

interface TableHeaderWithPopoverProps<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  header: Header<TData, unknown>;
  isColumnPinned: false | "left" | "right";
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  onSortChange?: (sorting: SortingState) => void;
  onResetSize?: () => void;
  enableColumnPinningRight?: boolean;
  currentSorting?: SortingState;
  columnOptions?: ColumnOption[];
  onColumnVisibilityChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      isVisible: boolean;
    }>,
  ) => void;
  setColumnVisibility?: OnChangeFn<VisibilityState>;
  currentVisibility?: VisibilityState;
  setColumnOrder?: OnChangeFn<ColumnOrderState>;
  currentColumnOrder?: ColumnOrderState;
}

export function TableHeaderWithPopover<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  header,
  isColumnPinned,
  setColumnPinning,
  onSortChange,
  onResetSize,
  currentSorting,
  columnOptions,
  onColumnVisibilityChanged,
  setColumnVisibility,
  currentVisibility,
  setColumnOrder,
  currentColumnOrder,
}: TableHeaderWithPopoverProps<
  TData,
  Q,
  RDPs,
  FunctionColumns
>): React.ReactElement {
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
    onSortChange?.([{ id: header.column.id, desc: false }]);
  }, [header.column, onSortChange]);

  const handleSortDescending = useCallback(() => {
    header.column.toggleSorting(true);
    onSortChange?.([{ id: header.column.id, desc: true }]);
  }, [header.column, onSortChange]);

  const handleClearAllSorts = useCallback(() => {
    header.column.clearSorting();
    onSortChange?.([]);
  }, [header.column, onSortChange]);

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
      onSortChange?.(sortColumns);
    },
    [onSortChange],
  );

  const handleApplyColumnConfig = useCallback(
    (
      updates: Array<{
        columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
        isVisible: boolean;
        order: number;
      }>,
    ) => {
      // Sort updates by order
      const sortedUpdates = [...updates].sort((a, b) => a.order - b.order);

      // Update table's column visibility state
      if (setColumnVisibility) {
        const newVisibilityState: VisibilityState = {};
        for (const update of sortedUpdates) {
          newVisibilityState[String(update.columnId)] = update.isVisible;
        }
        setColumnVisibility(newVisibilityState);
      }

      // Update table's column order state
      if (setColumnOrder) {
        // Build new column order from sorted updates (includes ALL columns)
        // Keep selection column at the start if present
        const newColumnOrder: ColumnOrderState = [];
        if (
          currentColumnOrder
          && currentColumnOrder.includes(SELECTION_COLUMN_ID)
        ) {
          newColumnOrder.push(SELECTION_COLUMN_ID);
        }
        // Add all columns in their new order (visible first, then hidden)
        for (const update of sortedUpdates) {
          newColumnOrder.push(String(update.columnId));
        }
        setColumnOrder(newColumnOrder);
      }

      // Notify parent about visibility changes
      if (onColumnVisibilityChanged) {
        const visibilityChanges = sortedUpdates.map((update) => ({
          columnId: update.columnId,
          isVisible: update.isVisible,
        }));
        onColumnVisibilityChanged(visibilityChanges);
      }
    },
    [
      setColumnVisibility,
      setColumnOrder,
      currentColumnOrder,
      onColumnVisibilityChanged,
    ],
  );

  const isSorted = header.column.getIsSorted();
  const isSortable = header.column.getCanSort();
  const sortIndex = currentSorting?.findIndex(s => s.id === header.column.id)
    ?? -1;

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
                {currentSorting && currentSorting.length > 1 && sortIndex >= 0
                  && <span className={styles.sortIndex}>{sortIndex + 1}</span>}
              </div>
            )}
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
          </div>
          <Menu.Portal container={document.body}>
            <Menu.Positioner sideOffset={4}>
              <Menu.Popup
                className={styles.osdkHeaderPopup}
              >
                {!isColumnPinned && (
                  <HeaderMenuItem
                    onClick={handlePinLeft}
                    icon={Pin}
                    label="Pin column"
                  />
                )}

                {isColumnPinned && (
                  <HeaderMenuItem
                    onClick={handleUnpin}
                    icon={Unpin}
                    label="Unpin Column"
                    active={true}
                  />
                )}
                {isSortable && (
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
                {isSortable && !!currentSorting && currentSorting.length > 0
                  && (
                    <HeaderMenuItem
                      onClick={handleClearAllSorts}
                      icon={Remove}
                      label="Clear all sorts"
                    />
                  )}
                <HeaderMenuItem
                  onClick={handleResetSize}
                  icon={VerticalDistribution}
                  label="Reset Column Size"
                />

                <HeaderMenuItem
                  onClick={handleOpenColumnConfig}
                  icon={Settings}
                  label="Configure Columns"
                />
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
          onApply={handleApplyMultiSort}
          currentSorting={currentSorting ?? []}
          columnOptions={columnOptions}
        />
      )}
    </>
  );
}
