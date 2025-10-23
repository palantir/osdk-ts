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

import type { GeoFilterOptions } from "@osdk/api";
import { DistanceUnitMapping } from "@osdk/api";
import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import { makeGeoFilterBbox } from "./makeGeoFilterBbox.js";
import { makeGeoFilterPolygon } from "./makeGeoFilterPolygon.js";

export function makeGeoFilterWithin(
  withinBody: GeoFilterOptions["$within"],
  propertyIdentifier?: PropertyIdentifier,
  field?: string,
): SearchJsonQueryV2 {
  if (Array.isArray(withinBody)) {
    return makeGeoFilterBbox(withinBody, "$within", propertyIdentifier, field);
  } else if ("$bbox" in withinBody && withinBody.$bbox != null) {
    return makeGeoFilterBbox(
      withinBody.$bbox,
      "$within",
      propertyIdentifier,
      field,
    );
  } else if (
    ("$distance" in withinBody && "$of" in withinBody)
    && withinBody.$distance != null
    && withinBody.$of != null
  ) {
    return {
      type: "withinDistanceOf",
      ...(propertyIdentifier != null && { propertyIdentifier }),
      field,
      value: {
        center: Array.isArray(withinBody.$of)
          ? {
            type: "Point",
            coordinates: withinBody.$of,
          }
          : withinBody.$of,
        distance: {
          value: withinBody.$distance[0],
          unit: DistanceUnitMapping[withinBody.$distance[1]],
        },
      },
    };
  } else {
    const coordinates = ("$polygon" in withinBody)
      ? withinBody.$polygon
      : withinBody.coordinates;
    return makeGeoFilterPolygon(
      coordinates,
      "withinPolygon",
      propertyIdentifier,
      field,
    );
  }
}
