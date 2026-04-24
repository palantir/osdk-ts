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

import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MetricsStore } from "../store/MetricsStore.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import type { LinkTraversalTracker } from "./LinkTraversalTracker.js";
import { ObservableClientMonitor } from "./ObservableClientMonitor.js";
import type { PropertyAccessTracker } from "./PropertyAccessTracker.js";

vi.mock("./ComponentContextCapture.js", () => ({
  componentContextCapture: {
    captureNow: vi.fn().mockReturnValue({
      id: "comp-1",
      name: "TestComponent",
      displayName: "TestComponent",
    }),
  },
}));

function createMockClient() {
  const unsubscribable = { unsubscribe: vi.fn() };
  return {
    observeObject: vi.fn().mockReturnValue(unsubscribable),
    observeList: vi.fn().mockReturnValue(unsubscribable),
    applyAction: vi.fn().mockResolvedValue(undefined),
    validateAction: vi.fn().mockResolvedValue(undefined),
    canonicalizeWhereClause: vi.fn((w: unknown) => w),
    getCacheSnapshot: vi.fn().mockResolvedValue({ entries: [] }),
    invalidateAll: vi.fn().mockResolvedValue(undefined),
    invalidateObjects: vi.fn().mockResolvedValue(undefined),
    invalidateObjectType: vi.fn().mockResolvedValue(undefined),
    __unsubscribable: unsubscribable,
  };
}

function createMockMetricsStore(): MetricsStore {
  return {
    getSnapshot: vi.fn().mockReturnValue({
      recent: [],
      aggregates: {
        cacheHits: 0,
        cacheMisses: 0,
        deduplications: 0,
        optimisticUpdates: 0,
        totalResponseTime: 0,
        cachedResponseTime: 0,
        networkResponseTime: 0,
        requestsSaved: 0,
        bytesServedFromCache: 0,
        totalObjectsFromCache: 0,
        totalObjectsFromNetwork: 0,
        actionCount: 0,
        configuredOptimisticActionCount: 0,
        optimisticActionCount: 0,
        rollbackActionCount: 0,
        totalOptimisticRenderTime: 0,
        totalServerRoundTripTime: 0,
        totalPerceivedSpeedup: 0,
        totalOptimisticObjectsAffected: 0,
        validationCount: 0,
        totalValidationTime: 0,
      },
      rates: {
        cacheHitRate: 0,
        deduplicationRate: 0,
        optimisticUpdateRate: 0,
        averageResponseTime: 0,
        averageCachedResponseTime: 0,
        optimisticActionCoverage: 0,
        configuredOptimisticActionRate: 0,
        rollbackRate: 0,
        averageOptimisticRenderTime: 0,
        averageServerRoundTripTime: 0,
        averagePerceivedSpeedup: 0,
        averageValidationTime: 0,
        validationTimeSaved: 0,
      },
      timeSeries: {
        cacheHits: [],
        cacheMisses: [],
        deduplications: [],
        timestamps: [],
      },
    }),
    subscribe: vi.fn(),
    recordCacheHit: vi.fn(),
    recordCacheMiss: vi.fn(),
    recordDeduplication: vi.fn(),
    recordOptimisticUpdate: vi.fn(),
    recordActionLifecycle: vi.fn(),
    recordActionValidation: vi.fn(),
    recordActionError: vi.fn(),
    getActionErrors: vi.fn().mockReturnValue([]),
    getCacheHitRate: vi.fn().mockReturnValue(0),
    reset: vi.fn(),
    dispose: vi.fn(),
  } as unknown as MetricsStore;
}

function createMockRegistry(): ComponentQueryRegistry {
  return {
    getActiveComponents: vi.fn().mockReturnValue(new Map()),
    getComponentBindings: vi.fn().mockReturnValue([]),
    getAllBindings: vi.fn().mockReturnValue([]),
    registerBinding: vi.fn().mockReturnValue("binding-1"),
    unregisterComponent: vi.fn(),
  } as unknown as ComponentQueryRegistry;
}

