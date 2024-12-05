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
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet,
  __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe,
} from "@osdk/api/unstable";
import {
  $Actions,
  Employee,
  MtaBus,
  OsdkTestInterface,
  OsdkTestObject,
} from "@osdk/e2e.generated.catchall";
import { client, dsClient } from "./client.js";

export async function runSubscriptionsTest() {
  client(Employee).withProperties({
    "em": (a) => {
      return a.pivotTo("lead").aggregate("employeeNumber:approximateDistinct");
    },
  }).where({ "adUsername": { "$eq": "11" } }).fetchPage();
  let counter = 0;
  const subscription = client(OsdkTestObject)
    .subscribe(
      {
        onChange(object) {
          console.log(
            "Object with primaryKey ",
            object.object.$primaryKey,
            " changed stringProperty to ",
            object.object.stringProperty,
          );
          if (++counter >= 3) {
            console.log("Unsubscribing");
            subscription.unsubscribe();
          }
        },
        onError(err) {
          console.error("Error in subscription: ", err);
        },
        onOutOfDate() {
          console.log("Out of date");
        },
        async onSuccessfulSubscription() {
          await client($Actions.createOsdkTestObject).applyAction({
            description: "test",
            osdk_object_name: "OsdkTestObject",
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
        },
      },
      { properties: ["stringProperty"] },
    );

  const interfaceSubscription = client(OsdkTestInterface).subscribe({
    onChange(object) {
      console.log(
        "Interface with primaryKey ",
        object.object.$primaryKey,
        " changed objectDescription to ",
        object.object.objectDescription,
      );
    },
    async onSuccessfulSubscription() {
      console.log("Successfully subscribed to OsdkTestInterface");
      await client($Actions.createOsdkTestObject).applyAction({
        description: "test",
        osdk_object_name: "OsdkTestObject",
        string_property: "test",
      });
    },
    onError(err) {
      console.error("Error in interface subscription: ", err);
    },
  });

  const mtaBusSubscription = dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe,
  ).subscribe(
    dsClient(MtaBus),
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
      onSuccessfulSubscription() {
        setTimeout(() => {
          console.log("Unsubscribing from MtaBus");
          mtaBusSubscription.unsubscribe();
        }, 10000);
      },
    },
  );
}
