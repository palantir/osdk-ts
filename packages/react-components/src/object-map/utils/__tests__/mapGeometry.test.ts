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

import type { MapFeature } from "../../BaseObjectMapApi.js";
import {
  getMapBounds,
  toMapFeatureCollection,
  toggleMapSelection,
} from "../mapGeometry.js";

const POINT: MapFeature = {
  id: "a",
  label: "A",
  geometry: { type: "Point", coordinates: [1, 2] },
};

describe("map geometry", () => {
  it("preserves object identity across nested geometry collections", () => {
    const compound: MapFeature = {
      id: "compound",
      label: "Compound geometry",
      geometry: {
        type: "GeometryCollection",
        geometries: [
          POINT.geometry,
          {
            type: "GeometryCollection",
            geometries: [
              {
                type: "LineString",
                coordinates: [
                  [3, 4],
                  [5, 6],
                ],
              },
            ],
          },
        ],
      },
    };
    const data = toMapFeatureCollection([POINT, compound], ["compound"]);
    expect(data.features.map((feature) => feature.geometry.type)).toEqual([
      "Point",
      "Point",
      "LineString",
    ]);
    expect(new Set(data.features.map((feature) => feature.id)).size).toBe(3);
    expect(data.features.map((feature) => feature.properties)).toEqual([
      { objectId: "a", label: "A", selected: false },
      { objectId: "compound", label: "Compound geometry", selected: true },
      { objectId: "compound", label: "Compound geometry", selected: true },
    ]);
    expect(compound.geometry.type).toBe("GeometryCollection");
  });

  it("fits dateline-adjacent points across the short longitude interval", () => {
    const features: MapFeature[] = [
      { ...POINT, geometry: { type: "Point", coordinates: [179, -20] } },
      {
        ...POINT,
        id: "b",
        geometry: { type: "Point", coordinates: [-179, 15] },
      },
    ];
    expect(getMapBounds(features)).toEqual([
      [179, -20],
      [181, 15],
    ]);
  });

  it("finds the extent of polygons and nested collection geometries", () => {
    const polygon: MapFeature = {
      ...POINT,
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [1, 2],
              [4, 2],
              [4, 6],
              [1, 2],
            ],
          ],
        ],
      },
    };
    expect(getMapBounds([polygon])).toEqual([
      [1, 2],
      [4, 6],
    ]);
    expect(getMapBounds([POINT])).toEqual([
      [1, 2],
      [1, 2],
    ]);
    expect(getMapBounds([])).toBeUndefined();
    expect(
      getMapBounds([
        { ...POINT, geometry: { type: "GeometryCollection", geometries: [] } },
      ]),
    ).toBeUndefined();
  });

  it("ignores non-finite positions when calculating camera bounds", () => {
    expect(
      getMapBounds([
        {
          ...POINT,
          geometry: {
            type: "MultiPoint",
            coordinates: [
              [NaN, 2],
              [0, Infinity],
              [3, 4],
            ],
          },
        },
      ]),
    ).toEqual([
      [3, 4],
      [3, 4],
    ]);
  });

  it("fits valid polar coordinates within the finite Mercator camera extent", () => {
    const geometry = {
      type: "MultiPoint" as const,
      coordinates: [
        [0, -90],
        [1, 90],
      ],
    };
    const bounds = getMapBounds([{ ...POINT, geometry }]);
    expect(bounds?.[0][1]).toBeCloseTo(-85.0511287798066);
    expect(bounds?.[1][1]).toBeCloseTo(85.0511287798066);
    expect(geometry.coordinates).toEqual([
      [0, -90],
      [1, 90],
    ]);
  });

  it("does not crop a polygon spanning more than half of the world", () => {
    const polygon: MapFeature = {
      ...POINT,
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-170, -10],
            [170, -10],
            [170, 10],
            [-170, 10],
            [-170, -10],
          ],
        ],
      },
    };
    expect(getMapBounds([polygon])).toEqual([
      [-170, -10],
      [170, 10],
    ]);
    expect(
      getMapBounds([
        {
          ...POINT,
          geometry: {
            type: "LineString",
            coordinates: [
              [-180, 0],
              [180, 1],
            ],
          },
        },
      ]),
    ).toEqual([
      [-180, 0],
      [180, 1],
    ]);
  });

  it("supports replacement, toggle, and additive selection without mutating inputs", () => {
    const selected = ["a"];
    expect(toggleMapSelection(selected, "b", false)).toEqual(["b"]);
    expect(toggleMapSelection(selected, "a", false)).toEqual([]);
    expect(toggleMapSelection(selected, "b", true)).toEqual(["a", "b"]);
    expect(toggleMapSelection(["a", "b"], "a", true)).toEqual(["b"]);
    expect(selected).toEqual(["a"]);
  });
});
