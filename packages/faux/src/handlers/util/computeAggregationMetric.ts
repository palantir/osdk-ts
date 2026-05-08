/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { AggregationV2 } from "@osdk/foundry.ontologies";

export interface AggregationInput {
  readonly [key: string]: unknown;
}

export interface AggregationMetric {
  name: string;
  value: unknown;
}

/**
 * Compute a single aggregation metric over a collection of objects.
 *
 * Supports the request types emitted by the OSDK client: count, sum, avg,
 * min, max, approximateDistinct, exactDistinct.
 *
 * The response's `name` is echoed from the request so the OSDK can split it
 * back into `${property}.${metric}` when assembling the typed result.
 *
 * Numeric reductions (sum/avg/min/max) skip null/undefined values and
 * throw when a non-null value is present that cannot be coerced to a number,
 * naming the offending field — that surfaces fixture mistakes instead of
 * silently producing NaN.
 */
export function computeAggregationMetric(
  agg: AggregationV2,
  objects: ReadonlyArray<AggregationInput>,
): AggregationMetric {
  switch (agg.type) {
    case "count": {
      return { name: agg.name ?? "count", value: objects.length };
    }
    case "sum": {
      const { name, numbers } = collectNumeric(agg, objects);
      return { name, value: numbers.reduce((s, v) => s + v, 0) };
    }
    case "avg": {
      const { name, numbers } = collectNumeric(agg, objects);
      const avg = numbers.length === 0
        ? 0
        : numbers.reduce((s, v) => s + v, 0) / numbers.length;
      return { name, value: avg };
    }
    case "min": {
      const { name, numbers } = collectNumeric(agg, objects);
      return {
        name,
        value: numbers.length === 0 ? undefined : Math.min(...numbers),
      };
    }
    case "max": {
      const { name, numbers } = collectNumeric(agg, objects);
      return {
        name,
        value: numbers.length === 0 ? undefined : Math.max(...numbers),
      };
    }
    case "approximateDistinct":
    case "exactDistinct": {
      const { name, values } = collectFieldValues(agg, objects);
      return { name, value: new Set(values).size };
    }
    case "approximatePercentile": {
      throw new Error(
        "FauxFoundry aggregate: approximatePercentile is not implemented",
      );
    }
    default: {
      const exhaustive: never = agg;
      throw new Error(
        `FauxFoundry aggregate: unsupported aggregation type ${
          (exhaustive as { type: string }).type
        }`,
      );
    }
  }
}

function collectFieldValues(
  agg: Exclude<AggregationV2, { type: "count" | "approximatePercentile" }>,
  objects: ReadonlyArray<AggregationInput>,
): { name: string; values: unknown[] } {
  const field = resolveField(agg);
  return {
    name: agg.name ?? `${field}.${agg.type}`,
    values: objects.map(o => o[field]).filter(v => v != null),
  };
}

function collectNumeric(
  agg: Extract<AggregationV2, { type: "sum" | "avg" | "min" | "max" }>,
  objects: ReadonlyArray<AggregationInput>,
): { name: string; numbers: number[] } {
  const { name, values } = collectFieldValues(agg, objects);
  const field = resolveField(agg);
  const numbers: number[] = [];
  for (const value of values) {
    if (typeof value !== "number") {
      throw new Error(
        `FauxFoundry aggregate: ${agg.type} on field "${field}" requires `
          + `numeric values; got ${typeof value} (${JSON.stringify(value)})`,
      );
    }
    numbers.push(value);
  }
  return { name, numbers };
}

function resolveField(
  agg: Exclude<AggregationV2, { type: "count" | "approximatePercentile" }>,
): string {
  const fromField = agg.field;
  const fromIdentifier = agg.propertyIdentifier?.type === "property"
    ? agg.propertyIdentifier.apiName
    : undefined;
  const field = fromField ?? fromIdentifier;
  if (field == null) {
    throw new Error(
      `FauxFoundry aggregate: ${agg.type} requires a field`,
    );
  }
  return field;
}
