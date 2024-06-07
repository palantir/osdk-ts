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

import type { BBox } from "./BBox.js";
import type { FeaturePropertyKey } from "./FeaturePropertyKey.js";
import type { Geometry } from "./Geometry.js";

/** GeoJSon 'Feature' object */
export interface Feature {
  geometry?: Geometry;
  /**
   * A `Feature` object has a member with the name "properties".  The
   * value of the properties member is an object (any JSON object or a
   * JSON null value).
   */
  properties: Record<FeaturePropertyKey, any>;
  /**
   * If a `Feature` has a commonly used identifier, that identifier
   * SHOULD be included as a member of the Feature object with the name
   * "id", and the value of this member is either a JSON string or
   * number.
   */
  id?: any;
  bbox?: BBox;
}
