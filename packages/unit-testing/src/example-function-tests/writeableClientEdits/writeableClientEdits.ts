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

import { Employee } from "@osdk/client.test.ontology";
import type { Edits } from "@osdk/functions";
import type { WriteableClient } from "@osdk/functions/experimental";
import { flushEdits } from "@osdk/functions/unstable-do-not-use";

export async function relocateOffice(
  client: WriteableClient<Edits.Object<Employee>>,
  fromOffice: string,
  toOffice: string,
): Promise<number> {
  const employees = await client(Employee)
    .where({ office: { $eq: fromOffice } })
    .fetchPage();

  for (const employee of employees.data) {
    await client.update(employee, { office: toOffice });
  }

  await flushEdits(client);
  return employees.data.length;
}
