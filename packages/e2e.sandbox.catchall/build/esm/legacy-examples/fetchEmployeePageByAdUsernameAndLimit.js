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

/**
 * Demonstrates looking up an employee and for fun adds an `AND` and `ne`
 */
export async function fetchEmployeePageByAdUsernameAndLimit(client, adUsername) {
  const result = await client(Employee).where({
    $and: [{
      adUsername
    }, {
      employeeNumber: {
        $ne: 5
      }
    }, {
      employeeNumber: {
        $gte: 5
      }
    }]
  }).fetchPage({
    $select: ["adUsername", "employeeNumber", "jobProfile"]
  });
  console.log(`fetchEmployeePageByAdUsernameAndLimit('${adUsername}')`);
  console.table(result.data);
  console.log();
  !(result.data.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
  const employee = result.data[0];
  !(employee.adUsername === adUsername) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
  !!("businessTitle" in employee) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;

  /*
  fetchEmployeePageByAdUsernameAndLimit('fish')
  ┌─────────┬────────────┬───────────────────────────────────────────────────────────────────────────┬────────────┬──────────────┐
  │ (index) │  $apiName  │                                   __rid                                   │ adUsername │ __primaryKey │
  ├─────────┼────────────┼───────────────────────────────────────────────────────────────────────────┼────────────┼──────────────┤
  │    0    │ 'Employee' │ 'ri.phonograph2-objects.main.object.c8f229e6-bdb7-49ee-a096-74ed1fd28c46' │   'fish'   │    10001     │
  └─────────┴────────────┴───────────────────────────────────────────────────────────────────────────┴────────────┴──────────────┘
  */
}
//# sourceMappingURL=fetchEmployeePageByAdUsernameAndLimit.js.map