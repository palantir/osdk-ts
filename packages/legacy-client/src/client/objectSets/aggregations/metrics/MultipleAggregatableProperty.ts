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
  Double,
  MetricValue,
  MultipleAggregationsOperations,
} from "../Aggregations.js";
import type { MetricValueType } from "./metrics.js";

export interface MultipleAggregatableProperty<
  TResult extends MetricValue = Double,
> {
  type: "MultipleAggregationsProperty";
  approximateDistinct: () => MultipleAggregationsOperations<Double>;
  min: () => MultipleAggregationsOperations<TResult>;
  max: () => MultipleAggregationsOperations<TResult>;
  avg: () => MultipleAggregationsOperations<TResult>;
  sum: () => MultipleAggregationsOperations<TResult>;
}

export const MultipleAggregatableProperty = <T extends MetricValue>(
  propertyApiName: string,
  propertyType: MetricValueType,
): MultipleAggregatableProperty<T> => ({
  type: "MultipleAggregationsProperty",

  max(): MultipleAggregationsOperations<T> {
    return {
      type: "MultipleAggregationsOperations",
      operation: "max",
      metricValueType: propertyType,
      propertyApiName,
    };
  },

  min(): MultipleAggregationsOperations<T> {
    return {
      type: "MultipleAggregationsOperations",
      operation: "min",
      metricValueType: propertyType,
      propertyApiName,
    };
  },

  sum(): MultipleAggregationsOperations<T> {
    return {
      type: "MultipleAggregationsOperations",
      operation: "sum",
      metricValueType: propertyType,
      propertyApiName,
    };
  },

  avg(): MultipleAggregationsOperations<T> {
    return {
      type: "MultipleAggregationsOperations",
      operation: "avg",
      metricValueType: propertyType,
      propertyApiName,
    };
  },

  approximateDistinct(): MultipleAggregationsOperations<Double> {
    return {
      type: "MultipleAggregationsOperations",
      operation: "approximateDistinct",
      metricValueType: propertyType,
      propertyApiName,
    };
  },
});

export function isMultipleAggregationOperation(
  value: any,
): value is MultipleAggregationsOperations<any> {
  return value.type === "MultipleAggregationsOperations";
}
