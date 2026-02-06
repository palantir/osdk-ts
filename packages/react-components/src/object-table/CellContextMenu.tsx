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

import type { Cell, RowData } from "@tanstack/react-table";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./CellContextMenu.module.css";
import type { PopoverPosition } from "./hooks/useCellContextMenu.js";

interface CellContextMenuProps<TData extends RowData> {
  cell: Cell<TData, unknown>;
  position: PopoverPosition;
  onClose: () => void;
  renderContent: (row: TData, cell: Cell<TData, unknown>) => React.ReactNode;
}

export function CellContextMenu<TData extends RowData>({
  cell,
  position,
  onClose,
  renderContent,
}: CellContextMenuProps<TData>): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={ref}
      className={styles.osdkCellContextMenu}
      style={{
        left: position.left,
        top: position.top,
        minWidth: position.width,
      }}
    >
      {renderContent(cell.row.original, cell)}
    </div>,
    document.body,
  );
}
