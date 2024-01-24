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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import type { ObjectSetMultipleAggregateArg } from "../interfaces/aggregations.js";
import {
  ApproximateDistinctCountAggregatableProperty,
  CountOperation,
  LocalDatePropertyMetric,
  NumericPropertyMetric,
} from "../objectSets/aggregations/index.js";
import type { MultipleAggregatableProperty } from "../objectSets/aggregations/index.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import { isReservedKeyword } from "../utils/reservedKeywords.js";

export function mapPropertiesToMultipleAggregationProperties<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(ontology: O, type: K) {
  return Object.entries(ontology.objects[type].properties).reduce(
    (acc, [property, definition]) => {
      switch (definition.type) {
        case "datetime":
          acc[property] = LocalDatePropertyMetric(property);
          break;
        case "timestamp":
          acc[property] = LocalDatePropertyMetric(property);
          break;

        case "byte":
        case "decimal":
        case "double":
        case "float":
        case "integer":
        case "long":
        case "boolean":
        case "short":
          acc[property] = NumericPropertyMetric(property);
          break;

        case "attachment":
        case "geopoint":
        case "geoshape":
        case "string":
          acc[property] = ApproximateDistinctCountAggregatableProperty(
            property,
          );
          break;

        case "numericTimeseries":
        case "stringTimeseries":
          break;

        default:
          const _: never = definition.type;
      }
      if (isReservedKeyword(property)) {
        acc[`${property}_`] = acc[property];
      }
      return acc;
    },
    { count: () => CountOperation } as
      & Record<
        string,
        | MultipleAggregatableProperty<any>
        | ApproximateDistinctCountAggregatableProperty
      >
      & { count: () => typeof CountOperation },
  ) as ObjectSetMultipleAggregateArg<OsdkLegacyObjectFrom<O, K>>;
}
