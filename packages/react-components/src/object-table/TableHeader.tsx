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
import { flexRender } from "@tanstack/react-table";
import React from "react";
import styles from "./TableHeader.module.css";

interface TableHeaderProps<TData extends RowData> {
  table: Table<TData>;
}

export function TableHeader<TData extends RowData>({
  table,
}: TableHeaderProps<TData>): React.ReactElement {
  return (
    <thead className={styles.osdkTableHeader}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className={styles.osdkTableHeaderRow}
        >
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={styles.osdkTableHeaderCell}
              style={{
                width: header.getSize(),
              }}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              {header.column.getCanResize() && (
                <div
                  className={styles.osdkTableHeaderResizeHandle}
                  onDoubleClick={() => header.column.resetSize()}
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  style={{
                    transform: header.column.getIsResizing()
                      ? `translateX(${
                        table.getState().columnSizingInfo.deltaOffset ?? 0
                      }px)`
                      : "",
                  }}
                />
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
