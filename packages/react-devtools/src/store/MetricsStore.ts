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
  ActionError,
  MetricRates,
  MetricsSnapshot,
  Operation,
  OperationMetadata,
} from "../types/index.js";
import { RingBuffer } from "../utils/RingBuffer.js";

export class MetricsStore {
  private readonly maxOperations: number;
  private readonly timeSeriesSize: number;
  private readonly operations: RingBuffer<Operation>;
  // Make aggregates mutable internally while keeping the public interface readonly
  private readonly aggregates: {
    cacheHits: number;
    cacheMisses: number;
    deduplications: number;
    optimisticUpdates: number;
    totalResponseTime: number;
    cachedResponseTime: number;
    networkResponseTime: number;
    requestsSaved: number;
    bytesServedFromCache: number;
    totalObjectsFromCache: number;
    totalObjectsFromNetwork: number;
    actionCount: number;
    configuredOptimisticActionCount: number;
    optimisticActionCount: number;
    rollbackActionCount: number;
    totalOptimisticRenderTime: number;
    totalServerRoundTripTime: number;
    totalPerceivedSpeedup: number;
    totalOptimisticObjectsAffected: number;
    validationCount: number;
    totalValidationTime: number;
  };
  private readonly subscribers = new Set<() => void>();
  private readonly timeSeries: {
    timestamps: number[];
    cacheHits: number[];
    cacheMisses: number[];
    deduplications: number[];
  };

  private pendingUpdates: Operation[] = [];
  private isProcessing = false;
  private lastSnapshot: MetricsSnapshot | null = null;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private actionErrors: ActionError[] = [];

  constructor(maxOperations: number = 1000, timeSeriesSize: number = 60) {
    this.maxOperations = maxOperations;
    this.timeSeriesSize = timeSeriesSize;
    this.operations = new RingBuffer(maxOperations);
    this.aggregates = {
      cacheHits: 0,
      cacheMisses: 0,
      deduplications: 0,
      optimisticUpdates: 0,
      totalResponseTime: 0,
      cachedResponseTime: 0,
      networkResponseTime: 0,
      requestsSaved: 0,
      bytesServedFromCache: 0,
      totalObjectsFromCache: 0,
      totalObjectsFromNetwork: 0,
      actionCount: 0,
      configuredOptimisticActionCount: 0,
      optimisticActionCount: 0,
      rollbackActionCount: 0,
      totalOptimisticRenderTime: 0,
      totalServerRoundTripTime: 0,
      totalPerceivedSpeedup: 0,
      totalOptimisticObjectsAffected: 0,
      validationCount: 0,
      totalValidationTime: 0,
    };
    this.timeSeries = {
      timestamps: [],
      cacheHits: [],
      cacheMisses: [],
      deduplications: [],
    };

    this.intervalId = setInterval(() => this.updateTimeSeries(), 1000);
  }

  recordCacheHit(
    signature: string,
    responseTime: number,
    metadata?: OperationMetadata,
    objectCount: number = 1,
  ): void {
    const operation: Operation = {
      id: crypto.randomUUID(),
      type: "cache-hit",
      signature,
      timestamp: Date.now(),
      responseTime,
      saved: this.estimateNetworkTime(signature) - responseTime,
      metadata,
      objectCount,
    };

    this.queueOperation(operation);
  }

  recordCacheMiss(
    signature: string,
    responseTime: number,
    metadata?: OperationMetadata,
    objectCount: number = 1,
  ): void {
    const operation: Operation = {
      id: crypto.randomUUID(),
      type: "cache-miss",
      signature,
      timestamp: Date.now(),
      responseTime,
      metadata,
      objectCount,
    };

    this.queueOperation(operation);
  }

  recordDeduplication(
    signature: string,
    metadata?: OperationMetadata,
  ): void {
    const operation: Operation = {
      id: crypto.randomUUID(),
      type: "deduplication",
      signature,
      timestamp: Date.now(),
      saved: this.estimateNetworkTime(signature),
      metadata,
    };

    this.queueOperation(operation);
  }

