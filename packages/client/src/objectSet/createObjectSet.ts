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
  InterfaceKeysFrom,
  InterfacePropertyKeysFrom,
  ObjectTypeKeysFrom,
  ObjectTypePropertyKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import { modernToLegacyWhereClause } from "../internal/conversions/index.js";
import type { Wire } from "../internal/net/index.js";
import type { FetchPageOrThrowArgs } from "../object/fetchPageOrThrow.js";
import { aggregateOrThrow, fetchPageOrThrow } from "../object/index.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationClause, AggregationsResults } from "../query/index.js";
import type { LinkTypesFrom } from "./LinkTypesFrom.js";
import type {
  BaseObjectSet,
  ObjectSet,
  ObjectSetOptions,
} from "./ObjectSet.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

const searchAroundPrefix = "searchAround_";
export function createObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O> | InterfaceKeysFrom<O>,
>(
  objectType: K & string,
  clientCtx: ClientContext<O>,
  opts: ObjectSetOptions<O, K> | undefined,
  objectSet: Wire.ObjectSet = {
    type: "base",
    objectType,
  },
): ObjectSet<O, K> {
  const base: BaseObjectSet<O, K> = {
    // aggregate: <
    //   AC extends AggregationClause<O, K>,
    //   GBC extends GroupByClause<O, K> | undefined = undefined,
    // >(req: {
    //   select: AC;
    //   where?: WhereClause<ObjectTypeDefinitionFrom<O, K>>;
    //   groupBy?: GBC;
    // }) => {
    //   throw "TODO";
    // },
    aggregateOrThrow: async <
      AC extends AggregationClause<O, K>,
      // GBC extends GroupByClause<O, K>,
      AO extends AggregateOpts<O, K, AC>,
    >(
      req: AO,
    ): Promise<AggregationsResults<O, K, AO>> => {
      return aggregateOrThrow(clientCtx, objectType, req);
    },
    // fetchPage: async (args?: { nextPageToken?: string }) => {
    //   throw "TODO";
    // },
    fetchPageOrThrow: async <
      L extends K extends InterfaceKeysFrom<O> ? InterfacePropertyKeysFrom<O, K>
        : ObjectTypePropertyKeysFrom<O, K>,
    >(
      args?: FetchPageOrThrowArgs<O, K, L>,
    ) => {
      return fetchPageOrThrow(
        clientCtx,
        objectType,
        args ?? {},
        objectSet,
      ) as any;
    },

    // asyncIter: () => {
    //   throw "";
    // },
    where: (clause) => {
      return createObjectSet(objectType, clientCtx, opts, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause),
      });
    },
    // [Symbol.asyncIterator]: () => {
    //   throw "";
    // },

    pivotTo: function<T extends LinkTypesFrom<O, K>>(
      type: T & string,
      opts?: ObjectSetOptions<O, O["objects"][K]["links"][T]["targetType"]>,
    ): ObjectSet<O, O["objects"][K]["links"][T]["targetType"]> {
      return createSearchAround(type)().where(opts?.$where ?? {});
    },

    subscribe(listener) {
      const instance = ObjectSetListenerWebsocket.getInstance(clientCtx);
      return instance.subscribe(objectSet, listener);
    },
  };

  function createSearchAround<S extends LinkTypesFrom<O, K>>(link: S & string) {
    return () => {
      return createObjectSet(
        objectType,
        clientCtx,
        {},
        {
          type: "searchAround",
          objectSet,
          link,
        },
      );
    };
  }

  return new Proxy(base as ObjectSet<O, K>, {
    get(target, p, receiver) {
      if (typeof p === "string" && p.startsWith(searchAroundPrefix)) {
        return createSearchAround(p.substring(searchAroundPrefix.length));
      }
      return (target as any)[p as any] as any;
    },
  });
}
