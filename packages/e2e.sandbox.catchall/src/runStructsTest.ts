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

import { BgaoNflPlayer, McAirportStruct } from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

export async function runStructsTest() {
  const player = await dsClient(BgaoNflPlayer).fetchOne(
    "50A409AB-C909-453A-A61A-31B51324C8E3",
  );

  // Making sure things work when struct values are not set, like with this object
  console.log(player);
  console.log(player.address);
  console.log(player.address?.addressLine1);

  const airport = await dsClient(McAirportStruct).fetchOne(
    "Ronald Reagan Washington National Airport",
  );

  console.log(airport.airportStruct);
  console.log(airport.airportStruct?.geoHash);
}
