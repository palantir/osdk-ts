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
import { FunctionParamsCanonicalizer } from "./FunctionParamsCanonicalizer.js";

describe("FunctionParamsCanonicalizer", () => {
  it("returns same ref for equivalent objects with different key order", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ x: 1, y: 2 })).toBe(c.canonicalize({ y: 2, x: 1 }));
  });

  it("returns different refs for different values", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ a: { b: 1 } })).not.toBe(
      c.canonicalize({ b: { a: 1 } }),
    );
  });

  it("caches by input reference", () => {
    const c = new FunctionParamsCanonicalizer();
    const input = { x: 1 };
    expect(c.canonicalize(input)).toBe(c.canonicalize(input));
  });

  it("returns undefined for null/undefined params", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize(null)).toBeUndefined();
    expect(c.canonicalize(undefined)).toBeUndefined();
  });

  it("throws on circular references", () => {
    const c = new FunctionParamsCanonicalizer();
    const circular: Record<string, unknown> = { a: 1 };
    circular.self = circular;
    expect(() => c.canonicalize(circular)).toThrow("Circular reference");
  });

  it("handles OSDK objects by extracting identity", () => {
    const c = new FunctionParamsCanonicalizer();
    const obj1 = {
      $apiName: "Foo",
      $primaryKey: 123,
      $objectType: "Foo",
      extra: "a",
    };
    const obj2 = {
      $apiName: "Foo",
      $primaryKey: 123,
      $objectType: "Foo",
      extra: "b",
    };
    expect(c.canonicalize({ obj: obj1 })).toBe(c.canonicalize({ obj: obj2 }));
  });

  it("canonicalizes complex nested structures consistently", () => {
    const c = new FunctionParamsCanonicalizer();

    // Sets sorted
    expect(c.canonicalize({ s: new Set([3, 1, 2]) }))
      .toBe(c.canonicalize({ s: new Set([1, 2, 3]) }));

    // Maps sorted by key
    expect(c.canonicalize({ m: new Map([["b", 2], ["a", 1]]) }))
      .toBe(c.canonicalize({ m: new Map([["a", 1], ["b", 2]]) }));

    // Arrays preserve order
    expect(c.canonicalize({ arr: [1, 2, 3] }))
      .not.toBe(c.canonicalize({ arr: [3, 2, 1] }));

    // Dates as ISO strings
    expect(c.canonicalize({ d: new Date("2024-01-01T00:00:00.000Z") }))
      .toBe(c.canonicalize({ d: new Date("2024-01-01T00:00:00.000Z") }));

    // Deep nesting
    expect(c.canonicalize({ outer: { inner: { deep: 1 } } }))
      .toBe(c.canonicalize({ outer: { inner: { deep: 1 } } }));

    // Type distinction
    expect(c.canonicalize({ val: 1 })).not.toBe(c.canonicalize({ val: "1" }));
  });

  it("handles Set with non-primitive values", () => {
    const c = new FunctionParamsCanonicalizer();
    const obj1 = { id: 1, name: "first" };
    const obj2 = { id: 2, name: "second" };
    expect(c.canonicalize({ s: new Set([obj1, obj2]) }))
      .toBe(c.canonicalize({ s: new Set([obj2, obj1]) }));
  });

  it("handles Map with non-primitive keys", () => {
    const c = new FunctionParamsCanonicalizer();
    const key1 = { id: 1 };
    const key2 = { id: 2 };
    expect(c.canonicalize({ m: new Map([[key1, "a"], [key2, "b"]]) }))
      .toBe(c.canonicalize({ m: new Map([[key2, "b"], [key1, "a"]]) }));
  });

  it("handles Map with non-primitive values", () => {
    const c = new FunctionParamsCanonicalizer();
    const val1 = { data: "first" };
    const val2 = { data: "second" };
    expect(c.canonicalize({ m: new Map([["a", val1], ["b", val2]]) }))
      .toBe(c.canonicalize({ m: new Map([["b", val2], ["a", val1]]) }));
  });

  it("distinguishes null from undefined", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ val: null }))
      .not.toBe(c.canonicalize({ val: undefined }));
  });
});
