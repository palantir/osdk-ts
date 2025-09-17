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
  GeoFilterOptions,
  ObjectOrInterfaceDefinition,
  PossibleWhereClauseFilters,
} from "@osdk/api";
import { DistanceUnitMapping } from "@osdk/api";
import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import type { BBox, Position } from "geojson";

export type DropDollarSign<T extends `$${string}`> = T extends `$${infer U}` ? U
  : never;

export function extractNamespace(
  fqApiName: string,
): [string | undefined, string] {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}

export function fullyQualifyPropName(
  fieldName: string,
  objectOrInterface: ObjectOrInterfaceDefinition,
): string {
  if (objectOrInterface.type === "interface") {
    const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
    const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
    return (fieldApiNamespace == null && objApiNamespace != null)
      ? `${objApiNamespace}.${fieldShortName}`
      : fieldName;
  }
  return fieldName;
}

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

export function makeGeoFilterPolygon(
  coordinates: Position[][],
  filterType: "intersectsPolygon" | "withinPolygon",
  propertyIdentifier?: PropertyIdentifier,
  field?: string,
): SearchJsonQueryV2 {
  return {
    type: filterType,
    ...(propertyIdentifier != null && { propertyIdentifier }),
    field,
    value: {
      type: "Polygon",
      coordinates,
    },
  };
}

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

export function makeGeoFilterIntersects(
  intersectsBody: GeoFilterOptions["$intersects"],
  propertyIdentifier?: PropertyIdentifier,
  field?: string,
): SearchJsonQueryV2 {
  if (Array.isArray(intersectsBody)) {
    return makeGeoFilterBbox(
      intersectsBody,
      "$intersects",
      propertyIdentifier,
      field,
    );
  } else if ("$bbox" in intersectsBody && intersectsBody.$bbox != null) {
    return makeGeoFilterBbox(
      intersectsBody.$bbox,
      "$intersects",
      propertyIdentifier,
      field,
    );
  } else {
    const coordinates = ("$polygon" in intersectsBody)
      ? intersectsBody.$polygon
      : intersectsBody.coordinates;
    return makeGeoFilterPolygon(
      coordinates,
      "intersectsPolygon",
      propertyIdentifier,
      field,
    );
  }
}

export function handleRdpFilter(
  rdpName: string,
  filter: any,
): SearchJsonQueryV2 {
  // Handle simple equality
  if (
    typeof filter === "string" || typeof filter === "number"
    || typeof filter === "boolean"
  ) {
    return {
      type: "eq",
      propertyIdentifier: {
        type: "property",
        apiName: rdpName,
      },
      value: filter,
    };
  }

  // Handle filter operators
  const filterOp = Object.keys(filter)[0] as PossibleWhereClauseFilters;
  const filterValue = filter[filterOp];

  const propertyIdentifier: PropertyIdentifier = {
    type: "property",
    apiName: rdpName,
  };

  switch (filterOp) {
    case "$ne":
      return {
        type: "not",
        value: {
          type: "eq",
          propertyIdentifier,
          value: filterValue,
        },
      };

    case "$eq":
      return {
        type: "eq",
        propertyIdentifier,
        value: filterValue,
      };

    case "$lt":
      return {
        type: "lt",
        propertyIdentifier,
        value: filterValue,
      };

    case "$lte":
      return {
        type: "lte",
        propertyIdentifier,
        value: filterValue,
      };

    case "$gt":
      return {
        type: "gt",
        propertyIdentifier,
        value: filterValue,
      };

    case "$gte":
      return {
        type: "gte",
        propertyIdentifier,
        value: filterValue,
      };

    case "$in":
      return {
        type: "in",
        propertyIdentifier,
        value: filterValue,
      };

    case "$isNull":
      return {
        type: "isNull",
        propertyIdentifier,
        value: filterValue,
      };

    case "$contains":
      return {
        type: "contains",
        propertyIdentifier,
        value: filterValue,
      };

    case "$startsWith":
      return {
        type: "startsWith",
        propertyIdentifier,
        value: filterValue,
      };

    case "$containsAllTerms":
    case "$containsAnyTerm":
      return {
        type: filterOp.substring(1) as "containsAllTerms" | "containsAnyTerm",
        propertyIdentifier,
        value: typeof filterValue === "string"
          ? filterValue
          : filterValue["term"],
        fuzzy: typeof filterValue === "string"
          ? false
          : filterValue["fuzzySearch"] ?? false,
      };

    case "$containsAllTermsInOrder":
      return {
        type: "containsAllTermsInOrder",
        propertyIdentifier,
        value: filterValue,
      };

    case "$within":
    case "$intersects":
      throw new Error(
        `Geo filter ${filterOp} is not supported on runtime derived properties`,
      );

    default:
      throw new Error(`Unknown filter operator: ${filterOp}`);
  }
}
