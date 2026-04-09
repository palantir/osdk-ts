/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  ObjectTypeId as _api_ObjectTypeId,
  PropertyId as _api_PropertyId,
  PropertyTypeId as _api_PropertyTypeId,
  RelationId as _api_RelationId,
} from "../__components.js";
import type {
  ConditionValueId as _api_types_ConditionValueId,
  RelationSide as _api_types_RelationSide,
} from "../types/__components.js";
export interface AllPropertiesPropertySet {
}
/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an AndFilter iff it matches all of the filters.
 */
export interface AndFilter {
  filters: Array<ObjectSetFilter>;
}
export interface Distance {
  unit: DistanceUnit;
  value: number | "NaN" | "Infinity" | "-Infinity";
}
export type DistanceUnit =
  | "MILLIMETER"
  | "CENTIMETER"
  | "METER"
  | "KILOMETER"
  | "INCH"
  | "FOOT"
  | "YARD"
  | "MILE"
  | "NAUTICAL_MILE";

/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ExactMatchFilter {
  propertyId: _api_PropertyTypeId;
  terms: Array<any>;
}
export interface FilterParameter_unresolved {
  type: "unresolved";
  unresolved: UnresolvedFilterParameter;
}

export interface FilterParameter_resolved {
  type: "resolved";
  resolved: ResolvedFilterParameter;
}
export type FilterParameter =
  | FilterParameter_unresolved
  | FilterParameter_resolved;

export type FilterValue = any;

/**
 * An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
 * Works on geohash properties.
 */
export interface GeoBoundingBoxFilter {
  bottomRight: string;
  propertyId: _api_PropertyTypeId;
  topLeft: string;
}
/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
export interface GeoDistanceFilter {
  distance: Distance;
  location: string;
  propertyId: _api_PropertyTypeId;
}
/**
 * An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
 */
export interface GeoPolygonFilter {
  polygon: Array<string>;
  propertyId: _api_PropertyTypeId;
}
/**
 * Filter properties of type geo_shape or geo_point.
 */
export interface GeoShapeFilter {
  geoShapeQuery: GeoShapeQuery;
  spatialFilterMode: GeoShapeSpatialFilterMode;
}
export interface GeoShapeQuery_geoBoundingBoxFilter {
  type: "geoBoundingBoxFilter";
  geoBoundingBoxFilter: GeoBoundingBoxFilter;
}

export interface GeoShapeQuery_geoPolygonFilter {
  type: "geoPolygonFilter";
  geoPolygonFilter: GeoPolygonFilter;
}
/**
 * Union type for valid queries over geo shape properties.
 */
export type GeoShapeQuery =
  | GeoShapeQuery_geoBoundingBoxFilter
  | GeoShapeQuery_geoPolygonFilter;

/**
 * Geometry operation under which to evaluate the geo shape query.
 */
export type GeoShapeSpatialFilterMode = "INTERSECTS" | "DISJOINT" | "WITHIN";

/**
 * An object matches a HasPropertyFilter iff it has a property with the provided PropertyId.
 */
export interface HasPropertyFilter {
  propertyId: _api_PropertyTypeId;
}
/**
 * An object matches a LinkPresenceFilter iff it contains a link to any object along the provided RelationId
 * and if the starting object is on the provided RelationSide of the relation.
 */
export interface LinkPresenceFilter {
  relationId: _api_RelationId;
  relationSide: _api_types_RelationSide;
}
/**
 * An object matches a MultiMatchFilter iff any of the fields matches the query, or in the case where a
 * property whitelist is provided - iff any of the specifed fields matches the query.
 */
export interface MultiMatchFilter {
  fuzzy: boolean;
  operator?: MultiMatchFilterOperator | null | undefined;
  propertySet: PropertySet;
  query: string;
}
export type MultiMatchFilterOperator = "AND" | "OR";

/**
 * The current user's attributes under the given key. This resolves to a list of values.
 */
export interface MultipassAttribute {
  key: string;
}
/**
 * The current user's Multipass user id.
 */
export interface MultipassUserId {
}
/**
 * An object matches a NotFilter iff it does not match the provided filter.
 */
