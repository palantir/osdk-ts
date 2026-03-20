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

import { vi } from "vitest";
import type { MonitorStore } from "../store/MonitorStore.js";

const emptyAggregates = {
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
  revalidations: 0,
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
};

const emptyRates = {
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
};

const emptyMetricsSnapshot = {
  recent: [],
  aggregates: emptyAggregates,
  rates: emptyRates,
  timeSeries: {
    timestamps: [],
    cacheHits: [],
    cacheMisses: [],
    revalidations: [],
    deduplications: [],
  },
};

const emptyComputeSnapshot = {
  metrics: {
    totalUsage: 0,
    lastMinuteUsage: 0,
    requestCount: 0,
    fulfilledCount: 0,
    failedCount: 0,
    pendingCount: 0,
    averageUsagePerRequest: 0,
    averageResponseBytes: 0,
  },
  requests: [],
  isRecording: false,
  isNetworkPaused: false,
  lastRecordingEvent: undefined,
};

function createMockMetricsStore() {
  const subscribers = new Set<() => void>();
  return {
    getSnapshot: vi.fn().mockReturnValue(emptyMetricsSnapshot),
    subscribe: vi.fn((cb: () => void) => {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    }),
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
  };
}

function createMockComputeStore() {
  const subscribers = new Set<() => void>();
  return {
    getSnapshot: vi.fn().mockReturnValue(emptyComputeSnapshot),
    subscribe: vi.fn((cb: () => void) => {
      subscribers.add(cb);
      return () => subscribers.delete(cb);
    }),
    isRecording: vi.fn().mockReturnValue(false),
    getIsNetworkPaused: vi.fn().mockReturnValue(false),
    createPendingRequest: vi.fn(),
    fulfillRequest: vi.fn(),
    failRequest: vi.fn(),
    setIsRecording: vi.fn(),
    toggleNetworkPaused: vi.fn(),
    getRequests: vi.fn().mockReturnValue([]),
    getMetrics: vi.fn().mockReturnValue(emptyComputeSnapshot.metrics),
    getLastRecordingEvent: vi.fn().mockReturnValue(undefined),
    reset: vi.fn(),
    dispose: vi.fn(),
  };
}

function createMockComponentRegistry() {
  return {
    getActiveComponents: vi.fn().mockReturnValue(new Map()),
    getComponentBindings: vi.fn().mockReturnValue([]),
    getAllBindings: vi.fn().mockReturnValue([]),
    registerBinding: vi.fn(),
    unregisterComponent: vi.fn(),
    subscribe: vi.fn().mockReturnValue(() => {}),
    getVersion: vi.fn().mockReturnValue(0),
    clear: vi.fn(),
    getStats: vi.fn().mockReturnValue({
      totalBindings: 0,
      activeBindings: 0,
      unmountedBindings: 0,
      components: 0,
      queries: 0,
    }),
  };
}

export function createMockMonitorStore(): MonitorStore {
  const metricsStore = createMockMetricsStore();
  const computeStore = createMockComputeStore();
  const registry = createMockComponentRegistry();

  return {
    getMetricsStore: vi.fn().mockReturnValue(metricsStore),
    getComputeStore: vi.fn().mockReturnValue(computeStore),
    getComponentRegistry: vi.fn().mockReturnValue(registry),
    getLinkTraversalTracker: vi.fn().mockReturnValue({
      recordTraversal: vi.fn(),
      recordLinkedObjects: vi.fn(),
      getRecentTraversals: vi.fn().mockReturnValue([]),
      getTraversalsByComponent: vi.fn().mockReturnValue([]),
      getTraversalsByLink: vi.fn().mockReturnValue([]),
      getTraversalChain: vi.fn().mockReturnValue([]),
      findRedundantTraversals: vi.fn().mockReturnValue([]),
      setEventTimeline: vi.fn(),
      getStats: vi.fn().mockReturnValue({
        totalTraversals: 0,
        uniqueLinks: 0,
        uniqueComponents: 0,
        mostUsedLinks: [],
        linkedObjectsTracked: 0,
      }),
      clear: vi.fn(),
    }),
    getPropertyAccessTracker: vi.fn().mockReturnValue({
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
    }),
    getMonitor: vi.fn().mockReturnValue(null),
    getEventTimeline: vi.fn().mockReturnValue({
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
    }),
    getPrimitiveDiscovery: vi.fn().mockReturnValue({
      discoverPrimitives: vi.fn().mockReturnValue(null),
    }),
    getClickToInspectSystem: vi.fn().mockReturnValue({
      dispose: vi.fn(),
    }),
    getMockManager: vi.fn().mockReturnValue({
      getMocks: vi.fn().mockReturnValue([]),
      getMock: vi.fn().mockReturnValue(undefined),
      findMockByCacheKey: vi.fn().mockReturnValue(null),
      registerMock: vi.fn(),
      removeMock: vi.fn(),
      updateMock: vi.fn(),
      findMock: vi.fn().mockReturnValue(null),
      getRequestLog: vi.fn().mockReturnValue([]),
      getStats: vi.fn().mockReturnValue({
        totalMocks: 0,
        enabledMocks: 0,
        disabledMocks: 0,
        exhaustedMocks: 0,
        totalRequests: 0,
        matchedRequests: 0,
      }),
      clear: vi.fn(),
      exportMocks: vi.fn().mockReturnValue("[]"),
      importMocks: vi.fn().mockReturnValue(0),
    }),
    getRecommendationEngine: vi.fn().mockReturnValue({
      generateRecommendations: vi.fn().mockReturnValue([]),
      calculatePerformanceScore: vi.fn().mockReturnValue({
        overall: 80,
        grade: "B",
        categories: {
          cache: 80,
          queries: 80,
          bandwidth: 80,
          codeQuality: 80,
        },
      }),
      dismissRecommendation: vi.fn(),
      clearDismissed: vi.fn(),
      getSummary: vi.fn().mockReturnValue({
        issueCount: 0,
        criticalCount: 0,
        timeToFix: "N/A",
        estimatedImprovement: "N/A",
      }),
    }),
    getConsoleLogStore: vi.fn().mockReturnValue({
      getEntries: vi.fn().mockReturnValue([]),
      getSize: vi.fn().mockReturnValue(0),
      clear: vi.fn(),
      subscribe: vi.fn().mockReturnValue(() => {}),
      install: vi.fn(),
      uninstall: vi.fn(),
      suppress: vi.fn(),
      unsuppress: vi.fn(),
      dispose: vi.fn(),
    }),
    getPrototypeOverrideStore: vi.fn().mockReturnValue({
      setOverride: vi.fn(),
      getOverride: vi.fn().mockReturnValue(undefined),
      getOverrideBySignature: vi.fn().mockReturnValue(undefined),
      getAllOverrides: vi.fn().mockReturnValue([]),
      getAll: vi.fn().mockReturnValue([]),
      hasOverride: vi.fn().mockReturnValue(false),
      removeOverride: vi.fn(),
      updateOverride: vi.fn(),
      clearOverride: vi.fn(),
      clearAll: vi.fn(),
      subscribe: vi.fn().mockReturnValue(() => {}),
    }),
    getCacheEntries: vi.fn().mockResolvedValue([]),
    getCacheSnapshot: vi.fn().mockResolvedValue({
      entries: [],
      stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
    }),
    invalidateCacheEntry: vi.fn().mockResolvedValue(undefined),
    wrapExistingClient: vi.fn(),
    installGlobalFetchInterceptor: vi.fn(),
    dispose: vi.fn(),
  } as unknown as MonitorStore;
}
