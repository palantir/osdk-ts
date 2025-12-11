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

import type { CacheSnapshot } from "@osdk/client/unstable-do-not-use";
import type { MetricsStore } from "../store/MetricsStore.js";
import { CacheEfficiencyAnalyzer } from "./CacheEfficiencyAnalyzer.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import { UnusedFieldAnalyzer } from "./UnusedFieldAnalyzer.js";
import { WaterfallDetector } from "./WaterfallDetector.js";

export type RecommendationLevel =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "info";
export type RecommendationCategory =
  | "Performance"
  | "Bandwidth"
  | "Code Quality"
  | "Cache"
  | "Queries";

export interface Recommendation {
  id: string;
  level: RecommendationLevel;
  category: RecommendationCategory;
  title: string;
  description: string;
  impact: string; // What will improve (e.g., "Save 50ms on page load")
  effort: "Low" | "Medium" | "High";
  suggestion: string;
  code?: string;
  dismissible: boolean;
}

export interface PerformanceScore {
  overall: number; // 0-100
  grade: "A" | "B" | "C" | "D" | "F";
  categories: {
    cache: number;
    queries: number;
    bandwidth: number;
    codeQuality: number;
  };
  breakdown: {
    waterfalls: { penalty: number; count: number };
    fieldEfficiency: { penalty: number; rate: number };
    cacheHitRate: { penalty: number; rate: number };
    wastedBandwidth: { penalty: number; bytes: number };
  };
}

/**
 * Aggregates insights from all analyzers and generates prioritized,
 * actionable recommendations for developers.
 */
export class PerformanceRecommendationEngine {
  private cacheAnalyzer: CacheEfficiencyAnalyzer;
  private fieldAnalyzer: UnusedFieldAnalyzer;
  private waterfallDetector: WaterfallDetector;
  private dismissedRecommendations = new Set<string>();

  constructor(
    private metricsStore: MetricsStore,
    private registry: ComponentQueryRegistry,
    private timeline: EventTimeline,
  ) {
    this.cacheAnalyzer = new CacheEfficiencyAnalyzer(metricsStore);
    this.fieldAnalyzer = new UnusedFieldAnalyzer(registry, undefined);
    this.waterfallDetector = new WaterfallDetector(registry, timeline);
  }

  /**
   * Generate all recommendations based on current app state.
   */
  generateRecommendations(cacheSnapshot: CacheSnapshot): Recommendation[] {
    const recommendations: Recommendation[] = [];

    // From waterfall detector
    const waterfalls = this.waterfallDetector.detectWaterfalls();
    for (const wf of waterfalls) {
      if (
        this.dismissedRecommendations.has(`waterfall-${wf.details.parentQuery}`)
      ) {
        continue;
      }

      recommendations.push({
        id: `waterfall-${wf.details.parentQuery}`,
        level: wf.priority === "high" ? "high" : "medium",
        category: "Performance",
        title: `${
          wf.type === "LINK_WATERFALL" ? "Link" : "Query"
        } waterfall - ${wf.timeSaved}ms overhead`,
        description: wf.suggestion,
        impact: `Save ${wf.timeSaved}ms on load time`,
        effort: "Low",
        suggestion: wf.suggestion,
        code: wf.code,
        dismissible: true,
      });
    }

    // From unused field analyzer
    const fieldReport = this.fieldAnalyzer.generateGlobalReport(cacheSnapshot);
    for (const offender of fieldReport.topOffenders.slice(0, 3)) {
      if (
        this.dismissedRecommendations.has(`field-${offender.querySignature}`)
      ) {
        continue;
      }

      recommendations.push({
        id: `field-${offender.querySignature}`,
        level: offender.wastedBytes > 50000 ? "high" : "medium",
        category: "Bandwidth",
        title: `${offender.componentName} fetches unused data`,
        description:
          `This component fetches ${offender.fetched.length} properties but only uses ${offender.accessed.length}`,
        impact: `Save ${
          (offender.wastedBytes / 1024).toFixed(1)
        }KB bandwidth per load`,
        effort: "Low",
        suggestion: "Use $select to only fetch used properties",
        code: offender.suggestion,
        dismissible: true,
      });
    }

    // From cache efficiency
    const cacheMetrics = this.cacheAnalyzer.analyze(cacheSnapshot);
    for (const rec of cacheMetrics.recommendations) {
      if (this.dismissedRecommendations.has(`cache-${rec.title}`)) {
        continue;
      }

      if (rec.level === "warning" || rec.level === "critical") {
        recommendations.push({
          id: `cache-${rec.title}`,
          level: rec.level === "critical" ? "critical" : "high",
          category: "Cache",
          title: rec.title,
          description: rec.message,
          impact: rec.suggestion,
          effort: "Medium",
          suggestion: rec.suggestion,
          dismissible: true,
        });
      }
    }

    // Sort by priority and impact
    const priorityOrder: Record<RecommendationLevel, number> = {
      critical: 5,
      high: 4,
      medium: 3,
      low: 2,
      info: 1,
    };

    return recommendations
      .sort((a, b) => priorityOrder[b.level] - priorityOrder[a.level])
      .slice(0, 10); // Top 10 recommendations
  }

