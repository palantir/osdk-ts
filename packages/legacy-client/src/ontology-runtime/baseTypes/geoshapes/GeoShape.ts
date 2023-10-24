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

import type { GeoJson } from "./GeoJson";
import type { Geometry } from "./Geometry";
import type { GeometryCollection } from "./GeometryCollection";
import type { GeoPoint } from "./GeoPoint";
import type { LineString } from "./LineString";
import type { MultiGeoPoint } from "./MultiGeoPoint";
import type { MultiLineString } from "./MultiLineString";
import type { MultiPolygon } from "./MultiPolygon";
import type { Polygon } from "./Polygon";
export type GeoShape = Geometry | GeometryCollection;
export const GeoShape: {
  isGeoPoint(obj: any): obj is GeoPoint;
  isPolygon(obj: any): obj is Polygon;
  isLineString(obj: any): obj is LineString;
  isMultiGeoPoint(obj: any): obj is MultiGeoPoint;
  isMultiPolygon(obj: any): obj is MultiPolygon;
  isMultiLineString(obj: any): obj is MultiLineString;
  isGeometryCollection(obj: any): obj is GeometryCollection;
  isGeoShape(obj: any): obj is GeoShape;
  fromGeoJson(geoJson: GeoJson): GeoShape;
} = {
  isGeoPoint: function(obj: any): obj is GeoPoint {
    throw new Error("not implemented");
  },
  isPolygon: function(obj: any): obj is Polygon {
    throw new Error("not implemented");
  },
  isLineString: function(obj: any): obj is LineString {
    throw new Error("not implemented");
  },
  isMultiGeoPoint: function(obj: any): obj is MultiGeoPoint {
    throw new Error("not implemented");
  },
  isMultiPolygon: function(obj: any): obj is MultiPolygon {
    throw new Error("not implemented");
  },
  isMultiLineString: function(obj: any): obj is MultiLineString {
    throw new Error("not implemented");
  },
  isGeometryCollection: function(obj: any): obj is GeometryCollection {
    throw new Error("not implemented");
  },
  isGeoShape: function(obj: any): obj is GeoShape {
    throw new Error("not implemented");
  },
  fromGeoJson: function(geoJson: GeoJson): GeoShape {
    throw new Error("not implemented");
  },
};
