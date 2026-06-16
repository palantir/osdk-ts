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

import { describe, expect, it, vi } from "vitest";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import { WaterfallDetector } from "./WaterfallDetector.js";

function createMockRegistry(
  components: Map<
    string,
    Array<
      {
        hookType: string;
        queryParams: Record<string, unknown>;
        querySignature: string;
      }
    >
  > = new Map(),
): ComponentQueryRegistry {
  return {
    getActiveComponents: vi.fn().mockReturnValue(components),
    getComponentBindings: vi.fn().mockImplementation((id: string) => {
      return components.get(id) ?? [];
    }),
    getAllBindings: vi.fn().mockReturnValue([]),
    registerBinding: vi.fn(),
    unregisterComponent: vi.fn(),
  } as unknown as ComponentQueryRegistry;
}

function createMockTimeline(
  emissions: Array<{ timestamp: number; subscriptionId: string }> = [],
  linkTraversals: Array<{ timestamp: number; linkName: string }> = [],
): EventTimeline {
  return {
    getEventsByType: vi.fn().mockImplementation((type: string) => {
      if (type === "EMISSION") {
        return emissions.map(e => ({ type: "EMISSION", ...e }));
      }
      if (type === "LINK_TRAVERSAL") {
        return linkTraversals.map(e => ({ type: "LINK_TRAVERSAL", ...e }));
      }
      return [];
    }),
    record: vi.fn(),
    getRecentEvents: vi.fn().mockReturnValue([]),
    clear: vi.fn(),
  } as unknown as EventTimeline;
}

describe("WaterfallDetector", () => {
  it("returns empty array with no events", () => {
    const detector = new WaterfallDetector(
      createMockRegistry(),
      createMockTimeline(),
    );

    expect(detector.detectWaterfalls()).toEqual([]);
  });

  it("detects link waterfall when emissions bracket a link traversal", () => {
    const timeline = createMockTimeline(
      [
        { timestamp: 100, subscriptionId: "parent-query" },
        { timestamp: 130, subscriptionId: "child-query" },
      ],
      [
        { timestamp: 115, linkName: "assignee" },
      ],
    );

    const detector = new WaterfallDetector(createMockRegistry(), timeline);
    const waterfalls = detector.detectWaterfalls();

    expect(waterfalls.length).toBeGreaterThanOrEqual(1);
    const linkWf = waterfalls.find(w => w.type === "LINK_WATERFALL");
    if (linkWf == null) throw new Error("expected linkWf to be defined");
    expect(linkWf.details.parentQuery).toBe("parent-query");
    expect(linkWf.details.childQuery).toBe("child-query");
  });

  it("detects map waterfall when many useOsdkObject calls share a type", () => {
    const bindings = Array.from({ length: 5 }, (_, i) => ({
      hookType: "useOsdkObject",
      querySignature: `object:Todo:${i}`,
      queryParams: { type: "object", objectType: "Todo" },
      componentId: "comp-1",
      componentName: "TodoItem",
    }));

    const components = new Map([["comp-1", bindings]]);
    const detector = new WaterfallDetector(
      createMockRegistry(
        components as Parameters<typeof createMockRegistry>[0],
      ),
      createMockTimeline(),
    );

    const waterfalls = detector.detectWaterfalls();
    const mapWf = waterfalls.find(w => w.type === "MAP_WATERFALL");
    if (mapWf == null) throw new Error("expected mapWf to be defined");
    expect(mapWf.details.count).toBe(5);
    expect(mapWf.details.objectType).toBe("Todo");
  });

  it("does not flag map waterfall with few queries", () => {
    const bindings = Array.from({ length: 2 }, (_, i) => ({
      hookType: "useOsdkObject",
      querySignature: `object:Todo:${i}`,
      queryParams: { type: "object", objectType: "Todo" },
    }));

    const components = new Map([["comp-1", bindings]]);
    const detector = new WaterfallDetector(
      createMockRegistry(
        components as Parameters<typeof createMockRegistry>[0],
      ),
      createMockTimeline(),
    );

    const waterfalls = detector.detectWaterfalls();
    const mapWf = waterfalls.find(w => w.type === "MAP_WATERFALL");
    expect(mapWf).toBeUndefined();
  });
});
