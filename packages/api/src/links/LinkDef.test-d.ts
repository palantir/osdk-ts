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

import { describe, expectTypeOf, it } from "vitest";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type { FooInterfaceApiTest } from "../test/FooInterfaceApiTest.js";
import { createLinkDef } from "./createLinkDef.js";
import type { Path } from "./LinkDef.js";

describe("LinkDef tokens", () => {
  it("then() chains adjacent hops and widens cardinality to 'many'", () => {
    const employeeToFoo = createLinkDef<
      EmployeeApiTest,
      FooInterfaceApiTest,
      false
    >(
      "Employee",
      "owningGroup",
      "FooInterface",
      false,
      false,
    );
    const fooToEmployee = createLinkDef<
      FooInterfaceApiTest,
      EmployeeApiTest,
      true
    >(
      "FooInterface",
      "members",
      "Employee",
      true,
      true,
    );
    expectTypeOf(employeeToFoo.then(fooToEmployee))
      .toEqualTypeOf<Path<EmployeeApiTest, EmployeeApiTest, "many">>();
  });

  it("then() rejects a hop whose source does not match the prior target", () => {
    const employeeToFoo = createLinkDef<
      EmployeeApiTest,
      FooInterfaceApiTest,
      false
    >(
      "Employee",
      "owningGroup",
      "FooInterface",
      false,
      false,
    );
    const employeeToEmployee = createLinkDef<
      EmployeeApiTest,
      EmployeeApiTest,
      true
    >(
      "Employee",
      "childCategories",
      "Employee",
      true,
      false,
    );
    // @ts-expect-error source (Employee) is not adjacent to prior target (FooInterface)
    employeeToFoo.then(employeeToEmployee);
  });
});
