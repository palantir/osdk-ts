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
import { onCommitFiberRoot } from "../fiber/DevtoolsHook.js";
import { discoverOsdkComponentsFromRoot } from "../fiber/HookStateInspector.js";
import type { ClickToInspectSystem } from "../inspector/ClickToInspectSystem.js";
import { createClickToInspect } from "../inspector/createClickToInspect.js";
import { MockManager } from "../mocking/MockManager.js";
import { PrototypeOverrideStore } from "../prototyping/PrototypeOverrideStore.js";
import {
  DEFAULT_MONITOR_CONFIG,
  type MonitoringConfig,
} from "../types/index.js";
import { componentContextCapture } from "../utils/ComponentContextCapture.js";
import { ComponentPrimitiveDiscovery } from "../utils/ComponentPrimitiveDiscovery.js";
import { ComponentQueryRegistry } from "../utils/ComponentQueryRegistry.js";
import { ComputeMonitor } from "../utils/ComputeMonitor.js";
import { EventTimeline } from "../utils/EventTimeline.js";
import { LinkTraversalTracker } from "../utils/LinkTraversalTracker.js";
import { createMonitorLogger } from "../utils/logger.js";
import { ObservableClientMonitor } from "../utils/ObservableClientMonitor.js";
import { PerformanceRecommendationEngine } from "../utils/PerformanceRecommendationEngine.js";
import { PropertyAccessTracker } from "../utils/PropertyAccessTracker.js";
import { ComputeStore } from "./ComputeStore.js";
import { ConsoleLogStore } from "./ConsoleLogStore.js";
import { MetricsStore } from "./MetricsStore.js";

const monitorStoreMap = new WeakMap<object, MonitorStore>();

