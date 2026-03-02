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

export async function getEmployeeOfficeName(
  employee: Osdk.Instance<Employee>,
): Promise<string | undefined> {
  const office = await employee.$link.officeLink.fetchOne();
  return office.name;
}

export async function getEmployeePeepNames(
  employee: Osdk.Instance<Employee>,
): Promise<string[]> {
  const page = await employee.$link.peeps.fetchPage();
  return page.data.map((peep) => peep.fullName ?? "Unknown");
}

export async function countEmployeePeeps(
  employee: Osdk.Instance<Employee>,
): Promise<number> {
  let count = 0;
  for await (const _peep of employee.$link.peeps.asyncIter()) {
    count++;
  }
  return count;
}

export async function getSpecificPeep(
  employee: Osdk.Instance<Employee>,
  peepId: number,
): Promise<Osdk.Instance<Employee>> {
  return employee.$link.peeps.fetchOne(peepId);
}
