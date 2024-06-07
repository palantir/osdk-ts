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

import type { GeoJsonMultiPoint } from "./GeoJson.js";
import type { Geometry } from "./Geometry.js";
import { type GeoPoint, mapCoordinatesToGeoPoint } from "./GeoPoint.js";

export interface MultiGeoPoint extends Geometry {
  getGeoPoints(): GeoPoint[];
  toGeoJson(): GeoJsonMultiPoint;
}

export class MultiGeoPoint implements MultiGeoPoint {
  public type = "MultiGeoPoint" as const;

  private constructor(private geoPoints: GeoPoint[]) {}

  public getGeoPoints(): GeoPoint[] {
    return this.geoPoints;
  }

  public toGeoJson(): GeoJsonMultiPoint {
    return {
      type: "MultiPoint",
      coordinates: this.geoPoints.map(geoPoint => {
        return geoPoint.toGeoJson().coordinates;
      }),
    };
  }

  public static fromGeoPoints(geoPoints: GeoPoint[]) {
    return new MultiGeoPoint(geoPoints);
  }

  public static fromGeoJson(geoJson: GeoJsonMultiPoint): MultiGeoPoint {
    const multiPointGeoPoints: GeoPoint[] = geoJson.coordinates.map(
      mapCoordinatesToGeoPoint,
    );
    return MultiGeoPoint.fromGeoPoints(multiPointGeoPoints);
  }
}
