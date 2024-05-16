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

import type { Feature } from "./Feature.js";
import type { FeatureCollection } from "./FeatureCollection.js";
import type { GeometryCollection } from "./GeometryCollection.js";
import type { GeoPoint } from "./GeoPoint.js";
import type { LineString } from "./LineString.js";
import type { MultiLineString } from "./MultiLineString.js";
import type { MultiPoint } from "./MultiPoint.js";
import type { MultiPolygon } from "./MultiPolygon.js";
import type { Polygon } from "./Polygon.js";

export interface GeoJsonObject_Feature extends Feature {
  type: "Feature";
}

export interface GeoJsonObject_FeatureCollection extends FeatureCollection {
  type: "FeatureCollection";
}

export interface GeoJsonObject_Point extends GeoPoint {
  type: "Point";
}

export interface GeoJsonObject_MultiPoint extends MultiPoint {
  type: "MultiPoint";
}

export interface GeoJsonObject_LineString extends LineString {
  type: "LineString";
}

export interface GeoJsonObject_MultiLineString extends MultiLineString {
  type: "MultiLineString";
}

export interface GeoJsonObject_Polygon extends Polygon {
  type: "Polygon";
}

export interface GeoJsonObject_MultiPolygon extends MultiPolygon {
  type: "MultiPolygon";
}

export interface GeoJsonObject_GeometryCollection extends GeometryCollection {
  type: "GeometryCollection";
}

export type GeoJsonObject =
  | GeoJsonObject_Feature
  | GeoJsonObject_FeatureCollection
  | GeoJsonObject_Point
  | GeoJsonObject_MultiPoint
  | GeoJsonObject_LineString
  | GeoJsonObject_MultiLineString
  | GeoJsonObject_Polygon
  | GeoJsonObject_MultiPolygon
  | GeoJsonObject_GeometryCollection;
