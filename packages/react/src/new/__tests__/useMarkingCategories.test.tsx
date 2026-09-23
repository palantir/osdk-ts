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

import type { Client } from "@osdk/client";
import { MarkingCategories, type MarkingCategory } from "@osdk/foundry.admin";
import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import defer from "p-defer";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  fakeObservableClient,
  TestOsdkProvider,
} from "../../public/testing.js";
import { useMarkingCategories } from "../platform-apis/admin/useMarkingCategories.js";

vi.mock("@osdk/foundry.admin", () => ({
  MarkingCategories: { list: vi.fn() },
}));

const client = {} as Client;
const list = vi.mocked(MarkingCategories.list);
const item = (id: string): MarkingCategory => ({
  id,
  name: id,
  description: "",
  categoryType: "CONJUNCTIVE",
  markingType: "CBAC",
  markings: [],
  createdTime: "2026-01-01T00:00:00Z",
});
const first = item("first");
const last = item("last");

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <TestOsdkProvider client={client} observableClient={fakeObservableClient}>
      {children}
    </TestOsdkProvider>
  );
}

describe("useMarkingCategories pagination", () => {
  beforeEach(() => {
    list.mockReset();
  });
  afterEach(cleanup);

  it("follows exact tokens through short and empty pages, preserving response order", async () => {
    const finalPage = defer<{ data: MarkingCategory[] }>();
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "short/+=" })
      .mockResolvedValueOnce({ data: [], nextPageToken: "empty/+=" })
      .mockReturnValueOnce(finalPage.promise);
    const { result } = renderHook(
      () => useMarkingCategories({ autoFetchMore: true }),
      {
        wrapper: Wrapper,
      },
    );
    await waitFor(() => expect(list).toHaveBeenCalledTimes(3));
    expect(result.current.categories).toEqual([first]);
    expect(result.current.isLoading).toBe(true);
    expect(list.mock.calls).toEqual([
      [client, { pageSize: 100, pageToken: undefined }],
      [client, { pageSize: 100, pageToken: "short/+=" }],
      [client, { pageSize: 100, pageToken: "empty/+=" }],
    ]);
    await act(() => {
      finalPage.resolve({ data: [last, first] });
    });
    expect(result.current.categories).toEqual([first, last, first]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it.each([{ data: [] }, { data: [first] }])(
    "stops after one page without a token ($data)",
    async ({ data }) => {
      list.mockResolvedValue({ data });
      const { result } = renderHook(
        () => useMarkingCategories({ autoFetchMore: true }),
        {
          wrapper: Wrapper,
        },
      );
      await waitFor(() => expect(result.current.categories).toEqual(data));
      expect(list).toHaveBeenCalledExactlyOnceWith(client, {
        pageSize: 100,
        pageToken: undefined,
      });
      expect(result.current.isLoading).toBe(false);
    },
  );

  it("does not fetch until enabled", async () => {
    list.mockResolvedValue({ data: [first] });
    const { result, rerender } = renderHook(
      ({ enabled }) => useMarkingCategories({ enabled }),
      {
        wrapper: Wrapper,
        initialProps: { enabled: false },
      },
    );
    expect(list).not.toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
    rerender({ enabled: true });
    await waitFor(() => expect(result.current.categories).toEqual([first]));
  });

  it("reports a later-page error alongside loaded pages and retries from page one", async () => {
    const error = new Error("second page failed");
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "page-2" })
      .mockRejectedValueOnce(error);
    const { result } = renderHook(
      () => useMarkingCategories({ autoFetchMore: true }),
      {
        wrapper: Wrapper,
      },
    );
    await waitFor(() => expect(result.current.error).toBe(error));
    expect(result.current.categories).toEqual([first]);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.isLoading).toBe(false);
    list
      .mockResolvedValueOnce({ data: [last], nextPageToken: "retry-2" })
      .mockResolvedValueOnce({ data: [first] });
    act(() => result.current.refetch());
    expect(result.current.error).toBeUndefined();
    expect(result.current.isLoading).toBe(true);
    await waitFor(() =>
      expect(result.current.categories).toEqual([last, first]),
    );
    expect(list.mock.calls.slice(2)).toEqual([
      [client, { pageSize: 100, pageToken: undefined }],
      [client, { pageSize: 100, pageToken: "retry-2" }],
    ]);
  });

  it.each([
    ["A", "A"],
    ["A", "B", "A"],
  ])("rejects repeated token sequence %j", async (...tokens) => {
    for (const nextPageToken of tokens) {
      list.mockResolvedValueOnce({ data: [first], nextPageToken });
    }
    const { result } = renderHook(
      () => useMarkingCategories({ autoFetchMore: true }),
      {
        wrapper: Wrapper,
      },
    );
    await waitFor(() =>
      expect(result.current.error?.message).toMatch(/repeated.*page token/iu),
    );
    expect(result.current.categories).toEqual(tokens.slice(1).map(() => first));
    expect(result.current.isLoading).toBe(false);
    expect(list).toHaveBeenCalledTimes(tokens.length);
  });

  it("clears the previous client's catalogue and ignores its pending traversal", async () => {
    const previousPage = defer<{ data: MarkingCategory[] }>();
    const nextPage = defer<{ data: MarkingCategory[] }>();
    list
      .mockResolvedValueOnce({ data: [first] })
      .mockResolvedValueOnce({ data: [first], nextPageToken: "old-2" })
      .mockReturnValueOnce(previousPage.promise)
      .mockReturnValueOnce(nextPage.promise);
    let activeClient = client;
    function ClientWrapper({ children }: React.PropsWithChildren) {
      return (
        <TestOsdkProvider
          client={activeClient}
          observableClient={fakeObservableClient}
        >
          {children}
        </TestOsdkProvider>
      );
    }
    const { result, rerender } = renderHook(
      () => useMarkingCategories({ autoFetchMore: true }),
      {
        wrapper: ClientWrapper,
      },
    );
    await waitFor(() => expect(result.current.categories).toEqual([first]));
    act(() => result.current.refetch());
    await waitFor(() => expect(list).toHaveBeenCalledTimes(3));
    activeClient = {} as Client;
    rerender();
    expect(result.current.categories).toBeUndefined();
    await waitFor(() =>
      expect(list).toHaveBeenLastCalledWith(activeClient, {
        pageSize: 100,
        pageToken: undefined,
      }),
    );
    await act(() => {
      nextPage.resolve({ data: [last] });
      previousPage.resolve({ data: [first] });
    });
    expect(result.current.categories).toEqual([last]);
    expect(result.current.error).toBeUndefined();
  });

  it.each([undefined, false])(
    "loads only the first page by default or when autoFetchMore is %s",
    async (autoFetchMore) => {
      list
        .mockResolvedValueOnce({ data: [first], nextPageToken: "next/+=" })
        .mockResolvedValueOnce({ data: [last] });
      const { result } = renderHook(
        () => useMarkingCategories({ autoFetchMore, pageSize: 25 }),
        { wrapper: Wrapper },
      );
      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.categories).toEqual([first]);
      expect(result.current.hasMore).toBe(true);
      expect(list).toHaveBeenCalledExactlyOnceWith(client, {
        pageSize: 25,
        pageToken: undefined,
      });
      await act(async () => {
        await result.current.fetchMore?.();
      });
      expect(result.current.categories).toEqual([first, last]);
      expect(list).toHaveBeenLastCalledWith(client, {
        pageSize: 25,
        pageToken: "next/+=",
      });
      expect(result.current.hasMore).toBe(false);
      expect(result.current.fetchMore).toBeUndefined();
    },
  );

  it("auto-fetches to a minimum item count, then allows manual paging", async () => {
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "empty" })
      .mockResolvedValueOnce({ data: [], nextPageToken: "short" })
      .mockResolvedValueOnce({ data: [last, first], nextPageToken: "manual" })
      .mockResolvedValueOnce({ data: [last] });
    const { result } = renderHook(
      () => useMarkingCategories({ autoFetchMore: 2 }),
      { wrapper: Wrapper },
    );
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(list).toHaveBeenCalledTimes(3);
    expect(result.current.categories).toEqual([first, last, first]);
    expect(result.current.hasMore).toBe(true);
    await act(async () => {
      await result.current.fetchMore?.();
    });
    expect(result.current.categories).toEqual([first, last, first, last]);
    expect(result.current.hasMore).toBe(false);
  });

  it("coalesces overlapping fetchMore calls and retries a failed page without duplicating items", async () => {
    const pending = defer<{ data: MarkingCategory[] }>();
    const error = new Error("next page failed");
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "next" })
      .mockReturnValueOnce(pending.promise)
      .mockResolvedValueOnce({ data: [last] });
    const { result } = renderHook(() => useMarkingCategories(), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.hasMore).toBe(true));
    let a: Promise<void> | undefined;
    let b: Promise<void> | undefined;
    act(() => {
      a = result.current.fetchMore?.();
      b = result.current.fetchMore?.();
    });
    expect(a).toBe(b);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.categories).toEqual([first]);
    await act(async () => {
      pending.reject(error);
      await a;
    });
    expect(list).toHaveBeenCalledTimes(2);
    expect(result.current.error).toBe(error);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.categories).toEqual([first]);
    await act(async () => {
      await result.current.fetchMore?.();
    });
    expect(result.current.categories).toEqual([first, last]);
    expect(result.current.error).toBeUndefined();
    expect(list.mock.calls.slice(1)).toEqual([
      [client, { pageSize: 100, pageToken: "next" }],
      [client, { pageSize: 100, pageToken: "next" }],
    ]);
  });

  it("ignores a superseded fetchMore after refetch restarts at page one", async () => {
    const pending = defer<{
      data: MarkingCategory[];
      nextPageToken?: string;
    }>();
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "old" })
      .mockReturnValueOnce(pending.promise)
      .mockResolvedValueOnce({ data: [last] });
    const { result } = renderHook(() => useMarkingCategories(), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.hasMore).toBe(true));
    act(() => {
      void result.current.fetchMore?.();
    });
    await waitFor(() => expect(list).toHaveBeenCalledTimes(2));
    act(() => result.current.refetch());
    await waitFor(() => expect(result.current.categories).toEqual([last]));
    await act(() => {
      pending.resolve({ data: [first], nextPageToken: "stale" });
    });
    expect(result.current.categories).toEqual([last]);
    expect(result.current.hasMore).toBe(false);
    expect(list).toHaveBeenLastCalledWith(client, {
      pageSize: 100,
      pageToken: undefined,
    });
  });

  it("restarts at page one when pageSize changes", async () => {
    list
      .mockResolvedValueOnce({ data: [first], nextPageToken: "old" })
      .mockResolvedValueOnce({ data: [last] });
    const { result, rerender } = renderHook(
      ({ pageSize }) => useMarkingCategories({ pageSize }),
      {
        wrapper: Wrapper,
        initialProps: { pageSize: 10 },
      },
    );
    await waitFor(() => expect(result.current.categories).toEqual([first]));
    rerender({ pageSize: 20 });
    expect(result.current.categories).toBeUndefined();
    await waitFor(() => expect(result.current.categories).toEqual([last]));
    expect(list).toHaveBeenLastCalledWith(client, {
      pageSize: 20,
      pageToken: undefined,
    });
  });
});
