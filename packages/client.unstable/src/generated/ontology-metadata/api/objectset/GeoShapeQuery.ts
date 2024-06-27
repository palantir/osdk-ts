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

import type { GeoBoundingBoxFilter } from "./GeoBoundingBoxFilter.js";
import type { GeoPolygonFilter } from "./GeoPolygonFilter.js";
export interface GeoShapeQuery_geoBoundingBoxFilter {
  type: "geoBoundingBoxFilter";
  geoBoundingBoxFilter: GeoBoundingBoxFilter;
}

export interface GeoShapeQuery_geoPolygonFilter {
  type: "geoPolygonFilter";
  geoPolygonFilter: GeoPolygonFilter;
}
/**
 * Union type for valid queries over geo shape properties.
 */
export type GeoShapeQuery =
  | GeoShapeQuery_geoBoundingBoxFilter
  | GeoShapeQuery_geoPolygonFilter;
