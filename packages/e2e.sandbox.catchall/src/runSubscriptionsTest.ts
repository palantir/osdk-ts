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
import { __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe } from "@osdk/api/unstable";
import {
  Employee,
  FintrafficAis,
  OsdkTestObject,
} from "@osdk/e2e.generated.catchall";
import { client, danubeClient } from "./client.js";
import { logger } from "./logger.js";

export function runSubscriptionsTest() {
  const makeObjectSetListener = <T extends ObjectOrInterfaceDefinition>(
    prefix: string,
  ): EXPERIMENTAL_ObjectSetListener<T> => {
    return {
      onError(err) {
        console.error({ err }, "%s: Error in subscription", prefix);
      },

      onOutOfDate() {
        console.log("%s: out of date", prefix);
      },

      onChange(objects) {
        if (objects.state === "ADDED_OR_UPDATED") {
          console.log("%s: Changed objects: %o", prefix, objects);
        } else if (objects.state === "REMOVED") {
          console.log("%s: Removed objects: %o", prefix, objects);
        }
      },
    };
  };

  danubeClient(FintrafficAis).where({
    "shipType": "1",
  })[__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe](
    ["timestamp", "mmsi"],
    makeObjectSetListener<FintrafficAis>("Filtered"),
  );

  client(OsdkTestObject)[__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe](
    [
      "primaryKey_",
      "stringProperty",
    ],
    makeObjectSetListener<OsdkTestObject>("OsdkTestObject"),
  );

  danubeClient(FintrafficAis)[__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe](
    [
      "centroid",
      "geometry",
      "mmsi",
      "name",
      "shipType",
      "seriesId",
      "timestamp",
    ],
    makeObjectSetListener<FintrafficAis>("GeotimeSeries"),
  );

  danubeClient(FintrafficAis)[__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe](
    [
      "centroid",
      "geometry",
      "mmsi",
      "name",
      "shipType",
      "seriesId",
      "timestamp",
    ],
    {
      onChange(objectUpdate) {
        logger.info("GeotimeSeries2: Changed objects: %o", objectUpdate);
      },
      onError(errors) {
        logger.error({ errors }, "GeotimeSeries2: Error in subscription");
      },
      onOutOfDate() {
        logger.info("GeotimeSeries2: out of date");
      },
    },
  );
}
