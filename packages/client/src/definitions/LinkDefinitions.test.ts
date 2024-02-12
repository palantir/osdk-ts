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
import type { ObjectSet2 } from "../objectSet/ObjectSet.js";
import type { MockOntology } from "../util/test/mockOntology.js";
import type {
  OsdkObjectLinksObject2,
  SingletonLinkAccessor,
} from "./LinkDefinitions.js";

describe("LinkDefinitions", () => {
  describe("OsdkObjectLinkObject", () => {
    it("is correctly absent on types with no links", () => {
      expectTypeOf<
        OsdkObjectLinksObject2<typeof MockOntology["objects"]["Todo"]>
      >()
        .toEqualTypeOf<never>();
    });

    it("populates on types with links", () => {
      type Objects = typeof MockOntology["objects"];
      type TaskDef = Objects["Task"];
      type PersonDef = Objects["Person"];
      type TodoDef = Objects["Todo"];

      expectTypeOf<OsdkObjectLinksObject2<TaskDef>["Todos"]>()
        .toEqualTypeOf<ObjectSet2<TodoDef>>();

      expectTypeOf<OsdkObjectLinksObject2<TaskDef>["RP"]>()
        .toEqualTypeOf<SingletonLinkAccessor<PersonDef>>();

      const q: OsdkObjectLinksObject2<TaskDef> = {} as any;
      q.Todos.definition;

      expectTypeOf<OsdkObjectLinksObject2<TaskDef>>()
        .toEqualTypeOf<
          {
            Todos: ObjectSet2<TodoDef>;
            RP: SingletonLinkAccessor<PersonDef>;
          }
        >();
    });
  });
});
