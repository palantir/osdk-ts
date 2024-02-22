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
  WirePropertyTypes,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { modernToLegacyWhereClause } from "../internal/conversions/index.js";
import type {
  FetchPageOrThrowArgs,
  SelectArg,
} from "../object/fetchPageOrThrow.js";
import { aggregateOrThrow, fetchPageOrThrow } from "../object/index.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationClause, AggregationsResults } from "../query/index.js";
import type { LinkedType, LinkNames } from "./LinkUtils.js";
import type { BaseObjectSet, ObjectSet } from "./ObjectSet.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

function isObjectTypeDefinition(
  def: ObjectOrInterfaceDefinition,
): def is ObjectTypeDefinition<any> {
  return def.type === "object";
}

const searchAroundPrefix = "searchAround_";
export function createObjectSet<Q extends ObjectOrInterfaceDefinition>(
  objectType: Q,
  clientCtx: ClientContext<any>,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): ObjectSet<Q> {
  const base: ObjectSet<Q> = {
    definition: objectSet,

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
      AC extends AggregationClause<Q>,
      // GBC extends GroupByClause<O, K>,
      AO extends AggregateOpts<Q, AC>,
    >(
      req: AO,
    ): Promise<AggregationsResults<Q, AO>> => {
      return aggregateOrThrow<Q, AO>(
        clientCtx,
        objectType,
        objectSet,
        req,
      );
    },
    // fetchPage: async (args?: { nextPageToken?: string }) => {
    //   throw "TODO";
    // },
    fetchPageOrThrow: async (args?: FetchPageOrThrowArgs<Q, any, any>) => {
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
      return createObjectSet(objectType, clientCtx, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause),
      });
    },
    // [Symbol.asyncIterator]: () => {
    //   throw "";
    // },

    pivotTo: function<L extends LinkNames<Q>>(
      type: L,
    ): BaseObjectSet<LinkedType<Q, L>> {
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
  };

  function createSearchAround<L extends LinkNames<Q>>(link: L) {
    return () => {
      return createBaseObjectSet(
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

export function createBaseObjectSet<
  Q extends ObjectOrInterfaceDefinition,
>(
  objectType: Q,
  clientCtx: ClientContext<any>,
  objectSet: WireObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
): BaseObjectSet<Q> {
  return {
    ...createObjectSet(objectType, clientCtx, objectSet),

    get: (isObjectTypeDefinition(objectType)
      ? async <A extends SelectArg<any>>(
        primaryKey: Q extends ObjectTypeDefinition<any>
          ? WirePropertyTypes[Q["primaryKeyType"]]
          : never,
        options: A,
      ) => {
        const withPk: WireObjectSet = {
          type: "filter",
          objectSet: objectSet,
          where: modernToLegacyWhereClause({
            [objectType.primaryKeyApiName]: primaryKey,
          }),
        };

        const { data, nextPageToken } = await fetchPageOrThrow(
          clientCtx,
          objectType,
          options,
          withPk,
        );

        if (data.length !== 1 || nextPageToken != null) {
          throw new Error("Expected exactly one result");
        }

        return data[0];
      }
      : undefined as never) as BaseObjectSet<Q>["get"],
  };
}
