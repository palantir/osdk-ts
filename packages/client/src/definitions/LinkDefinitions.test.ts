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
import type { SelectArg } from "../object/fetchPage.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import type {
  DefaultToFalse,
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
            Todos: ObjectSet<TodoDef>;
            RP: SingleLinkAccessor<PersonDef>;
          }
        >();
    });

    describe("DefaultToFalse", () => {
      it("infers properly", () => {
        expectTypeOf<DefaultToFalse<true>>().toEqualTypeOf<true>();
        expectTypeOf<DefaultToFalse<false>>().toEqualTypeOf<false>();
        expectTypeOf<DefaultToFalse<undefined>>().toEqualTypeOf<false>();
        expectTypeOf<DefaultToFalse<boolean>>().toEqualTypeOf<false>();
      });
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
  });
});
