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

import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { usePrefetch } from "../src/new/usePrefetch.js";

describe("usePrefetch", () => {
  const mockObservableClient = {
    prefetchObject: vi.fn().mockResolvedValue(undefined),
    prefetchList: vi.fn().mockResolvedValue(undefined),
  } as unknown as ObservableClient;

  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <OsdkContext2.Provider
        value={{ observableClient: mockObservableClient }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should provide prefetchObject function", async () => {
    const { result } = renderHook(() => usePrefetch(), { wrapper });

    const mockType = { apiName: "Employee" } as ObjectTypeDefinition;
    const mockPk = "emp-123" as PrimaryKeyType<typeof mockType>;

    await result.current.prefetchObject(mockType, mockPk);

    expect(mockObservableClient.prefetchObject).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchObject).toHaveBeenCalledWith(
      mockType,
      mockPk,
      undefined,
    );
  });

  it("should provide prefetchObject function with options", async () => {
    const { result } = renderHook(() => usePrefetch(), { wrapper });

    const mockType = { apiName: "Employee" } as ObjectTypeDefinition;
    const mockPk = "emp-123" as PrimaryKeyType<typeof mockType>;
    const options = { mode: "offline" as const, select: ["name", "department"] };

    await result.current.prefetchObject(mockType, mockPk, options);

    expect(mockObservableClient.prefetchObject).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchObject).toHaveBeenCalledWith(
      mockType,
      mockPk,
      options,
    );
  });

  it("should provide prefetchList function", async () => {
    const { result } = renderHook(() => usePrefetch(), { wrapper });

    const mockType = { apiName: "Todo" } as ObjectTypeDefinition;
    const options = {
      type: mockType,
      where: { isComplete: false },
      orderBy: { createdAt: "desc" as const },
    };

    await result.current.prefetchList(options);

    expect(mockObservableClient.prefetchList).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchList).toHaveBeenCalledWith(options);
  });

  it("should provide prefetchMultiple function for batch prefetching", async () => {
    const { result } = renderHook(() => usePrefetch(), { wrapper });

    const mockType1 = { apiName: "Employee" } as ObjectTypeDefinition;
    const mockType2 = { apiName: "Office" } as ObjectTypeDefinition;

    const queries = [
      {
        type: "object" as const,
        options: {
          apiName: mockType1,
          pk: "emp-1" as PrimaryKeyType<typeof mockType1>,
        },
      },
      {
        type: "list" as const,
        options: {
          type: mockType2,
          where: {},
        },
      },
    ];

    await result.current.prefetchMultiple(queries);

    expect(mockObservableClient.prefetchObject).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchObject).toHaveBeenCalledWith(
      mockType1,
      "emp-1",
      { mode: undefined, select: undefined },
    );

    expect(mockObservableClient.prefetchList).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchList).toHaveBeenCalledWith({
      type: mockType2,
      where: {},
    });
  });

  it("should handle errors in prefetchMultiple gracefully", async () => {
    const mockError = new Error("Prefetch failed");
    const mockObservableClientWithError = {
      prefetchObject: vi.fn().mockRejectedValue(mockError),
      prefetchList: vi.fn().mockResolvedValue(undefined),
    } as unknown as ObservableClient;

    const errorWrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{ observableClient: mockObservableClientWithError }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    const { result } = renderHook(() => usePrefetch(), { wrapper: errorWrapper });

    const queries = [
      {
        type: "object" as const,
        options: {
          apiName: { apiName: "Employee" } as ObjectTypeDefinition,
          pk: "emp-1" as PrimaryKeyType<ObjectTypeDefinition>,
        },
      },
      {
        type: "list" as const,
        options: {
          type: { apiName: "Office" } as ObjectTypeDefinition,
          where: {},
        },
      },
    ];

    // Should reject with the error from prefetchObject
    await expect(result.current.prefetchMultiple(queries)).rejects.toThrow(
      "Prefetch failed",
    );
  });

  it("should not cause re-renders when calling prefetch functions", () => {
    let renderCount = 0;

    const TestComponent = () => {
      renderCount++;
      const { prefetchObject, prefetchList } = usePrefetch();

      React.useEffect(() => {
        const mockType = { apiName: "Employee" } as ObjectTypeDefinition;
        prefetchObject(mockType, "emp-1" as PrimaryKeyType<typeof mockType>);
        prefetchList({ type: mockType });
      }, [prefetchObject, prefetchList]);

      return null;
    };

    const { rerender } = renderHook(() => <TestComponent />, { wrapper });

    expect(renderCount).toBe(1);

    rerender();

    // Should not re-render due to stable function references
    expect(renderCount).toBe(1);
  });

  it("should handle prefetchMultiple with object options including mode and select", async () => {
    const { result } = renderHook(() => usePrefetch(), { wrapper });

    const mockType = { apiName: "Employee" } as ObjectTypeDefinition;

    const queries = [
      {
        type: "object" as const,
        options: {
          apiName: mockType,
          pk: "emp-1" as PrimaryKeyType<typeof mockType>,
          mode: "force" as const,
          select: ["name", "email"],
        },
      },
    ];

    await result.current.prefetchMultiple(queries);

    expect(mockObservableClient.prefetchObject).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.prefetchObject).toHaveBeenCalledWith(
      mockType,
      "emp-1",
      { mode: "force", select: ["name", "email"] },
    );
  });

  it("should execute all prefetches in parallel", async () => {
    let objectPrefetchStarted = false;
    let listPrefetchStarted = false;

    const mockObservableClientParallel = {
      prefetchObject: vi.fn().mockImplementation(async () => {
        objectPrefetchStarted = true;
        // Check that list prefetch has also started
        await new Promise(resolve => setTimeout(resolve, 10));
        expect(listPrefetchStarted).toBe(true);
      }),
      prefetchList: vi.fn().mockImplementation(async () => {
        listPrefetchStarted = true;
        // Check that object prefetch has also started
        await new Promise(resolve => setTimeout(resolve, 10));
        expect(objectPrefetchStarted).toBe(true);
      }),
    } as unknown as ObservableClient;

    const parallelWrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{ observableClient: mockObservableClientParallel }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    const { result } = renderHook(() => usePrefetch(), { wrapper: parallelWrapper });

    const queries = [
      {
        type: "object" as const,
        options: {
          apiName: { apiName: "Employee" } as ObjectTypeDefinition,
          pk: "emp-1" as PrimaryKeyType<ObjectTypeDefinition>,
        },
      },
      {
        type: "list" as const,
        options: {
          type: { apiName: "Office" } as ObjectTypeDefinition,
          where: {},
        },
      },
    ];

    await result.current.prefetchMultiple(queries);

    expect(objectPrefetchStarted).toBe(true);
    expect(listPrefetchStarted).toBe(true);
  });
});