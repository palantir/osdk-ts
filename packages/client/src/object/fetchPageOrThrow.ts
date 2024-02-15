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
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
} from "@osdk/api";
import { loadObjectSetV2 } from "@osdk/gateway/requests";
import type { LoadObjectSetRequestV2, ObjectSet } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

export interface SelectArg<
  O extends ObjectOrInterfaceDefinition<any, any>,
  L = ObjectOrInterfacePropertyKeysFrom2<O>,
> {
  select?: readonly L[];
}

export interface FetchPageOrThrowArgs<
  O extends ObjectOrInterfaceDefinition<any, any>,
  L = ObjectOrInterfacePropertyKeysFrom2<O>,
> extends SelectArg<O, L> {
  nextPageToken?: string;
  pageSize?: number;
}

export async function fetchPageOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  const A extends FetchPageOrThrowArgs<Q>,
>(
  client: ClientContext<any>,
  objectType: Q,
  args: A,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): Promise<
  PageResult<
    OsdkObjectFrom<
      Q extends ObjectTypeDefinition<any> ? Q : never,
      A["select"] extends readonly string[] ? A["select"][number]
        : ObjectOrInterfacePropertyKeysFrom2<Q>
    >
  >
> {
  const body: LoadObjectSetRequestV2 = {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
    select: ((args?.select as string[] | undefined) ?? []), // FIXME?
  };

  if (args?.nextPageToken) {
    body.pageToken = args.nextPageToken;
  }

  if (args?.pageSize != null) {
    body.pageSize = args.pageSize;
  }

  const r = await loadObjectSetV2(
    createOpenApiRequest(
      client.stack,
      client.fetch as typeof fetch,
    ),
    client.ontology.metadata.ontologyApiName,
    body,
  );

  convertWireToOsdkObjects(client, r.data);

  // any is okay here because we have properly converted the wire objects via prototypes
  // which don't type out correctly.
  return r as any;
}
