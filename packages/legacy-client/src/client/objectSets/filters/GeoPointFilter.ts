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

import {
  Distance,
  type GeoPoint,
  type Polygon,
} from "../../baseTypes/index.js";
import type { WhereClause } from "./Filters.js";

export type BoundingBox = {
  topLeft: GeoPoint;
  bottomRight: GeoPoint;
};

export interface GeoPointFilter {
  /** The provided property is within the specified bounding box. */
  withinBoundingBox: (boundingBox: BoundingBox) => WhereClause;
  /** The provided property is within the specified number of millimeters of the given GeoPoint */
  withinMillimetersOf: (point: GeoPoint, millimeters: number) => WhereClause;
  /** The provided property is within the specified number of centimeters of the given GeoPoint */
  withinCentimetersOf: (point: GeoPoint, centimeters: number) => WhereClause;
  /** The provided property is within the specified number of meters of the given GeoPoint */
  withinMetersOf: (point: GeoPoint, meters: number) => WhereClause;
  /** The provided property is within the specified number of kilometers of the given GeoPoint */
  withinKilometersOf: (point: GeoPoint, kilometers: number) => WhereClause;
  /** The provided property is within the specified number of inches of the given GeoPoint */
  withinInchesOf: (point: GeoPoint, inches: number) => WhereClause;
  /** The provided property is within the specified number of feet of the given GeoPoint */
  withinFeetOf: (point: GeoPoint, feet: number) => WhereClause;
  /** The provided property is within the specified number of yards of the given GeoPoint */
  withinYardsOf: (point: GeoPoint, yards: number) => WhereClause;
  /** The provided property is within the specified number of miles of the given GeoPoint */
  withinMilesOf: (point: GeoPoint, miles: number) => WhereClause;
  /** The provided property is within the specified number of nautical miles of the given GeoPoint */
  withinNauticalMilesOf: (
    point: GeoPoint,
    nauticalMiles: number,
  ) => WhereClause;
  /** The provided property is within the specified Polygon */
  withinPolygon: (polygon: Polygon) => WhereClause;
}

export const GeoPointFilter = (property: string): GeoPointFilter => {
  return {
    withinBoundingBox(boundingBox: BoundingBox): WhereClause {
      return {
        type: "withinBoundingBox",
        field: property,
        value: {
          topLeft: boundingBox.topLeft.toGeoJson(),
          bottomRight: boundingBox.bottomRight.toGeoJson(),
        },
      };
    },

    withinMillimetersOf(point, millimeters): WhereClause {
      return getWithinDistanceOf(
        property,
        point,
        Distance.ofMillimeters(millimeters),
      );
    },

    withinCentimetersOf(point, centimeters): WhereClause {
      return getWithinDistanceOf(
        property,
        point,
        Distance.ofCentimeters(centimeters),
      );
    },

    withinMetersOf(point, meters): WhereClause {
      return getWithinDistanceOf(property, point, Distance.ofMeters(meters));
    },

    withinKilometersOf(point, kilometers): WhereClause {
      return getWithinDistanceOf(
        property,
        point,
        Distance.ofKilometers(kilometers),
      );
    },

    withinInchesOf(point, inches): WhereClause {
      return getWithinDistanceOf(property, point, Distance.ofInches(inches));
    },

    withinFeetOf(point, feet): WhereClause {
      return getWithinDistanceOf(property, point, Distance.ofFeet(feet));
    },

    withinYardsOf(point, yards): WhereClause {
      return getWithinDistanceOf(property, point, Distance.ofYards(yards));
    },

    withinMilesOf(point, miles): WhereClause {
      return getWithinDistanceOf(property, point, Distance.ofMiles(miles));
    },

    withinNauticalMilesOf(point, nauticalMiles): WhereClause {
      return getWithinDistanceOf(
        property,
        point,
        Distance.ofNauticalMiles(nauticalMiles),
      );
    },

    withinPolygon(polygon) {
      return {
        type: "withinPolygon",
        field: property,
        value: polygon.toGeoJson(),
      };
    },
  };
};

function getWithinDistanceOf(
  propertyApiName: string,
  point: GeoPoint,
  distance: Distance,
): WhereClause {
  return {
    type: "withinDistanceOf",
    field: propertyApiName,
    value: {
      center: point.toGeoJson(),
      distance: {
        value: distance.value,
        unit: distance.unit,
      },
    },
  };
}
