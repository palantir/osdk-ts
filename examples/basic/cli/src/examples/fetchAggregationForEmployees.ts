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
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

export async function fetchAggregationForEmployees(
  client: Client<Ontology>,
) {
  const result = await client.objectSet("Employee").aggregateOrThrow({
    select: {
      locationCity: "approximateDistinct",
      locationName: "approximateDistinct",
      employeeNumber: ["avg", "max", "min"],
    },
    groupBy: undefined,
  });
  console.log("fetchAggregationForEmployees()");
  console.log(JSON.stringify(result, undefined, 2));
  console.log();

  /*
fetchAggregationForEmployees()
{
  "employeeNumber": {
    "max": 10002,
    "avg": 10001.5,
    "min": 10001
  },
  "locationCity": {
    "approximateDistinct": 2
  },
  "locationName": {
    "approximateDistinct": 2
  }
}
  */
  // Compile Time Verification of rough shape
  expectType<{
    employeeNumber: {
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
  }>(result);

  // adUsername shouldn't be present
  expectType<
    TypeOf<{
      adUsername: any;
    }, typeof result>
  >(false);

  // Runtime Verification
  invariant(
    !Array.isArray(result),
    "no groups means we should not get an array",
  );
  invariant(
    Object.keys(result).length === 3,
    `the result should have 3 keys, got: ${Object.keys(result)}`,
  );
  invariant(
    "employeeNumber" in result
      && "locationName" in result
      && "locationCity" in result,
    "The keys should be the expected ones",
  );
  invariant(Object.keys(result.employeeNumber).length === 3);
}
