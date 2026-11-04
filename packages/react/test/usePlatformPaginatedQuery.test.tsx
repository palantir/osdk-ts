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

import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import defer from "p-defer";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { usePlatformPaginatedQuery } from "../src/utils/usePlatformPaginatedQuery.js";

describe("usePlatformPaginatedQuery", () => {
  afterEach(cleanup);

  it.each([{ data: [] }, { data: ["first"] }])(
    "stops without a continuation token ($data)",
    async ({ data }) => {
      const query = vi.fn().mockResolvedValue({ data });
      const { result } = renderHook(() =>
        usePlatformPaginatedQuery({
          query,
          queryName: "test",
          autoFetchMore: true,
        }),
      );
      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.data).toEqual(data);
      expect(result.current.hasMore).toBe(false);
      expect(result.current.fetchMore).toBeUndefined();
      expect(query).toHaveBeenCalledExactlyOnceWith(undefined);
    },
  );

  it.each([
    ["A", "A"],
    ["A", "B", "A"],
  ])("rejects repeated token sequence %j", async (...tokens) => {
    const query = vi.fn();
    for (const nextPageToken of tokens) {
      query.mockResolvedValueOnce({ data: ["item"], nextPageToken });
    }
    const { result } = renderHook(() =>
      usePlatformPaginatedQuery({
        query,
        queryName: "test",
        autoFetchMore: true,
      }),
    );
    await waitFor(() =>
      expect(result.current.error?.message).toMatch(/repeated.*page token/iu),
    );
    expect(result.current.isLoading).toBe(false);
    expect(query).toHaveBeenCalledTimes(tokens.length);
  });

  it("continues beyond 100 pages instead of silently truncating", async () => {
    const query = vi.fn();
    for (let index = 0; index < 101; index++) {
      query.mockResolvedValueOnce({ data: [], nextPageToken: `page-${index}` });
    }
    query.mockResolvedValueOnce({ data: ["last"] });
    const { result } = renderHook(() =>
      usePlatformPaginatedQuery({
        query,
        queryName: "test",
        autoFetchMore: true,
      }),
    );
    await waitFor(() => expect(result.current.data).toEqual(["last"]));
    expect(query).toHaveBeenCalledTimes(102);
  });

  it("coalesces overlapping fetchMore calls and retries the failed page without duplicating items", async () => {
    const pending = defer<{ data: string[] }>();
    const error = new Error("next page failed");
    const query = vi
      .fn()
      .mockResolvedValueOnce({ data: ["first"], nextPageToken: "next" })
      .mockReturnValueOnce(pending.promise)
      .mockResolvedValueOnce({ data: ["last"] });
    const { result } = renderHook(() =>
      usePlatformPaginatedQuery({ query, queryName: "test" }),
    );
    await waitFor(() => expect(result.current.hasMore).toBe(true));
    let requests: Array<Promise<void> | undefined>;
    act(() => {
      requests = [result.current.fetchMore?.(), result.current.fetchMore?.()];
    });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toEqual(["first"]);
    await act(async () => {
      pending.reject(error);
      await Promise.all(requests);
    });
    expect(query).toHaveBeenCalledTimes(2);
    expect(result.current.error).toBe(error);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(["first"]);
    await act(async () => {
      await result.current.fetchMore?.();
    });
    expect(result.current.data).toEqual(["first", "last"]);
    expect(result.current.error).toBeUndefined();
    expect(query.mock.calls).toEqual([[undefined], ["next"], ["next"]]);
  });

  it.each(["resolve", "reject"])(
    "ignores a superseded page request that %ss after refetch",
    async (settlement) => {
      const old = defer<{ data: string[]; nextPageToken?: string }>();
      const query = vi
        .fn()
        .mockResolvedValueOnce({ data: ["first"], nextPageToken: "old" })
        .mockReturnValueOnce(old.promise)
        .mockResolvedValueOnce({ data: ["latest"] });
      const { result } = renderHook(() =>
        usePlatformPaginatedQuery({
          query,
          queryName: "test",
          autoFetchMore: true,
        }),
      );
      await waitFor(() => expect(query).toHaveBeenCalledTimes(2));
      act(() => result.current.refetch());
      await waitFor(() => expect(result.current.data).toEqual(["latest"]));
      await act(() => {
        if (settlement === "resolve")
          old.resolve({ data: ["stale"], nextPageToken: "ignored" });
        else old.reject(new Error("stale error"));
      });
      expect(result.current.data).toEqual(["latest"]);
      expect(result.current.error).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasMore).toBe(false);
      expect(query.mock.calls).toEqual([[undefined], ["old"], [undefined]]);
    },
  );

  it.each(["disable", "unmount"])(
    "stops an automatic traversal on %s",
    async (action) => {
      const page = defer<{ data: string[]; nextPageToken?: string }>();
      const query = vi
        .fn()
        .mockResolvedValueOnce({ data: ["first"], nextPageToken: "second" })
        .mockReturnValueOnce(page.promise);
      const { result, rerender, unmount } = renderHook(
        ({ enabled }) =>
          usePlatformPaginatedQuery({
            query,
            queryName: "test",
            autoFetchMore: true,
            enabled,
          }),
        { initialProps: { enabled: true } },
      );
      await waitFor(() => expect(query).toHaveBeenCalledTimes(2));
      if (action === "disable") rerender({ enabled: false });
      else unmount();
      await act(() => {
        page.resolve({ data: ["second"], nextPageToken: "third" });
      });
      expect(query).toHaveBeenCalledTimes(2);
      if (action === "disable") {
        expect(result.current.data).toBeUndefined();
        expect(result.current.isLoading).toBe(false);
      }
    },
  );

  it("recovers from a synchronous query error", async () => {
    const query = vi
      .fn<() => Promise<{ data: string[] }>>()
      .mockImplementationOnce(() => {
        throw new Error("sync failure");
      })
      .mockResolvedValueOnce({ data: ["recovered"] });
    const { result } = renderHook(() =>
      usePlatformPaginatedQuery({ query, queryName: "test" }),
    );
    await waitFor(() =>
      expect(result.current.error?.message).toBe("sync failure"),
    );
    expect(result.current.isLoading).toBe(false);
    act(() => result.current.refetch());
    await waitFor(() => expect(result.current.data).toEqual(["recovered"]));
    expect(result.current.error).toBeUndefined();
  });

  it("normalizes a non-Error rejection", async () => {
    const query = vi.fn().mockRejectedValue("failed");
    const { result } = renderHook(() =>
      usePlatformPaginatedQuery({ query, queryName: "test" }),
    );
    await waitFor(() =>
      expect(result.current.error).toEqual(new Error("failed")),
    );
    expect(result.current.isLoading).toBe(false);
  });

  it("restarts when autoFetchMore changes", async () => {
    const query = vi
      .fn()
      .mockResolvedValueOnce({ data: ["first"], nextPageToken: "old" })
      .mockResolvedValueOnce({ data: ["new"], nextPageToken: "next" })
      .mockResolvedValueOnce({ data: ["last"] });
    const { result, rerender } = renderHook(
      ({ autoFetchMore }) =>
        usePlatformPaginatedQuery({ query, queryName: "test", autoFetchMore }),
      { initialProps: { autoFetchMore: false } },
    );
    await waitFor(() => expect(result.current.data).toEqual(["first"]));
    rerender({ autoFetchMore: true });
    await waitFor(() => expect(result.current.data).toEqual(["new", "last"]));
    expect(query.mock.calls).toEqual([[undefined], [undefined], ["next"]]);
  });

  it("loads after StrictMode replays the subscription", async () => {
    const query = vi.fn().mockResolvedValue({ data: ["value"] });
    const { result } = renderHook(
      () => usePlatformPaginatedQuery({ query, queryName: "test" }),
      { wrapper: React.StrictMode },
    );
    await waitFor(() => expect(result.current.data).toEqual(["value"]));
    expect(result.current.isLoading).toBe(false);
  });
});
