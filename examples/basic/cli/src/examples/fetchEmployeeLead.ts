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

import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

export async function fetchEmployeeLead(
  client: Client<OntologyType>,
  adUsername: string,
) {
  const result = await client.objects.Employee.where({
    adUsername,
  })
    .pivotTo("lead")
    .fetchPageOrThrow({
      select: ["adUsername", "businessTitle", "employeeNumber"],
    });

  // const result = await client
  //   .objectSet("Employee", {
  //     $where: { locationCity: "Palo Alto" },
  //   })
  //   .pivotTo("lead", {
  //     $where: { locationCity: "New York" },
  //   })
  //   .fetchPageOrThrow({
  //     select: ["adUsername", "businessTitle", "employeeNumber"],
  //   });
  console.log(`fetchEmployeePageByAdUsername('${adUsername}')`);
  console.table(
    result.data.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
  console.log();
}
