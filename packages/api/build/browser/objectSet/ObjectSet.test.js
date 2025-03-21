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

import { describe, expectTypeOf, it, test, vi } from "vitest";
describe("ObjectSet", () => {
  const fauxObjectSet = {
    where: vi.fn(() => {
      return fauxObjectSet;
    }),
    withProperties: vi.fn(() => {
      return fauxObjectSet;
    }),
    fetchPage: vi.fn(() => Promise.resolve()),
    asyncIter: vi.fn(() => {
      return {};
    })
  };
  describe("normal", () => {
    test("select none", async () => {
      await fauxObjectSet.fetchPage();
      expectTypeOf().toEqualTypeOf();
    });
    test("select one", async () => {
      await fauxObjectSet.fetchPage({
        "$select": ["fullName"]
      });
      expectTypeOf().toEqualTypeOf();
    });
  });
  describe(".withProperties", () => {
    test("single property", async () => {
      const withA = fauxObjectSet.withProperties({
        "a": base => {
          return base.pivotTo("lead").aggregate("class:exactDistinct");
        }
      });
      expectTypeOf(withA).toEqualTypeOf();
      await withA.fetchPage();
      expectTypeOf().toEqualTypeOf();
      expectTypeOf().toEqualTypeOf();
    });
    test("multiple properties", async () => {
      const withFamily = fauxObjectSet.withProperties({
        "mom": base => base.pivotTo("lead").aggregate("$count"),
        "dad": base => base.pivotTo("lead").selectProperty("fullName"),
        "sister": base => base.pivotTo("lead").aggregate("class:collectList")
      });
      expectTypeOf(withFamily).toEqualTypeOf();
      await withFamily.fetchPage();
      expectTypeOf().toEqualTypeOf();
      expectTypeOf().toEqualTypeOf();
      expectTypeOf().toEqualTypeOf();
      expectTypeOf().toEqualTypeOf();
    });
    describe("called in succession", () => {
      test("independently", () => {
        const withMom = fauxObjectSet.withProperties({
          "mom": base => base.pivotTo("lead").aggregate("$count")
        });
        const withParents = withMom.withProperties({
          "dad": base => base.pivotTo("lead").selectProperty("fullName")
        });
        expectTypeOf(withParents).toEqualTypeOf();
      });
      test.todo("with calculated properties");
    });
    describe("nullability", () => {
      it("count, exactDistinct, and approximateDistinct aren't nullable", async () => {
        const withFamily = fauxObjectSet.withProperties({
          "mom": base => base.pivotTo("lead").aggregate("$count"),
          "dad": base => base.pivotTo("lead").aggregate("class:exactDistinct"),
          "sis": base => base.pivotTo("lead").aggregate("class:approximateDistinct")
        });
        await withFamily.fetchPage();
        expectTypeOf().toEqualTypeOf();
      });
      it("collectToSet, collectToList, selectProperty, and numeric aggregations are nullable", async () => {
        const withAggregations = fauxObjectSet.withProperties({
          "collectSet": base => base.pivotTo("lead").aggregate("class:collectSet"),
          "select": base => base.pivotTo("lead").selectProperty("fullName"),
          "collectList": base => base.pivotTo("lead").aggregate("booleanProp:collectSet"),
          "min": base => base.pivotTo("lead").aggregate("employeeId:max"),
          "max": base => base.pivotTo("lead").aggregate("employeeId:min"),
          "sum": base => base.pivotTo("lead").aggregate("employeeId:sum"),
          "avg": base => base.pivotTo("lead").aggregate("employeeId:avg"),
          "approximatePercentile": base => base.pivotTo("lead").aggregate("employeeId:approximatePercentile")
        });
        await withAggregations.fetchPage();
        expectTypeOf().toEqualTypeOf();
      });
    });
    describe("fetch functions return correct Osdk.Instance", () => {
      const withFamily = fauxObjectSet.withProperties({
        "mom": base => base.pivotTo("lead").aggregate("$count"),
        "dad": base => base.pivotTo("lead").selectProperty("fullName"),
        "sister": base => base.pivotTo("lead").aggregate("class:collectList")
      });
      it("works with .where", async () => {
        const where = withFamily.where({
          "mom": 1
        });
        await where.fetchPage();
        expectTypeOf().toEqualTypeOf();
        expectTypeOf().toEqualTypeOf();
      });
      it("works with .async", () => {
        withFamily.asyncIter();
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with no select", async () => {
        await withFamily.fetchPage();
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with selecting all RDPs", async () => {
        await withFamily.fetchPage({
          $select: ["mom", "dad", "sister"]
        });
        expectTypeOf().toEqualTypeOf();
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with selecting some RDPs", async () => {
        await withFamily.fetchPage({
          $select: ["mom"]
        });
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with selecting all non-RDP's", async () => {
        await withFamily.fetchPage({
          $select: ["class", "fullName", "employeeId", "booleanProp"]
        });
        expectTypeOf().toEqualTypeOf();
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with selecting some non-RDP's", async () => {
        await withFamily.fetchPage({
          $select: ["class"]
        });
        expectTypeOf().toEqualTypeOf();
      });
      it("Works with selecting a mix", async () => {
        await withFamily.fetchPage({
          $select: ["class", "mom"]
        });
        expectTypeOf().toEqualTypeOf();
      });
    });
    it("allows extracting the type", () => {
      fauxObjectSet.withProperties({
        "mom": base => base.pivotTo("lead").aggregate("$count")
      });
      expectTypeOf().toEqualTypeOf();
      fauxObjectSet.withProperties({
        "mom": base => base.pivotTo("lead").aggregate("$count")
      });
    });
    it("Defining the Type", () => {
      fauxObjectSet.withProperties({
        "mom": base => base.pivotTo("lead").aggregate("$count")
      });
    });
  });
});
//# sourceMappingURL=ObjectSet.test.js.map