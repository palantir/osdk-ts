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
import type {
  DefaultToFalse,
  ObjectSet,
  Osdk,
  OsdkObjectLinksObject,
  SelectArg,
  SingleLinkAccessor,
} from "@osdk/client.api";
import { describe, expectTypeOf, it } from "vitest";
import type { PersonDef, TaskDef, TodoDef } from "../util/test/mockOntology.js";

describe("LinkDefinitions", () => {
  describe("OsdkObjectLinkObject", () => {
    it("is correctly absent on types with no links", () => {
      expectTypeOf<OsdkObjectLinksObject<TodoDef>>()
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

          public fetchOne() {
            return this.accessor.fetchOne<A>();
          }
        }

        // e.g. .lead.fetchOne({});
        expectTypeOf<Awaited<ReturnType<Helper<PersonDef, {}>["fetchOne"]>>>()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.fetchOne();
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, SelectArg<PersonDef>>["fetchOne"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.fetchOne({ select: [] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { $select: [] }>["fetchOne"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "$all">>();

        // e.g. .lead.fetchOne({ select: ["name"] });
        expectTypeOf<
          Awaited<
            ReturnType<Helper<PersonDef, { $select: ["name"] }>["fetchOne"]>
          >
        >()
          .toEqualTypeOf<Osdk<PersonDef, "name">>();
      });
    });
  });
});
