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
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeKeysFrom,
  ObjectTypeLinkKeysFrom2,
  OntologyDefinition,
} from "@osdk/api";
import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import { type ClientContext, createOpenApiRequest } from "@osdk/shared.net";
import type { OsdkObjectFrom2 } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";
import type { FetchPageOrThrowArgs2 } from "./fetchPageOrThrow.js";

export async function pageLinkedObjectsOrThrow<
  O extends OntologyDefinition<any>,
  T extends ObjectTypeKeysFrom<O>,
  L extends ObjectTypeLinkKeysFrom2<O["objects"][T]>,
  Q extends O["objects"][T]["links"][L]["__Mark"],
  const A extends FetchPageOrThrowArgs2<Q>,
>(
  client: ClientContext<O>,
  sourceApiName: T & string,
  primaryKey: any,
  linkTypeApiName: string,
  options: A,
): Promise<
  PageResult<
    OsdkObjectFrom2<
      Q,
      A["select"] extends readonly string[] ? A["select"][number]
        : ObjectOrInterfacePropertyKeysFrom2<Q>
    >
  >
> {
  const page = await listLinkedObjectsV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    sourceApiName,
    primaryKey,
    linkTypeApiName,
    {
      pageSize: options?.pageSize,
      pageToken: options?.nextPageToken,
      select: (options?.select as string[] | undefined) ?? [],
    },
  );

  convertWireToOsdkObjects(
    client,
    page.data,
  );

  return {
    nextPageToken: page.nextPageToken,
    data: page.data as OsdkObjectFrom2<Q>[],
  };
}
