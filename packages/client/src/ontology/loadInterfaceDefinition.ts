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

import type { InterfaceDefinition } from "@osdk/api";
import { getInterfaceType } from "@osdk/gateway/requests";
import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { MinimalClient } from "../MinimalClientContext.js";

export async function loadInterfaceDefinition(
  client: MinimalClient,
  objtype: string,
): Promise<InterfaceDefinition<any, any>> {
  const { ontologyApiName } = client.ontology.metadata;

  const r = await getInterfaceType(
    createOpenApiRequest(client.stack, client.fetch),
    ontologyApiName,
    objtype,
    { preview: true },
  );

  return __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(r, true);
}
