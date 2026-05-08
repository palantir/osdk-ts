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

import { describe, expect, it } from "vitest";
import { computeAggregationMetric } from "./computeAggregationMetric.js";

const planes = [
  { tailNumber: "N1", capacity: 100, manufacturer: "Boeing" },
  { tailNumber: "N2", capacity: 200, manufacturer: "Airbus" },
  { tailNumber: "N3", capacity: 150, manufacturer: "Boeing" },
  { tailNumber: "N4", capacity: null, manufacturer: "Bombardier" },
  { tailNumber: "N5", manufacturer: "Boeing" }, // capacity undefined
] as const;

describe("computeAggregationMetric", () => {
  it("count returns the object count and ignores fields", () => {
    expect(
      computeAggregationMetric({ type: "count", name: "count" }, planes),
    ).toEqual({ name: "count", value: 5 });
  });

  it("count defaults the metric name to 'count' when omitted", () => {
    expect(
      computeAggregationMetric({ type: "count" }, planes),
    ).toEqual({ name: "count", value: 5 });
  });

  it("sum reduces over a numeric field, skipping nulls and undefined", () => {
    expect(
      computeAggregationMetric(
        { type: "sum", field: "capacity", name: "capacity.sum" },
        planes,
      ),
    ).toEqual({ name: "capacity.sum", value: 100 + 200 + 150 });
  });

  it("avg divides by non-null count, not the total object count", () => {
    expect(
      computeAggregationMetric(
        { type: "avg", field: "capacity", name: "capacity.avg" },
        planes,
      ),
    ).toEqual({ name: "capacity.avg", value: (100 + 200 + 150) / 3 });
  });

  it("avg returns 0 when all values are null", () => {
    expect(
      computeAggregationMetric(
        { type: "avg", field: "capacity", name: "capacity.avg" },
        [{ capacity: null }],
      ),
    ).toEqual({ name: "capacity.avg", value: 0 });
  });

  it("min/max reduce over numeric fields", () => {
    expect(
      computeAggregationMetric(
        { type: "min", field: "capacity", name: "capacity.min" },
        planes,
      ),
    ).toEqual({ name: "capacity.min", value: 100 });

    expect(
      computeAggregationMetric(
        { type: "max", field: "capacity", name: "capacity.max" },
        planes,
      ),
    ).toEqual({ name: "capacity.max", value: 200 });
  });

  it("min/max return undefined when no non-null values exist", () => {
    expect(
      computeAggregationMetric(
        { type: "min", field: "capacity", name: "capacity.min" },
        [{ capacity: null }, { capacity: undefined }],
      ),
    ).toEqual({ name: "capacity.min", value: undefined });
  });

  it("approximateDistinct counts unique non-null values", () => {
    expect(
      computeAggregationMetric(
        {
          type: "approximateDistinct",
          field: "manufacturer",
          name: "manufacturer.approximateDistinct",
        },
        planes,
      ),
    ).toEqual({
      name: "manufacturer.approximateDistinct",
      value: 3,
    });
  });

  it("exactDistinct counts unique non-null values", () => {
    expect(
      computeAggregationMetric(
        {
          type: "exactDistinct",
          field: "manufacturer",
          name: "manufacturer.exactDistinct",
        },
        planes,
      ),
    ).toEqual({
      name: "manufacturer.exactDistinct",
      value: 3,
    });
  });

  it("sum/avg/min/max throw with a clear message on non-numeric values", () => {
    expect(() =>
      computeAggregationMetric(
        { type: "sum", field: "manufacturer", name: "manufacturer.sum" },
        planes,
      )
    ).toThrowError(/sum on field "manufacturer" requires numeric values/);
  });

  it("throws when sum/avg/min/max omit field and propertyIdentifier", () => {
    expect(() =>
      computeAggregationMetric(
        { type: "sum", name: "capacity.sum" },
        planes,
      )
    ).toThrowError(/sum requires a field/);
  });

  it("supports propertyIdentifier as the field source", () => {
    expect(
      computeAggregationMetric(
        {
          type: "sum",
          propertyIdentifier: { type: "property", apiName: "capacity" },
          name: "capacity.sum",
        },
        planes,
      ),
    ).toEqual({ name: "capacity.sum", value: 450 });
  });

  it("derives the metric name when omitted", () => {
    expect(
      computeAggregationMetric(
        { type: "sum", field: "capacity" },
        planes,
      ),
    ).toEqual({ name: "capacity.sum", value: 450 });
  });
});
