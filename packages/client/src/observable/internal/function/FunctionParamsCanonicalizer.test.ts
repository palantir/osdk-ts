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

  it("returns different refs for different nested structures", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ a: { b: 1 } })).not.toBe(
      c.canonicalize({ b: { a: 1 } }),
    );
  });

  it("returns same ref for deeply nested equivalent structures", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ outer: { inner: { deep: 1 } } });
    const b = c.canonicalize({ outer: { inner: { deep: 1 } } });
    expect(a).toBe(b);
  });

  it("throws on circular references", () => {
    const c = new FunctionParamsCanonicalizer();
    const circular: Record<string, unknown> = { a: 1 };
    circular.self = circular;
    expect(() => c.canonicalize(circular)).toThrow("Circular reference");
  });

  it("canonicalizes Sets to sorted arrays", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ s: new Set([3, 1, 2]) })).toBe(
      c.canonicalize({ s: new Set([1, 2, 3]) }),
    );
  });

  it("canonicalizes Maps to sorted entries", () => {
    const c = new FunctionParamsCanonicalizer();
    const m1 = new Map([["b", 2], ["a", 1]]);
    const m2 = new Map([["a", 1], ["b", 2]]);
    expect(c.canonicalize({ m: m1 })).toBe(c.canonicalize({ m: m2 }));
  });

  it("handles arrays preserving order", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ arr: [1, 2, 3] })).toBe(
      c.canonicalize({ arr: [1, 2, 3] }),
    );
    expect(c.canonicalize({ arr: [1, 2, 3] })).not.toBe(
      c.canonicalize({ arr: [3, 2, 1] }),
    );
  });

  it("handles Dates converting to ISO strings", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ d: new Date("2024-01-01T00:00:00.000Z") });
    const b = c.canonicalize({ d: new Date("2024-01-01T00:00:00.000Z") });
    expect(a).toBe(b);
  });

  it("returns undefined for null/undefined params", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize(null)).toBeUndefined();
    expect(c.canonicalize(undefined)).toBeUndefined();
  });

  it("caches by input reference (fast path)", () => {
    const c = new FunctionParamsCanonicalizer();
    const input = { x: 1 };
    const a = c.canonicalize(input);
    const b = c.canonicalize(input);
    expect(a).toBe(b);
  });

  it("distinguishes number from string with same value", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ val: 1 })).not.toBe(c.canonicalize({ val: "1" }));
  });

  it("handles OSDK objects by extracting identity", () => {
    const c = new FunctionParamsCanonicalizer();
    const obj1 = {
      $apiName: "Foo",
      $primaryKey: 123,
      $objectType: "Foo",
      otherProp: "ignored",
    };
    const obj2 = {
      $apiName: "Foo",
      $primaryKey: 123,
      $objectType: "Foo",
      differentProp: "alsoIgnored",
    };
    expect(c.canonicalize({ obj: obj1 })).toBe(c.canonicalize({ obj: obj2 }));
  });

  it("does not collide string values with type tags", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ type: "object" });
    const b = c.canonicalize({ type: "array" });
    const d = c.canonicalize({ nested: { type: "object_end" } });
    expect(a).not.toBe(b);
    expect(a).not.toBe(d);
    expect(c.canonicalize({ type: "object" })).toBe(a);
  });

  it("handles bigint values", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ big: BigInt(123) });
    const b = c.canonicalize({ big: BigInt(123) });
    const d = c.canonicalize({ big: BigInt(456) });
    expect(a).toBe(b);
    expect(a).not.toBe(d);
  });

  it("handles null and undefined values within objects", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ a: null, b: undefined });
    const b = c.canonicalize({ b: undefined, a: null });
    expect(a).toBe(b);
  });

  it("distinguishes null from undefined", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ val: null })).not.toBe(
      c.canonicalize({ val: undefined }),
    );
  });

  it("handles boolean values", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ flag: true })).toBe(
      c.canonicalize({ flag: true }),
    );
    expect(c.canonicalize({ flag: true })).not.toBe(
      c.canonicalize({ flag: false }),
    );
  });

  it("handles nested arrays", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ arr: [[1, 2], [3, 4]] });
    const b = c.canonicalize({ arr: [[1, 2], [3, 4]] });
    expect(a).toBe(b);
  });

  it("handles empty objects and arrays", () => {
    const c = new FunctionParamsCanonicalizer();
    expect(c.canonicalize({ obj: {} })).toBe(c.canonicalize({ obj: {} }));
    expect(c.canonicalize({ arr: [] })).toBe(c.canonicalize({ arr: [] }));
    expect(c.canonicalize({ obj: {} })).not.toBe(c.canonicalize({ arr: [] }));
  });

  it("handles mixed type arrays", () => {
    const c = new FunctionParamsCanonicalizer();
    const a = c.canonicalize({ arr: [1, "two", true, null] });
    const b = c.canonicalize({ arr: [1, "two", true, null] });
    expect(a).toBe(b);
  });

  it("handles Sets with object values", () => {
    const c = new FunctionParamsCanonicalizer();
    const s1 = new Set([{ a: 1 }, { b: 2 }]);
    const s2 = new Set([{ b: 2 }, { a: 1 }]);
    expect(c.canonicalize({ s: s1 })).toBe(c.canonicalize({ s: s2 }));
  });

  it("handles Maps with complex keys", () => {
    const c = new FunctionParamsCanonicalizer();
    const m1 = new Map<unknown, unknown>([[{ key: 1 }, "val1"], [
      { key: 2 },
      "val2",
    ]]);
    const m2 = new Map<unknown, unknown>([[{ key: 2 }, "val2"], [
      { key: 1 },
      "val1",
    ]]);
    expect(c.canonicalize({ m: m1 })).toBe(c.canonicalize({ m: m2 }));
  });
});
