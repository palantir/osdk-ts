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
  AsyncIterArgs,
  Augments,
  FetchPageResult,
  InterfaceDefinition,
  LinkedType,
  LinkNames,
  LinkTypeApiNamesFor,
  MinimalDirectedObjectLinkInstance,
  NullabilityAdherence,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectSetArgs,
  ObjectSetSubscription,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  Result,
  SelectArg,
  SingleOsdkResult,
} from "@osdk/api";
import type { MinimalObjectSet } from "@osdk/api/unstable";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
  PropertyApiName,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { createWithPropertiesObjectSet } from "../derivedProperties/createWithPropertiesObjectSet.js";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { aggregate } from "../object/aggregate.js";
import {
  fetchPageInternal,
  fetchPageWithErrorsInternal,
} from "../object/fetchPage.js";
import { fetchSingle, fetchSingleWithErrors } from "../object/fetchSingle.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
import { fetchLinksPage } from "./fetchLinksPage.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

function isObjectTypeDefinition(
  def: ObjectOrInterfaceDefinition,
): def is ObjectTypeDefinition {
  return def.type === "object";
}

export function isObjectSet(o: any): o is ObjectSet<any> {
  return o != null && typeof o === "object"
    && isWireObjectSet(objectSetDefinitions.get(o));
}

export function getWireObjectSet(
  objectSet: ObjectSet<any> | MinimalObjectSet<any>,
): WireObjectSet {
  return objectSetDefinitions.get(objectSet)!;
}

/** @internal exported for internal use only */
export const objectSetDefinitions = new WeakMap<
  any,
  WireObjectSet
>();

