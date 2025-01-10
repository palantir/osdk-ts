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
  CompileTimeMetadata,
  ConvertProps,
  InterfaceDefinition,
  ObjectSet,
  Osdk,
  PropertyKeys,
  Result,
} from "@osdk/api";
import { isOk } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid } from "@osdk/api/unstable";
import {
  $ontologyRid,
  BarInterface,
  BgaoNflPlayer,
  Employee,
  FooInterface,
  Office,
} from "@osdk/client.test.ontology";
import { apiServer, stubData } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import type {
  ApiNameAsString,
  JustProps,
  PropMapToInterface,
  PropMapToObject,
} from "../../../api/build/esm/OsdkObjectFrom.js";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("ObjectSet", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
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
    let iter = 0;
    const { data: employees } = await unionedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set subtract", async () => {
    const objectSet = client(Employee);
    const objectSet2 = client(Employee).where({
      employeeId: 50030,
    });
    const subtractedObjectSet = objectSet.subtract(objectSet2);
    let iter = 0;
    const { data: employees } = await subtractedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50031 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set intersect", async () => {
    const objectSet = client(Employee);
    const intersectedObjectSet = objectSet.intersect(objectSet);
    let iter = 0;
    const { data: employees } = await intersectedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50032);
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("orders objects in ascending order without a filter, and returns all results", async () => {
    const { data: employees } = await client(Employee)
      .fetchPage({
        $orderBy: { "employeeId": "asc" },
      });
    expect(employees).toMatchObject([
      {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 50030,
        class: "Red",
        employeeId: 50030,
        employeeStatus: expect.anything(),
        employeeSensor: expect.anything(),
        fullName: "John Doe",
        office: "NYC",
        startDate: "2019-01-01",
        employeeLocation: expect.anything(),
      },
      {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 50031,
        $title: "Jane Doe",
        class: "Blue",
        employeeId: 50031,
        employeeStatus: expect.anything(),
        employeeSensor: expect.anything(),
        fullName: "Jane Doe",
        office: "SEA",
        startDate: "2012-02-12",
        employeeLocation: expect.anything(),
      },
      {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 50032,
        $title: "Jack Smith",
        class: "Red",
        employeeId: 50032,
        employeeStatus: expect.anything(),
        employeeSensor: expect.anything(),
        fullName: "Jack Smith",
        office: "LON",
        startDate: "2015-05-15",
        employeeLocation: expect.anything(),
      },
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
      "ri.employee.i.look.for",
    );
    expectTypeOf<typeof employee>().toMatchTypeOf<
      Osdk<Employee, PropertyKeys<Employee>>
    >;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching by rid with experimental function, with select", async () => {
    const employee = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
    ).fetchOneByRid(
      Employee,
      "ri.employee.i.look.for",
      { $select: ["fullName"] },
    );
    expectTypeOf<typeof employee>().toMatchTypeOf<
      Osdk<Employee, "fullName">
    >;
    expect(employee.$primaryKey).toBe(stubData.employee2.employeeId);
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
    let iter = 0;
    const result = await unionedObjectSet.fetchPageWithErrors();
    if (isOk(result)) {
      const employees = result.value.data;
      for (const emp of employees) {
        expect(emp.employeeId).toEqual(50030 + iter);
        iter += 1;
      }
      expect(iter).toEqual(2);
    }
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

          expect(result.data).toHaveLength(4);
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

          expect(result.data).toHaveLength(4);
          expectTypeOf(result.data[0]).branded.toEqualTypeOf<
            Osdk<Employee, "$all" | "$notStrict">
          >();
        });
      });
    });
  });

  describe.each(["fetchOne", "fetchOneWithErrors"] as const)("%s", (k) => {
    describe("strictNonNull: false", () => {
      describe("includeRid: true", () => {
        it("returns bad data", async () => {
          // Look at this
          const opts = {
            $__EXPERIMENTAL_strictNonNull: false,
            $includeRid: true,
          } as const;
          const result = k === "fetchOne"
            ? await client(Employee).fetchOne(50033, opts)
            : (await client(Employee).fetchOneWithErrors(50033, opts)).value!;

          expect(result).not.toBeUndefined();
          expectTypeOf(result).branded.toEqualTypeOf<
            Osdk<Employee, "$all" | "$notStrict" | "$rid">
          >();
        });
      });

      describe("includeRid: false", () => {
        it("returns bad data", async () => {
          const opts = {
            $__EXPERIMENTAL_strictNonNull: false,
            $includeRid: false,
          } as const;
          const result = k === "fetchOne"
            ? await client(Employee).fetchOne(50033, opts)
            : (await client(Employee).fetchOneWithErrors(50033, opts)).value!;

          expect(result).not.toBeUndefined();
          expectTypeOf(result).branded.toEqualTypeOf<
            Osdk<Employee, "$all" | "$notStrict">
          >();
        });
      });
    });
  });

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
            };
          }>();

        expectTypeOf<PropMapToInterface<Employee, FooInterface>>()
          .toEqualTypeOf<{ fullName: "fooSpt" }>();

        expectTypeOf<PropMapToObject<FooInterface, Employee>>()
          .toEqualTypeOf<{ fooSpt: "fullName" }>();

        expectTypeOf<ConvertProps<Employee, FooInterface, "fullName">>()
          .toEqualTypeOf<"fooSpt">();

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
          >();

        expectTypeOf<
          ConvertProps<Employee, FooInterface, "fullName" | "office">
        >()
          .toEqualTypeOf<"fooSpt">();

        expectTypeOf<ConvertProps<FooInterface, Employee, "fooSpt">>()
          .toEqualTypeOf<"fullName">();

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
