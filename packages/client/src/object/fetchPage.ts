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
  Augment,
  Augments,
  FetchPageArgs,
  FetchPageResult,
  InterfaceDefinition,
  NullabilityAdherence,
  ObjectOrInterfaceDefinition,
  ObjectSetArgs,
  ObjectTypeDefinition,
  PropertyKeys,
  Result,
} from "@osdk/api";
import type { PageSize, PageToken } from "@osdk/foundry.core";
import type {
  LoadObjectSetRequestV2,
  LoadObjectSetV2MultipleObjectTypesRequest,
  ObjectSet,
  OntologyObjectV2,
  SearchJsonQueryV2,
  SearchObjectsForInterfaceRequest,
  SearchOrderByV2,
} from "@osdk/foundry.ontologies";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { extractRdpDefinition } from "../util/extractRdpDefinition.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";

export function augment<
  Q extends ObjectOrInterfaceDefinition,
  T extends PropertyKeys<Q>,
>(
  type: Q,
  ...properties: T[]
): Augment<Q, T> {
  return { [type.apiName]: properties } as any;
}

/** @internal */
export function objectSetToSearchJsonV2(
  objectSet: ObjectSet,
  expectedApiName: string,
  existingWhere: SearchJsonQueryV2 | undefined = undefined,
): SearchJsonQueryV2 | undefined {
  if (objectSet.type === "base" || objectSet.type === "interfaceBase") {
    if (objectSet.type === "base" && objectSet.objectType !== expectedApiName) {
      throw new Error(
        `Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.objectType}`,
      );
    }
    if (
      objectSet.type === "interfaceBase"
      && objectSet.interfaceType !== expectedApiName
    ) {
      throw new Error(
        `Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.interfaceType}`,
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

/** @internal */
export function resolveInterfaceObjectSet(
  objectSet: ObjectSet,
  interfaceTypeApiName: string,
  args: FetchPageArgs<any, any, any, any, any, any>,
): ObjectSet {
  return args?.$includeAllBaseObjectProperties
    ? {
      type: "intersect",
      objectSets: [objectSet, {
        type: "interfaceBase",
        interfaceType: interfaceTypeApiName,
        includeAllBaseObjectProperties: true,
      }],
    }
    : objectSet;
}

async function fetchInterfacePage<
  Q extends InterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  interfaceType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet,
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T>> {
  if (args.$__UNSTABLE_useOldInterfaceApis) {
    const result = await OntologiesV2.OntologyInterfaces
      .search(
        addUserAgentAndRequestContextHeaders(client, interfaceType),
        await client.ontologyRid,
        interfaceType.apiName,
        applyFetchArgs<SearchObjectsForInterfaceRequest>(args, {
          augmentedProperties: {},
          augmentedSharedPropertyTypes: {},
          otherInterfaceTypes: [],
          selectedObjectTypes: [],
          selectedSharedPropertyTypes: args.$select as undefined | string[]
            ?? [],
          where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName),
        }),
        { preview: true },
      );

    result.data = await client.objectFactory(
      client,
      result.data as OntologyObjectV2[], // drop readonly
      interfaceType.apiName,
      !args.$includeRid,
      await extractRdpDefinition(client, objectSet),
    );
    return result as any;
  }
  const result = await OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
    addUserAgentAndRequestContextHeaders(client, interfaceType),
    await client.ontologyRid,
    applyFetchArgs<LoadObjectSetV2MultipleObjectTypesRequest>(args, {
      objectSet: resolveInterfaceObjectSet(
        objectSet,
        interfaceType.apiName,
        args,
      ),
      select: ((args?.$select as string[] | undefined) ?? []),
      excludeRid: !args?.$includeRid,
      snapshot: useSnapshot,
    }),
    { preview: true },
  );
  return Promise.resolve({
    data: await client.objectFactory2(
      client,
      result.data,
      interfaceType.apiName,
      {},
      !args.$includeRid,
      args.$select,
      false,
      result.interfaceToObjectTypeMappings,
    ),
    nextPageToken: result.nextPageToken,
    totalCount: result.totalCount,
  }) as unknown as Promise<FetchPageResult<Q, L, R, S, T>>;
}

/** @internal */
export async function fetchPageInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L>,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S, T, never, ORDER_BY_OPTIONS> = {},
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>> {
  if (objectType.type === "interface") {
    return await fetchInterfacePage(
      client,
      objectType,
      args as FetchPageArgs<
        InterfaceDefinition,
        L,
        R,
        A,
        S,
        T,
        never,
        ORDER_BY_OPTIONS
      >,
      objectSet,
      useSnapshot,
    ) as any; // fixme
  } else {
    return await fetchObjectPage(
      client,
      objectType,
      args as FetchPageArgs<
        ObjectTypeDefinition,
        L,
        R,
        A,
        S,
        T,
        never,
        ORDER_BY_OPTIONS
      >,
      objectSet,
      useSnapshot,
    ) as any; // fixme
  }
}

/** @internal */
export async function fetchPageWithErrorsInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S, T> = {},
): Promise<Result<FetchPageResult<Q, L, R, S, T>>> {
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

/**
 * @param client
 * @param objectType
 * @param args
 * @param objectSet
 * @returns
 * @internal
 */
export async function fetchPage<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet = resolveBaseObjectSetType(objectType),
): Promise<FetchPageResult<Q, L, R, S, T>> {
  return fetchPageInternal(client, objectType, objectSet, args);
}

/** @internal */
export async function fetchPageWithErrors<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet = resolveBaseObjectSetType(objectType),
): Promise<Result<FetchPageResult<Q, L, R, S, T>>> {
  return fetchPageWithErrorsInternal(client, objectType, objectSet, args);
}

function applyFetchArgs<
  X extends {
    orderBy?: SearchOrderByV2;
    pageToken?: PageToken;
    pageSize?: PageSize;
  },
>(
  args: FetchPageArgs<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    ObjectSetArgs.OrderByOptions<any>
  >,
  body: X,
): X {
  if (args?.$nextPageToken) {
    body.pageToken = args.$nextPageToken;
  }

  if (args?.$pageSize != null) {
    body.pageSize = args.$pageSize;
  }

  const orderBy = args?.$orderBy;
  if (orderBy) {
    body.orderBy = orderBy === "relevance"
      ? { orderType: "relevance", fields: [] }
      : {
        fields: Object.entries(orderBy).map(([field, direction]) => ({
          field,
          direction,
        })),
      };
  }

  return body;
}

/** @internal */
export async function fetchObjectPage<
  Q extends ObjectTypeDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L>,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, Augments, S, T, never, ORDER_BY_OPTIONS>,
  objectSet: ObjectSet,
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>> {
  const r = await OntologiesV2.OntologyObjectSets.load(
    addUserAgentAndRequestContextHeaders(client, objectType),
    await client.ontologyRid,
    applyFetchArgs<LoadObjectSetRequestV2>(args, {
      objectSet,
      // We have to do the following case because LoadObjectSetRequestV2 isn't readonly
      select: ((args?.$select as string[] | undefined) ?? []), // FIXME?
      excludeRid: !args?.$includeRid,
      snapshot: useSnapshot,
    }),
  );

  return Promise.resolve({
    data: await client.objectFactory(
      client,
      r.data as OntologyObjectV2[],
      undefined,
      undefined,
      await extractRdpDefinition(client, objectSet),
      args.$select,
      false,
      args.$orderBy === "relevance",
    ),
    nextPageToken: r.nextPageToken,
    totalCount: r.totalCount,
  }) as unknown as Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>>;
}
