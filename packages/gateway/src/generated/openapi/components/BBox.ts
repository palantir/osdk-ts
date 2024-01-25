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

import type { Coordinate } from "./Coordinate.js";

/**
 * A GeoJSON object MAY have a member named "bbox" to include
 * information on the coordinate range for its Geometries, Features, or
 * FeatureCollections. The value of the bbox member MUST be an array of
 * length 2*n where n is the number of dimensions represented in the
 * contained geometries, with all axes of the most southwesterly point
 * followed by all axes of the more northeasterly point. The axes order
 * of a bbox follows the axes order of geometries.
 */
export type BBox = Array<Coordinate>;
