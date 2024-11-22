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
  StreamTimeSeriesPointsRequest,
  StreamTimeSeriesPointsResponse,
  TimeSeriesPoint,
} from "@osdk/internal.foundry.core";
import stableStringify from "json-stable-stringify";

const pointPrimaryKey1: string = JSON.stringify({
  primaryKey: "50030",
  propertyName: "employeeStatus",
});

const pointPrimaryKey2: string = JSON.stringify({
  primaryKey: "50031",
  propertyName: "employeeStatus",
});

const pointPrimaryKey3: string = JSON.stringify({
  primaryKey: "50032",
  propertyName: "employeeStatus",
});

const pointPrimaryKey4: string = JSON.stringify({
  primaryKey: "50030",
  propertyName: "employeeSensor",
});

const timeSeriesPoint1: TimeSeriesPoint = {
  time: "2012-02-12",
  value: 10,
};

const timeSeriesPoint2: TimeSeriesPoint = {
  time: "2013-03-13",
  value: 20,
};

const timeSeriesPoint3: TimeSeriesPoint = {
  time: "2014-04-14",
  value: 30,
};

const timeSeriesPoint4: TimeSeriesPoint = {
  time: "2015-05-15",
  value: 40,
};

const noBodyRequest: StreamTimeSeriesPointsRequest = {
  range: { type: "absolute" },
};

const noRangeRequest: StreamTimeSeriesPointsRequest = {};

const fromBodyRequest: StreamTimeSeriesPointsRequest = {
  range: {
    type: "relative",
    startTime: {
      when: "BEFORE",
      value: 1,
      unit: "MONTHS",
    },
  },
};

const afterBodyRequest: StreamTimeSeriesPointsRequest = {
  range: {
    type: "relative",
    endTime: {
      when: "AFTER",
      value: 1,
      unit: "MONTHS",
    },
  },
};

const rangeBodyRequest: StreamTimeSeriesPointsRequest = {
  range: {
    type: "absolute",
    startTime: "2013-03-12T12:00:00.000Z",
    endTime: "2014-04-14T12:00:00.000Z",
  },
};

export const streamPointsNoBody: StreamTimeSeriesPointsResponse = {
  data: [
    timeSeriesPoint1,
    timeSeriesPoint1,
    timeSeriesPoint2,
    timeSeriesPoint3,
    timeSeriesPoint3,
  ],
};
export const streamPointsRange: StreamTimeSeriesPointsResponse = {
  data: [timeSeriesPoint2, timeSeriesPoint3],
};
export const streamPointsFrom: StreamTimeSeriesPointsResponse = {
  data: [timeSeriesPoint1, timeSeriesPoint2, timeSeriesPoint3],
};
export const streamPointsAfter: StreamTimeSeriesPointsResponse = {
  data: [timeSeriesPoint1, timeSeriesPoint3],
};

export const firstPointRequestHandlers: Record<string, TimeSeriesPoint> = {
  [pointPrimaryKey1]: timeSeriesPoint1,
  [pointPrimaryKey2]: timeSeriesPoint2,
  [pointPrimaryKey3]: timeSeriesPoint3,
  [pointPrimaryKey4]: timeSeriesPoint4,
};

export const lastPointRequestHandlers: Record<string, TimeSeriesPoint> = {
  [pointPrimaryKey1]: timeSeriesPoint3,
  [pointPrimaryKey2]: timeSeriesPoint2,
  [pointPrimaryKey3]: timeSeriesPoint1,
  [pointPrimaryKey4]: timeSeriesPoint3,
};

export const streamPointsRequestHandlers: Record<
  string,
  StreamTimeSeriesPointsResponse
> = {
  [stableStringify(noBodyRequest)]: streamPointsNoBody,
  [stableStringify(noRangeRequest)]: streamPointsNoBody,
  [stableStringify(rangeBodyRequest)]: streamPointsRange,
  [stableStringify(fromBodyRequest)]: streamPointsFrom,
  [stableStringify(afterBodyRequest)]: streamPointsAfter,
};
