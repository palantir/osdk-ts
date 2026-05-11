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
import {
  type ActionCompleteEvent,
  type ActionStartEvent,
  type EmissionEvent,
  EventTimeline,
  type LinkTraversalEvent,
  type PropertyAccessEvent,
  type RenderEvent,
} from "./EventTimeline.js";

describe("EventTimeline", () => {
  let timeline: EventTimeline;

  beforeEach(() => {
    timeline = new EventTimeline(100);
  });

  describe("record", () => {
    it("should record render events", () => {
      const event: RenderEvent = {
        type: "RENDER",
        componentId: "comp1",
        componentName: "TodoList",
        duration: 5.2,
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record emission events", () => {
      const event: EmissionEvent = {
        type: "EMISSION",
        subscriptionId: "sub1",
        objectKey: "Todo:123",
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record action start events", () => {
      const event: ActionStartEvent = {
        type: "ACTION_START",
        actionId: "action1",
        actionName: "completeTodo",
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record action complete events", () => {
      const event: ActionCompleteEvent = {
        type: "ACTION_COMPLETE",
        actionId: "action1",
        timestamp: Date.now(),
        success: true,
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record property access events", () => {
      const event: PropertyAccessEvent = {
        type: "PROPERTY_ACCESS",
        componentId: "comp1",
        objectKey: "Todo:123",
        property: "title",
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record link traversal events", () => {
      const event: LinkTraversalEvent = {
        type: "LINK_TRAVERSAL",
        sourceKey: "Employee:456",
        linkName: "manager",
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(timeline.getSize()).toBe(1);
    });

    it("should record multiple events", () => {
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "TodoList",
        duration: 5,
        timestamp: Date.now(),
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: Date.now(),
      });
      timeline.record({
        type: "ACTION_START",
        actionId: "action1",
        actionName: "test",
        timestamp: Date.now(),
      });

      expect(timeline.getSize()).toBe(3);
    });
  });

  describe("getEventsByType", () => {
    beforeEach(() => {
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "TodoList",
        duration: 5,
        timestamp: 100,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 200,
      });
      timeline.record({
        type: "RENDER",
        componentId: "comp2",
        componentName: "TodoItem",
        duration: 3,
        timestamp: 300,
      });
    });

    it("should filter by RENDER type", () => {
      const renders = timeline.getEventsByType("RENDER");
      expect(renders).toHaveLength(2);
      expect(renders[0].componentId).toBe("comp1");
      expect(renders[1].componentId).toBe("comp2");
    });

    it("should filter by EMISSION type", () => {
      const emissions = timeline.getEventsByType("EMISSION");
      expect(emissions).toHaveLength(1);
      expect(emissions[0].subscriptionId).toBe("sub1");
    });

    it("should return empty array for unused type", () => {
      const actions = timeline.getEventsByType("ACTION_START");
      expect(actions).toHaveLength(0);
    });
  });

  describe("findEventsInWindow", () => {
    beforeEach(() => {
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 100,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 110,
      });
      timeline.record({
        type: "RENDER",
        componentId: "comp2",
        componentName: "Test2",
        duration: 3,
        timestamp: 150,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub2",
        timestamp: 200,
      });
    });

    it("should find events within time window", () => {
      const events = timeline.findEventsInWindow(110, 10);
      expect(events).toHaveLength(2); // Events at 100 and 110
    });

    it("should find events with type filter", () => {
      const emissions = timeline.findEventsInWindow(110, 100, "EMISSION");
      expect(emissions).toHaveLength(2);
      expect(emissions.every((e) => e.type === "EMISSION")).toBe(true);
    });

    it("should return empty for narrow window", () => {
      const events = timeline.findEventsInWindow(1000, 10);
      expect(events).toHaveLength(0);
    });
  });

  describe("findEventsBefore", () => {
    beforeEach(() => {
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 100,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub2",
        timestamp: 110,
      });
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 120,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub3",
        timestamp: 130,
      });
    });

    it("should find events before timestamp", () => {
      const events = timeline.findEventsBefore(120, 30);
      expect(events).toHaveLength(3); // Events at 100, 110, 120
    });

    it("should not include events after timestamp", () => {
      const events = timeline.findEventsBefore(120, 50);
      const timestamps = events.map((e) => e.timestamp);
      expect(timestamps.every((t) => t <= 120)).toBe(true);
    });

    it("should filter by type", () => {
      const emissions = timeline.findEventsBefore(120, 30, "EMISSION");
      expect(emissions).toHaveLength(2); // Events at 100, 110
    });
  });

  describe("findRenderTrigger", () => {
    it("should find emission that triggered render", () => {
      const emissionTime = 100;
      const renderTime = 110;

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: emissionTime,
      });

      const renderEvent: RenderEvent = {
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: renderTime,
      };
      timeline.record(renderEvent);

      const trigger = timeline.findRenderTrigger(renderEvent);
      expect(trigger).not.toBeNull();
      expect(trigger?.subscriptionId).toBe("sub1");
    });

    it("should return null if no emission within window", () => {
      const renderEvent: RenderEvent = {
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 1000,
      };
      timeline.record(renderEvent);

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 900, // More than 16ms before render
      });

      const trigger = timeline.findRenderTrigger(renderEvent);
      expect(trigger).toBeNull();
    });

    it("should return most recent emission", () => {
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 100,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub2",
        timestamp: 110,
      });

      const renderEvent: RenderEvent = {
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 115,
      };

      const trigger = timeline.findRenderTrigger(renderEvent);
      expect(trigger?.subscriptionId).toBe("sub2"); // Most recent
    });
  });

  describe("buildActionCausality", () => {
    it("should build complete action causality chain", () => {
      const actionId = "action1";

      timeline.record({
        type: "ACTION_START",
        actionId,
        actionName: "completeTodo",
        timestamp: 100,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 110,
        isOptimistic: true,
      });

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "TodoList",
        duration: 5,
        timestamp: 115,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub2",
        timestamp: 150,
        isOptimistic: false,
      });

      timeline.record({
        type: "ACTION_COMPLETE",
        actionId,
        timestamp: 200,
        success: true,
      });

      const causality = timeline.buildActionCausality(actionId);

      expect(causality.start.actionId).toBe(actionId);
      expect(causality.complete.actionId).toBe(actionId);
      expect(causality.optimisticUpdates).toHaveLength(1);
      expect(causality.refetches).toHaveLength(1);
      expect(causality.renders).toHaveLength(1);
      expect(causality.duration).toBe(100);
    });

    it("should throw error if action start not found", () => {
      expect(() => timeline.buildActionCausality("missing")).toThrow(
        "Action start event not found",
      );
    });

    it("should throw error if action complete not found", () => {
      timeline.record({
        type: "ACTION_START",
        actionId: "incomplete",
        actionName: "test",
        timestamp: 100,
      });

      expect(() => timeline.buildActionCausality("incomplete")).toThrow(
        "Action complete event not found",
      );
    });

    it("should separate optimistic updates from refetches", () => {
      const actionId = "action1";

      timeline.record({
        type: "ACTION_START",
        actionId,
        actionName: "test",
        timestamp: 100,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "optimistic",
        timestamp: 110,
        isOptimistic: true,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "refetch",
        timestamp: 120,
        isOptimistic: false,
      });

      timeline.record({
        type: "ACTION_COMPLETE",
        actionId,
        timestamp: 200,
        success: true,
      });

      const causality = timeline.buildActionCausality(actionId);

      expect(causality.optimisticUpdates[0].subscriptionId).toBe("optimistic");
      expect(causality.refetches[0].subscriptionId).toBe("refetch");
    });
  });

  describe("subscribe", () => {
    it("should notify subscribers of new events", () => {
      const callback = vi.fn();
      timeline.subscribe(callback);

      const event: RenderEvent = {
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: Date.now(),
      };

      timeline.record(event);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(event);
    });

    it("should support multiple subscribers", () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      timeline.subscribe(callback1);
      timeline.subscribe(callback2);

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: Date.now(),
      });

      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    });

    it("should allow unsubscribing", () => {
      const callback = vi.fn();
      const unsubscribe = timeline.subscribe(callback);

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: Date.now(),
      });
      expect(callback).toHaveBeenCalledTimes(1);

      unsubscribe();

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub2",
        timestamp: Date.now(),
      });
      expect(callback).toHaveBeenCalledTimes(1); // Still 1, not called again
    });

    it("should handle subscriber errors gracefully", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(
        () => {},
      );
      const failingCallback = vi.fn().mockImplementation(() => {
        throw new Error("Subscriber error");
      });
      const workingCallback = vi.fn();

      timeline.subscribe(failingCallback);
      timeline.subscribe(workingCallback);

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: Date.now(),
      });

      expect(failingCallback).toHaveBeenCalled();
      expect(workingCallback).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        "[EventTimeline] Subscriber error:",
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });
  });

  describe("getAllEvents", () => {
    it("should return all events in chronological order", () => {
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 100,
      });
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 200,
      });
      timeline.record({
        type: "ACTION_START",
        actionId: "action1",
        actionName: "test",
        timestamp: 300,
      });

      const events = timeline.getAllEvents();
      expect(events).toHaveLength(3);
      expect(events[0].timestamp).toBe(100);
      expect(events[1].timestamp).toBe(200);
      expect(events[2].timestamp).toBe(300);
    });
  });

  describe("getEventCounts", () => {
    it("should return counts by type", () => {
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 100,
      });
      timeline.record({
        type: "RENDER",
        componentId: "comp2",
        componentName: "Test2",
        duration: 3,
        timestamp: 200,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 300,
      });

      const counts = timeline.getEventCounts();
      expect(counts.get("RENDER")).toBe(2);
      expect(counts.get("EMISSION")).toBe(1);
    });
  });

  describe("clear", () => {
    it("should clear all events and indices", () => {
      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: 100,
      });
      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: 200,
      });

      expect(timeline.getSize()).toBe(2);

      timeline.clear();

      expect(timeline.getSize()).toBe(0);
      expect(timeline.getAllEvents()).toHaveLength(0);
      expect(timeline.getEventsByType("RENDER")).toHaveLength(0);
    });
  });

  describe("memory bounds", () => {
    it("should respect max events limit", () => {
      const smallTimeline = new EventTimeline(5);

      for (let i = 0; i < 10; i++) {
        smallTimeline.record({
          type: "EMISSION",
          subscriptionId: `sub${i}`,
          timestamp: i * 100,
        });
      }

      expect(smallTimeline.getSize()).toBe(5);
      const events = smallTimeline.getAllEvents();
      expect(events).toHaveLength(5);
      // Should have latest 5 events (5-9)
      expect(events[0].timestamp).toBe(500);
      expect(events[4].timestamp).toBe(900);
    });
  });
});
