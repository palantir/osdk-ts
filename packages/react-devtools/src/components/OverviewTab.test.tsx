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

import { formatMetric, getClientMetrics } from "../metrics/clientMetrics.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { MetricsSnapshot } from "../types/index.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import { OverviewTab } from "./OverviewTab.js";

function makeSnapshot(
  overrides: Partial<MetricsSnapshot["aggregates"]>
): MetricsSnapshot {
  const aggregates = {
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
    ...overrides,
  };
  return {
    aggregates,
    recent: [],
    rates: {},
  } as unknown as MetricsSnapshot;
}

function makeBinding(queryParams: QueryParams): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "C",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "s",
    querySignature: "sig",
    queryParams,
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
  };
}

function makeStore(
  snapshot: MetricsSnapshot,
  active = new Map<string, ComponentHookBinding[]>()
): MonitorStore {
  // Stable reference: useConsoleLogs caches its snapshot by identity, so
  // getEntries must return the same array each call (as the real store does).
  const noEntries: readonly never[] = [];
  const emptyEntryStore = {
    subscribe: () => () => {},
    getEntries: () => noEntries,
    getSize: () => 0,
  };
  const stub = {
    getMetricsStore: () => ({
      subscribe: () => () => {},
      getSnapshot: () => snapshot,
    }),
    getComponentRegistry: () => ({
      subscribe: () => () => {},
      getVersion: () => 0,
      getActiveComponents: () => active,
      getComponentProps: () => undefined,
    }),
    getPropertyAccessTracker: () => ({
      getWastedRenders: () => [],
      getUnusedProperties: () => [],
      getAccessesByComponent: () => [],
      getAccessedFields: () => new Map(),
    }),
    getWindowErrorStore: () => emptyEntryStore,
    getConsoleLogStore: () => emptyEntryStore,
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

describe("OverviewTab value tiles", () => {
  it("renders the ontology, metrics, and recommendations sections", () => {
    render(<OverviewTab monitorStore={makeStore(makeSnapshot({}))} />);
    expect(screen.getByText("Ontology")).not.toBeNull();
    expect(screen.getByText("Metrics")).not.toBeNull();
    expect(screen.getByText("Recommendations")).not.toBeNull();
  });

  it("shows the empty recommendations state when there are none", () => {
    render(<OverviewTab monitorStore={makeStore(makeSnapshot({}))} />);
    expect(screen.getByText("No recommendations right now.")).not.toBeNull();
  });

  it("renders each client-metric value through the shared humanizing formatter", () => {
    // 40 hits / 60 requests => 0.6667 cache hit rate => "67%".
    // 720ms total across 60 requests => 12ms average => "12 ms".
    const snapshot = makeSnapshot({
      cacheHits: 40,
      cacheMisses: 20,
      totalResponseTime: 720,
    });
    const metrics = getClientMetrics(snapshot);

    render(<OverviewTab monitorStore={makeStore(snapshot)} />);

    expect(screen.getByText(formatMetric(metrics.cacheHitRate))).not.toBeNull();
    expect(screen.getByText("67%")).not.toBeNull();
    expect(
      screen.getByText(formatMetric(metrics.avgResponseMs))
    ).not.toBeNull();
    expect(screen.getByText("12 ms")).not.toBeNull();
    expect(
      screen.getByText(formatMetric(metrics.requestsSaved))
    ).not.toBeNull();
  });

  it("renders the ontology count tiles as bare integers, never as percentages", () => {
    // Includes an object-set binding whose base type ("Ledger") is only reachable
    // through the folded single-source ontology, so the count is 3, not 2.
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({ type: "list", objectType: "Parcel" }),
          makeBinding({ type: "list", objectType: "Invoice" }),
          makeBinding({
            type: "objectSet",
            baseObjectSet: "Ledger",
            operations: [],
          }),
          makeBinding({ type: "action", actionName: "createParcel" }),
          makeBinding({ type: "action", actionName: "archiveParcel" }),
        ],
      ],
    ]);
    render(<OverviewTab monitorStore={makeStore(makeSnapshot({}), active)} />);

    expect(screen.getByText("Object types")).not.toBeNull();
    expect(screen.getByText("Action types")).not.toBeNull();
    // 3 distinct object types (Parcel, Invoice, Ledger), 2 distinct actions.
    expect(screen.getByText("3")).not.toBeNull();
    expect(screen.getByText("2")).not.toBeNull();
    // A count of zero (errors/overfetching here) shows as "0", never "0%".
    expect(screen.getAllByText("0").length).toBeGreaterThan(0);
    expect(screen.queryByText("3%")).toBeNull();
    expect(screen.queryByText("2%")).toBeNull();
    expect(screen.queryByText("0%")).toBeNull();
  });

  it("shows a no-ontology-usage empty state with N/A metrics and preserved sections when empty", () => {
    const snapshot = makeSnapshot({});
    const metrics = getClientMetrics(snapshot);
    render(<OverviewTab monitorStore={makeStore(snapshot)} />);

    // With no ontology usage, the Ontology section shows the empty state, not tiles.
    expect(screen.getByText("No ontology usage detected")).not.toBeNull();
    expect(screen.getByText("View documentation")).not.toBeNull();
    expect(screen.queryByText("Object types")).toBeNull();
    expect(screen.queryByText("Action types")).toBeNull();

    // Starved client metrics read "N/A" while the sections stay in place.
    expect(formatMetric(metrics.cacheHitRate)).toBe("N/A");
    expect(screen.getAllByText("N/A").length).toBeGreaterThan(0);
    expect(screen.getByText("Ontology")).not.toBeNull();
    expect(screen.getByText("Metrics")).not.toBeNull();
    expect(screen.getByText("Recommendations")).not.toBeNull();
    expect(screen.getByText("No recommendations right now.")).not.toBeNull();
  });
});
