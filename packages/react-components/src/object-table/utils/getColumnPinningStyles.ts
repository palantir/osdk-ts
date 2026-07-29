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

import type { Column, ColumnSizingState } from "@tanstack/react-table";
import type React from "react";

interface PinningStyles {
  columnStyles: React.CSSProperties;
}

/**
 * The flex-grow factor for a column's header and body cells. Header rows and
 * body rows are flex containers stretched to at least the full width of the
 * scroll container, so a non-zero grow factor lets columns share out whatever
 * width is left over instead of leaving dead space to the right of the last
 * column.
 *
 * Growable columns use their own width as the factor, so the leftover width is
 * shared in proportion to how wide the columns already are. A factor of 0 keeps
 * the column at exactly `getSize()`, which is what we want for columns whose
 * width is already decided:
 *
 * - pinned columns, because sticky offsets come from `getStart`/`getAfter`,
 *   which sum `getSize()`. A pinned column painted wider than its `getSize()`
 *   would leave the columns pinned beside it misaligned.
 * - columns given an explicit `width` in `columnDefinitions`. TanStack fills in
 *   its own 150px default via `defaultColumnSizing`, so `columnDef.size` is
 *   only set when a width was actually supplied (see `useColumnDefs`).
 * - columns the user has resized, which is what `columnSizing` records.
 */
export function getColumnFlexGrow<TData>(
  column: Column<TData, unknown>,
  columnSizing?: ColumnSizingState
): number {
  const hasFixedWidth =
    column.getIsPinned() !== false ||
    column.columnDef.size != null ||
    columnSizing?.[column.id] != null;

  return hasFixedWidth ? 0 : column.getSize();
}

export function getColumnPinningStyles<TData>(
  column: Column<TData, unknown>,
  columnSizing?: ColumnSizingState
): PinningStyles {
  const isPinned = column.getIsPinned();
  const { maxSize } = column.columnDef;

  return {
    columnStyles: {
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      width: column.getSize(),
      flexGrow: getColumnFlexGrow(column, columnSizing),
      // Growth stops at the column's maxWidth. TanStack defaults maxSize to
      // Number.MAX_SAFE_INTEGER, which must not reach the DOM as a max-width.
      maxWidth:
        maxSize != null && maxSize < Number.MAX_SAFE_INTEGER
          ? maxSize
          : undefined,
    },
  };
}
