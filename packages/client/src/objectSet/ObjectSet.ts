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
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
  OntologyDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import type { DefaultToFalse } from "../definitions/LinkDefinitions.js";
import type {
  FetchPageOrThrowArgs,
  SelectArg,
} from "../object/fetchPageOrThrow.js";
import type { Osdk, OsdkObjectOrInterfaceFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationsResults, WhereClause } from "../query/index.js";
import type { LinkedType, LinkNames } from "./LinkUtils.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";

export interface ObjectSet<Q extends ObjectOrInterfaceDefinition> {
  definition: WireObjectSet;

  fetchPageOrThrow: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
    R extends boolean,
  >(
    args?: FetchPageOrThrowArgs<Q, L, R>,
  ) => Promise<
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

  // qq: <Q extends K>(foo: Q) => ObjectTypePropertyKeysFrom<O, K>;

  // @alpha
  // fetchPage: <L extends PropertyKeysFrom<O, K>>(
  //   args?: FetchPageOrThrowArgs<O, K, L>,
  // ) => Promise<ResultOrError<PageResult<Osdk<K, O, L>>>>;

  // @alpha
  // asyncIter: () => AsyncIterableIterator<
  //   Osdk<K, O, PropertyKeysFrom<O, K>>
  // >;

  // @alpha
  // [Symbol.asyncIterator](): AsyncIterableIterator<
  //   Osdk<K, O, PropertyKeysFrom<O, K>>
  // >;

  aggregateOrThrow: <AO extends AggregateOpts<Q>>(
    req: AO,
  ) => Promise<AggregationsResults<Q, AO>>;

  // @alpha
  // aggregate: <const AO extends AggregateOpts<O, K, any>>(
  //   req: AO,
  // ) => Promise<ResultOrError<AggregationsResults<O, K, typeof req>>>;

  where: (
    clause: WhereClause<Q>,
  ) => ObjectSet<Q>;

  union: (
    ...objectSets: ReadonlyArray<ObjectSet<Q>>
  ) => ObjectSet<Q>;

  intersect: (
    ...objectSets: ReadonlyArray<ObjectSet<Q>>
  ) => ObjectSet<Q>;

  subtract: (
    ...objectSets: ReadonlyArray<ObjectSet<Q>>
  ) => ObjectSet<Q>;

  pivotTo: <L extends LinkNames<Q>>(type: L) => BaseObjectSet<LinkedType<Q, L>>;

  subscribe: (listener: ObjectSetListener<Q>) => () => void;
}

export interface BaseObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends ObjectSet<Q> {
  get: Q extends ObjectTypeDefinition<any>
    ? <L extends ObjectOrInterfacePropertyKeysFrom2<Q>>(
      primaryKey: WirePropertyTypes[Q["primaryKeyType"]],
      options?: SelectArg<Q, L>,
    ) => Promise<OsdkObjectOrInterfaceFrom<Q, L>>
    : never;
}

export type ObjectSetFactory<O extends OntologyDefinition<any>> = <
  K extends ObjectOrInterfaceKeysFrom<O>,
>(
  type: K,
) => ObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>;
