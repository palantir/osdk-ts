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
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectOrInterfacePropertyKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/gateway/types";
import type { FetchPageOrThrowArgs } from "../object/fetchPageOrThrow.js";
import type { OsdkInterfaceFrom, OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationsResults, WhereClause } from "../query/index.js";
import type { LinkTypesFrom } from "./LinkTypesFrom.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";

export type ObjectSet<
  O extends OntologyDefinition<string>,
  K extends ObjectOrInterfaceKeysFrom<O>,
> = BaseObjectSet<O, K>;

export interface BaseObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectOrInterfaceKeysFrom<O>,
> {
  definition: WireObjectSet;

  fetchPageOrThrow: <
    L extends ObjectOrInterfacePropertyKeysFrom<O, K>,
  >(
    args?: FetchPageOrThrowArgs<O, K, L>,
  ) => Promise<
    PageResult<
      K extends InterfaceKeysFrom<O> ? OsdkInterfaceFrom<K, O, L>
        : OsdkObjectFrom<K, O, L>
    >
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

  aggregateOrThrow: <const AO extends AggregateOpts<O, K, any>>(
    req: AO,
  ) => Promise<AggregationsResults<O, K, AO>>;

  // @alpha
  // aggregate: <const AO extends AggregateOpts<O, K, any>>(
  //   req: AO,
  // ) => Promise<ResultOrError<AggregationsResults<O, K, typeof req>>>;

  where: (
    clause: WhereClause<
      ObjectOrInterfaceDefinitionFrom<O, K>
    >,
  ) => ObjectSet<O, K>;

  pivotTo: <T extends LinkTypesFrom<O, K>>(
    type: T & string,
  ) => ObjectSet<O, O["objects"][K]["links"][T]["targetType"]>;

  subscribe: (listener: ObjectSetListener<O, K>) => () => void;
}

export type ObjectSetFactory<O extends OntologyDefinition<any>> = <
  K extends ObjectOrInterfaceKeysFrom<O>,
>(
  type: K & string,
) => ObjectSet<O, K>; // FIXME
