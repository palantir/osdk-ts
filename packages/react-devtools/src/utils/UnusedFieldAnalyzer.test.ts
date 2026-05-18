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

import type { CacheSnapshot } from "@osdk/client/observable";
import { describe, expect, it, vi } from "vitest";
import type {
  ComponentHookBinding,
  ComponentQueryRegistry,
} from "./ComponentQueryRegistry.js";
import type { PropertyAccessTrackerWithAnalysis } from "./UnusedFieldAnalyzer.js";
import { UnusedFieldAnalyzer } from "./UnusedFieldAnalyzer.js";

function makeBinding(
  overrides: Partial<ComponentHookBinding> = {},
): ComponentHookBinding {
  return {
    componentId: "comp-1",
    componentName: "EmployeeList",
    hookType: "useOsdkObject",
    hookIndex: 0,
    subscriptionId: "sub-1",
    querySignature: "Employee:list",
    queryParams: { type: "object", objectType: "Employee", primaryKey: "1" },
    stackTrace: "",
    mountedAt: Date.now(),
    renderCount: 5,
    lastRenderDuration: 10,
    avgRenderDuration: 8,
    ...overrides,
  };
}

function createMockRegistry(bindings: ComponentHookBinding[]) {
  return {
    getAllBindings: vi.fn().mockReturnValue(bindings),
    getActiveComponents: vi.fn().mockReturnValue(new Map()),
    getComponentBindings: vi.fn().mockReturnValue([]),
    registerBinding: vi.fn(),
    unregisterComponent: vi.fn(),
  } as unknown as ComponentQueryRegistry;
}

function createMockTracker(
  accessedProps: Set<string>,
): PropertyAccessTrackerWithAnalysis {
  return {
    getAccessedProperties: vi.fn().mockReturnValue(accessedProps),
    trackPropertyAccess: vi.fn(),
    reset: vi.fn(),
  } as unknown as PropertyAccessTrackerWithAnalysis;
}

const emptyCacheSnapshot: CacheSnapshot = {
  entries: [],
  totalSize: 0,
  totalHits: 0,
} as unknown as CacheSnapshot;

describe("UnusedFieldAnalyzer", () => {
  it("returns full efficiency when no cache entries exist", () => {
    const registry = createMockRegistry([makeBinding()]);
    const tracker = createMockTracker(new Set(["name", "email"]));
    const analyzer = new UnusedFieldAnalyzer(registry, tracker);

    const binding = makeBinding();
    const report = analyzer.analyzeBinding(binding, emptyCacheSnapshot);

    expect(report.fetched).toEqual([]);
    expect(report.efficiency).toBe(1);
    expect(report.wastedBytes).toBe(0);
  });

  it("identifies unused fields from cache entries", () => {
    const registry = createMockRegistry([makeBinding()]);
    const tracker = createMockTracker(new Set(["name"]));

    const snapshot = {
      entries: [
        {
          key: "Employee:list",
          data: { name: "Alice", email: "a@b.com", phone: "123" },
          metadata: { size: 300 },
        },
      ],
    } as unknown as CacheSnapshot;

    const analyzer = new UnusedFieldAnalyzer(registry, tracker);
    const report = analyzer.analyzeBinding(makeBinding(), snapshot);

    expect(report.fetched).toContain("name");
    expect(report.fetched).toContain("email");
    expect(report.fetched).toContain("phone");
    expect(report.accessed).toEqual(["name"]);
    expect(report.unused).toContain("email");
    expect(report.unused).toContain("phone");
    expect(report.efficiency).toBeCloseTo(1 / 3);
    expect(report.wastedBytes).toBeGreaterThan(0);
  });

  it("filters out OSDK internal properties from analysis", () => {
    const registry = createMockRegistry([makeBinding()]);
    const tracker = createMockTracker(new Set(["name"]));

    const snapshot = {
      entries: [
        {
          key: "Employee:list",
          data: { $rid: "r1", __typename: "Employee", name: "Alice" },
          metadata: { size: 100 },
        },
      ],
    } as unknown as CacheSnapshot;

    const analyzer = new UnusedFieldAnalyzer(registry, tracker);
    const report = analyzer.analyzeBinding(makeBinding(), snapshot);

    expect(report.fetched).toEqual(["name"]);
    expect(report.unused).toEqual([]);
    expect(report.efficiency).toBe(1);
  });

  it("returns empty accessed properties when no tracker is provided", () => {
    const registry = createMockRegistry([makeBinding()]);
    const analyzer = new UnusedFieldAnalyzer(registry, undefined);

    const snapshot = {
      entries: [
        {
          key: "Employee:list",
          data: { name: "Alice", email: "a@b.com" },
          metadata: { size: 200 },
        },
      ],
    } as unknown as CacheSnapshot;

    const report = analyzer.analyzeBinding(makeBinding(), snapshot);
    expect(report.accessed).toEqual([]);
    expect(report.unused).toEqual(["name", "email"]);
  });

  it("generates a global report filtering unmounted components", () => {
    const mounted = makeBinding({ componentId: "c1", unmountedAt: undefined });
    const unmounted = makeBinding({
      componentId: "c2",
      unmountedAt: Date.now(),
    });
    const registry = createMockRegistry([mounted, unmounted]);
    const tracker = createMockTracker(new Set());
    const analyzer = new UnusedFieldAnalyzer(registry, tracker);

    const report = analyzer.generateGlobalReport(emptyCacheSnapshot);

    expect(report.totalComponents).toBe(1);
  });

  it("generates a global report with correct structure", () => {
    const registry = createMockRegistry([]);
    const analyzer = new UnusedFieldAnalyzer(registry, undefined);

    const report = analyzer.generateGlobalReport(emptyCacheSnapshot);

    expect(report.totalComponents).toBe(0);
    expect(report.inefficientComponents).toBe(0);
    expect(report.totalWastedBytes).toBe(0);
    expect(report.topOffenders).toEqual([]);
    expect(report.commonUnused).toEqual([]);
    expect(report.averageEfficiency).toBe(1);
    expect(report.recommendation).toContain("No queries analyzed");
  });

  it("generates useOsdkObject suggestion for object hooks", () => {
    const binding = makeBinding({
      hookType: "useOsdkObject",
      queryParams: { type: "object", objectType: "Employee", primaryKey: "1" },
    });
    const registry = createMockRegistry([binding]);
    const tracker = createMockTracker(new Set(["name"]));

    const snapshot = {
      entries: [
        {
          key: "Employee:list",
          data: { name: "Alice", email: "a@b.com" },
          metadata: { size: 200 },
        },
      ],
    } as unknown as CacheSnapshot;

    const analyzer = new UnusedFieldAnalyzer(registry, tracker);
    const report = analyzer.analyzeBinding(binding, snapshot);

    expect(report.suggestion).toContain("$select");
    expect(report.suggestion).toContain("useOsdkObject");
  });
});
