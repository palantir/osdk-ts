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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { Observer } from "@osdk/client/unstable-do-not-use";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import { _clearSuspenseCache } from "../src/new/makeSuspenseExternalStore.js";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { OsdkErrorBoundary } from "../src/new/OsdkErrorBoundary.js";
import { useOsdkObjectSuspense } from "../src/new/useOsdkObjectSuspense.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
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

describe("useOsdkObjectSuspense", () => {
  let mockObserveObject: ReturnType<typeof vitest.fn>;
  let capturedObserver:
    | Observer<Record<string, unknown> | undefined>
    | undefined;

  function createObservableClient() {
    return {
      observeObject: mockObserveObject,
      peekObjectData: mockPeekObjectData,
      peekListData: vitest.fn(() => undefined),
      canonicalizeWhereClause: vitest.fn((w: unknown) => w),
    };
  }

  let mockPeekObjectData: ReturnType<typeof vitest.fn>;

  beforeEach(() => {
    capturedObserver = undefined;
    mockObserveObject = vitest.fn(
      (
        _type: unknown,
        _pk: unknown,
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        capturedObserver = observer;
        return { unsubscribe: vitest.fn() };
      },
    );
    mockPeekObjectData = vitest.fn(() => undefined);
  });

  afterEach(() => {
    cleanup();
    _clearSuspenseCache();
  });

  function ObjectComponent({ pk }: { pk: string }) {
    const { object } = useOsdkObjectSuspense(MockObjectType, pk);
    return React.createElement(
      "div",
      { "data-testid": "object" },
      (object as Record<string, unknown>).name as string,
    );
  }

  function InstanceComponent(
    { instance }: { instance: Osdk.Instance<typeof MockObjectType> },
  ) {
    const { object } = useOsdkObjectSuspense(instance);
    return React.createElement(
      "div",
      { "data-testid": "object" },
      (object as Record<string, unknown>).name as string,
    );
  }

  it("should show loading fallback while data is pending", () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();
    expect(mockObserveObject).toHaveBeenCalledTimes(1);
  });

  it("should render object data after loading completes", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Test Object",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Test Object");
  });

  it("should show error boundary when error occurs", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    act(() => {
      capturedObserver?.error(new Error("Network failure"));
    });

    const el = await screen.findByTestId("error");
    expect(el.textContent).toBe("Network failure");
  });

  it("should not re-suspend when revalidating with existing data", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Test Object",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Test Object");

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Test Object",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loading",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("object").textContent).toBe("Test Object");
    });
  });

  it("should work with instance signature (offline mode)", async () => {
    const client = createObservableClient();
    const instance = {
      $objectType: "MockObject",
      $primaryKey: "instance-pk",
      $apiName: "MockObject",
      name: "Instance Object",
    } as unknown as Osdk.Instance<typeof MockObjectType>;

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(InstanceComponent, { instance }),
      ),
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "instance-pk",
      expect.objectContaining({ mode: "offline" }),
      expect.any(Object),
    );

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Instance Object",
          $objectType: "MockObject",
          $primaryKey: "instance-pk",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Instance Object");
  });

  it("should re-suspend when primary key changes", async () => {
    const client = createObservableClient();
    let secondObserver:
      | Observer<Record<string, unknown> | undefined>
      | undefined;

    mockObserveObject.mockImplementation(
      (
        _type: unknown,
        pk: unknown,
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        if (pk === "pk-1") {
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
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Object 1",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el1 = await screen.findByTestId("object");
    expect(el1.textContent).toBe("Object 1");

    rerender(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-2" }),
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeDefined();
    });

    act(() => {
      secondObserver?.next({
        object: {
          name: "Object 2",
          $objectType: "MockObject",
          $primaryKey: "pk-2",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el2 = await screen.findByTestId("object");
    expect(el2.textContent).toBe("Object 2");
  });

  it("should skip suspense fallback when peekObjectData returns loaded data", async () => {
    mockPeekObjectData.mockReturnValue({
      object: {
        name: "Peeked Object",
        $objectType: "MockObject",
        $primaryKey: "pk-1",
      },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    // Peek data prevents the Suspense fallback from showing
    expect(screen.queryByTestId("loading")).toBeNull();
    // Peek data should render the component immediately
    expect(screen.getByTestId("object").textContent).toBe("Peeked Object");

    // The observation delivers the same data via BehaviorSubject
    act(() => {
      capturedObserver?.next({
        object: {
          name: "Peeked Object",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Peeked Object");
  });

  it("should update from peek data to observation data", async () => {
    mockPeekObjectData.mockReturnValue({
      object: {
        name: "Old Name",
        $objectType: "MockObject",
        $primaryKey: "pk-1",
      },
      status: "loaded",
      isOptimistic: false,
      lastUpdated: Date.now(),
    });

    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.getByTestId("object").textContent).toBe("Old Name");

    act(() => {
      capturedObserver?.next({
        object: {
          name: "Updated Name",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Updated Name");
  });

  it("should suspend when pk changes and peek returns undefined for new pk", async () => {
    mockPeekObjectData.mockImplementation(
      (_type: unknown, pk: unknown) => {
        if (pk === "pk-1") {
          return {
            object: {
              name: "Object 1",
              $objectType: "MockObject",
              $primaryKey: "pk-1",
            },
            status: "loaded",
            isOptimistic: false,
            lastUpdated: Date.now(),
          };
        }
        return undefined;
      },
    );

    const client = createObservableClient();
    let secondObserver:
      | Observer<Record<string, unknown> | undefined>
      | undefined;

    mockObserveObject.mockImplementation(
      (
        _type: unknown,
        pk: unknown,
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        if (pk === "pk-1") {
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
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.queryByTestId("loading")).toBeNull();
    expect(screen.getByTestId("object").textContent).toBe("Object 1");

    rerender(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-2" }),
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeDefined();
    });

    act(() => {
      secondObserver?.next({
        object: {
          name: "Object 2",
          $objectType: "MockObject",
          $primaryKey: "pk-2",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Object 2");
  });

  it("should still suspend when peekObjectData returns undefined", () => {
    mockPeekObjectData.mockReturnValue(undefined);
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();
  });

  it("should survive StrictMode double-render without duplicate subscriptions", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        React.StrictMode,
        null,
        React.createElement(
          TestSuspenseWrapper,
          { observableClient: client },
          React.createElement(ObjectComponent, { pk: "pk-strict" }),
        ),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();
    // Cache deduplicates: only one observation should be created
    expect(mockObserveObject).toHaveBeenCalledTimes(1);

    act(() => {
      capturedObserver?.next({
        object: {
          name: "StrictMode Object",
          $objectType: "MockObject",
          $primaryKey: "pk-strict",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("StrictMode Object");
    // Still only one observation after commit
    expect(mockObserveObject).toHaveBeenCalledTimes(1);
  });

  it("should show error boundary when error occurs after data was loaded", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    // First, deliver loaded data
    act(() => {
      capturedObserver?.next({
        object: {
          name: "Loaded Object",
          $objectType: "MockObject",
          $primaryKey: "pk-1",
        },
        status: "loaded",
        isOptimistic: false,
        lastUpdated: Date.now(),
      });
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Loaded Object");

    // Then fire an error after data was already loaded
    act(() => {
      capturedObserver?.error(new Error("revalidation failed"));
    });

    const errorEl = await screen.findByTestId("error");
    expect(errorEl.textContent).toBe("revalidation failed");
  });
});
