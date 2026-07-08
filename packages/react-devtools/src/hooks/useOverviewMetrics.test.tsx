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

import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getClientMetrics } from "../metrics/clientMetrics.js";
import type { ConsoleLogEntry } from "../store/ConsoleLogStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { MetricsSnapshot } from "../types/index.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import { useOverviewMetrics } from "./useOverviewMetrics.js";

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

interface StoreOptions {
  active?: Map<string, ComponentHookBinding[]>;
  consoleEntries?: ConsoleLogEntry[];
  windowErrors?: unknown[];
}

function makeStore(
  snapshot: MetricsSnapshot,
  options: StoreOptions = {}
): MonitorStore {
  const {
    active = new Map(),
    consoleEntries = [],
    windowErrors = [],
  } = options;
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
    }),
    getWindowErrorStore: () => ({
      subscribe: () => () => {},
      getEntries: () => windowErrors,
    }),
    getConsoleLogStore: () => ({
      subscribe: () => () => {},
      getEntries: () => consoleEntries,
    }),
    getCacheSnapshot: () =>
      Promise.resolve({
        entries: [],
        stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
      }),
  };
  return stub as unknown as MonitorStore;
}

afterEach(() => {
  cleanup();
});

describe("useOverviewMetrics", () => {
  it("forwards the client metrics verbatim and matches the ontology and error counts", () => {
    const snapshot = makeSnapshot({
      cacheHits: 30,
      cacheMisses: 10,
      revalidations: 5,
      deduplications: 4,
      networkResponseTime: 1200,
      totalResponseTime: 2000,
    });
    const expected = getClientMetrics(snapshot);
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({ type: "list", objectType: "Parcel" }),
          makeBinding({ type: "action", actionName: "createParcel" }),
        ],
      ],
    ]);
    const consoleEntries = [
      { level: "error" },
      { level: "warn" },
      { level: "info" },
    ] as unknown as ConsoleLogEntry[];

    const { result } = renderHook(() =>
      useOverviewMetrics(
        makeStore(snapshot, {
          active,
          consoleEntries,
          windowErrors: [{}],
        })
      )
    );

    expect(result.current.cacheHitRate).toEqual(expected.cacheHitRate);
    expect(result.current.requestsSaved).toEqual(expected.requestsSaved);
    expect(result.current.estimatedTimeSavedMs).toEqual(
      expected.estimatedTimeSavedMs
    );
    expect(result.current.avgResponseMs).toEqual(expected.avgResponseMs);
    // 1 window error + 1 error console + 1 warn console (info ignored) = 3.
    expect(result.current.errorWarningCount).toBe(3);
    expect(result.current.objectTypeCount).toBe(1);
    expect(result.current.actionTypeCount).toBe(1);
    expect(
      typeof result.current.overfetchingCount === "number" ||
        result.current.overfetchingCount == null
    ).toBe(true);
  });

  it("keeps counts numeric and leaves data-starved metrics empty below the sample thresholds", () => {
    const snapshot = makeSnapshot({ cacheHits: 3 });

    const { result } = renderHook(() =>
      useOverviewMetrics(makeStore(snapshot))
    );

    expect(result.current.cacheHitRate.value).toBeUndefined();
    expect(result.current.overfetchingCount).toBeNull();
    expect(result.current.errorWarningCount).toBe(0);
    expect(result.current.objectTypeCount).toBe(0);
    expect(result.current.actionTypeCount).toBe(0);
  });
});
