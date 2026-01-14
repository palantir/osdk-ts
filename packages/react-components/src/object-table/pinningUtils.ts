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

import type { Column } from "@tanstack/react-table";
import type React from "react";

interface PinningStyles {
  columnClasses: string;
  columnStyles: React.CSSProperties;
}

export function getCommonPinningStyles<TData>(
  column: Column<TData, unknown>,
): PinningStyles {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === "left"
    && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn = isPinned === "right"
    && column.getIsFirstColumn("right");

  const columnClasses = [
    isLastLeftPinnedColumn && "border-right",
    isFirstRightPinnedColumn && "border-left",
    isPinned && "position-sticky",
    !isPinned && "position-relative",
    isPinned && "z-index-pinned",
  ]
    .filter(Boolean)
    .join(" ");

  return {
    columnClasses,
    columnStyles: {
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      width: column.getSize(),
      position: isPinned ? "sticky" : "relative",
      zIndex: isPinned ? 10 : 1,
      borderRight: isLastLeftPinnedColumn ? "2px solid #d1d5db" : undefined,
      borderLeft: isFirstRightPinnedColumn ? "2px solid #d1d5db" : undefined,
    },
  };
}