export function getMonitorStore(client: object): MonitorStore | undefined {
  return monitorStoreMap.get(client);
}

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
  private readonly primitiveDiscovery: ComponentPrimitiveDiscovery;
  private readonly clickToInspect: ClickToInspectSystem;
  private readonly mockManager: MockManager;
  private readonly recommendationEngine: PerformanceRecommendationEngine;
  private readonly prototypeOverrideStore: PrototypeOverrideStore;
  private readonly consoleLogStore: ConsoleLogStore;
  private monitor: ObservableClientMonitor | null = null;
  private originalGlobalFetch: typeof globalThis.fetch | null = null;
  private unsubscribeFiberCommit: (() => void) | null = null;

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
    this.primitiveDiscovery = new ComponentPrimitiveDiscovery(
      this.componentRegistry,
    );
    this.clickToInspect = createClickToInspect({
      onSelect: (component) => {
        const fiber = component.fiber.deref();
        if (!fiber) {
          return;
        }
        const primitives = this.primitiveDiscovery.discoverPrimitives(fiber);
        window.dispatchEvent(
          new CustomEvent("primitives-discovered", {
            detail: {
              componentId: primitives.componentId,
              primitives,
            },
          }),
        );
      },
      onDeactivate: () => {
        window.dispatchEvent(new CustomEvent("inspector-deactivated"));
      },
    });
    this.mockManager = new MockManager();
    this.prototypeOverrideStore = new PrototypeOverrideStore();
    this.consoleLogStore = new ConsoleLogStore(1000);
    this.consoleLogStore.install();
    this.recommendationEngine = new PerformanceRecommendationEngine(
      this.metricsStore,
      this.componentRegistry,
      this.eventTimeline,
    );

    this.propertyAccessTracker.setEventTimeline(this.eventTimeline);
    this.linkTraversalTracker.setEventTimeline(this.eventTimeline);
    this.installGlobalFetchInterceptor();

    if (typeof window !== "undefined") {
      window.__OSDK_MONITOR__ = {
        componentRegistry: this.componentRegistry,
        componentContextCapture,
        prototypeOverrideStore: this.prototypeOverrideStore,
      };
    }

    this.unsubscribeFiberCommit = onCommitFiberRoot((_rendererId, root) => {
      const discovered = discoverOsdkComponentsFromRoot(root);
      if (discovered.size > 0) {
        this.componentRegistry.updateFromFiberDiscovery(discovered);
      }
    });
  }

  createMonitoredClient(config: ClientConfig): {
    client: Client;
    observableClient: ObservableClient;
  } {
    const interceptedFetch = this.computeMonitor.createInterceptedFetch();

    const client = createClient(
      config.baseUrl,
      config.ontologyRid,
      config.auth,
      {
        logger: config.logger,
        UNSTABLE_DO_NOT_USE_BRANCH: config.branch,
      },
      interceptedFetch,
    );

    const observableClient: ObservableClient = createObservableClient(
      client,
    );

    const fullyWrappedClient = this.wrapWithMonitoring(observableClient);

    return {
      client,
      observableClient: fullyWrappedClient,
    };
  }

  wrapExistingClient(client: ObservableClient): ObservableClient {
    this.installGlobalFetchInterceptor();

    const fullyWrappedClient = this.wrapWithMonitoring(client);
    monitorStoreMap.set(fullyWrappedClient, this);

    return fullyWrappedClient;
  }

  private wrapWithMonitoring(client: ObservableClient): ObservableClient {
    this.monitor = new ObservableClientMonitor({
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
    return this.monitor.wrapClient(client);
  }

  installGlobalFetchInterceptor(): void {
    if (this.originalGlobalFetch != null) {
      return;
    }

    this.originalGlobalFetch = globalThis.fetch;
    const interceptedFetch = this.computeMonitor.createInterceptedFetch();
    globalThis.fetch = interceptedFetch;
  }

  private uninstallGlobalFetchInterceptor(): void {
    if (this.originalGlobalFetch != null) {
      globalThis.fetch = this.originalGlobalFetch;
      this.originalGlobalFetch = null;
    }
  }

  getMetricsStore(): MetricsStore {
    return this.metricsStore;
  }

  getComputeStore(): ComputeStore {
    return this.computeStore;
  }

  getComponentRegistry(): ComponentQueryRegistry {
    return this.componentRegistry;
  }

  getLinkTraversalTracker(): LinkTraversalTracker {
    return this.linkTraversalTracker;
  }

  getPropertyAccessTracker(): PropertyAccessTracker {
    return this.propertyAccessTracker;
  }

  getMonitor(): ObservableClientMonitor | null {
    return this.monitor;
  }

  getEventTimeline(): EventTimeline {
    return this.eventTimeline;
  }

  getPrimitiveDiscovery(): ComponentPrimitiveDiscovery {
    return this.primitiveDiscovery;
  }

  getClickToInspectSystem(): ClickToInspectSystem {
    return this.clickToInspect;
  }

  getMockManager(): MockManager {
    return this.mockManager;
  }

  getRecommendationEngine(): PerformanceRecommendationEngine {
    return this.recommendationEngine;
  }

  getPrototypeOverrideStore(): PrototypeOverrideStore {
    return this.prototypeOverrideStore;
  }

  getConsoleLogStore(): ConsoleLogStore {
    return this.consoleLogStore;
  }

  dispose(): void {
    this.unsubscribeFiberCommit?.();
    this.unsubscribeFiberCommit = null;
    this.uninstallGlobalFetchInterceptor();
    if (typeof window !== "undefined") {
      delete (window as unknown as Record<string, unknown>).__OSDK_MONITOR__;
    }
    this.metricsStore.dispose();
    this.computeStore.dispose();
    this.componentRegistry.clear();
    this.linkTraversalTracker.clear();
    this.propertyAccessTracker.clear();
    this.eventTimeline.clear();
    this.clickToInspect.dispose();
    this.consoleLogStore.dispose();
    this.mockManager.clear();
    this.prototypeOverrideStore.clearAll();
    this.monitor?.dispose();
    this.monitor = null;
  }

  async getCacheEntries(): Promise<CacheEntry[]> {
    if (!this.monitor) {
      return [];
    }

    try {
      const snapshot = await this.monitor.getCacheSnapshot();
      return snapshot.entries;
    } catch {
      return [];
    }
  }

  async getCacheSnapshot(): Promise<CacheSnapshot> {
    if (!this.monitor) {
      return {
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      };
    }

    try {
      return await this.monitor.getCacheSnapshot();
    } catch {
      return {
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      };
    }
  }

  async invalidateCacheEntry(entry: {
    type: "object" | "list" | "link" | "objectSet";
    objectType: string;
    data?: unknown;
  }): Promise<void> {
    if (!this.monitor) {
      return;
    }

    try {
      if (entry.type === "object" && entry.data) {
        await this.monitor.invalidateObjects(entry.data);
      } else {
        await this.monitor.invalidateObjectType(entry.objectType);
      }
    } catch {
    }
  }

  async clearCache(): Promise<void> {
    if (!this.monitor) {
      return;
    }

    try {
      await this.monitor.invalidateAll();
    } catch {
    }
  }
}
