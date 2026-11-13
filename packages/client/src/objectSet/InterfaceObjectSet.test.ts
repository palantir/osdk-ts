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

import type { ObjectSet } from "@osdk/api";
import {
  BarInterface,
  ComplexImplementationInterface,
  ComplexImplementationObject,
  Employee,
  FooInterface,
} from "@osdk/client.test.ontology";
import type { OntologyObjectV2 } from "@osdk/foundry.ontologies";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeEach, describe, expect, expectTypeOf, it } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("ObjectSet", () => {
  let client: Client;
  let apiServer: SetupServer;

  beforeEach(() => {
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
    const santa = interfacers.find((obj) => obj.$primaryKey === 50050);
    expect(santa).toBeDefined();
    expect(santa?.fooSpt).toEqual("Santa Claus");

    for (const foo of interfacers) {
      if (foo.$objectType === "Employee") {
        expect(foo.fooSpt).toEqual(foo.$as(Employee).fullName);
      }
    }
  });

  it("allows fetching by field from a interface object set - where clause", async () => {
    const whereClausedInterface = await client(FooInterface)
      .where({
        fooSpt: "Santa Claus",
      })
      .fetchPage({ $includeAllBaseObjectProperties: true });

    const interfaceObj = whereClausedInterface.data[0];
    expect(interfaceObj.fooSpt).toEqual("Santa Claus");

    const asEmployee = interfaceObj.$as(Employee);
    expect(asEmployee.fullName).toEqual("Santa Claus");
    expect(asEmployee.office).toEqual("NYC");

    const whereClausedInterface2 = await client(FooInterface)
      .where({
        fooSpt: "Santa Claus",
      })
      .fetchPage({
        $includeAllBaseObjectProperties: false,
      });

    const interfaceObj2 = whereClausedInterface2.data[0];
    expect(interfaceObj2.fooSpt).toEqual("Santa Claus");
    const asEmployee2 = interfaceObj2.$as(Employee);
    expect(asEmployee2.fullName).toEqual("Santa Claus");
  });

  it("interface links", () => {
    const objectSet = client(BarInterface).pivotTo("toFoo");
    expectTypeOf<typeof objectSet>().toEqualTypeOf<
      ObjectSet<FooInterface, never>
    >;
  });

  describe("ComplexImplementationInterface (one prop per impl kind)", () => {
    const baseUrl = "https://stack.palantir.com/";

    const complexImplPropertiesV2 =
      stubData.complexImplementationObjectTypeWithLinkTypes
        .implementsInterfaces2!.ComplexImplementationInterface.propertiesV2!;

    const wireMappings = {
      interfaceToObjectTypeMappings: {
        ComplexImplementationInterface: {
          ComplexImplementationObject: Object.fromEntries(
            Object.entries(complexImplPropertiesV2)
              .filter(([, impl]) => impl.type === "localPropertyImplementation")
              .map(([k, impl]) => [
                k,
                (impl as { propertyApiName: string }).propertyApiName,
              ]),
          ),
        },
      },
      interfaceToObjectTypeMappingsV2: {
        ComplexImplementationInterface: {
          ComplexImplementationObject: complexImplPropertiesV2,
        },
      },
    };

    it("casts struct implementations only when their backing properties were fully loaded", async () => {
      const structImplPropertiesV2 = {
        ...complexImplPropertiesV2,
        iReduced: {
          type: "structFieldImplementation" as const,
          structFieldOfProperty: {
            propertyApiName: "multiStruct",
            structFieldApiName: "beta",
          },
        },
      };
      const wireObject: OntologyObjectV2 = {
        __rid: "ri.phonograph2-objects.main.object.complex-impl-1",
        __primaryKey: "k1",
        __apiName: "ComplexImplementationObject",
        id: "k1",
        localValue: "hello",
        nestedStruct: { label: "nested-label", count: 7 },
        multiStruct: {
          alpha: "a-val",
          beta: 42,
          gamma: "ignored",
        },
        multiStructArray: [
          { alpha: "first", beta: 1, gamma: "ignored" },
          { alpha: "second", beta: 2, gamma: "ignored" },
        ],
        arrayValue: [1, 2, 3],
      };
      let responseData = [wireObject];
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.ObjectTypesV2.getFullMetadata(baseUrl, () => ({
            ...stubData.complexImplementationObjectTypeWithLinkTypes,
            implementsInterfaces2: {
              ComplexImplementationInterface: {
                ...stubData.complexImplementationObjectTypeWithLinkTypes
                  .implementsInterfaces2!.ComplexImplementationInterface,
                propertiesV2: structImplPropertiesV2,
              },
            },
          })),
          MockOntologiesV2.OntologyObjectSets.load(baseUrl, () => ({
            data: structuredClone(responseData),
            totalCount: "1",
            propertySecurities: [],
          })),
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            () => ({
              data: structuredClone(responseData),
              ...wireMappings,
              interfaceToObjectTypeMappingsV2: {
                ComplexImplementationInterface: {
                  ComplexImplementationObject: structImplPropertiesV2,
                },
              },
              totalCount: "1",
              propertySecurities: [],
            }),
          ),
        );

        const result = await client(ComplexImplementationInterface).fetchPage({
          $includeAllBaseObjectProperties: true,
        });
        expect(result.data).toHaveLength(1);

        const ifaceObj = result.data[0];
        expect(ifaceObj.iLocal).toEqual("hello");
        expect(ifaceObj.iStructField).toEqual("nested-label");
        expect(ifaceObj.iStruct).toEqual({ theAlpha: "a-val", theBeta: 42 });
        expect(ifaceObj.iStructArray).toEqual([
          { theAlpha: "first", theBeta: 1 },
          { theAlpha: "second", theBeta: 2 },
        ]);
        expect(ifaceObj.iReduced).toEqual(42);

        const objectType = ComplexImplementationObject;
        // @ts-expect-error
        const object = ifaceObj.$as(objectType);
        expect(object).toMatchObject({
          $primaryKey: "k1",
          localValue: "hello",
          nestedStruct: { label: "nested-label", count: 7 },
          multiStruct: { alpha: "a-val", beta: 42, gamma: "ignored" },
          multiStructArray: [
            { alpha: "first", beta: 1, gamma: "ignored" },
            { alpha: "second", beta: 2, gamma: "ignored" },
          ],
          arrayValue: [1, 2, 3],
        });
        expect(
          // @ts-expect-error
          ifaceObj.$as<ComplexImplementationObject>(objectType.apiName),
        ).toBe(object);

        expect(
          // @ts-expect-error
          ifaceObj.$clone().$as(objectType),
        ).toMatchObject({ nestedStruct: { label: "nested-label", count: 7 } });
        expect(
          // @ts-expect-error
          ifaceObj.$clone({ iLocal: "updated" }).$as(objectType),
        ).toMatchObject({ localValue: "updated", nestedStruct: { count: 7 } });

        const directObject = (await client(objectType).fetchPage()).data[0];
        expect(
          // @ts-expect-error
          directObject.$as(ComplexImplementationInterface).$as(objectType),
        ).toBe(directObject);

        const selectedObject = (
          await client(objectType).fetchPage({ $select: ["nestedStruct"] })
        ).data[0];
        expect(() =>
          // @ts-expect-error
          selectedObject.$as(ComplexImplementationInterface).$as(objectType),
        ).toThrowError(/backing property 'multiStruct' was not fully loaded/u);

        responseData = [
          { ...wireObject, nestedStruct: { label: "nested-label" } },
        ];
        const partial = (
          await client(ComplexImplementationInterface).fetchPage()
        ).data[0];
        expect(partial.iStructField).toEqual("nested-label");
        // @ts-expect-error
        expect(() => partial.$as(objectType)).toThrowError(/not fully loaded/u);
        expect(() =>
          // @ts-expect-error
          partial.$as<ComplexImplementationObject>(objectType.apiName),
        ).toThrowError(/not fully loaded/u);
        // @ts-expect-error
        expect(() => partial.$clone().$as(objectType)).toThrowError(
          /not fully loaded/u,
        );
        expect(() =>
          // @ts-expect-error
          partial.$clone({ iLocal: "updated" }).$as(objectType),
        ).toThrowError(/not fully loaded/u);

        responseData = [
          { __apiName: objectType.apiName, __primaryKey: "k1", id: "k1" },
        ];
        const nullable = (
          await client(ComplexImplementationInterface).fetchPage({
            $includeAllBaseObjectProperties: true,
          })
        ).data[0];
        // @ts-expect-error
        expect(nullable.$as(objectType).nestedStruct).toBeUndefined();
      })();
    });

    it("rejects casts with reduced implementations even with all base properties", async () => {
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            () => ({
              data: [
                {
                  __primaryKey: "k1",
                  __apiName: "ComplexImplementationObject",
                  id: "k1",
                  arrayValue: 6,
                },
              ],
              ...wireMappings,
              totalCount: "1",
              propertySecurities: [],
            }),
          ),
        );

        const {
          data: [ifaceObj],
        } = await client(ComplexImplementationInterface).fetchPage({
          $includeAllBaseObjectProperties: true,
        });
        expect(ifaceObj.iReduced).toEqual(6);
        const objectType = ComplexImplementationObject;
        // @ts-expect-error
        expect(() => ifaceObj.$as(objectType)).toThrowError(
          /property 'iReduced' has a reduced implementation/u,
        );
        expect(() =>
          // @ts-expect-error
          ifaceObj.$as<ComplexImplementationObject>(objectType.apiName),
        ).toThrowError(/property 'iReduced' has a reduced implementation/u);
      })();
    });

    it("rejects a scalar backing property for an array struct implementation", async () => {
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            () => ({
              data: [
                {
                  __primaryKey: "k1",
                  __apiName: "ComplexImplementationObject",
                  id: "k1",
                  multiStructArray: { alpha: "first", beta: 1 },
                },
              ],
              ...wireMappings,
              totalCount: "1",
              propertySecurities: [],
            }),
          ),
        );

        await expect(
          client(ComplexImplementationInterface).fetchPage(),
        ).rejects.toThrowError("Expected 'multiStructArray' to be an array");
      })();
    });
  });
});
