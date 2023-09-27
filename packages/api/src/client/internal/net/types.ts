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

export interface AggregationClause {
  type: string;
  field?: string;
  name: string;
}

export type AggregationValueType = number | string | boolean;
export type BaseGroupValue = number | string | boolean;
export type Bucketing<T> =
  | { startValue?: T; endValue: T }
  | { startValue: T; endValue?: T };
export type GroupValue = BaseGroupValue | Bucketing<BaseGroupValue>;

export interface WhereClauseV2 {
  type: string;
  field?: string;
  value?:
    | string
    | number
    | BoundingBoxFilter
    | PolyGonGeoJson
    | DistanceOf
    | boolean
    | WhereClauseV2
    | WhereClauseV2[];
}

export type BoundingBoxFilter = {
  topLeft: PointGeoJson;
  bottomRight: PointGeoJson;
};

export type PolyGonGeoJson = {
  type: "Polygon";
  coordinates: number[][][];
};

export type DistanceOf = {
  center: PointGeoJson;
  distance: {
    value: number;
    unit: string;
  };
};

export type PointGeoJson = {
  type: "Point";
  coordinates: number[];
};

export interface SearchClauseV2 {
  where?: WhereClauseV2;
  orderBy?: {
    fields: OrderByClause[];
  };
  pageSize?: number;
  pageToken?: string;
}
export interface OrderByClause {
  field: string;
  direction: string;
}

export type GroupByClause =
  | GroupByExact
  | GroupByFixedWidth
  | GroupByDuration
  | GroupByRanges;

export type GroupByExact = {
  type: "exact";
  field: string;
  maxGroupCount?: number;
};

export type GroupByFixedWidth = {
  type: "fixedWidth";
  field: string;
  fixedWidth: number;
};

export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS"
  | "QUARTERS";
export type GroupByDuration = {
  type: "duration";
  field: string;
  unit: TimeUnit;
  value: number;
};

export type GroupByRanges = {
  type: "ranges";
  field: string;
  ranges: Array<
    | { startValue?: string | number; endValue: string | number }
    | { startValue: string | number; endValue?: string | number }
  >;
};

export interface AggregateObjectsV2Body {
  aggregation: AggregationClause[];
  groupBy?: GroupByClause[];
  where?: SearchClauseV2;
}

export type AggregationAPIResponse = {
  excludedItems?: number;
  data: Array<{
    group: { [key: string]: GroupValue };
    metrics: Array<{ name: string; value: AggregationValueType }>;
  }>;
};

export type AggregateObjectsResponseV2 = {
  excludedItems?: number;
  data: Array<AggregateObjectsResponseItemV2>;
};
export type AggregateObjectsResponseItemV2 = {
  group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>;
  metrics: Array<AggregationMetricResultV2>;
};
export type AggregationGroupKeyV2 = string;
export type AggregationGroupValueV2 = any;
export type AggregationMetricResultV2 = { name: string; value?: any };

export type LoadObjectSetRequestV2 = {
  objectSet: ObjectSet;
  orderBy?: SearchOrderBy;
  select: Array<SelectedPropertyApiName>;
  pageToken?: PageToken;
  pageSize?: PageSize;
};

export type SearchOrderBy = { fields: Array<SearchOrdering> };
export type SearchOrdering = { field: string; direction?: string };
export type SelectedPropertyApiName = string;
export type PageToken = string;
export type PageSize = number;
export type ObjectRid = string;

export type ObjectSet =
  | (ObjectSetBaseType & { type: "base" })
  | (ObjectSetStaticType & { type: "static" })
  | (ObjectSetReferenceType & { type: "reference" })
  | (ObjectSetFilterType & { type: "filter" })
  | (ObjectSetUnionType & { type: "union" })
  | (ObjectSetIntersectionType & { type: "intersect" })
  | (ObjectSetSubtractType & { type: "subtract" })
  | (ObjectSetSearchAroundType & { type: "searchAround" });
export type ObjectSetBaseType = { objectType: string };
export type ObjectSetStaticType = { objects: Array<ObjectRid> };
export type ObjectSetReferenceType = { reference: string };
export type ObjectSetFilterType = {
  objectSet: ObjectSet;
  where: SearchJsonQueryV2;
};
export type ObjectSetIntersectionType = { objectSets: Array<ObjectSet> };
/** */
export type ObjectSetUnionType = { objectSets: Array<ObjectSet> };
export type ObjectSetSubtractType = { objectSets: Array<ObjectSet> };
export type ObjectSetSearchAroundType = {
  objectSet: ObjectSet;
  link: LinkTypeApiName;
};
export type LinkTypeApiName = string;

