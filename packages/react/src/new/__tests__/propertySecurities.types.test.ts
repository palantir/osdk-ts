/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { PropertySecurity } from "@osdk/api";
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { describe, expectTypeOf, it } from "vitest";

import { useOsdkObject } from "../useOsdkObject.js";
import { useOsdkObjects } from "../useOsdkObjects.js";

// These functions only exist to be typechecked; they are never called, so the
// hooks never run outside of a component.

function _useOsdkObjectsWithSecurities() {
  const { data } = useOsdkObjects(Employee, {
    $loadPropertySecurityMetadata: true,
  });
  const employee = data?.[0];
  if (employee == null) return;

  // Values from the cache may have been loaded without metadata.
  expectTypeOf(employee.$propertySecurities).toBeNullable();
  expectTypeOf(employee.$propertySecurities?.fullName).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
}

function _useOsdkObjectsWithoutSecurities() {
  const { data } = useOsdkObjects(Employee);
  const employee = data?.[0];
  if (employee == null) return;
  expectTypeOf(employee).not.toHaveProperty("$propertySecurities");

  const { data: explicitlyOff } = useOsdkObjects(Employee, {
    $loadPropertySecurityMetadata: false,
  });
  const employeeOff = explicitlyOff?.[0];
  if (employeeOff == null) return;
  expectTypeOf(employeeOff).not.toHaveProperty("$propertySecurities");
}

function _useOsdkObjectsWithNonLiteralFlag(flag: boolean) {
  const { data } = useOsdkObjects(Employee, {
    $loadPropertySecurityMetadata: flag,
  });
  expectTypeOf(data?.[0]?.$propertySecurities?.fullName).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
}

function _useOsdkObjectsWithRidsAndSecurities() {
  const { data } = useOsdkObjects(Employee, {
    rids: ["ri.a"],
    $loadPropertySecurityMetadata: true,
  });
  const employee = data?.[0];
  if (employee == null) return;
  expectTypeOf(employee.$rid).toEqualTypeOf<string>();
  expectTypeOf(employee.$propertySecurities?.fullName).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
}

function _useOsdkObjectsWithPivotAndSecurities() {
  const { data } = useOsdkObjects(Employee, {
    pivotTo: "officeLink",
    $loadPropertySecurityMetadata: true,
  });
  const office = data?.[0];
  if (office == null) return;
  expectTypeOf(office.$apiName).toEqualTypeOf<"Office">();
  expectTypeOf(office.$propertySecurities?.$primaryKey).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
}

function _useOsdkObjectsInterfaceWithSecurities() {
  const { data } = useOsdkObjects(FooInterface, {
    $loadPropertySecurityMetadata: true,
  });
  const foo = data?.[0];
  if (foo == null) return;
  expectTypeOf(foo.$propertySecurities?.fooSpt).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
  // Array-valued properties have one entry per element.
  expectTypeOf(foo.$propertySecurities?.fooArray).toEqualTypeOf<
    PropertySecurity[][] | undefined
  >();
}

function _useOsdkObjectWithSecurities() {
  const { object } = useOsdkObject(Employee, 1, {
    $loadPropertySecurityMetadata: true,
  });
  if (object == null) return;
  expectTypeOf(object.$propertySecurities).toBeNullable();
  expectTypeOf(object.$propertySecurities?.fullName).toEqualTypeOf<
    PropertySecurity[] | undefined
  >();
}

function _useOsdkObjectWithoutSecurities() {
  const { object } = useOsdkObject(Employee, 1, { $select: ["fullName"] });
  if (object == null) return;
  expectTypeOf(object).not.toHaveProperty("$propertySecurities");

  const { object: byPk } = useOsdkObject(Employee, 1);
  if (byPk == null) return;
  expectTypeOf(byPk).not.toHaveProperty("$propertySecurities");
}

describe("$propertySecurities hook types", () => {
  it("typechecks", () => {
    expectTypeOf(_useOsdkObjectsWithSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectsWithoutSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectsWithNonLiteralFlag).toBeFunction();
    expectTypeOf(_useOsdkObjectsWithRidsAndSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectsWithPivotAndSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectsInterfaceWithSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectWithSecurities).toBeFunction();
    expectTypeOf(_useOsdkObjectWithoutSecurities).toBeFunction();
  });
});
