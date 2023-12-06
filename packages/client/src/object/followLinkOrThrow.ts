/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  createOpenApiRequest,
  type LinkKeysFrom,
  type LinkTargetTypeFrom,
  type ObjectTypesFrom,
  type OntologyDefinition,
  type ThinClient,
} from "@osdk/api";

import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import type { OsdkObjectFrom } from "../OsdkObjectFrom";
import type { PageResult } from "../PageResult";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects";

export async function followLinkOrThrow<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends LinkKeysFrom<O, K>,
>(
  client: ThinClient<O>,
  sourceObject: OsdkObjectFrom<K, O>,
  link: L,
): Promise<PageResult<OsdkObjectFrom<LinkTargetTypeFrom<O, K, L>, O>>> {
  const r = await listLinkedObjectsV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    sourceObject.__apiName.toString(),
    sourceObject.__primaryKey,
    link.toString(),
    {
      pageSize: 10,
      select: [],
    },
  );

  convertWireToOsdkObjects(
    client,
    client.ontology.objects[sourceObject.__apiName].links[link.toString()]
      .targetType as string,
    r.data,
  );

  return r as any;
}
