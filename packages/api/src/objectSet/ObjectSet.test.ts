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

import type { ObjectSet as $ObjectSet, Osdk, PropertyKeys } from "../index.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";

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
    }),
    aggregate: vi.fn(() => {
      return {};
    }),
  } as any as EmployeeApiTest.ObjectSet;

  describe("normal", () => {
    test("select none", async () => {
      const result = await fauxObjectSet.fetchPage();
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never>
      >();
    });

    test("select one", async () => {
      const result = await fauxObjectSet.fetchPage({ "$select": ["fullName"] });
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, "fullName">
      >();
    });
  });

  describe(".withProperties", () => {
    test("single property", async () => {
      const withA = fauxObjectSet.withProperties({
        "a": (base) => {
          return base.pivotTo("lead").aggregate("class:exactDistinct");
        },
      });

      expectTypeOf(withA).toEqualTypeOf<
        $ObjectSet<EmployeeApiTest, {
          a: "integer";
        }>
      >();

      const withAResults = await withA.fetchPage();

      expectTypeOf<typeof withAResults["data"][0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, PropertyKeys<EmployeeApiTest>, {
          a: "integer";
        }>
      >();

      expectTypeOf<typeof withAResults["data"][0]["a"]>()
        .toEqualTypeOf<number>();
    });

    test("multiple properties", async () => {
      const withFamily = fauxObjectSet.withProperties({
        "mom": (base) => base.pivotTo("lead").aggregate("$count"),
        "dad": (base) => base.pivotTo("lead").selectProperty("fullName"),
        "sister": (base) => base.pivotTo("lead").aggregate("class:collectList"),
      });
      expectTypeOf(withFamily).toEqualTypeOf<
        $ObjectSet<EmployeeApiTest, {
          mom: "integer";
          dad: "string" | undefined;
          sister: "string"[] | undefined;
        }>
      >();

      const withFamilyResults = await withFamily.fetchPage();

      expectTypeOf<typeof withFamilyResults["data"][0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, PropertyKeys<EmployeeApiTest>, {
          mom: "integer";
          dad: "string" | undefined;
          sister: "string"[] | undefined;
        }>
      >();

      expectTypeOf<typeof withFamilyResults["data"][0]["mom"]>()
        .toEqualTypeOf<number>();
      expectTypeOf<typeof withFamilyResults["data"][0]["dad"]>()
        .toEqualTypeOf<string | undefined>();
      expectTypeOf<typeof withFamilyResults["data"][0]["sister"]>()
        .toEqualTypeOf<string[] | undefined>();
    });

    describe("called in succession", () => {
      test("independently", () => {
        const withMom = fauxObjectSet.withProperties({
          "mom": (base) => base.pivotTo("lead").aggregate("$count"),
        });

        const withParents = withMom.withProperties({
          "dad": (base) => base.pivotTo("lead").selectProperty("fullName"),
        });

        expectTypeOf(withParents).toEqualTypeOf<
          $ObjectSet<EmployeeApiTest, {
            mom: "integer";
            dad: "string" | undefined;
          }>
        >();
      });

      test.todo("with calculated properties");
    });

    describe("nullability", () => {
      it("count, exactDistinct, and approximateDistinct aren't nullable", async () => {
        const withFamily = fauxObjectSet.withProperties({
          "mom": (base) => base.pivotTo("lead").aggregate("$count"),
          "dad": (base) =>
            base.pivotTo("lead").aggregate("class:exactDistinct"),
          "sis": (base) =>
            base.pivotTo("lead").aggregate("class:approximateDistinct"),
        });

        const withFamilyResults = await withFamily.fetchPage();

        expectTypeOf<typeof withFamilyResults["data"][0]>().toEqualTypeOf<
          Osdk.Instance<EmployeeApiTest, never, PropertyKeys<EmployeeApiTest>, {
            mom: "integer";
            dad: "integer";
            sis: "integer";
          }>
        >();
      });

      it(
        "collectToSet, collectToList, selectProperty, and numeric aggregations are nullable",
        async () => {
          const withAggregations = fauxObjectSet.withProperties({
            "collectSet": (base) =>
              base.pivotTo("lead").aggregate("class:collectSet"),
            "select": (base) => base.pivotTo("lead").selectProperty("fullName"),
            "collectList": (base) =>
              base.pivotTo("lead").aggregate("class:collectList"),
            "min": (base) => base.pivotTo("lead").aggregate("employeeId:max"),
            "max": (base) => base.pivotTo("lead").aggregate("employeeId:min"),
            "sum": (base) => base.pivotTo("lead").aggregate("employeeId:sum"),
            "avg": (base) => base.pivotTo("lead").aggregate("employeeId:avg"),
            "approximatePercentile": (base) =>
              base.pivotTo("lead").aggregate(
                "employeeId:approximatePercentile",
              ),
          });

          const withAggregationResults = await withAggregations.fetchPage();

          expectTypeOf<typeof withAggregationResults["data"][0]>()
            .toEqualTypeOf<
              Osdk.Instance<
                EmployeeApiTest,
                never,
                PropertyKeys<EmployeeApiTest>,
                {
                  collectSet: "string"[] | undefined;
                  select: "string" | undefined;
                  collectList: "string"[] | undefined;
                  min: "double" | undefined;
                  max: "double" | undefined;
                  sum: "double" | undefined;
                  avg: "double" | undefined;
                  approximatePercentile: "double" | undefined;
                }
              >
            >();
        },
      );
    });

    describe("fetch functions return correct Osdk.Instance", () => {
      const withFamily = fauxObjectSet.withProperties({
        "mom": (base) => base.pivotTo("lead").aggregate("$count"),
        "dad": (base) => base.pivotTo("lead").selectProperty("fullName"),
        "sister": (base) => base.pivotTo("lead").aggregate("class:collectList"),
      });

      it("works with .where", async () => {
        const where = withFamily.where({ "mom": 1 });
        const whereResults = await where.fetchPage();

        expectTypeOf<typeof where>().toEqualTypeOf<typeof withFamily>();
        expectTypeOf<typeof whereResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<
              EmployeeApiTest,
              never,
              PropertyKeys<EmployeeApiTest>,
              {
                mom: "integer";
                dad: "string" | undefined;
                sister: "string"[] | undefined;
              }
            >
          >();
      });

      it("works with .async", () => {
        const asyncIter = withFamily.asyncIter();
        expectTypeOf<typeof asyncIter>().toEqualTypeOf<
          AsyncIterableIterator<
            Osdk.Instance<
              EmployeeApiTest,
              never,
              PropertyKeys<EmployeeApiTest>,
              {
                mom: "integer";
                dad: "string" | undefined;
                sister: "string"[] | undefined;
              }
            >
          >
        >();
      });

      it("Works with no select", async () => {
        const withFamilyResults = await withFamily.fetchPage();

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<
              EmployeeApiTest,
              never,
              PropertyKeys<EmployeeApiTest>,
              {
                mom: "integer";
                dad: "string" | undefined;
                sister: "string"[] | undefined;
              }
            >
          >();
      });

      it("Works with selecting all RDPs", async () => {
        const withFamilyResults = await withFamily.fetchPage({
          $select: ["mom", "dad", "sister"],
        });

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<EmployeeApiTest, never, never, {
              mom: "integer";
              dad: "string" | undefined;
              sister: "string"[] | undefined;
            }>
          >();

        expectTypeOf<typeof withFamilyResults["data"][0]["mom"]>()
          .toEqualTypeOf<number>();
      });

      it("Works with selecting some RDPs", async () => {
        const withFamilyResults = await withFamily.fetchPage({
          $select: ["mom"],
        });

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<EmployeeApiTest, never, never, {
              mom: "integer";
            }>
          >();
      });

      it("Works with selecting all non-RDP's", async () => {
        const withFamilyResults = await withFamily.fetchPage({
          $select: [
            "class",
            "fullName",
            "employeeId",
            "attachment",
            "geopoint",
            "timeseries",
            "mediaReference",
            "geotimeSeriesReference",
            "isActive",
            "lastClockIn",
            "dateOfBirth",
          ],
        });

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<
              EmployeeApiTest,
              never,
              PropertyKeys<EmployeeApiTest>,
              {}
            >
          >();
        expectTypeOf<typeof withFamilyResults["data"][0]["class"]>()
          .toEqualTypeOf<
            string | undefined
          >();
      });

      it("Works with selecting some non-RDP's", async () => {
        const withFamilyResults = await withFamily.fetchPage({
          $select: ["class"],
        });

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<EmployeeApiTest, never, "class", {}>
          >();
      });

      it("Works with selecting a mix", async () => {
        const withFamilyResults = await withFamily.fetchPage({
          $select: ["class", "mom"],
        });

        expectTypeOf<typeof withFamilyResults["data"][0]>()
          .toEqualTypeOf<
            Osdk.Instance<
              EmployeeApiTest,
              never,
              "class",
              { mom: "integer" }
            >
          >();
      });
    });

    it("allows extracting the type", () => {
      const objectSet = fauxObjectSet.withProperties({
        "mom": (base) => base.pivotTo("lead").aggregate("$count"),
      });

      type ObjectSetType = typeof objectSet;

      expectTypeOf<ObjectSetType>().toEqualTypeOf<
        $ObjectSet<EmployeeApiTest, {
          mom: "integer";
        }>
      >();

      const objectSet2 = fauxObjectSet.withProperties({
        "mom": (base) => base.pivotTo("lead").aggregate("$count"),
      }) satisfies ObjectSetType;
    });

    it("Defining the Type", () => {
      type ObjectSetType = $ObjectSet<
        EmployeeApiTest,
        {
          mom: "integer" | undefined;
        }
      >;

      fauxObjectSet.withProperties({
        "mom": (base) => base.pivotTo("lead").aggregate("$count"),
      }) satisfies ObjectSetType;
    });

    it("has correct aggregation keys", () => {
      fauxObjectSet.withProperties({
        "integer": (base) => base.pivotTo("lead").aggregate("$count"),
        "integerNumericAgg": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
        "string": (base) => base.pivotTo("lead").aggregate("class:collectList"),
        "stringDoesNotHaveNumericAgg": (base) =>
          // @ts-expect-error
          base.pivotTo("lead").aggregate("class:sum"),
        "isActive": (base) =>
          base.pivotTo("lead").aggregate("isActive:approximateDistinct"),
        "attachment": (base) =>
          base.pivotTo("lead").aggregate("attachment:collectList"),
        "geopoint": (base) =>
          base.pivotTo("lead").aggregate("geopoint:collectList"),
        "numericTimeseries": (base) =>
          // @ts-expect-error
          base.pivotTo("lead").aggregate("timeseries:sum"),
        "numericTimeseriesExactDistinct": (base) =>
          base.pivotTo("lead").aggregate("timeseries:exactDistinct"),
        "mediaReference": (base) =>
          // @ts-expect-error
          base.pivotTo("lead").aggregate("mediaReference:avg"),
        "mediaReferenceExactDistinct": (base) =>
          base.pivotTo("lead").aggregate("mediaReference:exactDistinct"),
        "geotimeSeriesReference": (base) =>
          // @ts-expect-error
          base.pivotTo("lead").aggregate("geotimeSeriesReference:sum"),
        "geotimeSeriesReferenceExactDistinct": (base) =>
          base.pivotTo("lead").aggregate(
            "geotimeSeriesReference:exactDistinct",
          ),
      });
    });
  });
  describe("aggregate", () => {
    it("has correct aggregation keys", () => {
      void fauxObjectSet.aggregate({
        "$select": {
          "lastClockIn:max": "asc",
          "dateOfBirth:max": "desc",
        },
      });
    });
  });
});
