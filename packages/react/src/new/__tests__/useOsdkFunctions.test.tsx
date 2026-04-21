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

import type { ObjectTypeDefinition, Osdk, QueryDefinition } from "@osdk/api";
import type { Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext2 } from "../OsdkContext2.js";
import type { UseOsdkFunctionOptions } from "../useOsdkFunction.js";
import type { UseOsdkFunctionsProps } from "../useOsdkFunctions.js";
import { useOsdkFunctions } from "../useOsdkFunctions.js";

const MOCK_QUERY_DEF_1: QueryDefinition<unknown> = {
  type: "query",
  apiName: "calculateStats",
  version: "1.0.0",
};

const MOCK_QUERY_DEF_2: QueryDefinition<unknown> = {
  type: "query",
  apiName: "getReports",
  version: "1.0.0",
};

const MOCK_QUERY_DEF_3: QueryDefinition<unknown> = {
  type: "query",
  apiName: "getSummary",
  version: "1.0.0",
};

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

const testObject = {
  $apiName: TestObjectType.apiName,
  $primaryKey: 123,
} as Osdk.Instance<typeof TestObjectType>;

type Observer = {
  next: (payload: unknown) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

function createMockObservableClient(
  overrides?: Partial<ObservableClient>,
): ObservableClient {
  return {
    observeFunction: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    invalidateFunction: vi.fn(),
    ...overrides,
  } as unknown as ObservableClient;
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext2.Provider
        value={{
          client: {} as Client,
          observableClient,
          devtoolsEnabled: false,
        }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };
}

function captureObservers(
  mockObservableClient: ObservableClient,
): Observer[] {
  const observers: Observer[] = [];
  (mockObservableClient as unknown as Record<string, unknown>).observeFunction =
    vi.fn()
      .mockImplementation(
        (
          _def: unknown,
          _params: unknown,
          _opts: unknown,
          observer: Observer,
        ) => {
          observers.push(observer);
          return { unsubscribe: vi.fn() };
        },
      );
  return observers;
}

describe("useOsdkFunctions", () => {
  let mockObservableClient: ObservableClient;

  beforeEach(() => {
    mockObservableClient = createMockObservableClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return initial state when no queries are provided", () => {
    const props: UseOsdkFunctionsProps = { queries: [] };
    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    expect(result.current).toEqual([]);
  });

  it("should not execute queries when enabled is false", () => {
    const props: UseOsdkFunctionsProps = {
      queries: [{ queryDefinition: MOCK_QUERY_DEF_1 }],
      enabled: false,
    };
    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    expect(result.current[0]).toEqual({
      data: undefined,
      isLoading: false,
      error: undefined,
      lastUpdated: 0,
      refetch: expect.any(Function),
    });
    expect(mockObservableClient.observeFunction).not.toHaveBeenCalled();
  });

  it("should execute a single query and return result", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [
        {
          queryDefinition: MOCK_QUERY_DEF_1,
          options: {
            params: {
              departmentId: "engineering",
            } as unknown as UseOsdkFunctionOptions<
              typeof MOCK_QUERY_DEF_1
            >["params"],
          },
        },
      ],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    act(() => {
      observers[0].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
    });
    expect(result.current[0].isLoading).toBe(true);

    const mockResult = { total: 100, average: 25 };
    act(() => {
      observers[0].next({
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

    expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
      MOCK_QUERY_DEF_1,
      { departmentId: "engineering" },
      { dedupeInterval: 2_000 },
      expect.objectContaining({ next: expect.any(Function) }),
    );
  });

  it("should execute multiple queries in parallel", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [
        {
          queryDefinition: MOCK_QUERY_DEF_1,
          options: {
            params: {
              departmentId: "engineering",
            } as unknown as UseOsdkFunctionOptions<
              typeof MOCK_QUERY_DEF_1
            >["params"],
          },
        },
        {
          queryDefinition: MOCK_QUERY_DEF_2,
          options: {
            params: {
              startDate: "2024-01-01",
            } as unknown as UseOsdkFunctionOptions<
              typeof MOCK_QUERY_DEF_2
            >["params"],
          },
        },
      ],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    act(() => {
      observers[0].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
      observers[1].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
    });
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    const mockResult1 = { total: 100 };
    const mockResult2 = { reports: ["report1", "report2"] };

    act(() => {
      observers[0].next({
        result: mockResult1,
        status: "loaded",
        lastUpdated: 1000,
      });
      observers[1].next({
        result: mockResult2,
        status: "loaded",
        lastUpdated: 2000,
      });
    });

    expect(result.current[0].data).toEqual(mockResult1);
    expect(result.current[0].isLoading).toBe(false);
    expect(result.current[1].data).toEqual(mockResult2);
    expect(result.current[1].isLoading).toBe(false);

    expect(mockObservableClient.observeFunction).toHaveBeenCalledTimes(2);
    expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
      MOCK_QUERY_DEF_1,
      { departmentId: "engineering" },
      { dedupeInterval: 2_000 },
      expect.objectContaining({ next: expect.any(Function) }),
    );
    expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
      MOCK_QUERY_DEF_2,
      { startDate: "2024-01-01" },
      { dedupeInterval: 2_000 },
      expect.objectContaining({ next: expect.any(Function) }),
    );
  });

  it("should respect individual query enabled option", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [
        {
          queryDefinition: MOCK_QUERY_DEF_1,
          options: { enabled: false },
        },
        {
          queryDefinition: MOCK_QUERY_DEF_2,
          options: { enabled: true },
        },
      ],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    // First query should not be loading (disabled)
    expect(result.current[0].isLoading).toBe(false);

    // Fire loading state for the enabled query
    act(() => {
      observers[0].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
    });
    // Second query should now be loading
    expect(result.current[1].isLoading).toBe(true);

    const mockResult = { total: 100 };
    act(() => {
      observers[0].next({
        result: mockResult,
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    expect(result.current[0].data).toBeUndefined();
    expect(result.current[1].data).toEqual(mockResult);

    // Only the second query should have been subscribed
    expect(mockObservableClient.observeFunction).toHaveBeenCalledTimes(1);
    expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
      MOCK_QUERY_DEF_2,
      undefined,
      { dedupeInterval: 2_000 },
      expect.objectContaining({ next: expect.any(Function) }),
    );
  });

  it("should handle errors gracefully", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [{ queryDefinition: MOCK_QUERY_DEF_1 }],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    const mockError = new Error("Query failed");
    act(() => {
      observers[0].error(mockError);
    });

    expect(result.current[0]).toMatchObject({
      data: undefined,
      isLoading: false,
      error: mockError,
    });
  });

  it("should handle mixed success and error results", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [
        { queryDefinition: MOCK_QUERY_DEF_1 },
        { queryDefinition: MOCK_QUERY_DEF_2 },
      ],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    const mockResult = { total: 100 };
    const mockError = new Error("Second query failed");

    act(() => {
      observers[0].next({
        result: mockResult,
        status: "loaded",
        lastUpdated: 1000,
      });
      observers[1].error(mockError);
    });

    expect(result.current[0].data).toEqual(mockResult);
    expect(result.current[0].error).toBeUndefined();

    expect(result.current[1].data).toBeUndefined();
    expect(result.current[1].error).toEqual(mockError);
  });

  it("should cleanup subscriptions on unmount", () => {
    const unsubscribe1 = vi.fn();
    const unsubscribe2 = vi.fn();
    let callCount = 0;
    mockObservableClient = createMockObservableClient({
      observeFunction: vi.fn().mockImplementation(() => {
        callCount++;
        return {
          unsubscribe: callCount === 1 ? unsubscribe1 : unsubscribe2,
        };
      }),
    });

    const props: UseOsdkFunctionsProps = {
      queries: [
        { queryDefinition: MOCK_QUERY_DEF_1 },
        { queryDefinition: MOCK_QUERY_DEF_2 },
      ],
    };

    const { unmount } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    unmount();

    expect(unsubscribe1).toHaveBeenCalled();
    expect(unsubscribe2).toHaveBeenCalled();
  });

  it("should update results incrementally as queries complete", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [
        { queryDefinition: MOCK_QUERY_DEF_1 },
        { queryDefinition: MOCK_QUERY_DEF_2 },
      ],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    act(() => {
      observers[0].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
      observers[1].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });
    });
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].isLoading).toBe(true);

    // Resolve the second query first to verify independent updates
    const result2 = { reports: ["report1"] };
    act(() => {
      observers[1].next({
        result: result2,
        status: "loaded",
        lastUpdated: 1000,
      });
    });

    // Second query should be done while first is still loading
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[1].data).toEqual(result2);
    expect(result.current[1].isLoading).toBe(false);

    // Now resolve the first query
    const result1 = { total: 100 };
    act(() => {
      observers[0].next({
        result: result1,
        status: "loaded",
        lastUpdated: 2000,
      });
    });

    expect(result.current[0].data).toEqual(result1);
    expect(result.current[0].isLoading).toBe(false);
    expect(result.current[1].data).toEqual(result2);
  });

  it("should set error from payload status without explicit error", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [{ queryDefinition: MOCK_QUERY_DEF_1 }],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    act(() => {
      observers[0].next({
        status: "error",
        lastUpdated: 500,
      });
    });

    expect(result.current[0].isLoading).toBe(false);
    expect(result.current[0].error).toBeInstanceOf(Error);
    expect(result.current[0].error?.message).toBe(
      "Failed to execute function",
    );
  });

  it("should prefer payload.error over generic error message", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [{ queryDefinition: MOCK_QUERY_DEF_1 }],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    const specificError = new Error("Specific failure");
    act(() => {
      observers[0].next({
        status: "error",
        error: specificError,
        lastUpdated: 500,
      });
    });

    expect(result.current[0].error).toBe(specificError);
  });

  it("should wrap non-Error values in Error for observer error callback", () => {
    const observers = captureObservers(mockObservableClient);
    const props: UseOsdkFunctionsProps = {
      queries: [{ queryDefinition: MOCK_QUERY_DEF_1 }],
    };

    const { result } = renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    act(() => {
      observers[0].error("string error");
    });

    expect(result.current[0].error).toBeInstanceOf(Error);
    expect(result.current[0].error?.message).toBe("string error");
  });

  it("should use custom options per query", () => {
    const props: UseOsdkFunctionsProps = {
      queries: [
        {
          queryDefinition: MOCK_QUERY_DEF_1,
          options: {
            dedupeIntervalMs: 5000,
            dependsOn: [TestObjectType],
            dependsOnObjects: [testObject],
          },
        },
      ],
    };

    renderHook(
      () => useOsdkFunctions(props),
      { wrapper: createWrapper(mockObservableClient) },
    );

    expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
      MOCK_QUERY_DEF_1,
      undefined,
      {
        dedupeInterval: 5000,
        dependsOn: [TestObjectType],
        dependsOnObjects: [testObject],
      },
      expect.objectContaining({ next: expect.any(Function) }),
    );
  });

  describe("maxConcurrent", () => {
    it("should only subscribe to maxConcurrent queries initially", () => {
      const observers = captureObservers(mockObservableClient);
      const props: UseOsdkFunctionsProps = {
        queries: [
          { queryDefinition: MOCK_QUERY_DEF_1 },
          { queryDefinition: MOCK_QUERY_DEF_2 },
          { queryDefinition: MOCK_QUERY_DEF_3 },
        ],
        maxConcurrent: 1,
      };

      renderHook(
        () => useOsdkFunctions(props),
        { wrapper: createWrapper(mockObservableClient) },
      );

      // Only the first query should be subscribed
      expect(mockObservableClient.observeFunction).toHaveBeenCalledTimes(1);
      expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
        MOCK_QUERY_DEF_1,
        undefined,
        expect.anything(),
        expect.anything(),
      );
      expect(observers).toHaveLength(1);
    });

    it("should subscribe to next query when current one completes", () => {
      const observers = captureObservers(mockObservableClient);
      const props: UseOsdkFunctionsProps = {
        queries: [
          { queryDefinition: MOCK_QUERY_DEF_1 },
          { queryDefinition: MOCK_QUERY_DEF_2 },
          { queryDefinition: MOCK_QUERY_DEF_3 },
        ],
        maxConcurrent: 1,
      };

      const { result } = renderHook(
        () => useOsdkFunctions(props),
        { wrapper: createWrapper(mockObservableClient) },
      );

      expect(observers).toHaveLength(1);

      // Complete the first query — should trigger subscription to second
      act(() => {
        observers[0].next({
          result: { value: 1 },
          status: "loaded",
          lastUpdated: 1000,
        });
      });

      expect(result.current[0].data).toEqual({ value: 1 });
      expect(observers).toHaveLength(2);
      expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
        MOCK_QUERY_DEF_2,
        undefined,
        expect.anything(),
        expect.anything(),
      );

      // Complete the second query — should trigger subscription to third
      act(() => {
        observers[1].next({
          result: { value: 2 },
          status: "loaded",
          lastUpdated: 2000,
        });
      });

      expect(result.current[1].data).toEqual({ value: 2 });
      expect(observers).toHaveLength(3);
      expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
        MOCK_QUERY_DEF_3,
        undefined,
        expect.anything(),
        expect.anything(),
      );

      // Complete the third query
      act(() => {
        observers[2].next({
          result: { value: 3 },
          status: "loaded",
          lastUpdated: 3000,
        });
      });

      expect(result.current[2].data).toEqual({ value: 3 });
      // No more subscriptions
      expect(observers).toHaveLength(3);
    });

    it("should advance queue on error", () => {
      const observers = captureObservers(mockObservableClient);
      const props: UseOsdkFunctionsProps = {
        queries: [
          { queryDefinition: MOCK_QUERY_DEF_1 },
          { queryDefinition: MOCK_QUERY_DEF_2 },
        ],
        maxConcurrent: 1,
      };

      const { result } = renderHook(
        () => useOsdkFunctions(props),
        { wrapper: createWrapper(mockObservableClient) },
      );

      expect(observers).toHaveLength(1);

      // First query errors — should still start the second
      act(() => {
        observers[0].error(new Error("first failed"));
      });

      expect(result.current[0].error?.message).toBe("first failed");
      expect(observers).toHaveLength(2);

      // Second query succeeds
      act(() => {
        observers[1].next({
          result: { value: 2 },
          status: "loaded",
          lastUpdated: 1000,
        });
      });

      expect(result.current[1].data).toEqual({ value: 2 });
    });

    it("should run maxConcurrent:2 with 3 queries", () => {
      const observers = captureObservers(mockObservableClient);
      const props: UseOsdkFunctionsProps = {
        queries: [
          { queryDefinition: MOCK_QUERY_DEF_1 },
          { queryDefinition: MOCK_QUERY_DEF_2 },
          { queryDefinition: MOCK_QUERY_DEF_3 },
        ],
        maxConcurrent: 2,
      };

      const { result } = renderHook(
        () => useOsdkFunctions(props),
        { wrapper: createWrapper(mockObservableClient) },
      );

      // First two should be subscribed immediately
      expect(observers).toHaveLength(2);

      // Complete the first — third should start
      act(() => {
        observers[0].next({
          result: { value: 1 },
          status: "loaded",
          lastUpdated: 1000,
        });
      });

      expect(observers).toHaveLength(3);
      expect(result.current[0].data).toEqual({ value: 1 });

      // Complete the remaining two
      act(() => {
        observers[1].next({
          result: { value: 2 },
          status: "loaded",
          lastUpdated: 2000,
        });
        observers[2].next({
          result: { value: 3 },
          status: "loaded",
          lastUpdated: 3000,
        });
      });

      expect(result.current[1].data).toEqual({ value: 2 });
      expect(result.current[2].data).toEqual({ value: 3 });
      expect(observers).toHaveLength(3);
    });

    it("should skip disabled queries in staggering queue", () => {
      const observers = captureObservers(mockObservableClient);
      const props: UseOsdkFunctionsProps = {
        queries: [
          { queryDefinition: MOCK_QUERY_DEF_1, options: { enabled: false } },
          { queryDefinition: MOCK_QUERY_DEF_2 },
          { queryDefinition: MOCK_QUERY_DEF_3 },
        ],
        maxConcurrent: 1,
      };

      renderHook(
        () => useOsdkFunctions(props),
        { wrapper: createWrapper(mockObservableClient) },
      );

      // First is disabled, so second should be the initial subscription
      expect(observers).toHaveLength(1);
      expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
        MOCK_QUERY_DEF_2,
        undefined,
        expect.anything(),
        expect.anything(),
      );

      // Complete second — third should start
      act(() => {
        observers[0].next({
          result: { value: 2 },
          status: "loaded",
          lastUpdated: 1000,
        });
      });

      expect(observers).toHaveLength(2);
      expect(mockObservableClient.observeFunction).toHaveBeenCalledWith(
        MOCK_QUERY_DEF_3,
        undefined,
        expect.anything(),
        expect.anything(),
      );
    });
  });
});
