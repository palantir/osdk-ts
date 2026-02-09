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
import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";

export async function basicFetchPage(
  client: Client,
): Promise<Osdk.Instance<Employee>> {
  const objects = await client(Employee).fetchPage();
  const object = objects.data[0];
  if (object == null) {
    throw new Error("No objects returned");
  }
  if (object.employeeId !== 1 || object.fullName !== "John") {
    throw new Error(`Unexpected object returned: ${JSON.stringify(object)}`);
  }
  return object;
}
