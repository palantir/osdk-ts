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

import type { ObjectSet, Osdk } from "@osdk/api";
import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";

export async function objectSetArithmetic(
  client: Client,
  employees: ObjectSet<Employee>,
): Promise<{
  union: Array<Osdk.Instance<Employee>>;
  standaloneUnion: Array<Osdk.Instance<Employee>>;
  intersect: Array<Osdk.Instance<Employee>>;
  subtract: Array<Osdk.Instance<Employee>>;
}> {
  const employeeSet = client(Employee);
  const [union, standaloneUnion, intersect, subtract] = await Promise.all([
    employeeSet.union(employees).fetchPage(),
    employees.union(employeeSet).fetchPage(),
    employeeSet.intersect(employees).fetchPage(),
    employeeSet.subtract(employees).fetchPage(),
  ]);

  return {
    union: union.data,
    standaloneUnion: standaloneUnion.data,
    intersect: intersect.data,
    subtract: subtract.data,
  };
}
