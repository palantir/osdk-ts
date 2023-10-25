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

import type { GeoJsonMultiLineString } from "./GeoJson";
import type { Geometry } from "./Geometry";
import type { LineString } from "./LineString";
export interface MultiLineString extends Geometry {
  getLineStrings(): LineString[];
  toGeoJson(): GeoJsonMultiLineString;
}
export class MultiLineString implements MultiLineString {
  private geoLineStrings;
  type: "MultiLineString";
  private constructor() {
    throw new Error("not implemented");
  }
  static fromLineStrings(lineStrings: LineString[]): MultiLineString {
    throw new Error("not implemented");
  }
  static fromGeoJson(geoJson: GeoJsonMultiLineString): MultiLineString {
    throw new Error("not implemented");
  }
}
