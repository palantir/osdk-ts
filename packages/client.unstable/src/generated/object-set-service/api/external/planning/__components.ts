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
  BooleanFilterValue as _api_BooleanFilterValue,
  DateFilterValue as _api_DateFilterValue,
  DecimalFilterValue as _api_DecimalFilterValue,
  Distance as _api_Distance,
  DoubleFilterValue as _api_DoubleFilterValue,
  EntityTypeRid as _api_EntityTypeRid,
  Fuzziness as _api_Fuzziness,
  GeoPointFilterValue as _api_GeoPointFilterValue,
  GeoShapeFilterValue as _api_GeoShapeFilterValue,
  GeoShapeSpatialFilterMode as _api_GeoShapeSpatialFilterMode,
  IntegerFilterValue as _api_IntegerFilterValue,
  LinkTypeRid as _api_LinkTypeRid,
  LongFilterValue as _api_LongFilterValue,
  MultiMatchFilterOperator as _api_MultiMatchFilterOperator,
  ObjectSet as _api_ObjectSet,
  ObjectSetContext as _api_ObjectSetContext,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyVersion as _api_OntologyVersion,
  PhraseMatchMode as _api_PhraseMatchMode,
  PropertyId as _api_PropertyId,
  PropertyTypeRid as _api_PropertyTypeRid,
  RelativePointInTime as _api_RelativePointInTime,
  StringFilterValue as _api_StringFilterValue,
  TimestampFilterValue as _api_TimestampFilterValue,
  TimeZoneId as _api_TimeZoneId,
  Vector as _api_Vector,
} from "../../__components.js";

/**
 * See com.palantir.object.set.api.AllPropertiesPropertySet.
 */
export interface AllPropertiesPropertySet {
}
/**
 * See com.palantir.object.set.api.AndFilter.
 */
export type AndFilter = Array<LogicalObjectSetFilter>;

/**
 * The bounds of a range filter.
 */
export interface Bound {
  type: BoundType;
  value: FilterValue;
}
/**
 * The type of bound of a range filter.
 */
export type BoundType = "INCLUSIVE" | "EXCLUSIVE";

/**
 * An object matches a DateRange iff the value of the provided date property is within the provided time range. The specified bounds will always have DateFilterValue as values. At least one of the bounds is guaranteed to be present.
 */
export interface DateRangeFilter {
  lowerBound?: Bound | null | undefined;
  property: _api_PropertyTypeRid;
  relativeDateMetadata?: RelativeDateRangeFilterMetadata | null | undefined;
  upperBound?: Bound | null | undefined;
}
/**
 * See com.palantir.object.set.api.ExactMatchFilter.
 */
export interface ExactMatchFilter {
  property: _api_PropertyTypeRid;
  values: Array<FilterValue>;
}
/**
 * Object Set containing objects from the Object Type Rid which match the given filter.
 */
export interface FilteredObjectSet {
  filter: LogicalObjectSetFilter;
  objectType: _api_ObjectTypeRid;
}
export interface FilterValue_string {
  type: "string";
  string: _api_StringFilterValue;
}

export interface FilterValue_integer {
  type: "integer";
  integer: _api_IntegerFilterValue;
}

export interface FilterValue_long {
  type: "long";
  long: _api_LongFilterValue;
}

export interface FilterValue_double {
  type: "double";
  double: _api_DoubleFilterValue;
}

export interface FilterValue_decimal {
  type: "decimal";
  decimal: _api_DecimalFilterValue;
}

export interface FilterValue_boolean {
  type: "boolean";
  boolean: _api_BooleanFilterValue;
}

export interface FilterValue_date {
  type: "date";
  date: _api_DateFilterValue;
}

export interface FilterValue_timestamp {
  type: "timestamp";
  timestamp: _api_TimestampFilterValue;
}

export interface FilterValue_geoPoint {
  type: "geoPoint";
  geoPoint: _api_GeoPointFilterValue;
}

export interface FilterValue_geoShape {
  type: "geoShape";
  geoShape: _api_GeoShapeFilterValue;
}
/**
 * The value on a filter.
 */
export type FilterValue =
  | FilterValue_string
  | FilterValue_integer
  | FilterValue_long
  | FilterValue_double
  | FilterValue_decimal
  | FilterValue_boolean
  | FilterValue_date
  | FilterValue_timestamp
  | FilterValue_geoPoint
  | FilterValue_geoShape;

/**
 * See com.palantir.object.set.api.GeoBoundingBoxFilter.
 */
