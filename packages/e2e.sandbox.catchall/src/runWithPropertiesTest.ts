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

import { Country_1, StateTerritory } from "@osdk/e2e.generated.catchall";
import { basename } from "path";
import { client } from "./client.js";

export async function runWithPropertiesTest() {
  const result = await client(StateTerritory).withProperties({
    "countryName": (base) =>
      base.pivotTo("country1").selectProperty("airportCountryName"),
  }).fetchPage();

  console.log(result.data.map((x) => x.countryName));

  const result2 = await client(Country_1).withProperties({
    "exactDistinctAirportStateCode": (base) =>
      base.pivotTo("stateTerritory").aggregate(
        "airportStateCode:exactDistinct",
      ),
    stateCount: (base) => base.pivotTo("stateTerritory").aggregate("$count"),
    stateNameSet: (base) =>
      base.pivotTo("stateTerritory").aggregate("airportStateName:collectSet", {
        "limit": 10,
      }),
  }).fetchPage();

  console.log(
    result2.data.map((
      x,
    ) => [x.exactDistinctAirportStateCode, x.stateCount, x.stateNameSet]),
  );
}

runWithPropertiesTest();
