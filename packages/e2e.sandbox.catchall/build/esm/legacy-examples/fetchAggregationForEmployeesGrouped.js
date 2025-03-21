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
export async function fetchAggregationForEmployeesGrouped(client) {
  const result = await client(Employee).aggregate({
    $select: {
      "locationCity:approximateDistinct": "unordered",
      "locationName:approximateDistinct": "unordered",
      "employeeNumber:avg": "unordered",
      "employeeNumber:max": "unordered",
      "employeeNumber:min": "unordered"
    },
    $groupBy: {
      locationType: "exact"
    }
  });
  console.log("fetchAggregationForEmployeesGrouped()");
  console.log(JSON.stringify(result, undefined, 2));
  console.log();
  /*
  fetchAggregationForEmployeesGrouped()
  [
  {
    "group": {
      "locationType": "Office"
    },
    "values": {
      "employeeNumber": {
        "max": 10001,
        "avg": 10001,
        "min": 10001
      },
      "locationCity": {
        "approximateDistinct": 1
      },
      "locationName": {
        "approximateDistinct": 1
      }
    }
  },
  {
    "group": {
      "locationType": "Remote"
    },
    "values": {
      "employeeNumber": {
        "max": 10002,
        "avg": 10002,
        "min": 10002
      },
      "locationCity": {
        "approximateDistinct": 1
      },
      "locationName": {
        "approximateDistinct": 1
      }
    }
  }
  */

  // Compile time type verification
  expectType(true);

  // Runtime checks
  !Array.isArray(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "groups means we should get an array") : invariant(false) : void 0;
  !(Object.keys(result).length >= 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "there should be one group") : invariant(false) : void 0;
  !("employeeNumber" in result[0] && "locationName" in result[0] && "locationCity" in result[0]) ? process.env.NODE_ENV !== "production" ? invariant(false, "The keys should be the expected ones") : invariant(false) : void 0;
  !(Object.keys(result[0].employeeNumber).length === 3) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
}
//# sourceMappingURL=fetchAggregationForEmployeesGrouped.js.map