/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  Attachment,
  CompileTimeMetadata,
  ConvertProps,
  FetchPageResult,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  Result,
} from "@osdk/api";
import { isOk } from "@osdk/api";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
} from "@osdk/api/unstable";
import {
  BarInterface,
  BgaoNflPlayer,
  Employee,
  FooInterface,
  objectTypeWithAllPropertyTypes,
  Office,
} from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

type ApiNameAsString<
  T extends ObjectOrInterfaceDefinition,
> = CompileTimeMetadata<T>["apiName"];

type JustProps<
  T extends ObjectOrInterfaceDefinition,
  P extends ValidOsdkPropParams<T>,
> = P extends "$all" ? PropertyKeys<T>
  : Exclude<P, SpecialOsdkPropParams>;

type SpecialOsdkPropParams =
  | "$all"
  | "$rid"
  | "$strict"
  | "$notStrict";

type ValidOsdkPropParams<Q extends ObjectOrInterfaceDefinition> =
  | SpecialOsdkPropParams
  | PropertyKeys<Q>;

type PropMapToInterface<
  FROM extends ObjectTypeDefinition,
  TO extends InterfaceDefinition,
> = NonNullable<
  CompileTimeMetadata<FROM>["inverseInterfaceMap"]
>[ApiNameAsString<TO>];

export type PropMapToObject<
  FROM extends ObjectOrInterfaceDefinition,
  TO extends ObjectTypeDefinition,
> = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];

