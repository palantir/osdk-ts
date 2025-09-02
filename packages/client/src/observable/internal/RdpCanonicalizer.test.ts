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
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";

describe("RdpCanonicalizer", () => {
  let canonicalizer: RdpCanonicalizer;

  beforeEach(() => {
    canonicalizer = new RdpCanonicalizer();
  });

  it("returns the same reference for identical RDP clauses", () => {
    const clause = {
      prop1: () =>
        ({ type: "nearestNeighbor", vectorProperty: "embedding" }) as any,
      prop2: () => ({ type: "sum", property: "value" }) as any,
    } as any;

    const result1 = canonicalizer.canonicalize(clause);
    const result2 = canonicalizer.canonicalize(clause);

    expect(result1).toBe(result2);
  });

  it("canonicalizes RDP clauses with different key order to the same reference", () => {
    const fn1 = () =>
      ({ type: "nearestNeighbor", vectorProperty: "embedding" }) as any;
    const fn2 = () => ({ type: "sum", property: "value" }) as any;

    const clause1 = { prop1: fn1, prop2: fn2 } as any;
    const clause2 = { prop2: fn2, prop1: fn1 } as any;

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    expect(result1).toBe(result2);
  });

  it("returns different references for RDP clauses with different functions", () => {
    const clause1 = {
      prop1: () =>
        ({ type: "nearestNeighbor", vectorProperty: "embedding1" }) as any,
    } as any;
    const clause2 = {
      prop1: () =>
        ({ type: "nearestNeighbor", vectorProperty: "embedding2" }) as any,
    } as any;

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    expect(result1).not.toBe(result2);
  });

  it("handles empty RDP clauses", () => {
    const emptyClause = {};
    const result1 = canonicalizer.canonicalize(emptyClause);
    const result2 = canonicalizer.canonicalize({});

    expect(result1).toEqual({});
    expect(result1).toBe(result2);
  });

  it("preserves the function references in the canonical form", () => {
    const fn = () =>
      ({ type: "nearestNeighbor", vectorProperty: "embedding" }) as any;
    const clause = { prop1: fn } as any;

    const result = canonicalizer.canonicalize(clause);

    expect(result?.prop1).toBe(fn);
  });

  it("sorts keys alphabetically in the canonical form", () => {
    const fnA = () => ({ type: "a" }) as any;
    const fnB = () => ({ type: "b" }) as any;
    const fnC = () => ({ type: "c" }) as any;

    const clause = { charlie: fnC, alpha: fnA, bravo: fnB } as any;
    const result = canonicalizer.canonicalize(clause);

    const keys = Object.keys(result || {});
    expect(keys).toEqual(["alpha", "bravo", "charlie"]);
  });

  it("uses WeakMap cache for repeated canonicalization", () => {
    const clause = {
      prop1: () =>
        ({ type: "nearestNeighbor", vectorProperty: "embedding" }) as any,
    } as any;

    // First call should calculate and cache
    const result1 = canonicalizer.canonicalize(clause);

    // Second call should use cache (same object reference)
    const result2 = canonicalizer.canonicalize(clause);

    expect(result1).toBe(result2);
  });

  it("handles RDP clauses with same keys but different function references", () => {
    const clause1 = {
      prop1: function() {
        return { type: "nearestNeighbor" } as any;
      },
    } as any;
    const clause2 = {
      prop1: function() {
        return { type: "nearestNeighbor" } as any;
      },
    } as any;

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    // Different function references should produce different canonical results
    expect(result1).not.toBe(result2);
  });
});
