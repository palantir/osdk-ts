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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { getLinkedObjectV2 } from "@osdk/gateway/requests";
import type { ClientContext } from "@osdk/shared.net";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type { LinkedType, LinkNames } from "../objectSet/LinkUtils.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";
import type { SelectArg, SelectArgToKeys } from "./fetchPageOrThrow.js";

export async function getLinkedObjectByPkOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
  const A extends SelectArg<LinkedType<Q, L>>,
>(
  client: ClientContext<any>,
  objectType: Q,
  primaryKey: any,
  linkTypeApiName: L,
  linkedObjectPrimaryKey: any,
  selectOpts?: A,
): Promise<
  DefaultToFalse<A["includeRid"]> extends false
    ? Osdk<LinkedType<Q, L>, SelectArgToKeys<LinkedType<Q, L>, A>>
    : Osdk<
      LinkedType<Q, L>,
      SelectArgToKeys<LinkedType<Q, L>, A>,
      DefaultToFalse<A["includeRid"]>
    >
> {
  const object = await getLinkedObjectV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    objectType.apiName,
    primaryKey,
    linkTypeApiName,
    linkedObjectPrimaryKey,
    {
      select: (selectOpts?.select as string[] | undefined) ?? [],
      excludeRid: !selectOpts?.includeRid,
    },
  );

  const objects = [object];
  convertWireToOsdkObjects(client, objects);
  return objects[0] as any;
}
