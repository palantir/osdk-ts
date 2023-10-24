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

import type { GeoJsonGeometryCollection } from "./GeoJson";
import type { Geometry } from "./Geometry";
export class GeometryCollection {
  private geometries;
  type: "GeometryCollection";
  private constructor() {
    throw new Error("not implemented");
  }
  getGeometries(): Geometry[] {
    throw new Error("not implemented");
  }
  static fromGeometries(geometries: Geometry[]): GeometryCollection {
    throw new Error("not implemented");
  }
  static fromGeoJson(geoJson: GeoJsonGeometryCollection): GeometryCollection {
    throw new Error("not implemented");
  }
}
