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
import type { Client } from "@osdk/client";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, vitest } from "vitest";
import { useOsdkClient } from "../../useOsdkClient.js";
import { useBatchedFunctionQueries } from "../useBatchedFunctionQueries.js";

vi.mock("../../useOsdkClient.js");

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
  const mockExecuteFunction = vitest.fn();
  const mockClient = vitest.fn(() => ({
    executeFunction: mockExecuteFunction,
  }));

  beforeEach(() => {
    vitest.clearAllMocks();
    vi.mocked(useOsdkClient).mockReturnValue(mockClient as unknown as Client);
  });

  it("should return initial state when no queries are provided", () => {
    const { result } = renderHook(
      () => useBatchedFunctionQueries({ queries: [] }),
    );

    expect(result.current).toEqual([]);
  });

  it("should not execute queries when enabled is false", () => {
    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
          enabled: false,
        }),
    );

    expect(result.current[0]).toEqual({
      data: undefined,
      isLoading: false,
      error: undefined,
      lastUpdated: 0,
      refetch: expect.any(Function),
    });
    expect(mockClient).not.toHaveBeenCalled();
  });

  it("should execute a single query and return result", async () => {
    const mockResult = { total: 100, average: 25 };
    mockExecuteFunction.mockResolvedValue(mockResult);

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries(
          {
            queries: [
              {
                queryDefinition: mockQueryDefinition1,
                options: {
                  params: { departmentId: "engineering" } as any,
                },
              },
            ],
          },
        ),
    );

    // Initially shows isLoading state
    expect(result.current[0]).toEqual({
      data: undefined,
      isLoading: true,
      error: undefined,
      lastUpdated: 0,
      refetch: expect.any(Function),
    });

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0]).toMatchObject({
      data: mockResult,
      isLoading: false,
      error: undefined,
      lastUpdated: expect.any(Number),
    });

    expect(mockClient).toHaveBeenCalledWith(mockQueryDefinition1);
    expect(mockExecuteFunction).toHaveBeenCalledWith({
      departmentId: "engineering",
    });
  });

  it("should execute multiple queries in parallel", async () => {
    const mockResult1 = { total: 100 };
    const mockResult2 = { reports: ["report1", "report2"] };

    mockExecuteFunction
      .mockResolvedValueOnce(mockResult1)
      .mockResolvedValueOnce(mockResult2);

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
            {
              queryDefinition: mockQueryDefinition2,
              options: {
                params: { startDate: "2024-01-01" } as any,
              },
            },
          ],
        }),
    );

    // Both should start with isLoading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
      expect(result.current[1].isLoading).toBe(false);
    });

    expect(result.current[0].data).toEqual(mockResult1);
    expect(result.current[1].data).toEqual(mockResult2);

    expect(mockClient).toHaveBeenCalledTimes(2);
    expect(mockClient).toHaveBeenCalledWith(mockQueryDefinition1);
    expect(mockExecuteFunction).toHaveBeenCalledWith({
      departmentId: "engineering",
    });
    expect(mockClient).toHaveBeenCalledWith(mockQueryDefinition2);
    expect(mockExecuteFunction).toHaveBeenNthCalledWith(2, {
      startDate: "2024-01-01",
    });
  });

  it("should respect individual query enabled option", async () => {
    const mockResult = { total: 100 };
    mockExecuteFunction.mockResolvedValue(mockResult);

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
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
    );

    // First query should not be loading (disabled)
    expect(result.current[0].isLoading).toBe(false);
    // Second query should be loading
    expect(result.current[1].isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current[1].isLoading).toBe(false);
    });

    expect(result.current[0].data).toBeUndefined();
    expect(result.current[1].data).toEqual(mockResult);

    // Only the second query should have been called
    expect(mockClient).toHaveBeenCalledTimes(1);
    expect(mockClient).toHaveBeenCalledWith(mockQueryDefinition2);
    expect(mockExecuteFunction).toHaveBeenCalledWith(undefined);
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Query failed");
    mockExecuteFunction.mockRejectedValue(mockError);

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
        }),
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0]).toMatchObject({
      data: undefined,
      isLoading: false,
      error: mockError,
      lastUpdated: expect.any(Number),
    });
  });

  it("should handle mixed success and error results", async () => {
    const mockResult = { total: 100 };
    const mockError = new Error("Second query failed");

    mockExecuteFunction
      .mockResolvedValueOnce(mockResult)
      .mockRejectedValueOnce(mockError);

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
            { queryDefinition: mockQueryDefinition2 },
          ],
        }),
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
      expect(result.current[1].isLoading).toBe(false);
    });

    expect(result.current[0].data).toEqual(mockResult);
    expect(result.current[0].error).toBeUndefined();

    expect(result.current[1].data).toBeUndefined();
    expect(result.current[1].error).toEqual(mockError);
  });

  it("should cleanup on unmount", () => {
    const abortSpy = vi.spyOn(AbortController.prototype, "abort");

    const { unmount } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
          ],
        }),
    );

    unmount();

    expect(abortSpy).toHaveBeenCalled();
  });

  it("should update results incrementally as queries complete", async () => {
    // Create promises that we can control the resolution of
    let resolveQuery1: ((value: any) => void) | undefined;
    let resolveQuery2: ((value: any) => void) | undefined;

    const query1Promise = new Promise((resolve) => {
      resolveQuery1 = resolve;
    });

    const query2Promise = new Promise((resolve) => {
      resolveQuery2 = resolve;
    });

    // Mock the client to return controlled promises
    mockExecuteFunction
      .mockReturnValueOnce(query1Promise)
      .mockReturnValueOnce(query2Promise);

    const { result } = renderHook(
      () =>
        useBatchedFunctionQueries({
          queries: [
            { queryDefinition: mockQueryDefinition1 },
            { queryDefinition: mockQueryDefinition2 },
          ],
        }),
    );

    // Both should start loading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    // Resolve the second query first to verify parallel execution
    const result2 = { reports: ["report1"] };
    resolveQuery2?.(result2);

    await waitFor(() => {
      expect(result.current[1].isLoading).toBe(false);
    });

    // Second query should be done while first is still loading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].data).toEqual(result2);

    // Now resolve the first query
    const result1 = { total: 100 };
    resolveQuery1?.(result1);

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].data).toEqual(result1);
    expect(result.current[1].data).toEqual(result2);
  });

  it("should provide working refetch function", async () => {
    const mockResult1 = { total: 100 };
    const mockResult2 = { total: 200 };

    mockExecuteFunction
      .mockResolvedValueOnce(mockResult1)
      .mockResolvedValueOnce(mockResult2);

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
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].data).toEqual(mockResult1);

    // Call refetch
    result.current[0].refetch();

    // Verify the client was called again
    await waitFor(() => {
      expect(mockExecuteFunction).toHaveBeenCalledTimes(2);
    });
  });

  it("should rerun queries when parameters change", async () => {
    const mockResult1 = { total: 100 };
    const mockResult2 = { total: 200 };

    mockExecuteFunction
      .mockResolvedValueOnce(mockResult1)
      .mockResolvedValueOnce(mockResult2);

    const { result, rerender } = renderHook(
      ({ params }) =>
        useBatchedFunctionQueries({
          queries: [
            {
              queryDefinition: mockQueryDefinition1,
              options: { params },
            },
          ],
        }),
      { initialProps: { params: { id: 1 } as any } },
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].data).toEqual(mockResult1);

    // Change parameters
    rerender({ params: { id: 2 } as any });

    // Should trigger a new query
    await waitFor(() => {
      expect(mockExecuteFunction).toHaveBeenCalledTimes(2);
    });

    await waitFor(() => {
      expect(result.current[0].data).toEqual(mockResult2);
    });
  });
});
