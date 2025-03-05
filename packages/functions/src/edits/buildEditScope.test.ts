/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import {
  Employee,
  Office,
  Person,
  Task,
  Todo,
} from "@osdk/client.test.ontology";
import { describe, expectTypeOf, it } from "vitest";
import { buildEditScope } from "./buildEditScope.js";
import type {
  AddLink,
  CreateObject,
  DeleteObject,
  RemoveLink,
  UpdateObject,
} from "./types.js";

describe(buildEditScope, () => {
  it("returns the correct type", () => {
    const editScope = buildEditScope().link(Office, "occupants").link(
      Task,
      "Todos",
    ).unlink(
      Task,
      "RP",
    ).create(Todo).delete(Employee).update(Person).build();

    expectTypeOf(editScope).toEqualTypeOf<
      Array<
        | AddLink<Office, "occupants">
        | AddLink<Task, "Todos">
        | RemoveLink<Task, "RP">
        | CreateObject<Todo>
        | DeleteObject<Employee>
        | UpdateObject<Person>
      >
    >();
  });
});
