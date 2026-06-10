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

import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import type { Integer } from "@osdk/functions";

export async function basicAggregate(
  client: Client,
): Promise<Integer> {
  const aggregation = await client(Employee).where({ employeeId: { "$eq": 5 } })
    .aggregate({ $select: { "employeeLocation:exactDistinct": "asc" } });
  if (aggregation.employeeLocation.exactDistinct !== 3) {
    throw new Error(
      `Unexpected aggregation result: ${JSON.stringify(aggregation)}`,
    );
  }

  const aggregation2 = await client(Employee).where({
    employeeId: { "$eq": 5 },
  })
    .aggregate({
      $select: {
        "employeeId:max": "unordered",
        "fullName:approximateDistinct": "unordered",
      },
      $groupBy: { employeeId: "exact" },
    });

  if (
    aggregation2[0].$group.employeeId !== 5
    || aggregation2[0].employeeId.max !== 5
    || aggregation2[0].fullName.approximateDistinct !== 1
  ) {
    throw new Error(
      `Unexpected aggregation result: ${JSON.stringify(aggregation2)}`,
    );
  }

  return 1;
}
