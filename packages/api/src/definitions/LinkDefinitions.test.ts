/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { Result } from "../object/Result.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type { DefaultToFalse } from "./LinkDefinitions.js";

describe("DefaultToFalse", () => {
  it("infers properly", () => {
    expectTypeOf<DefaultToFalse<true>>().toEqualTypeOf<true>();
    expectTypeOf<DefaultToFalse<false>>().toEqualTypeOf<false>();
    expectTypeOf<DefaultToFalse<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<DefaultToFalse<boolean>>().toEqualTypeOf<false>();
  });
});

describe.each(["fetchOne", "fetchOneWithErrors"] as const)(
  "$link.%s",
  (method) => {
    it("applies reducers and main values to selected properties", () => {
      const loadLead = (employee: Osdk.Instance<EmployeeApiTest>) =>
        employee.$link.lead[method]({
          $select: [
            "salaryHistory",
            "addressStruct",
            "bonusHistory",
            "fullName",
          ],
          $applyModifiers: {
            salaryHistory: "applyReducers",
            addressStruct: "applyMainValue",
            bonusHistory: "applyReducersAndExtractMainValue",
          },
          $includeRid: true,
        });

      type Expected = {
        salaryHistory: number | undefined;
        addressStruct: { city: string; zipCode: string } | undefined;
        bonusHistory: number | undefined;
        fullName: string | undefined;
      };
      type Response = Awaited<ReturnType<typeof loadLead>>;
      type Direct = Exclude<Response, Result<unknown>>;
      type Wrapped = Extract<Response, { value: unknown }>["value"];
      expectTypeOf<Pick<Direct, keyof Expected>>().toEqualTypeOf<Expected>();
      expectTypeOf<Pick<Wrapped, keyof Expected>>().toEqualTypeOf<Expected>();
      expectTypeOf<Direct["$rid"]>().toEqualTypeOf<string>();
      expectTypeOf<Wrapped["$rid"]>().toEqualTypeOf<string>();
      expectTypeOf<Direct>().not.toHaveProperty("employeeId");
      expectTypeOf<Wrapped>().not.toHaveProperty("employeeId");
    });

    it.each([undefined, []] as const)(
      "preserves other properties when the selection is %s",
      ($select) => {
        const loadLead = (employee: Osdk.Instance<EmployeeApiTest>) =>
          employee.$link.lead[method]({
            $select,
            $applyModifiers: { salaryHistory: "applyReducers" },
          });

        type Response = Awaited<ReturnType<typeof loadLead>>;
        type Direct = Exclude<Response, Result<unknown>>;
        type Wrapped = Extract<Response, { value: unknown }>["value"];
        expectTypeOf<Direct["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
        expectTypeOf<Wrapped["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
        expectTypeOf<Direct["fullName"]>().toEqualTypeOf<string | undefined>();
        expectTypeOf<Wrapped["fullName"]>().toEqualTypeOf<string | undefined>();
        expectTypeOf<Direct["bonusHistory"]>().toEqualTypeOf<
          { year: number; amount: number }[] | undefined
        >();
        expectTypeOf<Wrapped["bonusHistory"]>().toEqualTypeOf<
          { year: number; amount: number }[] | undefined
        >();
      },
    );

    it("preserves result types without modifiers", () => {
      const loadLead = (employee: Osdk.Instance<EmployeeApiTest>) =>
        employee.$link.lead[method]({
          $select: ["salaryHistory", "addressStruct"],
        });

      type Expected = Osdk.Instance<
        EmployeeApiTest,
        never,
        "salaryHistory" | "addressStruct"
      >;
      expectTypeOf<Awaited<ReturnType<typeof loadLead>>>().toEqualTypeOf<
        Expected | Result<Expected>
      >();
    });

    it("returns all properties when options are omitted", () => {
      const loadLead = (employee: Osdk.Instance<EmployeeApiTest>) =>
        employee.$link.lead[method]();

      type Response = Awaited<ReturnType<typeof loadLead>>;
      type Direct = Exclude<Response, Result<unknown>>;
      type Wrapped = Extract<Response, { value: unknown }>["value"];
      expectTypeOf<
        Pick<Direct, keyof EmployeeApiTest.Props>
      >().toEqualTypeOf<EmployeeApiTest.Props>();
      expectTypeOf<
        Pick<Wrapped, keyof EmployeeApiTest.Props>
      >().toEqualTypeOf<EmployeeApiTest.Props>();
      expectTypeOf<Direct>().not.toHaveProperty("$rid");
      expectTypeOf<Wrapped>().not.toHaveProperty("$rid");
    });

    it("preserves explicit option type arguments", () => {
      const loadLead = (employee: Osdk.Instance<EmployeeApiTest>) =>
        employee.$link.lead[method]<{
          $select: ["salaryHistory"];
          $applyModifiers: { salaryHistory: "applyReducers" };
        }>({
          $select: ["salaryHistory"],
          $applyModifiers: { salaryHistory: "applyReducers" },
        });

      type Expected = Osdk.Instance<
        EmployeeApiTest,
        never,
        "salaryHistory:applyReducers"
      >;
      expectTypeOf<Awaited<ReturnType<typeof loadLead>>>().toEqualTypeOf<
        Expected | Result<Expected>
      >();
    });
  },
);
