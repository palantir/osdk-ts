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
import type {
  ComponentHookBinding,
  ComponentQueryRegistry,
} from "./ComponentQueryRegistry.js";
import type { PropertyAccessTracker } from "./PropertyAccessTracker.js";

export interface PropertyAccessTrackerWithAnalysis
  extends PropertyAccessTracker
{
  getAccessedProperties(
    componentId: string,
    querySignature: string,
  ): Set<string>;
}

export interface FieldUsageReport {
  componentName: string;
  querySignature: string;
  fetched: string[];
  accessed: string[];
  unused: string[];
  efficiency: number; // 0-1 ratio of accessed/fetched
  wastedBytes: number;
  renderCount: number;
  suggestion: string;
}

export interface CommonUnusedField {
  field: string;
  objectType?: string;
  unusedCount: number;
  totalQueries: number;
  unusedRate: number;
}

export interface UnusedFieldReport {
  totalComponents: number;
  inefficientComponents: number;
  totalWastedBytes: number;
  topOffenders: FieldUsageReport[];
  commonUnused: CommonUnusedField[];
  averageEfficiency: number;
  recommendation: string;
}

/**
 * Analyzes which fields are fetched but never accessed.
 * Helps identify opportunities to optimize queries with $select.
 */
export class UnusedFieldAnalyzer {
  constructor(
    private registry: ComponentQueryRegistry,
    private propertyTracker: PropertyAccessTrackerWithAnalysis | undefined,
    private estimateCacheEntrySize: (data: unknown) => number = (data) =>
      UnusedFieldAnalyzer.defaultSizeEstimator(data),
  ) {}

  /**
   * Analyze a single component's query for unused fields.
   */
  analyzeBinding(
    binding: ComponentHookBinding,
    cacheSnapshot: CacheSnapshot,
  ): FieldUsageReport {
    const { componentId, querySignature, componentName } = binding;

    // Get accessed properties for this component/query
    const accessed = this.getAccessedProperties(componentId, querySignature);

    // Get fetched properties from cache entry
    const cacheEntry = cacheSnapshot.entries?.find(e =>
      e.key === querySignature
    );
    const fetchedProps = cacheEntry?.data ? Object.keys(cacheEntry.data) : [];

    // Filter out OSDK internal properties
    const cleanFetched = fetchedProps.filter(p =>
      !p.startsWith("$") && p !== "__typename"
    );

    // Calculate unused
    const unused = cleanFetched.filter(prop => !accessed.has(prop));

    // Estimate bandwidth waste
    const entrySize = cacheEntry?.metadata.size
      ?? this.estimateCacheEntrySize(cacheEntry?.data);
    const wastedBytes = unused.length > 0 && cleanFetched.length > 0
      ? Math.floor(entrySize * (unused.length / cleanFetched.length))
      : 0;

    // Calculate efficiency
    const efficiency = cleanFetched.length > 0
      ? accessed.size / cleanFetched.length
      : 1;

    // Generate suggestion
    const suggestion = this.generateSuggestion(binding, Array.from(accessed));

    const renderCount = binding.renderCount;

    return {
      componentName,
      querySignature,
      fetched: cleanFetched,
      accessed: Array.from(accessed),
      unused,
      efficiency,
      wastedBytes,
      renderCount,
      suggestion,
    };
  }

  /**
   * Generate global report for all components.
   */
  generateGlobalReport(cacheSnapshot: CacheSnapshot): UnusedFieldReport {
    const allBindings = this.registry
      .getAllBindings()
      .filter(b => !b.unmountedAt);

    const analyses = allBindings.map(b =>
      this.analyzeBinding(b, cacheSnapshot)
    );

    // Find worst offenders (least efficient)
    const inefficient = analyses
      .filter(a => a.efficiency < 0.7) // Using <70% of fetched data
      .sort((a, b) => a.efficiency - b.efficiency);

    // Calculate total waste
    const totalWaste = analyses.reduce((sum, a) => sum + a.wastedBytes, 0);

    // Find commonly unused fields
    const commonUnused = this.findCommonUnusedFields(analyses);

    // Calculate average efficiency
    const avgEfficiency = analyses.length > 0
      ? analyses.reduce((sum, a) => sum + a.efficiency, 0) / analyses.length
      : 1;

    const recommendation = this.generateGlobalRecommendation(
      analyses,
      totalWaste,
      commonUnused,
    );

    return {
      totalComponents: analyses.length,
      inefficientComponents: inefficient.length,
      totalWastedBytes: totalWaste,
      topOffenders: inefficient.slice(0, 10),
      commonUnused,
      averageEfficiency: avgEfficiency,
      recommendation,
    };
  }

  /**
   * Get properties accessed for a specific component/query combination.
   */
  private getAccessedProperties(
    componentId: string,
    querySignature: string,
  ): Set<string> {
    if (!this.propertyTracker) {
      return new Set<string>();
    }
    return this.propertyTracker.getAccessedProperties(
      componentId,
      querySignature,
    );
  }

