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
import type { Osdk } from "../OsdkObjectFrom.js";
import { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import { defineShape } from "./defineShape.js";

describe("ShapeObjectTypeDefinition - MAKE_REQUIRED transformations", () => {
  it("transforms properties with requiredOrThrow", () => {
    const SlimEmployee = defineShape()
      .requiredOrThrow("fullName", "employeeId")
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof SlimEmployee>;

    // Should be non-nullable
    expectTypeOf<Instance["fullName"]>().toEqualTypeOf<string>();
    expectTypeOf<Instance["employeeId"]>().toEqualTypeOf<number>();

    // Other properties should remain as-is
    expectTypeOf<Instance["class"]>().toMatchTypeOf<string | undefined>();
  });

  it("transforms properties with requiredOrDrop", () => {
    const FilteredEmployee = defineShape()
      .requiredOrDrop("isActive", "rank")
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof FilteredEmployee>;

    expectTypeOf<Instance["isActive"]>().toEqualTypeOf<boolean>();
    expectTypeOf<Instance["rank"]>().toEqualTypeOf<number>();
  });

  it("transforms properties with selectWithDefaults", () => {
    const DefaultEmployee = defineShape()
      .selectWithDefaults({ rank: 1, hourlyRate: 50.0 })
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof DefaultEmployee>;

    expectTypeOf<Instance["rank"]>().toEqualTypeOf<number>();
    expectTypeOf<Instance["hourlyRate"]>().toEqualTypeOf<number>();
  });

  it("combines multiple transformation methods", () => {
    const CombinedShape = defineShape()
      .requiredOrThrow("fullName")
      .requiredOrDrop("employeeId")
      .selectWithDefaults({ rank: 1 })
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof CombinedShape>;

    expectTypeOf<Instance["fullName"]>().toEqualTypeOf<string>();
    expectTypeOf<Instance["employeeId"]>().toEqualTypeOf<number>();
    expectTypeOf<Instance["rank"]>().toEqualTypeOf<number>();
    expectTypeOf<Instance["class"]>().toMatchTypeOf<string | undefined>();
  });

  it("preserves special properties ($link, $as, $clone, etc.)", () => {
    const SlimEmployee = defineShape()
      .requiredOrThrow("fullName")
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof SlimEmployee>;

    expectTypeOf<Instance["$link"]>().not.toBeNever();
    expectTypeOf<Instance["$as"]>().not.toBeNever();
    expectTypeOf<Instance["$clone"]>().not.toBeNever();
  });

  it("works with shape.extend() merging MAKE_REQUIRED sets", () => {
    const BaseShape = defineShape()
      .requiredOrThrow("fullName");

    const ExtendedShape = defineShape()
      .requiredOrDrop("employeeId")
      .extend(BaseShape)
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof ExtendedShape>;

    // Both should be non-nullable
    expectTypeOf<Instance["fullName"]>().toEqualTypeOf<string>();
    expectTypeOf<Instance["employeeId"]>().toEqualTypeOf<number>();
  });

  it("handles shapes without any required transformations", () => {
    const PlainShape = defineShape()
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof PlainShape>;

    // All should remain nullable
    expectTypeOf<Instance["fullName"]>().toEqualTypeOf<string | undefined>();
    expectTypeOf<Instance["employeeId"]>().toEqualTypeOf<number | undefined>();
    expectTypeOf<Instance["isActive"]>().toEqualTypeOf<boolean | undefined>();
  });

  it("preserves primary key type correctly", () => {
    const SlimEmployee = defineShape()
      .requiredOrThrow("employeeId")
      .asType(EmployeeApiTest);

    type Instance = Osdk.Instance<typeof SlimEmployee>;

    // Primary key should be non-nullable
    expectTypeOf<Instance["employeeId"]>().toEqualTypeOf<number>();
  });
});
