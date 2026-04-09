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

import { MasonHeavyEquipment, MasonMovie } from "@osdk/e2e.generated.catchall";
import { dsClient, dsmtClient } from "./client.js";

export async function runPropertySecuritiesTest(): Promise<void> {
  const objects = await dsClient(MasonMovie).fetchPage({
    $loadPropertySecurityMetadata: true,
  });
  const movieObject1 = objects.data[0];
  console.log("Unsupported View Securities for MasonMovie object:");
  console.log(
    JSON.stringify(
      movieObject1.$propertySecurities,
      null,
      2,
    ),
  );

  const heavyEquipmentObject1 = await dsmtClient(MasonHeavyEquipment).fetchOne(
    "equipment_34968",
    {
      $loadPropertySecurityMetadata: true,
    },
  );

  console.log("Securities for MasonHeavyEquipment object:");
  console.log(
    JSON.stringify(
      heavyEquipmentObject1.$propertySecurities,
      null,
      2,
    ),
  );
}

void runPropertySecuritiesTest();
