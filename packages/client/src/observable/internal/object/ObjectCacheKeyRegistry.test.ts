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

import type {
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { ObjectCacheKey } from "./ObjectCacheKey.js";
import { ObjectCacheKeyRegistry } from "./ObjectCacheKeyRegistry.js";
import type { ObjectQuery } from "./ObjectQuery.js";

/**
 * Helper function to create mock RDP objects for testing.
 * Creates an RDP config with the specified field names, where each field
 * is a mock Creator function.
 */
function createMockRdp(...fields: string[]): Canonical<Rdp> {
  const rdp: Rdp = {};
  for (const field of fields) {
    rdp[field] = () => ({} as DerivedProperty.Definition<
      SimplePropertyDef,
      ObjectOrInterfaceDefinition
    >);
  }
  return rdp as Canonical<Rdp>;
}

/**
 * Helper function to create a properly typed mock ObjectCacheKey for testing
 */
function createMockObjectCacheKey(
  apiName: string,
  pk: string,
  rdpConfig?: Canonical<Rdp>,
): ObjectCacheKey {
  return {
    type: "object" as const,
    otherKeys: [apiName, pk, rdpConfig],
    __cacheKey: {
      value: {} as ObjectHolder,
      query: {} as ObjectQuery,
      args: [apiName, pk, rdpConfig],
    },
  };
}

describe("ObjectCacheKeyRegistry", () => {
  it("registers and retrieves variant cache keys", () => {
    const registry = new ObjectCacheKeyRegistry();

    const mockRdpAddress = createMockRdp("address", "mockType");
    const mockRdpPhone = createMockRdp("phone", "mockType");

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey("Employee", "emp1", mockRdpAddress);
    const key3 = createMockObjectCacheKey("Employee", "emp1", mockRdpPhone);
    const unrelatedKey = createMockObjectCacheKey(
      "Employee",
      "emp2",
      undefined,
    );

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(key2, "Employee", "emp1", mockRdpAddress);
    registry.register(key3, "Employee", "emp1", mockRdpPhone);
    registry.register(unrelatedKey, "Employee", "emp2", undefined);

    const variants = registry.getVariants("Employee", "emp1");
    expect(variants.size).toBe(3);
    expect(variants.has(key1)).toBe(true);
    expect(variants.has(key2)).toBe(true);
    expect(variants.has(key3)).toBe(true);
    expect(variants.has(unrelatedKey)).toBe(false);

    // Unrelated key should have its own set
    const unrelated = registry.getVariants("Employee", "emp2");
    expect(unrelated.size).toBe(1);
    expect(unrelated.has(unrelatedKey)).toBe(true);
  });

  it("handles un-registration correctly", () => {
    const registry = new ObjectCacheKeyRegistry();

    const mockRdp = createMockRdp("address", "mockType");
    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey("Employee", "emp1", mockRdp);

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(key2, "Employee", "emp1", mockRdp);

    // Both keys should be related
    expect(registry.getVariants("Employee", "emp1").size).toBe(2);

    registry.unregister(key1);

    // key2 should now be alone
    const related = registry.getVariants("Employee", "emp1");
    expect(related.size).toBe(1);
    expect(related.has(key2)).toBe(true);
    expect(related.has(key1)).toBe(false);
  });

  it("getVariants returns all variants for an object", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey(
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(
      key2,
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    const variants = registry.getVariants("Employee", "emp1");
    expect(variants.size).toBe(2);
    expect(variants.has(key1)).toBe(true);
    expect(variants.has(key2)).toBe(true);

    // Non-existent object should return empty set
    const empty = registry.getVariants("Employee", "emp999");
    expect(empty.size).toBe(0);
  });

  it("correctly identifies RDP configuration", () => {
    const registry = new ObjectCacheKeyRegistry();

    const keyWithoutRdp = createMockObjectCacheKey(
      "Employee",
      "emp1",
      undefined,
    );
    const keyWithRdp = createMockObjectCacheKey(
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    registry.register(keyWithoutRdp, "Employee", "emp1", undefined);
    registry.register(
      keyWithRdp,
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    expect(registry.hasRdpConfig(keyWithoutRdp)).toBe(false);
    expect(registry.hasRdpConfig(keyWithRdp)).toBe(true);

    expect(registry.getRdpConfig(keyWithoutRdp)).toBeUndefined();

    const rdpConfig = registry.getRdpConfig(keyWithRdp);
    expect(rdpConfig).toBeDefined();
    expect(Object.keys(rdpConfig!)).toEqual(["address"]);
    expect(typeof rdpConfig!.address).toBe("function");
  });

  it("getVariantCount returns correct count of variants", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey(
      "Employee",
      "emp1",
      createMockRdp("address"),
    );
    const key3 = createMockObjectCacheKey(
      "Employee",
      "emp1",
      createMockRdp("phone"),
    );

    expect(registry.getVariantCount("Employee", "emp1")).toBe(0);

    registry.register(key1, "Employee", "emp1", undefined);
    expect(registry.getVariantCount("Employee", "emp1")).toBe(1);

    registry.register(
      key2,
      "Employee",
      "emp1",
      createMockRdp("address"),
    );
    expect(registry.getVariantCount("Employee", "emp1")).toBe(2);

    registry.register(
      key3,
      "Employee",
      "emp1",
      createMockRdp("phone"),
    );
    expect(registry.getVariantCount("Employee", "emp1")).toBe(3);

    registry.unregister(key1);
    expect(registry.getVariantCount("Employee", "emp1")).toBe(2);

    expect(registry.getVariantCount("Employee", "emp999")).toBe(0);
  });

  it("handles registering same key multiple times", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(key1, "Employee", "emp1", undefined);

    // Should still have only one variant despite multiple registrations
    expect(registry.getVariantCount("Employee", "emp1")).toBe(1);

    registry.unregister(key1);
    expect(registry.getVariantCount("Employee", "emp1")).toBe(0);
  });

  it("handles unregistering non-existent keys gracefully", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey("Employee", "emp2", undefined);

    registry.register(key1, "Employee", "emp1", undefined);

    // Unregistering non-existent key should not throw
    registry.unregister(key2);

    // key1 should still be registered
    expect(registry.getVariantCount("Employee", "emp1")).toBe(1);
  });

  it("properly cleans up memory when all variants are unregistered", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey(
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(
      key2,
      "Employee",
      "emp1",
      createMockRdp("address"),
    );

    expect(registry.getVariantCount("Employee", "emp1")).toBe(2);

    registry.unregister(key1);
    registry.unregister(key2);

    // Should return 0 as the entire entry should be cleaned up
    expect(registry.getVariantCount("Employee", "emp1")).toBe(0);
    expect(registry.getVariants("Employee", "emp1").size).toBe(0);
  });
});
