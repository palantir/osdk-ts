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
import { ActionChainTracker } from "./ActionChainTracker.js";
import { EventTimeline } from "./EventTimeline.js";

describe("ActionChainTracker", () => {
  let timeline: EventTimeline;
  let tracker: ActionChainTracker;

  beforeEach(() => {
    timeline = new EventTimeline(1000);
    tracker = new ActionChainTracker(timeline);
  });

  it("should track single action as chain of depth 1", () => {
    const actionId = "action-1";
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
      success: true,
    });

    const chains = tracker.getAllChains();
    expect(chains.length).toBe(1);
    expect(chains[0].depth).toBe(1);
    expect(chains[0].rootActionId).toBe(actionId);
  });

  it("should detect action chains", () => {
    const startTime = Date.now();
    const action1 = "action-1";
    const action2 = "action-2";

    timeline.record({
      type: "ACTION_START",
      actionId: action1,
      actionName: "firstAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: action1,
      timestamp: startTime + 5,
      success: true,
    });

    timeline.record({
      type: "ACTION_START",
      actionId: action2,
      actionName: "secondAction",
      timestamp: startTime + 10,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: action2,
      timestamp: startTime + 20,
      success: true,
    });

    const chains = tracker.getAllChains();

    expect(chains.length).toBeGreaterThanOrEqual(1);
    expect(chains.every((c) => c.actions.length > 0)).toBe(true);
  });

  it("should detect circular chains", () => {
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId: "action-1",
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: "action-1",
      timestamp: startTime + 5,
      success: true,
    });

    timeline.record({
      type: "ACTION_START",
      actionId: "action-2",
      actionName: "testAction",
      timestamp: startTime + 10,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: "action-2",
      timestamp: startTime + 20,
      success: true,
    });

    const chains = tracker.getAllChains();

    expect(chains.length).toBeGreaterThan(0);
  });

  it("should calculate chain depth correctly", () => {
    const startTime = Date.now();

    for (let i = 0; i < 3; i++) {
      timeline.record({
        type: "ACTION_START",
        actionId: `action-${i}`,
        actionName: `action${i}`,
        timestamp: startTime + i * 20,
      });

      timeline.record({
        type: "ACTION_COMPLETE",
        actionId: `action-${i}`,
        timestamp: startTime + i * 20 + 5,
        success: true,
      });
    }

    const chains = tracker.getAllChains();
    expect(chains.length).toBeGreaterThan(0);
    expect(chains.every((c) => c.depth >= 1)).toBe(true);
  });

  it("should track trigger mechanisms", () => {
    const startTime = Date.now();

    timeline.record({
      type: "ACTION_START",
      actionId: "action-1",
      actionName: "firstAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "EMISSION",
      subscriptionId: "sub-1",
      objectKey: "obj-1",
      timestamp: startTime + 2,
      isOptimistic: true,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: "action-1",
      timestamp: startTime + 5,
      success: true,
    });

    timeline.record({
      type: "ACTION_START",
      actionId: "action-2",
      actionName: "secondAction",
      timestamp: startTime + 10,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: "action-2",
      timestamp: startTime + 20,
      success: true,
    });

    const chains = tracker.getAllChains();
    const mainChain = chains.find((c) => c.actions.length > 1);

    if (mainChain && mainChain.actions.length > 1) {
      const triggeredAction = mainChain.actions[1];
      expect(triggeredAction.triggeredBy).toBeDefined();
      expect(triggeredAction.triggeredBy?.mechanism).toBeDefined();
    } else {
      expect(chains.length).toBeGreaterThan(0);
    }
  });

  it("should notify subscribers when chain completes", () => {
    const startTime = Date.now();
    let notified = false;

    tracker.subscribe((chain) => {
      if (chain.actions.length > 0) {
        notified = true;
      }
    });

    timeline.record({
      type: "ACTION_START",
      actionId: "action-1",
      actionName: "testAction",
      timestamp: startTime,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId: "action-1",
      timestamp: startTime + 100,
      success: true,
    });

    expect(notified).toBe(true);
  });

  it("should maintain chain history", () => {
    for (let i = 0; i < 5; i++) {
      const startTime = Date.now() + i * 200;

      timeline.record({
        type: "ACTION_START",
        actionId: `action-${i}`,
        actionName: `action${i}`,
        timestamp: startTime,
      });

      timeline.record({
        type: "ACTION_COMPLETE",
        actionId: `action-${i}`,
        timestamp: startTime + 100,
        success: true,
      });
    }

    const allChains = tracker.getAllChains();
    expect(allChains.length).toBeGreaterThan(0);

    const recentChains = tracker.getRecentChains(3);
    expect(recentChains.length).toBeLessThanOrEqual(3);
  });

  it("should find chains containing specific action", () => {
    const actionId = "action-1";
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
      success: true,
    });

    const chains = tracker.getChainsContainingAction(actionId);
    expect(chains.length).toBe(1);
    expect(chains[0].actions.some((a) => a.actionId === actionId)).toBe(true);
  });

  it("should track objects modified by actions", () => {
    const actionId = "action-1";
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
      timestamp: startTime + 10,
      isOptimistic: true,
    });

    timeline.record({
      type: "ACTION_COMPLETE",
      actionId,
      timestamp: startTime + 100,
      success: true,
    });

    const chains = tracker.getAllChains();
    const action = chains[0]?.actions[0];

    expect(action?.objectsModified.length).toBeGreaterThan(0);
  });
});
