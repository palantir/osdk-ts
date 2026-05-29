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
import type { AccessorColumnDef } from "@tanstack/react-table";
import { act, render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useColumnDefs } from "../hooks/useColumnDefs.js";
import { useObjectTableData } from "../hooks/useObjectTableData.js";
import { ObjectTable } from "../ObjectTable.js";
import type { ObjectTableHandle } from "../ObjectTableApi.js";
import { createAsyncCellData } from "../utils/AsyncCellData.js";
import { SELECTION_COLUMN_ID } from "../utils/constants.js";

vi.mock("../hooks/useObjectTableData.js", () => ({
  useObjectTableData: vi.fn(),
}));

vi.mock("../hooks/useColumnDefs.js", () => ({
  useColumnDefs: vi.fn(),
}));

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
type TestFunctionColumns = Record<string, never>;

const mockedUseObjectTableData = vi.mocked(
  useObjectTableData<TestObject, TestRDPs, TestFunctionColumns>,
);
const mockedUseColumnDefs = vi.mocked(
  useColumnDefs<TestObject, TestRDPs, TestFunctionColumns>,
);

describe(ObjectTable, () => {
  beforeEach(() => {
    mockedUseObjectTableData.mockReset();
    mockedUseColumnDefs.mockReset();
    mockColumns([
      createColumn("name", "Name"),
      createColumn("status", "Status"),
    ]);
  });

  it("exposes the currently loaded rows without fetching more data", () => {
    const fetchMore = vi.fn(async () => {});
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = ref.current?.getSnapshot();

    expect(fetchMore).not.toHaveBeenCalled();
    expect(snapshot?.columns).toEqual([
      { id: "name", name: "Name" },
      { id: "status", name: "Status" },
    ]);
    expect(snapshot?.hasNextPage).toBe(true);
    expect(snapshot?.isLoading).toBe(false);
    expect(snapshot?.rows).toHaveLength(1);
    expect(snapshot?.rows[0].id).toBe("1");
    expect(snapshot?.rows[0].original).toBe(row);
    expect(snapshot?.rows[0].getValue("name")).toEqual({
      status: "ready",
      value: "Ada",
    });
  });

  it("excludes selection columns from the row snapshot", () => {
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockColumns([
      createColumn(SELECTION_COLUMN_ID, "Select"),
      createColumn("name", "Name"),
    ]);
    mockTableData({ data: [row], hasMore: false });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = ref.current?.getSnapshot();

    expect(snapshot?.columns).toEqual([{ id: "name", name: "Name" }]);
    expect(snapshot?.rows[0].getValue(SELECTION_COLUMN_ID)).toBeUndefined();
  });

  it("wraps function-backed async cell values", () => {
    const row = createRow({
      id: "1",
      name: "Ada",
      status: "Active",
      extraValues: {
        latestComment: createAsyncCellData({
          isLoading: true,
          data: "previous comment",
        }),
      },
    });
    mockColumns([
      createColumn("name", "Name"),
      createColumn("latestComment", "Latest comment"),
    ]);
    mockTableData({ data: [row], isLoading: true, hasMore: false });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = ref.current?.getSnapshot();

    expect(snapshot?.isLoading).toBe(true);
    expect(snapshot?.rows[0].getValue("latestComment")).toEqual({
      status: "loading",
      value: "previous comment",
    });
  });

  it("fetches the next page when one is available", async () => {
    const fetchMore = vi.fn(async () => {});
    mockTableData({ data: [], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    expect(ref.current?.getSnapshot().hasNextPage).toBe(true);

    await act(async () => {
      await ref.current?.getSnapshot().fetchNextPage();
    });

    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  it("does not fetch when there is no next page", async () => {
    const fetchMore = vi.fn(async () => {});
    mockTableData({ data: [], fetchMore, hasMore: false });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    expect(ref.current?.getSnapshot().hasNextPage).toBe(false);

    await act(async () => {
      await ref.current?.getSnapshot().fetchNextPage();
    });

    expect(fetchMore).not.toHaveBeenCalled();
  });

  it("returns a fresh snapshot after the table data changes", () => {
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    mockTableData({ data: [firstRow], hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { rerender } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const firstSnapshot = ref.current?.getSnapshot();

    mockTableData({ data: [firstRow, secondRow], hasMore: false });
    rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const secondSnapshot = ref.current?.getSnapshot();

    expect(firstSnapshot).not.toBe(secondSnapshot);
    expect(firstSnapshot?.rows).toHaveLength(1);
    expect(secondSnapshot?.rows).toHaveLength(2);
    expect(secondSnapshot?.hasNextPage).toBe(false);
  });
});

function mockTableData({
  data,
  fetchMore,
  hasMore,
  isLoading = false,
}: {
  data: TestRow[];
  fetchMore?: () => Promise<void>;
  hasMore: boolean;
  isLoading?: boolean;
}): void {
  mockedUseObjectTableData.mockReturnValue({
    data,
    fetchMore,
    hasMore,
    isLoading,
    error: undefined,
    objectSet: undefined,
    refetch: vi.fn(),
    totalCount: undefined,
  });
}

function mockColumns(columns: AccessorColumnDef<TestRow>[]): void {
  mockedUseColumnDefs.mockReturnValue({
    columns,
    loading: false,
    error: undefined,
  });
}

function createColumn(
  id: string,
  name: string,
): AccessorColumnDef<TestRow> {
  return {
    id,
    accessorKey: id as keyof TestRow & string,
    header: name,
    meta: {
      columnName: name,
    },
  };
}

function createRow({
  id,
  name,
  status,
  extraValues = {},
}: {
  id: string;
  name: string;
  status: string;
  extraValues?: Record<string, unknown>;
}): TestRow {
  return {
    $apiName: TestObjectType.apiName,
    $objectType: TestObjectType,
    $primaryKey: id,
    id,
    name,
    status,
    ...extraValues,
  } as unknown as TestRow;
}
