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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
} from "@osdk/api";
import {
  loadObjectSetV2,
  searchObjectsForInterface,
} from "@osdk/gateway/requests";
import type {
  LoadObjectSetRequestV2,
  ObjectSet,
  OntologyObjectV2,
  PageSize,
  PageToken,
  SearchJsonQueryV2,
  SearchObjectsForInterfaceRequest,
  SearchOrderBy,
} from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import {
  convertWireToOsdkInterfaceInPlace,
  convertWireToOsdkObjectsInPlace,
} from "./convertWireToOsdkObjects.js";

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

export interface FetchPageArgs<
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

export interface FetchInterfacePageArgs<
  Q extends InterfaceDefinition<any, any>,
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

export type FetchPageResult<
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

/** @internal */
export function objectSetToSearchJsonV2(
  objectSet: ObjectSet,
  expectedApiName: string,
  existingWhere: SearchJsonQueryV2 | undefined = undefined,
): SearchJsonQueryV2 | undefined {
  if (objectSet.type === "base") {
    if (objectSet.objectType !== expectedApiName) {
      throw new Error(
        `Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.objectType}`,
      );
    }

    return existingWhere;
  }

  if (objectSet.type === "filter") {
    return objectSetToSearchJsonV2(
      objectSet.objectSet,
      expectedApiName,
      existingWhere == null ? objectSet.where : {
        type: "and",
        value: [existingWhere, objectSet.where],
      },
    );
  }

  throw new Error(`Unsupported objectSet type: ${objectSet.type}`);
}

async function fetchInterfacePage<
  Q extends InterfaceDefinition<any, any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
>(
  client: MinimalClient,
  interfaceType: Q,
  args: FetchPageArgs<Q, L, R>,
  objectSet: ObjectSet,
): FetchPageResult<Q, L, R> {
  const body: SearchObjectsForInterfaceRequest = {
    augmentedProperties: {},
    augmentedSharedPropertyTypes: {},
    otherInterfaceTypes: undefined,
    selectedObjectTypes: undefined,
    selectedSharedPropertyTypes: undefined, // fixme
    where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName),
  } as any;

  const result = await searchObjectsForInterface(
    createOpenApiRequest(client.stack, client.fetch as typeof fetch),
    client.ontology.metadata.ontologyApiName,
    interfaceType.apiName,
    applyFetchArgs(args, body),
    { preview: true },
  );
  await convertWireToOsdkInterfaceInPlace(
    client,
    result.data as OntologyObjectV2[], // drop readonly
    interfaceType.apiName,
  );
  return result as any;
}

export async function fetchPageInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R> = {},
): FetchPageResult<Q, L, R> {
  if (objectType.type === "interface") {
    return await fetchInterfacePage(client, objectType, args, objectSet) as any; // fixme
  } else {
    return await fetchObjectPage(client, objectType, args, objectSet) as any; // fixme
  }
}

export async function fetchPage<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R>,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): FetchPageResult<Q, L, R> {
  return fetchPageInternal(client, objectType, objectSet, args);
}

function applyFetchArgs<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  X extends {
    orderBy?: SearchOrderBy;
    pageToken?: PageToken;
    pageSize?: PageSize;
  },
>(
  args: FetchPageArgs<Q, L, R>,
  body: X,
): X {
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

  return body;
}

export async function fetchObjectPage<
  Q extends ObjectTypeDefinition<any>,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R>,
  objectSet: ObjectSet,
): FetchPageResult<Q, L, R> {
  const body: LoadObjectSetRequestV2 = {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
    select: ((args?.select as string[] | undefined) ?? []), // FIXME?
    excludeRid: !args?.includeRid,
  };

  const r = await loadObjectSetV2(
    createOpenApiRequest(
      client.stack,
      client.fetch as typeof fetch,
    ),
    client.ontology.metadata.ontologyApiName,
    applyFetchArgs(args, body),
  );

  await convertWireToOsdkObjectsInPlace(client, r.data as OntologyObjectV2[]);

  // any is okay here because we have properly converted the wire objects via prototypes
  // which don't type out correctly.
  return r as any;
}
