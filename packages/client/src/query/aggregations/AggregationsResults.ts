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
import type {
  AggregatableKeys,
  ValidAggregationKeys,
} from "./AggregatableKeys.js";
import type { AggregateOpts } from "./AggregateOpts.js";
import type { AggregationResultsWithGroups } from "./AggregationResultsWithGroups.js";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups.js";

export type AggregationsResults<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q>,
> = Exclude<keyof AO["$select"], ValidAggregationKeys<Q>> extends never
  ? unknown extends AO["$groupBy"] // groupBy is missing
    ? AggregationResultsWithoutGroups<Q, AO["$select"]>
  : Exclude<AO["$groupBy"], undefined> extends never // groupBy is explicitly undefined
    ? AggregationResultsWithoutGroups<Q, AO["$select"]>
  : Exclude<keyof AO["$groupBy"], AggregatableKeys<Q>> extends never
    ? AggregationResultsWithGroups<Q, AO["$select"], AO["$groupBy"]>
  : `Sorry, the following are not valid groups for an aggregation: ${Exclude<
    keyof AO["$groupBy"] & string,
    AggregatableKeys<Q>
  >}`
  : `Sorry, the following are not valid selectors for an aggregation: ${Exclude<
    keyof AO["$select"] & string,
    ValidAggregationKeys<Q>
  >}`;
