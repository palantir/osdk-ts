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

import type { Client } from "@osdk/client";
import type { Ontology } from "@osdk/examples.basic.sdk";

/**
 * Demonstrates looking up an employee and for fun adds an `AND` and `ne`
 */
export async function fetchEmployeePageByAdUsername(
  client: Client<Ontology>,
  adUsername: string,
) {
  const result = await client.objects.Employee.where({
    $and: [{ adUsername }, { employeeNumber: { ne: 5 } }],
  }).fetchPageOrThrow();
  // for await (const e of client.objects.Employee.asyncIter()) {
  //   e.__name;
  // }

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
