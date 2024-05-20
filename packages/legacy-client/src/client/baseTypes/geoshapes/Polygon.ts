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

import type { GeoJsonPolygon } from "./GeoJson.js";
import type { Geometry } from "./Geometry.js";
import { type GeoPoint, mapCoordinatesToGeoPoint } from "./GeoPoint.js";

export interface Polygon extends Geometry {
  getLinearRings(): LinearRing[];
  toGeoJson(): GeoJsonPolygon;
}

export type LinearRing = GeoPoint[];

export class Polygon implements Polygon {
  public type = "Polygon" as const;

  private constructor(private linearRings: LinearRing[]) {}

  public getLinearRings(): LinearRing[] {
    return this.linearRings;
  }

  public toGeoJson(): GeoJsonPolygon {
    return {
      type: "Polygon",
      coordinates: this.linearRings.map((ring: LinearRing) => {
        return ring.map((geoPoint: GeoPoint) => {
          return geoPoint.toGeoJson().coordinates;
        });
      }),
    };
  }

  /**
   * Creates a Polygon from an array of 1 or more linear rings
   *
   * @param linearRings a list of one or more linear rings, where the first and last coordinate in the linear rings
   * represent the exact same point
   */
  public static fromLinearRings(linearRings: LinearRing[]): Polygon {
    if (linearRings.length < 1) {
      throw new Error(
        "Polygons must be represented by at least one outer linear-ring",
      );
    }

    linearRings.forEach((ring: LinearRing) => {
      if (ring.length < 4) {
        throw new Error(
          `Polygons must be represented by at least four coordinates, received ${ring.length}`,
        );
      }

      if (
        ring[0]?.toCoordinates().latitude
          !== ring[ring.length - 1]?.toCoordinates().latitude
        || ring[0]?.toCoordinates().longitude
          !== ring[ring.length - 1]?.toCoordinates().longitude
      ) {
        throw new Error(
          `The first and last GeoPoint in the array must represent the same exact position,`
            + `received first: ${
              JSON.stringify(ring[0]?.toCoordinates())
            } last: ${
              JSON.stringify(
                ring[ring.length - 1]?.toCoordinates(),
              )
            }`,
        );
      }
    });

    return new Polygon(linearRings);
  }

  /**
   * Creates a Polygon from a GeoJson representation of a Polygon
   */
  public static fromGeoJson(geoJson: GeoJsonPolygon): Polygon {
    const polygonRings: GeoPoint[][] = geoJson.coordinates.map(
      (ring: number[][]) => {
        return ring.map(mapCoordinatesToGeoPoint);
      },
    );
    return Polygon.fromLinearRings(polygonRings);
  }
}
