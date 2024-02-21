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

import type {
  ObjectTypeKeysFrom,
  ObjectTypeLinkKeysFrom,
  ObjectTypeLinkTargetTypeFrom,
  OntologyDefinition,
} from "@osdk/api";
import { getLinkedObjectV2 } from "@osdk/gateway/requests";
import type { ClientContext } from "@osdk/shared.net";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";
import type { SelectArg } from "./fetchPageOrThrow.js";

export async function getLinkedObjectByPkOrThrow<
  O extends OntologyDefinition<any>,
  T extends ObjectTypeKeysFrom<O> & string,
  L extends ObjectTypeLinkKeysFrom<O, T> & string,
  S extends SelectArg<ObjectTypeLinkTargetTypeFrom<O, T, L>> = SelectArg<
    ObjectTypeLinkTargetTypeFrom<O, T, L>
  >,
>(
  client: ClientContext<O>,
  sourceApiName: T,
  primaryKey: any,
  linkTypeApiName: L,
  linkedObjectPrimaryKey: any,
  options?: S,
) {
  const object = await getLinkedObjectV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    sourceApiName,
    primaryKey,
    linkTypeApiName,
    linkedObjectPrimaryKey,
    {
      select: (options?.select as string[] | undefined) ?? [],
      excludeRid: !options?.includeRid,
    },
  );

  const objects = [object];
  convertWireToOsdkObjects(client, objects);
  return objects[0] as OsdkObjectFrom<O["objects"][T]>;
}
