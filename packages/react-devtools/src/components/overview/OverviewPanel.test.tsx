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

import type { MetricsSnapshot } from "../../types/index.js";
import type { ComponentHookBinding } from "../../utils/ComponentQueryRegistry.js";
import { OverviewPanel } from "./OverviewPanel.js";

function emptyAggregates(): MetricsSnapshot["aggregates"] {
  return {
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
  } as MetricsSnapshot["aggregates"];
}

function makeStore(
  bindings: ComponentHookBinding[],
): import("../../store/MonitorStore.js").MonitorStore {
  const snapshot = { aggregates: emptyAggregates() } as MetricsSnapshot;
  const active = new Map<string, ComponentHookBinding[]>();
  if (bindings.length > 0) {
    active.set("component-1", bindings);
  }
  const stub = {
    getMetricsStore: () => ({
      subscribe: () => () => {},
      getSnapshot: () => snapshot,
    }),
    getComponentRegistry: () => ({
      subscribe: () => () => {},
      getVersion: () => 0,
      getActiveComponents: () => active,
    }),
    getCacheSnapshot: () =>
      Promise.resolve({
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      }),
    getRecommendationEngine: () => ({
      generateRecommendations: () => [],
    }),
  };
  return stub as unknown as import("../../store/MonitorStore.js").MonitorStore;
}

afterEach(() => {
  cleanup();
});

describe("OverviewPanel", () => {
  it("renders headline metrics, usage and recommendations sections", () => {
    render(<OverviewPanel monitorStore={makeStore([])} theme="light" />);
    expect(screen.getByText("Cache hit rate")).toBeTruthy();
    expect(screen.getByText("Top recommendations")).toBeTruthy();
  });

  it("shows a cold-start state before enough samples are collected", () => {
    render(<OverviewPanel monitorStore={makeStore([])} theme="light" />);
    expect(screen.getAllByText("collecting data…").length).toBeGreaterThan(0);
  });

  it("lists object types that are in use", () => {
    const binding = {
      componentId: "component-1",
      componentName: "ParcelList",
      hookType: "useOsdkObjects",
      hookIndex: 0,
      subscriptionId: "sub-1",
      querySignature: "useOsdkObjects:Parcel",
      queryParams: { type: "list", objectType: "Parcel" },
      stackTrace: "",
      mountedAt: 0,
      renderCount: 1,
      lastRenderDuration: 0,
      avgRenderDuration: 0,
    } as ComponentHookBinding;
    render(<OverviewPanel monitorStore={makeStore([binding])} theme="light" />);
    expect(screen.getByText("Parcel")).toBeTruthy();
  });
});
