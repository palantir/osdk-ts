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
/* spell-checker: disable */
import type { ObjectMetadata } from "@osdk/api";
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
} from "@osdk/api/unstable";
import { FintrafficAis } from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

export async function runFetchByRidTest(): Promise<void> {
  const result = await dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid,
  ).fetchOneByRid(
    FintrafficAis,
    "ri.phonograph2-objects.main.object.7b74bd56-4de1-4190-9123-266ab14b0b20",
  );

  console.log(result);

  const result2 = await dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
  ).fetchPageByRid(FintrafficAis, [
    "ri.phonograph2-objects.main.object.0e329e64-9944-4427-bed2-a4a52e844f9e",
    "ri.phonograph2-objects.main.object.7b74bd56-4de1-4190-9123-266ab14b0b20",
  ]);

  console.log(result2);

  const result3 = await dsClient(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
  ).fetchPageByRidNoType([
    "ri.phonograph2-objects.main.object.v4.74f4b7b2-ff4a-48ca-b739-3a9d79e89e6c.AAKFH5I_YE_4YODY68MOAJV53GKVG5OIAKEA_5CGI0WY",
    "ri.phonograph2-objects.main.object.v4.318e4b5e-3212-444a-88b8-6e998de958e0.AQ-NL9G8QFAQ2-CRNPODBQZPE2ND-AGU67DFFAMML_NO",
  ], { $includeRid: true });

  const result3Object = result3.data[0];
  const result3Interface = result3Object.$as({
    type: "interface",
    apiName: (result3Object.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
      .ObjectMetadata as ObjectMetadata).implements?.[0]!,
  });

  console.log(result3);
  console.log("Interface:", result3Interface);
  console.log("Object:", result3Object);
}

void runFetchByRidTest();
