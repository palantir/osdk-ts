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
import { listLinkedObjectsV2 } from "@osdk/gateway/requests";
import { type ClientContext, createOpenApiRequest } from "@osdk/shared.net";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type { LinkedType, LinkNames } from "../objectSet/LinkUtils.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";
import type {
  FetchPageOrThrowArgs,
  SelectArgToKeys,
} from "./fetchPageOrThrow.js";

export async function pageLinkedObjectsOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
  const A extends FetchPageOrThrowArgs<LinkedType<Q, L>>,
>(
  client: ClientContext<any>,
  source: Q,
  primaryKey: any,
  linkTypeApiName: L,
  options?: A,
): Promise<
  PageResult<
    DefaultToFalse<A["includeRid"]> extends false
      ? Osdk<LinkedType<Q, L>, SelectArgToKeys<LinkedType<Q, L>, A>>
      : Osdk<
        LinkedType<Q, L>,
        SelectArgToKeys<LinkedType<Q, L>, A>,
        true
      >
  >
> {
  const page = await listLinkedObjectsV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    source.apiName,
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
    data: page.data as any[],
  } as PageResult<any> as any;
}
