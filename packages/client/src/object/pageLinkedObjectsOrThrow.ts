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
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";
import type { FetchPageOrThrowArgs, SelectArg } from "./fetchPageOrThrow.js";

export type SelectArgToKeys<A extends SelectArg<any>> = A["select"] extends
  readonly string[] ? A["select"][number]
  : A extends SelectArg<infer Q> ? ObjectOrInterfacePropertyKeysFrom2<Q>
  : never;

export async function pageLinkedObjectsOrThrow<
  O extends OntologyDefinition<any>,
  T_SourceTypeKey extends ObjectTypeKeysFrom<O>,
  T_LinkApiName extends ObjectTypeLinkKeysFrom2<O["objects"][T_SourceTypeKey]>,
  Q extends O["objects"][T_SourceTypeKey]["links"][T_LinkApiName]["__Mark"],
  const A extends FetchPageOrThrowArgs<Q>,
>(
  client: ClientContext<O>,
  sourceApiName: T_SourceTypeKey & string,
  primaryKey: any,
  linkTypeApiName: string,
  options: A,
): Promise<PageResult<OsdkObjectFrom<Q, SelectArgToKeys<A>>>> {
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
      excludeRid: !options?.includeRid,
    },
  );

  convertWireToOsdkObjects(
    client,
    page.data,
  );

  return {
    nextPageToken: page.nextPageToken,
    data: page.data as OsdkObjectFrom<Q>[],
  };
}
