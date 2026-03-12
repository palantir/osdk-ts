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

import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { BaseWirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type {
  AGG_FOR_TYPE,
  StructPropertyKeys,
  ValidAggregationKeys,
} from "./AggregatableKeys.js";

type StructAggregationClauseEntry<
  StructType,
  Order extends "unordered" | "asc" | "desc",
> = StructType extends Record<string, BaseWirePropertyTypes> ? {
    [
      SF in keyof StructType & string as `${SF}:${AGG_FOR_TYPE<StructType[SF]>}`
    ]?: Order;
  }
  : never;

type StructAggregationClauseProperties<
  Q extends ObjectOrInterfaceDefinition,
  Order extends "unordered" | "asc" | "desc",
> = {
  [P in StructPropertyKeys<Q>]?: StructAggregationClauseEntry<
    CompileTimeMetadata<Q>["properties"][P]["type"],
    Order
  >;
};

type UnorderedAggregationClauseNonStruct<
  Q extends ObjectOrInterfaceDefinition,
> = { [AK in ValidAggregationKeys<Q>]?: "unordered" };

type OrderedAggregationClauseNonStruct<Q extends ObjectOrInterfaceDefinition> =
  {
    [AK in ValidAggregationKeys<Q>]?: "unordered" | "asc" | "desc";
  };

export type UnorderedAggregationClause<Q extends ObjectOrInterfaceDefinition> =
  [StructPropertyKeys<Q>] extends [never]
    ? UnorderedAggregationClauseNonStruct<Q>
    :
      & UnorderedAggregationClauseNonStruct<Q>
      & StructAggregationClauseProperties<Q, "unordered">;

export type OrderedAggregationClause<Q extends ObjectOrInterfaceDefinition> =
  [StructPropertyKeys<Q>] extends [never] ? OrderedAggregationClauseNonStruct<Q>
    :
      & OrderedAggregationClauseNonStruct<Q>
      & StructAggregationClauseProperties<Q, "unordered" | "asc" | "desc">;

export type UnorderedAggregationClauseWithStructs<
  Q extends ObjectOrInterfaceDefinition,
> =
  & UnorderedAggregationClause<Q>
  & StructAggregationClauseProperties<Q, "unordered">;

export type OrderedAggregationClauseWithStructs<
  Q extends ObjectOrInterfaceDefinition,
> =
  & OrderedAggregationClause<Q>
  & StructAggregationClauseProperties<Q, "unordered" | "asc" | "desc">;

export type AggregationClause<Q extends ObjectOrInterfaceDefinition> =
  | UnorderedAggregationClause<Q>
  | OrderedAggregationClause<Q>;

export type AggregationClauseWithStructs<
  Q extends ObjectOrInterfaceDefinition,
> =
  | UnorderedAggregationClauseWithStructs<Q>
  | OrderedAggregationClauseWithStructs<Q>;
