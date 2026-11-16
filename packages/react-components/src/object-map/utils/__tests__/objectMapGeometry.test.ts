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

import { objectMapFeatureId, objectMapGeometry } from "../objectMapGeometry.js";

const POINT = { type: "Point", coordinates: [-73.9, 40.7] };
const RING = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 0],
];

describe("objectMapGeometry", () => {
  it("keeps longitude, latitude order and optional altitude", () => {
    const point = { type: "Point", coordinates: [-122.4, 37.8, 25] };
    expect(objectMapGeometry(point)).toEqual(point);
    expect(
      objectMapGeometry({ type: "Point", coordinates: [180, -90] }),
    ).toBeDefined();
  });

  it.each([
    undefined,
    null,
    "40.7,-73.9",
    { type: "Point", coordinates: [0] },
    { type: "Point", coordinates: [181, 20] },
    { type: "Point", coordinates: [20, -91] },
    { type: "Point", coordinates: [Number.NaN, 20] },
    { type: "Point", coordinates: [20, Number.POSITIVE_INFINITY] },
    { type: "Point", coordinates: [20, 30, Number.NaN] },
    { type: "Point", coordinates: ["20", 30] },
    { type: "LineString", coordinates: [[1, 1]] },
    {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ],
      ],
    },
    { type: "GeometryCollection", geometries: [] },
    { type: "Feature", geometry: null },
    { type: "FeatureCollection", features: [] },
  ])("rejects invalid or empty geometry %j", (value) => {
    expect(objectMapGeometry(value)).toBeUndefined();
  });

  it.each([
    POINT,
    {
      type: "MultiPoint",
      coordinates: [
        [0, 0],
        [1, 1],
      ],
    },
    {
      type: "LineString",
      coordinates: [
        [0, 0],
        [1, 1],
      ],
    },
    {
      type: "MultiLineString",
      coordinates: [
        [
          [0, 0],
          [1, 1],
        ],
      ],
    },
    { type: "Polygon", coordinates: [RING] },
    { type: "MultiPolygon", coordinates: [[RING]] },
    { type: "GeometryCollection", geometries: [POINT] },
  ])("accepts valid GeoJSON geometry %j", (geometry) => {
    expect(objectMapGeometry(geometry)).toEqual(geometry);
  });

  it("normalizes Feature and FeatureCollection geoshapes into one object geometry", () => {
    const feature = {
      type: "Feature",
      geometry: POINT,
      properties: { name: "Office" },
    };
    expect(objectMapGeometry(feature)).toEqual(POINT);
    expect(
      objectMapGeometry({ type: "FeatureCollection", features: [feature] }),
    ).toEqual({
      type: "GeometryCollection",
      geometries: [POINT],
    });
  });

  it("does not silently render a partially invalid collection", () => {
    expect(
      objectMapGeometry({
        type: "GeometryCollection",
        geometries: [POINT, null],
      }),
    ).toBeUndefined();
  });

  it("terminates on cyclic malformed geometry", () => {
    const collection: { type: "GeometryCollection"; geometries: unknown[] } = {
      type: "GeometryCollection",
      geometries: [],
    };
    collection.geometries.push(collection);
    expect(objectMapGeometry(collection)).toBeUndefined();
  });
});

describe("objectMapFeatureId", () => {
  it("keeps numeric and string primary keys distinct", () => {
    expect(objectMapFeatureId(1)).not.toBe(objectMapFeatureId("1"));
    expect(objectMapFeatureId("string:1")).not.toBe(objectMapFeatureId("1"));
    expect(objectMapFeatureId(0)).toBe(objectMapFeatureId(0));
  });
});
