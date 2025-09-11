/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Geometry, GeometryCollection } from "geojson";

export type {
  GeoJSON,
  Geometry,
  GeometryCollection,
  LineString,
  MultiLineString,
  MultiPoint as MultiGeoPoint, // alias for MultiGeoPoint
  MultiPolygon,
  Point as GeoPoint, // alias for GeoPoint
  Polygon,
} from "geojson";

export type GeoShape = Geometry | GeometryCollection; // type alias for GeoShape
