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
  ObjectTypeDefinition,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/internal.foundry";
import { modernToLegacyWhereClause } from "../internal/conversions/index.js";
import type { PropertyValueClientToWire } from "../mapping/PropertyValueMapping.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import {
  fetchPageInternal,
  fetchPageWithErrorsInternal,
  type SelectArg,
} from "../object/fetchPage.js";
import { fetchSingle } from "../object/fetchSingle.js";
import { aggregate } from "../object/index.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
import type { LinkedType, LinkNames } from "./LinkUtils.js";
import type { MinimalObjectSet, ObjectSet } from "./ObjectSet.js";

function isObjectTypeDefinition(
  def: ObjectOrInterfaceDefinition,
): def is ObjectTypeDefinition<any> {
  return def.type === "object";
}

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

export function createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: MinimalClient,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): ObjectSet<Q> {
  const base: ObjectSet<Q> = {
    aggregate: (aggregate<Q, any>).bind(
      globalThis,
      clientCtx,
      objectType,
      objectSet,
    ),

    aggregateOrThrow: (aggregate<Q, any>).bind(
      globalThis,
      clientCtx,
      objectType,
      objectSet,
    ),

    fetchPage: fetchPageInternal.bind(
      globalThis,
      clientCtx,
      objectType,
      objectSet,
    ) as ObjectSet<Q>["fetchPage"],

    fetchPageWithErrors: fetchPageWithErrorsInternal.bind(
      globalThis,
      clientCtx,
      objectType,
      objectSet,
    ) as ObjectSet<Q>["fetchPageWithErrors"],

    fetchPageOrThrow: fetchPageInternal.bind(
      globalThis,
      clientCtx,
      objectType,
      objectSet,
    ) as ObjectSet<Q>["fetchPage"],

    where: (clause) => {
      return createObjectSet(objectType, clientCtx, {
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
      return createObjectSet(objectType, clientCtx, {
        type: "union",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    intersect: (...objectSets) => {
      return createObjectSet(objectType, clientCtx, {
        type: "intersect",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    subtract: (...objectSets) => {
      return createObjectSet(objectType, clientCtx, {
        type: "subtract",
        objectSets: [
          objectSet,
          ...objectSets.map(os => objectSetDefinitions.get(os)!),
        ],
      });
    },

    subscribe(listener) {
      // We are going to lazy load subscriptions to reduce initial
      // bundle sizes.
      const pendingSubscribe = import("./ObjectSetListenerWebsocket.js").then((
        mod,
      ) =>
        mod.ObjectSetListenerWebsocket.getInstance(clientCtx).subscribe(
          objectSet,
          listener,
        )
      );
      return () => {
        pendingSubscribe.then((subscribe) => subscribe());
      };
    },

    asyncIter: async function*(): AsyncIterableIterator<Osdk<Q, "$all">> {
      let nextPageToken: string | undefined = undefined;
      do {
        const result = await base.fetchPage({ nextPageToken });

        for (
          const obj of await convertWireToOsdkObjects(
            clientCtx,
            result.data,
            undefined,
          )
        ) {
          yield obj as Osdk<Q, "$all">;
        }
      } while (nextPageToken != null);
    },

    get: (isObjectTypeDefinition(objectType)
      ? async <A extends SelectArg<Q>>(
        primaryKey: Q extends ObjectTypeDefinition<any>
          ? PropertyValueClientToWire[Q["primaryKeyType"]]
          : never,
        options: A,
      ) => {
        const withPk: WireObjectSet = {
          type: "filter",
          objectSet: objectSet,
          where: {
            type: "eq",
            field: objectType.primaryKeyApiName,
            value: primaryKey,
          },
        };

        return await fetchSingle(
          clientCtx,
          objectType,
          options,
          withPk,
        ) as Osdk<Q>;
      }
      : undefined) as ObjectSet<Q>["get"],
  };

  function createSearchAround<L extends LinkNames<Q>>(link: L) {
    return () => {
      return createObjectSet(
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

  return base;
}
