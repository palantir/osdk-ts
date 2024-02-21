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

import type { ObjectTypeDefinition } from "@osdk/api";
import { describe, expectTypeOf, it } from "vitest";
import type { SelectArg } from "../object/fetchPageOrThrow.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import { getLinkedObjectByPkOrThrow } from "./getLinkedObjectByPkOrThrow.js";

describe(getLinkedObjectByPkOrThrow, () => {
  type Objects = typeof MockOntology["objects"];
  type TaskDef = Objects["Task"];
  type PersonDef = Objects["Person"];

  it("infers select properly", () => {
    // this helper lets us get return types of functions that are generic
    class Helper<
      T extends ObjectTypeDefinition<any, any>,
      const L extends keyof T["links"] & string,
      const A extends SelectArg<T>,
    > {
      public get() {
        return getLinkedObjectByPkOrThrow<T, L, A>(
          {} as any,
          {} as any,
          {} as any,
          {} as any,
          {} as any,
        );
      }
    }

    expectTypeOf<Awaited<ReturnType<Helper<TaskDef, "RP", {}>["get"]>>>()
      .toEqualTypeOf<Osdk<PersonDef, "$all">>();

    expectTypeOf<
      Awaited<
        ReturnType<Helper<TaskDef, "RP", SelectArg<PersonDef>>["get"]>
      >
    >()
      .toEqualTypeOf<Osdk<PersonDef, "$all">>();

    // e.g. .lead.get({ select: [] });
    expectTypeOf<
      Awaited<
        ReturnType<Helper<TaskDef, "RP", { select: [] }>["get"]>
      >
    >()
      .toEqualTypeOf<Osdk<PersonDef, "$all">>();

    // e.g. .lead.get({ select: ["name"] });
    expectTypeOf<
      Awaited<
        ReturnType<Helper<TaskDef, "RP", { select: ["name"] }>["get"]>
      >
    >()
      .toEqualTypeOf<Osdk<PersonDef, "name">>();
  });
});
