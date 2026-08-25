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

import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import {
  ChevronDown,
  Pin,
  Remove,
  Settings,
  Sort,
  Unpin,
  VerticalDistribution,
} from "@blueprintjs/icons";
import type { Header, RowData, Table } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";

import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../shared/PortalContainerContext.js";
import { TableHeaderContent } from "./TableHeaderContent.js";
import { getSortIcons } from "./utils/getSortIcons.js";
import type { ColumnOption } from "./utils/types.js";

import styles from "./TableHeaderWithPopover.module.css";

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
    <MenuItem
      active={active}
      className={classNames(
        styles.osdkCenterContainer,
        styles.osdkContentGap,
        styles.osdkHeaderMenuItem,
        active && styles.osdkHeaderActiveMenuItem,
      )}
      icon={<Icon className={styles.osdkHeaderIcon} />}
      onClick={onClick}
      text={label}
    />
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

interface TableHeaderWithPopoverProps<TData extends RowData> {
  table: Table<TData>;
  header: Header<TData, unknown>;
  isColumnPinned: false | "left" | "right";
  onResetSize?: () => void;
  columnOptions?: ColumnOption[];
  featureFlags?: HeaderMenuFeatureFlags;
  onOpenColumnConfig?: () => void;
  onOpenMultiSort?: () => void;
  onColumnHeaderClick?: (columnId: string) => void;
}

export function TableHeaderWithPopover<TData extends RowData>({
  header,
  table,
  isColumnPinned,
  onResetSize,
  columnOptions,
  featureFlags,
  onOpenColumnConfig,
  onOpenMultiSort,
  onColumnHeaderClick,
}: TableHeaderWithPopoverProps<TData>): React.ReactElement {
  const portalContainer = resolvePortalContainerElement(usePortalContainer());
  const {
    showSortingItems = false,
    showPinningItems = false,
    showResizeItem = false,
    showConfigItem = false,
  } = featureFlags ?? {};

  const { setColumnPinning, setSorting } = table;

  const currentSorting = table.getState().sorting;

  const [isOpen, setIsOpen] = useState(false);

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

  const handleInteraction = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }, []);

  const handleHeaderClick = useCallback(() => {
    onColumnHeaderClick?.(header.column.id);
  }, [header.column.id, onColumnHeaderClick]);

  const handleOpenColumnConfig = useCallback(() => {
    onOpenColumnConfig?.();
    setIsOpen(false);
  }, [onOpenColumnConfig]);

  const handleOpenMultiSort = useCallback(() => {
    onOpenMultiSort?.();
    setIsOpen(false);
  }, [onOpenMultiSort]);

  const isSorted = header.column.getIsSorted();
  const isSortable = header.column.getCanSort();
  const sortIndex =
    currentSorting?.findIndex((s) => s.id === header.column.id) ?? -1;

  // Match the sort glyphs to the column's property type: A→Z for text, 1→9 for
  // numbers, plain ascending/descending arrows for dates and everything else.
  const { asc: SortAscendingIcon, desc: SortDescendingIcon } = useMemo(
    () => getSortIcons(header.column.columnDef.meta?.dataType),
    [header.column.columnDef.meta?.dataType],
  );

  const hasAnyMenuItems =
    showPinningItems ||
    (showSortingItems && isSortable) ||
    showResizeItem ||
    showConfigItem;

  return (
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
          onColumnHeaderClick && styles.osdkHeaderContentLeftClickable,
        )}
        onClick={onColumnHeaderClick ? handleHeaderClick : undefined}
      >
        {isColumnPinned && <Pin className={styles.osdkHeaderIcon} />}
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
            {isSorted === "asc" ? (
              <SortAscendingIcon className={styles.osdkHeaderIcon} />
            ) : (
              <SortDescendingIcon className={styles.osdkHeaderIcon} />
            )}
            {currentSorting.length > 1 && sortIndex >= 0 && (
              <span className={styles.sortIndex}>{sortIndex + 1}</span>
            )}
          </div>
        )}
        {hasAnyMenuItems && (
          <Popover
            isOpen={isOpen}
            onInteraction={setIsOpen}
            placement="bottom-end"
            portalContainer={portalContainer}
            popoverClassName={styles.osdkHeaderPopup}
            content={
              <Menu>
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
                      icon={SortAscendingIcon}
                      label="Sort ascending"
                      active={isSorted === "asc"}
                    />
                    <HeaderMenuItem
                      onClick={handleSortDescending}
                      icon={SortDescendingIcon}
                      label="Sort descending"
                      active={isSorted === "desc"}
                    />
                    {columnOptions?.some((col) => col.canSort) && (
                      <HeaderMenuItem
                        onClick={handleOpenMultiSort}
                        icon={Sort}
                        label="Sort on multiple columns"
                      />
                    )}
                  </>
                )}
                {showSortingItems && !!currentSorting?.length && (
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
              </Menu>
            }
          >
            <Button
              aria-label={`Open header menu for column with id=${header.column.id}`}
              className={classNames(
                styles.osdkCenterContainer,
                styles.osdkHeaderPopoverTrigger,
              )}
              icon={<ChevronDown className={styles.osdkHeaderIcon} />}
              variant="minimal"
            />
          </Popover>
        )}
      </div>
    </div>
  );
}
