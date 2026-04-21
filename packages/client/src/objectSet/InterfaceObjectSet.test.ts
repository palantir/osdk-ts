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

import {
  BarInterface,
  Employee,
  FooInterface,
} from "@osdk/client.test.ontology";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

import type { ObjectSet, Osdk, PropertyKeys } from "@osdk/api";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
} from "@osdk/shared.test";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("ObjectSet", () => {
  let client: Client;
  let apiServer: SetupServer;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client, apiServer } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  it("does not allow intersect/union/subtract with implementing interface types, for now", () => {
    const employeeObjectSet = client(Employee);
    const fooInterfaceSet = client(FooInterface);

    // @ts-expect-error
    employeeObjectSet.union(fooInterfaceSet);

    // @ts-expect-error
    employeeObjectSet.subtract(fooInterfaceSet);

    // @ts-expect-error
    employeeObjectSet.intersect(fooInterfaceSet);
  });

  it("interface objects set loading", async () => {
    const objectSet = client(FooInterface);
    const { data: interfacers } = await objectSet.fetchPage();
    const santa = interfacers.find(obj => obj.$primaryKey === 50050);
    expect(santa).toBeDefined();
    expect(santa?.fooSpt).toEqual("Santa Claus");

    for (const foo of interfacers) {
      if (foo.$objectType === "Employee") {
        expect(foo.fooSpt).toEqual(foo.$as(Employee).fullName);
      }
    }
  });

  it("allows fetching by field from a interface object set - where clause", async () => {
    const whereClausedInterface = await client(FooInterface).where({
      fooSpt: "Santa Claus",
    }).fetchPage({ $includeAllBaseObjectProperties: true });

    const interfaceObj = whereClausedInterface.data[0];
    expect(interfaceObj.fooSpt).toEqual("Santa Claus");

    const asEmployee = interfaceObj.$as(Employee);
    expectTypeOf<typeof asEmployee>().toEqualTypeOf<
      Osdk.Instance<
        Employee,
        "$allBaseProperties",
        | Exclude<
          PropertyKeys<Employee>,
          "employeeProfile" | "performanceScores"
        >
        | "employeeProfile:applyMainValue"
        | "performanceScores:applyReducers",
        {}
      >
    >;

    expect(asEmployee.fullName).toEqual("Santa Claus");
    expect(asEmployee.office).toEqual("NYC");

    const whereClausedInterface2 = await client(FooInterface).where({
      fooSpt: "Santa Claus",
    }).fetchPage({
      $includeAllBaseObjectProperties: false,
    });

    const interfaceObj2 = whereClausedInterface2.data[0];
    expect(interfaceObj2.fooSpt).toEqual("Santa Claus");
    const asEmployee2 = interfaceObj2.$as(Employee);

    expectTypeOf<typeof asEmployee2>().toEqualTypeOf<
      Osdk.Instance<Employee, never, "fullName" | "office", {}>
    >;

    expect(asEmployee2.fullName).toEqual("Santa Claus");
    // @ts-expect-error
    expect(asEmployee2.employeeId).toBeUndefined();
  });

  it("interface links", async () => {
    const objectSet = client(BarInterface).pivotTo("toFoo");
    expectTypeOf<typeof objectSet>().toEqualTypeOf<
      ObjectSet<FooInterface, never>
    >;
  });

  describe("interface → $as(objectType) carries modifier-bearing data", () => {
    const baseUrl = "https://stack.palantir.com/";

    const interfaceToObjectMappings = {
      interfaceToObjectTypeMappings: {
        FooInterface: { Employee: { fooSpt: "fullName", fooIdp: "office" } },
      },
      interfaceToObjectTypeMappingsV2: {
        FooInterface: {
          Employee: {
            fooSpt: {
              type: "localPropertyImplementation" as const,
              propertyApiName: "fullName",
            },
            fooIdp: {
              type: "localPropertyImplementation" as const,
              propertyApiName: "office",
            },
          },
        },
      },
    };

    it("explicit $as(Employee): server returns reduced/mainValue data for interface loads, cast type reflects this", async () => {
      await apiServer.boundary(async () => {
        let capturedRequest: unknown;

        apiServer.use(
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            async ({ request }) => {
              capturedRequest = await request.json();
              return {
                data: [
                  {
                    __rid:
                      "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
                    __primaryKey: 50030,
                    __apiName: "Employee",
                    employeeId: 50030,
                    fullName: "John Doe",
                    office: "NYC",
                    employeeProfile: {
                      bio:
                        "Senior engineer with expertise in distributed systems",
                    },
                    performanceScores: 95.5,
                  },
                ],
                ...interfaceToObjectMappings,
                totalCount: "1",
                propertySecurities: [],
              };
            },
          ),
        );

        const result = await client(FooInterface).fetchPage({
          $includeAllBaseObjectProperties: true,
        });

        expect(result.data).toHaveLength(1);
        expect(capturedRequest).toMatchObject({
          objectSet: {
            type: "intersect",
            objectSets: [
              { type: "interfaceBase", interfaceType: "FooInterface" },
              {
                type: "interfaceBase",
                interfaceType: "FooInterface",
                includeAllBaseObjectProperties: true,
              },
            ],
          },
        });

        const interfaceObj = result.data[0];
        expect(interfaceObj.fooSpt).toEqual("John Doe");

        const asEmployee = interfaceObj.$as(Employee);
        expect(asEmployee.fullName).toEqual("John Doe");
        expect(asEmployee.office).toEqual("NYC");
        expect(asEmployee.employeeProfile).toEqual({
          bio: "Senior engineer with expertise in distributed systems",
        });
        expect(asEmployee.performanceScores).toEqual(95.5);

        expectTypeOf<typeof asEmployee>().toEqualTypeOf<
          Osdk.Instance<
            Employee,
            "$allBaseProperties",
            | Exclude<
              PropertyKeys<Employee>,
              "employeeProfile" | "performanceScores"
            >
            | "employeeProfile:applyMainValue"
            | "performanceScores:applyReducers",
            {}
          >
        >;
      })();
    });

    it("implicit cast (interface load): $as(FooInterface) on underlying object happens internally", async () => {
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            () => {
              return {
                data: [
                  {
                    __rid:
                      "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
                    __primaryKey: 50030,
                    __apiName: "Employee",
                    fullName: "John Doe",
                    office: "NYC",
                  },
                ],
                ...interfaceToObjectMappings,
                totalCount: "1",
                propertySecurities: [],
              };
            },
          ),
        );

        const result = await client(FooInterface).fetchPage();
        const interfaceObj = result.data[0];

        expect(interfaceObj.$apiName).toEqual("FooInterface");
        expect(interfaceObj.$objectType).toEqual("Employee");
        expect(interfaceObj.fooSpt).toEqual("John Doe");
        expect(interfaceObj.fooIdp).toEqual("NYC");

        const backToEmployee = interfaceObj.$as(Employee);
        expect(backToEmployee.$apiName).toEqual("Employee");
        expect(backToEmployee.fullName).toEqual("John Doe");
        expect(backToEmployee.office).toEqual("NYC");

        expectTypeOf<typeof backToEmployee>().toEqualTypeOf<
          Osdk.Instance<Employee, never, "fullName" | "office", {}>
        >;
      })();
    });
  });
});
