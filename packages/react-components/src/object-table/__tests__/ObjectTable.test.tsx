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
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useColumnDefs } from "../hooks/useColumnDefs.js";
import { useObjectTableData } from "../hooks/useObjectTableData.js";
import { ObjectTable } from "../ObjectTable.js";
import type { ObjectTableHandle } from "../ObjectTableApi.js";

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
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockedUseObjectTableData.mockReset();
    mockedUseColumnDefs.mockReset();
    mockColumns([
      createColumn("name", "Name"),
      createColumn("status", "Status"),
    ]);
  });

  it("exposes snapshot shape without fetching more data", async () => {
    const fetchMore = vi.fn(async () => {});
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshotPromise = ref.current?.getSnapshot();
    expect(snapshotPromise).toBeInstanceOf(Promise);
    const snapshot = await snapshotPromise;

    expect(fetchMore).not.toHaveBeenCalled();
    expect(snapshot?.columns).toHaveLength(2);
    expect(snapshot?.rows).toHaveLength(1);
    expect(snapshot?.hasNextPage).toBe(true);
  });

  it("waits for fetched rows to commit before resolving a limited snapshot", async () => {
    const fetchMoreFinished = createDeferred<void>();
    const fetchMore = vi.fn(() => fetchMoreFinished.promise);
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    mockTableData({ data: [firstRow], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { rerender } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const snapshotPromise = ref.current!.getSnapshot({ rowLimit: 2 });

    // The fetch is in flight, so the limited snapshot stays pending.
    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(await isPromiseSettled(snapshotPromise)).toBe(false);

    // Mirror the real store: fetchMore resolves once the new page has landed,
    // so the commit carrying the second row coincides with the resolution.
    mockTableData({ data: [firstRow, secondRow], fetchMore, hasMore: false });
    fetchMoreFinished.resolve();
    await act(async () => {
      rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);
      await fetchMoreFinished.promise;
    });

    const snapshot = await snapshotPromise;

    expect(snapshot.rows).toHaveLength(2);
    expect(snapshot.hasNextPage).toBe(false);
  });

  it("keeps fetching committed pages until the row limit is reached", async () => {
    const firstFetchFinished = createDeferred<void>();
    const secondFetchFinished = createDeferred<void>();
    const fetchMore = vi.fn()
      .mockImplementationOnce(() => firstFetchFinished.promise)
      .mockImplementationOnce(() => secondFetchFinished.promise);
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    const thirdRow = createRow({
      id: "3",
      name: "Katherine",
      status: "Active",
    });
    mockTableData({ data: [firstRow], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { rerender } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const snapshotPromise = ref.current!.getSnapshot({ rowLimit: 3 });

    expect(fetchMore).toHaveBeenCalledTimes(1);

    mockTableData({ data: [firstRow, secondRow], fetchMore, hasMore: true });
    firstFetchFinished.resolve();
    await act(async () => {
      rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);
      await firstFetchFinished.promise;
    });

    await waitFor(() => expect(fetchMore).toHaveBeenCalledTimes(2));

    mockTableData({
      data: [firstRow, secondRow, thirdRow],
      fetchMore,
      hasMore: false,
    });
    secondFetchFinished.resolve();
    await act(async () => {
      rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);
      await secondFetchFinished.promise;
    });

    const snapshot = await snapshotPromise;

    expect(snapshot.rows).toHaveLength(3);
    expect(fetchMore).toHaveBeenCalledTimes(2);
  });

  it("does not fetch when the committed snapshot already satisfies the row limit", async () => {
    const fetchMore = vi.fn(async () => {});
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    mockTableData({ data: [firstRow, secondRow], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = await ref.current!.getSnapshot({ rowLimit: 2 });

    expect(snapshot.rows).toHaveLength(2);
    expect(fetchMore).not.toHaveBeenCalled();
  });

  it("stops below the row limit when no next page exists", async () => {
    const fetchMore = vi.fn(async () => {});
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: false });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = await ref.current!.getSnapshot({ rowLimit: 2 });

    expect(snapshot.rows).toHaveLength(1);
    expect(snapshot.hasNextPage).toBe(false);
    expect(fetchMore).not.toHaveBeenCalled();
  });

  it("stops at the current snapshot when it has an error", async () => {
    const fetchMore = vi.fn(async () => {});
    const error = new Error("Could not load rows");
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], error, fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = await ref.current!.getSnapshot({ rowLimit: 2 });

    expect(snapshot.error).toBe(error);
    expect(fetchMore).not.toHaveBeenCalled();
  });

  it("surfaces the fetch error on the snapshot when fetching the next page rejects", async () => {
    const fetchError = new Error("Could not fetch next page");
    const fetchMore = vi.fn(async () => {
      throw fetchError;
    });
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshot = await ref.current!.getSnapshot({ rowLimit: 2 });

    // getSnapshot resolves with the rows loaded so far, but a rejecting
    // fetchMore must not look like a complete result: the failure is exposed on
    // snapshot.error so paginated callers (e.g. CSV export) can detect it.
    expect(snapshot.rows).toHaveLength(1);
    expect(snapshot.hasNextPage).toBe(true);
    expect(snapshot.error).toBe(fetchError);
    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  it("does not fetch for invalid row limits", async () => {
    const fetchMore = vi.fn(async () => {});
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    for (const rowLimit of [0, -1, Infinity, NaN]) {
      const snapshot = await ref.current!.getSnapshot({ rowLimit });
      expect(snapshot.rows).toHaveLength(1);
    }
    expect(fetchMore).not.toHaveBeenCalled();
  });

  it("resolves with the latest snapshot when a fetch commits no progress", async () => {
    const fetchMoreFinished = createDeferred<void>();
    const fetchMore = vi.fn(() => fetchMoreFinished.promise);
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    render(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const snapshotPromise = ref.current!.getSnapshot({ rowLimit: 2 });

    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(await isPromiseSettled(snapshotPromise)).toBe(false);

    // The fetch resolves but the data is unchanged (e.g. a deduped page). The
    // loop forces one commit, sees no new rows, and resolves rather than
    // looping forever chasing a limit the data set can't reach.
    fetchMoreFinished.resolve();
    await act(async () => {
      await fetchMoreFinished.promise;
    });

    const snapshot = await snapshotPromise;

    expect(snapshot.rows).toHaveLength(1);
    expect(snapshot.hasNextPage).toBe(true);
    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  it("stops fetching when a committed page decreases the loaded row count", async () => {
    const fetchMoreFinished = createDeferred<void>();
    const fetchMore = vi.fn(() => fetchMoreFinished.promise);
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    mockTableData({ data: [firstRow, secondRow], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { rerender } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const snapshotPromise = ref.current!.getSnapshot({ rowLimit: 3 });

    expect(fetchMore).toHaveBeenCalledTimes(1);
    expect(await isPromiseSettled(snapshotPromise)).toBe(false);

    mockTableData({ data: [firstRow], fetchMore, hasMore: true });
    fetchMoreFinished.resolve();
    await act(async () => {
      rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);
      await fetchMoreFinished.promise;
    });

    const snapshot = await snapshotPromise;

    expect(snapshot.rows).toHaveLength(1);
    expect(snapshot.hasNextPage).toBe(true);
    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  it("resolves a limited snapshot request when the table unmounts during an in-flight fetch", async () => {
    const fetchMore = vi.fn(() => new Promise<void>(() => {}));
    const row = createRow({ id: "1", name: "Ada", status: "Active" });
    mockTableData({ data: [row], fetchMore, hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { unmount } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const snapshotPromise = ref.current!.getSnapshot({ rowLimit: 2 });
    unmount();

    // Unmount resolves the in-flight fetch's race, so this settles on a
    // microtask with the already-loaded row. If the bail-out regressed, the
    // never-resolving fetchMore would hang here and the test would time out.
    const snapshot = await snapshotPromise;

    expect(snapshot.rows).toHaveLength(1);
    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  it("returns a fresh snapshot after ObjectTable receives new data", async () => {
    const firstRow = createRow({ id: "1", name: "Ada", status: "Active" });
    const secondRow = createRow({ id: "2", name: "Grace", status: "Active" });
    mockTableData({ data: [firstRow], hasMore: true });

    const ref = React.createRef<ObjectTableHandle<TestObject>>();
    const { rerender } = render(
      <ObjectTable tableRef={ref} objectType={TestObjectType} />,
    );

    const firstSnapshot = await ref.current?.getSnapshot();

    mockTableData({ data: [firstRow, secondRow], hasMore: false });
    rerender(<ObjectTable tableRef={ref} objectType={TestObjectType} />);

    const secondSnapshot = await ref.current?.getSnapshot();

    expect(firstSnapshot).not.toBe(secondSnapshot);
    expect(firstSnapshot?.rows).toHaveLength(1);
    expect(secondSnapshot?.rows).toHaveLength(2);
    expect(secondSnapshot?.hasNextPage).toBe(false);
  });

  it("renders column headers in the table", () => {
    mockTableData({
      data: [createRow({ id: "1", name: "Ada", status: "Active" })],
      hasMore: false,
    });

    render(<ObjectTable objectType={TestObjectType} />);

    const headers = screen.getAllByRole("columnheader");
    const headerNames = headers.map(h => h.textContent);
    expect(headerNames).toContain("Name");
    expect(headerNames).toContain("Status");
  });

  it("renders empty state when no data is available", () => {
    mockTableData({ data: [], hasMore: false });

    const { container } = render(<ObjectTable objectType={TestObjectType} />);

    // NonIdealState renders outside the <table>, inside the table wrapper
    expect(container.textContent).toContain("No Data");
  });
});

function mockTableData({
  data,
  error,
  fetchMore,
  hasMore,
  isLoading = false,
  totalCount,
}: {
  data: TestRow[];
  error?: Error;
  fetchMore?: () => Promise<void>;
  hasMore: boolean;
  isLoading?: boolean;
  totalCount?: string;
}): void {
  mockedUseObjectTableData.mockReturnValue({
    data,
    fetchMore,
    hasMore,
    isLoading,
    error,
    objectSet: undefined,
    refetch: vi.fn(),
    totalCount,
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

function createDeferred<T>(): {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: unknown) => void;
} {
  let resolve: (value: T) => void;
  let reject: (error: unknown) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });

  return {
    promise,
    resolve: resolve!,
    reject: reject!,
  };
}

async function isPromiseSettled<T>(promise: Promise<T>): Promise<boolean> {
  let isSettled = false;
  promise.then(
    () => {
      isSettled = true;
    },
    () => {
      isSettled = true;
    },
  );
  await Promise.resolve();
  return isSettled;
}

// Osdk.Instance is too complex to construct directly — the cast is scoped to
// this single helper so tests work with real TanStack Table accessors.
function createRow({
  id,
  name,
  status,
}: {
  id: string;
  name: string;
  status: string;
}): TestRow {
  return {
    $apiName: TestObjectType.apiName,
    $objectType: TestObjectType,
    $primaryKey: id,
    id,
    name,
    status,
  } as unknown as TestRow;
}