export type SearchJsonQueryV2 =
  | (LtQuery & { type: "lt" })
  | (GtQuery & { type: "gt" })
  | (LteQuery & { type: "lte" })
  | (GteQuery & { type: "gte" })
  | (EqualsQuery & { type: "eq" })
  | (IsNullQuery & { type: "isNull" })
  | (ContainsQuery & { type: "contains" })
  | (AndQueryV2 & { type: "and" })
  | (OrQueryV2 & { type: "or" })
  | (NotQueryV2 & { type: "not" })
  | (StartsWithQuery & { type: "startsWith" })
  | (ContainsAllTermsInOrderQuery & { type: "containsAllTermsInOrder" })
  | (ContainsAnyTermQuery & { type: "containsAnyTerm" })
  | (ContainsAllTermsQuery & { type: "containsAllTerms" })
  | (WithinDistanceOfQuery & { type: "withinDistanceOf" })
  | (WithinBoundingBoxQuery & { type: "withinBoundingBox" })
  | (IntersectsBoundingBoxQuery & { type: "intersectsBoundingBox" })
  | (DoesNotIntersectBoundingBoxQuery & { type: "doesNotIntersectBoundingBox" })
  | (WithinPolygonQuery & { type: "withinPolygon" })
  | (IntersectsPolygonQuery & { type: "intersectsPolygon" })
  | (DoesNotIntersectPolygonQuery & { type: "doesNotIntersectPolygon" });
export type LtQuery = { field: string; value: any };
export type GtQuery = { field: string; value: any };
export type LteQuery = { field: string; value: any };
/** Returns objects where the specified field is greater than or equal to a value. */
export type GteQuery = { field: string; value: any };
/** Returns objects where the specified field is equal to a value. */
export type EqualsQuery = { field: string; value: any };
/** Returns objects based on the existence of the specified field. */
export type IsNullQuery = { field: string; value: boolean };
/** Returns objects where the specified array contains a value. */
export type ContainsQuery = { field: string; value: any };
export type AndQueryV2 = { value: Array<SearchJsonQueryV2> };
export type OrQueryV2 = { value: Array<SearchJsonQueryV2> };
export type NotQueryV2 = { value: SearchJsonQueryV2 };
export type StartsWithQuery = { field: string; value: string };
export type ContainsAllTermsInOrderQuery = { field: string; value: string };
export type ContainsAnyTermQuery = {
  field: string;
  value: string;
  fuzzy?: Fuzzy;
};

export type ContainsAllTermsQuery = {
  field: string;
  value: string;
  fuzzy?: Fuzzy;
};
export type WithinDistanceOfQuery = { field: string; value: CenterPoint };
export type WithinBoundingBoxQuery = { field: string; value: BoundingBoxValue };
export type IntersectsBoundingBoxQuery = {
  field: string;
  value: BoundingBoxValue;
};
export type DoesNotIntersectBoundingBoxQuery = {
  field: string;
  value: BoundingBoxValue;
};
export type WithinPolygonQuery = { field: string; value: PolygonValue };
export type IntersectsPolygonQuery = { field: string; value: PolygonValue };
export type DoesNotIntersectPolygonQuery = {
  field: string;
  value: PolygonValue;
};
//
export type CenterPoint = { center: CenterPointTypes; distance: Distance };
export type CenterPointTypes = GeoPoint & { type: "Point" };
export type GeoPoint = { coordinates: Position; bbox?: BBox };
export type Position = Array<Coordinate>;

export type Fuzzy = boolean;
export type Coordinate = number;
export type BBox = Array<Coordinate>;
export type Distance = { value: number; unit: DistanceUnit };
export type DistanceUnit =
  | "MILLIMETERS"
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES";
export type BoundingBoxValue = {
  topLeft: WithinBoundingBoxPoint;
  bottomRight: WithinBoundingBoxPoint;
};
export type WithinBoundingBoxPoint = GeoPoint & { type: "Point" };
export type PolygonValue = Polygon & { type: "Polygon" };
export type Polygon = { coordinates: Array<LinearRing>; bbox?: BBox };
export type LinearRing = Array<Position>;

type ApiValueBaseType = string | number | boolean;
type ApiValueType = ApiValueBaseType[] | ApiValueBaseType;
type rid = string;

export type OntologyObjectV2 = { [key: string]: ApiValueType } & {
  __rid: rid;
  __primaryKey: ApiValueType;
};

export type PagedResponse<T> = {
  data: T[];
  nextPageToken?: string;
};

export type PageOptions = {
  pageSize?: number;
  pageToken?: string;
};
