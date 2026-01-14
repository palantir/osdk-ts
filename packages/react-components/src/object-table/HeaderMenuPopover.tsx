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
import React, { useCallback, useEffect, useRef, useState } from "react";

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
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        ref={cellRef}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "0 12px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onContextMenu={handleInteraction}
      >
        {isColumnPinned && (
          <span style={{ marginRight: "6px", fontSize: "12px" }}>📌</span>
        )}
        <span
          style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
        </span>

        {isSorted && isSortable && (
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "6px" }}
          >
            <span style={{ fontSize: "12px" }}>
              {isSorted === "asc" ? "↑" : "↓"}
            </span>
          </div>
        )}

        <div
          style={{
            marginLeft: "auto",
            padding: "2px",
            cursor: "pointer",
            opacity: isOpen ? 1 : 0.6,
          }}
          onClick={handleInteraction}
        >
          <span style={{ fontSize: "12px" }}>⌄</span>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            minWidth: "200px",
            padding: "4px 0",
          }}
        >
          {!isColumnPinned && (
            <>
              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handlePinLeft}
              >
                Pin Left
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handlePinRight}
              >
                Pin Right
              </div>
            </>
          )}
          {isColumnPinned && (
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={handleUnpin}
            >
              Unpin Column
            </div>
          )}

          {isSortable && (
            <>
              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleSortAscending}
              >
                Sort Ascending
              </div>

              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleSortDescending}
              >
                Sort Descending
              </div>

              {isSorted && (
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleClearSort}
                >
                  Clear Sort
                </div>
              )}
            </>
          )}

          <div
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleResetSize}
          >
            Reset Column Size
          </div>
        </div>
      )}
    </div>
  );
}
