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

import type { ColumnPinningState } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import type {
  ReactNode} from "react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./HeaderMenuPopover.module.css";

interface HeaderMenuPopoverProps {
  header: any;
  isColumnPinned: false | "left" | "right";
  setColumnPinning: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
}

export function HeaderMenuPopover({
  header,
  isColumnPinned,
  setColumnPinning,
}: HeaderMenuPopoverProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const cellRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicked outside of header cell or dropdown menu
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleMouseDown = (event: MouseEvent) => {
      if (
        menuRef.current
        && !menuRef.current.contains(event.target as Node)
        && cellRef.current
        && !cellRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isOpen]);

  const handlePinLeft = useCallback(() => {
    setColumnPinning((prev) => {
      return {
        left: [...(prev.left || []), header.column.id],
        right: prev.right?.filter((id) => id !== header.column.id) || [],
      };
    });
    setIsOpen(false);
  }, [header.column.id, setColumnPinning]);

  const handlePinRight = useCallback(() => {
    setColumnPinning((prev) => {
      return {
        right: [...(prev.right || []), header.column.id],
        left: prev.left?.filter((id) => id !== header.column.id) || [],
      };
    });
    setIsOpen(false);
  }, [header.column.id, setColumnPinning]);

  const handleUnpin = useCallback(() => {
    setColumnPinning((prev) => {
      return {
        left: prev.left?.filter((id) => id !== header.column.id) || [],
        right: prev.right?.filter((id) => id !== header.column.id) || [],
      };
    });
    setIsOpen(false);
  }, [header.column.id, setColumnPinning]);

  const handleSortAscending = useCallback(() => {
    header.column.toggleSorting(false);
    setIsOpen(false);
  }, [header.column]);

  const handleSortDescending = useCallback(() => {
    header.column.toggleSorting(true);
    setIsOpen(false);
  }, [header.column]);

  const handleClearSort = useCallback(() => {
    header.column.clearSorting();
    setIsOpen(false);
  }, [header.column]);

  const handleResetSize = useCallback(() => {
    header.column.resetSize();
    setIsOpen(false);
  }, [header.column]);

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
    <div className={styles.container}>
      <div
        ref={cellRef}
        className={styles.cellRef}
        onContextMenu={handleInteraction}
      >
        {isColumnPinned && <span className={styles.pinIcon}>📌</span>}
        <span className={styles.headerText}>
          {flexRender(header.column.columnDef.header, header.getContext()) as
            | ReactNode
            | React.JSX.Element}
        </span>

        {isSorted && isSortable && (
          <div className={styles.sortIndicator}>
            <span className={styles.sortIcon}>
              {isSorted === "asc" ? "↑" : "↓"}
            </span>
          </div>
        )}

        <div
          className={`${styles.menuToggle} ${
            isOpen ? styles.menuToggleOpen : ""
          }`}
          onClick={handleInteraction}
        >
          <span className={styles.chevronIcon}>⌄</span>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className={styles.menu}>
          {!isColumnPinned && (
            <>
              <div className={styles.menuItem} onClick={handlePinLeft}>
                Pin Left
              </div>
              <div className={styles.menuItem} onClick={handlePinRight}>
                Pin Right
              </div>
            </>
          )}
          {isColumnPinned && (
            <div className={styles.menuItem} onClick={handleUnpin}>
              Unpin Column
            </div>
          )}

          {isSortable && (
            <>
              <div className={styles.menuItem} onClick={handleSortAscending}>
                Sort Ascending
              </div>

              <div className={styles.menuItem} onClick={handleSortDescending}>
                Sort Descending
              </div>

              {isSorted && (
                <div className={styles.menuItem} onClick={handleClearSort}>
                  Clear Sort
                </div>
              )}
            </>
          )}

          <div className={styles.menuItem} onClick={handleResetSize}>
            Reset Column Size
          </div>
        </div>
      )}
    </div>
  );
}
