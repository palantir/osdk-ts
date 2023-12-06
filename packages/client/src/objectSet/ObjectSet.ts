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
  InterfaceNamesFrom,
  InterfacePropertyKeysFrom,
  ObjectInfoFrom,
  ObjectPropertyKeysFrom,
  ObjectTypesFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { FetchPageOrThrowArgs } from "../object/fetchPageOrThrow";
import type { OsdkInterfaceFrom, OsdkObjectFrom } from "../OsdkObjectFrom";
import type { PageResult } from "../PageResult";
import type { AggregationsResults, WhereClause } from "../query";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts";
import type { LinkTypesFrom } from "./LinkTypesFrom";

export type ObjectSet<
  O extends OntologyDefinition<string>,
  K extends ObjectTypesFrom<O> | InterfaceNamesFrom<O>,
> = BaseObjectSet<O, K>;

export interface BaseObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O> | InterfaceNamesFrom<O>,
> {
  fetchPageOrThrow: <
    L extends (
      K extends InterfaceNamesFrom<O> ? InterfacePropertyKeysFrom<O, K>
        : ObjectPropertyKeysFrom<O, K>
    ),
  >(
    args?: FetchPageOrThrowArgs<O, K, L>,
  ) => Promise<
    PageResult<
      K extends InterfaceNamesFrom<O> ? OsdkInterfaceFrom<K, O, L>
        : OsdkObjectFrom<K, O, L>
    >
  >;

  // qq: <Q extends K>(foo: Q) => ObjectPropertyKeysFrom<O, K>;

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

  aggregateOrThrow: <const AO extends AggregateOpts<O, K, any>>(
    req: AO,
  ) => Promise<AggregationsResults<O, K, AO>>;

  // @alpha
  // aggregate: <const AO extends AggregateOpts<O, K, any>>(
  //   req: AO,
  // ) => Promise<ResultOrError<AggregationsResults<O, K, typeof req>>>;

  where: (clause: WhereClause<ObjectInfoFrom<O, K>>) => ObjectSet<O, K>;

  pivotTo: <T extends LinkTypesFrom<O, K>>(
    type: T & string,
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
  type: K & string,
  opts?: ObjectSetOptions<O, K>,
) => ObjectSet<O, K>; // FIXME
