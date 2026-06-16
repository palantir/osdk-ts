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
import type { QueryParams } from "./ComponentQueryRegistry.js";

describe("ComponentQueryRegistry", () => {
  let registry: ComponentQueryRegistry;

  beforeEach(() => {
    registry = new ComponentQueryRegistry();
  });

  describe("registerBinding", () => {
    it("should register a new binding", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      const bindingId = registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      expect(bindingId).toBeTruthy();
      expect(bindingId).toMatch(/^binding-\d+$/);
    });

    it("should index binding by component", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings).toHaveLength(1);
      expect(bindings[0].componentName).toBe("TodoItem");
    });

    it("should index binding by query", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      const subscribers = registry.getQuerySubscribers("Todo:123");
      expect(subscribers).toHaveLength(1);
      expect(subscribers[0].componentId).toBe("comp1");
    });

    it("should parse stack trace for source location", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings[0].stackTrace).toBeTruthy();
    });

    it("should link subscription if provided", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
        subscriptionId: "sub1",
      });

      const binding = registry.getBindingBySubscription("sub1");
      expect(binding).toBeTruthy();
      expect(binding?.componentId).toBe("comp1");
    });
  });

  describe("linkSubscription", () => {
    it("should link subscription to existing binding", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      const bindingId = registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.linkSubscription(bindingId, "sub1");

      const binding = registry.getBindingBySubscription("sub1");
      expect(binding).toBeTruthy();
      expect(binding?.subscriptionId).toBe("sub1");
    });

    it("should do nothing for unknown binding", () => {
      registry.linkSubscription("unknown", "sub1");
      const binding = registry.getBindingBySubscription("sub1");
      expect(binding).toBeUndefined();
    });
  });

  describe("unregisterComponent", () => {
    it("should mark bindings as unmounted", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.unregisterComponent("comp1");

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings[0].unmountedAt).toBeDefined();
    });

    it("should exclude unmounted bindings from query subscribers", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.unregisterComponent("comp1");

      const subscribers = registry.getQuerySubscribers("Todo:123");
      expect(subscribers).toHaveLength(0);
    });
  });

  describe("recordRender", () => {
    it("should record render duration", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.recordRender("comp1", 5.5);

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings[0].renderCount).toBe(1);
      expect(bindings[0].lastRenderDuration).toBe(5.5);
      expect(bindings[0].avgRenderDuration).toBe(5.5);
    });

    it("should calculate average render duration", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.recordRender("comp1", 10);
      registry.recordRender("comp1", 20);

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings[0].renderCount).toBe(2);
      expect(bindings[0].lastRenderDuration).toBe(20);
      expect(bindings[0].avgRenderDuration).toBe(15);
    });

    it("should not record for unmounted components", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.unregisterComponent("comp1");
      registry.recordRender("comp1", 10);

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings[0].renderCount).toBe(0);
    });
  });

  describe("getActiveComponents", () => {
    it("should return only active components", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.registerBinding({
        componentId: "comp2",
        componentName: "TodoList",
        hookType: "useOsdkObjects",
        hookIndex: 0,
        querySignature: "Todo:list",
        queryParams: { type: "list", objectType: "Todo" },
      });

      registry.unregisterComponent("comp1");

      const active = registry.getActiveComponents();
      expect(active.size).toBe(1);
      expect(active.has("comp2")).toBe(true);
      expect(active.has("comp1")).toBe(false);
    });
  });

  describe("cleanupOldBindings", () => {
    it("should remove old unmounted bindings", () => {
      vi.useFakeTimers();

      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.unregisterComponent("comp1");

      vi.advanceTimersByTime(6 * 60 * 1000);

      const cleaned = registry.cleanupOldBindings(5 * 60 * 1000);
      expect(cleaned).toBe(1);

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings).toHaveLength(0);

      vi.useRealTimers();
    });

    it("should not remove recent unmounted bindings", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.unregisterComponent("comp1");

      const cleaned = registry.cleanupOldBindings(5 * 60 * 1000);
      expect(cleaned).toBe(0);

      const bindings = registry.getComponentBindings("comp1");
      expect(bindings).toHaveLength(1);
    });
  });

  describe("getStats", () => {
    it("should return correct stats", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.registerBinding({
        componentId: "comp2",
        componentName: "TodoList",
        hookType: "useOsdkObjects",
        hookIndex: 0,
        querySignature: "Todo:list",
        queryParams: { type: "list", objectType: "Todo" },
      });

      registry.unregisterComponent("comp1");

      const stats = registry.getStats();
      expect(stats.totalBindings).toBe(2);
      expect(stats.activeBindings).toBe(1);
      expect(stats.unmountedBindings).toBe(1);
      expect(stats.components).toBe(2);
      expect(stats.queries).toBe(2);
    });
  });

  describe("clear", () => {
    it("should clear all data", () => {
      const queryParams: QueryParams = {
        type: "object",
        objectType: "Todo",
        primaryKey: "123",
      };

      registry.registerBinding({
        componentId: "comp1",
        componentName: "TodoItem",
        hookType: "useOsdkObject",
        hookIndex: 0,
        querySignature: "Todo:123",
        queryParams,
      });

      registry.clear();

      const stats = registry.getStats();
      expect(stats.totalBindings).toBe(0);
      expect(stats.components).toBe(0);
      expect(stats.queries).toBe(0);
    });
  });
});
