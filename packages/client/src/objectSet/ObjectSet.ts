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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { PropertyValueClientToWire } from "../mapping/PropertyValueMapping.js";
import type { AggregateOptsThatErrors } from "../object/AggregateOptsThatErrors.js";
import type {
  Augments,
  FetchPageArgs,
  SelectArg,
} from "../object/FetchPageArgs.js";
import type { FetchPageResult } from "../object/FetchPageResult.js";
import type { Result } from "../object/Result.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { AggregationsResults } from "../query/aggregations/AggregationsResults.js";
import type { WhereClause } from "../query/WhereClause.js";
import type { BaseObjectSet } from "./BaseObjectSet.js";
import type { LinkedType, LinkNames } from "./LinkUtils.js";

export interface MinimalObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends BaseObjectSet<Q>
{
  fetchPage: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
    R extends boolean,
    const A extends Augments,
  >(
    args?: FetchPageArgs<Q, L, R, A>,
  ) => Promise<FetchPageResult<Q, L, R>>;

  fetchPageWithErrors: <
    L extends ObjectOrInterfacePropertyKeysFrom2<Q>,
    R extends boolean,
    const A extends Augments,
  >(
    args?: FetchPageArgs<Q, L, R, A>,
  ) => Promise<Result<FetchPageResult<Q, L, R>>>;

  where: (
    clause: WhereClause<Q>,
  ) => MinimalObjectSet<Q>;

  asyncIter: () => AsyncIterableIterator<Osdk<Q, "$all">>;
}

export interface InterfaceObjectSet<Q extends InterfaceDefinition<any, any>>
  extends MinimalObjectSet<Q>
{
}

export interface ObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends MinimalObjectSet<Q>
{
  aggregate: <AO extends AggregateOpts<Q>>(
    req: AggregateOptsThatErrors<Q, AO>,
  ) => Promise<AggregationsResults<Q, AO>>;

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

  pivotTo: <L extends LinkNames<Q>>(type: L) => ObjectSet<LinkedType<Q, L>>;

  /** @deprecated use fetchOne instead*/
  get: Q extends ObjectTypeDefinition<any>
    ? <L extends ObjectOrInterfacePropertyKeysFrom2<Q>>(
      primaryKey: PropertyValueClientToWire[Q["primaryKeyType"]],
      options?: SelectArg<Q, L>,
    ) => Promise<Osdk<Q, L>>
    : never;

  fetchOne: Q extends ObjectTypeDefinition<any>
    ? <L extends ObjectOrInterfacePropertyKeysFrom2<Q>>(
      primaryKey: PropertyValueClientToWire[Q["primaryKeyType"]],
      options?: SelectArg<Q, L>,
    ) => Promise<Osdk<Q, L>>
    : never;

  fetchOneWithErrors: Q extends ObjectTypeDefinition<any>
    ? <L extends ObjectOrInterfacePropertyKeysFrom2<Q>>(
      primaryKey: PropertyValueClientToWire[Q["primaryKeyType"]],
      options?: SelectArg<Q, L>,
    ) => Promise<Result<Osdk<Q, L>>>
    : never;
}
