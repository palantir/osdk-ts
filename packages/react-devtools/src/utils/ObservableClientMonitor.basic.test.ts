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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { MetricsStore } from "../store/MetricsStore.js";
import type { ObservableClientMonitorConfig } from "./ObservableClientMonitor.js";
import { ObservableClientMonitor } from "./ObservableClientMonitor.js";

function createMockClient() {
  const unsubscribable = { unsubscribe: vi.fn() };
  return {
    observeObject: vi.fn().mockReturnValue(unsubscribable),
    observeList: vi.fn().mockReturnValue(unsubscribable),
    applyAction: vi.fn().mockResolvedValue(undefined),
    validateAction: vi.fn().mockResolvedValue(undefined),
    canonicalizeWhereClause: vi.fn((w: unknown) => w),
    __unsubscribable: unsubscribable,
  };
}

function createMockConfig(
  metricsStore: MetricsStore,
): ObservableClientMonitorConfig {
  return {
    metricsStore,
    cleanupIntervalMs: 60000,
    cacheThresholdMs: 10,
    componentRegistry: {
      registerBinding: vi.fn(),
      unregisterComponent: vi.fn(),
      getComponentBindings: vi.fn().mockReturnValue([]),
    } as unknown as ObservableClientMonitorConfig["componentRegistry"],
    linkTraversalTracker: {
      recordTraversal: vi.fn(),
      recordLinkedObjects: vi.fn(),
    } as unknown as ObservableClientMonitorConfig["linkTraversalTracker"],
    propertyAccessTracker: {
      wrapObject: vi.fn((obj: unknown) => obj),
    } as unknown as ObservableClientMonitorConfig["propertyAccessTracker"],
  };
}

describe("ObservableClientMonitor", () => {
  let monitor: ObservableClientMonitor;
  let metricsStore: MetricsStore;

  beforeEach(() => {
    vi.useFakeTimers();
    metricsStore = new MetricsStore();
    monitor = new ObservableClientMonitor(createMockConfig(metricsStore));
  });

  it("wrapClient returns a Proxy, not the original client", () => {
    const mockClient = createMockClient();
    const wrapped = monitor.wrapClient(mockClient as never);

    expect(wrapped).not.toBe(mockClient);
    expect(typeof wrapped).toBe("object");
  });

  it("wrapped client observeObject calls through to original and records metrics", () => {
    const mockClient = createMockClient();
    const wrapped = monitor.wrapClient(mockClient as never);

    const observer = {
      next: vi.fn(),
      error: vi.fn(),
      complete: vi.fn(),
    };

    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    expect(mockClient.observeObject).toHaveBeenCalledTimes(1);

    const passedObserver = mockClient.observeObject.mock.calls[0][3];
    passedObserver.next({
      status: "loaded",
      object: { id: "pk-1" },
      isOptimistic: false,
    });

    expect(observer.next).toHaveBeenCalledTimes(1);
  });

  it("wrapped client observeList calls through to original and records metrics", () => {
    const mockClient = createMockClient();
    const wrapped = monitor.wrapClient(mockClient as never);

    const observer = {
      next: vi.fn(),
      error: vi.fn(),
      complete: vi.fn(),
    };

    wrapped.observeList(
      { type: "Employee", where: {} } as never,
      observer as never,
    );

    expect(mockClient.observeList).toHaveBeenCalledTimes(1);

    const passedObserver = mockClient.observeList.mock.calls[0][1];
    passedObserver.next({
      status: "loaded",
      resolvedList: [{ id: "1" }],
      isOptimistic: false,
    });

    expect(observer.next).toHaveBeenCalledTimes(1);
  });

  it("dispose cleans up interval", () => {
    const mockClient = createMockClient();
    monitor.wrapClient(mockClient as never);

    monitor.dispose();

    const initialSnapshot = metricsStore.getSnapshot();
    expect(initialSnapshot.aggregates.cacheHits).toBe(0);
  });

  it("cleanup interval runs every 60 seconds", () => {
    const mockClient = createMockClient();
    monitor.wrapClient(mockClient as never);

    vi.advanceTimersByTime(60000);
    vi.advanceTimersByTime(60000);

    monitor.dispose();
  });

  it("unsubscribe from observeObject calls unsubscribe on original", () => {
    const mockClient = createMockClient();
    const wrapped = monitor.wrapClient(mockClient as never);

    const observer = {
      next: vi.fn(),
      error: vi.fn(),
      complete: vi.fn(),
    };

    const sub = wrapped.observeObject(
      "Employee",
      "pk-1",
      {},
      observer as never,
    );
    sub.unsubscribe();

    expect(mockClient.__unsubscribable.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it("forwards prototype methods that use private fields without throwing", () => {
    class FakeClient {
      #cache = new Map<string, number>();
      seed(): void {
        this.#cache.set("a", 1);
      }
      lookup(key: string): number {
        return this.#cache.get(key) ?? 0;
      }
    }
    const fake = new FakeClient();
    fake.seed();
    const wrapped = monitor.wrapClient(fake as never) as unknown as FakeClient;

    expect(() => wrapped.lookup("a")).not.toThrow();
    expect(wrapped.lookup("a")).toBe(1);
  });

  it("returns a stable bound reference for unwrapped methods", () => {
    const mockClient = createMockClient();
    const wrapped = monitor.wrapClient(
      mockClient as never,
    ) as unknown as Record<
      string,
      unknown
    >;

    expect(wrapped.canonicalizeWhereClause).toBe(
      wrapped.canonicalizeWhereClause,
    );
    expect(typeof wrapped.canonicalizeWhereClause).toBe("function");
  });
});
