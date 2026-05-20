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
  ComplexImplementationInterface,
  ComplexImplementationObject,
  Employee,
  FooInterface,
} from "@osdk/client.test.ontology";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

import type { ObjectSet } from "@osdk/api";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
  stubData,
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
    expect(asEmployee2.fullName).toEqual("Santa Claus");
  });

  it("interface links", async () => {
    const objectSet = client(BarInterface).pivotTo("toFoo");
    expectTypeOf<typeof objectSet>().toEqualTypeOf<
      ObjectSet<FooInterface, never>
    >;
  });

  describe("ComplexImplementationInterface (one prop per impl kind)", () => {
    const baseUrl = "https://stack.palantir.com/";

    const complexImplPropertiesV2 = stubData
      .complexImplementationObjectTypeWithLinkTypes
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

    it("derives interface property values from non-local implementations and rejects $as back to the OT", async () => {
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
            baseUrl,
            () => ({
              data: [
                {
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
                  arrayValue: [1, 2, 3],
                },
              ],
              ...wireMappings,
              totalCount: "1",
              propertySecurities: [],
            }),
          ),
        );

        const result = await client(ComplexImplementationInterface).fetchPage();
        expect(result.data).toHaveLength(1);

        const ifaceObj = result.data[0];
        expect(ifaceObj.iLocal).toEqual("hello");
        expect(ifaceObj.iStructField).toEqual("nested-label");
        expect(ifaceObj.iStruct).toEqual({ theAlpha: "a-val", theBeta: 42 });
        expect(ifaceObj.iReduced).toEqual([1, 2, 3]);

        // @ts-expect-error
        expect(() => ifaceObj.$as(ComplexImplementationObject)).toThrowError(
          /has a non-local implementation/,
        );
      })();
    });
  });
});
