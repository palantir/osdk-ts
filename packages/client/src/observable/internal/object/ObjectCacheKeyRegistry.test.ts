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
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { ObjectCacheKey } from "./ObjectCacheKey.js";
import { ObjectCacheKeyRegistry } from "./ObjectCacheKeyRegistry.js";
import type { ObjectQuery } from "./ObjectQuery.js";

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
  it("registers and retrieves related cache keys", () => {
    const registry = new ObjectCacheKeyRegistry();

    const mockRdpAddress = { mockType: "address" } as unknown as Canonical<Rdp>;
    const mockRdpPhone = { mockType: "phone" } as unknown as Canonical<Rdp>;

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

    const related1 = registry.getRelated(key1);
    expect(related1.size).toBe(3);
    expect(related1.has(key1)).toBe(true);
    expect(related1.has(key2)).toBe(true);
    expect(related1.has(key3)).toBe(true);
    expect(related1.has(unrelatedKey)).toBe(false);

    // All related keys should return the same set
    const related2 = registry.getRelated(key2);
    expect(related2).toEqual(related1);

    // Unrelated key should have its own set
    const unrelated = registry.getRelated(unrelatedKey);
    expect(unrelated.size).toBe(1);
    expect(unrelated.has(unrelatedKey)).toBe(true);
  });

  it("handles un-registration correctly", () => {
    const registry = new ObjectCacheKeyRegistry();

    const mockRdp = { mockType: "address" } as unknown as Canonical<Rdp>;
    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey("Employee", "emp1", mockRdp);

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(key2, "Employee", "emp1", mockRdp);

    // Both keys should be related
    expect(registry.getRelated(key1).size).toBe(2);

    registry.unregister(key1);

    // key2 should now be alone
    const related = registry.getRelated(key2);
    expect(related.size).toBe(1);
    expect(related.has(key2)).toBe(true);
    expect(related.has(key1)).toBe(false);

    // key1 should return just itself (not registered)
    const unregistered = registry.getRelated(key1);
    expect(unregistered.size).toBe(1);
    expect(unregistered.has(key1)).toBe(true);
  });

  it("getVariants returns all variants for an object", () => {
    const registry = new ObjectCacheKeyRegistry();

    const key1 = createMockObjectCacheKey("Employee", "emp1", undefined);
    const key2 = createMockObjectCacheKey(
      "Employee",
      "emp1",
      { address: {} } as unknown as Canonical<Rdp>,
    );

    registry.register(key1, "Employee", "emp1", undefined);
    registry.register(
      key2,
      "Employee",
      "emp1",
      { address: {} } as unknown as Canonical<Rdp>,
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
      { address: {} } as unknown as Canonical<Rdp>,
    );

    registry.register(keyWithoutRdp, "Employee", "emp1", undefined);
    registry.register(
      keyWithRdp,
      "Employee",
      "emp1",
      { address: {} } as unknown as Canonical<Rdp>,
    );

    expect(registry.hasRdpConfig(keyWithoutRdp)).toBe(false);
    expect(registry.hasRdpConfig(keyWithRdp)).toBe(true);

    expect(registry.getRdpConfig(keyWithoutRdp)).toBeUndefined();
    expect(registry.getRdpConfig(keyWithRdp)).toEqual({ address: {} });
  });
});
