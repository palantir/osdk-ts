/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  AggregateObjectsResponseV2,
  AggregationGroupByV2,
  AggregationGroupValueV2,
  AggregationMetricResultV2,
  AggregationV2,
  PropertyApiName,
  PropertyIdentifier,
} from "@osdk/foundry.ontologies";
import {
  startOfDay,
  startOfHour,
  startOfMinute,
  startOfMonth,
  startOfQuarter,
  startOfSecond,
  startOfWeek,
  startOfYear,
} from "date-fns";

import type { BaseServerObject } from "./BaseServerObject.js";

interface GroupBucket {
  groupValue: AggregationGroupValueV2;
  objects: BaseServerObject[];
}

const DURATION_START_FNS: Record<string, (date: Date) => Date> = {
  SECONDS: startOfSecond,
  MINUTES: startOfMinute,
  HOURS: startOfHour,
  DAYS: startOfDay,
  WEEKS: startOfWeek,
  MONTHS: startOfMonth,
  QUARTERS: startOfQuarter,
  YEARS: startOfYear,
};

/**
 * Computes aggregations over a set of objects with optional grouping.
 */
export function aggregateObjects(
  objects: BaseServerObject[],
  aggregations: AggregationV2[],
  groupBys: AggregationGroupByV2[]
): AggregateObjectsResponseV2 {
  if (groupBys.length === 0) {
    return {
      accuracy: "ACCURATE",
      data: [
        {
          group: {},
          metrics: aggregations.map((agg) => computeSingleMetric(objects, agg)),
        },
      ],
    };
  }

  const groupedBuckets = groupObjects(objects, groupBys);

  const data = Array.from(groupedBuckets.values()).map((bucket) => ({
    group: bucket.groupValue,
    metrics: aggregations.map((agg) =>
      computeSingleMetric(bucket.objects, agg)
    ),
  }));

  let maxGroupCount;
  for (const groupBy of groupBys) {
    if (groupBy.type === "exact" && groupBy.maxGroupCount != null) {
      maxGroupCount =
        maxGroupCount != null
          ? Math.min(maxGroupCount, groupBy.maxGroupCount)
          : groupBy.maxGroupCount;
    }
  }

  return {
    accuracy: "ACCURATE",
    data: maxGroupCount != null ? data.slice(0, maxGroupCount) : data,
  };
}

function groupObjects(
  objects: BaseServerObject[],
  groupBys: AggregationGroupByV2[]
): Map<string, GroupBucket> {
  const buckets = new Map<string, GroupBucket>();
  for (const obj of objects) {
    const result = computeGroupValue(obj, groupBys);
    if (result) {
      let bucket = buckets.get(result.key);
      if (bucket == null) {
        bucket = { groupValue: result.groupValue, objects: [] };
        buckets.set(result.key, bucket);
      }
      bucket.objects.push(obj);
    }
  }
  return buckets;
}

function computeGroupValue(
  obj: BaseServerObject,
  groupBys: AggregationGroupByV2[]
): { key: string; groupValue: AggregationGroupValueV2 } | undefined {
  const groupValue: AggregationGroupValueV2 = {};
  const keyParts: string[] = [];

  for (const groupBy of groupBys) {
    const result = computeSingleGroupValue(obj, groupBy);
    if (result == null) {
      return undefined;
    }
    Object.assign(groupValue, result.value);
    keyParts.push(result.keyPart);
  }

  return {
    key: keyParts.join("|"),
    groupValue,
  };
}

function computeSingleGroupValue(
  obj: BaseServerObject,
  groupBy: AggregationGroupByV2
): { keyPart: string; value: AggregationGroupValueV2 } | undefined {
  const field = getPropertyField(groupBy.field, groupBy.propertyIdentifier);
  const rawValue = obj[field];

  switch (groupBy.type) {
    case "exact": {
      if (rawValue == null) {
        if (groupBy.defaultValue != null) {
          return {
            keyPart: `${field}:${groupBy.defaultValue}`,
            value: { [field]: groupBy.defaultValue },
          };
        }
        if (groupBy.includeNullValues) {
          return {
            keyPart: `${field}:null`,
            value: { [field]: null },
          };
        }
        return undefined;
      }
      const stringValue = String(rawValue);
      return {
        keyPart: `${field}:${stringValue}`,
        value: { [field]: stringValue },
      };
    }

    case "fixedWidth": {
      if (rawValue == null) {
        return undefined;
      }
      const numValue = Number(rawValue);
      if (isNaN(numValue)) {
        return undefined;
      }
      const width = groupBy.fixedWidth;
      const bucketStart = Math.floor(numValue / width) * width;
      return {
        keyPart: `${field}:${bucketStart}`,
        value: { [field]: bucketStart },
      };
    }

    case "ranges": {
      if (rawValue == null) {
        return undefined;
      }
      for (const range of groupBy.ranges) {
        const { startValue, endValue } = range;
        const inRange =
          compareValue(rawValue, startValue) >= 0 &&
          compareValue(rawValue, endValue) < 0;
        if (inRange) {
          return {
            keyPart: `${field}:${startValue}-${endValue}`,
            value: {
              [field]: {
                startValue,
                endValue,
              },
            },
          };
        }
      }
      return undefined;
    }

    case "duration": {
      if (rawValue == null) {
        return undefined;
      }
      const date = new Date(rawValue);
      if (isNaN(date.getTime())) {
        return undefined;
      }
      const bucketStart = computeDurationBucketStart(date, groupBy.unit);
      return {
        keyPart: `${field}:${bucketStart}`,
        value: { [field]: bucketStart },
      };
    }

    default:
      groupBy satisfies never;
      throw new Error(
        `FauxFoundry: unsupported groupBy type: ${JSON.stringify(groupBy)}`
      );
  }
}

