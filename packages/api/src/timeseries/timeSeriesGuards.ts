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
  AbsoluteTimeRange,
  RelativeTimeRange,
  TimeSeriesQuery,
  TimeSeriesQueryV2,
  TimeSeriesQueryWrapper,
  TimeSeriesRange,
} from "./timeseries.js";

/**
 * Type Guards to handle union time series types.
 */

/**
 * Checks if the query is a TimeSeriesQueryV2 (new nested version)
 * by verifying that it has any of the available operations:
 * - `range`
 */
export function isTimeSeriesQueryV2(
  query: TimeSeriesQueryWrapper,
): query is TimeSeriesQueryV2 {
  return "range" in query;
}

/**
 * Checks if the query is a legacy TimeSeriesQuery type.
 * Since legacy queries have a flat structure, they do not include nested operations
 * such as the `range` operation used in TimeSeriesQueryV2.
 */
export function isLegacyTimeSeriesQuery(
  query: TimeSeriesQueryWrapper,
): query is TimeSeriesQuery {
  return !("range" in query);
}

// Type Guards for TimeRanges

export function isAbsoluteTimeRange(
  range: TimeSeriesRange,
): range is AbsoluteTimeRange {
  return "startTime" in range || "endTime" in range;
}

export function isRelativeTimeRange(
  range: TimeSeriesRange,
): range is RelativeTimeRange {
  return "unit" in range && ("before" in range || "after" in range);
}
