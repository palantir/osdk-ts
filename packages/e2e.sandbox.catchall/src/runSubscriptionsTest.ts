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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { EXPERIMENTAL_ObjectSetListener } from "@osdk/api/unstable";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet,
  __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe,
} from "@osdk/api/unstable";
import { $Actions, MtaBus, OsdkTestObject } from "@osdk/e2e.generated.catchall";
import { client, dsClient } from "./client.js";

export async function runSubscriptionsTest() {
  client(__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe).subscribe(
    client(OsdkTestObject),
    [
      "primaryKey_",
      "stringProperty",
    ],
    {
      onChange(object) {
        console.log(
          "Object with primaryKey ",
          object.object.primaryKey_,
          " changed stringProperty to ",
          object.object.stringProperty,
        );
      },
      onError(err) {
        console.error("Error in subscription: ", err);
      },
      onOutOfDate() {
        console.log("Out of date");
      },
    },
  );

  await client($Actions.createOsdkTestObject).applyAction({
    string_property: "test",
  });

  const objectArray = await client(OsdkTestObject).fetchPage();

  await client($Actions.editOsdkTestObject).applyAction({
    OsdkTestObject: objectArray.data[0],
    string_property: "a",
  });

  await client($Actions.deleteOsdkTestObject).applyAction({
    OsdkTestObject: objectArray.data[0],
  });

  dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe,
  ).subscribe(
    dsClient(MtaBus),
    [
      "nextStopId",
      "positionId",
      "routeId",
      "vehicleId",
    ],
    {
      onChange(object) {
        if (object.object.positionId != null) {
          console.log(
            "Bus with positionId ",
            object.object.vehicleId,
            " changed location to ",
            object.object.positionId.lastFetchedValue?.value,
          );
        } else {
          console.log(
            "Bus with vehicleId ",
            object.object.vehicleId,
            " changed nextStop to ",
            object.object.nextStopId,
          );
        }
      },
      onError(err) {
        console.error("Error in subscription: ", err);
      },
      onOutOfDate() {
        console.log("Out of date");
      },
    },
  );
}
