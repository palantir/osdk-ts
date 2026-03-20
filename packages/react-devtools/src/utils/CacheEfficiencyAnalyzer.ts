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

import type {
  CacheEntry,
  CacheSnapshot,
} from "@osdk/client/unstable-do-not-use";
import type { MetricsStore } from "../store/MetricsStore.js";

export interface NetworkMetrics {
  cacheMisses: number;
  networkResponseTime: number;
}

export interface CacheRecommendation {
  level: "critical" | "warning" | "info" | "success";
  title: string;
  message: string;
  suggestion: string;
  action?: {
    label: string;
    handler: () => void;
  };
}

export interface CacheEfficiencyMetrics {
  hitRate: number;
  hitRateTrend: number[];
  cacheMissRate: number;
  cacheSavings: number;
  bypassedRequests: number;
  avgNetworkTime: number;
  totalEntries: number;
  totalSizeBytes: number;
  averageEntrySize: number;
  hotEntries: CacheEntry[];
  coldEntries: CacheEntry[];
  coldThresholdMs: number;
  deduplications: number;
  recommendations: CacheRecommendation[];
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
}

export class CacheEfficiencyAnalyzer {
  constructor(
    private metricsStore: MetricsStore,
    private coldThresholdMs: number = 5 * 60 * 1000, // 5 minutes
  ) {}

  analyze(cacheSnapshot: CacheSnapshot): CacheEfficiencyMetrics {
    const snapshot = this.metricsStore.getSnapshot();
    const metrics = snapshot.aggregates;

    const totalRequests = metrics.cacheHits + metrics.cacheMisses;
    const hitRate = totalRequests > 0 ? metrics.cacheHits / totalRequests : 0;
    const cacheMissRate = 1 - hitRate;

    const avgNetworkTime = this.estimateAverageNetworkTime(metrics);
    const cacheSavings = metrics.cacheHits * avgNetworkTime;

    const entries = cacheSnapshot.entries || [];
    const sortedByAccess = [...entries].sort((a, b) =>
      (b.metadata.hitCount || 0) - (a.metadata.hitCount || 0)
    );
    const hotEntries = sortedByAccess.slice(0, 10);
    const coldEntries = entries.filter(e =>
      Date.now() - (e.metadata.timestamp || 0) > this.coldThresholdMs
    );

    const totalSize = entries.reduce(
      (sum, e) => sum + (e.metadata.size || 0),
      0,
    );
    const avgSize = entries.length > 0 ? totalSize / entries.length : 0;

    const recommendations = this.generateRecommendations(
      {
        hitRate,
        cacheMissRate,
        totalEntries: entries.length,
        totalSizeBytes: totalSize,
        coldEntries: coldEntries.length,
        cacheHits: metrics.cacheHits,
        cacheMisses: metrics.cacheMisses,
        deduplications: metrics.deduplications,
      },
      cacheSnapshot,
    );

    const score = this.calculateEfficiencyScore({
      hitRate,
      coldEntriesRatio: entries.length > 0
        ? coldEntries.length / entries.length
        : 0,
      totalSizeBytes: totalSize,
      recommendationCount: recommendations.filter(r =>
        r.level === "warning" || r.level === "critical"
      ).length,
    });

    return {
      hitRate,
      hitRateTrend: this.getHitRateTrend(),
      cacheMissRate,
      cacheSavings,
      bypassedRequests: metrics.cacheHits,
      avgNetworkTime,
      totalEntries: entries.length,
      totalSizeBytes: totalSize,
      averageEntrySize: avgSize,
      hotEntries,
      coldEntries,
      coldThresholdMs: this.coldThresholdMs,
      deduplications: metrics.deduplications,
      recommendations,
      score,
      grade: this.scoreToGrade(score),
    };
  }

  getHitRateTrend(windowSeconds: number = 60): number[] {
    const snapshot = this.metricsStore.getSnapshot();
    const { cacheHits, cacheMisses } = snapshot.timeSeries;

    const hitRates: number[] = [];
    const count = Math.min(windowSeconds, cacheHits.length);

    for (let i = cacheHits.length - count; i < cacheHits.length; i++) {
      if (i < 0) continue;
      const total = cacheHits[i] + cacheMisses[i];
      hitRates.push(total > 0 ? cacheHits[i] / total : 0);
    }

    return hitRates;
  }

