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
import React, { useEffect, useRef, useState } from "react";
import { LoadingRow } from "./LoadingRow.js";
import styles from "./TableRow.module.css";

interface LoadingStateBodyProps<TData extends RowData> {
  headerGroups: Array<HeaderGroup<TData>>;
  rowHeight?: number;
}

const MIN_ROWS = 5;

export function LoadingStateBody<TData extends RowData>({
  headerGroups,
  rowHeight = 40,
}: LoadingStateBodyProps<TData>): React.ReactElement {
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const [rowCount, setRowCount] = useState<number>(MIN_ROWS);

  useEffect(() => {
    if (bodyRef.current) {
      const tbodyHeight = bodyRef.current.clientHeight;
      if (tbodyHeight > 0) {
        const rowsNeeded = Math.ceil(tbodyHeight / rowHeight);
        setRowCount(Math.max(rowsNeeded, MIN_ROWS));
      }
    }
  }, [headerGroups, rowHeight]);

  const headers = headerGroups[0]?.headers ?? [];

  return (
    <tbody className={styles.tableBody} ref={bodyRef}>
      {Array.from({ length: rowCount }).map((_, index) => (
        <LoadingRow
          key={`skeleton-${index}`}
          headers={headers}
          translateY={rowHeight * index}
          rowHeight={rowHeight}
        />
      ))}
    </tbody>
  );
}
