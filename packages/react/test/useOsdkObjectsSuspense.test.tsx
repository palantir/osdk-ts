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
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import { _clearSuspenseCache } from "../src/new/makeSuspenseExternalStore.js";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { OsdkErrorBoundary } from "../src/new/OsdkErrorBoundary.js";
import { useOsdkObjectsSuspense } from "../src/new/useOsdkObjectsSuspense.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
  type: "object",
} as unknown as ObjectTypeDefinition;

function TestSuspenseWrapper(
  { children, observableClient }: {
    children: React.ReactNode;
    observableClient: Record<string, unknown>;
  },
) {
  return React.createElement(
    OsdkContext2.Provider,
    { value: { observableClient } as never },
    React.createElement(
      OsdkErrorBoundary,
      {
        fallback: (error: Error, _retry: () => void) =>
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { "data-testid": "error" },
              error.message,
            ),
          ),
      },
      React.createElement(
        React.Suspense,
        {
          fallback: React.createElement(
            "div",
            { "data-testid": "loading" },
            "Loading...",
          ),
        },
        children,
      ),
    ),
  );
}

describe("useOsdkObjectsSuspense", () => {
  let mockObserveList: ReturnType<typeof vitest.fn>;
  let mockPeekListData: ReturnType<typeof vitest.fn>;
  let capturedObserver:
    | Observer<Record<string, unknown> | undefined>
    | undefined;

  function createObservableClient() {
    return {
      observeList: mockObserveList,
      peekObjectData: vitest.fn(() => undefined),
      peekListData: mockPeekListData,
      canonicalizeWhereClause: vitest.fn((w: unknown) => w),
    };
  }

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

  afterEach(() => {
    cleanup();
    _clearSuspenseCache();
  });

  function ListComponent({ where }: { where?: Record<string, string> }) {
    const { data, fetchMore, totalCount } = useOsdkObjectsSuspense(
      MockObjectType,
      where ? { where } : undefined,
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

  it("should not re-suspend when revalidating with existing data", async () => {
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
        hasMore: false,
        fetchMore: vitest.fn(),
      });
    });

    const count = await screen.findByTestId("count");
    expect(count.textContent).toBe("1");

    act(() => {
      capturedObserver?.next({
        resolvedList: [
          { name: "Item A", $objectType: "MockObject", $primaryKey: "1" },
        ],
        status: "loading",
        isOptimistic: false,
        lastUpdated: Date.now(),
        hasMore: false,
        fetchMore: vitest.fn(),
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("count").textContent).toBe("1");
    });
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

  it("should pass where clause to observeList", () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, { where: { status: "active" } }),
      ),
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        where: { status: "active" },
      }),
      expect.any(Object),
    );
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
        React.createElement(ListComponent, { where: { status: "inactive" } }),
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeDefined();
    });

    act(() => {
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

  it("should skip suspense fallback when peekListData returns loaded status", async () => {
    mockPeekListData.mockReturnValue({
      status: "loaded",
      isOptimistic: false,
      totalCount: "2",
    });

    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    // Peek data prevents the Suspense fallback from showing.
    // The component renders immediately with data: [] (resolvedList is undefined
    // in the peek snapshot). The observation will deliver real data immediately.
    expect(screen.queryByTestId("loading")).toBeNull();
    expect(screen.getByTestId("count").textContent).toBe("0");

    // Observation delivers the full resolved list
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
  });

  it("should update totalCount when observation differs from peek", async () => {
    mockPeekListData.mockReturnValue({
      status: "loaded",
      isOptimistic: false,
      totalCount: "5",
    });

    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    expect(screen.queryByTestId("loading")).toBeNull();
    expect(screen.getByTestId("total").textContent).toBe("5");

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

    await waitFor(() => {
      expect(screen.getByTestId("total").textContent).toBe("2");
    });
  });

  it("should still suspend when peekListData returns undefined", () => {
    mockPeekListData.mockReturnValue(undefined);
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ListComponent, {}),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();
  });
});
