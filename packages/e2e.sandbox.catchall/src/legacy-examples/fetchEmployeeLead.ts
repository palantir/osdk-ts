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
import { Employee } from "@osdk/e2e.generated.catchall";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

export async function fetchEmployeeLead(
  client: Client,
  adUsername: string,
): Promise<void> {
  const result = await client(Employee).where({
    adUsername,
  })
    .pivotTo("lead")
    .fetchPage({
      $select: ["adUsername", "businessTitle", "employeeNumber"],
    });

  const lead = await result.data[0].$link.lead.fetchOne({
    $select: ["adUsername"],
    $includeRid: false,
  });
  const lead2 = await result.data[0].$link.lead.fetchOne({});
  const peeps = await result.data[0].$link.peeps.fetchPage({});

  // const result = await client
  //   .objectSet("Employee", {
  //     $where: { locationCity: "Palo Alto" },
  //   })
  //   .pivotTo("lead", {
  //     $where: { locationCity: "New York" },
  //   })
  //   .fetchPage({
  //     select: ["adUsername", "businessTitle", "employeeNumber"],
  //   });

  // Check rough shape is correct.
  expectType<
    {
      nextPageToken: string | undefined;
      data: {
        adUsername: string | undefined;
        businessTitle: string | undefined;
        employeeNumber: number | undefined;
      }[];
    }
  >(result);

  // check down select worked
  expectType<
    TypeOf<{
      data: {
        jobProfile: any; // should be omitted
      }[];
    }, typeof result>
  >(false);

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
