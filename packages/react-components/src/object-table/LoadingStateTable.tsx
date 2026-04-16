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

import type { HeaderGroup, RowData, Table } from "@tanstack/react-table";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SkeletonBar } from "../base-components/skeleton/SkeletonBar.js";
import loadingStyles from "./LoadingCell.module.css";
import { LoadingRow } from "./LoadingRow.js";
import bodyStyles from "./TableBody.module.css";
import { TableHeader } from "./TableHeader.js";
import headerStyles from "./TableHeader.module.css";
import {
  DEFAULT_LOADING_COLUMN_WIDTH,
  DEFAULT_ROW_HEIGHT,
  MIN_LOADING_ROWS,
} from "./utils/constants.js";

interface LoadingStateTableProps<TData extends RowData> {
  table: Table<TData>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  headerGroups: Array<HeaderGroup<TData>>;
  rowHeight?: number;
  columnWidth?: number;
}

export function LoadingStateTable<TData extends RowData>({
  table,
  tableContainerRef,
  headerGroups,
  rowHeight = DEFAULT_ROW_HEIGHT,
  columnWidth = DEFAULT_LOADING_COLUMN_WIDTH,
}: LoadingStateTableProps<TData>): React.ReactElement {
  // If selection enabled, there will be a header for the selection column
  const enableRowSelection = table.options.enableRowSelection;
  const minHeaderCount = enableRowSelection ? 1 : 0;
  const headers = useMemo(
    () => (headerGroups.length > 0 ? headerGroups[0].headers : []),
    [headerGroups],
  );
  const hasHeadersLoaded = headers.length > minHeaderCount;

  const headerRef = useRef<HTMLTableSectionElement>(null);
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const [loadingRowCount, setLoadingRowCount] =
    useState<number>(MIN_LOADING_ROWS);
  const [loadingColumnCount, setLoadingColumnCount] = useState<number>(
    headers.length,
  );
  // Calculate number of columns needed to fill container width
  useEffect(() => {
    if (hasHeadersLoaded) {
      setLoadingColumnCount(headers.length);
    } else {
      if (tableContainerRef.current) {
        const tableWidth = tableContainerRef.current.clientWidth;
        if (tableWidth > 0) {
          const columnsNeeded = Math.ceil(tableWidth / columnWidth);
          setLoadingColumnCount(columnsNeeded);
        }
      }
    }
  }, [columnWidth, hasHeadersLoaded, headers, tableContainerRef]);

  // Calculate number of rows needed to fill container height
  useEffect(() => {
    if (tableContainerRef.current) {
      const containerHeight = tableContainerRef.current.clientHeight;
      const availableHeight = containerHeight - rowHeight;

      if (availableHeight > 0) {
        const rowsNeeded = Math.ceil(availableHeight / rowHeight);
        setLoadingRowCount(Math.max(rowsNeeded, MIN_LOADING_ROWS));
      }
    }
  }, [tableContainerRef, rowHeight]);

  return (
    <>
      {hasHeadersLoaded ? (
        <TableHeader table={table} />
      ) : (
        <thead className={headerStyles.osdkTableHeader} ref={headerRef}>
          <tr className={headerStyles.osdkTableHeaderRow}>
            {Array.from({ length: loadingColumnCount }).map((_, index) => {
              const width =
                headers.length > index ? headers[index].getSize() : columnWidth;
              return (
                <th
                  key={`loading-header-${index}`}
                  className={headerStyles.osdkTableHeaderCell}
                  style={{ width }}
                >
                  <SkeletonBar
                    className={classNames(
                      headerStyles.osdkLoadingHeaderCell,
                      loadingStyles.osdkCellSkeleton,
                    )}
                  />
                </th>
              );
            })}
          </tr>
        </thead>
      )}
      <tbody className={bodyStyles.osdkTableBody} ref={bodyRef}>
        {Array.from({ length: loadingRowCount }).map((_, index) => (
          <LoadingRow
            key={`skeleton-${index}`}
            columnCount={loadingColumnCount}
            headers={headers}
            translateY={rowHeight * index}
            rowHeight={rowHeight}
            columnWidth={columnWidth}
          />
        ))}
      </tbody>
    </>
  );
}
