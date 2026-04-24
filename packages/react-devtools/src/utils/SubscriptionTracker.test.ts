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
import { SubscriptionTracker } from "./SubscriptionTracker.js";

describe("SubscriptionTracker", () => {
  let tracker: SubscriptionTracker;

  beforeEach(() => {
    vi.useFakeTimers();
    tracker = new SubscriptionTracker(10);
  });

  it("startSubscription returns unique IDs", () => {
    const id1 = tracker.startSubscription("sig-a");
    const id2 = tracker.startSubscription("sig-b");

    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^sub-\d+$/);
    expect(id2).toMatch(/^sub-\d+$/);
  });

  it("getActiveSubscriptions returns only non-ended subs", () => {
    const id1 = tracker.startSubscription("sig-a");
    tracker.startSubscription("sig-b");

    tracker.endSubscription(id1);

    const active = tracker.getActiveSubscriptions();
    expect(active).toHaveLength(1);
    expect(active[0].signature).toBe("sig-b");
  });

  it("recordEmission tracks emissions on the subscription", () => {
    const id = tracker.startSubscription("sig-a");

    tracker.recordEmission(id, "loading", false, false, undefined, 1000);
    tracker.recordEmission(id, "loaded", true, false, undefined, 1050);

    const analysis = tracker.analyzeEmissions(id);
    if (analysis == null) throw new Error("expected analysis to be defined");
    expect(analysis.emissionCount).toBe(2);
  });

  it("recordEmission ignores invalid status values", () => {
    const id = tracker.startSubscription("sig-a");

    tracker.recordEmission(id, "bogus-status", false, false, undefined, 1000);

    const analysis = tracker.analyzeEmissions(id);
    expect(analysis).toBeNull();
  });

  it("analyzeEmissions detects cache hit (fast loaded)", () => {
    vi.setSystemTime(1000);
    const id = tracker.startSubscription("sig-a");

    tracker.recordEmission(id, "loaded", true, false, undefined, 1002);

    const analysis = tracker.analyzeEmissions(id);
    if (analysis == null) throw new Error("expected analysis to be defined");
    expect(analysis.wasCached).toBe(true);
    expect(analysis.loadTime).toBeLessThan(10);
  });

  it("analyzeEmissions detects cache miss (slow loaded)", () => {
    vi.setSystemTime(1000);
    const id = tracker.startSubscription("sig-a");

    tracker.recordEmission(id, "loading", false, false, undefined, 1010);
    tracker.recordEmission(id, "loaded", true, false, undefined, 1200);

    const analysis = tracker.analyzeEmissions(id);
    if (analysis == null) throw new Error("expected analysis to be defined");
    expect(analysis.wasCached).toBe(false);
    expect(analysis.loadTime).toBeGreaterThan(10);
  });

  it("analyzeEmissions detects optimistic updates", () => {
    vi.setSystemTime(1000);
    const id = tracker.startSubscription("sig-a");

    tracker.recordEmission(id, "loaded", true, true, "opt-1", 1005);
    tracker.recordEmission(id, "loaded", true, false, undefined, 1100);

    const analysis = tracker.analyzeEmissions(id);
    if (analysis == null) throw new Error("expected analysis to be defined");
    expect(analysis.wasOptimistic).toBe(true);
    expect(analysis.firstOptimisticTimestamp).toBe(1005);
  });

  it("isDeduplicatedSubscription detects deduplication", () => {
    expect(tracker.isDeduplicatedSubscription("sig-a")).toBe(false);

    tracker.startSubscription("sig-a");
    expect(tracker.isDeduplicatedSubscription("sig-a")).toBe(true);
  });

  it("getSharedSubscriptionCount returns correct count", () => {
    expect(tracker.getSharedSubscriptionCount("sig-a")).toBe(0);

    tracker.startSubscription("sig-a");
    expect(tracker.getSharedSubscriptionCount("sig-a")).toBe(1);

    tracker.startSubscription("sig-a");
    expect(tracker.getSharedSubscriptionCount("sig-a")).toBe(2);
  });

  it("endSubscription removes from signature tracking", () => {
    const id = tracker.startSubscription("sig-a");
    expect(tracker.getSharedSubscriptionCount("sig-a")).toBe(1);

    tracker.endSubscription(id);
    expect(tracker.getSharedSubscriptionCount("sig-a")).toBe(0);
  });

  it("cleanup removes old ended subscriptions", () => {
    vi.setSystemTime(1000);
    const id = tracker.startSubscription("sig-a");
    tracker.endSubscription(id);

    vi.advanceTimersByTime(6 * 60 * 1000);

    tracker.cleanup();

    const analysis = tracker.analyzeEmissions(id);
    expect(analysis).toBeNull();
  });

  it("cleanup does not remove active subscriptions", () => {
    vi.setSystemTime(1000);
    const id = tracker.startSubscription("sig-a");
    tracker.recordEmission(id, "loaded", true, false, undefined, 1005);

    vi.advanceTimersByTime(6 * 60 * 1000);

    tracker.cleanup();

    const analysis = tracker.analyzeEmissions(id);
    expect(analysis).not.toBeNull();
  });

  it("analyzeEmissions returns null for unknown subscription", () => {
    const analysis = tracker.analyzeEmissions("nonexistent");
    expect(analysis).toBeNull();
  });
});
