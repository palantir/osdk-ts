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

import type { GeometryCollection } from "./GeometryCollection";
import type { GeoPoint } from "./GeoPoint";
import type { LineString } from "./LineString";
import type { MultiLineString } from "./MultiLineString";
import type { MultiPoint } from "./MultiPoint";
import type { MultiPolygon } from "./MultiPolygon";
import type { Polygon } from "./Polygon";

export interface Geometry_Point extends GeoPoint {
  type: "Point";
}

export interface Geometry_MultiPoint extends MultiPoint {
  type: "MultiPoint";
}

export interface Geometry_LineString extends LineString {
  type: "LineString";
}

export interface Geometry_MultiLineString extends MultiLineString {
  type: "MultiLineString";
}

export interface Geometry_Polygon extends Polygon {
  type: "Polygon";
}

export interface Geometry_MultiPolygon extends MultiPolygon {
  type: "MultiPolygon";
}

export interface Geometry_GeometryCollection extends GeometryCollection {
  type: "GeometryCollection";
}

export type Geometry =
  | Geometry_Point
  | Geometry_MultiPoint
  | Geometry_LineString
  | Geometry_MultiLineString
  | Geometry_Polygon
  | Geometry_MultiPolygon
  | Geometry_GeometryCollection;
