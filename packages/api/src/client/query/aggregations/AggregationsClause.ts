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
  ObjectTypesFrom,
  OntologyDefinition,
  PropertyDefinitionsFrom,
} from "../../../ontology";
import type { AggregatableKeys } from "./AggregatableKeys";

type StringAggregateOption = "approximateDistinct";
type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct";

export type AggregationClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in AggregatableKeys<O, K>]?: PropertyDefinitionsFrom<
    O,
    K
  >[P]["type"] extends "string"
    ? StringAggregateOption | StringAggregateOption[]
    : PropertyDefinitionsFrom<O, K>[P]["type"] extends "double"
      ? NumericAggregateOption | NumericAggregateOption[]
    : PropertyDefinitionsFrom<O, K>[P]["type"];
};
