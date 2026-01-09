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

import type { RowData, Table } from "@tanstack/react-table";
import React, { type ReactElement, useCallback, useRef } from "react";
import { TableBody } from "./TableBody.js";
import { TableHeader } from "./TableHeader.js";

interface TableProps<TData extends RowData> {
  table: Table<TData>;
  isLoading?: boolean;
  fetchNextPage?: () => Promise<void>;
  onRowClick?: (row: TData) => void;
  rowHeight?: number;
}

export function Table<TData extends RowData>(
  { table, isLoading, fetchNextPage, onRowClick, rowHeight }: TableProps<TData>,
): ReactElement {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // Using a ref to prevent duplicate fetches from rapid scroll events while a fetch is in-flight
  const fetchingRef = useRef(false);

  const fetchMoreOnEndReached = useCallback(
    async (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement && !fetchingRef.current) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < 100
          && !isLoading
        ) {
          fetchingRef.current = true;
          try {
            await fetchNextPage?.();
          } finally {
            fetchingRef.current = false;
          }
        }
      }
    },
    [fetchNextPage, isLoading],
  );

  const handleScroll = useCallback(
    async (e: React.UIEvent<HTMLDivElement>) => {
      await fetchMoreOnEndReached(e.currentTarget);
    },
    [fetchMoreOnEndReached],
  );

  // TODO: Handle error, loading and empty states

  return (
    <div
      ref={tableContainerRef}
      style={{
        position: "relative", // needed for sticky header
        height: "100%", // needed for scrolling
        overflow: "auto",
        cursor: table.getState().columnSizingInfo?.isResizingColumn
          ? "col-resize"
          : "default",
        userSelect: table.getState().columnSizingInfo?.isResizingColumn
          ? "none"
          : "auto",
      }}
      onScroll={handleScroll}
    >
      <table
        style={{ display: "grid" }}
      >
        <TableHeader table={table} />
        <TableBody
          rows={table.getRowModel().rows}
          tableContainerRef={tableContainerRef}
          onRowClick={onRowClick}
          rowHeight={rowHeight}
        />
      </table>
    </div>
  );
}
