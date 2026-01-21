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
import type { ColumnPinningState, SortingState } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { TableHeaderContent } from "./TableHeaderContent.js";
import styles from "./TableHeaderWithPopover.module.css";

interface TableHeaderWithPopoverProps {
  header: any;
  isColumnPinned: false | "left" | "right";
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
  onSortChange?: (sorting: SortingState) => void;
  sorting?: SortingState;
  onResetSize?: () => void;
  onColumnConfig?: () => void;
  enableColumnPinningRight?: boolean;
}

export function TableHeaderWithPopover({
  header,
  isColumnPinned,
  setColumnPinning,
  onSortChange,
  sorting = [],
  onResetSize,
}: TableHeaderWithPopoverProps): React.ReactElement {
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
    if (onSortChange) {
      onSortChange([{ id: header.column.id, desc: false }]);
    }
  }, [header.column, onSortChange]);

  const handleSortDescending = useCallback(() => {
    header.column.toggleSorting(true);
    if (onSortChange) {
      onSortChange([{ id: header.column.id, desc: true }]);
    }
  }, [header.column, onSortChange]);

  const handleClearAllSorts = useCallback(() => {
    header.column.clearSorting();
    if (onSortChange) {
      onSortChange([]);
    }
  }, [onSortChange]);

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
                ? <SortAlphabetical className={styles.osdkHeaderIcon} />
                : <SortAlphabeticalDesc className={styles.osdkHeaderIcon} />}
            </div>
          )}
          <Menu.Trigger
            className={classNames(
              styles.osdkCenterContainer,
              styles.osdkHeaderPopoverTrigger,
            )}
          >
            <ChevronDown className={styles.osdkHeaderIcon} />
          </Menu.Trigger>
        </div>
        <Menu.Portal container={document.body}>
          <Menu.Positioner sideOffset={4}>
            <Menu.Popup
              className={styles.osdkHeaderPopup}
            >
              {!isColumnPinned && (
                <Menu.Item
                  closeOnClick
                  className={classNames(
                    styles.osdkCenterContainer,
                    styles.osdkContentGap,
                    styles.osdkHeaderMenuItem,
                  )}
                  onClick={handlePinLeft}
                >
                  <Pin className={styles.osdkHeaderIcon} />
                  <span>Pin column</span>
                </Menu.Item>
              )}

              {isColumnPinned && (
                <Menu.Item
                  closeOnClick
                  className={classNames(
                    styles.osdkCenterContainer,
                    styles.osdkContentGap,
                    styles.osdkHeaderMenuItem,
                    styles.osdkHeaderActiveMenuItem,
                  )}
                  onClick={handleUnpin}
                >
                  <Unpin className={styles.osdkHeaderIcon} />
                  <span>Unpin Column</span>
                </Menu.Item>
              )}
              {isSortable && (
                <>
                  <Menu.Item
                    closeOnClick
                    className={classNames(
                      styles.osdkCenterContainer,
                      styles.osdkContentGap,
                      styles.osdkHeaderMenuItem,
                      {
                        [styles.osdkHeaderActiveMenuItem]: isSorted === "asc",
                      },
                    )}
                    onClick={handleSortAscending}
                  >
                    <SortAlphabetical className={styles.osdkHeaderIcon} />
                    <span>Sort ascending</span>
                  </Menu.Item>
                  <Menu.Item
                    closeOnClick
                    className={classNames(
                      styles.osdkCenterContainer,
                      styles.osdkContentGap,
                      styles.osdkHeaderMenuItem,
                      {
                        [styles.osdkHeaderActiveMenuItem]: isSorted === "desc",
                      },
                    )}
                    onClick={handleSortDescending}
                  >
                    <SortAlphabeticalDesc className={styles.osdkHeaderIcon} />
                    <span>Sort descending</span>
                  </Menu.Item>
                </>
              )}
              {!!isSorted && (
                <Menu.Item
                  closeOnClick
                  className={classNames(
                    styles.osdkCenterContainer,
                    styles.osdkContentGap,
                    styles.osdkHeaderMenuItem,
                  )}
                  onClick={handleClearAllSorts}
                >
                  <Remove className={styles.osdkHeaderIcon} />
                  <span>Clear all sorts</span>
                </Menu.Item>
              )}
              <Menu.Item
                closeOnClick
                className={classNames(
                  styles.osdkCenterContainer,
                  styles.osdkContentGap,
                  styles.osdkHeaderMenuItem,
                )}
                onClick={handleResetSize}
              >
                <VerticalDistribution className={styles.osdkHeaderIcon} />
                <span>Reset Column Size</span>
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </div>
    </Menu.Root>
  );
}