describe("ObjectSet", () => {
  let client: Client;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  it("does not allow intersect/union/subtract with different object types", () => {
    const employeeObjectSet = client(Employee);
    const officeObjectSet = client(Office);

    // @ts-expect-error
    employeeObjectSet.union(officeObjectSet);

    // @ts-expect-error
    employeeObjectSet.subtract(officeObjectSet);

    // @ts-expect-error
    employeeObjectSet.intersect(officeObjectSet);
  });

  it("can be cast bidirectionally", () => {
    function takesOldStyleObjectSet(os: ObjectSet<Employee>) {
      return os;
    }

    function takesNewStyleObjectSet(os: Employee.ObjectSet) {
      return os;
    }

    function maybe() {
      const newStyleObjectSet: Employee.ObjectSet = client(Employee);
      const oldStyleObjectSet: ObjectSet<Employee> = newStyleObjectSet;

      takesOldStyleObjectSet(newStyleObjectSet);
      takesNewStyleObjectSet(newStyleObjectSet);

      takesOldStyleObjectSet(oldStyleObjectSet);
      takesNewStyleObjectSet(oldStyleObjectSet);
    }

    if (false) {
      // here for a simple type check
      maybe();
    }
  });

  it("objects set union", async () => {
    const objectSet = client(Employee);
    const unionedObjectSet = objectSet.union(objectSet);
    const { data: employees } = await unionedObjectSet.fetchPage();
    const pks = new Set<number>();
    for (const emp of employees) {
      pks.add(emp.$primaryKey);
    }

    expect(pks.size).toEqual(7);
    expect(pks.has(stubData.employee1.employeeId)).toBe(true);
    expect(pks.has(stubData.employee2.employeeId)).toBe(true);
    expect(pks.has(stubData.employee3.employeeId)).toBe(true);
    expect(pks.has(stubData.employee4withDerived.employeeId)).toBe(true);
    expect(pks.has(stubData.employeePassesStrict.__primaryKey)).toBe(true);
    expect(pks.has(stubData.employee50050.employeeId)).toBe(true);
  });

  it("objects set subtract", async () => {
    const objectSet = client(Employee);
    const objectSet2 = client(Employee).where({
      employeeId: 50030,
    });
    const subtractedObjectSet = objectSet.subtract(objectSet2);

    const objectSetResults = await objectSet.fetchPage();
    const objectSet2Results = await objectSet2.fetchPage();
    const subtractedObjectSetResults = await subtractedObjectSet.fetchPage();

    expect(objectSet2Results.data).toHaveLength(1);
    expect(subtractedObjectSetResults.data).toHaveLength(
      objectSetResults.data.length - objectSet2Results.data.length,
    );
    expect(subtractedObjectSetResults.data.find(x => x.$primaryKey === 50030))
      .toBeUndefined();
  });

  it("objects set intersect", async () => {
    const objectSet = client(Employee);
    const intersectedObjectSet = objectSet.intersect(objectSet);
    const iter = 0;
    const { data: employees } = await intersectedObjectSet.fetchPage();
    const pks = new Set<number>();
    for (const emp of employees) {
      pks.add(emp.$primaryKey);
    }

    expect(pks.size).toEqual(7);
    expect(pks.has(stubData.employee1.employeeId)).toBe(true);
    expect(pks.has(stubData.employee2.employeeId)).toBe(true);
    expect(pks.has(stubData.employee3.employeeId)).toBe(true);
    expect(pks.has(stubData.employee4withDerived.employeeId)).toBe(true);
    expect(pks.has(stubData.employeePassesStrict.__primaryKey)).toBe(true);
    expect(pks.has(stubData.employee50050.employeeId)).toBe(true);
  });

  it("orders objects in ascending order without a filter, and returns all results", async () => {
    const { data: employees } = await client(Employee)
      .where({
        employeeId: { $isNull: false },
      })
      .fetchPage({
        $orderBy: { "employeeId": "asc" },
      });

    expect(employees.map(e => e.$primaryKey))
      .toEqual([
        20003,
        50030,
        50031,
        50032,
        50033,
        50035,
        stubData.employee50050.employeeId,
      ]);
  });

  it("allows fetching by PK from a base object set - fetchOne", async () => {
    const employee = await client(Employee).fetchOne(
      stubData.employee1.employeeId,
    );
    expectTypeOf<typeof employee>().toMatchTypeOf<
      Osdk<Employee, PropertyKeys<Employee>>
    >;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching by rid with experimental function", async () => {
    const employee = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
    ).fetchOneByRid(
      Employee,
      stubData.employee1.__rid,
    );
    expectTypeOf<typeof employee>().toMatchTypeOf<
      Osdk<Employee, PropertyKeys<Employee>>
    >;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching page of rids with experimental function", async () => {
    const employees = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
    ).fetchPageByRid(
      Employee,
      [stubData.employee1.__rid, stubData.employee2.__rid],
      {},
    );
    expectTypeOf<typeof employees>().toMatchTypeOf<
      FetchPageResult<Employee, PropertyKeys<Employee>, boolean, any, any>
    >;
    expect(employees.data[0].$primaryKey).toBe(stubData.employee1.employeeId);
    expect(employees.data[1].$primaryKey).toBe(stubData.employee2.employeeId);
  });

  it("allows fetching a page of rids without a type specifier", async () => {
    const employees = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
    ).fetchPageByRidNoType(
      [stubData.employee1.__rid, stubData.employee2.__rid],
      {},
    );
    expectTypeOf<typeof employees>().toMatchTypeOf<
      FetchPageResult<
        ObjectOrInterfaceDefinition,
        PropertyKeys<ObjectOrInterfaceDefinition>,
        boolean,
        any,
        any
      >
    >;
    expect(employees.data[0].$primaryKey).toBe(stubData.employee1.employeeId);
    expect(employees.data[1].$primaryKey).toBe(stubData.employee2.employeeId);
  });

  it("allows fetching by rid with experimental function, with select", async () => {
    const employee = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
    ).fetchOneByRid(
      Employee,
      stubData.employee2.__rid,
      { $select: ["fullName"] },
    );
    expectTypeOf<typeof employee>().toMatchTypeOf<
      Osdk<Employee, "fullName">
    >;
    expect(employee.$primaryKey).toBe(stubData.employee2.employeeId);
  });

  it("allows fetching by rid with experimental function, with select 2", async () => {
    const employees = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
    ).fetchPageByRid(
      Employee,
      [stubData.employee2.__rid, stubData.employee3.__rid],
      { $select: ["fullName"] },
    );
    expectTypeOf<typeof employees>().toMatchTypeOf<
      FetchPageResult<Employee, "fullName", boolean, any, any>
    >;
    expect(employees.data[0].$primaryKey).toBe(stubData.employee2.employeeId);
    expect(employees.data[1].$primaryKey).toBe(stubData.employee3.employeeId);
  });

  it("check struct parsing", async () => {
    const player = await client(BgaoNflPlayer).fetchOne(
      "tkelce",
    );
    expectTypeOf<typeof player>().toMatchTypeOf<
      Osdk<BgaoNflPlayer, PropertyKeys<BgaoNflPlayer>>
    >;
    expectTypeOf<typeof player.address>().toMatchTypeOf<
      {
        addressLine1: string | undefined;
        addressLine2: string | undefined;
        city: string | undefined;
        state: string | undefined;
        zipCode: number | undefined;
      } | undefined
    >;

    const address1 = player.address!.addressLine1;
    expectTypeOf<typeof address1>().toMatchTypeOf<
      string | undefined
    >;
    expect(address1).toEqual("15 Muppets Lane");

    const address2 = player.address?.addressLine2;
    expectTypeOf<typeof address2>().toMatchTypeOf<
      string | undefined
    >;
    expect(address2).toEqual("Resort No 4");

    const city = player.address?.city;
    expectTypeOf<typeof city>().toMatchTypeOf<
      string | undefined
    >;
    expect(city).toEqual("Memphis");

    const state = player.address?.state;
    expectTypeOf<typeof state>().toMatchTypeOf<
      string | undefined
    >;
    expect(state).toEqual("TN");

    const zipCode = player.address?.zipCode;
    expectTypeOf<typeof zipCode>().toMatchTypeOf<
      number | undefined
    >;
    expect(zipCode).toEqual(11100);

    expect(player.$primaryKey).toEqual(stubData.travisPlayer.__primaryKey);
    expect(player.address).toEqual(stubData.travisPlayer.address);
  });

  it("allows fetching by PK from a base object set - fetchOneWithErrors", async () => {
    const employeeResult = await client(Employee)
      .fetchOneWithErrors(
        stubData.employee1.employeeId,
      );
    expectTypeOf<typeof employeeResult>().toMatchTypeOf<
      Result<Osdk<Employee, PropertyKeys<Employee>>>
    >;

    if (isOk(employeeResult)) {
      const employee = employeeResult.value;
      expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
    }
  });

  it("allows fetching by PK from a base object set with selected properties - fetchOne", async () => {
    const employee = await client(Employee).fetchOne(
      stubData.employee1.employeeId,
      { $select: ["fullName"] },
    );
    expectTypeOf<typeof employee>().branded.toEqualTypeOf<
      Osdk<Employee, "fullName">
    >;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching by PK from a base object set with selected properties - fetchOneWithErrors", async () => {
    const employeeResult = await client(Employee)
      .fetchOneWithErrors(
        stubData.employee1.employeeId,
        { $select: ["fullName"] },
      );
    expectTypeOf<typeof employeeResult>().branded.toEqualTypeOf<
      Result<Osdk<Employee, "fullName">>
    >;

    if (isOk(employeeResult)) {
      const employee = employeeResult.value;
      expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
    }
  });

  it("throws when fetching by PK with an object that does not exist - fetchOne", async () => {
    await expect(client(Employee).fetchOne(-1)).rejects
      .toThrow();
  });

  it("throws when fetching by PK with an object that does not exist - fetchOneWithErrors", async () => {
    const employeeResult = await client(Employee)
      .fetchOneWithErrors(-1);

    expectTypeOf<typeof employeeResult>().branded.toEqualTypeOf<
      Result<Osdk<Employee>>
    >;

    expect("error" in employeeResult);
  });

  it("allows fetching by PK from a pivoted object set - fetchOne", async () => {
    const employee = await client(Employee).where({
      employeeId: stubData.employee2.employeeId,
    })
      .pivotTo("peeps").fetchOne(stubData.employee1.employeeId);

    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching by PK from a pivoted object set - fetchOneWithErrors", async () => {
    const employeeResult = await client(Employee).where({
      employeeId: stubData.employee2.employeeId,
    })
      .pivotTo("peeps").fetchOneWithErrors(stubData.employee1.employeeId);

    if (isOk(employeeResult)) {
      const employee = employeeResult.value;
      expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
    }
  });

  it(" object set union works with fetchPageWithErrors", async () => {
    const objectSet = client(Employee);
    const unionedObjectSet = objectSet.union(objectSet);
    const iter = 0;
    const result = await unionedObjectSet.fetchPageWithErrors();
    const pks = new Set<number>();
    for (const emp of result.value!.data) {
      pks.add(emp.$primaryKey);
    }

    expect(pks.size).toEqual(7);
    expect(pks.has(stubData.employee1.employeeId)).toBe(true);
    expect(pks.has(stubData.employee2.employeeId)).toBe(true);
    expect(pks.has(stubData.employee3.employeeId)).toBe(true);
    expect(pks.has(stubData.employee4withDerived.employeeId)).toBe(true);
    expect(pks.has(stubData.employeePassesStrict.__primaryKey)).toBe(true);
    expect(pks.has(stubData.employee50050.employeeId)).toBe(true);
  });

  it("allows $in filter with ReadonlyArrays", () => {
    const ids: ReadonlyArray<number> = [50030, 50031];
    const objectSet = client(Employee).where({
      employeeId: { $in: ids },
    });
    expect(objectSet).toBeDefined();
  });

  it("does not allow arbitrary keys when no properties", () => {
    const ids: ReadonlyArray<number> = [50030, 50031];
    client(Employee).where({
      // @ts-expect-error
      employeeIdNonExistent: { $in: ids },
    });

    client(BarInterface).where({
      // @ts-expect-error
      nonExistentProp: "",
    });
  });

  it("type checking containsallterm and containsanyterm", () => {
    const ids: ReadonlyArray<number> = [50030, 50031];
    client(Employee).where({
      $or: [{ fullName: { $containsAllTerms: "John Smith" } }, {
        office: { $containsAllTerms: { term: "NYC DC" } },
      }, {
        fullName: {
          $containsAllTerms: { term: "John Smith", fuzzySearch: false },
        },
      }, {
        // @ts-expect-error
        fullName: { $containsAllTerms: { fuzzySearch: false } },
      }],
    });

    client(Employee).where({
      $or: [{ fullName: { $containsAnyTerm: "John Smith" } }, {
        office: { $containsAnyTerm: { term: "NYC DC" } },
      }, {
        fullName: {
          $containsAnyTerm: { term: "John Smith", fuzzySearch: false },
        },
      }, {
        // @ts-expect-error
        fullName: { $containsAnyTerm: { fuzzySearch: false } },
      }],
    });

    client(BarInterface).where({
      // @ts-expect-error
      nonExistentProp: "",
    });
  });

  it("type checking struct where clauses", () => {
    expectTypeOf(client(BgaoNflPlayer).where).toBeCallableWith({
      $and: [{ address: { city: { $eq: "NYC" } } }, {
        address: { zipCode: { $gte: 55555 } },
      }],
    });
    expectTypeOf(client(BgaoNflPlayer).where).toBeCallableWith({
      address: {
        addressLine1: { $containsAllTerms: "BLVD" },
        // @ts-expect-error
        addressLine2: { $containsAllTermsInOrder: "Apartment Number" },
      },
    });
  });

  describe.each(["fetchPage", "fetchPageWithErrors"] as const)("%s", (k) => {
    // describe("strictNonNull: \"drop\"", () => {
    //   describe("includeRid: true", () => {
    //     it("drops bad data", async () => {
    //       const opts = {
    //         $__EXPERIMENTAL_strictNonNull: "drop",
    //         $includeRid: true,
    //       } as const;
    //       const result = k === "fetchPage"
    //         ? await client(Employee).fetchPage(opts)
    //         : (await client(Employee).fetchPageWithErrors(opts)).value!;

    //       expect(result.data).toHaveLength(3);
    //       expectTypeOf(result.data[0]).branded.toEqualTypeOf<
    //         Osdk<Employee, "$rid" | "$all">
    //       >();
    //       expectTypeOf(result.data[0]).branded.toEqualTypeOf<
    //         Employee.OsdkObject<"$rid">
    //       >();
    //     });
    //   });

    //   describe("includeRid: false", () => {
    //     it("drops bad data", async () => {
    //       const opts = {
    //         $__EXPERIMENTAL_strictNonNull: "drop",
    //         $includeRid: false,
    //       } as const;
    //       const result = k === "fetchPage"
    //         ? await client(Employee).fetchPage(opts)
    //         : (await client(Employee).fetchPageWithErrors(opts)).value!;

    //       expect(result.data).toHaveLength(3);
    //       expectTypeOf(result.data[0]).branded.toEqualTypeOf<Osdk<Employee>>();
    //       expectTypeOf(result.data[0]).branded.toEqualTypeOf<
    //         Employee.OsdkObject
    //       >();
    //       expectTypeOf(result.data[0]).branded.toEqualTypeOf<
    //         Employee.OsdkObject<never>
    //       >();
    //     });
    //   });
    // });

    describe("strictNonNull: false", () => {
      describe("includeRid: true", () => {
        it("returns bad data", async () => {
          const opts = {
            $__EXPERIMENTAL_strictNonNull: false,
            $includeRid: true,
          } as const;
          const result = k === "fetchPage"
            ? await client(Employee).fetchPage(opts)
            : (await client(Employee).fetchPageWithErrors(opts)).value!;

          expect(result.data).toHaveLength(7);
          expectTypeOf(result.data[0]).branded.toEqualTypeOf<
            Osdk<Employee, "$all" | "$notStrict" | "$rid">
          >();
        });
      });

      describe("includeRid: false", () => {
        it("returns bad data", async () => {
          const opts = {
            $includeRid: false,
          } as const;
          const result = k === "fetchPage"
            ? await client(Employee).fetchPage(opts)
            : (await client(Employee).fetchPageWithErrors(opts)).value!;

          expect(result.data).toHaveLength(7);
          expectTypeOf(result.data[0]).branded.toEqualTypeOf<
            Osdk<Employee, "$all" | "$notStrict">
          >();
        });
      });
    });
  });

  describe("Derived Properties Object Set", () => {
    it("does not allow aggregate before a link type is selected", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          // @ts-expect-error
          base.aggregate("employeeId:exactDistinct"),
      });
    });

    it("does not allow selectProperty when a many link was selected at any point", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) => {
          // @ts-expect-error
          base.pivotTo("peeps").selectProperty("employeeId");

          // @ts-expect-error
          base.pivotTo("lead").pivotTo("peeps").selectProperty("employeeId");

          return base.pivotTo("lead").selectProperty("employeeId");
        },
      });
    });

    it("enforces a return only of correct type", () => {
      client(Employee).withProperties({
        // @ts-expect-error
        "derivedPropertyName": (base) => {
          return base.pivotTo("peeps");
        },
        // @ts-expect-error
        "derivedPropertyName2": (base) => {
          return { incorrect: "type" };
        },
      });
    });

    // Executed code fails since we're providing bad strings to the function
    it.fails("correctly narrows types of aggregate function", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) => {
          // @ts-expect-error
          base.pivotTo("lead").aggregate("notAProperty:sum");

          // @ts-expect-error
          base.pivotTo("lead").aggregate(":avg");

          // @ts-expect-error
          base.pivotTo("lead").aggregate("employeeId:notAnOp");

          // @ts-expect-error
          base.pivotTo("lead").aggregate("");

          base.pivotTo("lead").aggregate("employeeId:collectList");

          return base.pivotTo("lead").aggregate("employeeId:sum");
        },
      });
    });

    // Executed code fails since we're providing bad strings to the function
    it("correctly narrows types of options for aggregate functions", () => {
      const objectSet = client(Employee).withProperties({
        "derivedPropertyName": (base) => {
          // @ts-expect-error
          base.pivotTo("lead").aggregate("employeeId:approximateDistinct", {
            limit: 1,
          });

          base.pivotTo("lead").aggregate("employeeId:collectList", {
            limit: 1,
          });

          base.pivotTo("lead").aggregate("employeeId:collectSet", { limit: 1 });

          base.pivotTo("lead").aggregate("employeeId:collectList", {
            // @ts-expect-error
            percentile: 1,
          });

          return base.pivotTo("lead").aggregate(
            "employeeId:approximatePercentile",
            { percentile: 0.5 },
          );
        },
      });

      expectTypeOf(objectSet).branded.toEqualTypeOf<
        ObjectSet<
          Employee,
          { derivedPropertyName: "double" | undefined }
        >
      >();
    });

    it("correctly narrows types of selectProperty function", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) => {
          // @ts-expect-error
          base.pivotTo("lead").selectProperty("notAProperty");

          return base.pivotTo("lead").selectProperty("employeeStatus");
        },
      }) satisfies ObjectSet<
        Employee,
        {
          "derivedPropertyName": "stringTimeseries" | undefined;
        }
      >;
    });

    it("propagates derived property type to future object set operations with correct types", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
        // @ts-expect-error
      }).where({ "notAProperty": { "$eq": 3 } });

      const numericAggregationObjectSet = client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
      }).where({ "derivedPropertyName": { "$eq": 3 } });

      expectTypeOf(numericAggregationObjectSet).toEqualTypeOf<
        ObjectSet<Employee, {
          derivedPropertyName: "double" | undefined;
        }>
      >();

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:collectList"),
      }).where({ "derivedPropertyName": { "$isNull": false } })
        // @ts-expect-error
        .where({ "derivedPropertyName": { "$eq": [1, 2] } });

      const setAggregationObjectSet = client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("fullName:collectSet"),
      });
      setAggregationObjectSet.where({
        "derivedPropertyName": { "$isNull": false },
      });

      setAggregationObjectSet.where({
        // @ts-expect-error
        "derivedPropertyName": { "$eq": [1, 2] },
      });
      expectTypeOf(setAggregationObjectSet).toEqualTypeOf<
        ObjectSet<Employee, {
          derivedPropertyName: "string"[] | undefined;
        }>
      >();

      const selectPropertyObjectSet = client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).where({ "derivedPropertyName": { "$eq": 3 } });

      expectTypeOf(selectPropertyObjectSet).toEqualTypeOf<
        ObjectSet<Employee, {
          derivedPropertyName: "integer";
        }>
      >();

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("startDate"),
      }).where({ "derivedPropertyName": { "$eq": "datetimeFilter" } });
    });

    it("correctly types multiple property definitions in one clause", () => {
      const objectSet = client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
        "derivedPropertyName2": (base) =>
          base.pivotTo("lead").selectProperty("fullName"),
      }).where({ "derivedPropertyName": { "$eq": 3 } })
        .where({ "derivedPropertyName2": { "$eq": "name" } });

      expectTypeOf(objectSet).toEqualTypeOf<
        ObjectSet<Employee, {
          derivedPropertyName: "double" | undefined;
          derivedPropertyName2: "string" | undefined;
        }>
      >();
    });

    it("ensures other properties are consistently typed", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).where({ "fullName": { "$eq": "A" } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).where({ "employeeId": { "$eq": 2 } });
    });

    it("allows fetching derived properties with correctly typed Osdk.Instance types", async () => {
      const objectWithRdp = await client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).fetchOne(stubData.employee1.employeeId);

      expectTypeOf(objectWithRdp.derivedPropertyName).toEqualTypeOf<
        number
      >();
      expect(objectWithRdp.derivedPropertyName).toBe(
        stubData.employee2.__primaryKey,
      );

      const objectWithUndefinedRdp = await client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).fetchOne(stubData.employee2.employeeId, {
        $select: ["derivedPropertyName"],
      });

      expect(objectWithUndefinedRdp.derivedPropertyName).toBeUndefined();
    });

    it("correctly deserializes attachments and geo properties", async () => {
      const objectWithRdp = await client(objectTypeWithAllPropertyTypes)
        .withProperties({
          "attachmentSelectDp": (base) =>
            base.pivotTo("linkedObjectType").selectProperty("attachment"),
          "geoSelectDp": (base) =>
            base.pivotTo("linkedObjectType").selectProperty("geoShape"),
          "geoCollectListDp": (base) =>
            base.pivotTo("linkedObjectType").aggregate(
              "geoShapeArray:collectList",
            ),
        }).fetchOne(5);

      expectTypeOf(objectWithRdp.attachmentSelectDp).toEqualTypeOf<
        Attachment | undefined
      >();
      expect(objectWithRdp.attachmentSelectDp).toMatchInlineSnapshot(
        `
        {
          "fetchContents": [Function],
          "fetchMetadata": [Function],
          "rid": "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
        }
      `,
      );

      expectTypeOf(objectWithRdp.geoSelectDp).toEqualTypeOf<
        GeoJSON.GeoJSON | undefined
      >();
      expect(objectWithRdp.geoSelectDp).toMatchInlineSnapshot(`
        {
          "coordinates": [
            [
              [
                1,
                1,
              ],
              [
                1,
                2,
              ],
              [
                2,
                2,
              ],
              [
                2,
                1,
              ],
              [
                1,
                1,
              ],
            ],
          ],
          "type": "Polygon",
        }
      `);

      expectTypeOf(objectWithRdp.geoCollectListDp).toEqualTypeOf<
        GeoJSON.GeoJSON[] | undefined
      >();
      expect(objectWithRdp.geoCollectListDp).toMatchInlineSnapshot(`
        [
          [
            {
              "coordinates": [
                [
                  [
                    1,
                    1,
                  ],
                  [
                    1,
                    2,
                  ],
                  [
                    2,
                    2,
                  ],
                  [
                    2,
                    1,
                  ],
                  [
                    1,
                    1,
                  ],
                ],
              ],
              "type": "Polygon",
            },
          ],
        ]
      `);

      // Tests that we deserialize properly for fetchPage as well
      const fetchPageTest = await client(objectTypeWithAllPropertyTypes)
        .withProperties({
          "attachmentSelectDp": (base) =>
            base.pivotTo("linkedObjectType").selectProperty("attachment"),
          "geoSelectDp": (base) =>
            base.pivotTo("linkedObjectType").selectProperty("geoShape"),
          "geoCollectListDp": (base) =>
            base.pivotTo("linkedObjectType").aggregate(
              "geoShapeArray:collectList",
            ),
        }).where({ "id": { "$eq": 5 } }).fetchPage();

      expect(fetchPageTest.data[0].attachmentSelectDp).toMatchInlineSnapshot(
        `
        {
          "fetchContents": [Function],
          "fetchMetadata": [Function],
          "rid": "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
        }
      `,
      );
    });
    it("correctly deserializes count", async () => {
      const objectWithRdp = await client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("$count"),
      }).fetchOne(stubData.employee1.employeeId);

      expectTypeOf(objectWithRdp.derivedPropertyName).toEqualTypeOf<number>();
      expect(objectWithRdp.derivedPropertyName).toEqual(1);
    });
  });

  describe("nearestNeighbors", () => {
    it("works as a subsequent object set operation", async () => {
      const employeeObjectSet = client(Employee).where({
        employeeId: { $in: [50030, 50031] },
      });
      const nearestNeighborsObjectSet = await employeeObjectSet
        .nearestNeighbors(
          "textQuery",
          3,
          "skillSetEmbedding",
        ).fetchPage();

      expect(nearestNeighborsObjectSet.data.length).toEqual(2);
    });

    it("works as a preceding object set operation", async () => {
      const nearestNeighborsObjectSet = client(Employee).nearestNeighbors(
        "textQuery",
        7,
        "skillSetEmbedding",
      );

      const filteredObjectSet = await nearestNeighborsObjectSet.where({
        employeeId: { $in: [50030, 50031] },
      }).fetchPage();

      expect(filteredObjectSet.data.length).toEqual(2);
    });
  });

  // Can't run these tests because we can't load by primary key!
  // describe.each(["fetchOne", "fetchOneWithErrors"] as const)("%s", (k) => {
  //   describe("strictNonNull: false", () => {
  //     describe("includeRid: true", () => {
  //       it("returns bad data", async () => {
  //         // Look at this
  //         const opts = {
  //           $__EXPERIMENTAL_strictNonNull: false,
  //           $includeRid: true,
  //         } as const;
  //         const result = k === "fetchOne"
  //           ? await client(Employee).fetchOne(50033, opts)
  //           : (await client(Employee).fetchOneWithErrors(50033, opts)).value!;

  //         expect(result).not.toBeUndefined();
  //         expectTypeOf(result).branded.toEqualTypeOf<
  //           Osdk<Employee, "$all" | "$notStrict" | "$rid">
  //         >();
  //       });
  //     });

  //     describe("includeRid: false", () => {
  //       it("returns bad data", async () => {
  //         const opts = {
  //           $__EXPERIMENTAL_strictNonNull: false,
  //           $includeRid: false,
  //         } as const;
  //         const result = k === "fetchOne"
  //           ? await client(Employee).fetchOne(50033, opts)
  //           : (await client(Employee).fetchOneWithErrors(50033, opts)).value!;

  //         expect(result).not.toBeUndefined();
  //         expectTypeOf(result).branded.toEqualTypeOf<
  //           Osdk<Employee, "$all" | "$notStrict">
  //         >();
  //       });
  //     });
  //   });
  // });

  describe("conversions", () => {
    describe("strictNonNull: false", () => {
      it("returns bad data", async () => {
        const result = await client(Employee).fetchPage({});

        const empNotStrict = result.data[0];
        const empNotStrict2: Osdk<Employee, "$all" | "$notStrict"> =
          empNotStrict;
        expectTypeOf(empNotStrict).branded.toEqualTypeOf<
          Osdk<Employee, "$all" | "$notStrict">
        >();
        expectTypeOf(empNotStrict).branded.toEqualTypeOf<
          Employee.OsdkObject<never, Employee.PropertyKeys>
        >();
        expectTypeOf(empNotStrict).branded.toEqualTypeOf<
          Employee.OsdkObject<never>
        >();

        expectTypeOf(empNotStrict.employeeId).toEqualTypeOf<
          number
        >();

        expectTypeOf(empNotStrict2.employeeId).toEqualTypeOf<
          number
        >();

        expectTypeOf<ApiNameAsString<FooInterface>>()
          .toEqualTypeOf<"FooInterface">();

        expectTypeOf<
          NonNullable<CompileTimeMetadata<Employee>["interfaceMap"]>
        >()
          .toEqualTypeOf<{
            FooInterface: {
              fooSpt: "fullName";
              fooIdp: "office";
            };
          }>();

        expectTypeOf<PropMapToInterface<Employee, FooInterface>>()
          .toEqualTypeOf<{
            fullName: "fooSpt";
            office: "fooIdp";
          }>();

        expectTypeOf<PropMapToObject<FooInterface, Employee>>()
          .toEqualTypeOf<{
            fooSpt: "fullName";
            fooIdp: "office";
          }>();

        expectTypeOf<ConvertProps<Employee, FooInterface, "fullName">>()
          .toEqualTypeOf<"fooSpt">();

        expectTypeOf<ConvertProps<Employee, FooInterface, "office">>()
          .toEqualTypeOf<"fooIdp">();

        expectTypeOf<JustProps<Employee, "$all">>()
          .toEqualTypeOf<
            | "class"
            | "fullName"
            | "office"
            | "employeeId"
            | "employeeStatus"
            | "startDate"
            | "employeeLocation"
            | "employeeSensor"
            | "skillSet"
            | "skillSetEmbedding"
            | "favoriteRestaurants"
          >();

        expectTypeOf<
          ConvertProps<Employee, FooInterface, "fullName" | "office">
        >()
          .toEqualTypeOf<"fooSpt" | "fooIdp">();

        expectTypeOf<
          ConvertProps<FooInterface, Employee, "fooSpt">
        >()
          .toEqualTypeOf<"fullName">();

        expectTypeOf<
          ConvertProps<
            FooInterface,
            Employee,
            "fooSpt" | "fooIdp",
            "$allBaseProperties"
          >
        >()
          .toEqualTypeOf<
            | "employeeId"
            | "fullName"
            | "office"
            | "class"
            | "startDate"
            | "employeeStatus"
            | "employeeSensor"
            | "employeeLocation"
            | "skillSet"
            | "skillSetEmbedding"
            | "favoriteRestaurants"
          >();

        // We don't have a proper definition that has
        // a non-null property on an interface so
        // we cheese it here to be sure the types work
        type CheesedProp<
          T extends InterfaceDefinition,
          K extends PropertyKeys<T>,
        > = T & { properties: { [KK in K]: { nullable: false } } };

        type CheesedFoo = CheesedProp<FooInterface, "fooSpt">;
        const CheesedFoo: CheesedFoo = FooInterface as CheesedFoo;

        type T = ConvertProps<Employee, CheesedFoo, "fullName">;

        const cheesedFooNotStrict = result.data[0].$as(CheesedFoo);
        expectTypeOf(cheesedFooNotStrict).branded.toEqualTypeOf<
          Osdk<CheesedFoo, "$all" | "$notStrict">
        >();

        cheesedFooNotStrict.fooSpt;
      });
    });
  });
});
