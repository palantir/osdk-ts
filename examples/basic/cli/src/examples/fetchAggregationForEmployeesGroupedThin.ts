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

import type { MinimalClient } from "@osdk/client";
import { aggregate } from "@osdk/client/objects";
import { Employee } from "@osdk/examples.basic.sdk";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

export async function fetchAggregationForEmployeesGroupedThin(
  clientCtx: MinimalClient,
) {
  const result = await aggregate(
    clientCtx,
    Employee,
    {
      type: "base",
      objectType: "Employee",
    },
    {
      select: {
        locationCity: "approximateDistinct",
        locationName: "approximateDistinct",
        employeeNumber: ["avg", "max", "min"],
      },
      groupBy: {
        locationType: "exact",
      },
    },
  );

  result[0].employeeNumber.avg;
  result[0].$group.locationType;

  console.log("fetchAggregationForEmployeesGroupedThin()");
  console.log(JSON.stringify(result, undefined, 2));
  console.log();

  expectType<
    TypeOf<
      Array<{
        $group: {
          locationType: string | undefined;
        };

        "employeeNumber": {
          max: number | undefined;
          avg: number | undefined;
          min: number | undefined;
        };
        locationCity: {
          approximateDistinct: number;
        };
        locationName: {
          approximateDistinct: number;
        };
      }>,
      typeof result
    >
  >(true);

  result[0].employeeNumber;
  invariant(Array.isArray(result), "groups means we should get an array");
  invariant(Object.keys(result).length >= 1, "there should be one group");
  invariant(
    "employeeNumber" in result[0]
      && "locationName" in result[0]
      && "locationCity" in result[0],
    "The keys should be the expected ones",
  );
  invariant(Object.keys(result[0].employeeNumber).length === 3);
}
