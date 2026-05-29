/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { Column, Table } from "@tanstack/react-table";
import type {
  ObjectTableDataCell,
  ObjectTableSnapshot,
} from "../ObjectTableApi.js";
import { isAsyncCellData } from "./AsyncCellData.js";
import { SELECTION_COLUMN_ID } from "./constants.js";

const CONTROL_COLUMN_IDS: ReadonlySet<string> = new Set([SELECTION_COLUMN_ID]);
const RESOLVED_NOOP_FETCH_NEXT_PAGE = async (): Promise<void> => {};

interface CreateObjectTableSnapshotParams<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  table: Table<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >;
  hasNextPage: boolean;
  fetchNextPage?: () => Promise<void>;
  isLoading: boolean;
}

export function createObjectTableSnapshot<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>({
  table,
  hasNextPage,
  fetchNextPage,
  isLoading,
}: CreateObjectTableSnapshotParams<Q, RDPs>): ObjectTableSnapshot<
  Q,
  RDPs
> {
  const columns = table.getVisibleLeafColumns()
    .filter(column => !CONTROL_COLUMN_IDS.has(column.id))
    .map(column => ({
      id: column.id,
      name: getColumnName(column),
    }));

  const snapshotColumnIds = new Set(columns.map(column => column.id));

  return {
    columns,
    rows: table.getRowModel().rows.map(row => ({
      id: row.id,
      original: row.original,
      getValue: (columnId: string) => {
        if (!snapshotColumnIds.has(columnId)) {
          return undefined;
        }
        return createObjectTableDataCell(row.getValue(columnId));
      },
    })),
    hasNextPage,
    fetchNextPage: hasNextPage && fetchNextPage != null
      ? fetchNextPage
      : RESOLVED_NOOP_FETCH_NEXT_PAGE,
    isLoading,
  };
}

function getColumnName<TData>(
  column: Column<TData, unknown>,
): string {
  const columnName = column.columnDef.meta?.columnName;
  if (columnName) {
    return columnName;
  }

  const header = column.columnDef.header;
  if (typeof header === "string") {
    return header;
  }

  return column.id;
}

function createObjectTableDataCell(value: unknown): ObjectTableDataCell {
  if (!isAsyncCellData(value)) {
    return { status: "ready", value };
  }

  if (value.error != null) {
    return {
      status: "error",
      error: value.error,
      value: value.data,
    };
  }

  if (value.isLoading) {
    return {
      status: "loading",
      value: value.data,
    };
  }

  return { status: "ready", value: value.data };
}
