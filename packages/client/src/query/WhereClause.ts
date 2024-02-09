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
  ObjectTypePropertyDefinition,
} from "@osdk/api";
import type { DistanceUnit } from "@osdk/gateway/types";

export type PossibleWhereClauseFilters =
  | "$gt"
  | "$eq"
  | "$ne"
  | "$isNull"
  | "$contains"
  | "$gte"
  | "$lt"
  | "$lte"
  | "$within";

// We need to conditional here to force the union to be distributed
type MakeFilter<K extends PossibleWhereClauseFilters, V> = K extends string ? {
    [k in K]: V;
  }
  : never;

type BaseFilter<T> =
  | T
  | MakeFilter<"$eq" | "$ne" | "$contains", T>
  | MakeFilter<"$isNull", boolean>;

type StringFilter = BaseFilter<string>;
type NumberFilter =
  | BaseFilter<number>
  | MakeFilter<"$gt" | "$gte" | "$lt" | "$lte", number>;

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
} satisfies Record<string, DistanceUnit>;

export type GeoFilter_Within = {
  "$within":
    | {
      distance: [number, keyof typeof DistanceUnitMapping];
      of: [number, number] | Readonly<Point>;
    }
    | {
      bbox: BBox;
    }
    | BBox
    | {
      polygon: Polygon["coordinates"];
    }
    | Polygon;
};

export type GeoFilter = GeoFilter_Within;

type FilterFor<PD extends ObjectTypePropertyDefinition> = PD["type"] extends
  "string" ? StringFilter
  : PD["type"] extends "geopoint" ? GeoFilter
  : NumberFilter; // FIXME we need to represent all types

export interface AndWhereClause<
  T extends ObjectOrInterfaceDefinition<any, any>,
> {
  $and: WhereClause<T>[];
}

export interface OrWhereClause<
  T extends ObjectOrInterfaceDefinition<any, any>,
> {
  $or: WhereClause<T>[];
}

export interface NotWhereClause<
  T extends ObjectOrInterfaceDefinition<any, any>,
> {
  $not: WhereClause<T>;
}

export type WhereClause<
  T extends ObjectOrInterfaceDefinition<any, any>,
> =
  | OrWhereClause<T>
  | AndWhereClause<T>
  | NotWhereClause<T>
  | {
    [P in keyof T["properties"]]?: FilterFor<T["properties"][P]>;
  };
