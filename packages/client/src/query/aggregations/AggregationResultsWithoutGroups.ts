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
import type { OsdkObjectPropertyType } from "../../Definitions.js";
import type {
  OrderedAggregationClause,
  UnorderedAggregationClause,
} from "./AggregationsClause.js";

type ExtractPropName<T extends string> = T extends `${infer PropName}:${string}`
  ? PropName
  : T extends "$count" ? T
  : never;

type ExtractMetricNameForPropName<T, PropName extends string> = T extends
  `${PropName}:${infer MetricName}` ? MetricName : never;

export type AggregationResultsWithoutGroups<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  AC extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>,
> = {
  [PropName in ExtractPropName<keyof AC & string>]: PropName extends "$count"
    ? number
    : {
      [MetricName in ExtractMetricNameForPropName<keyof AC & string, PropName>]:
        MetricName extends "approximateDistinct" ? number
          : OsdkObjectPropertyType<Q["properties"][PropName]>;
    };
};