export interface GeoBoundingBoxFilter {
  bottomRight: _api_GeoPointFilterValue;
  geoshapeMode?: _api_GeoShapeSpatialFilterMode | null | undefined;
  property: _api_PropertyTypeRid;
  topLeft: _api_GeoPointFilterValue;
}
/**
 * See com.palantir.object.set.api.GeoDistanceFilter.
 */
export interface GeoDistanceFilter {
  distance: _api_Distance;
  geopoint: _api_GeoPointFilterValue;
  property: _api_PropertyTypeRid;
}
/**
 * See com.palantir.object.set.api.GeoPolygonFilter.
 */
export interface GeoPolygonFilter {
  geoshapeMode?: _api_GeoShapeSpatialFilterMode | null | undefined;
  polygon: Array<_api_GeoPointFilterValue>;
  property: _api_PropertyTypeRid;
}
/**
 * Object Set containing objects present in all provided Object Sets.
 */
export interface IntersectedObjectSet {
  objectSets: Array<LogicalObjectSet>;
}
export interface JoinCondition_objectType {
  type: "objectType";
  objectType: ObjectTypeJoinCondition;
}

export interface JoinCondition_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyJoinCondition;
}
/**
 * Specifies which Object Sets to join, and how they should be joined.
 */
export type JoinCondition = JoinCondition_objectType | JoinCondition_manyToMany;

/**
 * Object Set containing objects resulted of a join between other Object Sets.
 */
export interface JoinedObjectSet {
  conditions: Array<JoinCondition>;
  select: SelectExpression;
}
/**
 * DEPRECATED: Use KnnObjectSetV2 instead.
 *
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
export interface KnnObjectSet {
  kValue: number;
  objectSet: LogicalObjectSet;
  propertyId: _api_PropertyId;
  vector: _api_Vector;
}
/**
 * ObjectSet containing the top k objects with propertyId nearest to the given vector.
 */
export interface KnnObjectSetV2 {
  kValue: number;
  objectSet: LogicalObjectSet;
  propertySet: PropertySet;
  vector: Record<_api_ObjectTypeRid, _api_Vector>;
}
export interface LogicalObjectSet_filter {
  type: "filter";
  filter: FilteredObjectSet;
}

export interface LogicalObjectSet_subtract {
  type: "subtract";
  subtract: SubtractedObjectSet;
}

export interface LogicalObjectSet_unioned {
  type: "unioned";
  unioned: UnionedObjectSet;
}

export interface LogicalObjectSet_intersected {
  type: "intersected";
  intersected: IntersectedObjectSet;
}

export interface LogicalObjectSet_joined {
  type: "joined";
  joined: JoinedObjectSet;
}

export interface LogicalObjectSet_reference {
  type: "reference";
  reference: ReferenceObjectSet;
}

export interface LogicalObjectSet_knn {
  type: "knn";
  knn: KnnObjectSet;
}

export interface LogicalObjectSet_knnV2 {
  type: "knnV2";
  knnV2: KnnObjectSetV2;
}
/**
 * The definition of a logical Object Set.
 */
export type LogicalObjectSet =
  | LogicalObjectSet_filter
  | LogicalObjectSet_subtract
  | LogicalObjectSet_unioned
  | LogicalObjectSet_intersected
  | LogicalObjectSet_joined
  | LogicalObjectSet_reference
  | LogicalObjectSet_knn
  | LogicalObjectSet_knnV2;

export interface LogicalObjectSetFilter_or {
  type: "or";
  or: OrFilter;
}

export interface LogicalObjectSetFilter_and {
  type: "and";
  and: AndFilter;
}

export interface LogicalObjectSetFilter_not {
  type: "not";
  not: NotFilter;
}

export interface LogicalObjectSetFilter_nonNull {
  type: "nonNull";
  nonNull: NonNullFilter;
}

export interface LogicalObjectSetFilter_matchAll {
  type: "matchAll";
  matchAll: MatchAllFilter;
}

export interface LogicalObjectSetFilter_exactMatch {
  type: "exactMatch";
  exactMatch: ExactMatchFilter;
}

export interface LogicalObjectSetFilter_range {
  type: "range";
  range: RangeFilter;
}

export interface LogicalObjectSetFilter_dateRange {
  type: "dateRange";
  dateRange: DateRangeFilter;
}

export interface LogicalObjectSetFilter_timeRange {
  type: "timeRange";
  timeRange: TimeRangeFilter;
}

export interface LogicalObjectSetFilter_geoBoundingBox {
  type: "geoBoundingBox";
  geoBoundingBox: GeoBoundingBoxFilter;
}

