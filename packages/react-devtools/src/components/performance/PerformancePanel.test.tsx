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

import type { MonitorStore } from "../../store/MonitorStore.js";
import type { MetricsSnapshot } from "../../types/index.js";
import { PerformancePanel } from "./PerformancePanel.js";

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
  const stub = {
    getMetricsStore: () => metricsStore,
    getCacheSnapshot: () =>
      Promise.resolve({
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      }),
    loadCacheEntries: () => Promise.resolve([]),
    getRecommendationEngine: () => ({ generateRecommendations: () => [] }),
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

describe("PerformancePanel", () => {
  it("renders the suggestions and timeline sections", () => {
    render(<PerformancePanel monitorStore={makeStore()} theme="light" />);
    expect(screen.getByText("Suggestions")).not.toBeNull();
    expect(screen.getByText("Timeline")).not.toBeNull();
  });

  it("shows an empty operations state with no recent activity", () => {
    render(<PerformancePanel monitorStore={makeStore()} theme="light" />);
    expect(screen.getByText("No recent operations.")).not.toBeNull();
  });
});
