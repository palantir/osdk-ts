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

import type { DistanceUnit, GeoJsonPoint, GeoJsonPolygon } from "../baseTypes";
import type { ObjectTypeProperties } from "../baseTypes/ObjectType";
import type { ArrayFilter } from "./ArrayFilter";
import type { AttachmentFilter } from "./AttachmentFilter";
import type { BooleanFilter } from "./BooleanFilter";
import type { LocalDateFilter, TimestampFilter } from "./DateTimeFilters";
import type { GeoPointFilter } from "./GeoPointFilter";
import type { NumericFilter } from "./NumericFilter";
import type { StringFilter } from "./StringFilter";
export type ObjectTypeFilterFunction<T extends ObjectTypeProperties> = (
  objectType: T,
) => WhereClause;

export type ObjectTypeOrderByFunction<T extends ObjectTypeProperties> = (
  objectType: T,
) => OrderByClause;

export type BoundingBoxFilter = {
  topLeft: GeoJsonPoint;
  bottomRight: GeoJsonPoint;
};

export type DistanceOf = {
  center: GeoJsonPoint;
  distance: {
    value: number;
    unit: DistanceUnit;
  };
};

export interface SearchClause {
  where: WhereClause;
  orderBy: {
    fields: OrderByClause[];
  };
  take?: number;
}
export interface WhereClause {
  type: string;
  field?: string;
  value?:
    | string
    | number
    | boolean
    | GeoJsonPolygon
    | BoundingBoxFilter
    | DistanceOf
    | WhereClause
    | WhereClause[];
}

export interface OrderByClause {
  field: string;
  direction: string;
}

export type FilterType<T extends string | number> =
  | NumericFilter
  | StringFilter
  | LocalDateFilter
  | GeoPointFilter
  | TimestampFilter
  | BooleanFilter
  | AttachmentFilter
  | ArrayFilter<T>;
