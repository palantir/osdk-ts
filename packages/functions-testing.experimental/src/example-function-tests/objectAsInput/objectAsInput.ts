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

import type { Osdk } from "@osdk/api";
import type { Employee } from "@osdk/client.test.ontology";

export function objectAsInput(
  object: Osdk.Instance<Employee>,
): Osdk.Instance<Employee> {
  if (object.$apiName !== "Employee") {
    throw new Error(
      `Expected object of type Employee, but got ${object.$apiName}`,
    );
  }
  if (object.employeeId == null) {
    throw new Error(
      `Expected object to have employeeId property, but it was missing`,
    );
  }
  return object;
}
