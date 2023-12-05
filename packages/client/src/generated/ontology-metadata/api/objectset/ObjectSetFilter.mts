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

import type { AndFilter } from "./AndFilter.mjs";
import type { ExactMatchFilter } from "./ExactMatchFilter.mjs";
import type { GeoBoundingBoxFilter } from "./GeoBoundingBoxFilter.mjs";
import type { GeoDistanceFilter } from "./GeoDistanceFilter.mjs";
import type { GeoPolygonFilter } from "./GeoPolygonFilter.mjs";
import type { GeoShapeFilter } from "./GeoShapeFilter.mjs";
import type { HasPropertyFilter } from "./HasPropertyFilter.mjs";
import type { LinkPresenceFilter } from "./LinkPresenceFilter.mjs";
import type { MultiMatchFilter } from "./MultiMatchFilter.mjs";
import type { NotFilter } from "./NotFilter.mjs";
import type { ObjectTypeFilter } from "./ObjectTypeFilter.mjs";
import type { OrFilter } from "./OrFilter.mjs";
import type { ParameterizedExactMatchFilter } from "./ParameterizedExactMatchFilter.mjs";
import type { ParameterizedRangeFilter } from "./ParameterizedRangeFilter.mjs";
import type { ParameterizedTermsFilter } from "./ParameterizedTermsFilter.mjs";
import type { ParameterizedWildcardFilter } from "./ParameterizedWildcardFilter.mjs";
import type { PhraseFilter } from "./PhraseFilter.mjs";
import type { PrefixOnLastTokenFilter } from "./PrefixOnLastTokenFilter.mjs";
import type { RangeFilter } from "./RangeFilter.mjs";
import type { RelativeDateRangeFilter } from "./RelativeDateRangeFilter.mjs";
import type { RelativeTimeRangeFilter } from "./RelativeTimeRangeFilter.mjs";
import type { TermsFilter } from "./TermsFilter.mjs";
import type { UserContextFilter } from "./UserContextFilter.mjs";
import type { WildcardFilter } from "./WildcardFilter.mjs";
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