  recordOptimisticUpdate(
    signature: string,
    metadata?: OperationMetadata,
  ): void {
    const operation: Operation = {
      id: crypto.randomUUID(),
      type: "optimistic-update",
      signature,
      timestamp: Date.now(),
      saved: this.estimateNetworkTime(signature),
      metadata,
    };

    this.queueOperation(operation);
  }

  recordActionLifecycle(operation: Operation): void {
    this.queueOperation(operation);
  }

  recordActionValidation(
    signature: string,
    duration: number,
    metadata?: OperationMetadata,
  ): void {
    const operation: Operation = {
      id: crypto.randomUUID(),
      type: "action-validation",
      signature,
      timestamp: Date.now(),
      responseTime: duration,
      metadata,
      actionName: metadata?.actionName,
    };

    this.queueOperation(operation);
  }

  subscribe(callback: () => void): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  getSnapshot(): MetricsSnapshot {
    if (this.lastSnapshot) {
      return this.lastSnapshot;
    }

    const snapshot: MetricsSnapshot = {
      recent: this.operations.toArray(),
      aggregates: { ...this.aggregates },
      rates: this.calculateRates(),
      timeSeries: {
        timestamps: [...this.timeSeries.timestamps],
        cacheHits: [...this.timeSeries.cacheHits],
        cacheMisses: [...this.timeSeries.cacheMisses],
        deduplications: [...this.timeSeries.deduplications],
      },
    };

    this.lastSnapshot = snapshot;
    return snapshot;
  }

  reset(): void {
    this.operations.clear();
    Object.assign(this.aggregates, {
      cacheHits: 0,
      cacheMisses: 0,
      deduplications: 0,
      optimisticUpdates: 0,
      totalResponseTime: 0,
      cachedResponseTime: 0,
      networkResponseTime: 0,
      requestsSaved: 0,
      bytesServedFromCache: 0,
      totalObjectsFromCache: 0,
      totalObjectsFromNetwork: 0,
      actionCount: 0,
      configuredOptimisticActionCount: 0,
      optimisticActionCount: 0,
      rollbackActionCount: 0,
      totalOptimisticRenderTime: 0,
      totalServerRoundTripTime: 0,
      totalPerceivedSpeedup: 0,
      totalOptimisticObjectsAffected: 0,
      validationCount: 0,
      totalValidationTime: 0,
    });
    this.timeSeries.timestamps.length = 0;
    this.timeSeries.cacheHits.length = 0;
    this.timeSeries.cacheMisses.length = 0;
    this.timeSeries.deduplications.length = 0;
    this.lastSnapshot = null;
    this.notifySubscribers();
  }

  dispose(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.reset();
    this.subscribers.clear();
    this.pendingUpdates = [];
    this.isProcessing = false;
  }

  private queueOperation(operation: Operation): void {
    this.pendingUpdates.push(operation);

    if (!this.isProcessing && typeof requestIdleCallback !== "undefined") {
      this.isProcessing = true;
      requestIdleCallback(() => this.processBatch());
    } else if (!this.isProcessing) {
      // Fallback for environments without requestIdleCallback
      this.isProcessing = true;
      setTimeout(() => this.processBatch(), 0);
    }
  }

