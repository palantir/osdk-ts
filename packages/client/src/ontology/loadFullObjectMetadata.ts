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

import type { ObjectTypeDefinition } from "@osdk/api";
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "@osdk/generator-converters";
import {
  getObjectTypeFullMetadata,
} from "@osdk/internal.foundry/OntologiesV2_OntologyObjectV2";
import type { MinimalClient } from "../MinimalClientContext.js";

export async function loadFullObjectMetadata(
  client: MinimalClient,
  objtype: string,
): Promise<ObjectTypeDefinition<any, any> & { rid: string }> {
  const full = await getObjectTypeFullMetadata(
    client,
    client.ontologyRid,
    objtype,
    { preview: true },
  );
  const ret = wireObjectTypeFullMetadataToSdkObjectTypeDefinition(full, true);
  client.logger?.debug(`END loadFullObjectMetadata(${objtype})`);
  return { ...ret, rid: full.objectType.rid };
}
