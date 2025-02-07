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
  createAndFetchTempObjectSetRid,
  hydrateObjectSetFromRid,
} from "@osdk/client/internal";
import {
  BoundariesUsState,
  WeatherStation,
} from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

const b = await createAndFetchTempObjectSetRid(client, client(WeatherStation));
console.log(b);
const a = await hydrateObjectSetFromRid(
  client,
  WeatherStation,
  b,
).fetchPage();

console.log(a.data);
export async function runGeoQueriesTest(): Promise<void> {
  const result = await client(WeatherStation).where({
    geohash: {
      $within: {
        $distance: [1000, "miles"],
        $of: [0, 0],
      },
    },
  }).fetchPage();

  console.log(result.data[0].geohash);

  // drew a polygon that intersects NY, NJ and PA
  const intersectResult = await client(BoundariesUsState).where({
    geometry10M: {
      $intersects: {
        $polygon: [
          [
            [
              -75.09653518696345,
              41.45348773788706,
            ],
            [
              -74.72935560273072,
              40.946390252360715,
            ],
            [
              -74.06735144976177,
              41.20045829999643,
            ],
            [
              -74.3141382218981,
              41.67866397375818,
            ],
            [
              -75.09653518696345,
              41.45348773788706,
            ],
          ],
        ],
      },
    },
  }).fetchPage();

  console.log(intersectResult.data.map(data => data.usState));
  console.log(intersectResult.data[0].geometry10M);

  const intersectResultGeojson = await client(BoundariesUsState)
    .where({
      $not: {
        geometry10M: {
          $intersects: {
            type: "Polygon",
            coordinates: [
              [
                [
                  -75.09653518696345,
                  41.45348773788706,
                ],
                [
                  -74.72935560273072,
                  40.946390252360715,
                ],
                [
                  -74.06735144976177,
                  41.20045829999643,
                ],
                [
                  -74.3141382218981,
                  41.67866397375818,
                ],
                [
                  -75.09653518696345,
                  41.45348773788706,
                ],
              ],
            ],
          },
        },
      },
    }).fetchPage();

  // should be every state except NJ,NY,PA
  console.log(intersectResultGeojson.data.map(data => data.usState));

  // drew a bbox that intersects NY, NJ and PA
  const intersectResultBoundingBox = await client(BoundariesUsState)
    .where({
      geometry10M: {
        $intersects: [
          -75.18845865422688,
          41.151409247298204,
          -74.38919193981752,
          41.676311210175015,
        ],
      },
    }).fetchPage();

  console.log(intersectResultBoundingBox.data.map(data => data.usState));

  const nonNullGeoProps = await client(BoundariesUsState).where({
    geometry10M: { $isNull: false },
  }).fetchPage();

  console.log(nonNullGeoProps.data.map(data => data.usState));
}

void runGeoQueriesTest();
