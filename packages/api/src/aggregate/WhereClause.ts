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
  DerivedObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinition,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
} from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { BaseWirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type { IsNever } from "../OsdkObjectFrom.js";
import type { ArrayFilter } from "./ArrayFilter.js";
import type { BaseFilter } from "./BaseFilter.js";
import type { BooleanFilter } from "./BooleanFilter.js";
import type { DatetimeFilter } from "./DatetimeFilter.js";
import type { GeoFilter } from "./GeoFilter.js";
import type { Just } from "./Just.js";
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

// the value side of this needs to match DistanceUnit from @osdk/foundry but we don't
// want the dependency
export const DistanceUnitMapping: {
  centimeter: "CENTIMETERS";
  centimeters: "CENTIMETERS";
  cm: "CENTIMETERS";
  meter: "METERS";
  meters: "METERS";
  m: "METERS";
  kilometer: "KILOMETERS";
  kilometers: "KILOMETERS";
  km: "KILOMETERS";
  inch: "INCHES";
  inches: "INCHES";
  foot: "FEET";
  feet: "FEET";
  yard: "YARDS";
  yards: "YARDS";
  mile: "MILES";
  miles: "MILES";
  nautical_mile: "NAUTICAL_MILES";
  nauticalMile: "NAUTICAL_MILES";
  "nautical miles": "NAUTICAL_MILES";
} = {
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

type BaseFilterFor<T> = T extends Record<string, BaseWirePropertyTypes>
  ? StructFilterOpts<T>
  : T extends "string" ? StringFilter
  : T extends "geopoint" | "geoshape" ? GeoFilter
  : T extends "datetime" | "timestamp" ? DatetimeFilter
  : T extends "boolean" ? BooleanFilter
  : T extends WhereClauseNumberPropertyTypes ? NumberFilter
  : BaseFilter<string>; // Fallback for unknown types

type FilterFor<PD extends ObjectMetadata.Property> = PD["multiplicity"] extends
  true ? ArrayFilter<BaseFilterFor<PD["type"]>>
  : PD["type"] extends Record<string, BaseWirePropertyTypes>
    ? StructFilter<PD["type"]> | BaseFilter.$isNull<string>
  : BaseFilterFor<PD["type"]>;

type StructFilterOpts<ST extends Record<string, BaseWirePropertyTypes>> = {
  [K in keyof ST]?: FilterFor<{ "type": ST[K] }>;
};
type StructFilter<ST extends Record<string, BaseWirePropertyTypes>> = {
  [K in keyof ST]: Just<K, StructFilterOpts<ST>>;
}[keyof ST];

type WhereClauseNumberPropertyTypes =
  | "double"
  | "integer"
  | "long"
  | "float"
  | "decimal"
  | "byte";

export type AndWhereClause<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = {
  $and: WhereClause<T, RDPs>[];
};

export type OrWhereClause<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = {
  $or: WhereClause<T, RDPs>[];
};

export type NotWhereClause<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = {
  $not: WhereClause<T, RDPs>;
};

export type PropertyWhereClause<T extends ObjectOrInterfaceDefinition> = {
  [P in keyof CompileTimeMetadata<T>["properties"]]?: FilterFor<
    CompileTimeMetadata<T>["properties"][P]
  >;
};

type MergedPropertyWhereClause<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = PropertyWhereClause<
  DerivedObjectOrInterfaceDefinition.WithDerivedProperties<T, RDPs>
>;

export type WhereClause<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> =
  | OrWhereClause<T, RDPs>
  | AndWhereClause<T, RDPs>
  | NotWhereClause<T, RDPs>
  | (IsNever<keyof CompileTimeMetadata<T>["properties"]> extends true
    ? Record<string, never>
    : MergedPropertyWhereClause<T, RDPs>);
