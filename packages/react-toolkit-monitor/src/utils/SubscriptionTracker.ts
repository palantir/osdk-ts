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
  EmissionAnalysis,
  EmissionRecord,
  EmissionStatus,
  SubscriptionMetadata,
} from "../types/emissions.js";

/**
 * Tracks active subscriptions and their emission patterns
 */
export class SubscriptionTracker {
  // Track subscriptions by their unique ID
  private subscriptions = new Map<string, SubscriptionMetadata>();

  // Track which subscriptions share the same query signature
  // This helps detect deduplication
  private signatureToSubscriptions = new Map<string, Set<string>>();

  // Counter for generating unique subscription IDs
  private nextSubscriptionId = 0;

  constructor(
    private readonly cacheThresholdMs: number = 10,
  ) {}

  /**
   * Start tracking a new subscription
   */
  startSubscription(signature: string): string {
    const subscriptionId = `sub-${this.nextSubscriptionId++}`;

    const metadata: SubscriptionMetadata = {
      signature,
      subscribeTime: Date.now(),
      emissions: [],
    };

    this.subscriptions.set(subscriptionId, metadata);

    // Track this subscription under its signature
    if (!this.signatureToSubscriptions.has(signature)) {
      this.signatureToSubscriptions.set(signature, new Set());
    }
    this.signatureToSubscriptions.get(signature)!.add(subscriptionId);

    return subscriptionId;
  }

  /**
   * Record an emission for a subscription
   */
  recordEmission(
    subscriptionId: string,
    status: string,
    hasData: boolean,
    isOptimistic: boolean,
    optimisticId?: unknown,
    timestamp: number = Date.now(),
  ): void {
    const metadata = this.subscriptions.get(subscriptionId);
    if (!metadata) return;

    if (!this.isValidStatus(status)) {
      return;
    }

    const emission: EmissionRecord = {
      timestamp,
      status,
      hasData,
      isOptimistic,
      optimisticId,
      sequenceNumber: metadata.emissions.length,
    };

    metadata.emissions.push(emission);
  }

  /**
   * Type guard for validating emission status
   */
  private isValidStatus(status: string): status is EmissionStatus {
    return (
      status === "init"
      || status === "loading"
      || status === "loaded"
      || status === "error"
    );
  }

  /**
   * Mark a subscription as ended
   */
  endSubscription(subscriptionId: string): void {
    const metadata = this.subscriptions.get(subscriptionId);
    if (!metadata) return;

    metadata.unsubscribeTime = Date.now();

    // Remove from signature tracking
    const subs = this.signatureToSubscriptions.get(metadata.signature);
    if (subs) {
      subs.delete(subscriptionId);
      if (subs.size === 0) {
        this.signatureToSubscriptions.delete(metadata.signature);
      }
    }

    // Keep the subscription data for analysis
    // Could implement cleanup after some time
  }

  /**
   * Analyze emission pattern to determine cache behavior
   */
  analyzeEmissions(subscriptionId: string): EmissionAnalysis | null {
    const metadata = this.subscriptions.get(subscriptionId);
    if (!metadata || metadata.emissions.length === 0) {
      return null;
    }

    const emissions = metadata.emissions;

    // Common patterns:
    // 1. Cache hit: init/loading → loaded (very fast, <50ms)
    // 2. Network fetch: init/loading → loaded (slower, >50ms)
    // 3. Optimistic: immediate data with isOptimistic flag

    let wasCached = false;
    let wasOptimistic = false;
    let loadTime: number | undefined;
    let firstOptimisticTimestamp: number | undefined;
    let lastOptimisticTimestamp: number | undefined;
    let firstNonOptimisticAfterOptimisticTimestamp: number | undefined;

    // Check for optimistic updates
    wasOptimistic = emissions.some(e => e.isOptimistic);
    if (wasOptimistic) {
      const optimisticEmissions = emissions.filter(e => e.isOptimistic);
      firstOptimisticTimestamp = optimisticEmissions[0]?.timestamp;
      lastOptimisticTimestamp =
        optimisticEmissions[optimisticEmissions.length - 1]
          ?.timestamp;
      firstNonOptimisticAfterOptimisticTimestamp = emissions.find((e) =>
        !e.isOptimistic
        && firstOptimisticTimestamp != null
        && e.timestamp >= firstOptimisticTimestamp
      )?.timestamp;
    }

    // Analyze load pattern
    const subscribeTime = metadata.subscribeTime;
    const firstEmission = emissions[0];
    const loadedEmission = emissions.find(e => e.status === "loaded");

    if (loadedEmission) {
      // Measure time from subscription to loaded data (not from first emission)
      loadTime = loadedEmission.timestamp - subscribeTime;

      // Cache hit detection:
      // Observable Client returns cached data synchronously or near-synchronously (0-10ms)
      // If first emission is "loading", it's definitely a network fetch
      // If first emission is "loaded" but took time, it's likely a sync network call or other operation

      if (
        firstEmission.status === "loaded" && loadTime < this.cacheThresholdMs
      ) {
        // First emission already loaded + arrived very quickly = cache hit
        wasCached = true;
      } else {
        // Everything else is a network fetch or non-cached operation
        // This includes:
        // - First emission is "loading" (network fetch)
        // - First emission is "loaded" but took > 10ms (suspicious, likely not cached)
        wasCached = false;
      }
    }

    return {
      wasCached,
      wasOptimistic,
      loadTime,
      emissionCount: emissions.length,
      firstOptimisticTimestamp,
      lastOptimisticTimestamp,
      firstNonOptimisticAfterOptimisticTimestamp,
    };
  }

  /**
   * Check if multiple subscriptions are sharing the same underlying query
   */
  getSharedSubscriptionCount(signature: string): number {
    return this.signatureToSubscriptions.get(signature)?.size ?? 0;
  }

  /**
   * Detect if a new subscription is deduplicated
   * (shares an existing active subscription)
   */
  isDeduplicatedSubscription(signature: string): boolean {
    const activeSubscriptions = this.signatureToSubscriptions.get(signature);
    // If there's already an active subscription with this signature,
    // the new one will be deduplicated
    return (activeSubscriptions?.size ?? 0) > 0;
  }

  /**
   * Get all active subscriptions for debugging
   */
  getActiveSubscriptions(): SubscriptionMetadata[] {
    return Array.from(this.subscriptions.values())
      .filter(s => s.unsubscribeTime === undefined);
  }

  /**
   * Clear old subscription data to prevent memory leaks
   */
  cleanup(maxAge: number = 5 * 60 * 1000): void {
    const now = Date.now();
    const toDelete: string[] = [];

    for (const [id, metadata] of this.subscriptions) {
      if (
        metadata.unsubscribeTime
        && now - metadata.unsubscribeTime > maxAge
      ) {
        toDelete.push(id);
      }
    }

    toDelete.forEach(id => this.subscriptions.delete(id));
  }
}
