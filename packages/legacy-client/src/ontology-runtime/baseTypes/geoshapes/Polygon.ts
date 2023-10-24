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

import type { GeoJsonPolygon } from "./GeoJson";
import type { Geometry } from "./Geometry";
import type { GeoPoint } from "./GeoPoint";
export interface Polygon extends Geometry {
  getLinearRings(): LinearRing[];
  toGeoJson(): GeoJsonPolygon;
}
export type LinearRing = GeoPoint[];
export class Polygon implements Polygon {
  private linearRings;
  type: "Polygon";
  private constructor() {
    throw new Error("not implemented");
  }
  /**
   * Creates a Polygon from an array of 1 or more linear rings
   *
   * @param linearRings a list of one or more linear rings, where the first and last coordinate in the linear rings
   * represent the exact same point
   */
  static fromLinearRings(linearRings: LinearRing[]): Polygon {
    throw new Error("not implemented");
  }
  /**
   * Creates a Polygon from a GeoJson representation of a Polygon
   */
  static fromGeoJson(geoJson: GeoJsonPolygon): Polygon {
    throw new Error("not implemented");
  }
}
