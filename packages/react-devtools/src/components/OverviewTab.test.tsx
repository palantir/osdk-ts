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
            entityKind: "object",
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

  it("shows the 'No ontology' empty state when the registry has no active components", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology linked")).not.toBeNull();
    expect(screen.queryByText("No ontology found")).not.toBeNull();
  });

  it("links to the OSDK docs from the empty state", () => {
    const store = createMockMonitorStore();

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toContain("palantir.com");
  });

  it("does not show the empty state when the registry has active components", () => {
    const store = createMockMonitorStore();
    vi.mocked(store.getComponentRegistry().getActiveComponents).mockReturnValue(
      new Map([["comp-1", []]])
    );

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(screen.queryByText("No ontology linked")).toBeNull();
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
              entityKind: "object",
            },
          }),
          // Same object type in another component → still counts once.
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Employee",
              primaryKey: "2",
              entityKind: "object",
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
              entityKind: "object",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /object types/i }).textContent
    ).toContain("2");
    expect(
      screen.getByRole("button", { name: /action types/i }).textContent
    ).toContain("1");
  });

  it("excludes interface-kind bindings from the object-type count", () => {
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
              entityKind: "object",
            },
          }),
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /object types/i }).textContent
    ).toContain("1");
  });

  it("switches to the Debugging tab when the object-types count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
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
              entityKind: "object",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /object types/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });

  it("switches to the Debugging tab when the action-types count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkAction",
            queryParams: { type: "action", actionName: "createEmployee" },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /action types/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });

  it("shows a distinct interface count for interface-kind bindings", () => {
    const store = createMockMonitorStore();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
          // Same interface elsewhere → counts once.
          binding({
            hookType: "useOsdkObject",
            queryParams: {
              type: "object",
              objectType: "Named",
              primaryKey: "1",
              entityKind: "interface",
            },
          }),
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Located",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /interfaces/i }).textContent
    ).toContain("2");
  });

  it("switches to the Debugging tab when the interfaces count is clicked", () => {
    const store = createMockMonitorStore();
    const setActiveTab = vi.fn();
    populateRegistry(store, [
      [
        "c1",
        [
          binding({
            hookType: "useOsdkObjects",
            queryParams: {
              type: "list",
              objectType: "Named",
              entityKind: "interface",
            },
          }),
        ],
      ],
    ]);

    render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByRole("button", { name: /interfaces/i }));

    expect(setActiveTab).toHaveBeenCalledWith("debugging");
  });

  describe("performance tiles", () => {
    it("renders all four performance tiles even when every metric is zero", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /cache hit rate/i })
      ).not.toBeNull();
      expect(
        screen.getByRole("button", { name: /network requests/i })
      ).not.toBeNull();
      expect(
        screen.getByRole("button", { name: /avg response/i })
      ).not.toBeNull();
      expect(
        screen.getByRole("button", { name: /duplicate requests/i })
      ).not.toBeNull();
    });

    it("renders the cache hit rate as a percentage from snapshot rates", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { rates: { cacheHitRate: 0.75 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /cache hit rate/i }).textContent
      ).toContain("75%");
    });

    it("shows network requests as cache misses plus revalidations", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { aggregates: { cacheMisses: 3, revalidations: 2 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /network requests/i }).textContent
      ).toContain("5");
    });

    it("labels average response time 'avg', never a percentile", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { rates: { averageResponseTime: 120 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      const tile = screen.getByRole("button", { name: /avg response/i });
      expect(tile.textContent).toContain("120ms");
      expect(tile.textContent).not.toMatch(/p95|percentile/i);
    });

    it("shows duplicate requests from snapshot deduplications", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setMetrics(store, { aggregates: { deduplications: 4 } });

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /duplicate requests/i }).textContent
      ).toContain("4");
    });

    it.each([
      /cache hit rate/i,
      /network requests/i,
      /avg response/i,
      /duplicate requests/i,
    ])("switches to the Performance tab when %s is clicked", (name) => {
      const store = createMockMonitorStore();
      const setActiveTab = vi.fn();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
      fireEvent.click(screen.getByRole("button", { name }));

      expect(setActiveTab).toHaveBeenCalledWith("performance");
    });
  });

  describe("debugging tiles", () => {
    it("renders both debugging tiles even at zero", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /overfetching/i })
      ).not.toBeNull();
      expect(
        screen.getByRole("button", { name: /errors & warnings/i })
      ).not.toBeNull();
    });

    it("shows the overfetching count from the unused-field report", () => {
      const store = createMockMonitorStore();
      populateOneObject(store);
      setOverfetching(3);

      render(<OverviewTab monitorStore={store} setActiveTab={vi.fn()} />);

      expect(
        screen.getByRole("button", { name: /overfetching/i }).textContent
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
        screen.getByRole("button", { name: /errors & warnings/i }).textContent
      ).toContain("4");
    });

    it("switches to the Debugging tab when overfetching is clicked", () => {
      const store = createMockMonitorStore();
      const setActiveTab = vi.fn();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
      fireEvent.click(screen.getByRole("button", { name: /overfetching/i }));

      expect(setActiveTab).toHaveBeenCalledWith("debugging");
    });

    it("switches to the Debugging tab when errors & warnings is clicked", () => {
      const store = createMockMonitorStore();
      const setActiveTab = vi.fn();
      populateOneObject(store);

      render(<OverviewTab monitorStore={store} setActiveTab={setActiveTab} />);
      fireEvent.click(
        screen.getByRole("button", { name: /errors & warnings/i })
      );

      expect(setActiveTab).toHaveBeenCalledWith("debugging");
    });
  });
});
