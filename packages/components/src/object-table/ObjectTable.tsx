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
  objectType,
}: ObjectTableProps<Q, RDPs>): React.ReactElement {
  const { data, isLoading, error } = useObjectSet(objectSet);

  const { columns, loading: isColumnsLoading, error: columnsError } =
    useColumnDefs(
      objectType,
    );

  const table = useReactTable<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>
  >({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading || isColumnsLoading) {
    return (
      <div className="osdk-object-table-state" data-state="loading">
        <div className="osdk-object-table-state-content">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="osdk-object-table-state" data-state="error">
        <div className="osdk-object-table-state-content">
          Error: {error.message}
        </div>
      </div>
    );
  }

  if (columnsError) {
    return (
      <div className="osdk-object-table-state" data-state="error">
        <div className="osdk-object-table-state-content">
          Columns load error: {columnsError}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="osdk-object-table-state" data-state="empty">
        <div className="osdk-object-table-state-content">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="osdk-object-table-wrapper" data-state="loaded">
      <table className="osdk-object-table">
        <thead className="osdk-object-table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="osdk-object-table-header-row">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="osdk-object-table-header-cell"
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
        <tbody className="osdk-object-table-body">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="osdk-object-table-row">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="osdk-object-table-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
