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
import type { PropertyValueWireToClient } from "@osdk/client.api";
import type { AggregatableKeys } from "./AggregatableKeys.js";

type StringAggregateOption = "approximateDistinct";
type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct";

type AGG_FOR_TYPE<T> = T extends string ? StringAggregateOption
  : T extends number ? NumericAggregateOption
  : never;

export type UnorderedAggregationClause<
  Q extends ObjectOrInterfaceDefinition,
  K extends AggregatableKeys<Q> = AggregatableKeys<Q>,
> =
  & {
    [
      KK in K as `${KK & string}:${AGG_FOR_TYPE<
        PropertyValueWireToClient[Q["properties"][KK]["type"]]
      >}`
    ]?: "unordered";
  }
  & {
    "$count"?: "unordered";
  };

export type OrderedAggregationClause<
  Q extends ObjectOrInterfaceDefinition,
  K extends AggregatableKeys<Q> = AggregatableKeys<Q>,
> = {
  [KK in keyof UnorderedAggregationClause<Q, K>]?: "unordered" | "asc" | "desc";
};
