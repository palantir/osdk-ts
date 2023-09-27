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

import type { AggregationsResults, WhereClause } from "#client/query";
import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  OsdkObjectFrom,
  ObjectInfoFrom,
} from "#ontology";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts";
import type { ResultOrError } from "../ResultOrError";
import type { PageResult } from "../PageResult";
import type { FetchPageOrThrowArgs } from "../object/fetchPageOrThrow";
import type { LinkTypesFrom } from "./LinkTypesFrom";

export type ObjectSet<
  O extends OntologyDefinition<string>,
  K extends ObjectTypesFrom<O>,
> = BaseObjectSet<O, K>; // & SearchAround<O, K>;

// GOTTA DO THIS STILL
export type SearchAround<
  O extends OntologyDefinition<string>,
  K extends ObjectTypesFrom<O>,
> = {
  [L in LinkTypesFrom<O, K> as `searchAround_${L}`]: () => ObjectSet<O, L>; // TODO accept args?
};

export interface BaseObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> {
  fetchPageOrThrow: <L extends PropertyKeysFrom<O, K>>(
    args?: FetchPageOrThrowArgs<O, K, L>,
  ) => Promise<PageResult<OsdkObjectFrom<K, O, L>>>;
  fetchPage: <L extends PropertyKeysFrom<O, K>>(
    args?: FetchPageOrThrowArgs<O, K, L>,
  ) => Promise<ResultOrError<PageResult<OsdkObjectFrom<K, O, L>>>>;

  asyncIter: () => AsyncIterableIterator<
    OsdkObjectFrom<K, O, PropertyKeysFrom<O, K>>
  >;
  [Symbol.asyncIterator](): AsyncIterableIterator<
    OsdkObjectFrom<K, O, PropertyKeysFrom<O, K>>
  >;

  aggregateOrThrow: <const AO extends AggregateOpts<O, K, any>>(
    req: AO,
  ) => Promise<AggregationsResults<O, K, AO>>;

  aggregate: <const AO extends AggregateOpts<O, K, any>>(
    req: AO,
  ) => Promise<ResultOrError<AggregationsResults<O, K, typeof req>>>;

  where: (clause: WhereClause<ObjectInfoFrom<O, K>>) => ObjectSet<O, K>;

  pivotTo: <T extends LinkTypesFrom<O, K>>(
    type: T,
    opts?: ObjectSetOptions<O, O["objects"][K]["links"][T]["targetType"]>,
  ) => ObjectSet<O, O["objects"][K]["links"][T]["targetType"]>;
}

// type Q<T extends

export interface ObjectSetOptions<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> {
  $where?: WhereClause<ObjectInfoFrom<O, K>>;
}

export type ObjectSetFactory<O extends OntologyDefinition<any>> = <
  K extends ObjectTypesFrom<O>,
>(
  type: K,
  opts?: ObjectSetOptions<O, K>,
) => ObjectSet<O, K>; //FIXME
