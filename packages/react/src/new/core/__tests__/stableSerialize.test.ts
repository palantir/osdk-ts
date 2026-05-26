/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import {
  stableSerialize,
  stableSerializeReplacer,
} from "../stableSerialize.js";

vi.mock("@osdk/client", async (importOriginal) => {
  const actual = await importOriginal<{}>();
  const MOCK_WIRE_FORM = Symbol.for("test.mockWireForm");
  return {
    ...actual,
    isObjectSet: (o: unknown): boolean =>
      o != null && typeof o === "object"
      && (o as Record<symbol, unknown>)[MOCK_WIRE_FORM] !== undefined,
    getWireObjectSet: (o: unknown): unknown =>
      (o as Record<symbol, unknown>)[MOCK_WIRE_FORM],
  };
});

const MOCK_WIRE_FORM = Symbol.for("test.mockWireForm");

function makeMockObjectSet(wireForm: object): object {
  const o: Record<PropertyKey, unknown> = {};
  Object.defineProperty(o, MOCK_WIRE_FORM, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: wireForm,
  });
  return o;
}

describe("stableSerialize", () => {
  describe("primitives and plain values", () => {
    it("serializes primitives like JSON.stringify", () => {
      expect(stableSerialize("hello")).toBe(`"hello"`);
      expect(stableSerialize(42)).toBe("42");
      expect(stableSerialize(true)).toBe("true");
      expect(stableSerialize(null)).toBe("null");
      expect(stableSerialize(undefined)).toBe(undefined);
    });

    it("serializes plain objects and arrays like JSON.stringify", () => {
      expect(stableSerialize({ a: 1, b: "x" })).toBe(`{"a":1,"b":"x"}`);
      expect(stableSerialize([1, 2, 3])).toBe("[1,2,3]");
      expect(stableSerialize({ nested: { x: [1, null] } })).toBe(
        `{"nested":{"x":[1,null]}}`,
      );
    });
  });

  describe("ObjectSet handling", () => {
    it("replaces an ObjectSet with its wire form wrapped in __objectSet", () => {
      const os = makeMockObjectSet({
        type: "base",
        objectType: "Employee",
      });
      expect(stableSerialize(os)).toBe(
        `{"__objectSet":{"type":"base","objectType":"Employee"}}`,
      );
    });

    it("produces different strings for ObjectSets with different wire forms", () => {
      const osA = makeMockObjectSet({
        type: "filter",
        objectSet: { type: "base", objectType: "Employee" },
        where: { type: "eq", field: "dept", value: "A" },
      });
      const osB = makeMockObjectSet({
        type: "filter",
        objectSet: { type: "base", objectType: "Employee" },
        where: { type: "eq", field: "dept", value: "B" },
      });

      // Sanity: plain JSON.stringify collides — this is the bug
      // stableSerialize defends against.
      expect(JSON.stringify(osA)).toBe(JSON.stringify(osB));

      expect(stableSerialize(osA)).not.toBe(stableSerialize(osB));
    });

    it("produces the same string for ObjectSets with equal wire forms", () => {
      const wire = {
        type: "filter",
        objectSet: { type: "base", objectType: "Employee" },
        where: { type: "eq", field: "dept", value: "A" },
      };
      const osA = makeMockObjectSet(wire);
      const osB = makeMockObjectSet({ ...wire });

      expect(stableSerialize(osA)).toBe(stableSerialize(osB));
    });

    it("serializes ObjectSets nested inside params objects", () => {
      const os = makeMockObjectSet({ type: "base", objectType: "Employee" });
      const result = stableSerialize({
        params: { someInput: os, threshold: 5 },
      });
      expect(result).toBe(
        `{"params":{"someInput":{"__objectSet":{"type":"base","objectType":"Employee"}},"threshold":5}}`,
      );
    });

    it("disambiguates an ObjectSet from a plain object with the same shape", () => {
      const os = makeMockObjectSet({ type: "base", objectType: "Employee" });
      const plainLookalike = { type: "base", objectType: "Employee" };

      expect(stableSerialize(plainLookalike)).toEqual(
        `{"type":"base","objectType":"Employee"}`,
      );
      // Without the __objectSet wrapper these would collide.
      expect(stableSerialize(os)).not.toBe(stableSerialize(plainLookalike));
    });
  });

  describe("Osdk.Instance handling", () => {
    it(
      "normalizes Osdk.Instance to just {$apiName, $primaryKey}, dropping "
        + "other fields",
      () => {
        const instanceA = {
          $apiName: "Employee",
          $primaryKey: 42,
          $title: "Alice",
          cachedDerivedField: "v1",
        };
        const instanceB = {
          $apiName: "Employee",
          $primaryKey: 42,
          $title: "Alice — updated",
          cachedDerivedField: "v2",
        };

        expect(stableSerialize(instanceA)).toBe(stableSerialize(instanceB));
        expect(stableSerialize(instanceA)).toBe(
          `{"$apiName":"Employee","$primaryKey":42}`,
        );
      },
    );

    it("returns a different key when the primary key changes", () => {
      const a = { $apiName: "Employee", $primaryKey: 1 };
      const b = { $apiName: "Employee", $primaryKey: 2 };
      expect(stableSerialize(a)).not.toBe(stableSerialize(b));
    });

    it("returns a different key when the apiName changes", () => {
      const a = { $apiName: "Employee", $primaryKey: 1 };
      const b = { $apiName: "Project", $primaryKey: 1 };
      expect(stableSerialize(a)).not.toBe(stableSerialize(b));
    });

    it("normalizes Osdk.Instance nested inside an array", () => {
      const instance = {
        $apiName: "Employee",
        $primaryKey: 42,
        $title: "Alice",
      };
      expect(stableSerialize([instance])).toBe(
        `[{"$apiName":"Employee","$primaryKey":42}]`,
      );
    });

    it(
      "does not treat objects with only one of $apiName/$primaryKey as instances",
      () => {
        const onlyApiName = { $apiName: "Employee", other: "x" };
        expect(stableSerialize(onlyApiName)).toBe(
          `{"$apiName":"Employee","other":"x"}`,
        );

        const onlyPk = { $primaryKey: 42, other: "y" };
        expect(stableSerialize(onlyPk)).toBe(`{"$primaryKey":42,"other":"y"}`);
      },
    );
  });
});

describe("stableSerializeReplacer", () => {
  it("can be used directly with JSON.stringify", () => {
    const os = makeMockObjectSet({ type: "base", objectType: "Employee" });
    expect(JSON.stringify({ os }, stableSerializeReplacer)).toBe(
      `{"os":{"__objectSet":{"type":"base","objectType":"Employee"}}}`,
    );
  });

  it("passes through values it does not recognize", () => {
    expect(stableSerializeReplacer("k", "string")).toBe("string");
    expect(stableSerializeReplacer("k", 42)).toBe(42);
    expect(stableSerializeReplacer("k", null)).toBe(null);
    const plainObj = { a: 1 };
    expect(stableSerializeReplacer("k", plainObj)).toBe(plainObj);
  });
});