export interface LogicalObjectSetFilter_geoDistance {
  type: "geoDistance";
  geoDistance: GeoDistanceFilter;
}

export interface LogicalObjectSetFilter_geoPolygon {
  type: "geoPolygon";
  geoPolygon: GeoPolygonFilter;
}

export interface LogicalObjectSetFilter_terms {
  type: "terms";
  terms: TermsFilter;
}

export interface LogicalObjectSetFilter_wildcard {
  type: "wildcard";
  wildcard: WildcardFilter;
}

export interface LogicalObjectSetFilter_multiMatch {
  type: "multiMatch";
  multiMatch: MultiMatchFilter;
}

export interface LogicalObjectSetFilter_phrase {
  type: "phrase";
  phrase: PhraseFilter;
}

export interface LogicalObjectSetFilter_prefixOnLastToken {
  type: "prefixOnLastToken";
  prefixOnLastToken: PrefixOnLastTokenFilter;
}
/**
 * Filters to limit the number of objects in an Object Set.
 */
export type LogicalObjectSetFilter =
  | LogicalObjectSetFilter_or
  | LogicalObjectSetFilter_and
  | LogicalObjectSetFilter_not
  | LogicalObjectSetFilter_nonNull
  | LogicalObjectSetFilter_matchAll
  | LogicalObjectSetFilter_exactMatch
  | LogicalObjectSetFilter_range
  | LogicalObjectSetFilter_dateRange
  | LogicalObjectSetFilter_timeRange
  | LogicalObjectSetFilter_geoBoundingBox
  | LogicalObjectSetFilter_geoDistance
  | LogicalObjectSetFilter_geoPolygon
  | LogicalObjectSetFilter_terms
  | LogicalObjectSetFilter_wildcard
  | LogicalObjectSetFilter_multiMatch
  | LogicalObjectSetFilter_phrase
  | LogicalObjectSetFilter_prefixOnLastToken;

/**
 * The identifier for logical Object Sets. Used to connect Reference Object Sets with their definition.
 */
export type LogicalObjectSetId = string;
export interface LogicalObjectSetRequest {
  logicalObjectSetRequestOptions?:
    | LogicalObjectSetRequestOptions
    | null
    | undefined;
  objectSet: _api_ObjectSet;
  objectSetContext: _api_ObjectSetContext;
}
/**
 * Optional features to toggle when requesting a logical object set.
 */
export interface LogicalObjectSetRequestOptions {
  returnRelativeTimeFiltersMetadata?: boolean | null | undefined;
}
export interface LogicalObjectSetResponse {
  objectSets: Array<NamedLogicalObjectSet>;
  versions: Record<_api_EntityTypeRid, _api_OntologyVersion>;
}
/**
 * Condition encoding a join between two Object Sets via a many to many Link Type. The equivalent SQL expression would be `objectSetA.objectSetAProperty = manyToMany.manyToManyAProperty AND manyToMany.manyToManyBProperty = objectSetB.objectSetBProperty`.
 */
export interface ManyToManyJoinCondition {
  manyToMany: _api_LinkTypeRid;
  manyToManyAProperty: _api_PropertyTypeRid;
  manyToManyBProperty: _api_PropertyTypeRid;
  objectSetA: ReferenceObjectSet;
  objectSetAProperty: _api_PropertyTypeRid;
  objectSetB: ReferenceObjectSet;
  objectSetBProperty: _api_PropertyTypeRid;
}
/**
 * This filter matches all objects.
 */
export interface MatchAllFilter {
}
/**
 * See com.palantir.object.set.api.MultiMatchFilter.
 */
export interface MultiMatchFilter {
  fuzziness?: _api_Fuzziness | null | undefined;
  fuzzy?: boolean | null | undefined;
  operator: _api_MultiMatchFilterOperator;
  propertySet: PropertySet;
  query: _api_StringFilterValue;
}
/**
 * A logical Object Set and its identifier.
 */
export interface NamedLogicalObjectSet {
  id: LogicalObjectSetId;
  objectSet: LogicalObjectSet;
}
/**
 * An object matches a NonNullFilter iff its value for the specified property is not null.
 */
export interface NonNullFilter {
  property: _api_PropertyTypeRid;
}
/**
 * See com.palantir.object.set.api.NotFilter.
 */
export type NotFilter = LogicalObjectSetFilter;

/**
 * Condition encoding a join between two Object Sets. The equivalent SQL expression would be `leftObjectSet.leftProperty = rightObjectSet.rightProperty`.
 */
