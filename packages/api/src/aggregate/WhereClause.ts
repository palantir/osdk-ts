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

import type { BBox, Point, Polygon } from "geojson";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
} from "../ontology/ObjectTypeDefinition.js";
import type { ArrayFilter } from "./ArrayFilter.js";
import type { BooleanFilter } from "./BooleanFilter.js";
import type { DatetimeFilter } from "./DatetimeFilter.js";
import type { GeoFilter } from "./GeoFilter.js";
import type { NumberFilter } from "./NumberFilter.js";
import type { StringFilter } from "./StringFilter.js";

export type PossibleWhereClauseFilters =
  | "$gt"
  | "$eq"
  | "$ne"
  | "$isNull"
  | "$contains"
  | "$gte"
  | "$lt"
  | "$lte"
  | "$within"
  | "$in"
  | "$intersects"
  | "$startsWith"
  | "$containsAllTermsInOrder"
  | "$containsAnyTerm"
  | "$containsAllTerms";

// the value side of this needs to match DistanceUnit from @osdk/internal.foundry but we don't
// want the dependency
export const DistanceUnitMapping = {
  "centimeter": "CENTIMETERS",
  "centimeters": "CENTIMETERS",
  "cm": "CENTIMETERS",
  "meter": "METERS",
  "meters": "METERS",
  "m": "METERS",
  "kilometer": "KILOMETERS",
  "kilometers": "KILOMETERS",
  "km": "KILOMETERS",
  "inch": "INCHES",
  "inches": "INCHES",
  "foot": "FEET",
  "feet": "FEET",
  "yard": "YARDS",
  "yards": "YARDS",
  "mile": "MILES",
  "miles": "MILES",
  "nautical_mile": "NAUTICAL_MILES",
  "nauticalMile": "NAUTICAL_MILES",
  "nautical miles": "NAUTICAL_MILES",
} satisfies Record<
  string,
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES"
>;

export type GeoFilter_Within = {
  "$within":
    | {
      $distance: [number, keyof typeof DistanceUnitMapping];
      $of: [number, number] | Readonly<Point>;
      $bbox?: never;
      $polygon?: never;
    }
    | {
      $bbox: BBox;
      $distance?: never;
      $of?: never;
      $polygon?: never;
    }
    | BBox
    | {
      $polygon: Polygon["coordinates"];
      $bbox?: never;
      $distance?: never;
      $of?: never;
    }
    | Polygon;
};

export type GeoFilter_Intersects = {
  "$intersects":
    | {
      $bbox: BBox;
      $polygon?: never;
    }
    | BBox
    | {
      $polygon: Polygon["coordinates"];
      $bbox?: never;
    }
    | Polygon;
};

type FilterFor<PD extends ObjectMetadata.Property> = PD["multiplicity"] extends
  true
  ? (PD["type"] extends
    "string" | "geopoint" | "geoshape" | "datetime" | "timestamp"
    ? ArrayFilter<string>
    : (PD["type"] extends boolean ? ArrayFilter<boolean>
      : ArrayFilter<number>))
  : (PD["type"] extends "string" ? StringFilter
    : PD["type"] extends "geopoint" | "geoshape" ? GeoFilter
    : PD["type"] extends "datetime" | "timestamp" ? DatetimeFilter
    : PD["type"] extends "boolean" ? BooleanFilter
    : NumberFilter); // FIXME we need to represent all types

export interface AndWhereClause<
  T extends ObjectOrInterfaceDefinition,
> {
  $and: WhereClause<T>[];
}

export interface OrWhereClause<
  T extends ObjectOrInterfaceDefinition,
> {
  $or: WhereClause<T>[];
}

export interface NotWhereClause<
  T extends ObjectOrInterfaceDefinition,
> {
  $not: WhereClause<T>;
}

export type WhereClause<
  T extends ObjectOrInterfaceDefinition,
> =
  | OrWhereClause<T>
  | AndWhereClause<T>
  | NotWhereClause<T>
  | {
    [P in keyof CompileTimeMetadata<T>["properties"]]?: FilterFor<
      CompileTimeMetadata<T>["properties"][P]
    >;
  };
