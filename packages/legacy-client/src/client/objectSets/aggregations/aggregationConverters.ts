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
  AggregateObjectSetResponseV2,
  AggregateObjectsResponseItemV2,
  AggregationMetricResultV2,
} from "@osdk/gateway/types";
import { LocalDate, Timestamp } from "../../baseTypes";
import type {
  AggregationGroup,
  AggregationResult,
  BucketGroup,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
} from "./Aggregations";
import { visitInternalBucketing } from "./Aggregations";
import { buildBucketObject } from "./AggregationUtils";
import { GroupKeyType } from "./groupBy/GroupKeyType";
import type { InternalAggregationRequest } from "./internalAggregationRequest";
import { MetricValueType } from "./metrics/metrics";

export type BaseGroupValue = number | string | boolean;
export type Bucketing<T> = { startValue?: T; endValue: T } | {
  startValue: T;
  endValue?: T;
};
export type GroupValue = BaseGroupValue | Bucketing<BaseGroupValue>;

export function convertToAggregationResult<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
>(
  aggregationResponse: AggregateObjectSetResponseV2,
  aggregationRequest: InternalAggregationRequest,
): AggregationResult<TBucketGroup, TMetrics> {
  if (
    aggregationRequest.groupBy
    && aggregationRequest.groupBy.length === 0
    && aggregationRequest.aggregation.length === 1
  ) {
    const metricValueType = aggregationRequest.aggregation[0]!.metricValueType!;
    const metricValue = aggregationResponse.data[0]?.metrics[0]?.value;
    return convertMetricValue(metricValue, metricValueType);
  }

  const mappedAggregationTypes = aggregationRequest.aggregation.reduce(
    (acc, aggregation) => {
      acc[aggregation.name] = aggregation.metricValueType;
      return acc;
    },
    {} as { [metricName: string]: MetricValueType },
  );

  const mappedGroupTypes =
    aggregationRequest.groupBy?.reduce((acc, groupBy) => {
      acc[groupBy.propertyApiName] = groupBy.keyDataType;
      return acc;
    }, {} as { [groupName: string]: GroupKeyType }) ?? {};

  const groups = aggregationResponse.data.map(item => {
    const metricGroup: { [key in keyof TMetrics]: TMetrics[key] } =
      getMetricObject(
        item.metrics,
        mappedAggregationTypes,
      );
    const remappedGroupResponse: BucketGroup = getRemappedGroupObject(
      aggregationRequest.groupBy!,
      item.group,
      mappedGroupTypes,
    );
    return {
      group: remappedGroupResponse,
      ...metricGroup,
    } as AggregationGroup<TMetrics, TBucketGroup>;
  });

  return {
    excludedItems: aggregationResponse.excludedItems || 0,
    groups,
  } as AggregationResult<TBucketGroup, TMetrics>;
}

function getMetricObject<TMetrics extends Metrics | MetricValue>(
  metrics: AggregationMetricResultV2[],
  mappedAggregationTypes: { [metricName: string]: MetricValueType },
) {
  const metricGroup: { [key in keyof TMetrics]: TMetrics[key] } = {} as any;
  metrics.forEach(metric => {
    const metricValueType = mappedAggregationTypes[metric.name];
    metricGroup[metric.name as keyof TMetrics] = convertMetricValue(
      metric.value,
      metricValueType!,
    );
  });
  return metricGroup;
}

function getRemappedGroupObject<
  TBucketGroup extends BucketGroup,
  TBucketValue extends BucketValue,
