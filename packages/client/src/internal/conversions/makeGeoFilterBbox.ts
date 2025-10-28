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

import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import type { BBox } from "geojson";

export function makeGeoFilterBbox(
  bbox: BBox,
  filterType: "$within" | "$intersects",
  propertyIdentifier?: PropertyIdentifier,
  field?: string,
): SearchJsonQueryV2 {
  return {
    type: filterType === "$within"
      ? "withinBoundingBox"
      : "intersectsBoundingBox",
    /**
     * This is a bit ugly, but did this so that propertyIdentifier only shows up in the return object if its defined,
     * this makes it so we don't need to go update our entire test bed either to include a field which may change in near future.
     * Once we solidify that this is the way forward, I can remove field and clean this up
     */
    ...(propertyIdentifier != null && { propertyIdentifier }),
    field,
    value: {
      topLeft: {
        type: "Point",
        coordinates: [bbox[0], bbox[3]],
      },
      bottomRight: {
        type: "Point",
        coordinates: [bbox[2], bbox[1]],
      },
    },
  };
}
