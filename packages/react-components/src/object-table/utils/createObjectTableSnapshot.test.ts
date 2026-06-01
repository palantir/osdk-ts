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

import type { ObjectTypeDefinition, Osdk, PropertyKeys } from "@osdk/api";
import type {
  AccessorColumnDef,
  ColumnDef,
  Table,
} from "@tanstack/react-table";
import { createTable, getCoreRowModel } from "@tanstack/react-table";
import React from "react";
import { describe, expect, it } from "vitest";
import { createAsyncCellData } from "./AsyncCellData.js";
import { SELECTION_COLUMN_ID } from "./constants.js";
import { createObjectTableSnapshot } from "./createObjectTableSnapshot.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
  primaryKeyApiName: "id",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;
type TestRDPs = Record<string, never>;
type TestRow = Osdk.Instance<
  TestObject,
  "$allBaseProperties",
  TestObjectKeys,
  TestRDPs
>;

describe(createObjectTableSnapshot, () => {
  it("returns visible data columns and row values while excluding control columns", () => {
    const firstRow = buildRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = buildRow({ id: "2", name: "Grace", status: "Inactive" });

    const table = buildTable({
      columns: [
        // Selection column is a control column — should be excluded from output
        buildColumn({ id: SELECTION_COLUMN_ID, header: "Select" }),
        buildColumn({ id: "name", header: "Name" }),
        buildColumn({ id: "status", header: "Status" }),
        // "hidden" is on the row data but has no column def — should not appear
      ],
      data: [firstRow, secondRow],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: true,
      isLoading: false,
      error: undefined,
      totalCount: "2",
    });

    expect(snapshot.columns).toEqual([
      { id: "name", name: "Name" },
      { id: "status", name: "Status" },
    ]);
    expect(snapshot.hasNextPage).toBe(true);
    expect(snapshot.isLoading).toBe(false);
    expect(snapshot.error).toBeUndefined();
    expect(snapshot.totalCount).toBe("2");

    expect(snapshot.rows).toHaveLength(2);
    expect(snapshot.rows[0].id).toBe("0");
    expect(snapshot.rows[0].object).toBe(firstRow);
    expect(snapshot.rows[0].getValue("name")).toEqual({
      status: "ready",
      value: "Ada",
    });
    expect(snapshot.rows[0].getValue("status")).toEqual({
      status: "ready",
      value: "Active",
    });
    expect(snapshot.rows[0].getValue(SELECTION_COLUMN_ID)).toBeUndefined();
    expect(snapshot.rows[0].getValue("hidden")).toBeUndefined();
  });

  it("uses meta columnName before falling back to column id for non-string headers", () => {
    // TanStack Table's header type is string | ((props) => ReactNode).
    // When header is a function, getColumnName falls through to meta.columnName
    // or column.id — it only extracts text from string headers.
    const renderHeader = () =>
      React.createElement("span", null, "Rendered header");
    const table = buildTable({
      columns: [
        buildColumn({
          id: "withMeta",
          header: renderHeader,
          columnName: "Meta Header",
        }),
        buildColumn({
          id: "withoutMeta",
          header: renderHeader,
        }),
      ],
      data: [buildRow({ id: "1" })],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: false,
      error: undefined,
      totalCount: undefined,
    });

    expect(snapshot.hasNextPage).toBe(false);
    expect(snapshot.columns).toEqual([
      { id: "withMeta", name: "Meta Header" },
      { id: "withoutMeta", name: "withoutMeta" },
    ]);
  });

  it("returns raw accessor values instead of custom rendered cell output", () => {
    const table = buildTable({
      columns: [
        buildColumn({
          id: "name",
          header: "Name",
          cell: () => "rendered cell content",
        }),
      ],
      data: [buildRow({ id: "1", name: "Ada" })],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: false,
      error: undefined,
      totalCount: undefined,
    });

    expect(snapshot.rows[0].getValue("name")).toEqual({
      status: "ready",
      value: "Ada",
    });
  });

  it("exposes table-level error and total count metadata", () => {
    const error = new Error("failed");
    const table = buildTable({
      columns: [buildColumn({ id: "name", header: "Name" })],
      data: [buildRow({ id: "1" })],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: false,
      error,
      totalCount: "1",
    });

    expect(snapshot.error).toBe(error);
    expect(snapshot.totalCount).toBe("1");
  });

  it("wraps async cell values without exposing the internal async cell shape", () => {
    const loadingValue = createAsyncCellData({
      isLoading: true,
      data: "previous comment",
    });
    const error = new Error("failed");
    const errorValue = createAsyncCellData({
      isLoading: false,
      data: "stale status",
      error,
    });
    const loadedValue = createAsyncCellData({
      isLoading: false,
      data: "loaded status",
    });

    const table = buildTable({
      columns: [
        buildColumn({ id: "loading", header: "Loading" }),
        buildColumn({ id: "error", header: "Error" }),
        buildColumn({ id: "loaded", header: "Loaded" }),
      ],
      data: [
        buildRow({
          id: "1",
          loading: loadingValue,
          error: errorValue,
          loaded: loadedValue,
        }),
      ],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: true,
      error: undefined,
      totalCount: undefined,
    });

    expect(snapshot.rows[0].getValue("loading")).toEqual({
      status: "loading",
      value: "previous comment",
    });
    expect(snapshot.rows[0].getValue("error")).toEqual({
      status: "error",
      error,
      value: "stale status",
    });
    expect(snapshot.rows[0].getValue("loaded")).toEqual({
      status: "ready",
      value: "loaded status",
    });
  });
});

// Osdk.Instance is too complex to construct directly — the cast is scoped to
// this single helper so tests work with real TanStack Table accessors.
function buildRow(fields: Record<string, unknown> & { id: string }): TestRow {
  return {
    $apiName: TestObjectType.apiName,
    $objectType: TestObjectType,
    $primaryKey: fields.id,
    ...fields,
  } as unknown as TestRow;
}

function buildColumn(options: {
  id: string;
  header?: AccessorColumnDef<TestRow>["header"];
  columnName?: string;
  cell?: () => unknown;
}): ColumnDef<TestRow, unknown> {
  const col: AccessorColumnDef<TestRow> = {
    id: options.id,
    accessorKey: options.id as keyof TestRow & string,
    header: options.header ?? options.id,
    meta: options.columnName != null
      ? { columnName: options.columnName }
      : undefined,
  };
  if (options.cell != null) {
    col.cell = options.cell;
  }
  return col;
}

// Creates a real TanStack Table — row.getValue() uses real accessor logic
// rather than test-controlled vi.fn() stubs.
function buildTable(options: {
  columns: ColumnDef<TestRow, unknown>[];
  data: TestRow[];
}): Table<TestRow> {
  // No-op onStateChange and empty state are safe because these tests don't
  // exercise table state mutations — they only read column/row data.
  return createTable<TestRow>({
    columns: options.columns,
    data: options.data,
    getCoreRowModel: getCoreRowModel(),
    state: {},
    onStateChange: () => {},
    renderFallbackValue: undefined,
  });
}
