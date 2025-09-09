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

  const createMockRdpFn = (value: string) => () => ({ mockValue: value });

  it("returns undefined for undefined input", () => {
    expect(canonicalizer.canonicalize(undefined)).toBeUndefined();
  });

  it("handles empty RDP clauses", () => {
    const result1 = canonicalizer.canonicalize({});
    const result2 = canonicalizer.canonicalize({});

    expect(result1).toEqual({});
    expect(result1).toBe(result2);
  });

  it("canonicalizes clauses with different key order to same reference", () => {
    const fn1 = createMockRdpFn("1");
    const fn2 = createMockRdpFn("2");

    const clause1 = { prop1: fn1, prop2: fn2 };
    const clause2 = { prop2: fn2, prop1: fn1 };

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    expect(result1).toBe(result2);
  });

  it("preserves function references", () => {
    const fn = createMockRdpFn("test");
    const clause = { prop1: fn };

    const result = canonicalizer.canonicalize(clause);

    expect(result?.prop1).toBe(fn);
  });

  it("returns different references for different functions", () => {
    const clause1 = { prop1: createMockRdpFn("1") };
    const clause2 = { prop1: createMockRdpFn("2") };

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    expect(result1).not.toBe(result2);
  });

  it("caches identical input objects", () => {
    const clause = { prop1: createMockRdpFn("test") };

    const result1 = canonicalizer.canonicalize(clause);
    const result2 = canonicalizer.canonicalize(clause);

    expect(result1).toBe(result2);
  });

  it("handles complex RDP structures", () => {
    const complexFn = () => ({
      type: "nearestNeighbor",
      vectorProperty: "embedding",
      parameters: { k: 10, metric: "cosine" },
    });
    const simpleFn = createMockRdpFn("simple");

    const clause1 = {
      complexProp: complexFn,
      simpleProp: simpleFn,
    };
    const clause2 = {
      simpleProp: simpleFn,
      complexProp: complexFn,
    };

    const result1 = canonicalizer.canonicalize(clause1);
    const result2 = canonicalizer.canonicalize(clause2);

    expect(result1).toBe(result2);
    expect(Object.keys(result1!)).toEqual(["complexProp", "simpleProp"]);
  });
});
