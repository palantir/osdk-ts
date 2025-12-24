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

import { type RowData, type Table } from "@tanstack/react-table";
import React, { useMemo } from "react";
import { TableBody } from "./TableBody.js";
import { TableHeader } from "./TableHeader.js";

interface TableProps<TData extends RowData> {
  table: Table<TData>;
}

export function Table<TData extends RowData>(
  { table }: TableProps<TData>,
): React.ReactElement {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const headerGroups = useMemo(() => table.getHeaderGroups(), [table]);

  const rows = useMemo(() => table.getRowModel().rows, [table]);

  return (
    <div
      ref={tableContainerRef}
      style={{
        position: "relative", // needed for sticky header
      }}
    >
      <table
        style={{ display: "grid" }}
      >
        <TableHeader headerGroups={headerGroups} />
        <TableBody rows={rows} tableContainerRef={tableContainerRef} />
      </table>
    </div>
  );
}
