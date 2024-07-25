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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { Osdk, ValidToFrom } from "@osdk/client.api";
import type { Employee, FooInterface } from "@osdk/client.test.ontology";
import { describe, expectTypeOf, it } from "vitest";

describe("Osdk", () => {
  class OsdkAsHelperClass<
    FROM extends ObjectOrInterfaceDefinition,
    P extends string,
    Z extends string,
    TO extends ValidToFrom<FROM>,
  > {
    constructor(private osdkObj: Osdk<FROM, P, Z>) {}

    public as(to: TO) {
      return this.osdkObj.$as(to);
    }
  }
  type OsdkAsHelper<
    FROM extends ObjectOrInterfaceDefinition,
    P extends string,
    Z extends string,
    TO extends ValidToFrom<FROM>,
  > = ReturnType<OsdkAsHelperClass<FROM, P, Z, TO>["as"]>;

  type GetUnderlyingProps<O extends Osdk<any, any, any>> = O extends
    Osdk<any, any, infer Z> ? Z : never;

  describe("the reason for this weird test", () => {
    it("can't properly compare the retained types without it", () => {
      type InvalidPropertyName = "not a real prop";

      // This should fail but it doesn't. We don't actively capture Z
      // (and we cant)
      expectTypeOf<
        OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
      >().toEqualTypeOf<
        Osdk<FooInterface, "fooSpt", InvalidPropertyName>
      >();

      // See, when we dig via infer we find it doesn't match
      expectTypeOf<
        GetUnderlyingProps<
          OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
        >
      >().not.toEqualTypeOf<InvalidPropertyName>();

      // and that it can match correctly
      expectTypeOf<
        GetUnderlyingProps<
          OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
        >
      >().toEqualTypeOf<"fullName">();

      // converting to self preserves the original props
      expectTypeOf<
        OsdkAsHelper<FooInterface, "fooSpt", "fullName", FooInterface>
      >().toEqualTypeOf<Osdk<FooInterface, "fooSpt", "fullName">>();
    });
  });

  describe("$notStrict", () => {
    describe("is present", () => {
      it("makes { nullable: false } as `|undefined`", () => {
        expectTypeOf<
          Osdk<Employee, "employeeId" | "$notStrict">["employeeId"]
        >()
          .toEqualTypeOf<number | undefined>();
        expectTypeOf<
          GetUnderlyingProps<
            OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
          >
        >().toEqualTypeOf<"fullName">();
      });
    });

    describe("is absent", () => {
      it("makes { nullable: false } as NOT `|undefined`", () => {
        expectTypeOf<
          Osdk<Employee, "employeeId">["employeeId"]
        >()
          .toEqualTypeOf<number>();
        expectTypeOf<
          GetUnderlyingProps<
            OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
          >
        >().toEqualTypeOf<"fullName">();
      });
    });
  });

  it("Converts into self properly", () => {
    expectTypeOf<
      GetUnderlyingProps<
        OsdkAsHelper<FooInterface, "fooSpt", "fullName", FooInterface>
      >
    >().toEqualTypeOf<"fullName">();
  });

  it("retains original props if set", () => {
    expectTypeOf<
      GetUnderlyingProps<
        OsdkAsHelper<Employee, "fullName", "fullName", FooInterface>
      >
    >().toEqualTypeOf<"fullName">();
  });

  it("falls back to all props as undefined when never", () => {
    expectTypeOf<
      Omit<
        Osdk<FooInterface, never>,
        | "$as"
        | "$apiName"
        | "__apiName"
        | "$link"
        | "__primaryKey"
        | "$objectType"
        | "$primaryKey"
        | "$title"
      >
    >().toEqualTypeOf<
      { fooSpt: string | undefined }
    >();
  });
});
