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

import { BuilderDeploymentState } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

export async function runAggregationGroupByDatesTest(): Promise<void> {
  const groupedTimestamps = await client(BuilderDeploymentState).aggregate({
    $select: { $count: "unordered" },
    $groupBy: { currentTimestamp: { $duration: [10, "seconds"] } },
  });

  const groupedDates = await client(BuilderDeploymentState).aggregate({
    $select: { $count: "unordered" },
    $groupBy: { date: { $duration: [10, "days"] } },
  });

  const rangedDates = await client(BuilderDeploymentState).aggregate({
    $select: { $count: "unordered" },
    $groupBy: {
      date: {
        $ranges: [["2008-03-01", "2009-11-05"], ["2015-10-01", "2018-11-05"]],
      },
    },
  });

  const rangedTimestamps = await client(BuilderDeploymentState).aggregate({
    $select: { $count: "unordered" },
    $groupBy: {
      currentTimestamp: {
        $ranges: [["2023-04-02T17:28:00Z", "2023-04-03T18:28:00Z"], [
          "2023-04-05T17:28:00Z",
          "2023-04-06T11:28:00Z",
        ]],
      },
    },
  });

  console.log(groupedTimestamps[0].$group.currentTimestamp);
  console.log(groupedDates[0].$group.date);
  console.log(
    rangedTimestamps[0].$group.currentTimestamp.startValue,
    rangedTimestamps[0].$group.currentTimestamp.endValue,
    rangedTimestamps[0].$count,
  );
  console.log(
    rangedDates[0].$group.date.startValue,
    rangedDates[0].$group.date.endValue,
    rangedDates[0].$count,
  );
}

void runAggregationGroupByDatesTest();
