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

import { beforeEach, describe, expect, it, vi } from "vitest";
import { MetricsStore } from "../store/MetricsStore.js";
import { CacheEfficiencyAnalyzer } from "./CacheEfficiencyAnalyzer.js";

function flushMetrics() {
  vi.advanceTimersByTime(0);
}

describe("CacheEfficiencyAnalyzer", () => {
  let metricsStore: MetricsStore;
  let analyzer: CacheEfficiencyAnalyzer;

  beforeEach(() => {
    vi.useFakeTimers();
    metricsStore = new MetricsStore();
    analyzer = new CacheEfficiencyAnalyzer(metricsStore, 5 * 60 * 1000);
  });

  it("hit rate is 0 with no data", () => {
    const result = analyzer.analyze({ entries: [] } as never);
    expect(result.hitRate).toBe(0);
    expect(result.cacheMissRate).toBe(1);
  });

  it("hit rate is calculated correctly from metrics", () => {
    for (let i = 0; i < 8; i++) {
      metricsStore.recordCacheHit(`sig-${i}`, 5);
    }
    for (let i = 0; i < 2; i++) {
      metricsStore.recordCacheMiss(`sig-miss-${i}`, 200);
    }
    flushMetrics();

    const result = analyzer.analyze({ entries: [] } as never);
    expect(result.hitRate).toBeCloseTo(0.8, 1);
    expect(result.cacheMissRate).toBeCloseTo(0.2, 1);
  });

  it("cold entries detected by timestamp", () => {
    vi.setSystemTime(Date.now());
    const staleTime = Date.now() - 10 * 60 * 1000;

    const entries = Array.from({ length: 5 }, (_, i) => ({
      key: `entry-${i}`,
      metadata: {
        hitCount: 1,
        timestamp: staleTime,
        size: 100,
      },
    }));

    const result = analyzer.analyze({ entries } as never);
    expect(result.coldEntries).toHaveLength(5);
  });

  it("hot entries sorted by hit count", () => {
    const entries = Array.from({ length: 15 }, (_, i) => ({
      key: `entry-${i}`,
      metadata: {
        hitCount: i * 10,
        timestamp: Date.now(),
        size: 100,
      },
    }));

    const result = analyzer.analyze({ entries } as never);
    expect(result.hotEntries).toHaveLength(10);
    expect(result.hotEntries[0].metadata.hitCount ?? 0).toBeGreaterThanOrEqual(
      result.hotEntries[1].metadata.hitCount ?? 0,
    );
  });

  it("recommendations include low hit rate warning", () => {
    for (let i = 0; i < 4; i++) {
      metricsStore.recordCacheHit(`sig-${i}`, 5);
    }
    for (let i = 0; i < 20; i++) {
      metricsStore.recordCacheMiss(`sig-miss-${i}`, 200);
    }
    flushMetrics();

    const result = analyzer.analyze({ entries: [] } as never);
    const lowHitRateRec = result.recommendations.find(
      (r) => r.title.toLowerCase().includes("low cache hit rate"),
    );
    expect(lowHitRateRec).toBeDefined();
  });

  it("recommendations include good deduplication success", () => {
    for (let i = 0; i < 6; i++) {
      metricsStore.recordDeduplication(`sig-dedup-${i}`);
    }
    flushMetrics();

    const result = analyzer.analyze({ entries: [] } as never);
    const dedupRec = result.recommendations.find(
      (r) => r.title.toLowerCase().includes("deduplication"),
    );
    if (dedupRec == null) throw new Error("expected dedupRec to be defined");
    expect(dedupRec.level).toBe("success");
  });

  it("score decreases with low hit rate", () => {
    for (let i = 0; i < 1; i++) {
      metricsStore.recordCacheHit(`sig-${i}`, 5);
    }
    for (let i = 0; i < 15; i++) {
      metricsStore.recordCacheMiss(`sig-miss-${i}`, 200);
    }
    flushMetrics();

    const result = analyzer.analyze({ entries: [] } as never);
    expect(result.score).toBeLessThan(80);
  });

  it("grade maps correctly to score ranges", () => {
    const result = analyzer.analyze({ entries: [] } as never);
    const gradeMap: Record<string, [number, number]> = {
      A: [90, 100],
      B: [80, 89],
      C: [70, 79],
      D: [60, 69],
      F: [0, 59],
    };

    const [min, max] = gradeMap[result.grade];
    expect(result.score).toBeGreaterThanOrEqual(min);
    expect(result.score).toBeLessThanOrEqual(max);
  });

  it("avgNetworkTime falls back to 200 with no data", () => {
    const result = analyzer.analyze({ entries: [] } as never);
    expect(result.avgNetworkTime).toBe(200);
  });

  it("totalSizeBytes is calculated from entries", () => {
    const entries = [
      { key: "a", metadata: { hitCount: 1, timestamp: Date.now(), size: 500 } },
      {
        key: "b",
        metadata: { hitCount: 1, timestamp: Date.now(), size: 1500 },
      },
    ];

    const result = analyzer.analyze({ entries } as never);
    expect(result.totalSizeBytes).toBe(2000);
    expect(result.averageEntrySize).toBe(1000);
  });

  it("getHitRateTrend returns array of rates", () => {
    const trend = analyzer.getHitRateTrend(10);
    expect(Array.isArray(trend)).toBe(true);
  });
});
