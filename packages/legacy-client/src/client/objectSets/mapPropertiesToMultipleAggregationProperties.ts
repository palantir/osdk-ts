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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type { MultipleAggregatableProperty } from "../../ontology-runtime";
import {
  ApproximateDistinctCountAggregatableProperty,
  CountOperation,
  LocalDatePropertyMetric,
  NumericPropertyMetric,
} from "../../ontology-runtime";
import type { MultipleAggregateSelection } from "../interfaces/aggregations";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";

export function mapPropertiesToMultipleAggregationProperties<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(ontology: O, type: K) {
  return Object.entries(ontology.objects[type].properties).reduce(
    (acc, [property, definition]) => {
      switch (definition.type) {
        case "datetime":
          acc[property] = LocalDatePropertyMetric(property);
          break;

        case "double":
        case "integer":
          acc[property] = NumericPropertyMetric(property);

        case "boolean":
        case "string":
          acc[property] = ApproximateDistinctCountAggregatableProperty(
            property,
          );
          break;

        default:
          const _: never = definition.type;
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
  ) as MultipleAggregateSelection<OsdkLegacyObjectFrom<O, K>>;
}
