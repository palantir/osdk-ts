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
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { useColumnDefs } from "./hooks/useColumnDefs.js";
import { useDefaultTableStates } from "./hooks/useDefaultTableStates.js";
import { useObjectTableData } from "./hooks/useObjectTableData.js";
import type { ObjectTableProps } from "./ObjectTableApi.js";
import { Table } from "./Table.js";

/**
 * ObjectTable - A headless table component for displaying OSDK object sets
 *
 * @example
 * ```tsx
 * <ObjectTable objectSet={myObjectSet} objectType={MyObjectType} />
 * ```
 */

export function ObjectTable<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  objectSet,
  objectType,
  columnDefinitions,
  onRowClick,
}: ObjectTableProps<Q, RDPs, FunctionColumns>): React.ReactElement {
  const { data, fetchMore, isLoading, error } = useObjectTableData<
    Q,
    RDPs,
    FunctionColumns
  >(
    objectSet,
    columnDefinitions,
  );

  const { columns, loading: isColumnsLoading, error: columnsError } =
    useColumnDefs<Q, RDPs, FunctionColumns>(
      objectType,
      columnDefinitions,
    );

  const { columnVisibility } = useDefaultTableStates({ columnDefinitions });

  const table = useReactTable<
    Osdk.Instance<Q>
  >({
    data: (data ?? []) as Array<Osdk.Instance<Q>>,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
    },
  });

  const isTableLoading = isLoading || isColumnsLoading;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (columnsError) {
    return <div>Columns load error: {columnsError}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table
      table={table}
      isLoading={isTableLoading}
      fetchNextPage={fetchMore}
      onRowClick={onRowClick}
    />
  );
}
