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
import { ObjectSetArrayCanonicalizer } from "./ObjectSetArrayCanonicalizer.js";

describe(ObjectSetArrayCanonicalizer, () => {
  describe("canonicalizeUnion", () => {
    it("returns same reference for same items regardless of order", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeUnion(["a", "b", "c"]);
      const b = c.canonicalizeUnion(["c", "a", "b"]);
      expect(a).toBe(b);
    });

    it("returns same reference for identical items", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeUnion(["x", "y"]);
      const b = c.canonicalizeUnion(["x", "y"]);
      expect(a).toBe(b);
    });

    it("returns different references for different items", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeUnion(["a", "b"]);
      const b = c.canonicalizeUnion(["a", "c"]);
      expect(a).not.toBe(b);
    });

    it("handles empty array", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeUnion([]);
      const b = c.canonicalizeUnion([]);
      expect(a).toBe(b);
    });
  });

  describe("canonicalizeIntersect", () => {
    it("returns same reference for same items regardless of order", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeIntersect(["a", "b"]);
      const b = c.canonicalizeIntersect(["b", "a"]);
      expect(a).toBe(b);
    });

    it("returns different references for different items", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeIntersect(["a"]);
      const b = c.canonicalizeIntersect(["b"]);
      expect(a).not.toBe(b);
    });
  });

  describe("canonicalizeSubtract", () => {
    it("is order-dependent", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeSubtract(["a", "b"]);
      const b = c.canonicalizeSubtract(["b", "a"]);
      expect(a).not.toBe(b);
    });

    it("returns same reference for same order", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const a = c.canonicalizeSubtract(["a", "b"]);
      const b = c.canonicalizeSubtract(["a", "b"]);
      expect(a).toBe(b);
    });
  });

  describe("cross-method independence", () => {
    it("union and intersect have independent caches", () => {
      const c = new ObjectSetArrayCanonicalizer();
      const union = c.canonicalizeUnion(["a", "b"]);
      const intersect = c.canonicalizeIntersect(["a", "b"]);
      expect(union).not.toBe(intersect);
    });
  });
});