export interface ObjectTypeJoinCondition {
  leftObjectSet: ReferenceObjectSet;
  leftProperty: _api_PropertyTypeRid;
  rightObjectSet: ReferenceObjectSet;
  rightProperty: _api_PropertyTypeRid;
}
/**
 * See com.palantir.object.set.api.OrFilter.
 */
export type OrFilter = Array<LogicalObjectSetFilter>;

/**
 * See com.palantir.object.set.api.PhraseFilter.
 */
export interface PhraseFilter {
  phraseMatchMode: _api_PhraseMatchMode;
  propertySet: PropertySet;
  query: _api_StringFilterValue;
}
/**
 * See com.palantir.object.set.api.PrefixOnLastTokenFilter.
 */
export interface PrefixOnLastTokenFilter {
  property: _api_PropertyTypeRid;
  query: _api_StringFilterValue;
}
/**
 * See com.palantir.object.set.api.PropertyAllowlistPropertySet.
 */
export interface PropertyAllowlistPropertySet {
  properties: Array<_api_PropertyTypeRid>;
}
export interface PropertySet_propertyAllowlist {
  type: "propertyAllowlist";
  propertyAllowlist: PropertyAllowlistPropertySet;
}

export interface PropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
/**
 * See com.palantir.object.set.api.PropertySet.
 */
export type PropertySet =
  | PropertySet_propertyAllowlist
  | PropertySet_allProperties;

/**
 * See com.palantir.object.set.api.RangeFilter. At least one of the bounds is guaranteed to be present.
 */
export interface RangeFilter {
  lowerBound?: Bound | null | undefined;
  property: _api_PropertyTypeRid;
  upperBound?: Bound | null | undefined;
}
/**
 * A reference to another logical Object Set. Used to avoid re-defining the whole Object Set.
 */
export interface ReferenceObjectSet {
  id: LogicalObjectSetId;
}
/**
 * Metadata describing a date range that is defined relative to the time a query is executed, aligned to calendar days in a specified time zone. This is used by DateRangeFilter to specify date bounds that shift dynamically based on when the query is run, rather than using fixed dates.
 */
export interface RelativeDateRangeFilterMetadata {
  sinceRelativePointInTime?: _api_RelativePointInTime | null | undefined;
  timeZoneId: _api_TimeZoneId;
  untilRelativePointInTime?: _api_RelativePointInTime | null | undefined;
}
/**
 * Metadata describing a time range that is defined relative to the time a query is executed. This is used in TimeRangeFilter to specify bounds that move in relation to "now" (the query time),  rather than being fixed timestamps. Either or both of the lower and upper bounds can be specified  using millisecond offsets from the query time.
 */
export interface RelativeTimeRangeFilterMetadata {
  sinceRelativeMillis?: number | null | undefined;
  untilRelativeMillis?: number | null | undefined;
}
export interface SelectExpression_singleObjectSet {
  type: "singleObjectSet";
  singleObjectSet: ReferenceObjectSet;
}
/**
 * The output of the Joined Object Set. For example, in case of Object Type Join Conditions, which side (`left` or `right`) is the selected side. Will always reference an Object Set in the Join Condition.
 */
export type SelectExpression = SelectExpression_singleObjectSet;

/**
 * Object Set containing objects present in the minuend but not in any of the subtrahends.
 */
export interface SubtractedObjectSet {
  minuend: LogicalObjectSet;
  subtrahends: Array<LogicalObjectSet>;
}
/**
 * See com.palantir.object.set.api.TermsFilter.
 */
export interface TermsFilter {
  propertySet: PropertySet;
  terms: Array<_api_StringFilterValue>;
}
/**
 * An object matches a TimeRange iff the value of the provided date property is within the provided time range. The specified bounds will always have TimestampFilterValue as values. At least one of the bounds is guaranteed to be present.
 */
export interface TimeRangeFilter {
  lowerBound?: Bound | null | undefined;
  property: _api_PropertyTypeRid;
  relativeTimeMetadata?: RelativeTimeRangeFilterMetadata | null | undefined;
  upperBound?: Bound | null | undefined;
}
/**
 * Object Set containing objects present in at least one of the provided Object Sets.
 */
export interface UnionedObjectSet {
  objectSets: Array<LogicalObjectSet>;
}
/**
 * See com.palantir.object.set.api.WildcardFilter.
 */
export interface WildcardFilter {
  propertySet: PropertySet;
  query: _api_StringFilterValue;
}
