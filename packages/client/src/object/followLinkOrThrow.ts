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
  type ObjectTypeKeysFrom,
  type ObjectTypeLinkKeysFrom,
  type ObjectTypeLinkTargetTypeFrom,
  type OntologyDefinition,
} from "@osdk/api";
import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import { type ClientContext, createOpenApiRequest } from "@osdk/shared.net";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

export async function followLinkOrThrow<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  L extends ObjectTypeLinkKeysFrom<O, K>,
>(
  clientCtx: ClientContext<O>,
  sourceObject: OsdkObjectFrom<O["objects"][K]>,
  link: L,
): Promise<
  PageResult<OsdkObjectFrom<ObjectTypeLinkTargetTypeFrom<O, K, L>>>
> {
  const r = await listLinkedObjectsV2(
    createOpenApiRequest(clientCtx.stack, clientCtx.fetch),
    clientCtx.ontology.metadata.ontologyApiName,
    sourceObject.__apiName.toString(),
    sourceObject.__primaryKey,
    link.toString(),
    {
      pageSize: 10,
      select: [],
    },
  );

  convertWireToOsdkObjects(
    clientCtx,
    r.data,
  );

  return r as any;
}
