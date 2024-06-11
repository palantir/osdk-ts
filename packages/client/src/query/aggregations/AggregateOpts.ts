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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { WhereClause } from "../WhereClause.js";
import type { AggregatableKeys } from "./AggregatableKeys.js";
import type {
  OrderedAggregationClause,
  UnorderedAggregationClause,
} from "./AggregationsClause.js";
import type { GroupByClause } from "./GroupByClause.js";

export type AggregateOpts<
  Q extends ObjectOrInterfaceDefinition,
  KK extends AggregatableKeys<Q> = AggregatableKeys<Q>,
> = {
  $select: UnorderedAggregationClause<Q, KK>;
  // | OrderedAggregationClause<Q, KK>;
  $where?: WhereClause<Q>;
  $groupBy?: GroupByClause<Q>;
};
