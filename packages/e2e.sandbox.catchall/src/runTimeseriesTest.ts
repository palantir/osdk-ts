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

import { DherlihyComplexObject, SotSensor } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

export async function runTimeseriesTest(): Promise<void> {
  const result = await client(DherlihyComplexObject).fetchOne("a");

  console.log(result.id);

  const timeSeriesPoint1 = await result.seriesId?.getAllPoints({
    $before: 2,
    $unit: "year",
  });

  console.log(timeSeriesPoint1);

  const result2 = await client(DherlihyComplexObject).fetchOne("b");

  for await (
    const point of result2.seriesId?.asyncIterPoints({
      $before: 2,
      $unit: "year",
    })!
  ) {
    console.log(point);
  }

  const sensorResult = await client(SotSensor).fetchOne("well_3_pressure");

  const firstPoint = await sensorResult.timeSeriesProperty?.getFirstPoint();
  console.log("sensor point: ", firstPoint);
}
