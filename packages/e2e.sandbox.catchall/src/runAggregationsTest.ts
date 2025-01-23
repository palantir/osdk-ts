/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { BoundariesUsState } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

export async function runAggregationsTest(): Promise<void> {
  const testStringClause = await client(BoundariesUsState)
    .where({
      usState: {
        $startsWith: "N",
      },
    }).fetchPage();

  console.log(testStringClause.data.map(data => data.usState));

  const testAggregateCountNoGroup = await client(BoundariesUsState)
    .aggregate({
      $select: {
        $count: "unordered",
        "latitude:max": "unordered",
        "latitude:min": "unordered",
        "latitude:avg": "unordered",
      },
    });

  // Should be 51 because it includes DC
  console.log(
    testAggregateCountNoGroup.$count,
    testAggregateCountNoGroup.latitude.avg,
    testAggregateCountNoGroup.latitude.max,
    testAggregateCountNoGroup.latitude.min,
  );
  const testAggregateCountWithGroups = await client(BoundariesUsState)
    .aggregate({
      $select: {
        $count: "unordered",
        "latitude:max": "unordered",
        "latitude:min": "unordered",
        "latitude:avg": "unordered",
      },
      $groupBy: {
        usState: "exact",
        longitude: {
          $fixedWidth: 10,
        },
      },
    });

  const testAggregateCountWithFixedGroups = await client(BoundariesUsState)
    .aggregate({
      $select: {
        $count: "unordered",
        "latitude:max": "unordered",
        "latitude:min": "unordered",
        "latitude:avg": "unordered",
      },
      $groupBy: {
        longitude: {
          $exactWithLimit: 40,
        },
      },
    });

  const testAggregateCountWithRangeGroups = await client(BoundariesUsState)
    .aggregate({
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        latitude: {
          $ranges: [[34, 39], [
            39,
            42,
          ], [43, 45]],
        },
      },
    });

  console.log(
    testAggregateCountWithGroups[0].$group.usState,
    testAggregateCountWithGroups[0].$count,
    testAggregateCountWithGroups[0].latitude.avg,
    testAggregateCountWithGroups[0].latitude.max,
    testAggregateCountWithGroups[0].latitude.min,
  );

  console.log(testAggregateCountWithGroups[0].$group.longitude);
  console.log(
    "Limit worked:",
    testAggregateCountWithFixedGroups.length === 40,
  );

  for (const group of testAggregateCountWithRangeGroups) {
    console.log(
      `start:${group.$group.latitude.startValue},end:${group.$group.latitude.endValue}:${group.$count}`,
    );
  }
}
