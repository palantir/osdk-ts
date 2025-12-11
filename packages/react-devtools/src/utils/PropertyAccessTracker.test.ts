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
import { PropertyAccessTracker } from "./PropertyAccessTracker.js";

describe("PropertyAccessTracker", () => {
  let tracker: PropertyAccessTracker;

  beforeEach(() => {
    tracker = new PropertyAccessTracker();
  });

  describe("wrapObject", () => {
    it("should track property access", () => {
      const obj = { name: "Alice", age: 30 };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      const _name = wrapped.name;

      const accesses = tracker.getAccessesByComponent("comp1");
      expect(accesses).toHaveLength(1);
      expect(accesses[0].property).toBe("name");
      expect(accesses[0].objectKey).toBe("Todo:123");
    });

    it("should not track special properties starting with $", () => {
      const obj = { $primaryKey: "123", name: "Alice" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      const _key = wrapped.$primaryKey;
      const _name = wrapped.name;

      const accesses = tracker.getAccessesByComponent("comp1");
      expect(accesses).toHaveLength(1);
      expect(accesses[0].property).toBe("name");
    });

    it("should wrap nested objects", () => {
      const obj = {
        user: {
          name: "Alice",
          address: {
            city: "NYC",
          },
        },
      };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      const _city = wrapped.user.address.city;

      const accesses = tracker.getAccessesByComponent("comp1");
      expect(accesses.length).toBeGreaterThan(0);
      const cityAccess = accesses.find((a: any) => a.property === "city");
      expect(cityAccess).toBeTruthy();
      expect(cityAccess?.objectKey).toBe("Todo:123.user.address");
    });

    it("should not re-wrap already wrapped objects", () => {
      const obj = { name: "Alice" };
      const wrapped1 = tracker.wrapObject(obj, "Todo:123", "comp1");
      const wrapped2 = tracker.wrapObject(wrapped1, "Todo:123", "comp1");

      expect(wrapped1).toBe(wrapped2);
    });

    it("should handle arrays without wrapping", () => {
      const obj = { items: [1, 2, 3] };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      const _items = wrapped.items;
      expect(Array.isArray(_items)).toBe(true);
    });
  });

  describe("getAccessedProperties", () => {
    it("should return set of accessed properties", () => {
      const obj = { name: "Alice", age: 30, email: "alice@example.com" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      wrapped.name;
      wrapped.age;
      wrapped.name;

      const accessed = tracker.getAccessedProperties("comp1", "Todo:123");
      expect(accessed.size).toBe(2);
      expect(accessed.has("name")).toBe(true);
      expect(accessed.has("age")).toBe(true);
      expect(accessed.has("email")).toBe(false);
    });
  });

  describe("getUnusedPropertiesForObject", () => {
    it("should return properties that were never accessed", () => {
      const obj = { name: "Alice", age: 30, email: "alice@example.com" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      wrapped.name;

      const unused = tracker.getUnusedPropertiesForObject("comp1", "Todo:123", [
        "name",
        "age",
        "email",
      ]);
      expect(unused).toHaveLength(2);
      expect(unused).toContain("age");
      expect(unused).toContain("email");
    });
  });

  describe("incrementRenderCycle", () => {
    it("should track render cycles", () => {
      tracker.incrementRenderCycle("comp1");
      tracker.incrementRenderCycle("comp1");
      tracker.incrementRenderCycle("comp1");

      const obj = { name: "Alice" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");
      wrapped.name;

      const accesses = tracker.getAccessesByComponent("comp1");
      expect(accesses[0].renderCycle).toBe(3);
    });
  });

  describe("findWastedRenders", () => {
    it("should identify wasted renders", () => {
      tracker.incrementRenderCycle("comp1");
      const obj1 = { name: "Alice", age: 30 };
      const wrapped1 = tracker.wrapObject(obj1, "Todo:123", "comp1");
      wrapped1.name;

      tracker.incrementRenderCycle("comp1");
      const obj2 = { name: "Bob", age: 25 };
      const wrapped2 = tracker.wrapObject(obj2, "Todo:123", "comp1");
      wrapped2.name;

      tracker.incrementRenderCycle("comp1");
      const obj3 = { name: "Charlie", age: 35 };
      const wrapped3 = tracker.wrapObject(obj3, "Todo:123", "comp1");
      wrapped3.name;

      const wasted = tracker.findWastedRenders("comp1");
      expect(wasted).toHaveLength(1);
      expect(wasted[0].objectKey).toBe("Todo:123");
      expect(wasted[0].renderCycles.size).toBe(3);
      expect(wasted[0].accessedProperties.size).toBe(1);
    });
  });

  describe("getAccessFrequency", () => {
    it("should count property access frequency", () => {
      const obj = { name: "Alice" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");

      wrapped.name;
      wrapped.name;
      wrapped.name;

      const frequency = tracker.getAccessFrequency("comp1", "Todo:123");
      expect(frequency.get("name")).toBe(3);
    });
  });

  describe("getRecentAccesses", () => {
    it("should return recent accesses", () => {
      for (let i = 0; i < 150; i++) {
        tracker.recordAccess({
          componentId: "comp1",
          objectKey: `Todo:${i}`,
          property: "name",
          timestamp: Date.now(),
        });
      }

      const recent = tracker.getRecentAccesses(50);
      expect(recent).toHaveLength(50);
    });
  });

  describe("getAccessesByObject", () => {
    it("should filter accesses by object", () => {
      const obj1 = { name: "Alice" };
      const obj2 = { name: "Bob" };

      const wrapped1 = tracker.wrapObject(obj1, "Todo:123", "comp1");
      const wrapped2 = tracker.wrapObject(obj2, "Todo:456", "comp1");

      wrapped1.name;
      wrapped2.name;
      wrapped1.name;

      const accesses = tracker.getAccessesByObject("Todo:123");
      expect(accesses).toHaveLength(2);
    });
  });

  describe("clearComponent", () => {
    it("should clear component data", () => {
      const obj = { name: "Alice" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");
      wrapped.name;

      tracker.clearComponent("comp1");

      const accesses = tracker.getAccessesByComponent("comp1");
      expect(accesses).toHaveLength(0);
    });
  });

  describe("getStats", () => {
    it("should return correct statistics", () => {
      const obj1 = { name: "Alice", age: 30 };
      const obj2 = { name: "Bob", email: "bob@example.com" };

      const wrapped1 = tracker.wrapObject(obj1, "Todo:123", "comp1");
      const wrapped2 = tracker.wrapObject(obj2, "Todo:456", "comp2");

      wrapped1.name;
      wrapped1.age;
      wrapped2.name;
      wrapped2.email;

      const stats = tracker.getStats();
      expect(stats.totalAccesses).toBe(4);
      expect(stats.uniqueComponents).toBe(2);
      expect(stats.uniqueObjects).toBe(2);
      expect(stats.uniqueProperties).toBe(3);
    });
  });

  describe("clear", () => {
    it("should clear all data", () => {
      const obj = { name: "Alice" };
      const wrapped = tracker.wrapObject(obj, "Todo:123", "comp1");
      wrapped.name;

      tracker.clear();

      const stats = tracker.getStats();
      expect(stats.totalAccesses).toBe(0);
    });
  });
});
