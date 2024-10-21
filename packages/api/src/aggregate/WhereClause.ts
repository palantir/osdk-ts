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
import type { RequireExactlyOne } from "type-fest";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
} from "../ontology/ObjectTypeDefinition.js";
import type { IsNever } from "../OsdkObjectFrom.js";

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

// We need to conditional here to force the union to be distributed
type MakeFilter<K extends PossibleWhereClauseFilters, V> = K extends string ? {
    [k in K]: V;
  }
  : never;

type BaseFilter<T> =
  | T
  | MakeFilter<"$eq" | "$ne", T>
  | MakeFilter<"$in", Array<T>>
  | MakeFilter<"$isNull", boolean>;

type StringFilter =
  | BaseFilter<string>
  | MakeFilter<
    | "$startsWith"
    | "$containsAllTermsInOrder"
    | "$containsAnyTerm"
    | "$containsAllTerms",
    string
  >;
type NumberFilter =
  | BaseFilter<number>
  | MakeFilter<"$gt" | "$gte" | "$lt" | "$lte", number>;

type DatetimeFilter =
  | BaseFilter<string>
  | MakeFilter<"$gt" | "$gte" | "$lt" | "$lte", string>;

type BooleanFilter =
  | boolean
  | MakeFilter<"$eq" | "$ne", boolean>
  | MakeFilter<"$isNull", boolean>;

type ArrayFilter<T> =
  | MakeFilter<"$contains", T>
  | MakeFilter<"$isNull", boolean>;

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

export type GeoFilter =
  | GeoFilter_Within
  | GeoFilter_Intersects
  | MakeFilter<"$isNull", boolean>;

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
    [P in PropertyKeys<T>]?:
      | RequireExactlyOne<
        Pick<
          WhereClauseKeys<T, P>,
          NonNeverKeys<
            WhereClauseKeys<T, P>
          >
        >
      >
      | FilterRawType<CompileTimeMetadata<T>["properties"][P]>;
  };

type WhereClauseKeys<
  T extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<T>,
> = FilterDollarSignKeys<
  FlattenUnion<FilterFor<CompileTimeMetadata<T>["properties"][P]>>
>;

export type FilterRawType<
  PD extends ObjectMetadata.Property,
> = PD["multiplicity"] extends true ? (Record<string, never>)
  : (PD["type"] extends "string" | "datetime" | "timestamp" ? string
    : PD["type"] extends "geopoint" | "geoshape" ? Record<string, never>
    : PD["type"] extends "boolean" ? boolean
    : PD["type"] extends
      "double" | "integer" | "long" | "float" | "decimal" | "byte" ? number
    : Record<string, never>);

type FlattenUnion<T> = {
  [K in keyof UnionToIntersection<T>]: K extends keyof T
    ? T[K] extends any[] ? T[K]
    : T[K] extends object ? FlattenUnion<T[K]>
    : T[K]
    : UnionToIntersection<T>[K];
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void
  : never) extends ((k: infer I) => void) ? I
  : never;

type FilterDollarSignKeys<T> = {
  [K in keyof T]: K extends `$${string}` ? T[K] : never;
};

type NonNeverKeys<T> = {
  [K in keyof T]: IsNever<T[K]> extends true ? never : K;
}[keyof T];
