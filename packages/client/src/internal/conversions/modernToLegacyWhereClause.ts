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

import type {
  GeoFilterOptions,
  ObjectOrInterfaceDefinition,
  PossibleWhereClauseFilters,
  WhereClause,
} from "@osdk/api";
import { DistanceUnitMapping } from "@osdk/api";

import type {
  PropertyIdentifier,
  SearchJsonQueryV2,
} from "@osdk/foundry.ontologies";
import type { BBox, Position } from "geojson";
import invariant from "tiny-invariant";

export function extractNamespace(
  fqApiName: string,
): [string | undefined, string] {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}

/** @internal */
export function modernToLegacyWhereClause<
  T extends ObjectOrInterfaceDefinition,
>(
  whereClause: WhereClause<T>,
  objectOrInterface: T,
): SearchJsonQueryV2 {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: (whereClause.$and as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: (whereClause.$or as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause(
        whereClause.$not as WhereClause<T>,
        objectOrInterface,
      ),
    };
  }

  const parts = Object.entries(whereClause);

  if (parts.length === 1) {
    return handleWherePair(parts[0], objectOrInterface);
  }

  return {
    type: "and",
    value: parts.map<SearchJsonQueryV2>(
      v => handleWherePair(v, objectOrInterface),
    ),
  };
}

function makeGeoFilterBbox(
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

function makeGeoFilterPolygon(
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

function handleWherePair(
  [fieldName, filter]: [string, any],
  objectOrInterface: ObjectOrInterfaceDefinition,
  structFieldSelector?: { propertyApiName: string; structFieldApiName: string },
): SearchJsonQueryV2 {
  invariant(
    filter != null,
    "Defined key values are only allowed when they are not undefined.",
  );

  const propertyIdentifier: PropertyIdentifier | undefined =
    structFieldSelector != null
      ? {
        type: "structField",
        ...structFieldSelector,
        propertyApiName: fullyQualifyPropName(
          structFieldSelector.propertyApiName,
          objectOrInterface,
        ),
      }
      : undefined;
  const field = structFieldSelector == null
    ? fullyQualifyPropName(fieldName, objectOrInterface)
    : undefined;

  if (
    typeof filter === "string" || typeof filter === "number"
    || typeof filter === "boolean"
  ) {
    propertyIdentifier;
    return {
      type: "eq",
      ...(propertyIdentifier != null
        && { propertyIdentifier }),
      field,
      value: filter,
    };
  }

  const keysOfFilter = Object.keys(filter);

  // If any of the keys start with `$` then they must be the only one.
  // e.g. `where({ name: { $eq: "foo", $ne: "bar" } })` is invalid currently
  const hasDollarSign = keysOfFilter.some((key) => key.startsWith("$"));
  invariant(
    !hasDollarSign
      || keysOfFilter.length === 1,
    "A WhereClause Filter with multiple clauses/fields is not allowed. Instead, use an 'or'/'and' clause to combine multiple filters.",
  );

  if (!hasDollarSign) {
    const structFilter = Object.entries(filter);
    invariant(
      structFilter.length === 1,
      "Cannot filter on more than one struct field in the same clause, need to use an and clause",
    );
    const structFieldApiName = keysOfFilter[0];
    return handleWherePair(Object.entries(filter)[0], objectOrInterface, {
      propertyApiName: fieldName,
      structFieldApiName,
    });
  }

  const firstKey = keysOfFilter[0] as PossibleWhereClauseFilters;
  invariant(filter[firstKey] != null);

  if (firstKey === "$ne") {
    return {
      type: "not",
      value: {
        type: "eq",
        ...(propertyIdentifier != null && { propertyIdentifier }),
        field,
        value: filter[firstKey],
      },
    };
  }

  if (firstKey === "$within") {
    const withinBody = filter[firstKey] as GeoFilterOptions["$within"];

    if (Array.isArray(withinBody)) {
      return makeGeoFilterBbox(withinBody, firstKey, propertyIdentifier, field);
    } else if ("$bbox" in withinBody && withinBody.$bbox != null) {
      return makeGeoFilterBbox(
        withinBody.$bbox,
        firstKey,
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
        fieldName,
      );
    }
  }
  if (firstKey === "$intersects") {
    const intersectsBody = filter[firstKey] as GeoFilterOptions["$intersects"];
    if (Array.isArray(intersectsBody)) {
      return makeGeoFilterBbox(
        intersectsBody,
        firstKey,
        propertyIdentifier,
        field,
      );
    } else if ("$bbox" in intersectsBody && intersectsBody.$bbox != null) {
      return makeGeoFilterBbox(
        intersectsBody.$bbox,
        firstKey,
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

  if (firstKey === "$containsAllTerms" || firstKey === "$containsAnyTerm") {
    return {
      type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
      ...(propertyIdentifier != null && { propertyIdentifier }),
      field,
      value: typeof filter[firstKey] === "string"
        ? filter[firstKey]
        : filter[firstKey]["term"],
      fuzzy: typeof filter[firstKey] === "string"
        ? false
        : filter[firstKey]["fuzzySearch"] ?? false,
    };
  }

  return {
    type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
    ...(propertyIdentifier != null && { propertyIdentifier }),
    field,
    value: filter[firstKey] as any,
  };
}

type DropDollarSign<T extends `$${string}`> = T extends `$${infer U}` ? U
  : never;

function fullyQualifyPropName(
  fieldName: string,
  objectOrInterface: ObjectOrInterfaceDefinition,
) {
  if (objectOrInterface.type === "interface") {
    const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
    const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
    return (fieldApiNamespace == null && objApiNamespace != null)
      ? `${objApiNamespace}.${fieldShortName}`
      : fieldName;
  }
  return fieldName;
}