  /**
   * Calculate overall performance score.
   */
  calculatePerformanceScore(cacheSnapshot: CacheSnapshot): PerformanceScore {
    const waterfalls = this.waterfallDetector.detectWaterfalls();
    const fieldReport = this.fieldAnalyzer.generateGlobalReport(cacheSnapshot);
    const cacheMetrics = this.cacheAnalyzer.analyze(cacheSnapshot);

    // Calculate category scores (0-100 each)
    const cacheScore = Math.round(cacheMetrics.score);
    const queryScore = Math.round(
      100 - Math.min(waterfalls.length * 5, 50),
    );
    const bandwidthScore = Math.round(
      100 - Math.min((fieldReport.totalWastedBytes / 1024 / 100) * 10, 40),
    );
    // Code quality is now based on field efficiency (observable client handles query deduplication automatically)
    const codeQualityScore = Math.round(
      100 - Math.min((1 - fieldReport.averageEfficiency) * 30, 50),
    );

    // Calculate overall score (weighted average)
    const overall = Math.round(
      cacheScore * 0.3
        + queryScore * 0.3
        + bandwidthScore * 0.2
        + codeQualityScore * 0.2,
    );

    const breakdown = {
      waterfalls: {
        penalty: Math.min(waterfalls.length * 5, 30),
        count: waterfalls.length,
      },
      fieldEfficiency: {
        penalty: (1 - fieldReport.averageEfficiency) * 20,
        rate: fieldReport.averageEfficiency,
      },
      cacheHitRate: {
        penalty: (1 - cacheMetrics.hitRate) * 20,
        rate: cacheMetrics.hitRate,
      },
      wastedBandwidth: {
        penalty: Math.min(fieldReport.totalWastedBytes / 10000, 15),
        bytes: fieldReport.totalWastedBytes,
      },
    };

    return {
      overall,
      grade: this.scoreToGrade(overall),
      categories: {
        cache: cacheScore,
        queries: queryScore,
        bandwidth: bandwidthScore,
        codeQuality: codeQualityScore,
      },
      breakdown,
    };
  }

  /**
   * Convert numeric score to letter grade.
   */
  private scoreToGrade(score: number): "A" | "B" | "C" | "D" | "F" {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  /**
   * Dismiss a recommendation (user doesn't want to see it again).
   */
  dismissRecommendation(id: string): void {
    this.dismissedRecommendations.add(id);
  }

  /**
   * Clear all dismissed recommendations.
   */
  clearDismissed(): void {
    this.dismissedRecommendations.clear();
  }

  /**
   * Get summary of issues found.
   */
  getSummary(cacheSnapshot: CacheSnapshot): {
    issueCount: number;
    criticalCount: number;
    timeToFix: string;
    estimatedImprovement: string;
  } {
    const recommendations = this.generateRecommendations(cacheSnapshot);
    const criticalCount =
      recommendations.filter(r => r.level === "critical").length;

    // Estimate time to fix (rough)
    const lowEffortCount =
      recommendations.filter(r => r.effort === "Low").length;
    const mediumEffortCount =
      recommendations.filter(r => r.effort === "Medium").length;
    const highEffortCount =
      recommendations.filter(r => r.effort === "High").length;

    const minutesToFix = lowEffortCount * 5 + mediumEffortCount * 20
      + highEffortCount * 60;
    const timeToFix = minutesToFix < 60
      ? `${minutesToFix} minutes`
      : `${Math.round(minutesToFix / 60)} hours`;

    // Estimate improvement (rough)
    const totalImpact = recommendations.reduce((sum, r) => {
      if (r.impact.includes("Save")) {
        const match = r.impact.match(/(\d+)(ms|KB|s)/);
        if (match) {
          const value = parseInt(match[1]);
          const unit = match[2];
          return sum
            + (unit === "ms"
              ? value
              : unit === "KB"
              ? value / 100
              : value * 1000);
        }
      }
      return sum;
    }, 0);

    const estimatedImprovement = totalImpact > 1000
      ? `~${(totalImpact / 1000).toFixed(1)}s improvement`
      : `~${Math.round(totalImpact)}ms improvement`;

    return {
      issueCount: recommendations.length,
      criticalCount,
      timeToFix,
      estimatedImprovement,
    };
  }
}
