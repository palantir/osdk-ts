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

import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { EventTimeline } from "../utils/EventTimeline.js";
import { useTimeline } from "./useTimeline.js";

describe("useTimeline", () => {
  let timeline: EventTimeline;

  beforeEach(() => {
    timeline = new EventTimeline(1000);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("basic functionality", () => {
    it("should return empty events when timeline is null", () => {
      const { result } = renderHook(() => useTimeline(null));

      expect(result.current.events).toEqual([]);
      expect(result.current.totalEvents).toBe(0);
    });

    it("should return all events within time window", () => {
      const now = Date.now();

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: now - 500,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: now - 300,
      });

      const { result } = renderHook(() =>
        useTimeline(timeline, { timeWindow: 1000 })
      );

      expect(result.current.events.length).toBe(2);
    });

    it("should filter out events outside time window", () => {
      const now = Date.now();

      timeline.record({
        type: "RENDER",
        componentId: "old",
        componentName: "Old",
        duration: 1,
        timestamp: now - 5000,
      });

      timeline.record({
        type: "RENDER",
        componentId: "recent",
        componentName: "Recent",
        duration: 1,
        timestamp: now - 500,
      });

      const { result } = renderHook(() =>
        useTimeline(timeline, { timeWindow: 1000 })
      );

      expect(result.current.events.length).toBe(1);
      expect(result.current.events[0].timestamp).toBe(now - 500);
    });
  });

  describe("event type filtering", () => {
    beforeEach(() => {
      const now = Date.now();

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: now,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: now,
      });

      timeline.record({
        type: "ACTION_START",
        actionId: "action1",
        actionName: "test",
        timestamp: now,
      });
    });

    it("should filter by event type", () => {
      const { result } = renderHook(() =>
        useTimeline(timeline, { eventTypes: ["RENDER"] })
      );

      expect(result.current.events.length).toBe(1);
      expect(result.current.events[0].type).toBe("RENDER");
    });

    it("should filter by multiple event types", () => {
      const { result } = renderHook(() =>
        useTimeline(timeline, { eventTypes: ["RENDER", "EMISSION"] })
      );

      expect(result.current.events.length).toBe(2);
    });

    it("should show all events when no filter specified", () => {
      const { result } = renderHook(() => useTimeline(timeline));

      expect(result.current.events.length).toBe(3);
    });
  });

  describe("auto refresh", () => {
    it("should not auto-refresh when disabled", () => {
      const { result } = renderHook(() =>
        useTimeline(timeline, { autoRefresh: false })
      );

      expect(result.current.events.length).toBe(0);

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: Date.now(),
      });

      vi.advanceTimersByTime(2000);

      expect(result.current.events.length).toBe(0);
    });
  });

  describe("manual refresh", () => {
    it("should refresh when refresh() is called", () => {
      const { result } = renderHook(() =>
        useTimeline(timeline, { autoRefresh: false })
      );

      expect(result.current.events.length).toBe(0);

      act(() => {
        timeline.record({
          type: "RENDER",
          componentId: "comp1",
          componentName: "Test",
          duration: 5,
          timestamp: Date.now(),
        });
      });

      expect(result.current.events.length).toBe(0);

      act(() => {
        result.current.refresh();
      });

      expect(result.current.events.length).toBe(1);
    });
  });

  describe("event counts", () => {
    it("should return event counts by type", () => {
      const now = Date.now();

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: now,
      });

      timeline.record({
        type: "RENDER",
        componentId: "comp2",
        componentName: "Test2",
        duration: 3,
        timestamp: now,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: now,
      });

      const { result } = renderHook(() => useTimeline(timeline));

      expect(result.current.eventCounts.get("RENDER")).toBe(2);
      expect(result.current.eventCounts.get("EMISSION")).toBe(1);
    });

    it("should return total event count", () => {
      const now = Date.now();

      timeline.record({
        type: "RENDER",
        componentId: "comp1",
        componentName: "Test",
        duration: 5,
        timestamp: now,
      });

      timeline.record({
        type: "EMISSION",
        subscriptionId: "sub1",
        timestamp: now,
      });

      const { result } = renderHook(() => useTimeline(timeline));

      expect(result.current.totalEvents).toBe(2);
    });
  });
});
