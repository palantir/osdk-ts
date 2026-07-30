/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { Client, Osdk } from "@osdk/client";
import type { $Interfaces } from "@osdk/client.test.ontology";
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import { createEditBatch, type Edits } from "@osdk/functions";

type edits =
  | Edits.Object<Employee>
  | Edits.Link<Employee, "peeps">
  | Edits.Interface<$Interfaces.FooInterface>;
export function ontologyEdits(
  client: Client,
  object: Osdk.Instance<Employee>,
): edits[] {
  const editBatch = createEditBatch<edits>(client);
  editBatch.create(Employee, { employeeId: 1, fullName: "John Doe" });

  editBatch.update(object, { favoriteRestaurants: ["McDonald's"] });

  editBatch.delete(object);

  editBatch.link(object, "peeps", object);
  editBatch.unlink(object, "peeps", object);

  editBatch.create(FooInterface, { $objectType: "Employee", fooIdp: "bar" });
  return editBatch.getEdits();
}
