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

import type { GeoJsonPoint } from "./GeoJson";
import type { Geometry } from "./Geometry";
export type GeoHash = string;
export interface Coordinates {
  latitude: number;
  longitude: number;
}
export interface GeoPoint extends Geometry {
  toCoordinates(): Coordinates;
  toGeoHash(): GeoHash;
  toGeoJson(): GeoJsonPoint;
}

export function isGeoPoint(obj: any): obj is GeoPoint {
  throw new Error("not implemented");
}

export class GeoPoint implements GeoPoint {
  private coordinates;
  private precision?;
  type: "GeoPoint";

  private constructor() {
    throw new Error("not implemented");
  }
  static fromGeoHash(geoHash: GeoHash): GeoPoint {
    throw new Error("not implemented");
  }
  static fromCoordinates(coordinates: Coordinates): GeoPoint {
    throw new Error("not implemented");
  }
  static fromGeoJson(geoJsonPoint: GeoJsonPoint): GeoPoint {
    throw new Error("not implemented");
  }
}

export function mapCoordinatesToGeoPoint(
  coordinate: number[],
): GeoPoint {
  throw new Error("not implemented");
}
