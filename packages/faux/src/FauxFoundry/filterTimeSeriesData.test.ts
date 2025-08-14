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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { filterTimeSeriesData } from "./filterTimeSeriesData.js";

/*

Client code looks like this:

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

and `{ $before: 7, $unit: "DAYS" }` should mean "start time is 7 days ago"
and `{ $after: 7, $unit: "DAYS" }` should mean "end time is 7 days from now"
*/

describe(filterTimeSeriesData, () => {
  beforeEach(() => {
    vi.useFakeTimers({
      now: new Date("2022-01-01T00:00:00Z"),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("properly handles $before", () => {
    expect(filterTimeSeriesData([
      { time: "2021-12-01T00:00:00Z", value: 1 },
      { time: "2021-12-26T00:00:00Z", value: 2 },
      { time: "2021-12-27T00:00:00Z", value: 3 },
    ], {
      range: {
        type: "relative",
        startTime: {
          when: "BEFORE",
          value: 7,
          unit: "DAYS",
        },
      },
    })).toEqual([
      { time: "2021-12-26T00:00:00Z", value: 2 },
      { time: "2021-12-27T00:00:00Z", value: 3 },
    ]);
  });

  it("properly handles $after", () => {
    expect(filterTimeSeriesData([
      { time: "2022-01-01T00:00:00Z", value: 1 },
      { time: "2022-01-02T00:00:00Z", value: 2 },
      { time: "2022-01-03T00:00:00Z", value: 3 },
      { time: "2022-02-03T00:00:00Z", value: 4 },
    ], {
      range: {
        type: "relative",
        endTime: {
          when: "AFTER",
          value: 7,
          unit: "DAYS",
        },
      },
    })).toEqual([
      { time: "2022-01-01T00:00:00Z", value: 1 },
      { time: "2022-01-02T00:00:00Z", value: 2 },
      { time: "2022-01-03T00:00:00Z", value: 3 },
    ]);
  });
});
