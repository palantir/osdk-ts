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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { Observer } from "@osdk/client/unstable-do-not-use";
import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObjects } from "../src/new/useOsdkObjects.js";
import {
  cleanupSuspenseTests,
  createMockObservableClient,
  TestSuspenseWrapper,
} from "./suspenseTestUtils.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObjects enabled option", () => {
  const mockObserveList = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveList.mockClear();
    mockObserveList.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeList when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObjects(MockObjectType, { enabled: false }),
      { wrapper },
    );

    expect(mockObserveList).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useOsdkObjects(MockObjectType, { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveList).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveList).toHaveBeenCalledTimes(1);
  });

  it("should work with where clause when enabled is true", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          where: { id: "123" },
          pageSize: 50,
          enabled: true,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        where: { id: "123" },
        pageSize: 50,
      }),
      expect.any(Object),
    );
  });

  it("should call observeList with RIDs when enabled", () => {
    const wrapper = createWrapper();
    const rids = ["rid-1", "rid-2", "rid-3"];

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          rids,
          pageSize: 10,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        rids,
        pageSize: 10,
      }),
      expect.any(Object),
    );
  });

  it("should allow combining rids with where clause", () => {
    const wrapper = createWrapper();
    const rids = ["rid-1", "rid-2"];
    const where = { status: "active" };

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          rids,
          where,
          pageSize: 5,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        rids,
        where: expect.anything(),
        pageSize: 5,
      }),
      expect.any(Object),
    );
  });

  it("should map resolvedList to data and expose totalCount", () => {
    let capturedObserver:
      | Observer<Record<string, unknown> | undefined>
      | undefined;
    mockObserveList.mockImplementation(
      (
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        capturedObserver = observer;
        return { unsubscribe: vitest.fn() };
      },
    );

    const wrapper = createWrapper();
    const { result } = renderHook(
      () => useOsdkObjects(MockObjectType),
      { wrapper },
    );

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(true);

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "A", $objectType: "MockObject", $primaryKey: "1" },
          { name: "B", $objectType: "MockObject", $primaryKey: "2" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
        totalCount: "2",
      });
    });

    expect(result.current.data).toHaveLength(2);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.totalCount).toBe("2");
  });

  it("should expose fetchMore when hasMore is true", () => {
    let capturedObserver:
      | Observer<Record<string, unknown> | undefined>
      | undefined;
    mockObserveList.mockImplementation(
      (
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        capturedObserver = observer;
        return { unsubscribe: vitest.fn() };
      },
    );

    const wrapper = createWrapper();
    const { result } = renderHook(
      () => useOsdkObjects(MockObjectType),
      { wrapper },
    );

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "A", $objectType: "MockObject", $primaryKey: "1" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: true,
        fetchMore: vitest.fn(),
      });
    });

    expect(result.current.fetchMore).toBeDefined();

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "A", $objectType: "MockObject", $primaryKey: "1" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
      });
    });

    expect(result.current.fetchMore).toBeUndefined();
  });
});

const MockObjectTypeWithType = {
  apiName: "MockObject",
  primaryKeyType: "string",
  type: "object",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObjects with { suspense: true }", () => {
  let mockObserveList: ReturnType<typeof vitest.fn>;
  let mockPeekListData: ReturnType<typeof vitest.fn>;
  let capturedObserver:
    | Observer<Record<string, unknown> | undefined>
    | undefined;

  beforeEach(() => {
    capturedObserver = undefined;
    mockObserveList = vitest.fn(
      (
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        capturedObserver = observer;
        return { unsubscribe: vitest.fn() };
      },
    );
    mockPeekListData = vitest.fn(() => undefined);
  });

  afterEach(cleanupSuspenseTests);

  function createObservableClient() {
    return createMockObservableClient({
      observeList: mockObserveList,
      peekListData: mockPeekListData,
    });
  }

  function ListComponent({ where }: { where?: Record<string, string> }) {
    const { data, fetchMore, totalCount } = useOsdkObjects(
      MockObjectTypeWithType,
      where
        ? { where, suspense: true as const }
        : { suspense: true as const },
    );

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { "data-testid": "count" },
        String(data.length),
      ),
      totalCount != null
        ? React.createElement(
          "div",
          { "data-testid": "total" },
          totalCount,
        )
        : null,
      data.map((item, i) =>
        React.createElement(
          "div",
          { key: i, "data-testid": `item-${i}` },
          (item as Record<string, unknown>).name as string,
        )
      ),
      fetchMore
        ? React.createElement(
          "button",
          { "data-testid": "fetch-more", onClick: fetchMore },
          "Load More",
        )
        : null,
    );
  }

  it("should show loading fallback while data is pending", () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();
    expect(mockObserveList).toHaveBeenCalledTimes(1);
  });

  it("should render list data after loading completes", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "Item A", $objectType: "MockObject", $primaryKey: "1" },
          { name: "Item B", $objectType: "MockObject", $primaryKey: "2" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
        totalCount: "2",
      });
    });

    const count = await screen.findByTestId("count");
    expect(count.textContent).toBe("2");
    expect(screen.getByTestId("item-0").textContent).toBe("Item A");
    expect(screen.getByTestId("item-1").textContent).toBe("Item B");
    expect(screen.getByTestId("total").textContent).toBe("2");
  });

  it("should show error boundary when error occurs", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    act(() => {
      capturedObserver?.error(new Error("List fetch failed"));
    });

    const el = await screen.findByTestId("error");
    expect(el.textContent).toBe("List fetch failed");
  });

  it("should show fetchMore button when hasMore is true", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "Item A", $objectType: "MockObject", $primaryKey: "1" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: true,
        fetchMore: vitest.fn(),
      });
    });

    const btn = await screen.findByTestId("fetch-more");
    expect(btn).toBeDefined();
  });

  it("should re-suspend when where clause changes", async () => {
    const client = createObservableClient();
    let secondObserver:
      | Observer<Record<string, unknown> | undefined>
      | undefined;

    mockObserveList.mockImplementation(
      (
        opts: Record<string, unknown>,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        const where = opts.where as Record<string, string> | undefined;
        if (where?.status === "active") {
          capturedObserver = observer;
        } else {
          secondObserver = observer;
        }
        return { unsubscribe: vitest.fn() };
      },
    );

    const { rerender } = render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, { where: { status: "active" } }),
      ),
    );

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "Active Item", $objectType: "MockObject", $primaryKey: "1" },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
      });
    });

    const item0 = await screen.findByTestId("item-0");
    expect(item0.textContent).toBe("Active Item");

    rerender(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {
          where: { status: "inactive" },
        }),
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeDefined();
    });

    await act(async () => {
      secondObserver?.next({
        resolvedList: [
          {
            name: "Inactive Item",
            $objectType: "MockObject",
            $primaryKey: "2",
          },
        ],
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
      });
    });

    const newItem = await screen.findByTestId("item-0");
    expect(newItem.textContent).toBe("Inactive Item");
  });
});
