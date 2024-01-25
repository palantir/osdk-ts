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

import type { ClientContext } from "@osdk/shared.net";
import type { ObjectSetDefinition } from "../baseTypes/index.js";
import type {
  ObjectSetAggregateArg,
  ObjectSetGroupByArg,
  ObjectSetMultipleAggregateArg,
} from "../interfaces/aggregations.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import type {
  AggregatableObjectSetStep,
  BucketValue,
  InternalBucketing,
} from "./aggregations/index.js";
import {
  assertBucketingInternal,
  ComputeStep,
  isCountOperation,
} from "./aggregations/index.js";
import { MetricValueType } from "./aggregations/metrics/metrics.js";
import { isMultipleAggregationOperation } from "./aggregations/metrics/MultipleAggregatableProperty.js";
import { createCachedOntologyTransform } from "./createCachedOntologyTransform.js";
import { mapPropertiesToAggregatableProperties } from "./mapPropertiesToAggregatableProperties.js";
import { mapPropertiesToGroupByProperties } from "./mapPropertiesToGroupByProperties.js";
import { mapPropertiesToMultipleAggregationProperties } from "./mapPropertiesToMultipleAggregationProperties.js";

const getAggregatableProperties = createCachedOntologyTransform(
  mapPropertiesToAggregatableProperties,
);
const getGroupableProperties = createCachedOntologyTransform(
  mapPropertiesToGroupByProperties,
);
const getMultipleAggregationProperties = createCachedOntologyTransform(
  mapPropertiesToMultipleAggregationProperties,
);

export function createObjectSetAggregationStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  type: K,
  definition: ObjectSetDefinition,
  groupByClauses: Array<InternalBucketing<string, BucketValue>>,
): AggregatableObjectSetStep<
  ObjectSetAggregateArg<OsdkLegacyObjectFrom<O, K>>,
  ObjectSetMultipleAggregateArg<OsdkLegacyObjectFrom<O, K>>,
  ObjectSetGroupByArg<OsdkLegacyObjectFrom<O, K>>
> {
  const aggregatableProperties = getAggregatableProperties(
    client.ontology,
    type,
  );
  const groupableProperties = getGroupableProperties(
    client.ontology,
    type,
  );
  const multipleAggregationProperties = getMultipleAggregationProperties(
    client.ontology,
    type,
  );

  return {
    aggregate(aggregateBuilder) {
      const aggregate = aggregateBuilder(multipleAggregationProperties);
      return new ComputeStep(
        client,
        definition,
        groupByClauses,
        Object.keys(aggregate).map(key => {
          const aggregation = aggregate[key];
          if (isCountOperation(aggregation)) {
            return {
              type: aggregation.operation,
              name: key,
              metricValueType: MetricValueType.NUMERIC,
              namedAggregation: false,
            };
          }
          if (isMultipleAggregationOperation(aggregation)) {
            return {
              type: aggregation.operation,
              name: key,
              field: aggregation.propertyApiName,
              metricValueType: aggregation.metricValueType,
              namedAggregation: false,
            };
          }
          const _: never = aggregation;
          throw new Error(
            `Unknown aggregation type: ${(aggregation as any).type}`,
          );
        }),
      );
    },

    approximateDistinct(propertySelector) {
      const selectedProperty = propertySelector(aggregatableProperties);
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "approximateDistinct",
        name: "distinctCount",
        field: selectedProperty.propertyApiName,
        metricValueType: selectedProperty.metricValueType,
        namedAggregation: true,
      }]);
    },

    groupBy(propertySelector) {
      const groupByClause = propertySelector(groupableProperties);
      assertBucketingInternal(groupByClause);
      return createObjectSetAggregationStep<O, K>(
        client,
        type,
        definition,
        [
          ...groupByClauses,
          groupByClause,
        ],
      ) as AggregatableObjectSetStep<
        ObjectSetAggregateArg<OsdkLegacyObjectFrom<O, K>>,
        ObjectSetMultipleAggregateArg<OsdkLegacyObjectFrom<O, K>>,
        ObjectSetGroupByArg<OsdkLegacyObjectFrom<O, K>>,
        any // TODO infer the TBucketGroup shape from groupByClause to be more strict here
      >;
    },

    count() {
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "count",
        name: "count",
        metricValueType: MetricValueType.NUMERIC,
        namedAggregation: true,
      }]);
    },

    min(propertySelector) {
      const selectedProperty = propertySelector(aggregatableProperties);
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "min",
        name: "min",
        field: selectedProperty.propertyApiName,
        metricValueType: selectedProperty.metricValueType,
        namedAggregation: true,
      }]);
    },

    max(propertySelector) {
      const selectedProperty = propertySelector(aggregatableProperties);
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "max",
        name: "max",
        field: selectedProperty.propertyApiName,
        metricValueType: selectedProperty.metricValueType,
        namedAggregation: true,
      }]);
    },

    avg(propertySelector) {
      const selectedProperty = propertySelector(aggregatableProperties);
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "avg",
        name: "avg",
        field: selectedProperty.propertyApiName,
        metricValueType: selectedProperty.metricValueType,
        namedAggregation: true,
      }]);
    },

    sum(propertySelector) {
      const selectedProperty = propertySelector(aggregatableProperties);
      return new ComputeStep(client, definition, groupByClauses, [{
        type: "sum",
        name: "sum",
        field: selectedProperty.propertyApiName,
        metricValueType: selectedProperty.metricValueType,
        namedAggregation: true,
      }]);
    },
  };
}
