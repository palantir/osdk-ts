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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { describe, expectTypeOf, it } from "vitest";
import { type FetchPageOrThrowArgs } from "../object/fetchPageOrThrow.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import { pageLinkedObjectsOrThrow } from "./pageLinkedObjectsOrThrow.js";

describe(pageLinkedObjectsOrThrow, () => {
  type Objects = typeof MockOntology["objects"];
  type TaskDef = Objects["Task"];
  type TodoDef = Objects["Todo"];

  it("infers select properly", () => {
    // this helper lets us get return types of functions that are generic
    class Helper<
      Q extends ObjectOrInterfaceDefinition,
      L extends keyof Q["links"] & string,
      const A extends FetchPageOrThrowArgs<
        NonNullable<Q["links"][L]["__OsdkLinkTargetType"]>
      >,
    > {
      public pageLinked() {
        return pageLinkedObjectsOrThrow<Q, L, A>(
          {} as any,
          {} as any,
          {} as any,
          {} as any,
          {} as any,
        );
      }
    }

    expectTypeOf<
      Awaited<ReturnType<Helper<TaskDef, "Todos", {}>["pageLinked"]>>
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    expectTypeOf<
      Awaited<
        ReturnType<Helper<TaskDef, "Todos", { select: [] }>["pageLinked"]>
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    expectTypeOf<
      Awaited<
        ReturnType<
          Helper<TaskDef, "Todos", FetchPageOrThrowArgs<TodoDef>>["pageLinked"]
        >
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    expectTypeOf<
      Awaited<
        ReturnType<Helper<TaskDef, "Todos", { select: ["text"] }>["pageLinked"]>
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "text">>>();
  });
});
