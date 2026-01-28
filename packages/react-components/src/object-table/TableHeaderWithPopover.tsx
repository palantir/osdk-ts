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
  SortAlphabetical,
  SortAlphabeticalDesc,
  Unpin,
  VerticalDistribution,
} from "@blueprintjs/icons";
import type {
  ColumnPinningState,
  Header,
  RowData,
  SortingState,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { TableHeaderContent } from "./TableHeaderContent.js";
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

interface TableHeaderWithPopoverProps<TData extends RowData> {
  header: Header<TData, unknown>;
  isColumnPinned: false | "left" | "right";
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  onSortChange?: (sorting: SortingState) => void;
  onResetSize?: () => void;
  onColumnConfig?: () => void;
  enableColumnPinningRight?: boolean;
}

export function TableHeaderWithPopover<TData extends RowData>({
  header,
  isColumnPinned,
  setColumnPinning,
  onSortChange,
  onResetSize,
}: TableHeaderWithPopoverProps<TData>): React.ReactElement {
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

  const isSorted = header.column.getIsSorted();
  const isSortable = header.column.getCanSort();

  return (
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
                    color={"currentColor"}
                  />
                )
                : (
                  <SortAlphabeticalDesc
                    className={styles.osdkHeaderIcon}
                    color={"currentColor"}
                  />
                )}
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
                </>
              )}
              {!!isSorted && (
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
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </div>
    </Menu.Root>
  );
}
