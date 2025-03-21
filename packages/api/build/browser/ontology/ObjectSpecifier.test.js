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
describe("ObjectSpecifier", () => {
  const fauxObjectSet = {
    fetchOne: vi.fn(() => Promise.resolve(() => ""))
  };
  it("should only work with same Object Specifier", async () => {
    expectTypeOf().toMatchTypeOf();
    const EmployeeApiTest = await fauxObjectSet.fetchOne(123);
    const specifier = EmployeeApiTest.$objectSpecifier;
    expectTypeOf(specifier).toMatchTypeOf();
    expectTypeOf().toMatchTypeOf();
  });
  describe("interfaces", () => {
    const fauxInterfaceObjectSet = {
      fetchPage: vi.fn(() => Promise.resolve({
        data: [""]
      }))
    };
    it("should work with loaded interfaces", async () => {
      expectTypeOf().toMatchTypeOf();
      const FooInterfaceApiTest = await fauxInterfaceObjectSet.fetchPage();
      const specifier = FooInterfaceApiTest.data[0].$objectSpecifier;
      expectTypeOf(specifier).toMatchTypeOf();
    });
    it("should only work with known object types", async () => {
      const EmployeeApiTest = await fauxObjectSet.fetchOne(123);
      const specifier = EmployeeApiTest.$objectSpecifier;
      expectTypeOf(specifier).toMatchTypeOf();
      const FooInterfaceApiTest = (await fauxInterfaceObjectSet.fetchPage()).data[0];
      FooInterfaceApiTest.$objectSpecifier;
      expectTypeOf().toMatchTypeOf();
      expectTypeOf().toMatchTypeOf // @ts-expect-error
      ();
    });
  });
});
//# sourceMappingURL=ObjectSpecifier.test.js.map