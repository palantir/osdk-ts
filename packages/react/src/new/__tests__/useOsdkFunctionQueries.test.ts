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

import type { QueryDefinition } from "@osdk/api";
import type { Observer } from "@osdk/client/unstable-do-not-use";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../OsdkContext2.js";
import { useBatchedFunctionQueries } from "../useBatchedFunctionQueries.js";

const mockQueryDefinition1 = {
  apiName: "calculateStats",
  type: "query" as const,
  version: "1.0.0",
} as QueryDefinition<any>;

const mockQueryDefinition2 = {
  apiName: "getReports",
  type: "query" as const,
  version: "1.0.0",
} as QueryDefinition<any>;

describe("useBatchedFunctionQueries", () => {
  let capturedObservers: Array<Observer<any>>;
  let unsubscribeFns: Array<ReturnType<typeof vitest.fn>>;
  const mockInvalidateFunction = vitest.fn().mockResolvedValue(undefined);
  const mockObserveFunction = vitest.fn();

  const mockObservableClient = {
    observeFunction: mockObserveFunction,
    invalidateFunction: mockInvalidateFunction,
  };

  function createWrapper() {
    return ({ children }: { children: React.ReactNode }) =>
      React.createElement(
        OsdkContext2.Provider,
        {
          value: {
            client: {} as any,
            observableClient: mockObservableClient as any,
          },
        },
        children,
      );
  }

  beforeEach(() => {
    vitest.clearAllMocks();
    capturedObservers = [];
    unsubscribeFns = [];

    mockObserveFunction.mockImplementation(
      (
        _queryDef: any,
        _params: any,
        _options: any,
        observer: Observer<any>,
      ) => {
        capturedObservers.push(observer);
        const unsubscribe = vitest.fn();
        unsubscribeFns.push(unsubscribe);
        return { unsubscribe: unsubscribe };
      },
    );
  });

  it("should return initial state when no queries are provided", () => {
    const { result } = renderHook(
      () => useBatchedFunctionQueries({ queries: [] }),
      { wrapper: createWrapper() },
    );

    expect(result.current).toEqual([]);
  });

  it("should not execute queries when enabled is false", () => {
    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
          enabled: false,
        }),
      { wrapper: createWrapper() },
    );

    expect(result.current[0]).toEqual({
      data: undefined,
      isLoading: false,
      error: undefined,
      lastUpdated: 0,
    });
    expect(mockObserveFunction).not.toHaveBeenCalled();
  });

  it("should execute a single query and return result", async () => {
    const mockResult = { total: 100, average: 25 };

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: {
                params: { departmentId: "engineering" } as any,
              },
            },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Initially shows isLoading state
    expect(result.current[0].isLoading).toBe(true);

    // Simulate the observable delivering a result
    act(() => {
      capturedObservers[0].next!({
        result: mockResult,
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    expect(result.current[0]).toMatchObject({
      data: mockResult,
      isLoading: false,
      error: undefined,
      lastUpdated: 1000,
    });

    expect(mockObserveFunction).toHaveBeenCalledWith(
      mockQueryDefinition1,
      { departmentId: "engineering" },
      { dedupeInterval: 2_000 },
      expect.any(Object),
    );
  });

  it("should execute multiple queries in parallel", async () => {
    const mockResult1 = { total: 100 };
    const mockResult2 = { reports: ["report1", "report2"] };

    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: {
                params: { departmentId: "engineering" } as any,
              },
            },
            {
              queryDefinition: mockQueryDefinition2,
              options: {
                params: { startDate: "2024-01-01" } as any,
              },
            },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Both should start with isLoading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    // Deliver both results
    act(() => {
      capturedObservers[0].next!({
        result: mockResult1,
        status: "loaded",
        lastUpdated: 1000,
      });
      capturedObservers[1].next!({
        result: mockResult2,
        status: "loaded",
        lastUpdated: 1001,
      });
    });

    expect(result.current[0].data).toEqual(mockResult1);
    expect(result.current[1].data).toEqual(mockResult2);

    expect(mockObserveFunction).toHaveBeenCalledTimes(2);
    expect(mockObserveFunction).toHaveBeenCalledWith(
      mockQueryDefinition1,
      { departmentId: "engineering" },
      { dedupeInterval: 2_000 },
      expect.any(Object),
    );
    expect(mockObserveFunction).toHaveBeenCalledWith(
      mockQueryDefinition2,
      { startDate: "2024-01-01" },
      { dedupeInterval: 2_000 },
      expect.any(Object),
    );
  });

  it("should respect individual query enabled option", async () => {
    const mockResult = { total: 100 };

    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: { enabled: false },
            },
            {
              queryDefinition: mockQueryDefinition2,
              options: { enabled: true },
            },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // First query should not be loading (disabled)
    expect(result.current[0].isLoading).toBe(false);
    // Second query should be loading
    expect(result.current[1].isLoading).toBe(true);

    // Only one subscription created (for the enabled query)
    expect(mockObserveFunction).toHaveBeenCalledTimes(1);
    expect(mockObserveFunction).toHaveBeenCalledWith(
      mockQueryDefinition2,
      undefined,
      { dedupeInterval: 2_000 },
      expect.any(Object),
    );

    // Deliver result for the enabled query
    act(() => {
      capturedObservers[0].next!({
        result: mockResult,
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    expect(result.current[0].data).toBeUndefined();
    expect(result.current[1].data).toEqual(mockResult);
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Query failed");

    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Deliver an error via the observer
    act(() => {
      capturedObservers[0].next!({
        result: undefined,
        status: "error",
        lastUpdated: 1000,
        error: mockError,
      });
    });

    expect(result.current[0]).toMatchObject({
      data: undefined,
      isLoading: false,
      error: mockError,
      lastUpdated: 1000,
    });
  });

  it("should handle mixed success and error results", async () => {
    const mockResult = { total: 100 };
    const mockError = new Error("Second query failed");

    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
            { queryDefinition: mockQueryDefinition2 },
          ],
        }),
      { wrapper: createWrapper() },
    );

    act(() => {
      capturedObservers[0].next!({
        result: mockResult,
        status: "loaded",
        lastUpdated: 1000,
      });
      capturedObservers[1].next!({
        result: undefined,
        status: "error",
        lastUpdated: 1001,
        error: mockError,
      });
    });

    expect(result.current[0].data).toEqual(mockResult);
    expect(result.current[0].error).toBeUndefined();

    expect(result.current[1].data).toBeUndefined();
    expect(result.current[1].error).toEqual(mockError);
  });

  it("should cleanup on unmount", () => {
    const { unmount } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
        }),
      { wrapper: createWrapper() },
    );

    unmount();

    expect(unsubscribeFns[0]).toHaveBeenCalled();
  });

  it("should update results incrementally as queries complete", async () => {
    const { result } = renderHook(
      () =>
        useOsdkFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
            { queryDefinition: mockQueryDefinition2 },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Both should start loading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    // Deliver second query first to verify independent updates
    const result2 = { reports: ["report1"] };
    act(() => {
      capturedObservers[1].next!({
        result: result2,
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    // Second query should be done while first is still loading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].data).toEqual(result2);
    expect(result.current[1].isLoading).toBe(false);

    // Now deliver the first query
    const result1 = { total: 100 };
    act(() => {
      capturedObservers[0].next!({
        result: result1,
        status: "loaded",
        lastUpdated: 1001,
      });
    });

    expect(result.current[0].data).toEqual(result1);
    expect(result.current[0].isLoading).toBe(false);
    expect(result.current[1].data).toEqual(result2);
  });

  it("should provide working refetch function", async () => {
    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: { params: { id: 1 } as any },
            },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Deliver initial result
    act(() => {
      capturedObservers[0].next!({
        result: { total: 100 },
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    // Call refetch
    act(() => {
      result.current[0].refetch();
    });

    expect(mockInvalidateFunction).toHaveBeenCalledWith(
      mockQueryDefinition1,
      { id: 1 },
    );
  });

  it("should rerun queries when parameters change", async () => {
    const { result, rerender } = renderHook(
      ({ params }) =>
        useOsdkFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: { params },
            },
          ],
        }),
      {
        initialProps: { params: { id: 1 } as any },
        wrapper: createWrapper(),
      },
    );

    // Deliver initial result
    act(() => {
      capturedObservers[0].next!({
        result: { total: 100 },
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    expect(result.current[0].data).toEqual({ total: 100 });

    // Change parameters — should unsubscribe old and create new subscription
    rerender({ params: { id: 2 } as any });

    // Old subscription should be cleaned up
    expect(unsubscribeFns[0]).toHaveBeenCalled();

    // New subscription should be created
    expect(mockObserveFunction).toHaveBeenCalledTimes(2);

    // Deliver new result
    act(() => {
      capturedObservers[1].next!({
        result: { total: 200 },
        status: "loaded",
        lastUpdated: 2000,
      });
    });

    expect(result.current[0].data).toEqual({ total: 200 });
  });

  it("should handle observer error callback", async () => {
    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Trigger the error callback (different from error status in next)
    act(() => {
      capturedObservers[0].error!(new Error("Network failure"));
    });

    expect(result.current[0]).toMatchObject({
      data: undefined,
      isLoading: false,
      error: new Error("Network failure"),
    });
  });

  it("should deduplicate identical queries through the observable layer", () => {
    renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: { params: { id: 1 } as any },
            },
            {
              queryDefinition: mockQueryDefinition1,
              options: { params: { id: 1 } as any },
            },
          ],
        }),
      { wrapper: createWrapper() },
    );

    // Both queries should be subscribed via observeFunction;
    // the ObservableClient's Store layer handles actual deduplication
    expect(mockObserveFunction).toHaveBeenCalledTimes(2);
  });
});
