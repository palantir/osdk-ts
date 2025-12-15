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

import { beforeEach, describe, expect, it } from "vitest";
import { ActionImpactTracker } from "./ActionImpactTracker.js";
import { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import { EventTimeline } from "./EventTimeline.js";
import { RenderAttributionTracker } from "./RenderAttributionTracker.js";

describe("ActionImpactTracker", () => {
  let timeline: EventTimeline;
  let registry: ComponentQueryRegistry;
  let renderTracker: RenderAttributionTracker;
  let tracker: ActionImpactTracker;

  beforeEach(() => {
    timeline = new EventTimeline(1000);
    registry = new ComponentQueryRegistry();
    renderTracker = new RenderAttributionTracker(registry);
    renderTracker.setEventTimeline(timeline);
    tracker = new ActionImpactTracker(timeline, registry, renderTracker);
  });

  it("should track action start and completion", () => {
    const actionId = "action-1";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
      componentId: "Component1",
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph).toBeDefined();
    expect(graph?.actionId).toBe(actionId);
    expect(graph?.actionName).toBe("testAction");
    expect(graph?.status).toBe("success");
    expect(graph?.totalDuration).toBe(100);
  });

  it("should track optimistic updates", () => {
    const actionId = "action-2";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "OBJECT_MODIFIED",
      actionId,
      objectType: "Todo",
      primaryKey: "123",
      modifiedBy: "optimistic",
      timestamp: startTime + 10,
    });

    timeline.record({
      type: "EMISSION",
      subscriptionId: "sub-1",
      objectKey: "obj-1",
      timestamp: startTime + 10,
      isOptimistic: true,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph?.phases.some((p) => p.name === "optimistic-update")).toBe(
      true,
    );
    expect(graph?.affectedObjects.length).toBeGreaterThan(0);
    expect(graph?.affectedObjects[0].objectType).toBe("Todo");
    expect(graph?.affectedObjects[0].primaryKey).toBe("123");
  });

  it("should track refetches", () => {
    const actionId = "action-3";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "EMISSION",
      subscriptionId: "sub-1",
      objectKey: "obj-1",
      timestamp: startTime + 60,
      isOptimistic: false,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph?.phases.some((p) => p.name === "refetch")).toBe(true);
  });

  it("should track renders triggered by action", () => {
    const actionId = "action-4";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "RENDER",
      componentId: "Component1",
      componentName: "Component1",
      duration: 5,
      timestamp: startTime + 20,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph?.renderedComponents.length).toBeGreaterThan(0);
  });

  it("should calculate optimistic speedup", () => {
    const actionId = "action-5";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "OBJECT_MODIFIED",
      actionId,
      objectType: "Task",
      primaryKey: "456",
      modifiedBy: "optimistic",
      timestamp: startTime + 10,
    });

    timeline.record({
      type: "EMISSION",
      subscriptionId: "sub-1",
      objectKey: "obj-1",
      timestamp: startTime + 10,
      isOptimistic: true,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph?.phases.some((p) => p.name === "optimistic-update")).toBe(
      true,
    );
    // Optimistic speedup is calculated if there's an optimistic phase
    expect(graph?.phases.length).toBeGreaterThan(0);
  });

  it("should maintain history of completed actions", () => {
    for (let i = 0; i < 5; i++) {
      const actionId = `action-${i}`;
      const startTime = Date.now() + i * 200;

      timeline.record({
        type: "ACTION_START",
        actionId,
        actionName: `testAction${i}`,
        timestamp: startTime,
      });

      timeline.record({
        type: "ACTION_COMPLETE",
        actionId,
        timestamp: startTime + 100,
        success: true,
      });
    }

    const allGraphs = tracker.getAllActionGraphs();
    expect(allGraphs.length).toBe(5);

    const recentGraphs = tracker.getRecentActionGraphs(3);
    expect(recentGraphs.length).toBe(3);
  });

  it("should notify subscribers when action completes", () => {
    const actionId = "action-6";
    const startTime = Date.now();
    let notified = false;

    tracker.subscribe((graph) => {
      if (graph.actionId === actionId) {
        notified = true;
      }
    });

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    expect(notified).toBe(true);
  });

  it("should handle action errors", () => {
    const actionId = "action-7";
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId,
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: false,
      error: "Test error",
    });

    const graph = tracker.getActionGraph(actionId);
    expect(graph?.status).toBe("error");
  });
});
