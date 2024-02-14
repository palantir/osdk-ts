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

import type { ObjectTypeDefinition } from "@osdk/api";
import { describe, expectTypeOf, it } from "vitest";
import {
  fetchPageOrThrow,
  type FetchPageOrThrowArgs,
  type SelectArg,
} from "../object/fetchPageOrThrow.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { MockOntology } from "../util/test/mockOntology.js";

describe(fetchPageOrThrow, () => {
  type Objects = typeof MockOntology["objects"];
  type TodoDef = Objects["Todo"];

  it("infers select properly", () => {
    // this helper lets us get returntypeso of functions that are generic
    class Helper<
      T extends ObjectTypeDefinition<any, any>,
      const A extends SelectArg<T>,
    > {
      public fetchPage() {
        return fetchPageOrThrow<T, A>({} as any, {} as any, {} as any);
      }
    }

    // e.g. fetchPageOrThrow({});
    expectTypeOf<Awaited<ReturnType<Helper<TodoDef, {}>["fetchPage"]>>>()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPageOrThrow({ select: [] });
    expectTypeOf<
      Awaited<ReturnType<Helper<TodoDef, { select: [] }>["fetchPage"]>>
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPageOrThrow()
    expectTypeOf<
      Awaited<
        ReturnType<
          Helper<TodoDef, FetchPageOrThrowArgs<TodoDef>>["fetchPage"]
        >
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPageOrThrow({ select: ["text"]}
    expectTypeOf<
      Awaited<
        ReturnType<Helper<TodoDef, { select: ["text"] }>["fetchPage"]>
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "text">>>();
  });
});