export interface NotFilter {
  filter: ObjectSetFilter;
}
export interface ObjectSetFilter_or {
  type: "or";
  or: OrFilter;
}

export interface ObjectSetFilter_and {
  type: "and";
  and: AndFilter;
}

export interface ObjectSetFilter_not {
  type: "not";
  not: NotFilter;
}

export interface ObjectSetFilter_range {
  type: "range";
  range: RangeFilter;
}

export interface ObjectSetFilter_wildcard {
  type: "wildcard";
  wildcard: WildcardFilter;
}

export interface ObjectSetFilter_terms {
  type: "terms";
  terms: TermsFilter;
}

export interface ObjectSetFilter_exactMatch {
  type: "exactMatch";
  exactMatch: ExactMatchFilter;
}

export interface ObjectSetFilter_phrase {
  type: "phrase";
  phrase: PhraseFilter;
}

export interface ObjectSetFilter_prefixOnLastToken {
  type: "prefixOnLastToken";
  prefixOnLastToken: PrefixOnLastTokenFilter;
}

export interface ObjectSetFilter_geoBoundingBox {
  type: "geoBoundingBox";
  geoBoundingBox: GeoBoundingBoxFilter;
}

export interface ObjectSetFilter_geoDistance {
  type: "geoDistance";
  geoDistance: GeoDistanceFilter;
}

export interface ObjectSetFilter_geoPolygon {
  type: "geoPolygon";
  geoPolygon: GeoPolygonFilter;
}

export interface ObjectSetFilter_geoShape {
  type: "geoShape";
  geoShape: GeoShapeFilter;
}

export interface ObjectSetFilter_objectType {
  type: "objectType";
  objectType: ObjectTypeFilter;
}

export interface ObjectSetFilter_hasProperty {
  type: "hasProperty";
  hasProperty: HasPropertyFilter;
}

export interface ObjectSetFilter_linkPresence {
  type: "linkPresence";
  linkPresence: LinkPresenceFilter;
}

export interface ObjectSetFilter_multiMatch {
  type: "multiMatch";
  multiMatch: MultiMatchFilter;
}

export interface ObjectSetFilter_relativeDateRange {
  type: "relativeDateRange";
  relativeDateRange: RelativeDateRangeFilter;
}

export interface ObjectSetFilter_relativeTimeRange {
  type: "relativeTimeRange";
  relativeTimeRange: RelativeTimeRangeFilter;
}

export interface ObjectSetFilter_parameterizedRange {
  type: "parameterizedRange";
  parameterizedRange: ParameterizedRangeFilter;
}

export interface ObjectSetFilter_parameterizedWildcard {
  type: "parameterizedWildcard";
  parameterizedWildcard: ParameterizedWildcardFilter;
}

export interface ObjectSetFilter_parameterizedTerms {
  type: "parameterizedTerms";
  parameterizedTerms: ParameterizedTermsFilter;
}

export interface ObjectSetFilter_parameterizedExactMatch {
  type: "parameterizedExactMatch";
  parameterizedExactMatch: ParameterizedExactMatchFilter;
}

export interface ObjectSetFilter_userContext {
  type: "userContext";
  userContext: UserContextFilter;
}
/**
 * Filter to be applied to an Object Set. Refer to documentation of a particular ObjectSetFilter for details.
 */
export type ObjectSetFilter =
  | ObjectSetFilter_or
  | ObjectSetFilter_and
  | ObjectSetFilter_not
  | ObjectSetFilter_range
  | ObjectSetFilter_wildcard
  | ObjectSetFilter_terms
  | ObjectSetFilter_exactMatch
  | ObjectSetFilter_phrase
  | ObjectSetFilter_prefixOnLastToken
  | ObjectSetFilter_geoBoundingBox
  | ObjectSetFilter_geoDistance
  | ObjectSetFilter_geoPolygon
  | ObjectSetFilter_geoShape
  | ObjectSetFilter_objectType
  | ObjectSetFilter_hasProperty
  | ObjectSetFilter_linkPresence
  | ObjectSetFilter_multiMatch
  | ObjectSetFilter_relativeDateRange
  | ObjectSetFilter_relativeTimeRange
  | ObjectSetFilter_parameterizedRange
  | ObjectSetFilter_parameterizedWildcard
  | ObjectSetFilter_parameterizedTerms
  | ObjectSetFilter_parameterizedExactMatch
  | ObjectSetFilter_userContext;

