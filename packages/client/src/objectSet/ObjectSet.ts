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
  OntologyDefinition,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import type { FetchPageOrThrowArgs } from "../object/fetchPageOrThrow.js";
import type { OsdkObjectOrInterfaceFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationsResults, WhereClause } from "../query/index.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";

export type ObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> = BaseObjectSet<Q>;

export interface BaseObjectSet<Q extends ObjectOrInterfaceDefinition> {
  definition: WireObjectSet;

  fetchPageOrThrow: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
  >(
    args?: FetchPageOrThrowArgs<Q, L>,
  ) => Promise<
    PageResult<OsdkObjectOrInterfaceFrom<Q, L>>
  >;

  // qq: <Q extends K>(foo: Q) => ObjectTypePropertyKeysFrom<O, K>;

  // @alpha
  // fetchPage: <L extends PropertyKeysFrom<O, K>>(
  //   args?: FetchPageOrThrowArgs<O, K, L>,
  // ) => Promise<ResultOrError<PageResult<OsdkObjectFrom<K, O, L>>>>;

  // @alpha
  // asyncIter: () => AsyncIterableIterator<
  //   OsdkObjectFrom<K, O, PropertyKeysFrom<O, K>>
  // >;

  // @alpha
  // [Symbol.asyncIterator](): AsyncIterableIterator<
  //   OsdkObjectFrom<K, O, PropertyKeysFrom<O, K>>
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

  pivotTo: <T extends keyof Q["links"]>(
    type: T & string,
  ) => ObjectSet<NonNullable<Q["links"][T]["__Mark"]>>;

  subscribe: (listener: ObjectSetListener<Q>) => () => void;
}

export type ObjectSetFactory<O extends OntologyDefinition<any>> = <
  K extends ObjectOrInterfaceKeysFrom<O>,
>(
  type: K & string,
) => ObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>;
