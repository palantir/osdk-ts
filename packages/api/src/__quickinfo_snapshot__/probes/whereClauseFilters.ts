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

// Per-property filter unions that show up as the value side of a where clause
// (e.g. `{ fullName: <here> }`). These pin the exact operator vocabulary —
// `$eq`, `$contains`, `$within`, `$matchesRegex`, etc. — exposed for each
// scalar property type.

import type { ArrayFilter } from "../../aggregate/ArrayFilter.js";
import type { BaseFilter } from "../../aggregate/BaseFilter.js";
import type { BooleanFilter } from "../../aggregate/BooleanFilter.js";
import type { DatetimeFilter } from "../../aggregate/DatetimeFilter.js";
import type { GeoFilter } from "../../aggregate/GeoFilter.js";
import type { NumberFilter } from "../../aggregate/NumberFilter.js";
import type { StringFilter } from "../../aggregate/StringFilter.js";

/** The filter union allowed for a string-typed property in a where clause. */
declare const probe_string_filter: StringFilter;

/** The filter union allowed for a numeric-typed property (integer/long/double/float/short/byte/decimal). */
declare const probe_number_filter: NumberFilter;

/** The filter union allowed for a datetime/timestamp property. */
declare const probe_datetime_filter: DatetimeFilter;

/** The filter union allowed for a boolean property. */
declare const probe_boolean_filter: BooleanFilter;

/** The filter union allowed for a geopoint/geoshape property. */
declare const probe_geo_filter: GeoFilter;

/** The filter union allowed for an array property (multiplicity = true) of strings. */
declare const probe_array_filter_of_string: ArrayFilter<string>;

/** The fallback filter union for property types without a dedicated filter (e.g. attachment, mediaReference). */
declare const probe_base_filter_of_string: BaseFilter<string>;