/**
 * An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
 */
export interface ObjectTypeFilter {
  objectTypeId: _api_ObjectTypeId;
}
/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an AndFilter iff it matches all of the filters.
 */
export interface OntologyIrAndFilter {
  filters: Array<OntologyIrObjectSetFilter>;
}
/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface OntologyIrExactMatchFilter {
  propertyId: _api_ObjectTypeFieldApiName;
  terms: Array<any>;
}
/**
 * An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
 * Works on geohash properties.
 */
export interface OntologyIrGeoBoundingBoxFilter {
  bottomRight: string;
  propertyId: _api_ObjectTypeFieldApiName;
  topLeft: string;
}
/**
 * An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
 * of the provided location i.e. sits within a circle centered at the provided location.
 */
export interface OntologyIrGeoDistanceFilter {
  distance: Distance;
  location: string;
  propertyId: _api_ObjectTypeFieldApiName;
}
/**
 * An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
 */
export interface OntologyIrGeoPolygonFilter {
  polygon: Array<string>;
  propertyId: _api_ObjectTypeFieldApiName;
}
/**
 * Filter properties of type geo_shape or geo_point.
 */
export interface OntologyIrGeoShapeFilter {
  geoShapeQuery: OntologyIrGeoShapeQuery;
  spatialFilterMode: GeoShapeSpatialFilterMode;
}
export interface OntologyIrGeoShapeQuery_geoBoundingBoxFilter {
  type: "geoBoundingBoxFilter";
  geoBoundingBoxFilter: OntologyIrGeoBoundingBoxFilter;
}

export interface OntologyIrGeoShapeQuery_geoPolygonFilter {
  type: "geoPolygonFilter";
  geoPolygonFilter: OntologyIrGeoPolygonFilter;
}
/**
 * Union type for valid queries over geo shape properties.
 */
export type OntologyIrGeoShapeQuery =
  | OntologyIrGeoShapeQuery_geoBoundingBoxFilter
  | OntologyIrGeoShapeQuery_geoPolygonFilter;

/**
 * An object matches a HasPropertyFilter iff it has a property with the provided PropertyId.
 */
export interface OntologyIrHasPropertyFilter {
  propertyId: _api_ObjectTypeFieldApiName;
}
/**
 * An object matches a MultiMatchFilter iff any of the fields matches the query, or in the case where a
 * property whitelist is provided - iff any of the specifed fields matches the query.
 */
export interface OntologyIrMultiMatchFilter {
  fuzzy: boolean;
  operator?: MultiMatchFilterOperator | null | undefined;
  propertySet: OntologyIrPropertySet;
  query: string;
}
/**
 * An object matches a NotFilter iff it does not match the provided filter.
 */
export interface OntologyIrNotFilter {
  filter: OntologyIrObjectSetFilter;
}
export interface OntologyIrObjectSetFilter_or {
  type: "or";
  or: OntologyIrOrFilter;
}

export interface OntologyIrObjectSetFilter_and {
  type: "and";
  and: OntologyIrAndFilter;
}

export interface OntologyIrObjectSetFilter_not {
  type: "not";
  not: OntologyIrNotFilter;
}

export interface OntologyIrObjectSetFilter_range {
  type: "range";
  range: OntologyIrRangeFilter;
}

export interface OntologyIrObjectSetFilter_wildcard {
  type: "wildcard";
  wildcard: OntologyIrWildcardFilter;
}

export interface OntologyIrObjectSetFilter_terms {
  type: "terms";
  terms: OntologyIrTermsFilter;
}

export interface OntologyIrObjectSetFilter_exactMatch {
  type: "exactMatch";
  exactMatch: OntologyIrExactMatchFilter;
}

export interface OntologyIrObjectSetFilter_phrase {
  type: "phrase";
  phrase: OntologyIrPhraseFilter;
}

export interface OntologyIrObjectSetFilter_prefixOnLastToken {
  type: "prefixOnLastToken";
  prefixOnLastToken: OntologyIrPrefixOnLastTokenFilter;
}

