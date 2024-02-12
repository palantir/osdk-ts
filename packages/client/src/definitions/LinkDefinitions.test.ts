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
import type { MockOntology } from "../util/test/mockOntology.js";
import type {
  MultitonLinkAccessor,
  OsdkObjectLinksObject,
  SingletonLinkAccessor,
} from "./LinkDefinitions.js";

describe("LinkDefinitions", () => {
  describe("OsdkObjectLinkObject", () => {
    it("is correctly absent on types with no links", () => {
      expectTypeOf<
        OsdkObjectLinksObject<typeof MockOntology["objects"]["Todo"]>
      >()
        .toEqualTypeOf<never>();
    });

    it("populates on types with links", () => {
      type Objects = typeof MockOntology["objects"];
      type TaskDef = Objects["Task"];
      type PersonDef = Objects["Person"];
      type TodoDef = Objects["Todo"];

      expectTypeOf<OsdkObjectLinksObject<TaskDef>["Todos"]>()
        .toEqualTypeOf<MultitonLinkAccessor<TodoDef>>();

      expectTypeOf<OsdkObjectLinksObject<TaskDef>["RP"]>()
        .toEqualTypeOf<SingletonLinkAccessor<PersonDef>>();

      const q: OsdkObjectLinksObject<TaskDef> = {} as any;
      q.Todos.definition;

      expectTypeOf<OsdkObjectLinksObject<TaskDef>>()
        .toEqualTypeOf<
          {
            Todos: MultitonLinkAccessor<TodoDef>;
            RP: SingletonLinkAccessor<PersonDef>;
          }
        >();
    });
  });
});