function createMockLinkTracker(): LinkTraversalTracker {
  return {
    recordTraversal: vi.fn(),
    recordLinkedObjects: vi.fn(),
    setEventTimeline: vi.fn(),
    getRecentTraversals: vi.fn().mockReturnValue([]),
    getTraversalsByComponent: vi.fn().mockReturnValue([]),
    getTraversalsByLink: vi.fn().mockReturnValue([]),
    getTraversalChain: vi.fn().mockReturnValue([]),
    findRedundantTraversals: vi.fn().mockReturnValue([]),
    getStats: vi.fn().mockReturnValue({
      totalTraversals: 0,
      uniqueLinks: 0,
      uniqueComponents: 0,
      mostUsedLinks: [],
      linkedObjectsTracked: 0,
    }),
    clear: vi.fn(),
  } as unknown as LinkTraversalTracker;
}

function createMockPropertyTracker(): PropertyAccessTracker {
  return {
    wrapObject: vi.fn((obj: Record<string, unknown>) => obj),
    recordAccess: vi.fn(),
    setEventTimeline: vi.fn(),
    incrementRenderCycle: vi.fn(),
    registerComponent: vi.fn(),
    getAccessedProperties: vi.fn().mockReturnValue(new Set()),
    getUnusedPropertiesForObject: vi.fn().mockReturnValue([]),
    findWastedRenders: vi.fn().mockReturnValue([]),
    getRecentAccesses: vi.fn().mockReturnValue([]),
    getAccessesByComponent: vi.fn().mockReturnValue([]),
    getAccessesByObject: vi.fn().mockReturnValue([]),
    getAccessFrequency: vi.fn().mockReturnValue(new Map()),
    clear: vi.fn(),
    clearComponent: vi.fn(),
    getStats: vi.fn().mockReturnValue({
      totalAccesses: 0,
      uniqueComponents: 0,
      uniqueObjects: 0,
      uniqueProperties: 0,
      mostAccessedProperties: [],
      trackedComponents: 0,
    }),
    getWastedRenders: vi.fn().mockReturnValue([]),
    getUnusedProperties: vi.fn().mockReturnValue([]),
  } as unknown as PropertyAccessTracker;
}

function createMockTimeline(): EventTimeline {
  return {
    record: vi.fn(),
    getEventsByType: vi.fn().mockReturnValue([]),
    getAllEvents: vi.fn().mockReturnValue([]),
    getEventCounts: vi.fn().mockReturnValue(new Map()),
    subscribe: vi.fn().mockReturnValue(() => {}),
    findEventsInWindow: vi.fn().mockReturnValue([]),
    findEventsBefore: vi.fn().mockReturnValue([]),
    getLastEmission: vi.fn().mockReturnValue(null),
    getSize: vi.fn().mockReturnValue(0),
    clear: vi.fn(),
  } as unknown as EventTimeline;
}

