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
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import type { ClientConfig } from "../index.js";
import {
  DEFAULT_MONITOR_CONFIG,
  type MonitoringConfig,
} from "../types/index.js";
import { ComputeMonitor } from "../utils/ComputeMonitor.js";
import { createMonitorLogger } from "../utils/logger.js";
import { ObservableClientMonitor } from "../utils/ObservableClientInterceptor.js";
import { ComputeStore } from "./ComputeStore.js";
import { MetricsStore } from "./MetricsStore.js";

/**
 * Unified monitoring store that encapsulates both metrics (cache/actions) and compute tracking.
 *
 * This store handles:
 * - Cache hit/miss tracking via ObservableClient proxy
 * - Action lifecycle tracking
 * - Compute usage tracking via fetch interception
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
  private observableClientMonitor: ObservableClientMonitor | null = null;
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

    // Create ObservableClient (will use intercepted fetch)
    const observableClient = createObservableClient(client);

    // Wrap client for cache/action monitoring
    this.observableClientMonitor = new ObservableClientMonitor(
      this.metricsStore,
      this.config.cleanupIntervalMs,
      this.config.cacheDetectionThresholdMs,
    );
    const wrappedObservableClient = this.observableClientMonitor.wrapClient(
      observableClient,
    );

    return {
      client,
      observableClient: wrappedObservableClient,
    };
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
   * Disposes of all monitoring resources.
   * Clears stores and removes subscriptions.
   * Note: Since we no longer mutate global fetch, there's no need to uninstall.
   */
  dispose(): void {
    this.metricsStore.dispose();
    this.computeStore.dispose();
    this.observableClientMonitor = null;
    this.interceptedFetch = null;
  }
}
