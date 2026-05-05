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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../fiber/DevtoolsHook.js", () => ({
  onCommitFiberRoot: vi.fn(() => vi.fn()),
}));

vi.mock("../fiber/HookStateInspector.js", () => ({
  discoverOsdkComponentsFromRoot: vi.fn(() => new Map()),
}));

vi.mock("@osdk/client", () => ({
  createClient: vi.fn(() => ({})),
}));

vi.mock("@osdk/client/observable", () => ({
  createObservableClient: vi.fn(() => ({})),
}));

import { createClient } from "@osdk/client";
import { createObservableClient } from "@osdk/client/observable";
import { getMonitorStore, MonitorStore } from "./MonitorStore.js";

function createMockObservableClient() {
  const unsubscribable = { unsubscribe: vi.fn() };
  return {
    observeObject: vi.fn().mockReturnValue(unsubscribable),
    observeList: vi.fn().mockReturnValue(unsubscribable),
    applyAction: vi.fn().mockResolvedValue(undefined),
    validateAction: vi.fn().mockResolvedValue(undefined),
    canonicalizeWhereClause: vi.fn((w: unknown) => w),
  };
}

describe("MonitorStore", () => {
  let store: MonitorStore;
  let savedFetch: typeof globalThis.fetch;

  beforeEach(() => {
    vi.useFakeTimers();
    savedFetch = globalThis.fetch;

    if (typeof globalThis.requestIdleCallback === "undefined") {
      globalThis.requestIdleCallback = ((cb: IdleRequestCallback) => {
        return setTimeout(() =>
          cb({
            didTimeout: false,
            timeRemaining: () => 50,
          }), 0) as unknown as number;
      }) as typeof globalThis.requestIdleCallback;
      globalThis.cancelIdleCallback = ((id: number) => {
        clearTimeout(id);
      }) as typeof globalThis.cancelIdleCallback;
    }

    store = new MonitorStore();
  });

  afterEach(() => {
    store.dispose();
    globalThis.fetch = savedFetch;
    vi.useRealTimers();
  });

  it("should create instance with all internal stores and trackers", () => {
    expect(store).toBeDefined();
    expect(store.getMetricsStore()).toBeDefined();
    expect(store.getComputeStore()).toBeDefined();
    expect(store.getComponentRegistry()).toBeDefined();
    expect(store.getLinkTraversalTracker()).toBeDefined();
    expect(store.getPropertyAccessTracker()).toBeDefined();
    expect(store.getEventTimeline()).toBeDefined();
    expect(store.getPrimitiveDiscovery()).toBeDefined();
    expect(store.getClickToInspectSystem()).toBeDefined();
    expect(store.getMockManager()).toBeDefined();
    expect(store.getRecommendationEngine()).toBeDefined();
    expect(store.getPrototypeOverrideStore()).toBeDefined();
  });

  it("should return non-null values from all accessor methods", () => {
    expect(store.getMetricsStore()).not.toBeNull();
    expect(store.getComputeStore()).not.toBeNull();
    expect(store.getComponentRegistry()).not.toBeNull();
    expect(store.getLinkTraversalTracker()).not.toBeNull();
    expect(store.getPropertyAccessTracker()).not.toBeNull();
    expect(store.getEventTimeline()).not.toBeNull();
    expect(store.getPrimitiveDiscovery()).not.toBeNull();
    expect(store.getClickToInspectSystem()).not.toBeNull();
    expect(store.getMockManager()).not.toBeNull();
    expect(store.getRecommendationEngine()).not.toBeNull();
    expect(store.getPrototypeOverrideStore()).not.toBeNull();
  });

  it("should return null for monitor before client creation", () => {
    expect(store.getMonitor()).toBeNull();
  });

  it("should dispose and clean up all internal state", () => {
    store.dispose();

    expect(store.getMonitor()).toBeNull();

    const snapshot = store.getMetricsStore().getSnapshot();
    expect(snapshot.aggregates.cacheHits).toBe(0);
    expect(snapshot.recent).toHaveLength(0);

    const computeRequests = store.getComputeStore().getRequests();
    expect(computeRequests).toHaveLength(0);
  });

  it("should handle dispose being called multiple times (idempotent)", () => {
    store.dispose();
    expect(() => store.dispose()).not.toThrow();
  });

  it("should return empty results for cache operations when no monitor exists", async () => {
    const entries = await store.loadCacheEntries();
    expect(entries).toEqual([]);

    const snapshot = await store.getCacheSnapshot();
    expect(snapshot.entries).toEqual([]);
    expect(snapshot.stats).toEqual({
      totalEntries: 0,
      totalSize: 0,
      totalHits: 0,
    });
  });

  it("getCacheEntries is a deprecated alias for loadCacheEntries", async () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const aliasResult = await store.getCacheEntries();
    const directResult = await store.loadCacheEntries();
    expect(aliasResult).toEqual(directResult);
  });

  it("should no-op for cache invalidation when no monitor exists", async () => {
    await expect(
      store.invalidateCacheEntry({
        type: "object",
        objectType: "Employee",
        data: { pk: "123" },
      }),
    ).resolves.toBeUndefined();
  });

  it("should no-op for cache clear when no monitor exists", async () => {
    await expect(store.clearCache()).resolves.toBeUndefined();
  });

  it("should accept partial config in constructor", () => {
    const customStore = new MonitorStore({
      maxOperations: 500,
      cacheDetectionThresholdMs: 20,
    });

    expect(customStore.getMetricsStore()).toBeDefined();
    customStore.dispose();
  });

  describe("getMonitorStore static lookup", () => {
    it("should return undefined for an unknown object", () => {
      const unknownClient = {};
      expect(getMonitorStore(unknownClient)).toBeUndefined();
    });
  });

  describe("wrapExistingClient", () => {
    it("should return a different reference from the original client", () => {
      const mockClient = createMockObservableClient();
      const wrapped = store.wrapExistingClient(mockClient as never);

      expect(wrapped).not.toBe(mockClient);
      expect(wrapped).toBeDefined();
    });

    it("should install global fetch interceptor", () => {
      // Constructor installs the interceptor eagerly, so fetch is already replaced
      expect(globalThis.fetch).not.toBe(savedFetch);
      expect(typeof globalThis.fetch).toBe("function");
    });

    it("should make getMonitorStore return the store instance", () => {
      const mockClient = createMockObservableClient();
      const wrapped = store.wrapExistingClient(mockClient as never);

      expect(getMonitorStore(wrapped)).toBe(store);
    });

    it("should set monitor to non-null", () => {
      const mockClient = createMockObservableClient();

      store.wrapExistingClient(mockClient as never);

      expect(store.getMonitor()).not.toBeNull();
    });
  });

  describe("createMonitoredClient", () => {
    it("should call createClient and createObservableClient", () => {
      store.createMonitoredClient({
        baseUrl: "https://example.com",
        ontologyRid: "ri.ontology.main.ontology.xxx",
        auth: vi.fn().mockResolvedValue("token"),
      });

      expect(createClient).toHaveBeenCalled();
      expect(createObservableClient).toHaveBeenCalled();
    });
  });

  describe("installGlobalFetchInterceptor", () => {
    it("should be idempotent", () => {
      const mockClient = createMockObservableClient();
      store.wrapExistingClient(mockClient as never);
      const fetchAfterFirst = globalThis.fetch;

      store.installGlobalFetchInterceptor();

      expect(globalThis.fetch).toBe(fetchAfterFirst);
    });
  });

  describe("dispose with wrapped client", () => {
    it("should restore original fetch", () => {
      // Constructor installs the interceptor eagerly
      expect(globalThis.fetch).not.toBe(savedFetch);

      store.dispose();
      expect(globalThis.fetch).toBe(savedFetch);
    });
  });
});
