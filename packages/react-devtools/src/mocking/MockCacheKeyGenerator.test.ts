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

import { describe, expect, it } from "vitest";
import type { SelectedPrimitive } from "../components/PrimitiveSelectionPanel.js";
import { MockCacheKeyGenerator } from "./MockCacheKeyGenerator.js";

describe("MockCacheKeyGenerator", () => {
  it("generates cache key for object primitive", () => {
    const primitive: SelectedPrimitive = {
      type: "object",
      data: {
        type: "Employee",
        primaryKey: "pk-1",
        location: "EmployeeCard",
        hookIndex: 0,
      },
    };

    const key = MockCacheKeyGenerator.generateCacheKey(primitive);
    if (key == null) throw new Error("expected key to be defined");
    expect(key.type).toBe("object");
    expect(key.otherKeys).toEqual(["Employee", "pk-1"]);
  });

  it("generates cache key for objectSet primitive", () => {
    const primitive: SelectedPrimitive = {
      type: "objectSet",
      data: {
        type: "Employee",
        whereClause: { status: "active" },
        location: "EmployeeList",
        hookIndex: 0,
        querySignature: "useOsdkObjects:Employee:{\"status\":\"active\"}:{}",
      },
    };

    const key = MockCacheKeyGenerator.generateCacheKey(primitive);
    if (key == null) throw new Error("expected key to be defined");
    expect(key.type).toBe("list");
    expect(key.otherKeys[0]).toBe("Employee");
  });

  it("generates cache key for link primitive", () => {
    const primitive: SelectedPrimitive = {
      type: "link",
      data: {
        sourceType: "Employee",
        linkName: "office",
        location: "EmployeeCard",
        hookIndex: 1,
      },
    };

    const key = MockCacheKeyGenerator.generateCacheKey(primitive);
    if (key == null) throw new Error("expected key to be defined");
    expect(key.type).toBe("link");
    expect(key.otherKeys[0]).toBe("Employee");
    expect(key.otherKeys[1]).toBeUndefined();
    expect(key.otherKeys[2]).toBe("office");
  });

  it("returns null for action primitive", () => {
    const primitive: SelectedPrimitive = {
      type: "action",
      data: {
        name: "createEmployee",
        signature: "action:createEmployee",
        location: "EmployeeForm",
        hookIndex: 0,
      },
    };

    const key = MockCacheKeyGenerator.generateCacheKey(primitive);
    expect(key).toBeNull();
  });

  it("returns null for unknown primitive type", () => {
    const primitive: SelectedPrimitive = {
      type: "query",
      data: {
        signature: "custom-query",
        hookType: "useOsdkQuery",
        location: "Dashboard",
        hookIndex: 0,
      },
    };

    const key = MockCacheKeyGenerator.generateCacheKey(primitive);
    expect(key).toBeNull();
  });

  it("cacheKeysMatch returns true for identical keys", () => {
    const key1 = {
      type: "object",
      otherKeys: ["Employee", "pk-1"],
    };
    const key2 = {
      type: "object",
      otherKeys: ["Employee", "pk-1"],
    };

    expect(MockCacheKeyGenerator.cacheKeysMatch(key1, key2)).toBe(true);
  });

  it("cacheKeysMatch returns false for different types", () => {
    const key1 = {
      type: "object",
      otherKeys: ["Employee", "pk-1"],
    };
    const key2 = {
      type: "list",
      otherKeys: ["Employee", "pk-1"],
    };

    expect(MockCacheKeyGenerator.cacheKeysMatch(key1, key2)).toBe(false);
  });

  it("cacheKeysMatch returns false for different otherKeys", () => {
    const key1 = {
      type: "object",
      otherKeys: ["Employee", "pk-1"],
    };
    const key2 = {
      type: "object",
      otherKeys: ["Employee", "pk-2"],
    };

    expect(MockCacheKeyGenerator.cacheKeysMatch(key1, key2)).toBe(false);
  });

  it("cacheKeyToString produces readable string", () => {
    const key = {
      type: "object",
      otherKeys: ["Employee", "pk-1"],
    };

    const str = MockCacheKeyGenerator.cacheKeyToString(key);
    expect(str).toContain("object");
    expect(str).toContain("Employee");
    expect(str).toContain("pk-1");
  });

  it("objectSet cache key canonicalizes where clause keys", () => {
    const primitive1: SelectedPrimitive = {
      type: "objectSet",
      data: {
        type: "Employee",
        whereClause: { b: 2, a: 1 },
        location: "EmployeeList",
        hookIndex: 0,
        querySignature: "useOsdkObjects:Employee:{\"b\":2,\"a\":1}:{}",
      },
    };
    const primitive2: SelectedPrimitive = {
      type: "objectSet",
      data: {
        type: "Employee",
        whereClause: { a: 1, b: 2 },
        location: "EmployeeList",
        hookIndex: 0,
        querySignature: "useOsdkObjects:Employee:{\"a\":1,\"b\":2}:{}",
      },
    };

    const key1 = MockCacheKeyGenerator.generateCacheKey(primitive1);
    const key2 = MockCacheKeyGenerator.generateCacheKey(primitive2);

    if (key1 == null) throw new Error("expected key1 to be defined");
    if (key2 == null) throw new Error("expected key2 to be defined");
    expect(MockCacheKeyGenerator.cacheKeysMatch(key1, key2)).toBe(true);
  });
});
