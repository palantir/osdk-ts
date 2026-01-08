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
import { flexRender } from "@tanstack/react-table";
import React from "react";

interface TableHeaderProps<TData extends RowData> {
  headerGroups: Array<HeaderGroup<TData>>;
}

export function TableHeader<TData extends RowData>({
  headerGroups,
}: TableHeaderProps<TData>): React.ReactElement {
  return (
    <thead
      style={{
        display: "grid",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {headerGroups.map((headerGroup) => (
        <tr
          key={headerGroup.id}
          style={{
            display: "flex",
          }}
        >
          {headerGroup.headers.map((header) => (
            // TODO: Move inline styling to CSS file
            <th
              key={header.id}
              style={{
                display: "flex",
                width: header.getSize(),
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
