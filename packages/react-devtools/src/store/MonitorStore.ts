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

import type { Logger } from "@osdk/api";
import { type Client, createClient } from "@osdk/client";
import {
  type CacheEntry,
  type CacheSnapshot,
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";

/**
 * Configuration for creating a monitored OSDK client.
 */
interface ClientConfig {
  baseUrl: string;
  ontologyRid: string | Promise<string>;
  auth: () => Promise<string>;
  logger?: Logger;
  branch?: string;
}
import { MockManager } from "../mocking/MockManager.js";
import {
  DEFAULT_MONITOR_CONFIG,
  type MonitoringConfig,
} from "../types/index.js";
import { ActionChainTracker } from "../utils/ActionChainTracker.js";
import { ActionImpactTracker } from "../utils/ActionImpactTracker.js";
import { ClickToInspectSystem } from "../utils/ClickToInspect.js";
import { componentContextCapture } from "../utils/ComponentContextCapture.js";
import { ComponentPrimitiveDiscovery } from "../utils/ComponentPrimitiveDiscovery.js";
import { ComponentQueryRegistry } from "../utils/ComponentQueryRegistry.js";
import { ComputeMonitor } from "../utils/ComputeMonitor.js";
import { EnhancedObservableClientMonitor } from "../utils/EnhancedObservableClientMonitor.js";
import { EventTimeline } from "../utils/EventTimeline.js";
import { LinkTraversalTracker } from "../utils/LinkTraversalTracker.js";
import { createMonitorLogger } from "../utils/logger.js";
import { ObservableClientMonitor } from "../utils/ObservableClientInterceptor.js";
import { PerformanceRecommendationEngine } from "../utils/PerformanceRecommendationEngine.js";
import { PropertyAccessTracker } from "../utils/PropertyAccessTracker.js";
import { RenderAttributionTracker } from "../utils/RenderAttributionTracker.js";
import { ComputeStore } from "./ComputeStore.js";
import { MetricsStore } from "./MetricsStore.js";

/**
 * WeakMap to associate wrapped clients with their MonitorStore
 * This avoids circular references and allows garbage collection
 */
const monitorStoreMap = new WeakMap<object, MonitorStore>();

/**
 * Retrieves the MonitorStore associated with a wrapped client.
 * Used by register.ts to find the monitor store from a client instance.
 *
 * @param client The wrapped ObservableClient
 * @returns The associated MonitorStore, or undefined if not found
 */
export function getMonitorStore(client: object): MonitorStore | undefined {
  return monitorStoreMap.get(client);
}

/**
 * Unified monitoring store that encapsulates both metrics (cache/actions) and compute tracking.
 *
 * This store handles:
 * - Cache hit/miss tracking via ObservableClient proxy
 * - Action lifecycle tracking
 * - Compute usage tracking via fetch interception
 * - Component-to-query mapping and tracking
 * - Property access tracking for wasted render detection
 * - Link traversal tracking
 *
 * @example
 * ```typescript
 * const monitorStore = new MonitorStore();
 * const { client, observableClient } = monitorStore.createMonitoredClient({
 *   baseUrl: "https://example.palantirfoundry.com",
 *   ontologyRid: "ri.ontology.main.ontology.xxx",
 *   auth: authProvider,
 * });
 *
 * // Use in your app
 * <OsdkProvider2 client={client} observableClient={observableClient}>
 *   <App />
 *   <MonitoringPanel monitorStore={monitorStore} />
 * </OsdkProvider2>
 *
 * // Clean up when done
 * monitorStore.dispose();
 * ```
 */
export class MonitorStore {
  private readonly config: MonitoringConfig;
  private readonly logger: Logger;
  private readonly metricsStore: MetricsStore;
  private readonly computeStore: ComputeStore;
  private readonly computeMonitor: ComputeMonitor;
  private readonly componentRegistry: ComponentQueryRegistry;
  private readonly linkTraversalTracker: LinkTraversalTracker;
  private readonly propertyAccessTracker: PropertyAccessTracker;
  private readonly eventTimeline: EventTimeline;
  private readonly renderAttributionTracker: RenderAttributionTracker;
  private readonly actionImpactTracker: ActionImpactTracker;
  private readonly actionChainTracker: ActionChainTracker;
  private readonly primitiveDiscovery: ComponentPrimitiveDiscovery;
  private readonly clickToInspect: ClickToInspectSystem;
  private readonly mockManager: MockManager;
  private readonly recommendationEngine: PerformanceRecommendationEngine;
  private observableClientMonitor: ObservableClientMonitor | null = null;
  private enhancedMonitor: EnhancedObservableClientMonitor | null = null;
  private interceptedFetch: typeof globalThis.fetch | null = null;

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = { ...DEFAULT_MONITOR_CONFIG, ...config };
    this.logger = config.logger ?? createMonitorLogger();
    this.metricsStore = new MetricsStore(
      this.config.maxOperations,
      this.config.timeSeriesSize,
    );
    this.computeStore = new ComputeStore();
    this.computeMonitor = new ComputeMonitor(this.computeStore, this.logger);
    this.componentRegistry = new ComponentQueryRegistry();
    this.linkTraversalTracker = new LinkTraversalTracker();
    this.propertyAccessTracker = new PropertyAccessTracker();
    this.eventTimeline = new EventTimeline(10000);
    this.renderAttributionTracker = new RenderAttributionTracker(
      this.componentRegistry,
    );
    this.actionImpactTracker = new ActionImpactTracker(
      this.eventTimeline,
      this.componentRegistry,
      this.renderAttributionTracker,
    );
    this.actionChainTracker = new ActionChainTracker(this.eventTimeline);
    this.primitiveDiscovery = new ComponentPrimitiveDiscovery(
      componentContextCapture,
      this.componentRegistry,
    );
    this.clickToInspect = new ClickToInspectSystem(
      this.componentRegistry,
      this.primitiveDiscovery,
      undefined, // devToolsBridge
      componentContextCapture,
    );
    this.mockManager = new MockManager();
    this.recommendationEngine = new PerformanceRecommendationEngine(
      this.metricsStore,
      this.componentRegistry,
      this.eventTimeline,
    );

    // Wire up trackers to timeline
    this.propertyAccessTracker.setEventTimeline(this.eventTimeline);
    this.linkTraversalTracker.setEventTimeline(this.eventTimeline);
    this.renderAttributionTracker.setEventTimeline(this.eventTimeline);

    // Expose registry globally so @osdk/react hooks can register themselves
    if (typeof window !== "undefined") {
      window.__OSDK_MONITOR__ = {
        componentRegistry: this.componentRegistry,
        componentContextCapture: componentContextCapture,
      };
    }
  }

  /**
   * Creates a fully monitored client with compute tracking, cache monitoring, and action tracking.
   *
   * CRITICAL: This method creates an intercepted fetch function and passes it to the client.
   * The fetch interceptor is NOT installed globally, ensuring multiple monitor instances
   * can coexist safely.
   *
   * @param config Client configuration (url, ontologyRid, auth, etc)
   * @returns The base client and wrapped ObservableClient with full monitoring enabled
   */
  createMonitoredClient(config: ClientConfig): {
    client: Client;
    observableClient: ObservableClient;
  } {
    // Create intercepted fetch function (does not mutate global state)
    const interceptedFetch = this.computeMonitor.createInterceptedFetch();

    // Store reference for potential debugging
    this.interceptedFetch = interceptedFetch;

    // Create base client with intercepted fetch
    const client = createClient(
      config.baseUrl,
      config.ontologyRid,
      config.auth,
      {
        logger: config.logger,
        branch: config.branch,
      },
      interceptedFetch,
    );

    // Create ObservableClient with MockManager for cache integration
    const observableClient: ObservableClient = createObservableClient(
      client,
      this.mockManager,
    );

    // Wrap client for cache/action monitoring
    this.observableClientMonitor = new ObservableClientMonitor(
      this.metricsStore,
      this.config.cleanupIntervalMs,
      this.config.cacheDetectionThresholdMs,
    );
    const baseWrappedClient = this.observableClientMonitor.wrapClient(
      observableClient,
    );

    // Wrap with enhanced monitor for component tracking
    this.enhancedMonitor = new EnhancedObservableClientMonitor({
      metricsStore: this.metricsStore,
      componentRegistry: this.componentRegistry,
      linkTraversalTracker: this.linkTraversalTracker,
      propertyAccessTracker: this.propertyAccessTracker,
      eventTimeline: this.eventTimeline,
      captureComponentContext: true,
      captureQueryParams: true,
      cleanupIntervalMs: this.config.cleanupIntervalMs,
      cacheThresholdMs: this.config.cacheDetectionThresholdMs,
      mockManager: this.mockManager,
    });
    const fullyWrappedClient = this.enhancedMonitor.wrapClient(
      baseWrappedClient,
    );

    return {
      client,
      observableClient: fullyWrappedClient,
    };
  }

  /**
   * Wraps an existing ObservableClient with monitoring capabilities.
   * Use this when you already have a client and want to add monitoring to it.
   *
   * @param client Existing ObservableClient to wrap
   * @returns Wrapped client with monitoring enabled
   */
  wrapExistingClient(client: ObservableClient): ObservableClient {
    // Wrap client for cache/action monitoring
    this.observableClientMonitor = new ObservableClientMonitor(
      this.metricsStore,
      this.config.cleanupIntervalMs,
      this.config.cacheDetectionThresholdMs,
    );
    const baseWrappedClient = this.observableClientMonitor.wrapClient(client);

    // Wrap with enhanced monitor for component tracking
    this.enhancedMonitor = new EnhancedObservableClientMonitor({
      metricsStore: this.metricsStore,
      componentRegistry: this.componentRegistry,
      linkTraversalTracker: this.linkTraversalTracker,
      propertyAccessTracker: this.propertyAccessTracker,
      eventTimeline: this.eventTimeline,
      captureComponentContext: true,
      captureQueryParams: true,
      cleanupIntervalMs: this.config.cleanupIntervalMs,
      cacheThresholdMs: this.config.cacheDetectionThresholdMs,
      mockManager: this.mockManager,
    });
    const fullyWrappedClient = this.enhancedMonitor.wrapClient(
      baseWrappedClient,
    );

    // Associate monitor store with client for retrieval by register.ts
    monitorStoreMap.set(fullyWrappedClient, this);

    return fullyWrappedClient;
  }

  /**
   * Gets the internal MetricsStore for cache and action tracking.
   * Used by MonitoringPanel to access metrics data.
   */
  getMetricsStore(): MetricsStore {
    return this.metricsStore;
  }

  /**
   * Gets the internal ComputeStore for compute usage tracking.
   * Used by MonitoringPanel to access compute data.
   */
  getComputeStore(): ComputeStore {
    return this.computeStore;
  }

  /**
   * Gets the ComponentQueryRegistry for component-to-query mapping.
   * Used by MonitoringPanel to display component relationships.
   */
  getComponentRegistry(): ComponentQueryRegistry {
    return this.componentRegistry;
  }

  /**
   * Gets the LinkTraversalTracker for link navigation analysis.
   * Used by MonitoringPanel to show link traversal patterns.
   */
  getLinkTraversalTracker(): LinkTraversalTracker {
    return this.linkTraversalTracker;
  }

  /**
   * Gets the PropertyAccessTracker for wasted render detection.
   * Used by MonitoringPanel to identify unused properties.
   */
  getPropertyAccessTracker(): PropertyAccessTracker {
    return this.propertyAccessTracker;
  }

  /**
   * Gets the EnhancedObservableClientMonitor instance.
   * Used for advanced monitoring features.
   */
  getEnhancedMonitor(): EnhancedObservableClientMonitor | null {
    return this.enhancedMonitor;
  }

  /**
   * Gets the EventTimeline for temporal event correlation.
   * Used by MonitoringPanel and debugging features.
   */
  getEventTimeline(): EventTimeline {
    return this.eventTimeline;
  }

  /**
   * Gets the RenderAttributionTracker for render causality analysis.
   * Used by MonitoringPanel for re-render attribution feature.
   */
  getRenderAttributionTracker(): RenderAttributionTracker {
    return this.renderAttributionTracker;
  }

  /**
   * Gets the ActionImpactTracker for action execution flow analysis.
   * Used by MonitoringPanel for action impact visualization feature.
   */
  getActionImpactTracker(): ActionImpactTracker {
    return this.actionImpactTracker;
  }

  /**
   * Gets the ActionChainTracker for cascading action detection.
   * Used by MonitoringPanel for action chain visualization feature.
   */
  getActionChainTracker(): ActionChainTracker {
    return this.actionChainTracker;
  }

  /**
   * Gets the ComponentPrimitiveDiscovery for extracting OSDK hooks from components.
   * Used by ClickToInspect and MockingTab for primitive discovery.
   */
  getPrimitiveDiscovery(): ComponentPrimitiveDiscovery {
    return this.primitiveDiscovery;
  }

  /**
   * Gets the ClickToInspectSystem for component selection mode.
   * Used by MockingTab to activate selection mode.
   */
  getClickToInspectSystem(): ClickToInspectSystem {
    return this.clickToInspect;
  }

  /**
   * Gets the MockManager for creating and managing mocks.
   * Used by MockingTab to register and control mocks.
   */
  getMockManager(): MockManager {
    return this.mockManager;
  }

  /**
   * Gets the PerformanceRecommendationEngine for generating recommendations.
   * Used by ImprovementsTab and PerformanceTab for inline indicators.
   */
  getRecommendationEngine(): PerformanceRecommendationEngine {
    return this.recommendationEngine;
  }

  /**
   * Disposes of all monitoring resources.
   * Clears stores and removes subscriptions.
   * Note: Since we no longer mutate global fetch, there's no need to uninstall.
   */
  dispose(): void {
    this.metricsStore.dispose();
    this.computeStore.dispose();
    this.componentRegistry.clear();
    this.linkTraversalTracker.clear();
    this.propertyAccessTracker.clear();
    this.eventTimeline.clear();
    this.renderAttributionTracker.clear();
    this.actionImpactTracker.dispose();
    this.actionChainTracker.dispose();
    this.clickToInspect.dispose();
    this.mockManager.clear();
    this.observableClientMonitor = null;
    this.enhancedMonitor = null;
    this.interceptedFetch = null;
  }

  /**
   * Get cache entries for the Cache Inspector tab.
   *
   * @returns Cache entries with metadata
   */
  async getCacheEntries(): Promise<CacheEntry[]> {
    if (!this.enhancedMonitor) {
      return [];
    }

    try {
      const snapshot = await this.enhancedMonitor.getCacheSnapshot();
      return snapshot.entries;
    } catch {
      return [];
    }
  }

  /**
   * Get full cache snapshot for analysis.
   * Used by UnusedFieldAnalyzer for field usage analysis.
   *
   * @returns Full CacheSnapshot with entries and stats
   */
  async getCacheSnapshot(): Promise<CacheSnapshot> {
    if (!this.enhancedMonitor) {
      return {
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      };
    }

    try {
      return await this.enhancedMonitor.getCacheSnapshot();
    } catch {
      return {
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      };
    }
  }

  /**
   * Invalidate a specific cache entry.
   *
   * @param entry The cache entry to invalidate
   */
  async invalidateCacheEntry(entry: {
    type: "object" | "list" | "link" | "objectSet";
    objectType: string;
    data?: unknown;
  }): Promise<void> {
    if (!this.enhancedMonitor) {
      return;
    }

    try {
      if (entry.type === "object" && entry.data) {
        await this.enhancedMonitor.invalidateObjects(entry.data);
      } else {
        await this.enhancedMonitor.invalidateObjectType(entry.objectType);
      }
    } catch {
      // Silently fail - cache invalidation is best-effort
    }
  }

  /**
   * Clear the entire cache.
   */
  async clearCache(): Promise<void> {
    if (!this.enhancedMonitor) {
      return;
    }

    try {
      await this.enhancedMonitor.invalidateAll();
    } catch {
      // Silently fail - cache clear is best-effort
    }
  }
}
