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

import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import defer from "p-defer";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";

import { usePlatformQuery } from "../src/utils/usePlatformQuery.js";

describe("usePlatformQuery enabled option", () => {
  const mockQueryFn = vitest.fn();

  const createWrapper = () => {
    return ({ children }: React.PropsWithChildren) => <div>{children}</div>;
  };

  beforeEach(() => {
    mockQueryFn.mockClear();
    mockQueryFn.mockReturnValue(new Promise<undefined>(() => undefined));
  });

  it("should NOT call mockQueryFn when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        usePlatformQuery({
          query: mockQueryFn,
          queryName: "query-test",
          enabled: false,
        }),
      {
        wrapper,
      },
    );

    expect(mockQueryFn).not.toHaveBeenCalled();
  });

  it("should query when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) =>
        usePlatformQuery({
          query: mockQueryFn,
          queryName: "query-test",
          enabled,
        }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockQueryFn).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockQueryFn).toHaveBeenCalledTimes(1);
  });
});

describe("usePlatformQuery request lifecycle", () => {
  afterEach(cleanup);

  it("ends loading on rejection and preserves the original error", async () => {
    const error = new Error("request failed");
    const query = vitest.fn().mockRejectedValue(error);
    const { result } = renderHook(() =>
      usePlatformQuery({ query, queryName: "test" }),
    );
    await waitFor(() => expect(result.current.error).toBe(error));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    query.mockResolvedValue("recovered");
    act(() => result.current.refetch());
    expect(result.current.error).toBeUndefined();
    await waitFor(() => expect(result.current.data).toBe("recovered"));
    expect(result.current.isLoading).toBe(false);
  });

  it.each(["resolve", "reject"] as const)(
    "ignores an older refetch that %ss after the latest request",
    async (settlement) => {
      const old = defer<string>();
      const latest = defer<string>();
      const query = vitest
        .fn()
        .mockReturnValueOnce(old.promise)
        .mockReturnValueOnce(latest.promise);
      const { result } = renderHook(() =>
        usePlatformQuery({ query, queryName: "test" }),
      );
      act(() => result.current.refetch());
      await act(() => {
        latest.resolve("latest");
      });
      await act(() => {
        if (settlement === "resolve") old.resolve("stale");
        else old.reject(new Error("stale error"));
      });
      expect(result.current.data).toBe("latest");
      expect(result.current.error).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
    },
  );

  it("keeps loading when an older request finishes before the latest", async () => {
    const old = defer<string>();
    const latest = defer<string>();
    const query = vitest
      .fn()
      .mockReturnValueOnce(old.promise)
      .mockReturnValueOnce(latest.promise);
    const { result } = renderHook(() =>
      usePlatformQuery({ query, queryName: "test" }),
    );
    act(() => result.current.refetch());
    await act(() => {
      old.resolve("stale");
    });
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(true);
    await act(() => {
      latest.resolve("latest");
    });
    expect(result.current.data).toBe("latest");
  });

  it("clears previous data on query changes and ignores the old query's pending request", async () => {
    const old = defer<string>();
    const latest = defer<string>();
    const firstQuery = vitest
      .fn()
      .mockResolvedValueOnce("first")
      .mockReturnValueOnce(old.promise);
    const secondQuery = vitest.fn().mockReturnValue(latest.promise);
    const { result, rerender } = renderHook(
      ({ query }) => usePlatformQuery({ query, queryName: "test" }),
      {
        initialProps: { query: firstQuery },
      },
    );
    await waitFor(() => expect(result.current.data).toBe("first"));
    rerender({ query: secondQuery });
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(true);
    rerender({ query: firstQuery });
    rerender({ query: secondQuery });
    await act(() => {
      latest.resolve("second");
      old.resolve("stale");
    });
    expect(result.current.data).toBe("second");
    expect(result.current.error).toBeUndefined();
  });

  it("ignores a pending request after disabling the query", async () => {
    const pending = defer<string>();
    const query = vitest.fn().mockReturnValue(pending.promise);
    const { result, rerender } = renderHook(
      ({ enabled }) => usePlatformQuery({ query, queryName: "test", enabled }),
      {
        initialProps: { enabled: true },
      },
    );
    rerender({ enabled: false });
    await act(() => {
      pending.resolve("stale");
    });
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });

  it("normalizes non-Error rejections and ends loading", async () => {
    const query = vitest.fn().mockRejectedValue("request failed");
    const { result } = renderHook(() =>
      usePlatformQuery({ query, queryName: "test" }),
    );
    await waitFor(() =>
      expect(result.current.error).toEqual(new Error("request failed")),
    );
    expect(result.current.isLoading).toBe(false);
  });
});
