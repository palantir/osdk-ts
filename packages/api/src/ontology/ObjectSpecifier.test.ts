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

import { describe, expectTypeOf, it, vi } from "vitest";
import type { Employee } from "../test/Employee.js";
import type { FooInterface } from "../test/FooInterface.js";
import type { ObjectSpecifier } from "./ObjectSpecifier.js";

describe("ObjectSpecifier", () => {
  const fauxObjectSet = {
    fetchOne: vi.fn(() => Promise.resolve(() => "")),
  } as any as Employee.ObjectSet;

  it("should only work with same ObjectID", async () => {
    type EmployeeObjectId = ObjectSpecifier<Employee>;

    expectTypeOf<EmployeeObjectId>().toMatchTypeOf<
      string & { __apiName?: "Employee" }
    >();

    const employee = await fauxObjectSet.fetchOne(123);

    const specifier: EmployeeObjectId = employee.$objectSpecifier;

    expectTypeOf(specifier).toMatchTypeOf<
      string & { __apiName?: "Employee" }
    >();

    type NonEmployeeObjectId = ObjectSpecifier<
      { apiName: "NotEmployee"; osdkMetadata: any; type: "object" }
    >;

    // @ts-expect-error
    expectTypeOf<NonEmployeeObjectId>().toMatchTypeOf<EmployeeObjectId>();
  });

  describe("interfaces", () => {
    const fauxInterfaceObjectSet = {
      fetchPage: vi.fn(() => Promise.resolve({ data: [""] })),
    } as any as FooInterface.ObjectSet;

    it("should work with loaded interfaces", async () => {
      type FooInterfaceObjectSpecifier = ObjectSpecifier<FooInterface>;

      expectTypeOf<FooInterfaceObjectSpecifier>().toMatchTypeOf<
        string & { __apiName?: "FooInterface" | "Employee" }
      >();

      const fooInterface = await fauxInterfaceObjectSet.fetchPage();

      const specifier = fooInterface.data[0].$objectSpecifier;

      expectTypeOf(specifier).toMatchTypeOf<
        string & { __apiName?: "FooInterface" | "Employee" }
      >();
    });

    it("should only work with known object types", async () => {
      const employee = await fauxObjectSet.fetchOne(123);

      const specifier = employee.$objectSpecifier;

      expectTypeOf(specifier).toMatchTypeOf<
        string & { __apiName?: "Employee" }
      >();

      const fooInterface = (await fauxInterfaceObjectSet.fetchPage()).data[0];

      const fooInterfaceObjectSpecifier = fooInterface.$objectSpecifier;

      expectTypeOf<typeof specifier>().toMatchTypeOf<
        typeof fooInterfaceObjectSpecifier
      >();

      type NonEmployeeObjectSpecifier = ObjectSpecifier<
        { apiName: "NotEmployee"; osdkMetadata: any; type: "object" }
      >;

      expectTypeOf<NonEmployeeObjectSpecifier>().toMatchTypeOf // @ts-expect-error
      <typeof fooInterfaceObjectSpecifier>();
    });
  });
});
