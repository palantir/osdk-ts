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
  MinObjectDef,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
} from "@osdk/api";
import type {
  AsyncIterArgs,
  Augments,
  BaseObjectSet,
  FetchPageResult,
  LinkedType,
  LinkNames,
  MinimalObjectSet,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  ObjectSet,
  Osdk,
  PrimaryKeyType,
  Result,
  SelectArg,
  SingleOsdkResult,
} from "@osdk/client.api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe } from "@osdk/client.api/unstable";
import type { EXPERIMENTAL_ObjectSetListener } from "@osdk/client.api/unstable";
import type { ObjectSet as WireObjectSet } from "@osdk/internal.foundry.core";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { aggregate } from "../object/aggregate.js";
import {
  fetchPageInternal,
  fetchPageWithErrorsInternal,
} from "../object/fetchPage.js";
import { fetchSingle, fetchSingleWithErrors } from "../object/fetchSingle.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

function isObjectTypeDefinition(
  def: ObjectOrInterfaceDefinition,
): def is MinObjectDef<any, any> {
  return def.type === "object";
}

/* @internal */
export function isObjectSet(o: any): o is ObjectSet<any> {
  return o != null && typeof o === "object"
    && isWireObjectSet(objectSetDefinitions.get(o));
}

/** @internal */
export function getWireObjectSet(
  objectSet: ObjectSet<any> | MinimalObjectSet<any>,
): WireObjectSet {
  return objectSetDefinitions.get(objectSet)!;
}

const objectSetDefinitions = new WeakMap<
  any,
  WireObjectSet
>();

/** @internal */
export function createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: MinimalClient,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): ObjectSet<Q> {
  const base: Omit<ObjectSet<Q>, keyof BaseObjectSet<Q>> = {
    aggregate: (aggregate<Q, any>).bind(
      globalThis,
      augmentRequestContext(clientCtx, _ => ({ finalMethodCall: "aggregate" })),
      objectType,
      objectSet,
    ),

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
        where: modernToLegacyWhereClause(clause),
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

    asyncIter: async function*<
      L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: AsyncIterArgs<Q, L, R, A, S>,
    ): AsyncIterableIterator<SingleOsdkResult<Q, L, R, S>> {
      let $nextPageToken: string | undefined = undefined;
      do {
        const result: FetchPageResult<
          Q,
          L,
          R,
          S
        > = await fetchPageInternal(
          augmentRequestContext(
            clientCtx,
            _ => ({ finalMethodCall: "asyncIter" }),
          ),
          objectType,
          objectSet,
          { ...args, $nextPageToken },
        );
        $nextPageToken = result.nextPageToken;

        for (const obj of result.data) {
          yield obj as SingleOsdkResult<Q, L, R, S>;
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
        primaryKey: Q extends MinObjectDef<any, any> ? PrimaryKeyType<Q>
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

    [__EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe]: (
      listener: EXPERIMENTAL_ObjectSetListener<Q>,
    ) => {
      const pendingSubscribe = ObjectSetListenerWebsocket.getInstance(
        clientCtx,
      ).subscribe(
        objectSet,
        listener,
      );

      return async () => (await pendingSubscribe)();
    },
  };

  function createSearchAround<L extends LinkNames<Q>>(link: L) {
    return () => {
      return clientCtx.objectSetFactory(
        objectType,
        clientCtx,
        {
          type: "searchAround",
          objectSet,
          link,
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
  objectType: MinObjectDef<any, any>,
  objectSet: WireObjectSet,
  primaryKey: PrimaryKeyType<MinObjectDef<any, any>>,
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
