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

import type { AndFilter } from "./AndFilter.js";
import type { DateRangeFilter } from "./DateRangeFilter.js";
import type { ExactMatchFilter } from "./ExactMatchFilter.js";
import type { GeoBoundingBoxFilter } from "./GeoBoundingBoxFilter.js";
import type { GeoDistanceFilter } from "./GeoDistanceFilter.js";
import type { GeoPolygonFilter } from "./GeoPolygonFilter.js";
import type { MatchAllFilter } from "./MatchAllFilter.js";
import type { MultiMatchFilter } from "./MultiMatchFilter.js";
import type { NonNullFilter } from "./NonNullFilter.js";
import type { NotFilter } from "./NotFilter.js";
import type { OrFilter } from "./OrFilter.js";
import type { PhraseFilter } from "./PhraseFilter.js";
import type { PrefixOnLastTokenFilter } from "./PrefixOnLastTokenFilter.js";
import type { RangeFilter } from "./RangeFilter.js";
import type { TermsFilter } from "./TermsFilter.js";
import type { TimeRangeFilter } from "./TimeRangeFilter.js";
import type { WildcardFilter } from "./WildcardFilter.js";
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
