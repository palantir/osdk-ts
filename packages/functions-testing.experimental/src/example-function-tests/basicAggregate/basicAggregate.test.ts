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

import { Employee } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { basicAggregate } from "./basicAggregate.js";

describe("basicAggregate", () => {
  it("should return aggregation correctly", async () => {
    const mockClient = createMockClient();
    mockClient.when((stub) =>
      stub(Employee).where({ employeeId: { "$eq": 5 } }).aggregate({
        $select: { "employeeLocation:exactDistinct": "asc" },
      })
    ).thenReturnAggregation(
      { employeeLocation: { exactDistinct: 3 } },
    );

    mockClient.when((stub) =>
      stub(Employee).where({ employeeId: { "$eq": 5 } }).aggregate({
        $select: {
          "employeeId:max": "unordered",
          "fullName:approximateDistinct": "unordered",
        },
        $groupBy: { employeeId: "exact" },
      })
    ).thenReturnAggregation([
      {
        $group: { employeeId: 5 },
        employeeId: { max: 5 },
        fullName: { approximateDistinct: 1 },
      },
    ]);
    const actual = await basicAggregate(mockClient);
    expect(actual).toEqual(1);
  });
});
