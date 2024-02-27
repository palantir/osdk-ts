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
} from "@osdk/api";
import { loadObjectSetV2 } from "@osdk/gateway/requests";
import type { LoadObjectSetRequestV2, ObjectSet } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

export interface SelectArg<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> {
  select?: readonly L[];
  includeRid?: R;
}

export interface OrderByArg<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
> {
  orderBy?: {
    [K in L]?: "asc" | "desc";
  };
}

export type SelectArgToKeys<
  Q extends ObjectOrInterfaceDefinition,
  A extends SelectArg<Q, any, any>,
> = A extends SelectArg<Q, never> ? "$all"
  : A["select"] extends readonly string[] ? A["select"][number]
  : "$all";

export interface FetchPageOrThrowArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends ObjectOrInterfacePropertyKeysFrom2<Q> =
    ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean = false,
> extends
  SelectArg<Q, K, R>,
  OrderByArg<Q, ObjectOrInterfacePropertyKeysFrom2<Q>>
{
  nextPageToken?: string;
  pageSize?: number;
}

export type FetchPageOrThrowResult<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
> = Promise<
  PageResult<
    ObjectOrInterfacePropertyKeysFrom2<Q> extends L ? (
        DefaultToFalse<R> extends false ? Osdk<Q, "$all">
          : Osdk<Q, "$all", true>
      )
      : (
        DefaultToFalse<R> extends false ? Osdk<Q, L> : Osdk<Q, L, true>
      )
  >
>;

export async function fetchPageOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
>(
  client: ClientContext<any>,
  objectType: Q,
  args: FetchPageOrThrowArgs<Q, L, R>,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): FetchPageOrThrowResult<Q, L, R> {
  const body: LoadObjectSetRequestV2 = {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
    select: ((args?.select as string[] | undefined) ?? []), // FIXME?
    excludeRid: !args?.includeRid,
  };

  if (args?.nextPageToken) {
    body.pageToken = args.nextPageToken;
  }

  if (args?.pageSize != null) {
    body.pageSize = args.pageSize;
  }

  if (args?.orderBy != null) {
    body.orderBy = {
      fields: Object.entries(args.orderBy).map(([field, direction]) => ({
        field,
        direction,
      })),
    };
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
