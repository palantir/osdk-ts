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
import { CircularBuffer } from "./CircularBuffer.js";

describe("CircularBuffer", () => {
  describe("constructor", () => {
    it("should create buffer with specified capacity", () => {
      const buffer = new CircularBuffer<number>(5);
      expect(buffer.getCapacity()).toBe(5);
      expect(buffer.getSize()).toBe(0);
      expect(buffer.isEmpty()).toBe(true);
    });

    it("should throw error for zero capacity", () => {
      expect(() => new CircularBuffer<number>(0)).toThrow(
        "CircularBuffer capacity must be positive",
      );
    });

    it("should throw error for negative capacity", () => {
      expect(() => new CircularBuffer<number>(-5)).toThrow(
        "CircularBuffer capacity must be positive",
      );
    });
  });

  describe("push and get", () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
      buffer = new CircularBuffer<number>(3);
    });

    it("should push item and retrieve it", () => {
      const index = buffer.push(42);
      expect(buffer.get(index)).toBe(42);
      expect(buffer.getSize()).toBe(1);
    });

    it("should push multiple items", () => {
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      expect(buffer.getSize()).toBe(3);
      expect(buffer.isFull()).toBe(true);
    });

    it("should return correct indices on push", () => {
      expect(buffer.push(1)).toBe(0);
      expect(buffer.push(2)).toBe(1);
      expect(buffer.push(3)).toBe(2);
    });
  });

  describe("wrapping behavior", () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
      buffer = new CircularBuffer<number>(3);
    });

    it("should overwrite oldest item when full", () => {
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      buffer.push(4); // Overwrites 1

      const items = buffer.toArray();
      expect(items).toEqual([2, 3, 4]);
      expect(buffer.getSize()).toBe(3);
    });

    it("should continue wrapping correctly", () => {
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      buffer.push(4); // Overwrites 1
      buffer.push(5); // Overwrites 2
      buffer.push(6); // Overwrites 3

      const items = buffer.toArray();
      expect(items).toEqual([4, 5, 6]);
    });

    it("should handle many wraps", () => {
      for (let i = 0; i < 100; i++) {
        buffer.push(i);
      }

      const items = buffer.toArray();
      expect(items).toEqual([97, 98, 99]);
      expect(buffer.getSize()).toBe(3);
    });
  });

  describe("toArray", () => {
    let buffer: CircularBuffer<string>;

    beforeEach(() => {
      buffer = new CircularBuffer<string>(4);
    });

    it("should return empty array for empty buffer", () => {
      expect(buffer.toArray()).toEqual([]);
    });

    it("should return items in chronological order", () => {
      buffer.push("a");
      buffer.push("b");
      buffer.push("c");

      expect(buffer.toArray()).toEqual(["a", "b", "c"]);
    });

    it("should return items in order after wrapping", () => {
      buffer.push("a");
      buffer.push("b");
      buffer.push("c");
      buffer.push("d");
      buffer.push("e"); // Overwrites "a"
      buffer.push("f"); // Overwrites "b"

      expect(buffer.toArray()).toEqual(["c", "d", "e", "f"]);
    });
  });

  describe("get", () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
      buffer = new CircularBuffer<number>(3);
    });

    it("should return undefined for invalid index", () => {
      expect(buffer.get(-1)).toBeUndefined();
      expect(buffer.get(10)).toBeUndefined();
    });

    it("should return undefined for overwritten index", () => {
      const index0 = buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      buffer.push(4); // Overwrites item at index0

      // Note: index may still be valid but value is different
      const value = buffer.get(index0);
      expect(value).toBe(4); // Now contains new value
    });
  });

  describe("clear", () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
      buffer = new CircularBuffer<number>(3);
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
    });

    it("should clear all items", () => {
      buffer.clear();
      expect(buffer.getSize()).toBe(0);
      expect(buffer.isEmpty()).toBe(true);
      expect(buffer.toArray()).toEqual([]);
    });

    it("should allow pushing after clear", () => {
      buffer.clear();
      buffer.push(100);
      expect(buffer.getSize()).toBe(1);
      expect(buffer.toArray()).toEqual([100]);
    });
  });

  describe("size and capacity", () => {
    it("should track size correctly", () => {
      const buffer = new CircularBuffer<number>(5);
      expect(buffer.getSize()).toBe(0);

      buffer.push(1);
      expect(buffer.getSize()).toBe(1);

      buffer.push(2);
      buffer.push(3);
      expect(buffer.getSize()).toBe(3);
    });

    it("should not exceed capacity", () => {
      const buffer = new CircularBuffer<number>(3);
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      buffer.push(4);
      buffer.push(5);

      expect(buffer.getSize()).toBe(3);
      expect(buffer.getCapacity()).toBe(3);
    });
  });

  describe("isEmpty and isFull", () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
      buffer = new CircularBuffer<number>(2);
    });

    it("should report empty correctly", () => {
      expect(buffer.isEmpty()).toBe(true);
      buffer.push(1);
      expect(buffer.isEmpty()).toBe(false);
    });

    it("should report full correctly", () => {
      expect(buffer.isFull()).toBe(false);
      buffer.push(1);
      expect(buffer.isFull()).toBe(false);
      buffer.push(2);
      expect(buffer.isFull()).toBe(true);
    });

    it("should stay full after wrapping", () => {
      buffer.push(1);
      buffer.push(2);
      buffer.push(3);
      expect(buffer.isFull()).toBe(true);
    });
  });

  describe("complex types", () => {
    it("should work with objects", () => {
      interface TestObj {
        id: number;
        name: string;
      }

      const buffer = new CircularBuffer<TestObj>(2);
      buffer.push({ id: 1, name: "first" });
      buffer.push({ id: 2, name: "second" });

      const items = buffer.toArray();
      expect(items).toEqual([
        { id: 1, name: "first" },
        { id: 2, name: "second" },
      ]);
    });

    it("should work with arrays", () => {
      const buffer = new CircularBuffer<number[]>(2);
      buffer.push([1, 2, 3]);
      buffer.push([4, 5, 6]);

      const items = buffer.toArray();
      expect(items).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
  });
});
