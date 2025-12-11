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
import { BidirectionalRegistry } from "./BidirectionalRegistry.js";

describe("BidirectionalRegistry", () => {
  let registry: BidirectionalRegistry;

  beforeEach(() => {
    registry = new BidirectionalRegistry();
  });

  describe("Component-Query relationships", () => {
    it("should link component to query", () => {
      registry.linkComponentQuery("comp1", "query1");

      expect(registry.getComponentQueries("comp1")).toEqual(["query1"]);
      expect(registry.getQueryComponents("query1")).toEqual(["comp1"]);
    });

    it("should link multiple queries to one component", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp1", "query2");

      const queries = registry.getComponentQueries("comp1");
      expect(queries).toHaveLength(2);
      expect(queries).toContain("query1");
      expect(queries).toContain("query2");
    });

    it("should link multiple components to one query", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp2", "query1");

      const components = registry.getQueryComponents("query1");
      expect(components).toHaveLength(2);
      expect(components).toContain("comp1");
      expect(components).toContain("comp2");
    });

    it("should handle duplicate links", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp1", "query1");

      expect(registry.getComponentQueries("comp1")).toEqual(["query1"]);
    });
  });

  describe("Component-Object relationships", () => {
    it("should link component to object", () => {
      registry.linkComponentObject("comp1", "Todo-123");

      expect(registry.getComponentObjects("comp1")).toEqual(["Todo-123"]);
      expect(registry.getObjectComponents("Todo-123")).toEqual(["comp1"]);
    });

    it("should link multiple objects to one component", () => {
      registry.linkComponentObject("comp1", "Todo-123");
      registry.linkComponentObject("comp1", "Todo-456");

      const objects = registry.getComponentObjects("comp1");
      expect(objects).toHaveLength(2);
      expect(objects).toContain("Todo-123");
      expect(objects).toContain("Todo-456");
    });

    it("should link multiple components to one object", () => {
      registry.linkComponentObject("comp1", "Todo-123");
      registry.linkComponentObject("comp2", "Todo-123");

      const components = registry.getObjectComponents("Todo-123");
      expect(components).toHaveLength(2);
      expect(components).toContain("comp1");
      expect(components).toContain("comp2");
    });
  });

  describe("Component-Action relationships", () => {
    it("should link component to action", () => {
      registry.linkComponentAction("comp1", "completeTodo");

      expect(registry.getComponentActions("comp1")).toEqual(["completeTodo"]);
      expect(registry.getActionComponents("completeTodo")).toEqual(["comp1"]);
    });
  });

  describe("Subscription relationships", () => {
    it("should link subscription to component and query", () => {
      registry.linkSubscription("sub1", "comp1", "query1");

      expect(registry.getSubscriptionComponent("sub1")).toBe("comp1");
      expect(registry.getSubscriptionQuery("sub1")).toBe("query1");
    });

    it("should return undefined for unknown subscription", () => {
      expect(registry.getSubscriptionComponent("unknown")).toBeUndefined();
      expect(registry.getSubscriptionQuery("unknown")).toBeUndefined();
    });
  });

  describe("unlinkComponent", () => {
    it("should remove all relationships for a component", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp1", "query2");
      registry.linkComponentObject("comp1", "Todo-123");
      registry.linkComponentAction("comp1", "completeTodo");
      registry.linkSubscription("sub1", "comp1", "query1");

      registry.unlinkComponent("comp1");

      expect(registry.getComponentQueries("comp1")).toEqual([]);
      expect(registry.getComponentObjects("comp1")).toEqual([]);
      expect(registry.getComponentActions("comp1")).toEqual([]);
      expect(registry.getSubscriptionComponent("sub1")).toBeUndefined();
      expect(registry.getSubscriptionQuery("sub1")).toBeUndefined();
    });

    it("should cleanup reverse mappings", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp2", "query1");

      registry.unlinkComponent("comp1");

      const components = registry.getQueryComponents("query1");
      expect(components).toEqual(["comp2"]);
      expect(components).not.toContain("comp1");
    });
  });

  describe("clear", () => {
    it("should clear all relationships", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentObject("comp1", "Todo-123");
      registry.linkComponentAction("comp1", "completeTodo");

      registry.clear();

      expect(registry.getComponentQueries("comp1")).toEqual([]);
      expect(registry.getComponentObjects("comp1")).toEqual([]);
      expect(registry.getComponentActions("comp1")).toEqual([]);
    });
  });

  describe("getStats", () => {
    it("should return correct stats", () => {
      registry.linkComponentQuery("comp1", "query1");
      registry.linkComponentQuery("comp1", "query2");
      registry.linkComponentObject("comp1", "Todo-123");
      registry.linkComponentAction("comp1", "completeTodo");

      const stats = registry.getStats();
      expect(stats.components).toBe(1);
      expect(stats.queries).toBe(2);
      expect(stats.objects).toBe(1);
      expect(stats.actions).toBe(1);
      expect(stats.totalRelationships).toBe(4);
    });

    it("should return zero stats for empty registry", () => {
      const stats = registry.getStats();
      expect(stats.components).toBe(0);
      expect(stats.queries).toBe(0);
      expect(stats.objects).toBe(0);
      expect(stats.actions).toBe(0);
      expect(stats.totalRelationships).toBe(0);
    });
  });
});
