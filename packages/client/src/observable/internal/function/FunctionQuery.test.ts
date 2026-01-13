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

import { addOne, Employee } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import type { MockedObject } from "vitest";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { createChangedObjects } from "../Changes.js";
import { Store } from "../Store.js";
import { FunctionParamsCanonicalizer } from "./FunctionParamsCanonicalizer.js";
import type { FunctionQuery } from "./FunctionQuery.js";

function mockFunctionSubCallback(): MockedObject<
  Observer<FunctionPayload | undefined>
> {
  return {
    next: vi.fn(),
    error: vi.fn(),
    complete: vi.fn(),
  };
}

function createMockObjectHolder(
  apiName: string,
  primaryKey: unknown,
): ObjectHolder {
  return {
    $apiName: apiName,
    $primaryKey: primaryKey,
  } as ObjectHolder;
}

async function waitForCall(
  mock: MockedObject<Observer<FunctionPayload | undefined>>,
  count = 1,
) {
  await vi.waitFor(() => {
    expect(mock.next).toHaveBeenCalledTimes(count);
  });
}

describe("FunctionQuery", () => {
  let client: Client;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
    return () => {
      store = undefined!;
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("observes function execution and returns result", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 1);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loading" }),
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({
        status: "loaded",
        result: 3,
      }),
    );

    subscription.unsubscribe();
  });

  it("invalidates function and re-fetches", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({
        status: "loaded",
        result: 3,
      }),
    );

    subFn.next.mockClear();

    // Invalidate the function
    await store.invalidateFunction(addOne, { n: 2 });

    // Wait for refetch to complete - gets loading then loaded
    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          status: "loaded",
          result: 3,
        }),
      );
    });

    subscription.unsubscribe();
  });

  it("dependsOn triggers refetch on object type invalidation", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Employee.apiName],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    subFn.next.mockClear();

    // Invalidate Employee object type - should trigger function refetch
    await store.invalidateObjectType(Employee, undefined);

    // Should refetch
    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    subscription.unsubscribe();
  });

  it("cache key deduplicates same function calls", async () => {
    const subFn1 = mockFunctionSubCallback();
    const subFn2 = mockFunctionSubCallback();

    const sub1 = store.functions.observe(
      { queryDef: addOne, params: { n: 2 }, dedupeInterval: 0 },
      subFn1,
    );

    // Wait for first subscription to load
    await waitForCall(subFn1, 2);

    // Second subscription with same params should reuse cached result
    const sub2 = store.functions.observe(
      { queryDef: addOne, params: { n: 2 }, dedupeInterval: 0 },
      subFn2,
    );

    // Second subscriber should get the result
    await vi.waitFor(() => {
      expect(subFn2.next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          result: 3,
        }),
      );
    });

    sub1.unsubscribe();
    sub2.unsubscribe();
  });

  it("dependsOnObjects triggers refetch when specific object is modified", async () => {
    const subFn = mockFunctionSubCallback();

    const mockEmployee = {
      $apiName: Employee.apiName,
      $primaryKey: 50030,
    };

    // Create a function query that depends on a specific employee object
    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOnObjects: [mockEmployee],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    subFn.next.mockClear();

    let functionQuery: FunctionQuery | undefined;
    for (const cacheKey of store.queries.keys()) {
      if (cacheKey.type === "function") {
        functionQuery = store.queries.peek(cacheKey) as FunctionQuery;
        break;
      }
    }

    const changes = createChangedObjects();
    changes.modifiedObjects.set(
      Employee.apiName,
      createMockObjectHolder(Employee.apiName, 50030),
    );

    expect(functionQuery).toBeDefined();
    const revalidatePromise = functionQuery!.maybeUpdateAndRevalidate(
      changes,
      undefined,
    );

    expect(revalidatePromise).toBeInstanceOf(Promise);
    await revalidatePromise;

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("dependsOnObjects does NOT trigger refetch for different object", async () => {
    const subFn = mockFunctionSubCallback();

    const mockEmployee = {
      $apiName: Employee.apiName,
      $primaryKey: 50030,
    };

    // Create a function query that depends on a specific employee object
    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOnObjects: [mockEmployee],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    let functionQuery: FunctionQuery | undefined;
    for (const cacheKey of store.queries.keys()) {
      if (cacheKey.type === "function") {
        functionQuery = store.queries.peek(cacheKey) as FunctionQuery;
        break;
      }
    }

    const changes = createChangedObjects();
    changes.modifiedObjects.set(
      Employee.apiName,
      createMockObjectHolder(Employee.apiName, 99999), // Different primary key
    );

    expect(functionQuery).toBeDefined();
    const result = functionQuery!.maybeUpdateAndRevalidate(changes, undefined);

    expect(result).toBeUndefined();

    subscription.unsubscribe();
  });

  it("dependsOnObjects triggers refetch for added objects", async () => {
    const subFn = mockFunctionSubCallback();

    const mockEmployee = {
      $apiName: Employee.apiName,
      $primaryKey: 50030,
    };

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOnObjects: [mockEmployee],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);

    let functionQuery: FunctionQuery | undefined;
    for (const cacheKey of store.queries.keys()) {
      if (cacheKey.type === "function") {
        functionQuery = store.queries.peek(cacheKey) as FunctionQuery;
        break;
      }
    }

    const changes = createChangedObjects();
    changes.addedObjects.set(
      Employee.apiName,
      createMockObjectHolder(Employee.apiName, 50030),
    );

    expect(functionQuery).toBeDefined();
    const revalidatePromise = functionQuery!.maybeUpdateAndRevalidate(
      changes,
      undefined,
    );

    expect(revalidatePromise).toBeInstanceOf(Promise);

    subscription.unsubscribe();
  });
});

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
    // These strings look like our internal type tags but should not collide
    const a = c.canonicalize({ type: "object" });
    const b = c.canonicalize({ type: "array" });
    const d = c.canonicalize({ nested: { type: "object_end" } });
    expect(a).not.toBe(b);
    expect(a).not.toBe(d);
    // Same structure should still dedupe
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
});
