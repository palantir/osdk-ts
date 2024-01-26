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

import type { Polygon } from "../../baseTypes";
import type { WhereClause } from "./Filters";
import type { BoundingBox } from "./GeoPointFilter";

export interface GeoShapeFilter {
  /** The provided property is within the specified bounding box. */
  withinBoundingBox: (boundingBox: BoundingBox) => WhereClause;
  /** The provided property intersects the specified bounding box. */
  intersectsBoundingBox: (boundingBox: BoundingBox) => WhereClause;
  /** The provided property is not within the specified bounding box. */
  doesNotIntersectBoundingBox: (boundingBox: BoundingBox) => WhereClause;
  /** The provided property is within the specified Polygon */
  withinPolygon: (polygon: Polygon) => WhereClause;
  /** The provided property is within the specified Polygon */
  intersectsPolygon: (polygon: Polygon) => WhereClause;
  /** The provided property is within the specified Polygon */
  doesNotIntersectPolygon: (polygon: Polygon) => WhereClause;
}

export const GeoShapeFilter = (property: string): GeoShapeFilter => {
  return {
    withinBoundingBox(boundingBox: BoundingBox): WhereClause {
      return {
        type: "withinBoundingBox",
        field: property,
        value: {
          topLeft: boundingBox.topLeft.toGeoJson(),
          bottomRight: boundingBox.bottomRight.toGeoJson(),
        },
      };
    },

    intersectsBoundingBox(boundingBox: BoundingBox): WhereClause {
      return {
        type: "intersectsBoundingBox",
        field: property,
        value: {
          topLeft: boundingBox.topLeft.toGeoJson(),
          bottomRight: boundingBox.bottomRight.toGeoJson(),
        },
      };
    },

    doesNotIntersectBoundingBox(boundingBox: BoundingBox): WhereClause {
      return {
        type: "doesNotIntersectBoundingBox",
        field: property,
        value: {
          topLeft: boundingBox.topLeft.toGeoJson(),
          bottomRight: boundingBox.bottomRight.toGeoJson(),
        },
      };
    },

    withinPolygon(polygon) {
      return {
        type: "withinPolygon",
        field: property,
        value: polygon.toGeoJson(),
      };
    },
    intersectsPolygon(polygon) {
      return {
        type: "intersectsPolygon",
        field: property,
        value: polygon.toGeoJson(),
      };
    },
    doesNotIntersectPolygon(polygon) {
      return {
        type: "doesNotIntersectPolygon",
        field: property,
        value: polygon.toGeoJson(),
      };
    },
  };
};
