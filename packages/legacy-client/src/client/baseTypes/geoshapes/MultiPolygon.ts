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

import type { GeoJsonMultiPolygon } from "./GeoJson.js";
import type { Geometry } from "./Geometry.js";
import { mapCoordinatesToGeoPoint } from "./index.js";
import { Polygon } from "./Polygon.js";

export interface MultiPolygon extends Geometry {
  getPolygons(): Polygon[];
  toGeoJson(): GeoJsonMultiPolygon;
}

export class MultiPolygon implements MultiPolygon {
  public type = "MultiPolygon" as const;

  private constructor(private polygons: Polygon[]) {}

  public getPolygons(): Polygon[] {
    return this.polygons;
  }

  public toGeoJson(): GeoJsonMultiPolygon {
    return {
      type: "MultiPolygon",
      coordinates: this.polygons.map(geoPolygon => {
        return geoPolygon.toGeoJson().coordinates;
      }),
    };
  }

  public static fromPolygons(polygons: Polygon[]) {
    return new MultiPolygon(polygons);
  }

  public static fromGeoJson(geoJson: GeoJsonMultiPolygon): MultiPolygon {
    const polygons: Polygon[] = geoJson.coordinates.map(
      (coordinateList: number[][][]) => {
        return Polygon.fromLinearRings(
          coordinateList.map((ring: number[][]) => {
            return ring.map(mapCoordinatesToGeoPoint);
          }),
        );
      },
    );

    return MultiPolygon.fromPolygons(polygons);
  }
}
