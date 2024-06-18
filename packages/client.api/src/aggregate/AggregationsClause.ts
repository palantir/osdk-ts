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
import type { AggregatableKeys } from "@osdk/client.api";

type StringAggregateOption = "approximateDistinct";
type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct";

type totalCountOption = { $count?: true };

export type AggregationClause<
  Q extends ObjectOrInterfaceDefinition,
  K extends AggregatableKeys<Q> = AggregatableKeys<Q>,
> =
  & {
    [P in K]?: Q["properties"][P]["type"] extends "string"
      ? StringAggregateOption | StringAggregateOption[]
      : Q["properties"][P]["type"] extends
        "double" | "integer" | "float" | "decimal" | "byte" | "long" | "short"
        ? NumericAggregateOption | NumericAggregateOption[]
      : never;
  }
  & totalCountOption;
