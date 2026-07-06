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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useUnusedFieldAnalysis } from "../hooks/useUnusedFieldAnalysis.js";
import type {
  ConsoleLogEntry,
  ConsoleLogLevel,
} from "../store/ConsoleLogStore.js";
import type { WindowErrorEntry } from "../store/WindowErrorStore.js";
import type { AggregateMetrics, MetricRates } from "../types/index.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import type { UnusedFieldReport } from "../utils/UnusedFieldAnalyzer.js";
import { createMockMonitorStore, emptyMetricsSnapshot } from "./testHelpers.js";

vi.mock("../hooks/useUnusedFieldAnalysis.js", () => ({
  useUnusedFieldAnalysis: vi.fn(() => ({
    report: null,
    isLoading: false,
    error: null,
  })),
}));

function binding(
  overrides: Partial<ComponentHookBinding> & {
    hookType: ComponentHookBinding["hookType"];
    queryParams: QueryParams;
  }
): ComponentHookBinding {
  return {
    componentId: "comp",
    componentName: "Comp",
    hookIndex: 0,
    subscriptionId: "sub",
    querySignature: "sig",
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
    ...overrides,
  };
}

function populateRegistry(
  store: ReturnType<typeof createMockMonitorStore>,
  components: ReadonlyArray<readonly [string, ComponentHookBinding[]]>
): void {
  vi.mocked(store.getComponentRegistry().getActiveComponents).mockReturnValue(
    new Map(components)
  );
}

function setMetrics(
  store: ReturnType<typeof createMockMonitorStore>,
  overrides: {
    aggregates?: Partial<AggregateMetrics>;
    rates?: Partial<MetricRates>;
  }
): void {
  vi.mocked(store.getMetricsStore().getSnapshot).mockReturnValue({
    ...emptyMetricsSnapshot,
    aggregates: { ...emptyMetricsSnapshot.aggregates, ...overrides.aggregates },
    rates: { ...emptyMetricsSnapshot.rates, ...overrides.rates },
  });
}

/** A minimal non-empty registry so the populated Overview (with its Metrics grid) renders. */
function populateOneObject(
  store: ReturnType<typeof createMockMonitorStore>
): void {
  populateRegistry(store, [
    [
      "c1",
      [
        binding({
          hookType: "useOsdkObject",
          queryParams: {
            type: "object",
            objectType: "Employee",
            primaryKey: "1",
          },
        }),
      ],
    ],
  ]);
}

function report(inefficientComponents: number): UnusedFieldReport {
  return {
    totalComponents: inefficientComponents,
    inefficientComponents,
    totalWastedBytes: 0,
    topOffenders: [],
    commonUnused: [],
    averageEfficiency: 1,
    recommendation: "",
  };
}

function setOverfetching(inefficientComponents: number): void {
  vi.mocked(useUnusedFieldAnalysis).mockReturnValue({
    report: report(inefficientComponents),
    isLoading: false,
    error: null,
  });
}

function consoleEntry(level: ConsoleLogLevel, i: number): ConsoleLogEntry {
  return { id: `c-${i}`, level, args: [], timestamp: 0 };
}

function windowError(i: number): WindowErrorEntry {
  return { id: `e-${i}`, kind: "error", message: "boom", timestamp: 0 };
}

function setConsoleEntries(
  store: ReturnType<typeof createMockMonitorStore>,
  entries: ConsoleLogEntry[]
): void {
  vi.mocked(store.getConsoleLogStore().getEntries).mockReturnValue(entries);
}

function setWindowErrors(
  store: ReturnType<typeof createMockMonitorStore>,
  entries: WindowErrorEntry[]
): void {
  vi.mocked(store.getWindowErrorStore().getEntries).mockReturnValue(entries);
}

const { OverviewTab } = await import("./OverviewTab.js");

