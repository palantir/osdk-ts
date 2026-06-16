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

export class SubscriptionTracker {
  private subscriptions = new Map<string, SubscriptionMetadata>();
  private signatureToSubscriptions = new Map<string, Set<string>>();
  private nextSubscriptionId = 0;

  constructor(
    private readonly cacheThresholdMs: number = 10,
  ) {}

  startSubscription(signature: string): string {
    const subscriptionId = `sub-${this.nextSubscriptionId++}`;

    const metadata: SubscriptionMetadata = {
      signature,
      subscribeTime: Date.now(),
      emissions: [],
    };

    this.subscriptions.set(subscriptionId, metadata);

    if (!this.signatureToSubscriptions.has(signature)) {
      this.signatureToSubscriptions.set(signature, new Set());
    }
    const subs = this.signatureToSubscriptions.get(signature);
    if (subs) {
      subs.add(subscriptionId);
    }

    return subscriptionId;
  }

  recordEmission(
    subscriptionId: string,
    status: string,
    hasData: boolean,
    isOptimistic: boolean,
    optimisticId?: string | number,
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

  private isValidStatus(status: string): status is EmissionStatus {
    return (
      status === "init"
      || status === "loading"
      || status === "loaded"
      || status === "error"
    );
  }

  endSubscription(subscriptionId: string): void {
    const metadata = this.subscriptions.get(subscriptionId);
    if (!metadata) return;

    metadata.unsubscribeTime = Date.now();

    const subs = this.signatureToSubscriptions.get(metadata.signature);
    if (subs) {
      subs.delete(subscriptionId);
      if (subs.size === 0) {
        this.signatureToSubscriptions.delete(metadata.signature);
      }
    }
  }

  analyzeEmissions(subscriptionId: string): EmissionAnalysis | null {
    const metadata = this.subscriptions.get(subscriptionId);
    if (!metadata || metadata.emissions.length === 0) {
      return null;
    }

    const emissions = metadata.emissions;

    let wasCached = false;
    let wasOptimistic = false;
    let loadTime: number | undefined;
    let firstOptimisticTimestamp: number | undefined;
    let lastOptimisticTimestamp: number | undefined;
    let firstNonOptimisticAfterOptimisticTimestamp: number | undefined;

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

    const subscribeTime = metadata.subscribeTime;
    const firstEmission = emissions[0];
    const loadedEmission = emissions.find(e => e.status === "loaded");

    if (loadedEmission) {
      loadTime = loadedEmission.timestamp - subscribeTime;

      if (
        firstEmission.status === "loaded" && loadTime < this.cacheThresholdMs
      ) {
        wasCached = true;
      } else {
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

  getSharedSubscriptionCount(signature: string): number {
    return this.signatureToSubscriptions.get(signature)?.size ?? 0;
  }

  isDeduplicatedSubscription(signature: string): boolean {
    return (this.signatureToSubscriptions.get(signature)?.size ?? 0) > 0;
  }

  getActiveSubscriptions(): SubscriptionMetadata[] {
    return Array.from(this.subscriptions.values())
      .filter(s => s.unsubscribeTime === undefined);
  }

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
