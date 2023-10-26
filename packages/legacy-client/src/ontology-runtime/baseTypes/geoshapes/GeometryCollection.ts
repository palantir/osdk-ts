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

import type { GeoJsonGeometryCollection } from "./GeoJson";
import type { Geometry } from "./Geometry";
import { GeoShape } from "./GeoShape";

export class GeometryCollection {
  public type = "GeometryCollection" as const;

  private constructor(private geometries: Geometry[]) {}

  public toGeoJson(): GeoJsonGeometryCollection {
    return {
      type: "GeometryCollection",
      geometries: this.geometries.map((geometry: Geometry) => {
        return geometry.toGeoJson();
      }),
    };
  }

  public getGeometries(): Geometry[] {
    return this.geometries;
  }

  public static fromGeometries(geometries: Geometry[]) {
    return new GeometryCollection(geometries);
  }

  public static fromGeoJson(
    geoJson: GeoJsonGeometryCollection,
  ): GeometryCollection {
    const geoShapes: GeoShape[] = geoJson.geometries.map(GeoShape.fromGeoJson);
    geoShapes.forEach(geoShape => {
      if (GeoShape.isGeometryCollection(geoShape)) {
        throw new Error("Cannot have nested geometry collections.");
      }
    });

    return GeometryCollection.fromGeometries(
      geoJson.geometries.map(GeoShape.fromGeoJson) as Geometry[],
    );
  }
}