export interface OntologyIrObjectSetFilter_geoBoundingBox {
  type: "geoBoundingBox";
  geoBoundingBox: OntologyIrGeoBoundingBoxFilter;
}

export interface OntologyIrObjectSetFilter_geoDistance {
  type: "geoDistance";
  geoDistance: OntologyIrGeoDistanceFilter;
}

export interface OntologyIrObjectSetFilter_geoPolygon {
  type: "geoPolygon";
  geoPolygon: OntologyIrGeoPolygonFilter;
}

export interface OntologyIrObjectSetFilter_geoShape {
  type: "geoShape";
  geoShape: OntologyIrGeoShapeFilter;
}

export interface OntologyIrObjectSetFilter_objectType {
  type: "objectType";
  objectType: OntologyIrObjectTypeFilter;
}

export interface OntologyIrObjectSetFilter_hasProperty {
  type: "hasProperty";
  hasProperty: OntologyIrHasPropertyFilter;
}

export interface OntologyIrObjectSetFilter_linkPresence {
  type: "linkPresence";
  linkPresence: LinkPresenceFilter;
}

export interface OntologyIrObjectSetFilter_multiMatch {
  type: "multiMatch";
  multiMatch: OntologyIrMultiMatchFilter;
}

export interface OntologyIrObjectSetFilter_relativeDateRange {
  type: "relativeDateRange";
  relativeDateRange: OntologyIrRelativeDateRangeFilter;
}

export interface OntologyIrObjectSetFilter_relativeTimeRange {
  type: "relativeTimeRange";
  relativeTimeRange: OntologyIrRelativeTimeRangeFilter;
}

export interface OntologyIrObjectSetFilter_parameterizedRange {
  type: "parameterizedRange";
  parameterizedRange: OntologyIrParameterizedRangeFilter;
}

export interface OntologyIrObjectSetFilter_parameterizedWildcard {
  type: "parameterizedWildcard";
  parameterizedWildcard: OntologyIrParameterizedWildcardFilter;
}

export interface OntologyIrObjectSetFilter_parameterizedTerms {
  type: "parameterizedTerms";
  parameterizedTerms: OntologyIrParameterizedTermsFilter;
}

export interface OntologyIrObjectSetFilter_parameterizedExactMatch {
  type: "parameterizedExactMatch";
  parameterizedExactMatch: OntologyIrParameterizedExactMatchFilter;
}

export interface OntologyIrObjectSetFilter_userContext {
  type: "userContext";
  userContext: UserContextFilter;
}
/**
 * Filter to be applied to an Object Set. Refer to documentation of a particular ObjectSetFilter for details.
 */
export type OntologyIrObjectSetFilter =
  | OntologyIrObjectSetFilter_or
  | OntologyIrObjectSetFilter_and
  | OntologyIrObjectSetFilter_not
  | OntologyIrObjectSetFilter_range
  | OntologyIrObjectSetFilter_wildcard
  | OntologyIrObjectSetFilter_terms
  | OntologyIrObjectSetFilter_exactMatch
  | OntologyIrObjectSetFilter_phrase
  | OntologyIrObjectSetFilter_prefixOnLastToken
  | OntologyIrObjectSetFilter_geoBoundingBox
  | OntologyIrObjectSetFilter_geoDistance
  | OntologyIrObjectSetFilter_geoPolygon
  | OntologyIrObjectSetFilter_geoShape
  | OntologyIrObjectSetFilter_objectType
  | OntologyIrObjectSetFilter_hasProperty
  | OntologyIrObjectSetFilter_linkPresence
  | OntologyIrObjectSetFilter_multiMatch
  | OntologyIrObjectSetFilter_relativeDateRange
  | OntologyIrObjectSetFilter_relativeTimeRange
  | OntologyIrObjectSetFilter_parameterizedRange
  | OntologyIrObjectSetFilter_parameterizedWildcard
  | OntologyIrObjectSetFilter_parameterizedTerms
  | OntologyIrObjectSetFilter_parameterizedExactMatch
  | OntologyIrObjectSetFilter_userContext;

/**
 * An object matches an ObjectTypeFilter iff its ObjectTypeId matches the provided ObjectTypeId.
 */
