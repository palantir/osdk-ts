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
import { LinkTraversalTracker } from "./LinkTraversalTracker.js";

describe("LinkTraversalTracker", () => {
  let tracker: LinkTraversalTracker;

  beforeEach(() => {
    tracker = new LinkTraversalTracker();
  });

  describe("recordTraversal", () => {
    it("should record a link traversal", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        componentId: "comp1",
        subscriptionId: "sub1",
      });

      const recent = tracker.getRecentTraversals(10);
      expect(recent).toHaveLength(1);
      expect(recent[0].linkName).toBe("department");
    });

    it("should limit stored traversals to maxTraversals", () => {
      for (let i = 0; i < 1100; i++) {
        tracker.recordTraversal({
          sourceObjectType: "Employee",
          sourceObjectKey: `emp${i}`,
          linkName: "department",
          timestamp: Date.now(),
          subscriptionId: `sub${i}`,
        });
      }

      const stats = tracker.getStats();
      expect(stats.totalTraversals).toBe(1000);
    });
  });

  describe("recordLinkedObjects", () => {
    it("should record linked objects", () => {
      tracker.recordLinkedObjects({
        subscriptionId: "sub1",
        linkName: "department",
        objects: [
          { objectType: "Department", primaryKey: "dept1" },
          { objectType: "Department", primaryKey: "dept2" },
        ],
      });

      const stats = tracker.getStats();
      expect(stats.linkedObjectsTracked).toBe(1);
    });
  });

  describe("getTraversalChain", () => {
    it("should build traversal chain from source object", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        subscriptionId: "sub1",
      });

      tracker.recordLinkedObjects({
        subscriptionId: "sub1",
        linkName: "department",
        objects: [{ objectType: "Department", primaryKey: "dept1" }],
      });

      tracker.recordTraversal({
        sourceObjectType: "Department",
        sourceObjectKey: "dept1",
        linkName: "manager",
        timestamp: Date.now(),
        subscriptionId: "sub2",
      });

      const chain = tracker.getTraversalChain("Employee:emp123");
      expect(chain).toHaveLength(2);
      expect(chain[0].linkName).toBe("department");
      expect(chain[1].linkName).toBe("manager");
    });

    it("should handle circular references", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "manager",
        timestamp: Date.now(),
        subscriptionId: "sub1",
      });

      tracker.recordLinkedObjects({
        subscriptionId: "sub1",
        linkName: "manager",
        objects: [{ objectType: "Employee", primaryKey: "emp456" }],
      });

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp456",
        linkName: "manager",
        timestamp: Date.now(),
        subscriptionId: "sub2",
      });

      tracker.recordLinkedObjects({
        subscriptionId: "sub2",
        linkName: "manager",
        objects: [{ objectType: "Employee", primaryKey: "emp123" }],
      });

      const chain = tracker.getTraversalChain("Employee:emp123");
      expect(chain.length).toBeGreaterThan(0);
    });
  });

  describe("findRedundantTraversals", () => {
    it("should find redundant traversals in time window", () => {
      vi.useFakeTimers();
      const now = Date.now();

      for (let i = 0; i < 5; i++) {
        tracker.recordTraversal({
          sourceObjectType: "Employee",
          sourceObjectKey: "emp123",
          linkName: "department",
          timestamp: now + i * 100,
          subscriptionId: `sub${i}`,
        });
      }

      const redundant = tracker.findRedundantTraversals(10000);
      expect(redundant).toHaveLength(1);
      expect(redundant[0].count).toBe(5);

      vi.useRealTimers();
    });

    it("should not include old traversals", () => {
      vi.useFakeTimers();

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now() - 10000,
        subscriptionId: "sub1",
      });

      vi.advanceTimersByTime(10000);

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        subscriptionId: "sub2",
      });

      const redundant = tracker.findRedundantTraversals(5000);
      expect(redundant).toHaveLength(0);

      vi.useRealTimers();
    });
  });

  describe("getTraversalsByComponent", () => {
    it("should filter traversals by component", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        componentId: "comp1",
        subscriptionId: "sub1",
      });

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp456",
        linkName: "manager",
        timestamp: Date.now(),
        componentId: "comp2",
        subscriptionId: "sub2",
      });

      const comp1Traversals = tracker.getTraversalsByComponent("comp1");
      expect(comp1Traversals).toHaveLength(1);
      expect(comp1Traversals[0].linkName).toBe("department");
    });
  });

  describe("getTraversalsByLink", () => {
    it("should filter traversals by link name", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        subscriptionId: "sub1",
      });

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp456",
        linkName: "department",
        timestamp: Date.now(),
        subscriptionId: "sub2",
      });

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp789",
        linkName: "manager",
        timestamp: Date.now(),
        subscriptionId: "sub3",
      });

      const deptTraversals = tracker.getTraversalsByLink("department");
      expect(deptTraversals).toHaveLength(2);
    });
  });

  describe("getStats", () => {
    it("should return correct statistics", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        componentId: "comp1",
        subscriptionId: "sub1",
      });

      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp456",
        linkName: "manager",
        timestamp: Date.now(),
        componentId: "comp1",
        subscriptionId: "sub2",
      });

      const stats = tracker.getStats();
      expect(stats.totalTraversals).toBe(2);
      expect(stats.uniqueLinks).toBe(2);
      expect(stats.uniqueComponents).toBe(1);
      expect(stats.mostUsedLinks).toHaveLength(2);
    });
  });

  describe("clear", () => {
    it("should clear all data", () => {
      tracker.recordTraversal({
        sourceObjectType: "Employee",
        sourceObjectKey: "emp123",
        linkName: "department",
        timestamp: Date.now(),
        subscriptionId: "sub1",
      });

      tracker.recordLinkedObjects({
        subscriptionId: "sub1",
        linkName: "department",
        objects: [{ objectType: "Department", primaryKey: "dept1" }],
      });

      tracker.clear();

      const stats = tracker.getStats();
      expect(stats.totalTraversals).toBe(0);
      expect(stats.linkedObjectsTracked).toBe(0);
    });
  });
});
