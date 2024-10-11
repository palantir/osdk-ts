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

import {
  FintrafficAis,
  GtfsTripTrackObject,
  RhemmingsObjectWithGtsrProperty2,
} from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

export async function runGeotimeSeriesReferenceTests() {
  const result = await dsClient(FintrafficAis).fetchOne("21000000");
  console.log(result);
  console.log(result.seriesId);

  const latestPoint = await result.seriesId?.getLatestValue();
  const latestPointProp = result.seriesId?.lastFetchedValue;

  console.log("loaded in last point: ", latestPoint);
  console.log("last fetched point: ", latestPointProp);

  const allPoints = await result.seriesId?.getAllValues({
    $before: 2,
    $unit: "years",
  });
  console.log(allPoints![0].value);

  const secondResult = await dsClient(RhemmingsObjectWithGtsrProperty2)
    .fetchOne("track-id");

  for await (
    const t of secondResult.gtsr!.asyncIterValues({
      $startTime: "2015-01-28T01:07:00Z",
      $endTime: "2025-01-28T01:33:00Z",
    })
  ) {
    console.log(t);
  }

  const resultWithNoData = await dsClient(GtfsTripTrackObject).fetchOne(
    "wmata_35356020",
  );

  const noDataPoint = await resultWithNoData.geotimeSeriesReferences
    ?.getLatestValue();

  console.log("GTSR with no data should be undefined: ", noDataPoint);
}
