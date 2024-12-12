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
  StreamTimeSeriesValuesRequest,
  StreamTimeSeriesValuesResponse,
  TimeSeriesPoint,
} from "@osdk/internal.foundry.core";
import stableStringify from "json-stable-stringify";

const pointPrimaryKey1: string = JSON.stringify({
  primaryKey: "50030",
  propertyName: "employeeLocation",
});

const pointPrimaryKey2: string = JSON.stringify({
  primaryKey: "50031",
  propertyName: "employeeLocation",
});

const pointPrimaryKey3: string = JSON.stringify({
  primaryKey: "50032",
  propertyName: "employeeLocation",
});

const timeSeriesPoint1: TimeSeriesPoint = {
  time: "2012-02-12",
  value: { type: "Point", coordinates: [1.1, 1.1] },
};

const timeSeriesPoint2: TimeSeriesPoint = {
  time: "2013-03-13",
  value: { type: "Point", coordinates: [2.2, 2.2] },
};

const timeSeriesPoint3: TimeSeriesPoint = {
  time: "2014-04-14",
  value: { type: "Point", coordinates: [3.3, 3.3] },
};

const noBodyRequest: StreamTimeSeriesValuesRequest = {
  range: { type: "absolute" },
};

const noRangeRequest: StreamTimeSeriesValuesRequest = {};

const fromBodyRequest: StreamTimeSeriesValuesRequest = {
  range: {
    type: "relative",
    startTime: {
      when: "BEFORE",
      value: 1,
      unit: "MONTHS",
    },
  },
};

const afterBodyRequest: StreamTimeSeriesValuesRequest = {
  range: {
    type: "relative",
    endTime: {
      when: "AFTER",
      value: 1,
      unit: "MONTHS",
    },
  },
};

const rangeBodyRequest: StreamTimeSeriesValuesRequest = {
  range: {
    type: "absolute",
    startTime: "2013-03-12T12:00:00.000Z",
    endTime: "2014-04-14T12:00:00.000Z",
  },
};

const rangeBodyRequestNoData: StreamTimeSeriesValuesRequest = {
  range: {
    type: "absolute",
    startTime: "2021-03-12T12:00:00.000Z",
    endTime: "2022-04-14T12:00:00.000Z",
  },
};

export const streamPointsNoBody: StreamTimeSeriesValuesResponse = {
  data: [
    timeSeriesPoint1,
    timeSeriesPoint1,
    timeSeriesPoint2,
    timeSeriesPoint3,
    timeSeriesPoint3,
  ],
};
export const streamPointsRange: StreamTimeSeriesValuesResponse = {
  data: [timeSeriesPoint2, timeSeriesPoint3],
};
export const streamPointsFrom: StreamTimeSeriesValuesResponse = {
  data: [timeSeriesPoint1, timeSeriesPoint2, timeSeriesPoint3],
};
export const streamPointsAfter: StreamTimeSeriesValuesResponse = {
  data: [timeSeriesPoint1, timeSeriesPoint3],
};

export const noDataResponse: StreamTimeSeriesValuesResponse = {
  data: [],
};

export const latestValueRequestHandlers: Record<
  string,
  TimeSeriesPoint | undefined
> = {
  [pointPrimaryKey1]: timeSeriesPoint3,
  [pointPrimaryKey2]: timeSeriesPoint2,
  [pointPrimaryKey3]: timeSeriesPoint1,
};

export const streamValuesRequestHandlers: Record<
  string,
  StreamTimeSeriesValuesResponse
> = {
  [stableStringify(noBodyRequest)]: streamPointsNoBody,
  [stableStringify(noRangeRequest)]: streamPointsNoBody,
  [stableStringify(rangeBodyRequest)]: streamPointsRange,
  [stableStringify(fromBodyRequest)]: streamPointsFrom,
  [stableStringify(afterBodyRequest)]: streamPointsAfter,
  [stableStringify(rangeBodyRequestNoData)]: noDataResponse,
};