  private processBatch(): void {
    const batch = this.pendingUpdates.splice(0, 100);

    batch.forEach((operation) => {
      this.operations.push(operation);
      this.updateAggregates(operation);
    });

    this.lastSnapshot = null;
    this.isProcessing = false;

    if (this.pendingUpdates.length > 0) {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => this.processBatch());
      } else {
        setTimeout(() => this.processBatch(), 0);
      }
    }

    this.notifySubscribers();
  }

  private updateAggregates(operation: Operation): void {
    const objectCount = operation.objectCount ?? 0;

    switch (operation.type) {
      case "cache-hit":
        this.aggregates.cacheHits++;
        this.aggregates.totalObjectsFromCache += objectCount;
        if (operation.responseTime != null) {
          this.aggregates.cachedResponseTime += operation.responseTime;
          this.aggregates.totalResponseTime += operation.responseTime;
        }
        if (operation.saved) {
          this.aggregates.requestsSaved++;
          this.aggregates.bytesServedFromCache += this.estimateBytes(
            operation.signature,
          );
        }
        break;

      case "cache-miss":
        this.aggregates.cacheMisses++;
        this.aggregates.totalObjectsFromNetwork += objectCount;
        if (operation.responseTime != null) {
          this.aggregates.networkResponseTime += operation.responseTime;
          this.aggregates.totalResponseTime += operation.responseTime;
        }
        break;

      case "deduplication":
        this.aggregates.deduplications++;
        this.aggregates.requestsSaved++;
        break;

      case "optimistic-update":
        this.aggregates.optimisticUpdates++;
        break;

      case "action":
        this.aggregates.actionCount++;
        if (operation.optimisticConfigured) {
          this.aggregates.configuredOptimisticActionCount++;
        }
        if (operation.optimisticObserved) {
          this.aggregates.optimisticActionCount++;
        }
        if (operation.rollback) {
          this.aggregates.rollbackActionCount++;
        }
        if (operation.optimisticRenderTime != null) {
          this.aggregates.totalOptimisticRenderTime +=
            operation.optimisticRenderTime;
        }
        if (operation.serverRoundTripTime != null) {
          this.aggregates.totalServerRoundTripTime +=
            operation.serverRoundTripTime;
        }
        if (operation.perceivedSpeedup != null) {
          this.aggregates.totalPerceivedSpeedup += operation.perceivedSpeedup;
        }
        if (operation.optimisticObjectsAffected != null) {
          this.aggregates.totalOptimisticObjectsAffected +=
            operation.optimisticObjectsAffected;
        }
        break;

      case "action-validation":
        this.aggregates.validationCount++;
        if (operation.responseTime != null) {
          this.aggregates.totalValidationTime += operation.responseTime;
        }
        break;
    }
  }

  private calculateRates(): MetricRates {
    const total = this.aggregates.cacheHits + this.aggregates.cacheMisses;
    const totalRequests = total + this.aggregates.deduplications;
    const actionCount = this.aggregates.actionCount;
    const optimisticActionCount = this.aggregates.optimisticActionCount;
    const averageValidationTime = this.aggregates.validationCount > 0
      ? this.aggregates.totalValidationTime / this.aggregates.validationCount
      : 0;
    const averageServerRoundTripTime = actionCount > 0
      ? this.aggregates.totalServerRoundTripTime / actionCount
      : 0;

    return {
      cacheHitRate: total > 0 ? this.aggregates.cacheHits / total : 0,
      deduplicationRate: totalRequests > 0
        ? this.aggregates.deduplications / totalRequests
        : 0,
      optimisticUpdateRate: totalRequests > 0
        ? this.aggregates.optimisticUpdates / totalRequests
        : 0,
      averageResponseTime: total > 0
        ? this.aggregates.totalResponseTime / total
        : 0,
      averageCachedResponseTime: this.aggregates.cacheHits > 0
        ? this.aggregates.cachedResponseTime / this.aggregates.cacheHits
        : 0,
      optimisticActionCoverage: actionCount > 0
        ? optimisticActionCount / actionCount
        : 0,
      configuredOptimisticActionRate: actionCount > 0
        ? this.aggregates.configuredOptimisticActionCount / actionCount
        : 0,
      rollbackRate: actionCount > 0
        ? this.aggregates.rollbackActionCount / actionCount
        : 0,
      averageOptimisticRenderTime: optimisticActionCount > 0
        ? this.aggregates.totalOptimisticRenderTime / optimisticActionCount
        : 0,
      averageServerRoundTripTime,
      averagePerceivedSpeedup: optimisticActionCount > 0
        ? this.aggregates.totalPerceivedSpeedup / optimisticActionCount
        : 0,
      averageValidationTime,
      validationTimeSaved: Math.max(
        0,
        averageServerRoundTripTime - averageValidationTime,
      ),
    };
  }

  private updateTimeSeries(): void {
    const now = Date.now();
    const currentSecond = Math.floor(now / 1000) * 1000;

    const lastTimestamp =
      this.timeSeries.timestamps[this.timeSeries.timestamps.length - 1];
    if (lastTimestamp === currentSecond) {
      return;
    }

    if (this.timeSeries.timestamps.length >= this.timeSeriesSize) {
      this.timeSeries.timestamps.shift();
      this.timeSeries.cacheHits.shift();
      this.timeSeries.cacheMisses.shift();
      this.timeSeries.deduplications.shift();
    }

    const recentOps = this.operations.getLast(100);
    let cacheHits = 0;
    let cacheMisses = 0;
    let deduplications = 0;

    for (const op of recentOps) {
      if (
        op.timestamp >= currentSecond - 1000 && op.timestamp < currentSecond
      ) {
        switch (op.type) {
          case "cache-hit":
            cacheHits++;
            break;
          case "cache-miss":
            cacheMisses++;
            break;
          case "deduplication":
            deduplications++;
            break;
        }
      }
    }

    this.timeSeries.timestamps.push(currentSecond);
    this.timeSeries.cacheHits.push(cacheHits);
    this.timeSeries.cacheMisses.push(cacheMisses);
    this.timeSeries.deduplications.push(deduplications);

    this.lastSnapshot = null;
    this.notifySubscribers();
  }

  /**
   * Calculates average network response time from recent cache misses.
   * Uses historical data instead of random estimates for accuracy.
   */
  private calculateAverageNetworkTime(): number {
    const recentMisses = this.operations.getLast(100)
      .filter(op => op.type === "cache-miss" && op.responseTime != null);

    if (recentMisses.length === 0) {
      return 100; // Fallback: 100ms if no historical data
    }

    const totalTime = recentMisses.reduce(
      (sum, op) => sum + (op.responseTime ?? 0),
      0,
    );
    return totalTime / recentMisses.length;
  }

  /**
   * Estimates network time using historical averages instead of random values.
   * More accurate than the previous random estimation.
   */
  private estimateNetworkTime(_signature: string): number {
    return this.calculateAverageNetworkTime();
  }

  /**
   * Calculates average bytes per object from recent operations.
   * Uses actual object counts and historical data.
   */
  private calculateAverageBytesPerObject(): number {
    const recentMisses = this.operations.getLast(100)
      .filter(
        op =>
          op.type === "cache-miss"
          && op.objectCount != null
          && op.objectCount > 0,
      );

    if (recentMisses.length === 0) {
      return 1024; // Fallback: 1KB per object
    }

    // Estimate based on typical object sizes
    // Average 1KB per object is a reasonable estimate for JSON objects
    const avgObjectCount = recentMisses.reduce(
      (sum, op) => sum + (op.objectCount ?? 0),
      0,
    ) / recentMisses.length;

    return avgObjectCount * 1024; // 1KB per object
  }

  /**
   * Estimates bytes using historical averages instead of signature length.
   * More meaningful correlation with actual data.
   */
  private estimateBytes(_signature: string): number {
    return this.calculateAverageBytesPerObject();
  }

  private notifySubscribers(): void {
    this.subscribers.forEach((callback) => callback());
  }

  /**
   * Record an action error for debugging purposes.
   * Stores up to 100 most recent action errors.
   */
  recordActionError(error: ActionError): void {
    this.actionErrors.push(error);

    // Keep only the most recent 100 errors
    if (this.actionErrors.length > 100) {
      this.actionErrors.shift();
    }

    this.notifySubscribers();
  }

  /**
   * Get all action errors for the Errors & Warnings tab.
   * Returns errors in reverse chronological order (newest first).
   */
  getActionErrors(): ActionError[] {
    return [...this.actionErrors].reverse();
  }

  /**
   * Get cache hit rate for the Components tab metrics.
   */
  getCacheHitRate(): number {
    const total = this.aggregates.cacheHits + this.aggregates.cacheMisses;
    return total > 0 ? this.aggregates.cacheHits / total : 0;
  }
}
