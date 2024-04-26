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
import type { SearchJsonQueryV2 } from "@osdk/omniapi";
import { describe, expect, expectTypeOf, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import type { FooInterface } from "../generatedNoCheck/index.js";
import type {
  FetchPageArgs,
  FetchPageResult,
  SelectArgToKeys,
} from "../object/fetchPage.js";
import { fetchPage, objectSetToSearchJsonV2 } from "../object/fetchPage.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../objectSet/createObjectSet.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { MockOntology } from "../util/test/mockOntology.js";

describe(fetchPage, () => {
  type Objects = typeof MockOntology["objects"];
  type TodoDef = Objects["Todo"];

  it("infers select properly", () => {
    // this helper lets us get return types of functions that are generic
    class Helper<
      T extends ObjectTypeDefinition<any, any>,
      const A extends FetchPageArgs<T>,
    > {
      public fetchPage<
        L extends SelectArgToKeys<T, A>,
        R extends A["includeRid"] extends true ? true : false,
      >() {
        return fetchPage<T, L, R>({} as any, {} as any, {} as any);
      }
    }

    // e.g. fetchPage({});
    expectTypeOf<Awaited<ReturnType<Helper<TodoDef, {}>["fetchPage"]>>>()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage({ select: [] });
    expectTypeOf<
      Awaited<ReturnType<Helper<TodoDef, { select: [] }>["fetchPage"]>>
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage()
    expectTypeOf<
      Awaited<
        ReturnType<
          Helper<TodoDef, FetchPageArgs<TodoDef>>["fetchPage"]
        >
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage({ select: ["text"]}
    expectTypeOf<
      Awaited<
        ReturnType<Helper<TodoDef, { select: ["text"] }>["fetchPage"]>
      >
    >()
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "text">>>();
  });

  it("converts interface objectsets to search properly", () => {
    expect(objectSetToSearchJsonV2(
      {
        type: "filter",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "base",
            objectType: "Todo",
          },
          where: {
            type: "eq",
            field: "text",
            value: "hello",
          },
        },

        where: {
          type: "gt",
          field: "id",
          value: 2,
        },
      },
      "Todo",
      undefined,
    )).toEqual(
      {
        type: "and",
        value: [
          {
            type: "gt",
            field: "id",
            value: 2,
          },
          {
            type: "eq",
            field: "text",
            value: "hello",
          },
        ],
      } satisfies SearchJsonQueryV2,
    );
  });

  it("converts interface objectsets to search properly part 2", () => {
    const client = createMinimalClient(
      MockOntology.metadata,
      "https://foo",
      () => "",
    );
    const objectSet = createObjectSet(MockOntology.objects.Todo, client).where({
      text: "hello",
    }).where({
      id: { $gt: 2 },
    });

    const wireObjectSet = getWireObjectSet(objectSet);

    expect(objectSetToSearchJsonV2(wireObjectSet, "Todo", undefined)).toEqual(
      {
        type: "and",
        value: [
          {
            type: "gt",
            field: "id",
            value: 2,
          },
          {
            type: "eq",
            field: "text",
            value: "hello",
          },
        ],
      } satisfies SearchJsonQueryV2,
    );
  });

  describe("includeRid", () => {
    it("properly returns the correct string for includeRid", () => {
      expectTypeOf<Awaited<FetchPageResult<TodoDef, "text", false>>>()
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "text">[];
          nextPageToken: string | undefined;
        }>();

      expectTypeOf<Awaited<FetchPageResult<TodoDef, "text", true>>>()
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "text" | "$rid">[];
          nextPageToken: string | undefined;
        }>();
    });

    it("works with $all", () => {
      expectTypeOf<Awaited<FetchPageResult<TodoDef, "text" | "id", false>>>()
        .toEqualTypeOf<{
          data: Osdk<TodoDef>[];
          nextPageToken: string | undefined;
        }>();

      expectTypeOf<Awaited<FetchPageResult<TodoDef, "text" | "id", true>>>()
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "$all" | "$rid">[];
          nextPageToken: string | undefined;
        }>();

      expectTypeOf<Awaited<FetchPageResult<TodoDef, "text" | "id", true>>>()
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "$all" | "$rid", "$all" | "$rid">[];
          nextPageToken: string | undefined;
        }>();

      expectTypeOf<Awaited<FetchPageResult<FooInterface, "fooSpt", true>>>()
        .toEqualTypeOf<{
          data: Osdk<FooInterface, "$all" | "$rid", never>[];
          nextPageToken: string | undefined;
        }>();

      expectTypeOf<Awaited<FetchPageResult<FooInterface, "fooSpt", true>>>()
        .toEqualTypeOf<{
          data: Osdk<FooInterface, "$all" | "$rid">[];
          nextPageToken: string | undefined;
        }>();
    });
  });
});
