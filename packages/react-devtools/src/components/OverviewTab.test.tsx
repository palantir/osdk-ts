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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import type { MonitorStore } from "../store/MonitorStore.js";
import type { MetricsSnapshot } from "../types/index.js";
import { OverviewTab } from "./OverviewTab.js";

function makeSnapshot(): MetricsSnapshot {
  return {
    aggregates: {
      cacheHits: 0,
      cacheMisses: 0,
      revalidations: 0,
      deduplications: 0,
      actionCount: 0,
      optimisticActionCount: 0,
      rollbackActionCount: 0,
      networkResponseTime: 0,
      cachedResponseTime: 0,
      totalResponseTime: 0,
      totalPerceivedSpeedup: 0,
    },
    recent: [],
    rates: {},
  } as unknown as MetricsSnapshot;
}

function makeStore(): MonitorStore {
  const snapshot = makeSnapshot();
  const metricsStore = {
    subscribe: () => () => {},
    getSnapshot: () => snapshot,
  };
  const componentRegistry = {
    subscribe: () => () => {},
    getVersion: () => 0,
    getActiveComponents: () => new Map(),
  };
  const emptyEntryStore = {
    subscribe: () => () => {},
    getEntries: () => [],
  };
  const stub = {
    getMetricsStore: () => metricsStore,
    getComponentRegistry: () => componentRegistry,
    getWindowErrorStore: () => emptyEntryStore,
    getConsoleLogStore: () => emptyEntryStore,
    getPropertyAccessTracker: () => ({ getAccessedFields: () => new Map() }),
    getCacheSnapshot: () =>
      Promise.resolve({
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      }),
    loadCacheEntries: () => Promise.resolve([]),
    getRecommendationEngine: () => ({
      generateRecommendations: () => [],
      dismissRecommendation: () => {},
    }),
    getEventTimeline: () => ({
      getEventsByType: () => [],
      getLastEmission: () => null,
    }),
  };
  return stub as unknown as MonitorStore;
}

afterEach(() => {
  cleanup();
});

describe("OverviewTab", () => {
  it("renders the ontology, metrics, and recommendations sections", () => {
    render(<OverviewTab monitorStore={makeStore()} />);
    expect(screen.getByText("Ontology")).not.toBeNull();
    expect(screen.getByText("Metrics")).not.toBeNull();
    expect(screen.getByText("Recommendations")).not.toBeNull();
  });

  it("shows the empty recommendations state when there are none", () => {
    render(<OverviewTab monitorStore={makeStore()} />);
    expect(screen.getByText("No recommendations right now.")).not.toBeNull();
  });
});
