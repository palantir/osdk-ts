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

import type {
  DerivedProperty,
  NullabilityAdherence,
  ObjectOrInterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk,
  PageResult,
  PropertyKeys,
} from "../index.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";

export function createMockObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(): $ObjectSet<Q, never> {
  let fauxObject: Osdk.Instance<Q>,
    fauxResults: any,
    fauxObjectSet: $ObjectSet<Q>;

  // eslint-disable-next-line prefer-const
  fauxObject = {
    $link: {
      peeps: {
        $objectSetInternals: {
          def: {},
        },
      },
    },
  } as Osdk.Instance<Q>;

  fauxResults = {
    data: [fauxObject],
  };

  fauxObjectSet = {
    where: vi.fn(() => {
      return fauxObjectSet;
    }),
    withProperties: vi.fn(() => {
      return fauxObjectSet;
    }),
    fetchPage: vi.fn(() => Promise.resolve(fauxResults)),
    fetchOne: vi.fn(() => fauxObject),
    asyncIter: vi.fn(() => {
      return {};
    }),
    aggregate: vi.fn(() => {
      return {};
    }),
    pivotTo: vi.fn(() => {
      return fauxObjectSet;
    }),
  } as any as $ObjectSet<Q>;

  return fauxObjectSet;
}

describe("ObjectSet", () => {
  const fauxObjectSet = createMockObjectSet<EmployeeApiTest>();

  describe("normal", () => {
    test("select none", async () => {
      const result = await fauxObjectSet.fetchPage();
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, PropertyKeys<EmployeeApiTest>>
      >();

      // Do it again but be explicit about the params to be sure
      // we don't break them
      const result2 = await fauxObjectSet.fetchPage<
        PropertyKeys<EmployeeApiTest>,
        false,
        never,
        NullabilityAdherence.Default,
        false
      >();
    });

    test("select one", async () => {
      const result = await fauxObjectSet.fetchPage({ "$select": ["fullName"] });
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, "fullName">
      >();
    });
  });

  describe("includeAllBaseObjectProperties", () => {
    it("has the right types if you pass true", async () => {
      const fetchPageResult = await fauxObjectSet
        .where({ class: "idk" })
        .fetchPage({ $includeAllBaseObjectProperties: true });

      expectTypeOf(fetchPageResult).toEqualTypeOf<
        PageResult<
          Osdk.Instance<EmployeeApiTest, "$allBaseProperties">
        >
      >();

      const asyncIterResult = fauxObjectSet
        .where({ class: "idk" })
        .asyncIter({ $includeAllBaseObjectProperties: true });

      expectTypeOf(asyncIterResult).toEqualTypeOf<
        AsyncIterableIterator<
          Osdk.Instance<EmployeeApiTest, "$allBaseProperties">
        >
      >();
    });

    it("does not let you pass partial $select and true", async () => {
      const fetchPageResult = await fauxObjectSet
        .where({ class: "idk" })
        .fetchPage({
          // @ts-expect-error
          $includeAllBaseObjectProperties: true,
          $select: ["attachment"],
        });

      const asyncIterResult = fauxObjectSet
        .where({ class: "idk" })
        .asyncIter({
          // @ts-expect-error
          $includeAllBaseObjectProperties: true,
          $select: ["attachment"],
        });
    });

    it("does let you pass full select options and false", async () => {
      const fetchPageResult = await fauxObjectSet
        .where({ class: "idk" })
        .fetchPage({
          $includeAllBaseObjectProperties: true,

          // this select list is intended to represent all properties on `EmployeeApiTest`,
          // so if you get an error here later and you added properties to that object,
          // be sure to add them here too.
          $select: [
            "attachment",
            "class",
            "employeeId",
            "fullName",
            "geopoint",
            "geotimeSeriesReference",
            "isActive",
            "mediaReference",
            "timeseries",
            "lastClockIn",
            "dateOfBirth",
          ],
        });

      const asyncIterResult = await fauxObjectSet
        .where({ class: "idk" })
        .fetchPage({
          $includeAllBaseObjectProperties: true,

          // this select list is intended to represent all properties on `EmployeeApiTest`,
          // so if you get an error here later and you added properties to that object,
          // be sure to add them here too.
          $select: [
            "attachment",
            "class",
            "employeeId",
            "fullName",
            "geopoint",
            "geotimeSeriesReference",
            "isActive",
            "mediaReference",
            "timeseries",
            "lastClockIn",
            "dateOfBirth",
          ],
        });
    });
  });

  test("includeRid", async () => {
    const x = await fauxObjectSet
      .where({ class: "idk" })
      .fetchPage({ $includeRid: true });

    expectTypeOf(x).toEqualTypeOf<
      PageResult<
        Osdk.Instance<EmployeeApiTest, "$rid">
      >
    >();
  });

  test("pivotTo", async () => {
    const noArgs = await fauxObjectSet.pivotTo("peeps").fetchPage({});
    const subselect = await fauxObjectSet.pivotTo("peeps").fetchPage({
      $select: ["employeeId", "class"],
    });

    expectTypeOf(subselect).toEqualTypeOf<
      PageResult<
        Osdk.Instance<EmployeeApiTest, never, "employeeId" | "class">
      >
    >();
  });

  describe(".withProperties", () => {
    test("single property", async () => {
      const withA = fauxObjectSet.withProperties({
        "a": (base) => {
          return base.pivotTo("lead").aggregate("class:exactDistinct");
        },
      });

      const isWithAAssignable: $ObjectSet<EmployeeApiTest, {}> = withA;

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

    it("can be sub-selected", () => {
      const objectWithUndefinedRdp = fauxObjectSet.withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).fetchOne(3, {
        $select: ["derivedPropertyName"],
      });
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

        // Checks that if you did an `await where.fetchPage()` that you can then
        // pass/assign it to something explicit.
        const _assignPreviouslyInferredPages: PageResult<
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
        > = whereResults;

        // Checks that if you did an `await where.fetchPage()` that you can then
        // pass/assign it to something explicit.
        const _assignPreviouslyInferredInstance: Osdk.Instance<
          EmployeeApiTest,
          never,
          PropertyKeys<EmployeeApiTest>,
          {
            mom: "integer";
            dad: "string" | undefined;
            sister: "string"[] | undefined;
          }
        > = whereResults.data[0];

        const q = whereResults.data[0].$link.peeps.$objectSetInternals.def;

        // same as above but with expectTypeOf
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

        // Checks that when you directly assign, it infers correctly.
        // Sometimes an explicit assignment can affect how typescript infers
        // types.
        const shouldBeAssignablePage: PageResult<
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
        > = await where.fetchPage();

        const _shouldBeAssignableSingle: Osdk.Instance<
          EmployeeApiTest,
          never,
          PropertyKeys<EmployeeApiTest>,
          {
            mom: "integer";
            dad: "string" | undefined;
            sister: "string"[] | undefined;
          }
        > = await withFamily.fetchOne(1);
        await withFamily.fetchOne(1);
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
            "employeeId",
            "fullName",
            "class",
            "attachment",
            "geopoint",
            "timeseries",
            "mediaReference",
            "geotimeSeriesReference",
            "isActive",
            "yearsOfExperience",
            "rank",
            "performanceScore",
            "hourlyRate",
            "dateOfJoining",
            "lastUpdated",
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
        "lastUpdated": (base) => {
          base.pivotTo("lead").aggregate("lastUpdated:approximateDistinct");
          base.pivotTo("lead").aggregate("lastUpdated:exactDistinct");
          base.pivotTo("lead").aggregate("lastUpdated:max");
          base.pivotTo("lead").aggregate("lastUpdated:min");
          base.pivotTo("lead").aggregate("lastUpdated:collectList");
          return base.pivotTo("lead").aggregate("lastUpdated:collectSet");
        },
        "dateOfJoining": (base) => {
          base.pivotTo("lead").aggregate("dateOfJoining:approximateDistinct");
          base.pivotTo("lead").aggregate("dateOfJoining:exactDistinct");
          base.pivotTo("lead").aggregate("dateOfJoining:max");
          base.pivotTo("lead").aggregate("dateOfJoining:min");
          base.pivotTo("lead").aggregate("dateOfJoining:collectList");
          return base.pivotTo("lead").aggregate("dateOfJoining:collectSet");
        },
      });
    });

    it("has correct aggregation return types", async () => {
      const aggTestObjectSet = fauxObjectSet.withProperties({
        "maxHasSameType": (base) =>
          base.pivotTo("lead").aggregate("dateOfJoining:max"),
        "minHasSameType": (base) =>
          base.pivotTo("lead").aggregate("dateOfJoining:min"),
        "approximateDistinctNumberNoUndefined": (base) =>
          base.pivotTo("lead").aggregate("employeeId:approximateDistinct"),
        "exactDistinctNumberNoUndefined": (base) =>
          base.pivotTo("lead").aggregate("employeeId:exactDistinct"),
        "countNumberNoUndefined": (base) =>
          base.pivotTo("lead").aggregate("$count"),
        "sumNumber": (base) => base.pivotTo("lead").aggregate("employeeId:sum"),
        "avgNumber": (base) => base.pivotTo("lead").aggregate("employeeId:avg"),
      }).fetchPage();

      const result = (await aggTestObjectSet).data[0];
      expectTypeOf((await aggTestObjectSet).data[0]).toEqualTypeOf<
        Osdk.Instance<EmployeeApiTest, never, PropertyKeys<EmployeeApiTest>, {
          maxHasSameType: "datetime" | undefined;
          minHasSameType: "datetime" | undefined;
          avgNumber: "double" | undefined;
          approximateDistinctNumberNoUndefined: "integer";
          exactDistinctNumberNoUndefined: "integer";
          countNumberNoUndefined: "integer";
          sumNumber: "double" | undefined;
        }>
      >();

      expectTypeOf(result.maxHasSameType).toEqualTypeOf<string | undefined>();
      expectTypeOf(result.minHasSameType).toEqualTypeOf<string | undefined>();
      expectTypeOf(result.approximateDistinctNumberNoUndefined).toEqualTypeOf<
        number
      >();
      expectTypeOf(result.exactDistinctNumberNoUndefined).toEqualTypeOf<
        number
      >();
      expectTypeOf(result.countNumberNoUndefined).toEqualTypeOf<number>();
      expectTypeOf(result.sumNumber).toEqualTypeOf<number | undefined>();
      expectTypeOf(result.avgNumber).toEqualTypeOf<number | undefined>();
    });
  });
  describe("aggregate", () => {
    it("has correct aggregation keys", () => {
      void fauxObjectSet.aggregate({
        "$select": {
          "lastUpdated:max": "asc",
          "lastUpdated:min": "desc",
          "lastUpdated:approximateDistinct": "asc",
          "lastUpdated:exactDistinct": "desc",
          "dateOfJoining:max": "desc",
          "dateOfJoining:min": "asc",
          "dateOfJoining:approximateDistinct": "asc",
          "dateOfJoining:exactDistinct": "desc",
        },
      });
    });
  });
  describe("expressions", () => {
    "Test all property types";
    describe("numeric expressions", () => {
      it("provides correct methods off of selected numeric derived property definitions", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const selectedInteger = base.pivotTo("lead").selectProperty(
              "employeeId",
            );

            expectTypeOf(selectedInteger).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer" | undefined,
                EmployeeApiTest
              >
            >;

            selectedInteger.add(1);
            selectedInteger.subtract(1);
            selectedInteger.multiply(1);
            selectedInteger.divide(1);
            selectedInteger.abs();
            selectedInteger.negate();
            selectedInteger.max(1);
            selectedInteger.min(1);

            // @ts-expect-error
            selectedInteger.extractPart("1");

            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "performanceScore",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "rank",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "short" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "yearsOfExperience",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "long" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "hourlyRate",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "float" | undefined,
                EmployeeApiTest
              >
            >();

            return selectedInteger;
          },
        });
      });

      it("provides correct methods off of selection definitions", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const selectedInteger = base.pivotTo("lead").selectProperty(
              "employeeId",
            );

            expectTypeOf(selectedInteger).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer" | undefined,
                EmployeeApiTest
              >
            >;

            selectedInteger.add(1);
            selectedInteger.subtract(1);
            selectedInteger.multiply(1);
            selectedInteger.divide(1);
            selectedInteger.abs();
            selectedInteger.negate();
            selectedInteger.max(1);
            selectedInteger.min(1);

            // @ts-expect-error
            selectedInteger.extractPart("1");

            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "performanceScore",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "rank",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "short" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "yearsOfExperience",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "long" | undefined,
                EmployeeApiTest
              >
            >();
            expectTypeOf(
              base.pivotTo("lead").selectProperty(
                "hourlyRate",
              ),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "float" | undefined,
                EmployeeApiTest
              >
            >();

            return selectedInteger;
          },
        });
      });

      it("provides correct methods off of aggregated properties", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const maxAggregation = base.pivotTo("lead").aggregate(
              "employeeId:max",
            );

            expectTypeOf(maxAggregation).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer" | undefined,
                EmployeeApiTest
              >
            >;

            maxAggregation.add(1);
            maxAggregation.subtract(1);
            maxAggregation.multiply(1);
            maxAggregation.divide(1);
            maxAggregation.abs();
            maxAggregation.negate();
            maxAggregation.max(1);
            maxAggregation.min(1);

            expectTypeOf(
              base.pivotTo("peeps").aggregate("employeeId:sum"),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double" | undefined,
                EmployeeApiTest
              >
            >();

            expectTypeOf(
              base.pivotTo("peeps").aggregate("employeeId:avg"),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double" | undefined,
                EmployeeApiTest
              >
            >();

            expectTypeOf(
              base.pivotTo("peeps").aggregate("employeeId:min"),
            ).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer" | undefined,
                EmployeeApiTest
              >
            >();

            const collectList = base.pivotTo("peeps").aggregate(
              "employeeId:collectList",
            );
            expectTypeOf(
              collectList,
            ).toEqualTypeOf<
              DerivedProperty.Definition<
                "integer"[] | undefined,
                EmployeeApiTest
              >
            >();

            // @ts-expect-error
            collectList.plus(1);

            expectTypeOf(
              base.pivotTo("peeps").aggregate(
                "employeeId:collectList",
              ),
            ).toEqualTypeOf<
              DerivedProperty.Definition<
                "integer"[] | undefined,
                EmployeeApiTest
              >
            >();

            return maxAggregation;
          },
        });
      });

      it("correctly coerces numeric types", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const intAndLong = base.pivotTo("lead").selectProperty("employeeId")
              .add("yearsOfExperience").add("employeeId");
            expectTypeOf(intAndLong).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<"long", EmployeeApiTest>
            >();

            const intAndDouble = base.pivotTo("lead").selectProperty(
              "employeeId",
            )
              .add("performanceScore").add("employeeId");
            expectTypeOf(intAndDouble).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            const longAndDouble = base.pivotTo("lead").selectProperty(
              "yearsOfExperience",
            )
              .add("performanceScore").add("yearsOfExperience");
            expectTypeOf(longAndDouble).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            const longAndLong = base.pivotTo("lead").selectProperty(
              "yearsOfExperience",
            )
              .add("yearsOfExperience");
            expectTypeOf(longAndLong).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<"long", EmployeeApiTest>
            >();

            const intAndInt = base.pivotTo("lead").selectProperty("employeeId")
              .add("employeeId");
            expectTypeOf(intAndInt).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer",
                EmployeeApiTest
              >
            >();

            const intLongDoubleChain = base.pivotTo("lead").selectProperty(
              "employeeId",
            ).add("yearsOfExperience").add("employeeId").add(
              "performanceScore",
            ).add("yearsOfExperience");
            expectTypeOf(intLongDoubleChain).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            const shortAndIntReturnsInt = base.pivotTo("lead").selectProperty(
              "rank",
            ).add("employeeId");
            expectTypeOf(shortAndIntReturnsInt).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer",
                EmployeeApiTest
              >
            >();

            const shortAndFloatReturnsDouble = base.pivotTo("lead")
              .selectProperty(
                "rank",
              ).add("hourlyRate");
            expectTypeOf(shortAndFloatReturnsDouble).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            return intLongDoubleChain;
          },
        });
      });

      it("allows adding number literals as a double", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const plus = base.pivotTo("lead").selectProperty("employeeId")
              .add(1);
            expectTypeOf(plus).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            return plus;
          },
        });
      });

      it("allows adding literals via base.constant", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const plus = base.pivotTo("lead").selectProperty("employeeId")
              .add(base.constant.double(1));
            expectTypeOf(plus).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            const intPlusIntReturnsInt = base.pivotTo("lead").selectProperty(
              "employeeId",
            )
              .add(base.constant.integer(1));
            expectTypeOf(intPlusIntReturnsInt).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "integer",
                EmployeeApiTest
              >
            >();

            return plus;
          },
        });
      });

      it("allows correctly typed nested property definitions", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const nested = base.pivotTo("lead").selectProperty("employeeId")
              .add(
                base.pivotTo("peeps").aggregate("employeeId:sum"),
              );
            expectTypeOf(nested).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            return nested;
          },
        });
      });

      it("allows correctly types property keys off the linked OT", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const nested = base.pivotTo("lead").selectProperty("employeeId")
              .add(
                "performanceScore",
              );
            expectTypeOf(nested).toEqualTypeOf<
              DerivedProperty.NumericPropertyDefinition<
                "double",
                EmployeeApiTest
              >
            >();

            return nested;
          },
        });
      });

      // it("allows correctly types property keys off the base OT", () => {});
    });
    describe("datetime expressions", () => {
      it("provides correct methods off of datetime selections", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const selectedDatetime = base.pivotTo("lead").selectProperty(
              "dateOfJoining",
            );

            expectTypeOf(selectedDatetime).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "datetime" | undefined,
                EmployeeApiTest
              >
            >();

            selectedDatetime.max("dateOfJoining");
            selectedDatetime.min("lastUpdated");

            expectTypeOf(base.pivotTo("lead").selectProperty("lastUpdated"))
              .toEqualTypeOf<
                DerivedProperty.DatetimePropertyDefinition<
                  "timestamp" | undefined,
                  EmployeeApiTest
                >
              >();

            return selectedDatetime;
          },
        });
      });

      it("correctly coerces datetime types", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const max = base.pivotTo("lead").selectProperty("dateOfJoining")
              .max("lastUpdated");
            expectTypeOf(max).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "timestamp",
                EmployeeApiTest
              >
            >();

            const min = base.pivotTo("lead").selectProperty("dateOfJoining")
              .min("dateOfJoining");
            expectTypeOf(min).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "datetime",
                EmployeeApiTest
              >
            >();

            return max;
          },
        });
      });

      it("allows adding literals via base.constant", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const dateAndDateReturnDate = base.pivotTo("lead").selectProperty(
              "dateOfJoining",
            )
              .min(base.constant.datetime("2025-01-01T00:00:00Z"));
            expectTypeOf(dateAndDateReturnDate).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "datetime",
                EmployeeApiTest
              >
            >();

            const dateAndTimeReturnTime = base.pivotTo("lead").selectProperty(
              "dateOfJoining",
            )
              .min(base.constant.timestamp("2025-01-01T00:00:00Z"));
            expectTypeOf(dateAndTimeReturnTime).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "timestamp",
                EmployeeApiTest
              >
            >();

            return dateAndTimeReturnTime;
          },
        });
      });

      it("allows correctly typed nested property definitions", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const nested = base.pivotTo("lead").selectProperty("dateOfJoining")
              .min(
                base.pivotTo("lead").pivotTo("lead").selectProperty(
                  "lastUpdated",
                ),
              );
            expectTypeOf(nested).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "timestamp",
                EmployeeApiTest
              >
            >();

            return nested;
          },
        });
      });

      it("allows correctly typed property keys off the linked OT", () => {
        const objectSet = fauxObjectSet.withProperties({
          "myProp1": (base) => {
            const nested = base.pivotTo("lead").selectProperty("dateOfJoining")
              .min(
                "lastUpdated",
              );
            expectTypeOf(nested).toEqualTypeOf<
              DerivedProperty.DatetimePropertyDefinition<
                "timestamp",
                EmployeeApiTest
              >
            >();

            return nested;
          },
        });
      });

      // it("allows correctly typed property keys off the base OT", () => {});
    });
  });
});
