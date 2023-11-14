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

declare type GeoJsonCoordinates = number[];
declare type GeoJsonLineStringCoordinates = GeoJsonCoordinates[];
declare type GeoJsonLinearRingCoordinates = GeoJsonCoordinates[];
declare type GeoJsonPolygonCoordinates = GeoJsonLinearRingCoordinates[];
interface GeoJsonGeometryBase {
  type: string;
}
export interface GeoJsonPoint extends GeoJsonGeometryBase {
  type: "Point";
  coordinates: GeoJsonCoordinates;
}
export interface GeoJsonPolygon extends GeoJsonGeometryBase {
  type: "Polygon";
  coordinates: GeoJsonPolygonCoordinates;
}
export interface GeoJsonLineString extends GeoJsonGeometryBase {
  type: "LineString";
  coordinates: GeoJsonLineStringCoordinates;
}
export interface GeoJsonMultiPoint extends GeoJsonGeometryBase {
  type: "MultiPoint";
  coordinates: GeoJsonCoordinates[];
}
export interface GeoJsonMultiPolygon extends GeoJsonGeometryBase {
  type: "MultiPolygon";
  coordinates: GeoJsonPolygonCoordinates[];
}
export interface GeoJsonMultiLineString extends GeoJsonGeometryBase {
  type: "MultiLineString";
  coordinates: GeoJsonLineStringCoordinates[];
}
export interface GeoJsonGeometryCollection {
  type: "GeometryCollection";
  geometries: GeoJsonGeometry[];
}
export type GeoJsonGeometry =
  | GeoJsonPoint
  | GeoJsonPolygon
  | GeoJsonLineString
  | GeoJsonMultiPoint
  | GeoJsonMultiPolygon
  | GeoJsonMultiLineString;
export type GeoJson = GeoJsonGeometry | GeoJsonGeometryCollection;
