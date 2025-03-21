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

import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { createClient } from "../createClient.js";
describe("ObjectSet", () => {
  let client;
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({
      client
    } = testSetup);
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
    const {
      data: interfacers
    } = await objectSet.fetchPage();
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
      fooSpt: "Santa Claus"
    }).fetchPage({
      $includeAllBaseObjectProperties: true
    });
    const interfaceObj = whereClausedInterface.data[0];
    expect(interfaceObj.fooSpt).toEqual("Santa Claus");
    const asEmployee = interfaceObj.$as(Employee);
    expectTypeOf().toEqualTypeOf;
    expect(asEmployee.fullName).toEqual("Santa Claus");
    expect(asEmployee.office).toEqual("NYC");
    const whereClausedInterface2 = await client(FooInterface).where({
      fooSpt: "Santa Claus"
    }).fetchPage({
      $includeAllBaseObjectProperties: false
    });
    const interfaceObj2 = whereClausedInterface2.data[0];
    expect(interfaceObj2.fooSpt).toEqual("Santa Claus");
    const asEmployee2 = interfaceObj2.$as(Employee);
    expectTypeOf().toEqualTypeOf;
    expect(asEmployee2.fullName).toEqual("Santa Claus");
    // @ts-expect-error
    expect(asEmployee2.office).toBeUndefined();
  });
});
//# sourceMappingURL=InterfaceObjectSet.test.js.map