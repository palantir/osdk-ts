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
import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import { modernToLegacyWhereClause } from "../internal/conversions/index.js";
import type { PropertyValueClientToWire } from "../mapping/PropertyValueMapping.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { AggregateOptsThatErrors } from "../object/aggregate.js";
import { convertWireToOsdkObjectsInPlace } from "../object/convertWireToOsdkObjects.js";
import type { FetchPageArgs, SelectArg } from "../object/fetchPage.js";
import { fetchSingle } from "../object/fetchSingle.js";
import { aggregate, fetchPage } from "../object/index.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationsResults } from "../query/index.js";
import type { LinkedType, LinkNames } from "./LinkUtils.js";
import type { ObjectSet } from "./ObjectSet.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

function isObjectTypeDefinition(
  def: ObjectOrInterfaceDefinition,
): def is ObjectTypeDefinition<any> {
  return def.type === "object";
}

const searchAroundPrefix = "searchAround_";
export function createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: MinimalClient,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): ObjectSet<Q> {
  const base: ObjectSet<Q> = {
    definition: objectSet,

    aggregate: (<AO extends AggregateOpts<Q>>(
      req: AggregateOptsThatErrors<Q, AO>,
    ): Promise<AggregationsResults<Q, AO>> => {
      return aggregate<Q, AO>(
        clientCtx,
        objectType,
        objectSet,
        req,
      );
    }),

    aggregateOrThrow: (<AO extends AggregateOpts<Q>>(
      req: AggregateOptsThatErrors<Q, AO>,
    ): Promise<AggregationsResults<Q, AO>> => {
      return aggregate<Q, AO>(
        clientCtx,
        objectType,
        objectSet,
        req,
      );
    }),

    fetchPage: async <
      L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
      R extends boolean,
    >(
      args?: FetchPageArgs<Q, L, R>,
    ) => {
      return fetchPage(
        clientCtx,
        objectType,
        args ?? {},
        objectSet,
      );
    },

    fetchPageOrThrow: async <
      L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
      R extends boolean,
    >(
      args?: FetchPageArgs<Q, L, R>,
    ) => {
      return fetchPage(
        clientCtx,
        objectType,
        args ?? {},
        objectSet,
      );
    },

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
        objectSets: [objectSet, ...objectSets.map(os => os.definition)],
      });
    },

    intersect: (...objectSets) => {
      return createObjectSet(objectType, clientCtx, {
        type: "intersect",
        objectSets: [objectSet, ...objectSets.map(os => os.definition)],
      });
    },

    subtract: (...objectSets) => {
      return createObjectSet(objectType, clientCtx, {
        type: "subtract",
        objectSets: [objectSet, ...objectSets.map(os => os.definition)],
      });
    },

    subscribe(listener) {
      const instance = ObjectSetListenerWebsocket.getInstance(clientCtx);
      return instance.subscribe(objectSet, listener);
    },

    asyncIter: async function*(): AsyncIterableIterator<Osdk<Q, "$all">> {
      let nextPageToken: string | undefined = undefined;
      do {
        const result = await base.fetchPage({ nextPageToken });
        await convertWireToOsdkObjectsInPlace(clientCtx, result.data);
        for (const obj of result.data) {
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

  return new Proxy(base as ObjectSet<Q>, {
    get(target, p, receiver) {
      if (typeof p === "string" && p.startsWith(searchAroundPrefix)) {
        return createSearchAround(p.substring(searchAroundPrefix.length));
      }
      return (target as any)[p as any] as any;
    },
  });
}
