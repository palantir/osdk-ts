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

import type { ObjectRef } from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { SpecificLinkCacheKey } from "./SpecificLinkCacheKey.js";
import { SpecificLinkCacheKeyRegistry } from "./SpecificLinkCacheKeyRegistry.js";

/**
 * Builds a minimal stand-in for a {@link SpecificLinkCacheKey}. The registry
 * only uses the key as an identity (Set / WeakMap member), so the contents do
 * not need to be realistic.
 */
function createMockLinkCacheKey(
  sourceApiName: string,
  sourceUnderlyingObjectType: string,
  sourcePk: string,
  linkName: string,
): SpecificLinkCacheKey {
  return {
    type: "specificLink" as const,
    otherKeys: [
      sourceApiName,
      "object",
      sourceUnderlyingObjectType,
      sourcePk,
      linkName,
      {},
      {},
    ],
    __cacheKey: {} as SpecificLinkCacheKey["__cacheKey"],
  } as SpecificLinkCacheKey;
}

const sourceRef = (objectType: string, primaryKey: string): ObjectRef => ({
  $objectType: objectType,
  $primaryKey: primaryKey,
});

describe("SpecificLinkCacheKeyRegistry", () => {
  it("registers link records scoped per source and de-dupes repeats", () => {
    const registry = new SpecificLinkCacheKeyRegistry();

    const source = sourceRef("Employee", "emp1");
    const peeps = createMockLinkCacheKey(
      "Employee",
      "Employee",
      "emp1",
      "peeps",
    );
    const lead = createMockLinkCacheKey("Employee", "Employee", "emp1", "lead");
    const unrelated = createMockLinkCacheKey(
      "Employee",
      "Employee",
      "emp2",
      "peeps",
    );

    registry.register(peeps, source);
    // Repeated registration of the same record is de-duped.
    registry.register(peeps, source);
    registry.register(lead, source);
    registry.register(unrelated, sourceRef("Employee", "emp2"));

    const links = registry.getLinksForSource(source);
    expect(links.size).toBe(2);
    expect(links.has(peeps)).toBe(true);
    expect(links.has(lead)).toBe(true);
    expect(links.has(unrelated)).toBe(false);

    const otherLinks = registry.getLinksForSource(
      sourceRef("Employee", "emp2"),
    );
    expect(otherLinks.size).toBe(1);
    expect(otherLinks.has(unrelated)).toBe(true);
  });

  it("unregister removes a record and cleans up the empty source", () => {
    const registry = new SpecificLinkCacheKeyRegistry();

    const source = sourceRef("Employee", "emp1");
    const peeps = createMockLinkCacheKey(
      "Employee",
      "Employee",
      "emp1",
      "peeps",
    );
    const lead = createMockLinkCacheKey("Employee", "Employee", "emp1", "lead");

    registry.register(peeps, source);
    registry.register(lead, source);

    registry.unregister(peeps);
    const links = registry.getLinksForSource(source);
    expect(links.size).toBe(1);
    expect(links.has(lead)).toBe(true);
    expect(links.has(peeps)).toBe(false);

    registry.unregister(lead);
    expect(registry.getLinksForSource(source).size).toBe(0);
  });
});
