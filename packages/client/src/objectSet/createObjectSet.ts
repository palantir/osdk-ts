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
import type {
  BaseObjectSet,
  LinkedType,
  LinkNames,
  PropertyValueClientToWire,
  Result,
} from "@osdk/client.api";
import type { ObjectSet as WireObjectSet } from "@osdk/internal.foundry";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { aggregate } from "../object/aggregate.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import {
  fetchPageInternal,
  fetchPageWithErrorsInternal,
} from "../object/fetchPage.js";
import { type SelectArg } from "../object/FetchPageArgs.js";
import { fetchSingle, fetchSingleWithErrors } from "../object/fetchSingle.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
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
  const base: Omit<ObjectSet<Q>, keyof BaseObjectSet<Q>> = {
    aggregate: (aggregate<Q, any>).bind(
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

    asyncIter: async function*(): AsyncIterableIterator<Osdk<Q, "$all">> {
      let $nextPageToken: string | undefined = undefined;
      do {
        const result = await base.fetchPage({ $nextPageToken });

        for (
          const obj of result.data
        ) {
          yield obj as Osdk<Q, "$all">;
        }
      } while ($nextPageToken != null);
    },

    fetchOne: (isObjectTypeDefinition(objectType)
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
      : undefined) as ObjectSet<Q>["fetchOne"],

    fetchOneWithErrors: (isObjectTypeDefinition(objectType)
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

        return await fetchSingleWithErrors(
          clientCtx,
          objectType,
          options,
          withPk,
        ) as Result<Osdk<Q>>;
      }
      : undefined) as ObjectSet<Q>["fetchOneWithErrors"],
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
