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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { setFlagsFromString } from "v8";
import { describe, expect, it, vi } from "vitest";
import { runInNewContext } from "vm";
import { objectSetDefinitions } from "../../objectSet/createObjectSet.js";
import { ObjectSetArrayCanonicalizer } from "./ObjectSetArrayCanonicalizer.js";

function createMockObjectSet(
  wireDefinition: WireObjectSet,
): ObjectSet<ObjectTypeDefinition> {
  const mockObjectSet = {} as ObjectSet<ObjectTypeDefinition>;
  objectSetDefinitions.set(mockObjectSet, wireDefinition);
  return mockObjectSet;
}

describe(ObjectSetArrayCanonicalizer, () => {
  it("union is order-independent", () => {
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });
    const setB = createMockObjectSet({
      type: "base",
      objectType: "TypeB",
    });

    const canon1 = oac.canonicalizeUnion([setA, setB]);
    const canon2 = oac.canonicalizeUnion([setB, setA]);

    expect(canon1).toBe(canon2);
  });

  it("intersect is order-independent", () => {
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });
    const setB = createMockObjectSet({
      type: "base",
      objectType: "TypeB",
    });

    const canon1 = oac.canonicalizeIntersect([setA, setB]);
    const canon2 = oac.canonicalizeIntersect([setB, setA]);

    expect(canon1).toBe(canon2);
  });

  it("subtract is order-dependent", () => {
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });
    const setB = createMockObjectSet({
      type: "base",
      objectType: "TypeB",
    });

    const canon1 = oac.canonicalizeSubtract([setA, setB]);
    const canon2 = oac.canonicalizeSubtract([setB, setA]);

    expect(canon1).not.toBe(canon2);
  });

  it("different operation types use separate caches", () => {
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });
    const setB = createMockObjectSet({
      type: "base",
      objectType: "TypeB",
    });

    const unionCanon = oac.canonicalizeUnion([setA, setB]);
    const intersectCanon = oac.canonicalizeIntersect([setA, setB]);
    const subtractCanon = oac.canonicalizeSubtract([setA, setB]);

    expect(unionCanon).not.toBe(intersectCanon);
    expect(unionCanon).not.toBe(subtractCanon);
    expect(intersectCanon).not.toBe(subtractCanon);
  });

  it("handles empty arrays", () => {
    const oac = new ObjectSetArrayCanonicalizer();

    const unionCanon = oac.canonicalizeUnion([]);
    const intersectCanon = oac.canonicalizeIntersect([]);
    const subtractCanon = oac.canonicalizeSubtract([]);

    expect(unionCanon).toEqual([]);
    expect(intersectCanon).toEqual([]);
    expect(subtractCanon).toEqual([]);
  });

  it("handles single-element arrays", () => {
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });

    const unionCanon = oac.canonicalizeUnion([setA]);
    const intersectCanon = oac.canonicalizeIntersect([setA]);
    const subtractCanon = oac.canonicalizeSubtract([setA]);

    expect(unionCanon).toHaveLength(1);
    expect(intersectCanon).toHaveLength(1);
    expect(subtractCanon).toHaveLength(1);
  });

  it("cleans up union via GC", async () => {
    const callback = vi.fn();
    const f = new FinalizationRegistry(callback);
    const oac = new ObjectSetArrayCanonicalizer();
    const setA = createMockObjectSet({
      type: "base",
      objectType: "TypeA",
    });
    const setB = createMockObjectSet({
      type: "base",
      objectType: "TypeB",
    });

    (() => {
      const canon = oac.canonicalizeUnion([setA, setB]);
      expect(canon).toHaveLength(2);
      f.register(canon, "union");
    })();

    setFlagsFromString("--expose_gc");
    const gc = runInNewContext("gc");

    await vi.waitFor(() => {
      gc();
      expect(callback).toHaveBeenCalledWith("union");
    });
  });
});
