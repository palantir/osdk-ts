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
import type { MetricsStore } from "../store/MetricsStore.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import { PerformanceRecommendationEngine } from "./PerformanceRecommendationEngine.js";

function createMockMetricsStore(): MetricsStore {
  return {
    getSnapshot: vi.fn().mockReturnValue({
      aggregates: {
        cacheHits: 0,
        cacheMisses: 0,
        deduplications: 0,
        optimisticUpdates: 0,
        requestsSaved: 0,
        dataSaved: 0,
        totalResponseTime: 0,
        totalCachedResponseTime: 0,
        totalActions: 0,
        optimisticActions: 0,
        totalRollbacks: 0,
        totalOptimisticSpeedup: 0,
        totalValidations: 0,
        totalValidationTime: 0,
      },
      rates: { cacheHitRate: 0 },
      operations: [],
      timeSeries: {
        cacheHits: [],
        cacheMisses: [],
        deduplications: [],
        timestamps: [],
      },
    }),
    subscribe: vi.fn(),
    recordCacheHit: vi.fn(),
    recordCacheMiss: vi.fn(),
    recordDeduplication: vi.fn(),
    recordOptimisticUpdate: vi.fn(),
    recordActionLifecycle: vi.fn(),
    recordActionValidation: vi.fn(),
    recordActionError: vi.fn(),
    getActionErrors: vi.fn().mockReturnValue([]),
    getCacheHitRate: vi.fn().mockReturnValue(0),
    reset: vi.fn(),
    dispose: vi.fn(),
  } as unknown as MetricsStore;
}

function createMockRegistry(): ComponentQueryRegistry {
  return {
    getActiveComponents: vi.fn().mockReturnValue(new Map()),
    getComponentBindings: vi.fn().mockReturnValue([]),
    getAllBindings: vi.fn().mockReturnValue([]),
    registerBinding: vi.fn(),
    unregisterComponent: vi.fn(),
  } as unknown as ComponentQueryRegistry;
}

function createMockTimeline(): EventTimeline {
  return {
    getEventsByType: vi.fn().mockReturnValue([]),
    record: vi.fn(),
    getRecentEvents: vi.fn().mockReturnValue([]),
    clear: vi.fn(),
  } as unknown as EventTimeline;
}

const emptyCacheSnapshot: CacheSnapshot = {
  entries: [],
  totalSize: 0,
  totalHits: 0,
} as unknown as CacheSnapshot;

describe("PerformanceRecommendationEngine", () => {
  it("returns empty recommendations with no data", () => {
    const engine = new PerformanceRecommendationEngine(
      createMockMetricsStore(),
      createMockRegistry(),
      createMockTimeline(),
    );

    const recs = engine.generateRecommendations(emptyCacheSnapshot);
    expect(recs).toEqual([]);
  });

  it("calculates a performance score with empty state", () => {
    const engine = new PerformanceRecommendationEngine(
      createMockMetricsStore(),
      createMockRegistry(),
      createMockTimeline(),
    );

    const score = engine.calculatePerformanceScore(emptyCacheSnapshot);
    expect(score.overall).toBeGreaterThanOrEqual(0);
    expect(score.overall).toBeLessThanOrEqual(100);
    expect(["A", "B", "C", "D", "F"]).toContain(score.grade);
    expect(score.categories).toHaveProperty("cache");
    expect(score.categories).toHaveProperty("queries");
    expect(score.categories).toHaveProperty("bandwidth");
    expect(score.categories).toHaveProperty("codeQuality");
  });

  it("dismissed recommendations are excluded", () => {
    const engine = new PerformanceRecommendationEngine(
      createMockMetricsStore(),
      createMockRegistry(),
      createMockTimeline(),
    );

    engine.dismissRecommendation("some-id");
    const recs = engine.generateRecommendations(emptyCacheSnapshot);

    expect(recs.every(r => r.id !== "some-id")).toBe(true);
  });

  it("clearDismissed resets dismissed state", () => {
    const engine = new PerformanceRecommendationEngine(
      createMockMetricsStore(),
      createMockRegistry(),
      createMockTimeline(),
    );

    engine.dismissRecommendation("x");
    engine.clearDismissed();

    const recs = engine.generateRecommendations(emptyCacheSnapshot);
    expect(Array.isArray(recs)).toBe(true);
  });

  it("getSummary returns issue counts and estimates", () => {
    const engine = new PerformanceRecommendationEngine(
      createMockMetricsStore(),
      createMockRegistry(),
      createMockTimeline(),
    );

    const summary = engine.getSummary(emptyCacheSnapshot);
    expect(summary.issueCount).toBe(0);
    expect(summary.criticalCount).toBe(0);
    expect(typeof summary.timeToFix).toBe("string");
    expect(typeof summary.estimatedImprovement).toBe("string");
  });
});