function compareValue(
  value: unknown,
  target: string | number | undefined
): number {
  if (target == null) {
    return 1;
  }
  if (typeof value === "number" || typeof target === "number") {
    const numValue = Number(value);
    const numTarget = Number(target);
    if (!isNaN(numValue) && !isNaN(numTarget)) {
      return numValue - numTarget;
    }
  }
  const strValue = String(value);
  const strTarget = String(target);
  return strValue.localeCompare(strTarget);
}

function computeDurationBucketStart(date: Date, unit: string): string {
  const fn = DURATION_START_FNS[unit];
  if (fn == null) {
    throw new Error(`FauxFoundry: unsupported duration unit: ${unit}`);
  }
  return fn(date).toISOString();
}

function numericAgg(
  objects: BaseServerObject[],
  field: string,
  name: string,
  compute: (values: number[]) => number | undefined
): AggregationMetricResultV2 {
  const values = getNumericValues(objects, field);
  const value = values.length === 0 ? undefined : compute(values);
  return { name, value };
}

function computeSingleMetric(
  objects: BaseServerObject[],
  aggregation: AggregationV2
): AggregationMetricResultV2 {
  switch (aggregation.type) {
    case "count":
      return { name: aggregation.name ?? "count", value: objects.length };
    case "min": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      return numericAgg(
        objects,
        field,
        aggregation.name ?? `${field}.min`,
        (vals) => Math.min(...vals)
      );
    }
    case "max": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      return numericAgg(
        objects,
        field,
        aggregation.name ?? `${field}.max`,
        (vals) => Math.max(...vals)
      );
    }
    case "sum": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      const name = aggregation.name ?? `${field}.sum`;
      const values = getNumericValues(objects, field);
      return { name, value: values.reduce((a, b) => a + b, 0) };
    }

    case "avg": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      return numericAgg(
        objects,
        field,
        aggregation.name ?? `${field}.avg`,
        (vals) => vals.reduce((a, b) => a + b, 0) / vals.length
      );
    }
    case "approximateDistinct":
    case "exactDistinct": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      const name = aggregation.name ?? `${field}.${aggregation.type}`;
      const uniqueValues = new Set(
        objects.map((obj) => obj[field]).filter((v) => v != null)
      );
      return { name, value: uniqueValues.size };
    }

    case "approximatePercentile": {
      const field = getPropertyField(
        aggregation.field,
        aggregation.propertyIdentifier
      );
      const name = aggregation.name ?? `${field}.approximatePercentile`;
      const values = getNumericValues(objects, field);
      if (values.length === 0) {
        return { name, value: undefined };
      }
      const sorted = values.sort((a, b) => a - b);
      const idx = Math.floor(sorted.length * aggregation.approximatePercentile);
      return { name, value: sorted[Math.min(idx, sorted.length - 1)] };
    }

    default:
      aggregation satisfies never;
      throw new Error(
        `FauxFoundry: unsupported aggregation type: ${JSON.stringify(
          aggregation
        )}`
      );
  }
}

function getNumericValues(
  objects: BaseServerObject[],
  field: string
): number[] {
  return objects
    .map((obj) => obj[field])
    .filter((v): v is number => typeof v === "number" && !isNaN(v));
}

function getPropertyField(
  field: PropertyApiName | undefined,
  propertyIdentifier: PropertyIdentifier | undefined
): string {
  if (field != null) {
    return field;
  }

  if (propertyIdentifier != null) {
    switch (propertyIdentifier.type) {
      case "property":
        return propertyIdentifier.apiName;
      case "propertyWithLoadLevel":
        throw new Error(
          "Property identifiers with load level are not supported"
        );
      case "structField":
        throw new Error("Struct field property identifiers are not supported");
    }
  }

  throw new Error(
    "Field or property identifier are both undefined, exactly one must be defined"
  );
}
