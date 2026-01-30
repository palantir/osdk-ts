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

import type { HeaderGroup, RowData } from "@tanstack/react-table";
import React from "react";
import { LoadingCell } from "./LoadingCell.js";
import rowStyles from "./TableRow.module.css";

interface LoadingRowProps<TData extends RowData> {
  headers: HeaderGroup<TData>["headers"];
  columnCount: number;
  translateY: number;
  rowHeight?: number;
  columnWidth?: number;
}

export function LoadingRow<TData extends RowData>({
  headers,
  columnCount,
  translateY,
  rowHeight = 40,
  columnWidth = 80,
}: LoadingRowProps<TData>): React.ReactElement {
  return (
    <tr
      className={rowStyles.osdkTableRow}
      style={{
        height: `${rowHeight}px`,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {
        <>
          {Array.from({ length: columnCount }).map((_, index) => {
            const width = headers.length > index
              ? headers[index].getSize()
              : columnWidth;
            return <LoadingCell key={`loading-cell-${index}`} width={width} />;
          })}
        </>
      }
    </tr>
  );
}