  private generateRecommendations(
    metrics: {
      hitRate: number;
      cacheMissRate: number;
      totalEntries: number;
      totalSizeBytes: number;
      coldEntries: number;
      cacheHits: number;
      cacheMisses: number;
      deduplications: number;
    },
    cacheSnapshot: CacheSnapshot,
  ): CacheRecommendation[] {
    const recommendations: CacheRecommendation[] = [];

    if (metrics.hitRate < 0.3 && metrics.cacheHits + metrics.cacheMisses > 20) {
      recommendations.push({
        level: "critical",
        title: "Very low cache hit rate",
        message: `Only ${
          (metrics.hitRate * 100).toFixed(1)
        }% of queries are served from cache`,
        suggestion:
          "Consider increasing cache TTL, prefetching related data, or memoizing components",
      });
    } else if (
      metrics.hitRate < 0.5 && metrics.cacheHits + metrics.cacheMisses > 20
    ) {
      recommendations.push({
        level: "warning",
        title: "Low cache hit rate",
        message: `Only ${
          (metrics.hitRate * 100).toFixed(1)
        }% of queries are served from cache`,
        suggestion:
          "Enable prefetching or increase cache TTL for frequently accessed data",
      });
    }

    if (metrics.coldEntries > 50) {
      recommendations.push({
        level: "warning",
        title: "Many stale cache entries",
        message: `${metrics.coldEntries} entries haven't been accessed in ${
          this.coldThresholdMs / 60 / 1000
        } minutes`,
        suggestion: "Consider implementing automatic cache eviction policy",
      });
    } else if (
      metrics.coldEntries > 20 && metrics.coldEntries > metrics.totalEntries / 2
    ) {
      recommendations.push({
        level: "info",
        title: "Many cold cache entries",
        message:
          `${metrics.coldEntries}/${metrics.totalEntries} entries are not actively used`,
        suggestion:
          "You can safely evict cold entries if memory is constrained",
      });
    }

    if (metrics.totalSizeBytes > 50 * 1024 * 1024) {
      recommendations.push({
        level: "critical",
        title: "Very large cache",
        message: `Cache is using ${
          (metrics.totalSizeBytes / 1024 / 1024).toFixed(1)
        }MB - potential memory pressure`,
        suggestion:
          "Implement cache size limits, TTL-based eviction, or LRU eviction policy",
      });
    } else if (metrics.totalSizeBytes > 10 * 1024 * 1024) {
      recommendations.push({
        level: "warning",
        title: "Large cache",
        message: `Cache is using ${
          (metrics.totalSizeBytes / 1024 / 1024).toFixed(1)
        }MB`,
        suggestion:
          "Monitor memory usage and consider implementing cache size limits if not present",
      });
    }

    if (metrics.deduplications > 5) {
      recommendations.push({
        level: "success",
        title: "Good query deduplication",
        message:
          `${metrics.deduplications} duplicate queries deduplicated - cache is working well!`,
        suggestion:
          "Keep current architecture - components are efficiently sharing cache",
      });
    }

    if (metrics.hitRate > 0.8) {
      recommendations.push({
        level: "success",
        title: "Excellent cache hit rate",
        message: `${
          (metrics.hitRate * 100).toFixed(1)
        }% of queries served from cache`,
        suggestion: "Cache configuration is optimal for your app",
      });
    }

    if (
      metrics.cacheHits + metrics.cacheMisses === 0 && metrics.totalEntries > 0
    ) {
      recommendations.push({
        level: "info",
        title: "Cache not being used",
        message: "Cache entries exist but no hits/misses recorded yet",
        suggestion: "Monitor cache usage as you interact with the app",
      });
    }

    return recommendations;
  }

  private calculateEfficiencyScore(params: {
    hitRate: number;
    coldEntriesRatio: number;
    totalSizeBytes: number;
    recommendationCount: number;
  }): number {
    let score = 100;

    if (params.hitRate < 0.3) {
      score -= 30;
    } else if (params.hitRate < 0.5) {
      score -= 15;
    } else if (params.hitRate < 0.7) {
      score -= 5;
    }

    if (params.coldEntriesRatio > 0.5) {
      score -= 20;
    } else if (params.coldEntriesRatio > 0.3) {
      score -= 10;
    }

    if (params.totalSizeBytes > 50 * 1024 * 1024) {
      score -= 20;
    } else if (params.totalSizeBytes > 10 * 1024 * 1024) {
      score -= 10;
    }

    score -= Math.min(params.recommendationCount * 5, 20);

    return Math.max(0, Math.round(score));
  }

  private scoreToGrade(score: number): "A" | "B" | "C" | "D" | "F" {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  private estimateAverageNetworkTime(metrics: NetworkMetrics): number {
    if (metrics.cacheMisses > 0 && metrics.networkResponseTime > 0) {
      return metrics.networkResponseTime / metrics.cacheMisses;
    }
    return 200;
  }
}
