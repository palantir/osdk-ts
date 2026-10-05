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

import type { DistanceUnit, GeoFilterOptions } from "@osdk/api";
import type { Point } from "geojson";
import { describe, expect, it } from "vitest";

import { makeGeoFilterWithin } from "./makeGeoFilterWithin.js";

describe("makeGeoFilterWithin", () => {
  const specUnits: DistanceUnit[] = [
    "MILLIMETERS",
    "CENTIMETERS",
    "METERS",
    "KILOMETERS",
    "INCHES",
    "FEET",
    "YARDS",
    "MILES",
    "NAUTICAL_MILES",
  ];

  for (const unit of specUnits) {
    it(`supports gateway spec distance unit: ${unit}`, () => {
      const result = makeGeoFilterWithin(
        {
          $distance: [100, unit],
          $of: [-74.006, 40.7128],
        },
        undefined,
        "location",
      );

      expect(result).toEqual({
        type: "withinDistanceOf",
        field: "location",
        value: {
          center: {
            type: "Point",
            coordinates: [-74.006, 40.7128],
          },
          distance: {
            value: 100,
            unit,
          },
        },
      });
    });
  }

  it("supports GeoJSON Point object for $of", () => {
    const geoPoint: Point = {
      type: "Point",
      coordinates: [-5, 5],
    };
    const result = makeGeoFilterWithin(
      {
        $distance: [5, "KILOMETERS"],
        $of: geoPoint,
      },
      undefined,
      "location",
    );

    expect(result).toEqual({
      type: "withinDistanceOf",
      field: "location",
      value: {
        center: {
          type: "Point",
          coordinates: [-5, 5],
        },
        distance: {
          value: 5,
          unit: "KILOMETERS",
        },
      },
    });
  });

  it("retains backwards compatibility for legacy lowercase / plural unit aliases", () => {
    const legacyMappings: Array<[string, DistanceUnit]> = [
      ["km", "KILOMETERS"],
      ["kilometer", "KILOMETERS"],
      ["kilometers", "KILOMETERS"],
      ["m", "METERS"],
      ["meter", "METERS"],
      ["meters", "METERS"],
      ["cm", "CENTIMETERS"],
      ["centimeter", "CENTIMETERS"],
      ["centimeters", "CENTIMETERS"],
      ["mm", "MILLIMETERS"],
      ["millimeter", "MILLIMETERS"],
      ["millimeters", "MILLIMETERS"],
      ["miles", "MILES"],
      ["mile", "MILES"],
      ["feet", "FEET"],
      ["foot", "FEET"],
      ["yards", "YARDS"],
      ["yard", "YARDS"],
      ["inches", "INCHES"],
      ["inch", "INCHES"],
      ["nautical_mile", "NAUTICAL_MILES"],
      ["nauticalMile", "NAUTICAL_MILES"],
      ["nautical miles", "NAUTICAL_MILES"],
    ];

    for (const [legacyUnit, expectedSpecUnit] of legacyMappings) {
      const result = makeGeoFilterWithin(
        {
          $distance: [42, legacyUnit as unknown as DistanceUnit],
          $of: [10, 20],
        },
        undefined,
        "geoField",
      );

      expect(result).toEqual({
        type: "withinDistanceOf",
        field: "geoField",
        value: {
          center: {
            type: "Point",
            coordinates: [10, 20],
          },
          distance: {
            value: 42,
            unit: expectedSpecUnit,
          },
        },
      });
    }
  });

  it("handles bbox within filter", () => {
    const result = makeGeoFilterWithin(
      [-10, -20, 10, 20],
      undefined,
      "geoField",
    );
    expect(result).toEqual({
      type: "withinBoundingBox",
      field: "geoField",
      value: {
        topLeft: { type: "Point", coordinates: [-10, 20] },
        bottomRight: { type: "Point", coordinates: [10, -20] },
      },
    });
  });

  it("handles polygon within filter", () => {
    const coordinates: GeoFilterOptions["$within"] = {
      $polygon: [
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 0],
        ],
      ],
    };
    const result = makeGeoFilterWithin(coordinates, undefined, "geoField");
    expect(result).toEqual({
      type: "withinPolygon",
      field: "geoField",
      value: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [0, 1],
            [1, 1],
            [0, 0],
          ],
        ],
      },
    });
  });
});
