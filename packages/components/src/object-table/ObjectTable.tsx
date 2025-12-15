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
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
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
  // Fetch objects using the useObjectSet hook from @osdk/react/new
  const { data, isLoading, error } = useObjectSet(objectSet);

  // Get property keys from the object type definition
  const propertyKeys = useMemo(() => {
    if (!objectSet || !(objectSet as any).objectType) return [];
    const objectType = (objectSet as any).objectType;
    // Extract property keys from the object type definition
    return Object.keys(objectType.properties || {}) as PropertyKeys<Q>[];
  }, [objectSet]);

  // Create column definitions based on object properties
  const columns = useMemo(() => {
    if (propertyKeys.length === 0) return [];

    const columnHelper = createColumnHelper<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
    >();

    return propertyKeys.map((propertyKey) =>
      columnHelper.accessor(
        (
          row: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
        ) => {
          const value = row[propertyKey];
          // Handle various property value types
          if (value == null) return "";
          if (typeof value === "object") return JSON.stringify(value);
          return String(value);
        },
        {
          id: propertyKey as string,
          header: () => propertyKey as string,
          cell: (info: any) => info.getValue(),
        },
      )
    );
  }, [propertyKeys]);

  // Initialize TanStack Table
  const table = useReactTable({
    data: data || [],
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
