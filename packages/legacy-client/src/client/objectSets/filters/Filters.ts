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
  DistanceUnit,
  GeoJsonPoint,
  GeoJsonPolygon,
} from "../../baseTypes/index.js";
import type { ArrayFilter } from "./ArrayFilter.js";
import type { AttachmentFilter } from "./AttachmentFilter.js";
import type { BooleanFilter } from "./BooleanFilter.js";
import type { LocalDateFilter, TimestampFilter } from "./DateTimeFilters.js";
import type { GeoPointFilter } from "./GeoPointFilter.js";
import type { NumericFilter } from "./NumericFilter.js";
import type { StringFilter } from "./StringFilter.js";

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
export interface LtWhereClause {
  type: "lt";
  field: string;
  value: any;
}

export interface GtWhereClause {
  type: "gt";
  field: string;
  value: any;
}

export interface LteWhereClause {
  type: "lte";
  field: string;
  value: any;
}

export interface GteWhereClause {
  type: "gte";
  field: string;
  value: any;
}

export interface EqWhereClause {
  type: "eq";
  field: string;
  value: any;
}

export interface IsNullWhereClause {
  type: "isNull";
  field: string;
  value: boolean;
}

// String types
export interface ContainsWhereClause {
  type: "contains";
  field: string;
  value: any;
}

export interface StartsWithWhereClause {
  type: "startsWith";
  field: string;
  value: string;
}

export interface ContainsAllTermsInOrderWhereClause {
  type: "containsAllTermsInOrder";
  field: string;
  value: string;
}

export interface ContainsAnyTermWhereClause {
  type: "containsAnyTerm";
  field: string;
  value: string;
}

export interface ContainsAllTermsWhereClause {
  type: "containsAllTerms";
  field: string;
  value: string;
}

// Geospatial types
export interface WithinDistanceOfWhereClause {
  type: "withinDistanceOf";
  field: string;
  value: DistanceOf;
}

export interface WithinBoundingBoxWhereClause {
  type: "withinBoundingBox";
  field: string;
  value: BoundingBoxFilter;
}

export interface IntersectsBoundingBoxWhereClause {
  type: "intersectsBoundingBox";
  field: string;
  value: BoundingBoxFilter;
}

export interface DoesNotIntersectBoundingBoxWhereClause {
  type: "doesNotIntersectBoundingBox";
  field: string;
  value: BoundingBoxFilter;
}

export interface WithinPolygonWhereClause {
  type: "withinPolygon";
  field: string;
  value: GeoJsonPolygon;
}

export interface IntersectsPolygonWhereClause {
  type: "intersectsPolygon";
  field: string;
  value: GeoJsonPolygon;
}

export interface DoesNotIntersectPolygonWhereClause {
  type: "doesNotIntersectPolygon";
  field: string;
  value: GeoJsonPolygon;
}

// Logical types
export interface AndWhereClause {
  type: "and";
  value: WhereClause[];
}

export interface OrWhereClause {
  type: "or";
  value: WhereClause[];
}

export interface NotWhereClause {
  type: "not";
  value: WhereClause;
}

// Union of all types
export type WhereClause =
  | LtWhereClause
  | GtWhereClause
  | LteWhereClause
  | GteWhereClause
  | EqWhereClause
  | IsNullWhereClause
  | ContainsWhereClause
  | StartsWithWhereClause
  | ContainsAllTermsInOrderWhereClause
  | ContainsAnyTermWhereClause
  | ContainsAllTermsWhereClause
  | WithinDistanceOfWhereClause
  | WithinBoundingBoxWhereClause
  | IntersectsBoundingBoxWhereClause
  | DoesNotIntersectBoundingBoxWhereClause
  | WithinPolygonWhereClause
  | IntersectsPolygonWhereClause
  | DoesNotIntersectPolygonWhereClause
  | AndWhereClause
  | OrWhereClause
  | NotWhereClause;

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