  /**
   * Find fields that are commonly unused across multiple queries.
   */
  private findCommonUnusedFields(
    analyses: FieldUsageReport[],
  ): CommonUnusedField[] {
    const fieldCount: Map<
      string,
      { unused: number; total: number; objectType?: string }
    > = new Map();

    for (const analysis of analyses) {
      // Extract object type from query signature
      const match = analysis.querySignature.match(/^(\w+):(.+)/);
      const objectType = match ? match[1] : undefined;

      for (const field of analysis.unused) {
        const key = `${objectType}:${field}`;
        const current = fieldCount.get(key)
          || { unused: 0, total: 0, objectType };
        current.unused++;
        current.total++;
        fieldCount.set(key, current);
      }
    }

    return Array.from(fieldCount.entries())
      .map(([key, { unused, total, objectType }]) => ({
        field: key,
        objectType,
        unusedCount: unused,
        totalQueries: total,
        unusedRate: unused / total,
      }))
      .filter(f => f.unusedRate > 0.7 && f.totalQueries > 2) // 70%+ unused, 3+ queries
      .sort((a, b) => b.unusedCount - a.unusedCount);
  }

  /**
   * Generate code suggestion for optimizing a query.
   */
  private generateSuggestion(
    binding: ComponentHookBinding,
    usedProps: string[],
  ): string {
    const { hookType, queryParams, componentName } = binding;

    if (hookType === "useOsdkObject" && queryParams.type === "object") {
      return `
// In ${componentName}.tsx:
// Current: Fetching all properties
const { object } = useOsdkObject(${queryParams.objectType}, id);

// Optimized: Only fetch what you use
const { object } = useOsdkObject(${queryParams.objectType}, id, {
  $select: [${
        usedProps.length > 0
          ? usedProps.map(p => `"${p}"`).join(", ")
          : "\"id\"" // fallback
      }]
});

// This query will be more efficient!
      `.trim();
    } else if (hookType === "useOsdkObjects" && queryParams.type === "list") {
      return `
// In ${componentName}.tsx:
// Current: Fetching all properties
const { data } = useOsdkObjects(${queryParams.objectType}, {
  where: ${JSON.stringify(queryParams.where || {})}
});

// Optimized: Only fetch what you use
const { data } = useOsdkObjects(${queryParams.objectType}, {
  where: ${JSON.stringify(queryParams.where || {})},
  $select: [${
        usedProps.length > 0
          ? usedProps.map(p => `"${p}"`).join(", ")
          : "\"id\""
      }]
});
      `.trim();
    }

    return "Consider using $select to only fetch used properties";
  }

  /**
   * Generate global recommendation based on all analyses.
   */
  private generateGlobalRecommendation(
    analyses: FieldUsageReport[],
    totalWaste: number,
    commonUnused: CommonUnusedField[],
  ): string {
    if (analyses.length === 0) {
      return "No queries analyzed yet";
    }

    const inefficientCount = analyses.filter(a => a.efficiency < 0.7).length;
    const inefficiencyRate = inefficientCount / analyses.length;

    if (inefficiencyRate > 0.5) {
      return `
🔴 HIGH PRIORITY: ${inefficientCount} of ${analyses.length} components are fetching unused data (${
        (totalWaste / 1024).toFixed(1)
      }KB total waste).

Consider adding $select clauses to your queries to only fetch used properties.
This will reduce bandwidth, improve performance, and lower data costs.

Start with the top offenders listed above.
      `.trim();
    } else if (inefficientCount > 0) {
      return `
🟡 MEDIUM PRIORITY: ${inefficientCount} components have unused fields.

You could optimize these queries with $select to save ~${
        (totalWaste / 1024).toFixed(1)
      }KB bandwidth.
      `.trim();
    } else {
      return `
✅ EXCELLENT: All queries are using fetched data efficiently!
Continue monitoring as features change.
      `.trim();
    }
  }

  /**
   * Get statistics about field usage across the app.
   */
  getStats(cacheSnapshot: CacheSnapshot): {
    totalEntries: number;
    totalFields: number;
    unusedFields: number;
    averageWaste: number;
  } {
    const allBindings = this.registry
      .getAllBindings()
      .filter(b => !b.unmountedAt);

    const analyses = allBindings.map(b =>
      this.analyzeBinding(b, cacheSnapshot)
    );

    const totalFields = analyses.reduce((sum, a) => sum + a.fetched.length, 0);
    const unusedFields = analyses.reduce((sum, a) => sum + a.unused.length, 0);
    const totalWaste = analyses.reduce((sum, a) => sum + a.wastedBytes, 0);

    return {
      totalEntries: analyses.length,
      totalFields,
      unusedFields,
      averageWaste: analyses.length > 0 ? totalWaste / analyses.length : 0,
    };
  }

  /**
   * Default field size estimator (rough approximation).
   */
  private static defaultSizeEstimator(data: unknown): number {
    if (!data) return 0;
    if (typeof data === "string") return data.length;
    if (typeof data === "number") return 8;
    if (typeof data === "boolean") return 1;
    if (Array.isArray(data)) {
      return data.reduce<number>(
        (sum, item) => sum + UnusedFieldAnalyzer.defaultSizeEstimator(item),
        0,
      );
    }
    if (typeof data === "object") {
      return Object.values(data as Record<string, unknown>).reduce<number>(
        (sum, value) => sum + UnusedFieldAnalyzer.defaultSizeEstimator(value),
        0,
      );
    }
    return 100; // Rough estimate for unknowns
  }
}
