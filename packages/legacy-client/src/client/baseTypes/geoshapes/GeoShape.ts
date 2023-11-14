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
import { GeometryCollection } from "./GeometryCollection";
import { GeoPoint } from "./GeoPoint";
import { LineString } from "./LineString";
import { MultiGeoPoint } from "./MultiGeoPoint";
import { MultiLineString } from "./MultiLineString";
import { MultiPolygon } from "./MultiPolygon";
import { Polygon } from "./Polygon";

export type GeoShape = Geometry | GeometryCollection;

export const GeoShape = {
  isGeoPoint(obj: any): obj is GeoPoint {
    return obj?.type === "GeoPoint";
  },

  isPolygon(obj: any): obj is Polygon {
    return obj?.type === "Polygon";
  },

  isLineString(obj: any): obj is LineString {
    return obj?.type === "LineString";
  },

  isMultiGeoPoint(obj: any): obj is MultiGeoPoint {
    return obj?.type === "MultiGeoPoint";
  },

  isMultiPolygon(obj: any): obj is MultiPolygon {
    return obj?.type === "MultiPolygon";
  },

  isMultiLineString(obj: any): obj is MultiLineString {
    return obj?.type === "MultiLineString";
  },

  isGeometryCollection(obj: any): obj is GeometryCollection {
    return obj?.type === "GeometryCollection";
  },

  isGeoShape(obj: any): obj is GeoShape {
    return (
      obj?.type === "geoshape"
      || GeoShape.isGeoPoint(obj)
      || GeoShape.isPolygon(obj)
      || GeoShape.isLineString(obj)
      || GeoShape.isMultiGeoPoint(obj)
      || GeoShape.isMultiPolygon(obj)
      || GeoShape.isMultiLineString(obj)
      || GeoShape.isGeometryCollection(obj)
    );
  },

  fromGeoJson(geoJson: GeoJson): GeoShape {
    switch (geoJson.type) {
      case "Point":
        return GeoPoint.fromGeoJson(geoJson);
      case "Polygon":
        return Polygon.fromGeoJson(geoJson);
      case "LineString":
        return LineString.fromGeoJson(geoJson);
      case "MultiPoint":
        return MultiGeoPoint.fromGeoJson(geoJson);
      case "MultiPolygon":
        return MultiPolygon.fromGeoJson(geoJson);
      case "MultiLineString":
        return MultiLineString.fromGeoJson(geoJson);
      case "GeometryCollection":
        return GeometryCollection.fromGeoJson(geoJson);
    }
  },
};
