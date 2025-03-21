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

import { Employee } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import { expectType } from "ts-expect";
export async function fetchAggregationForEmployees(client) {
  const result = await client(Employee).aggregate({
    $select: {
      "locationCity:approximateDistinct": "unordered",
      "locationName:approximateDistinct": "unordered",
      "employeeNumber:avg": "unordered",
      "employeeNumber:max": "unordered",
      "employeeNumber:min": "unordered"
    },
    $groupBy: undefined
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
  expectType(result);

  // adUsername shouldn't be present
  expectType(false);

  // Runtime Verification
  !!Array.isArray(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "no groups means we should not get an array") : invariant(false) : void 0;
  !(Object.keys(result).length === 3) ? process.env.NODE_ENV !== "production" ? invariant(false, `the result should have 3 keys, got: ${Object.keys(result)}`) : invariant(false) : void 0;
  !("employeeNumber" in result && "locationName" in result && "locationCity" in result) ? process.env.NODE_ENV !== "production" ? invariant(false, "The keys should be the expected ones") : invariant(false) : void 0;
  !(Object.keys(result.employeeNumber).length === 3) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
}
//# sourceMappingURL=fetchAggregationForEmployees.js.map