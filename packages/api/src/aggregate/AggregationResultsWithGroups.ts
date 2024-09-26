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

import type { OsdkObjectPropertyType } from "../Definitions.js";
import type { GroupByClause, GroupByRange } from "../groupby/GroupByClause.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups.js";
import type {
  OrderedAggregationClause,
  UnorderedAggregationClause,
} from "./AggregationsClause.js";

export type AggregationResultsWithGroups<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  A extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>,
  G extends GroupByClause<Q> | undefined,
> = (
  & {
    $group: {
      [P in keyof G & PropertyKeys<Q>]: G[P] extends
        { $ranges: GroupByRange<infer T>[] } ? { startValue: T; endValue: T }
        : OsdkObjectPropertyType<CompileTimeMetadata<Q>["properties"][P], true>;
    };
  }
  & AggregationResultsWithoutGroups<Q, A>
)[];
