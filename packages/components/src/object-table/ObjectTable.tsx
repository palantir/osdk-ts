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

import type {
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import { useObjectSet } from "@osdk/react/experimental";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { useColumnDefs } from "./hooks/useColumnDefs.js";
import type { ObjectTableProps } from "./ObjectTableApi.js";

/**
 * ObjectTable - A headless table component for displaying OSDK object sets
 *
 * This is an MVP implementation that renders a basic table when given an objectSet.
 * It uses TanStack Table for table state management and @osdk/react hooks for data fetching.
 *
 * @example
 * ```tsx
 * <ObjectTable objectSet={myObjectSet} />
 * ```
 */
export function ObjectTable<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>({
  objectSet,
}: ObjectTableProps<Q, RDPs>): React.ReactElement {
  const { data, isLoading, error } = useObjectSet(objectSet);

  const columns = useColumnDefs(objectSet);

  const table = useReactTable<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>
  >({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Handle empty data
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Render the table
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header: any) => (
              <th key={header.id}>
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
      <tbody>
        {table.getRowModel().rows.map((row: any) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell: any) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
