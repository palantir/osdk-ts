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
  bus_1,
  getBusFromSet,
  getBusId,
  getBusInterface,
  getBusInterfaceSet,
} from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

export async function runQueriesTest(): Promise<void> {
  // const result = await client(getNamesOfCustomersFromCountry).executeFunction({
  //   country: "Denmark",
  // });

  // console.log(result);

  const busesOs = dsClient(bus_1);

  const buses = await busesOs.fetchPage();

  const resultFetchWithInterface = await dsClient(getBusId).executeFunction({
    bus: {
      $objectType: "WmataBus",
      $primaryKey: 3106,
    },
  });

  console.log("busId fetched with interface: ", resultFetchWithInterface);

  const resultFetchWithInterface2 = await dsClient(getBusId).executeFunction({
    bus: buses.data[0],
  });

  console.log("busId fetched with interface2: ", resultFetchWithInterface2);

  const resultFetchWithInterfaceSet = await dsClient(getBusFromSet)
    .executeFunction({ busesObjectSet: busesOs });

  console.log("busId fetched with interfaceSet: ", resultFetchWithInterfaceSet);

  const resultGetInterface = await dsClient(getBusInterface).executeFunction({
    vehicleIdToFind: "3016",
  });

  console.log("bus fetched with Id: ", resultGetInterface);

  const resultGetInterfaceSet = await dsClient(getBusInterfaceSet)
    .executeFunction({ vehicleIdToFind: "3106" });

  console.log("bus set fetched with id", resultGetInterfaceSet);
}

void runQueriesTest();