export interface OntologyIrObjectTypeFilter {
  objectTypeId: _api_ObjectTypeApiName;
}
/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an OrFilter iff it matches at least one of the filters.
 */
export interface OntologyIrOrFilter {
  filters: Array<OntologyIrObjectSetFilter>;
}
/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface OntologyIrParameterizedExactMatchFilter {
  propertyId: _api_ObjectTypeFieldApiName;
  terms: Array<FilterParameter>;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface OntologyIrParameterizedRangeFilter {
  gt?: FilterParameter | null | undefined;
  gte?: FilterParameter | null | undefined;
  lt?: FilterParameter | null | undefined;
  lte?: FilterParameter | null | undefined;
  propertyId: _api_ObjectTypeFieldApiName;
}
/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface OntologyIrParameterizedTermsFilter {
  propertyId?: _api_ObjectTypeFieldApiName | null | undefined;
  terms: Array<FilterParameter>;
}
/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
export interface OntologyIrParameterizedWildcardFilter {
  propertyId?: _api_ObjectTypeFieldApiName | null | undefined;
  term: FilterParameter;
}
/**
 * An object matches a PhraseFilter iff the specified phrase matches it according to the PhraseMatchMode specified.
 */
export interface OntologyIrPhraseFilter {
  matchMode?: PhraseMatchMode | null | undefined;
  phrase: string;
  propertySet?: OntologyIrPropertySet | null | undefined;
}
/**
 * An object matches a PrefixOnLastTokenFilter iff the specified property matches all tokens in the query string,
 * using exact match for every token except for the last, and prefix match for the last token. The tokens are
 * generated by analyzing the query string using the analyzer for the property being searched on. Ordering of
 * tokens in the query string is not checked when performing the matches. If the field is not analyzed, the
 * filter will be equivalent to a Phrase filter.
 * Only works on string properties. OSS will throw an exception if the property type is not string.
 */
export interface OntologyIrPrefixOnLastTokenFilter {
  propertyId: _api_ObjectTypeFieldApiName;
  query: string;
}
export interface OntologyIrPropertySet_propertyWhitelist {
  type: "propertyWhitelist";
  propertyWhitelist: OntologyIrPropertyWhitelistPropertySet;
}

export interface OntologyIrPropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
export type OntologyIrPropertySet =
  | OntologyIrPropertySet_propertyWhitelist
  | OntologyIrPropertySet_allProperties;

export interface OntologyIrPropertyWhitelistPropertySet {
  properties: Array<_api_ObjectTypeFieldApiName>;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface OntologyIrRangeFilter {
  gt?: any | null | undefined;
  gte?: any | null | undefined;
  lt?: any | null | undefined;
  lte?: any | null | undefined;
  propertyId: _api_ObjectTypeFieldApiName;
}
/**
 * An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided time range.
 */
export interface OntologyIrRelativeDateRangeFilter {
  propertyId: _api_ObjectTypeFieldApiName;
  sinceRelativePointInTime?: RelativePointInTime | null | undefined;
  timeZoneId: TimeZoneId;
  untilRelativePointInTime?: RelativePointInTime | null | undefined;
}
/**
 * An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the provided time range.
 */
export interface OntologyIrRelativeTimeRangeFilter {
  propertyId: _api_ObjectTypeFieldApiName;
  sinceRelativeMillis?: number | null | undefined;
  untilRelativeMillis?: number | null | undefined;
}
/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface OntologyIrTermsFilter {
  propertyId?: _api_ObjectTypeFieldApiName | null | undefined;
  terms: Array<any>;
}
/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
export interface OntologyIrWildcardFilter {
  propertyId?: _api_ObjectTypeFieldApiName | null | undefined;
  term: string;
}
/**
 * An ObjectSetFilter used to combine multiple ObjectSetFilters.
 * An object matches an OrFilter iff it matches at least one of the filters.
 */
export interface OrFilter {
  filters: Array<ObjectSetFilter>;
}
/**
 * An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
 * If the property is of string type, the index for that property must define a .raw multifield of type keyword.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ParameterizedExactMatchFilter {
  propertyId: _api_PropertyTypeId;
  terms: Array<FilterParameter>;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface ParameterizedRangeFilter {
  gt?: FilterParameter | null | undefined;
  gte?: FilterParameter | null | undefined;
  lt?: FilterParameter | null | undefined;
  lte?: FilterParameter | null | undefined;
  propertyId: _api_PropertyTypeId;
}
/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ParameterizedTermsFilter {
  propertyId?: _api_PropertyTypeId | null | undefined;
  terms: Array<FilterParameter>;
}
/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
export interface ParameterizedWildcardFilter {
  propertyId?: _api_PropertyTypeId | null | undefined;
  term: FilterParameter;
}
/**
 * An object matches a PhraseFilter iff the specified phrase matches it according to the PhraseMatchMode specified.
 */
export interface PhraseFilter {
  matchMode?: PhraseMatchMode | null | undefined;
  phrase: string;
  propertySet?: PropertySet | null | undefined;
}
/**
 * Defines how phrase search matches results.
 */
export type PhraseMatchMode = "PHRASE" | "PHRASE_PREFIX";

/**
 * An object matches a PrefixOnLastTokenFilter iff the specified property matches all tokens in the query string,
 * using exact match for every token except for the last, and prefix match for the last token. The tokens are
 * generated by analyzing the query string using the analyzer for the property being searched on. Ordering of
 * tokens in the query string is not checked when performing the matches. If the field is not analyzed, the
 * filter will be equivalent to a Phrase filter.
 * Only works on string properties. OSS will throw an exception if the property type is not string.
 */
export interface PrefixOnLastTokenFilter {
  propertyId: _api_PropertyTypeId;
  query: string;
}
export interface PropertySet_propertyWhitelist {
  type: "propertyWhitelist";
  propertyWhitelist: PropertyWhitelistPropertySet;
}

export interface PropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
export type PropertySet =
  | PropertySet_propertyWhitelist
  | PropertySet_allProperties;

export interface PropertyWhitelistPropertySet {
  properties: Array<_api_PropertyTypeId>;
}
/**
 * An object matches a RangeFilter iff the value of the provided property is within provided bounds.
 */
export interface RangeFilter {
  gt?: any | null | undefined;
  gte?: any | null | undefined;
  lt?: any | null | undefined;
  lte?: any | null | undefined;
  propertyId: _api_PropertyTypeId;
}
/**
 * An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided time range.
 */
export interface RelativeDateRangeFilter {
  propertyId: _api_PropertyTypeId;
  sinceRelativePointInTime?: RelativePointInTime | null | undefined;
  timeZoneId: TimeZoneId;
  untilRelativePointInTime?: RelativePointInTime | null | undefined;
}
export interface RelativePointInTime {
  timeUnit: RelativeTimeUnit;
  value: number;
}
/**
 * An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the provided time range.
 */
export interface RelativeTimeRangeFilter {
  propertyId: _api_PropertyTypeId;
  sinceRelativeMillis?: number | null | undefined;
  untilRelativeMillis?: number | null | undefined;
}
export type RelativeTimeUnit = "DAY" | "WEEK" | "MONTH" | "YEAR";
export interface ResolvedFilterParameter {
  value: FilterValue;
}
/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface TermsFilter {
  propertyId?: _api_PropertyTypeId | null | undefined;
  terms: Array<any>;
}
/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
export type TimeZoneId = string;
export interface UnresolvedFilterParameter {
  defaultValue?: FilterValue | null | undefined;
  description?: string | null | undefined;
  name: string;
  parameterId: _api_types_ConditionValueId;
}
/**
 * An object matches an UserContextFilter iff the value of the provided property is exactly equal to the provided user context.
 */
export interface UserContextFilter {
  propertyId: _api_PropertyId;
  userContext: UserContextValue;
}
export interface UserContextValue_multipassUserId {
  type: "multipassUserId";
  multipassUserId: MultipassUserId;
}

export interface UserContextValue_multipassAttribute {
  type: "multipassAttribute";
  multipassAttribute: MultipassAttribute;
}
/**
 * Represents a value that is resolved at runtime via the context of who is querying the object set.
 */
export type UserContextValue =
  | UserContextValue_multipassUserId
  | UserContextValue_multipassAttribute;

/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
export interface WildcardFilter {
  propertyId?: _api_PropertyTypeId | null | undefined;
  term: string;
}
