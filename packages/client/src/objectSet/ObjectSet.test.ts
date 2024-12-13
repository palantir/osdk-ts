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
  ObjectMetadata,
  ObjectSet,
  Osdk,
  PropertyKeys,
  Result,
  WithPropertiesClause,
} from "@osdk/api";
import { isOk, WhereClause } from "@osdk/api";
import {
  $ontologyRid,
  BarInterface,
  Employee,
  FooInterface,
  Office,
} from "@osdk/client.test.ontology";
import type { DerivedPropertyDefinition } from "@osdk/internal.foundry.core";
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
import { createWithPropertiesObjectSet } from "../derivedProperties/createWithPropertiesObjectSet.js";

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

  describe("Derived Properties Object Set", () => {
    it("does not allow aggregate or selectProperty before a link type is selected", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          // @ts-expect-error
          base.aggregate("employeeId:exactDistinct"),
      });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          // @ts-expect-error
          base.selectProperty("employeeId"),
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
      client(Employee).withProperties({
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
    });

    it("correctly narrows types of selectProperty function", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) => {
          // @ts-expect-error
          base.pivotTo("lead").selectProperty("notAProperty");

          return base.pivotTo("lead").selectProperty("employeeStatus");
        },
      });
    });

    it("propagates derived property type to future object set operations with correct types", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
        // @ts-expect-error
      }).where({ "notAProperty": { "$eq": 3 } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
      }).where({ "derivedPropertyName": { "$eq": 3 } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:collectList"),
      }).where({ "derivedPropertyName": { "$isNull": false } })
        // @ts-expect-error
        .where({ "derivedPropertyName": { "$eq": [1, 2] } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:collectSet"),
      }).where({ "derivedPropertyName": { "$isNull": false } })
        // @ts-expect-error
        .where({ "derivedPropertyName": { "$eq": [1, 2] } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).where({ "derivedPropertyName": { "$eq": 3 } });

      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("startDate"),
      }).where({ "derivedPropertyName": { "$eq": "datetimeFilter" } });
    });

    it("correctly types multiple property definitions in one clause", () => {
      client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").aggregate("employeeId:sum"),
        "derivedPropertyName2": (base) =>
          base.pivotTo("lead").selectProperty("fullName"),
      }).where({ "derivedPropertyName": { "$eq": 3 } })
        .where({ "derivedPropertyName2": { "$eq": "name" } });
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
      }).fetchOne(50035);

      expectTypeOf(objectWithRdp.derivedPropertyName).toEqualTypeOf<
        number | undefined
      >();
      expect(objectWithRdp.derivedPropertyName).toBe(1);

      const objectWithUndefinedRdp = await client(Employee).withProperties({
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId"),
      }).fetchOne(50036);

      expect(objectWithUndefinedRdp.derivedPropertyName).toBeUndefined();
    });

    describe("withPropertiesObjectSet", () => {
      it("correctly creates basic object set with derived properties", () => {
        const map = new Map<string, DerivedPropertyDefinition>();
        const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
          type: "methodInput",
        }, map);

        const clause: WithPropertiesClause<Employee> = {
          "derivedPropertyName": (base) =>
            base.pivotTo("lead").selectProperty("employeeId"),
        };

        const result = clause["derivedPropertyName"](deriveObjectSet);
        const definition = map.get(result.definitionId);
        expect(definition).toMatchInlineSnapshot(`
          {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "type": "methodInput",
              },
              "type": "searchAround",
            },
            "operation": {
              "selectedPropertyApiName": "employeeId",
              "type": "get",
            },
            "type": "selection",
          }
        `);
      });

      it("correctly handles multiple definitions in one clause", () => {
        const map = new Map<string, DerivedPropertyDefinition>();
        const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
          type: "methodInput",
        }, map);

        const clause: WithPropertiesClause<Employee> = {
          "derivedPropertyName": (base) =>
            base.pivotTo("lead").aggregate("startDate:approximatePercentile", {
              percentile: 0.5,
            }),

          "secondaryDerivedPropertyName": (base) =>
            base.pivotTo("lead").aggregate("fullName:collectSet", {
              limit: 10,
            }),
        };

        const result = clause["derivedPropertyName"](deriveObjectSet);
        const definition = map.get(result.definitionId);

        const secondResult = clause["secondaryDerivedPropertyName"](
          deriveObjectSet,
        );
        const secondDefinition = map.get(secondResult.definitionId);

        expect(definition).toMatchInlineSnapshot(`
          {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "type": "methodInput",
              },
              "type": "searchAround",
            },
            "operation": {
              "approximatePercentile": 0.5,
              "selectedPropertyApiName": "startDate",
              "type": "approximatePercentile",
            },
            "type": "selection",
          }
        `);

        expect(secondDefinition).toMatchInlineSnapshot(`
          {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "type": "methodInput",
              },
              "type": "searchAround",
            },
            "operation": {
              "limit": 10,
              "selectedPropertyApiName": "fullName",
              "type": "collectSet",
            },
            "type": "selection",
          }
        `);
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
