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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { SearchJsonQueryV2 } from "@osdk/gateway/types";
import type { BBox } from "geojson";
import invariant from "tiny-invariant";
import type {
  AndWhereClause,
  NotWhereClause,
  OrWhereClause,
  PossibleWhereClauseFilters,
  WhereClause,
} from "../../query/index.js";
import type { GeoFilter_Within } from "../../query/WhereClause.js";
import { DistanceUnitMapping } from "../../query/WhereClause.js";

export function modernToLegacyWhereClause<
  T extends ObjectOrInterfaceDefinition<any, any>,
>(
  whereClause: WhereClause<T>,
): SearchJsonQueryV2 {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: (whereClause as AndWhereClause<T>).$and.map(
        modernToLegacyWhereClause,
      ),
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: (whereClause as OrWhereClause<T>).$or.map(
        modernToLegacyWhereClause,
      ),
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause((whereClause as NotWhereClause<T>).$not),
    };
  }

  const parts = Object.entries(whereClause);

  if (parts.length === 1) {
    return handleWherePair(parts[0]);
  }

  return {
    type: "and",
    value: parts.map<SearchJsonQueryV2>(
      handleWherePair,
    ),
  };
}

function makeWithinBbox(field: string, bbox: BBox): SearchJsonQueryV2 {
  return {
    type: "withinBoundingBox",
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

function handleWherePair([field, filter]: [string, any]): SearchJsonQueryV2 {
  invariant(
    filter != null,
    "Defined key values are only allowed when they are not undefined.",
  );

  if (typeof filter === "string" || typeof filter === "number") {
    return {
      type: "eq",
      field,
      value: filter,
    };
  }

  invariant(
    Object.keys(filter).length === 1,
    "WhereClause Filter with multiple properties isn't allowed",
  );
  const firstKey = Object.keys(filter)[0] as PossibleWhereClauseFilters;
  invariant(filter[firstKey] != null);

  if (firstKey === "ne") {
    return {
      type: "not",
      value: {
        type: "eq",
        field,
        value: filter[firstKey],
      },
    };
  }

  if (firstKey === "$within") {
    const withinBody = filter[firstKey] as GeoFilter_Within["$within"];

    if (Array.isArray(withinBody)) {
      return makeWithinBbox(field, withinBody);
    } else if ("bbox" in withinBody && !("type" in withinBody)) {
      return makeWithinBbox(field, withinBody.bbox);
    } else if ("distance" in withinBody && "of" in withinBody) {
      return {
        type: "withinDistanceOf",
        field,
        value: {
          center: Array.isArray(withinBody.of)
            ? {
              type: "Point",
              coordinates: withinBody.of,
            }
            : withinBody.of,
          distance: {
            value: withinBody.distance[0],
            unit: DistanceUnitMapping[withinBody.distance[1]],
          },
        },
      };
    } else {
      const coordinates = ("polygon" in withinBody)
        ? withinBody.polygon
        : withinBody.coordinates;
      return {
        type: "withinPolygon",
        field,
        value: {
          type: "Polygon",
          coordinates,
        },
      };
    }
  }

  return {
    type: firstKey,
    field,
    value: filter[firstKey] as any,
  };
}
