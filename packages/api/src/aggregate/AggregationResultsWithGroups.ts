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

import type { OsdkObjectPropertyTypeNotUndefined } from "../Definitions.js";
import type { GroupByClause, GroupByRange } from "../groupby/GroupByClause.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { StructPropertyKeys } from "./AggregatableKeys.js";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups.js";
import type {
  OrderedAggregationClause,
  UnorderedAggregationClause,
} from "./AggregationsClause.js";

type NonStructPropertyKeys<Q extends ObjectOrInterfaceDefinition> = Exclude<
  PropertyKeys<Q>,
  StructPropertyKeys<Q>
>;

type StructGroupResult<
  StructGroupEntry,
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
> = StructGroupEntry extends Record<string, any> ? {
    [FieldName in keyof StructGroupEntry & string]:
      StructGroupEntry[FieldName] extends { $ranges: GroupByRange<infer T>[] }
        ? { startValue: T; endValue: T }
        : MaybeNullable<
          StructGroupEntry[FieldName],
          CompileTimeMetadata<Q>["properties"][P]["type"] extends
            Record<string, infer V> ? V extends string ? string : V
            : never
        >;
  }
  : never;

export type AggregationResultsWithGroups<
  Q extends ObjectOrInterfaceDefinition,
  A extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>,
  G extends GroupByClause<Q> | undefined,
> = (
  & {
    $group:
      & {
        [P in keyof G & NonStructPropertyKeys<Q>]: G[P] extends
          { $ranges: GroupByRange<infer T>[] } ? { startValue: T; endValue: T }
          : MaybeNullable<
            G[P],
            OsdkObjectPropertyTypeNotUndefined<
              CompileTimeMetadata<Q>["properties"][P]
            >
          >;
      }
      & {
        [P in keyof G & StructPropertyKeys<Q>]: StructGroupResult<G[P], Q, P>;
      };
  }
  & AggregationResultsWithoutGroups<Q, A>
)[];

type MaybeNullable<GROUP, VALUE> = GROUP extends {
  $exact: { $includeNullValue: true };
} ? VALUE | null
  : VALUE;