describe("OverviewTab", () => {
  beforeEach(() => {
    vi.mocked(useUnusedFieldAnalysis).mockReturnValue({
      report: null,
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows the 'No ontology' empty state inside the Ontology section when the registry has no active components", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology usage detected")).not.toBeNull();
  });

  it("always renders the Ontology and Metrics sections, even with no ontology", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    // Both section headers render, and the empty state sits inside Ontology.
    expect(screen.queryByText("Ontology")).not.toBeNull();
    expect(screen.queryByText("Metrics")).not.toBeNull();
    expect(screen.queryByText("No ontology usage detected")).not.toBeNull();
    // The Metrics grid still renders its tiles, as "N/A" while there is no data.
    expect(
      screen.getByRole("region", { name: /cache hit rate/i }).textContent
    ).toContain("N/A");
  });

  it("links to the OSDK docs from the empty state", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    const docs = screen.getByRole("button", { name: /view documentation/i });
    expect(docs.getAttribute("href")).toContain("palantir.github.io");
  });

  it("does not show the empty state when the registry has active components", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getComponentRegistry().getActiveComponents).mockReturnValue(
      new Map([["comp-1", []]])
    );

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology usage detected")).toBeNull();
  });

  it("shows distinct object-type and action-type counts for a populated registry", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "1",
            },
          }),
          // Same object type in another component → still counts once.
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "2",
            },
          }),
          binding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createEmployee" },
          }),
        ],
      ],
      [
        "c2",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Office",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("region", { name: /object types/i }).textContent
    ).toContain("2");
    expect(
      screen.getByRole("region", { name: /action types/i }).textContent
    ).toContain("1");
  });

  it("shows a distinct link count for useLinks bindings", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useLinks",
            queryParams: {
              type: "links",
              sourceObject: "Employee",
              linkName: "manager",
            },
          }),
          // Same source + link elsewhere → counts once.
          binding({
            hookType: "useLinks",
            queryParams: {
              type: "links",
              sourceObject: "Employee",
              linkName: "manager",
            },
          }),
          // Same link name on a different source object → distinct.
          binding({
            hookType: "useLinks",
            queryParams: {
              type: "links",
              sourceObject: "Office",
              linkName: "manager",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("region", { name: /links/i }).textContent
    ).toContain("2");
  });

  it("renders a help affordance for each colored metric", () => {
    const store = createMockMonitorStore();
    populateOneObject(store);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    // Each metric exposes an "About <title>" help icon carrying its definition.
    for (const title of [
      "Cache hit rate",
      "Network requests",
      "Overfetching",
      "Errors & warnings",
    ]) {
      expect(screen.queryByLabelText(`About ${title}`)).not.toBeNull();
    }
  });

  it("shows the per-metric color key inside the cache hit rate help tooltip", async () => {
    const store = createMockMonitorStore();
    populateOneObject(store);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    fireEvent.mouseEnter(screen.getByLabelText("About Cache hit rate"));

    // The tooltip carries the definition plus a row per color threshold.
    expect(
      await screen.findByText(/served from the normalized cache/i)
    ).not.toBeNull();
    for (const threshold of ["≥ 70%", "40–70%", "< 40%"]) {
      expect(screen.getByText(threshold)).not.toBeNull();
    }
  });

  it("renders each ontology/metrics section collapsed-toggle and collapses on click", () => {
    const store = createMockMonitorStore();
    populateOneObject(store);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    // Ontology + Metrics both render as expanded collapsible sections.
    const collapseToggles = screen.getAllByRole("button", {
      name: "collapse section",
    });
    expect(collapseToggles.length).toBe(2);

    // Collapsing one flips its toggle to the "expand section" affordance.
    fireEvent.click(collapseToggles[0]);
    expect(
      screen.getAllByRole("button", { name: "expand section" }).length
    ).toBe(1);
  });

  describe("performance tiles", () => {
    it("shows N/A for every performance tile when there is no activity", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      for (const name of [
        /cache hit rate/i,
        /network requests/i,
        /avg response/i,
        /duplicate requests/i,
      ]) {
        expect(screen.getByRole("region", { name }).textContent).toContain(
          "N/A"
        );
      }
    });

    it("renders the object-based cache hit rate as a percentage", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      // 3 of 4 objects served from cache → 75% (object-based, like the
      // Performance tab), not the store's operation-based rates.cacheHitRate.
      setMetrics(store, {
        aggregates: { totalObjectsFromCache: 3, totalObjectsFromNetwork: 1 },
      });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("region", { name: /cache hit rate/i }).textContent
      ).toContain("75%");
    });

    it("shows network requests as cache misses plus revalidations", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { aggregates: { cacheMisses: 3, revalidations: 2 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("region", { name: /network requests/i }).textContent
      ).toContain("5");
    });

    it("labels average response time 'avg', never a percentile", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, {
        aggregates: { cacheMisses: 1 },
        rates: { averageResponseTime: 120 },
      });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      const tile = screen.getByRole("region", { name: /avg response/i });
      expect(tile.textContent).toContain("120ms");
      expect(tile.textContent).not.toMatch(/p95|percentile/i);
    });

    it("shows duplicate requests from snapshot deduplications", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { aggregates: { deduplications: 4 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("region", { name: /duplicate requests/i }).textContent
      ).toContain("4");
    });

    it("navigates to the Performance tab from a metric footer link", () => {
      const store = createMockMonitorStore();
      const setActiveTab = vi.fn();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
      fireEvent.click(
        screen.getAllByRole("button", { name: /view in performance/i })[0]
      );

      expect(setActiveTab).toHaveBeenCalledWith("performance");
    });
  });

  describe("debugging tiles", () => {
    it("shows N/A for overfetching when no unused-field report exists yet", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("region", { name: /overfetching/i }).textContent
      ).toContain("N/A");
      expect(
        screen.getByRole("region", { name: /errors & warnings/i })
      ).not.toBeNull();
    });

    it("shows the overfetching count from the unused-field report", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setOverfetching(3);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("region", { name: /overfetching/i }).textContent
      ).toContain("3");
    });

    it("combines all window errors with error/warn console entries", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setWindowErrors(store, [windowError(1), windowError(2)]);
      setConsoleEntries(store, [
        consoleEntry("error", 1),
        consoleEntry("warn", 2),
        consoleEntry("log", 3),
        consoleEntry("info", 4),
      ]);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      // 2 window errors + 2 console (error + warn); log/info excluded → 4.
      expect(
        screen.getByRole("region", { name: /errors & warnings/i }).textContent
      ).toContain("4");
    });

    it("navigates to the Debugging tab from a metric footer link", () => {
      const store = createMockMonitorStore();
      const setActiveTab = vi.fn();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
      fireEvent.click(
        screen.getAllByRole("button", { name: /view in debugging/i })[0]
      );

      expect(setActiveTab).toHaveBeenCalledWith("debugging");
    });
  });
});