/** @internal */
export function createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: MinimalClient,
  objectSet: WireObjectSet = resolveBaseObjectSetType(objectType),
): ObjectSet<Q> {
  const base: ObjectSet<Q> = {
    aggregate: (aggregate<Q, any>).bind(
      globalThis,
      augmentRequestContext(clientCtx, _ => ({ finalMethodCall: "aggregate" })),
      objectType,
      objectSet,
    ) as ObjectSet<Q>["aggregate"],

    fetchPage: fetchPageInternal.bind(
      globalThis,
      augmentRequestContext(clientCtx, _ => ({ finalMethodCall: "fetchPage" })),
      objectType,
      objectSet,
    ) as ObjectSet<Q>["fetchPage"],

    fetchPageWithErrors: fetchPageWithErrorsInternal.bind(
      globalThis,
      augmentRequestContext(
        clientCtx,
        _ => ({ finalMethodCall: "fetchPageWithErrors" }),
      ),
      objectType,
      objectSet,
    ) as ObjectSet<Q>["fetchPageWithErrors"],

    where: (clause) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause, objectType),
      });
    },

    pivotTo: function<L extends LinkNames<Q>>(
      type: L,
    ): ObjectSet<LinkedType<Q, L>> {
      return createSearchAround(type)();
    },

    union: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "union",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    intersect: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "intersect",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    subtract: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "subtract",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    nearestNeighbors: (query, numNeighbors, property) => {
      const nearestNeighborsQuery = isTextQuery(query)
        ? { "type": "text" as const, "value": query }
        : { "type": "vector" as const, "value": query };
      return clientCtx.objectSetFactory(
        objectType,
        clientCtx,
        {
          type: "nearestNeighbors",
          objectSet,
          propertyIdentifier: {
            type: "property",
            apiName: property as PropertyApiName,
          },
          numNeighbors,
          query: nearestNeighborsQuery,
        },
      ) as ObjectSet<Q>;
    },

    asyncIter: async function*<
      L extends PropertyKeys<Q>,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherence.Default,
      T extends boolean = false,
      ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L> = never,
    >(
      args?: AsyncIterArgs<Q, L, R, A, S, T, never, ORDER_BY_OPTIONS>,
    ): AsyncIterableIterator<
      SingleOsdkResult<Q, L, R, S, {}, T, ORDER_BY_OPTIONS>
    > {
      let $nextPageToken: string | undefined = undefined;
      do {
        const result: FetchPageResult<
          Q,
          L,
          R,
          S,
          T,
          ORDER_BY_OPTIONS
        > = await fetchPageInternal(
          augmentRequestContext(
            clientCtx,
            _ => ({ finalMethodCall: "asyncIter" }),
          ),
          objectType,
          objectSet,
          { ...args, $pageSize: 10000, $nextPageToken },
          true,
        );
        $nextPageToken = result.nextPageToken;

        for (const obj of result.data) {
          yield obj as SingleOsdkResult<Q, L, R, S, {}, T, ORDER_BY_OPTIONS>;
        }
      } while ($nextPageToken != null);
    },

    fetchOne: (isObjectTypeDefinition(objectType)
      ? async <A extends SelectArg<Q>>(
        primaryKey: PrimaryKeyType<Q>,
        options: A,
      ) => {
        return await fetchSingle(
          augmentRequestContext(
            clientCtx,
            _ => ({ finalMethodCall: "fetchOne" }),
          ),
          objectType,
          options,
          await createWithPk(
            clientCtx,
            objectType,
            objectSet,
            primaryKey,
          ),
        ) as Osdk<Q>;
      }
      : undefined) as ObjectSet<Q>["fetchOne"],

    fetchOneWithErrors: (isObjectTypeDefinition(objectType)
      ? async <A extends SelectArg<Q>>(
        primaryKey: Q extends ObjectTypeDefinition ? PrimaryKeyType<Q>
          : never,
        options: A,
      ) => {
        return await fetchSingleWithErrors(
          augmentRequestContext(
            clientCtx,
            _ => ({ finalMethodCall: "fetchOneWithErrors" }),
          ),
          objectType,
          options,
          await createWithPk(
            clientCtx,
            objectType,
            objectSet,
            primaryKey,
          ),
        ) as Result<Osdk<Q>>;
      }
      : undefined) as ObjectSet<Q>["fetchOneWithErrors"],

    subscribe: (
      listener,
      opts,
    ) => {
      const pendingSubscribe = ObjectSetListenerWebsocket.getInstance(
        clientCtx,
      ).subscribe(
        objectType,
        objectSet,
        listener as ObjectSetSubscription.Listener<Q, any>,
        opts?.properties,
        opts?.includeRid,
      );

      return { unsubscribe: async () => (await pendingSubscribe)() };
    },

    withProperties: (clause) => {
      const definitionMap = new Map<any, DerivedPropertyDefinition>();

      const derivedProperties: Record<string, DerivedPropertyDefinition> = {};
      for (const key of Object.keys(clause)) {
        const derivedPropertyDefinition = clause
          [key](createWithPropertiesObjectSet(
            objectType,
            { type: "methodInput" },
            definitionMap,
            true,
          ));
        derivedProperties[key] = definitionMap.get(
          derivedPropertyDefinition,
        )!;
      }

      return clientCtx.objectSetFactory(
        objectType,
        clientCtx,
        {
          type: "withProperties",
          derivedProperties: derivedProperties,
          objectSet: objectSet,
        },
      );
    },

    narrowToType: (
      objectTypeDef: ObjectTypeDefinition | InterfaceDefinition,
    ) => {
      const existingMapping =
        clientCtx.narrowTypeInterfaceOrObjectMapping[objectTypeDef.apiName];
      invariant(
        !existingMapping || existingMapping === objectTypeDef.type,
        `${objectTypeDef.apiName} was previously used as an ${existingMapping}, but now used as a ${objectTypeDef.type}.`,
      );
      clientCtx.narrowTypeInterfaceOrObjectMapping[objectTypeDef.apiName] =
        objectTypeDef.type;

      return clientCtx.objectSetFactory(
        objectTypeDef,
        clientCtx,
        {
          type: "asType",
          objectSet: objectSet,
          entityType: objectTypeDef.apiName,
        },
      );
    },

    experimental_asyncIterLinks: async function*<
      LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
    >(
      links: LINK_TYPE_API_NAME[],
    ): AsyncIterableIterator<
      MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>
    > {
      let $nextPageToken: string | undefined = undefined;
      do {
        const result = await fetchLinksPage(
          augmentRequestContext(
            clientCtx,
            _ => ({ finalMethodCall: "asyncIterLinks" }),
          ),
          objectType,
          objectSet,
          links,
        );
        $nextPageToken = result.nextPageToken;

        for (const obj of result.data) {
          yield obj;
        }
      } while ($nextPageToken != null);
    },

    $objectSetInternals: {
      def: objectType,
    },
  };

  function createSearchAround<L extends LinkNames<Q>>(link: L) {
    return () => {
      return clientCtx.objectSetFactory(
        objectType,
        clientCtx,
        objectType.type === "object"
          ? {
            type: "searchAround",
            objectSet,
            link,
          }
          : {
            type: "interfaceLinkSearchAround",
            objectSet,
            interfaceLink: link,
          },
      );
    };
  }

  objectSetDefinitions.set(base, objectSet);

  // we are using a type assertion because the marker symbol defined in BaseObjectSet isn't actually used
  // at runtime.
  return base as ObjectSet<Q>;
}

async function createWithPk(
  clientCtx: MinimalClient,
  objectType: ObjectTypeDefinition,
  objectSet: WireObjectSet,
  primaryKey: PrimaryKeyType<ObjectTypeDefinition>,
) {
  const objDef = await clientCtx.ontologyProvider.getObjectDefinition(
    objectType.apiName,
  );

  const withPk: WireObjectSet = {
    type: "filter",
    objectSet: objectSet,
    where: {
      type: "eq",
      field: objDef.primaryKeyApiName,
      value: primaryKey,
    },
  };
  return withPk;
}

function isTextQuery(query: string | number[]): query is string {
  return typeof query === "string";
}