describe("ObservableClientMonitor", () => {
  let monitor: ObservableClientMonitor;
  let registry: ComponentQueryRegistry;
  let linkTracker: LinkTraversalTracker;
  let propertyTracker: PropertyAccessTracker;
  let timeline: EventTimeline;

  afterEach(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {
    vi.useFakeTimers();
    registry = createMockRegistry();
    linkTracker = createMockLinkTracker();
    propertyTracker = createMockPropertyTracker();
    timeline = createMockTimeline();

    monitor = new ObservableClientMonitor({
      metricsStore: createMockMetricsStore(),
      componentRegistry: registry,
      linkTraversalTracker: linkTracker,
      propertyAccessTracker: propertyTracker,
      eventTimeline: timeline,
    });
  });

  it("wrapClient returns a proxy, not the original", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);
    expect(wrapped).not.toBe(client);
  });

  it("observeObject calls through to original and registers binding", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    expect(client.observeObject).toHaveBeenCalled();
    expect(registry.registerBinding).toHaveBeenCalledWith(
      expect.objectContaining({
        hookType: "useOsdkObject",
        querySignature: "object:Employee:pk-1",
      }),
    );
  });

  it("observeObject wraps emitted objects for property tracking", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    const passedObserver = client.observeObject.mock.calls[0][3];
    passedObserver.next({ status: "loaded", object: { id: "pk-1" } });

    expect(propertyTracker.wrapObject).toHaveBeenCalled();
    expect(observer.next).toHaveBeenCalled();
  });

  it("observeObject records EMISSION events to timeline", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    const passedObserver = client.observeObject.mock.calls[0][3];
    passedObserver.next({ status: "loaded", object: { id: "pk-1" } });

    expect(timeline.record).toHaveBeenCalledWith(
      expect.objectContaining({ type: "EMISSION" }),
    );
  });

  it("observeList calls through and registers binding", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeList(
      { type: "Employee", where: {} } as never,
      observer as never,
    );

    expect(client.observeList).toHaveBeenCalled();
    expect(registry.registerBinding).toHaveBeenCalledWith(
      expect.objectContaining({ hookType: "useOsdkObjects" }),
    );
  });

  it("observeList wraps resolved list objects for property tracking", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeList(
      { type: "Employee", where: {} } as never,
      observer as never,
    );

    const passedObserver = client.observeList.mock.calls[0][1];
    passedObserver.next({
      status: "loaded",
      resolvedList: [{ $primaryKey: "1", name: "Alice" }],
    });

    expect(propertyTracker.wrapObject).toHaveBeenCalled();
    expect(observer.next).toHaveBeenCalled();
  });

  it("observeObject unregisters component on error", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    const passedObserver = client.observeObject.mock.calls[0][3];
    passedObserver.error(new Error("test"));

    expect(registry.unregisterComponent).toHaveBeenCalledWith("comp-1");
    expect(observer.error).toHaveBeenCalled();
  });

  it("observeObject unregisters component on complete", () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    const observer = { next: vi.fn(), error: vi.fn(), complete: vi.fn() };
    wrapped.observeObject("Employee", "pk-1", {}, observer as never);

    const passedObserver = client.observeObject.mock.calls[0][3];
    passedObserver.complete();

    expect(registry.unregisterComponent).toHaveBeenCalledWith("comp-1");
    expect(observer.complete).toHaveBeenCalled();
  });

  it("applyAction calls through to original", async () => {
    const client = createMockClient();
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    await wrapped.applyAction("createEmployee" as never, {} as never);

    expect(client.applyAction).toHaveBeenCalled();
  });

  it("applyAction captures errors to metrics store", async () => {
    const metricsStore = createMockMetricsStore();
    monitor = new ObservableClientMonitor({
      metricsStore,
      componentRegistry: registry,
      linkTraversalTracker: linkTracker,
      propertyAccessTracker: propertyTracker,
      eventTimeline: timeline,
    });

    const client = createMockClient();
    client.applyAction.mockRejectedValue(new Error("Action failed"));
    const wrapped = monitor.wrapClient(client as unknown as ObservableClient);

    await expect(
      wrapped.applyAction("createEmployee" as never, {}),
    ).rejects.toThrow("Action failed");

    expect(metricsStore.recordActionError).toHaveBeenCalledWith(
      expect.objectContaining({
        actionType: "createEmployee",
        message: "Action failed",
      }),
    );
  });

  it("getCacheSnapshot rejects when no client is wrapped", async () => {
    await expect(monitor.getCacheSnapshot()).rejects.toThrow(
      "No wrapped client available",
    );
  });

  it("getCacheSnapshot delegates to wrapped client", async () => {
    const client = createMockClient();
    monitor.wrapClient(client as unknown as ObservableClient);

    const snapshot = await monitor.getCacheSnapshot();
    expect(client.getCacheSnapshot).toHaveBeenCalled();
    expect(snapshot).toEqual({ entries: [] });
  });

  it("dispose cleans up the base monitor", () => {
    const client = createMockClient();
    monitor.wrapClient(client as unknown as ObservableClient);
    expect(() => monitor.dispose()).not.toThrow();
  });
});
