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

import type { GeoJsonLineString } from "./GeoJson";
import type { Geometry } from "./Geometry";
import { type GeoPoint, mapCoordinatesToGeoPoint } from "./GeoPoint";

export interface LineString extends Geometry {
  getGeoPoints(): GeoPoint[];
  toGeoJson(): GeoJsonLineString;
}

export class LineString implements LineString {
  public type = "LineString" as const;

  private constructor(private geoPoints: GeoPoint[]) {}

  public getGeoPoints(): GeoPoint[] {
    return this.geoPoints;
  }

  public toGeoJson(): GeoJsonLineString {
    return {
      type: "LineString",
      coordinates: this.geoPoints.map((geoPoint: GeoPoint) => {
        return geoPoint.toGeoJson().coordinates;
      }),
    };
  }

  public static fromGeoPoints(geoPoints: GeoPoint[]): LineString {
    if (geoPoints.length < 2) {
      throw new Error(
        "LineString's must be represented by two or more GeoPoints",
      );
    }

    return new LineString(geoPoints);
  }

  public static fromGeoJson(geoJson: GeoJsonLineString): LineString {
    const lineStringGeoPoints: GeoPoint[] = geoJson.coordinates.map(
      mapCoordinatesToGeoPoint,
    );
    return LineString.fromGeoPoints(lineStringGeoPoints);
  }
}
