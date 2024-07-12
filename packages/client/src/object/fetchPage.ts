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
import type {
  Augment,
  Augments,
  FetchPageArgs,
  FetchPageResult,
  NullabilityAdherence,
  Result,
} from "@osdk/client.api";
import type {
  LoadObjectSetRequestV2,
  ObjectSet,
  OntologyObjectV2,
  PageSize,
  PageToken,
  SearchJsonQueryV2,
  SearchObjectsForInterfaceRequest,
  SearchOrderByV2,
} from "@osdk/internal.foundry";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

export function augment<
  X extends ObjectOrInterfaceDefinition,
  T extends keyof X["properties"] & string,
>(
  type: X,
  ...properties: T[]
): Augment<X, T> {
  return { [type.apiName]: properties } as any;
}

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
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  interfaceType: Q,
  args: FetchPageArgs<Q, L, R, any, S>,
  objectSet: ObjectSet,
): Promise<FetchPageResult<Q, L, R, S>> {
  const result = await OntologiesV2.OntologyObjectsV2.searchObjectsForInterface(
    addUserAgentAndRequestContextHeaders(client, interfaceType),
    await client.ontologyRid,
    interfaceType.apiName,
    applyFetchArgs<SearchObjectsForInterfaceRequest>(args, {
      augmentedProperties: args.$augment ?? {},
      augmentedSharedPropertyTypes: {},
      otherInterfaceTypes: [],
      selectedObjectTypes: [],
      selectedSharedPropertyTypes: args.$select as undefined | string[] ?? [],
      where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName),
    }),
    { preview: true },
  );
  result.data = await convertWireToOsdkObjects(
    client,
    result.data as OntologyObjectV2[], // drop readonly
    interfaceType.apiName,
    !args.$includeRid,
  );
  return result as any;
}

/** @internal */
export async function fetchPageInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S> = {},
  calledByAsyncIter: boolean = false,
): Promise<FetchPageResult<Q, L, R, S>> {
  const modifiedClient = calledByAsyncIter
    ? augmentRequestContext(client, _ => ({ finalMethodCall: "asyncIter" }))
    : client;
  if (objectType.type === "interface") {
    return await fetchInterfacePage(
      modifiedClient,
      objectType,
      args,
      objectSet,
    ) as any; // fixme
  } else {
    return await fetchObjectPage(
      modifiedClient,
      objectType,
      args,
      objectSet,
    ) as any; // fixme
  }
}

/** @internal */
export async function fetchPageWithErrorsInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S> = {},
): Promise<Result<FetchPageResult<Q, L, R, S>>> {
  try {
    const result = await fetchPageInternal(client, objectType, objectSet, args);
    return { value: result };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e };
    }
    return { error: e as Error };
  }
}

export async function fetchPage<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S>,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): Promise<FetchPageResult<Q, L, R, S>> {
  return fetchPageInternal(client, objectType, objectSet, args);
}

export async function fetchPageWithErrors<
  Q extends ObjectOrInterfaceDefinition,
  L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S>,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): Promise<Result<FetchPageResult<Q, L, R, S>>> {
  return fetchPageWithErrorsInternal(client, objectType, objectSet, args);
}

function applyFetchArgs<
  X extends {
    orderBy?: SearchOrderByV2;
    pageToken?: PageToken;
    pageSize?: PageSize;
  },
>(
  args: FetchPageArgs<any, any, any, any, any>,
  body: X,
): X {
  if (args?.$nextPageToken) {
    body.pageToken = args.$nextPageToken;
  }

  if (args?.$pageSize != null) {
    body.pageSize = args.$pageSize;
  }

  if (args?.$orderBy != null) {
    body.orderBy = {
      fields: Object.entries(args.$orderBy).map(([field, direction]) => ({
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
  S extends NullabilityAdherence,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, Augments, S>,
  objectSet: ObjectSet,
): Promise<FetchPageResult<Q, L, R, S>> {
  const r = await OntologiesV2.OntologyObjectSets.loadObjectSetV2(
    addUserAgentAndRequestContextHeaders(client, objectType),
    await client.ontologyRid,
    applyFetchArgs<LoadObjectSetRequestV2>(args, {
      objectSet,
      // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
      select: ((args?.$select as string[] | undefined) ?? []), // FIXME?
      excludeRid: !args?.$includeRid,
    }),
  );

  return Promise.resolve({
    data: await convertWireToOsdkObjects(
      client,
      r.data as OntologyObjectV2[],
      undefined,
      undefined,
      args.$select,
      args.$__EXPERIMENTAL_strictNonNull,
    ),
    nextPageToken: r.nextPageToken,
  }) as Promise<FetchPageResult<Q, L, R, S>>;
}
