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
import type { Row, Table } from "@tanstack/react-table";
import { describe, expect, it, vi } from "vitest";
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

interface TestRowValues {
  id: string;
  name: string;
  status: string;
  hidden: string;
}

describe(createObjectTableSnapshot, () => {
  it("returns visible data columns and row values while excluding control columns", () => {
    const firstRow = createOriginalRow({
      id: "1",
      name: "Ada",
      status: "Active",
      hidden: "x",
    });
    const secondRow = createOriginalRow({
      id: "2",
      name: "Grace",
      status: "Inactive",
      hidden: "y",
    });

    const table = createTable({
      columns: [
        createColumn(SELECTION_COLUMN_ID, "Select"),
        createColumn("name", "Name"),
        createColumn("status", "Status"),
      ],
      rows: [
        createRow({ id: "row-1", original: firstRow }),
        createRow({ id: "row-2", original: secondRow }),
      ],
    });

    const fetchNextPage = vi.fn(async () => {});
    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: true,
      fetchNextPage,
      isLoading: false,
    });

    expect(snapshot.columns).toEqual([
      { id: "name", name: "Name" },
      { id: "status", name: "Status" },
    ]);
    expect(snapshot.hasNextPage).toBe(true);
    expect(snapshot.fetchNextPage).toBe(fetchNextPage);
    expect(snapshot.isLoading).toBe(false);

    expect(snapshot.rows).toHaveLength(2);
    expect(snapshot.rows[0].id).toBe("row-1");
    expect(snapshot.rows[0].original).toBe(firstRow);
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

  it("uses a string column name fallback when the rendered header is not a string", () => {
    const table = createTable({
      columns: [
        createColumn("withMeta", { label: "Rendered" }, "Meta Header"),
        createColumn("withoutMeta", { label: "Rendered" }),
      ],
      rows: [createRow({ id: "row-1", original: createOriginalRow() })],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: false,
    });

    expect(snapshot.hasNextPage).toBe(false);
    expect(snapshot.columns).toEqual([
      { id: "withMeta", name: "Meta Header" },
      { id: "withoutMeta", name: "withoutMeta" },
    ]);
  });

  it("does not expose fetchNextPage when hasNextPage is false", async () => {
    const fetchNextPage = vi.fn(async () => {});
    const table = createTable({
      columns: [createColumn("name", "Name")],
      rows: [createRow({ id: "row-1", original: createOriginalRow() })],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      fetchNextPage,
      isLoading: false,
    });

    expect(snapshot.hasNextPage).toBe(false);
    await snapshot.fetchNextPage();
    expect(fetchNextPage).not.toHaveBeenCalled();
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

    const table = createTable({
      columns: [
        createColumn("loading", "Loading"),
        createColumn("error", "Error"),
        createColumn("loaded", "Loaded"),
      ],
      rows: [
        createRow({
          id: "row-1",
          original: createOriginalRow(),
          values: {
            loading: loadingValue,
            error: errorValue,
            loaded: loadedValue,
          },
        }),
      ],
    });

    const snapshot = createObjectTableSnapshot<TestObject, TestRDPs>({
      table,
      hasNextPage: false,
      isLoading: true,
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

function createOriginalRow(overrides: Partial<TestRowValues> = {}): TestRow {
  return {
    $apiName: TestObjectType.apiName,
    $objectType: TestObjectType,
    $primaryKey: overrides.id ?? "1",
    id: "1",
    name: "Ada",
    status: "Active",
    hidden: "x",
    ...overrides,
  } as unknown as TestRow;
}

function createColumn(
  id: string,
  header: unknown,
  columnName?: string,
): ReturnType<Table<TestRow>["getVisibleLeafColumns"]>[number] {
  return {
    id,
    columnDef: {
      header,
      meta: { columnName },
    },
  } as ReturnType<Table<TestRow>["getVisibleLeafColumns"]>[number];
}

function createRow({
  id,
  original,
  values,
}: {
  id: string;
  original: TestRow;
  values?: Record<string, unknown>;
}): Row<TestRow> {
  return {
    id,
    original,
    getValue: vi.fn((columnId: string) => {
      const rowValues = values ?? getDefaultRowValues();
      if (columnId in rowValues) {
        return rowValues[columnId];
      }
      return undefined;
    }),
  } as unknown as Row<TestRow>;
}

function getDefaultRowValues(): Record<string, unknown> {
  return {
    id: "1",
    name: "Ada",
    status: "Active",
    hidden: "x",
  };
}

function createTable({
  columns,
  rows,
}: {
  columns: ReturnType<Table<TestRow>["getVisibleLeafColumns"]>;
  rows: Array<Row<TestRow>>;
}): Table<TestRow> {
  return {
    getVisibleLeafColumns: () => columns,
    getRowModel: () => ({ rows }),
  } as unknown as Table<TestRow>;
}
