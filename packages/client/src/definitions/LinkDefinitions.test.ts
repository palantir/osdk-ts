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
import type {
  FetchPageOrThrowArgs,
  SelectArg,
} from "../object/fetchPageOrThrow.js";
import type { Osdk, OsdkObjectPrimaryKeyType } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import type {
  MultiLinkAccessor,
  OsdkObjectLinksObject,
  SingleLinkAccessor,
} from "./LinkDefinitions.js";

describe("LinkDefinitions", () => {
  type Objects = typeof MockOntology["objects"];
  type TaskDef = Objects["Task"];
  type PersonDef = Objects["Person"];
  type TodoDef = Objects["Todo"];

  describe("OsdkObjectLinkObject", () => {
    it("is correctly absent on types with no links", () => {
      expectTypeOf<
        OsdkObjectLinksObject<typeof MockOntology["objects"]["Todo"]>
      >()
        .toEqualTypeOf<never>();
    });

    it("populates on types with links", () => {
      expectTypeOf<OsdkObjectLinksObject<TaskDef>>()
        .toEqualTypeOf<
          {
            Todos: MultiLinkAccessor<TodoDef>;
            RP: SingleLinkAccessor<PersonDef>;
          }
        >();
    });

    describe("SingletonLinkAccessor", () => {
      it("infers select properly", () => {
        // this helper lets us get return types of functions that are generic
        class Helper<
          T extends ObjectTypeDefinition<any, any>,
          const A extends SelectArg<T>,
        > {
          constructor(private accessor: SingleLinkAccessor<T>) {}

          public get() {
            return this.accessor.get<A>();
          }
        }

        // e.g. .lead.get({});
        expectTypeOf<Awaited<ReturnType<Helper<PersonDef, {}>["get"]>>>()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.get();
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, SelectArg<PersonDef>>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.get({ select: [] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { select: [] }>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.get({ select: ["name"] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { select: ["name"] }>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "name">>();
      });
    });

    describe("MultitonLinkAccessor", () => {
      it("infers select properly", () => {
        // this helper lets us get return types of functions that are generic
        class Helper<
          T extends ObjectTypeDefinition<any, any>,
          const A extends SelectArg<T>,
        > {
          constructor(private accessor: MultiLinkAccessor<T>) {}

          public fetchPage() {
            return this.accessor.fetchPageOrThrow<A>();
          }

          public get(pk: OsdkObjectPrimaryKeyType<T>) {
            return this.accessor.get<A>({} as any);
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

        // e.g. .peeps.get("", {});
        expectTypeOf<Awaited<ReturnType<Helper<PersonDef, {}>["get"]>>>()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .peeps.get("");
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, SelectArg<PersonDef>>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .peeps.get("", { select: [] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { select: [] }>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .peeps.get("", { select: ["name"] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { select: ["name"] }>["get"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "name">>();
      });
    });
  });
});
