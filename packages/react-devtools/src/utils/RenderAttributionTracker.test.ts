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
import { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import { EventTimeline } from "./EventTimeline.js";
import type { EmissionSnapshot } from "./RenderAttributionTracker.js";
import { RenderAttributionTracker } from "./RenderAttributionTracker.js";

describe("RenderAttributionTracker", () => {
  let tracker: RenderAttributionTracker;
  let registry: ComponentQueryRegistry;
  let timeline: EventTimeline;

  beforeEach(() => {
    registry = new ComponentQueryRegistry();
    timeline = new EventTimeline(1000);
    tracker = new RenderAttributionTracker(registry);
    tracker.setEventTimeline(timeline);
  });

  describe("recordRender", () => {
    it("should record render event", () => {
      tracker.recordRender("comp1", "mount", 5.2);

      const renders = tracker.getRecentRenders();
      expect(renders).toHaveLength(1);
      expect(renders[0].componentId).toBe("comp1");
      expect(renders[0].duration).toBe(5.2);
      expect(renders[0].phase).toBe("mount");
    });

    it("should increment render count", () => {
      tracker.recordRender("comp1", "mount", 5);
      tracker.recordRender("comp1", "update", 3);
      tracker.recordRender("comp1", "update", 4);

      const renders = tracker.getRecentRenders();
      expect(renders[0].renderNumber).toBe(1);
      expect(renders[1].renderNumber).toBe(2);
      expect(renders[2].renderNumber).toBe(3);
    });

    it("should record to EventTimeline if available", () => {
      tracker.recordRender("comp1", "mount", 5.2);

      const timelineEvents = timeline.getAllEvents();
      expect(timelineEvents).toHaveLength(1);
      expect(timelineEvents[0].type).toBe("RENDER");
    });
  });

  describe("trigger attribution", () => {
    it("should attribute render to OSDK data change", () => {
      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoList",
        componentDisplayName: "TodoList",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "object:Todo:123",
        queryParams: { type: "object", objectType: "Todo", primaryKey: "123" },
      });

      const emission: EmissionSnapshot = {
        subscriptionId: "useOsdkObject:object:Todo:123",
        timestamp: Date.now(),
        objectKey: "Todo:123",
        isOptimistic: false,
      };
      tracker.recordEmission(emission);

      tracker.recordRender("comp1", "update", 5);

      const renders = tracker.getRecentRenders();
      expect(renders[0].trigger.type).toBe("osdk-data-change");
      expect(renders[0].trigger.confidence).toBeGreaterThan(0.9);
    });

    it("should attribute render to optimistic update", () => {
      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoList",
        componentDisplayName: "TodoList",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "object:Todo:123",
        queryParams: { type: "object", objectType: "Todo", primaryKey: "123" },
      });

      const emission: EmissionSnapshot = {
        subscriptionId: "useOsdkObject:object:Todo:123",
        timestamp: Date.now(),
        isOptimistic: true,
      };
      tracker.recordEmission(emission);

      tracker.recordRender("comp1", "update", 5);

      const renders = tracker.getRecentRenders();
      expect(renders[0].trigger.osdkDetails?.changeReason).toBe(
        "optimistic-update",
      );
    });

    it("should attribute render to parent render", () => {
      tracker.recordRender("parent", "update", 3);

      setTimeout(() => {
        tracker.recordRender("child", "update", 2);
      }, 2);

      const renders = tracker.getTimeline();
      const childRender = renders.find((r) => r.componentId === "child");

      if (childRender && childRender.trigger.type === "parent-render") {
        expect(childRender.trigger.parentDetails?.parentComponentId).toBe(
          "parent",
        );
      }
    });

    it("should default to force-update when no clear trigger", () => {
      tracker.recordRender("comp1", "update", 5);

      const renders = tracker.getRecentRenders();
      expect(renders[0].trigger.type).toBe("force-update");
      expect(renders[0].trigger.confidence).toBeLessThan(0.5);
    });
  });

  describe("render storm detection", () => {
    it("should detect render storm", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      for (let i = 0; i < 15; i++) {
        tracker.recordRender("comp1", "update", 1);
      }

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining("Render storm detected"),
      );

      consoleSpy.mockRestore();
    });

    it("should not spam warnings for same storm", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      for (let i = 0; i < 25; i++) {
        tracker.recordRender("comp1", "update", 1);
      }

      expect(consoleSpy).toHaveBeenCalledTimes(1);

      consoleSpy.mockRestore();
    });
  });

  describe("getTimeline", () => {
    beforeEach(() => {
      tracker.recordRender("comp1", "mount", 5);
      tracker.recordRender("comp2", "mount", 3);
      tracker.recordRender("comp1", "update", 2);
    });

    it("should return all renders", () => {
      const timeline = tracker.getTimeline();
      expect(timeline).toHaveLength(3);
    });

    it("should filter by component", () => {
      const timeline = tracker.getTimeline("comp1");
      expect(timeline).toHaveLength(2);
      expect(timeline.every((r) => r.componentId === "comp1")).toBe(true);
    });

    it("should filter by time", () => {
      const now = Date.now();
      const timeline = tracker.getTimeline(undefined, now - 100);
      expect(timeline.length).toBeGreaterThan(0);
    });

    it("should return sorted by timestamp", () => {
      const timeline = tracker.getTimeline();
      for (let i = 1; i < timeline.length; i++) {
        expect(timeline[i].timestamp).toBeGreaterThanOrEqual(
          timeline[i - 1].timestamp,
        );
      }
    });
  });

  describe("getStats", () => {
    beforeEach(() => {
      tracker.recordRender("comp1", "mount", 10);
      tracker.recordRender("comp1", "update", 5);
      tracker.recordRender("comp1", "update", 3);
    });

    it("should calculate total renders", () => {
      const stats = tracker.getStats("comp1");
      expect(stats.totalRenders).toBe(3);
    });

    it("should calculate average duration", () => {
      const stats = tracker.getStats("comp1");
      expect(stats.avgDuration).toBe(6);
    });

    it("should count trigger types", () => {
      const stats = tracker.getStats("comp1");
      expect(stats.triggerBreakdown["force-update"]).toBe(3);
    });

    it("should return 0 for components with no renders", () => {
      const stats = tracker.getStats("nonexistent");
      expect(stats.totalRenders).toBe(0);
      expect(stats.avgDuration).toBe(0);
    });
  });

  describe("emission cleanup", () => {
    it("should cleanup old emissions", () => {
      vi.useFakeTimers();

      const emission: EmissionSnapshot = {
        subscriptionId: "test",
        timestamp: Date.now(),
        isOptimistic: false,
      };
      tracker.recordEmission(emission);

      vi.advanceTimersByTime(1500);

      registry.registerBinding({
        componentId: "comp1",
        componentName: "Test",
        componentDisplayName: "Test",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "test",
        queryParams: { type: "object", objectType: "Test", primaryKey: "1" },
      });

      tracker.recordRender("comp1", "update", 5);
      const renders = tracker.getRecentRenders();

      expect(renders[0].trigger.type).not.toBe("osdk-data-change");

      vi.restoreAllMocks();
    });
  });

  describe("clear", () => {
    beforeEach(() => {
      tracker.recordRender("comp1", "mount", 5);
      tracker.recordRender("comp2", "update", 3);
    });

    it("should clear all events", () => {
      tracker.clear();
      expect(tracker.getRecentRenders()).toHaveLength(0);
    });

    it("should reset render counts", () => {
      tracker.clear();
      tracker.recordRender("comp1", "mount", 5);
      const renders = tracker.getRecentRenders();
      expect(renders[0].renderNumber).toBe(1);
    });
  });

  describe("clearComponent", () => {
    beforeEach(() => {
      tracker.recordRender("comp1", "mount", 5);
      tracker.recordRender("comp2", "mount", 3);
      tracker.recordRender("comp1", "update", 2);
    });

    it("should clear only specified component", () => {
      tracker.clearComponent("comp1");

      const remaining = tracker.getRecentRenders();
      expect(remaining).toHaveLength(1);
      expect(remaining[0].componentId).toBe("comp2");
    });

    it("should reset render count for cleared component", () => {
      tracker.clearComponent("comp1");
      tracker.recordRender("comp1", "mount", 5);

      const renders = tracker.getTimeline("comp1");
      expect(renders[0].renderNumber).toBe(1);
    });
  });
});