>(
  requestGroups: Array<InternalBucketing<string, TBucketValue>>,
  groups: AggregateObjectsResponseItemV2["group"],
  mappedGroupTypes: { [groupName: string]: GroupKeyType },
) {
  return Object.entries(groups).reduce(
    (acc, [key, value]) => {
      const groupFromRequest = requestGroups.find(a =>
        a.propertyApiName === key
      )!;
      visitInternalBucketing(groupFromRequest, {
        onExactValue(_bucketing): void {
          acc[key as keyof TBucketGroup] = convertGroupValue(
            key,
            value,
            mappedGroupTypes,
          );
        },
        onRange(_bucketing): void {
          const groupType = mappedGroupTypes[key]!;
          const bucketResponse = value as Bucketing<BaseGroupValue>;
          if (groupType === GroupKeyType.DATE) {
            const parsedStartValue = maybeConvertLocalDate(
              bucketResponse.startValue,
            );
            const parsedEndValue = maybeConvertLocalDate(
              bucketResponse.endValue,
            );

            acc[key as keyof TBucketGroup] = buildBucketObject(
              parsedStartValue,
              parsedEndValue,
            ) as TBucketGroup[keyof TBucketGroup];
          } else if (groupType === GroupKeyType.TIMESTAMP) {
            const parsedStartValue = maybeConvertTimestamp(
              bucketResponse.startValue,
            );
            const parsedEndValue = maybeConvertTimestamp(
              bucketResponse.endValue,
            );

            acc[key as keyof TBucketGroup] = buildBucketObject(
              parsedStartValue,
              parsedEndValue,
            ) as TBucketGroup[keyof TBucketGroup];
          } else {
            const parsedStartValue = bucketResponse.startValue
              ? Number(bucketResponse.startValue as string)
              : undefined;
            const parsedEndValue = bucketResponse.endValue
              ? Number(bucketResponse.endValue as string)
              : undefined;

            acc[key as keyof TBucketGroup] = buildBucketObject(
              parsedStartValue,
              parsedEndValue,
            ) as TBucketGroup[keyof TBucketGroup];
          }
        },
        onFixedWidth(_bucketing): void {
          acc[key as keyof TBucketGroup] = convertGroupValue(
            key,
            value,
            mappedGroupTypes,
          );
        },
        onDuration(_bucketing): void {
          acc[key as keyof TBucketGroup] = convertGroupValue(
            key,
            value,
            mappedGroupTypes,
          );
        },
      });

      return acc;
    },
    {} as {
      [key in keyof TBucketGroup]: TBucketGroup[key];
    },
  );
}

function convertMetricValue(value: any, metricValueType: MetricValueType) {
  switch (metricValueType) {
    case MetricValueType.NUMERIC:
      return value;
    case MetricValueType.TIMESTAMP:
      return convertTimestamp(value);
    case MetricValueType.LOCALDATE:
      return convertLocalDate(value);
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = metricValueType;
      throw new Error(
        `Unknown metric value type encountered: ${metricValueType as string}`,
      );
  }
}

function convertGroupValue<TBucketGroup extends BucketGroup>(
  key: string,
  value: GroupValue,
  groupNameTypeMap: { [key: string]: GroupKeyType },
): TBucketGroup[keyof TBucketGroup] {
  const groupType = groupNameTypeMap[key]!;

  switch (groupType) {
    case GroupKeyType.NUMERIC:
      return value as TBucketGroup[keyof TBucketGroup];
    case GroupKeyType.STRING:
      return value as TBucketGroup[keyof TBucketGroup];
    case GroupKeyType.BOOLEAN:
      return value as TBucketGroup[keyof TBucketGroup];
    case GroupKeyType.DATE:
      return convertLocalDate(value) as TBucketGroup[keyof TBucketGroup];
    case GroupKeyType.TIMESTAMP:
      return convertTimestamp(value) as TBucketGroup[keyof TBucketGroup];
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = groupType;
      throw new Error(
        `Unknown group value type encountered: ${groupType as string}`,
      );
  }
}

function convertTimestamp(value: any) {
  if (typeof value === "number") {
    return Timestamp.fromEpochMilli(value);
  }
  return Timestamp.fromISOString(value);
}

function maybeConvertTimestamp(value: any) {
  if (!value) {
    return undefined;
  }
  return convertTimestamp(value);
}

function convertLocalDate(value: any) {
  if (typeof value === "number") {
    return Timestamp.fromEpochMilli(value).toLocalDate();
  }
  return LocalDate.fromISOString(value);
}

function maybeConvertLocalDate(value: any) {
  if (!value) {
    return undefined;
  }
  return convertLocalDate(value);
}
