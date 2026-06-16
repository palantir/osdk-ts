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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MetricsStore } from "../store/MetricsStore.js";
import { ActionLifecycleTracker } from "./ActionLifecycleTracker.js";
import type { EventTimeline } from "./EventTimeline.js";

function createMockMetricsStore(): MetricsStore {
  return {
    recordActionLifecycle: vi.fn(),
    recordCacheHit: vi.fn(),
    recordCacheMiss: vi.fn(),
    recordDeduplication: vi.fn(),
    recordOptimisticUpdate: vi.fn(),
    recordActionValidation: vi.fn(),
    recordActionError: vi.fn(),
    getSnapshot: vi.fn(),
    getActionErrors: vi.fn(),
    getCacheHitRate: vi.fn(),
    subscribe: vi.fn(),
    reset: vi.fn(),
    dispose: vi.fn(),
  } as unknown as MetricsStore;
}

function createMockTimeline(): EventTimeline {
  return {
    record: vi.fn(),
    getEventsByType: vi.fn().mockReturnValue([]),
    getRecentEvents: vi.fn().mockReturnValue([]),
    clear: vi.fn(),
  } as unknown as EventTimeline;
}

describe("ActionLifecycleTracker", () => {
  let tracker: ActionLifecycleTracker;
  let metricsStore: MetricsStore;
  let timeline: EventTimeline;

  beforeEach(() => {
    vi.useFakeTimers();
    metricsStore = createMockMetricsStore();
    timeline = createMockTimeline();
    tracker = new ActionLifecycleTracker(metricsStore, timeline);
  });

  afterEach(() => {
    tracker.dispose();
    vi.useRealTimers();
  });

  it("starts an action and returns an id", () => {
    const id = tracker.startAction({
      signature: "action:createTodo",
      actionName: "createTodo",
      optimisticConfigured: false,
    });

    expect(id).toBeTruthy();
    expect(typeof id).toBe("string");
  });

  it("records timeline event on start", () => {
    tracker.startAction({
      signature: "action:createTodo",
      actionName: "createTodo",
      optimisticConfigured: false,
    });

    expect(timeline.record).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "ACTION_START",
        actionName: "createTodo",
      }),
    );
  });

  it("settles an action and records to metrics store", () => {
    const actionId = tracker.startAction({
      signature: "action:deleteTodo",
      actionName: "deleteTodo",
      optimisticConfigured: false,
    });

    tracker.markActionSettled({
      actionId,
      succeeded: true,
      completedAt: Date.now() + 200,
    });

    expect(metricsStore.recordActionLifecycle).toHaveBeenCalledWith(
      expect.objectContaining({
        signature: "action:deleteTodo",
        rollback: false,
      }),
    );
  });

  it("marks rollback when action fails", () => {
    const actionId = tracker.startAction({
      signature: "action:deleteTodo",
      optimisticConfigured: true,
    });

    tracker.markActionSettled({
      actionId,
      succeeded: false,
      completedAt: Date.now() + 100,
    });

    expect(metricsStore.recordActionLifecycle).toHaveBeenCalledWith(
      expect.objectContaining({ rollback: true }),
    );
  });

  it("tracks optimistic layers", () => {
    const actionId = tracker.startAction({
      signature: "action:updateTodo",
      optimisticConfigured: true,
    });

    tracker.registerOptimisticLayer(actionId, "layer-1");
    tracker.registerOptimisticLayer(actionId, "layer-2");

    tracker.handleLayerCleared("layer-1", Date.now() + 50);
    tracker.handleLayerCleared("layer-2", Date.now() + 100);

    tracker.markActionSettled({
      actionId,
      succeeded: true,
      completedAt: Date.now() + 200,
    });

    expect(metricsStore.recordActionLifecycle).toHaveBeenCalledWith(
      expect.objectContaining({
        optimisticLayerCount: 2,
        rollback: false,
      }),
    );
  });

  it("settling a non-existent action is a no-op", () => {
    tracker.markActionSettled({
      actionId: "does-not-exist",
      succeeded: true,
      completedAt: Date.now(),
    });

    expect(metricsStore.recordActionLifecycle).not.toHaveBeenCalled();
  });

  it("dispose clears all internal state", () => {
    tracker.startAction({
      signature: "action:test",
      optimisticConfigured: false,
    });

    tracker.dispose();

    tracker.markActionSettled({
      actionId: "anything",
      succeeded: true,
      completedAt: Date.now(),
    });
    expect(metricsStore.recordActionLifecycle).not.toHaveBeenCalled();
  });
});
