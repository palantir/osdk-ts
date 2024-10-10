/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { TimeSeriesQuery } from "@osdk/api";
import { TimeseriesDurationMapping, TimeSeriesPoint } from "@osdk/api";
import type { TimeRange } from "@osdk/internal.foundry.core";
import { it } from "vitest";
import { iterateReadableStream, parseStreamedResponse } from "./streamutils.js";

export function getTimeRange(body: TimeSeriesQuery): TimeRange {
  if ("$startTime" in body || "$endTime" in body) {
    return {
      type: "absolute",
      startTime: body.$startTime,
      endTime: body.$endTime,
    };
  }
  return body.$before
    ? {
      type: "relative",
      startTime: {
        when: "BEFORE",
        value: body.$before,
        unit: TimeseriesDurationMapping[body.$unit],
      },
    }
    : {
      type: "relative",
      endTime: {
        when: "AFTER",
        value: body.$after!,
        unit: TimeseriesDurationMapping[body.$unit],
      },
    };
}

export async function* asyncIterPointsHelper<
  T extends number | string | GeoJSON.Point,
>(
  iterator: Blob,
) {
  const reader = iterator.stream().getReader();
  for await (
    const point of parseStreamedResponse(iterateReadableStream(reader))
  ) {
    yield {
      time: point.time,
      value: point.value as T,
    };
  }
}
