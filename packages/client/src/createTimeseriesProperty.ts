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

import {
  type Attachment,
  TimeseriesDurationMapping,
  type TimeSeriesPoint,
  TimeSeriesProperty,
  type TimeSeriesQuery,
} from "@osdk/client.api";
import { Ontologies, OntologiesV2 } from "@osdk/internal.foundry";
import type {
  AbsoluteTimeRange,
  RelativeTime,
  RelativeTimeRange,
  StreamTimeSeriesPointsRequest,
  TimeRange,
} from "@osdk/internal.foundry.core";
import type { MinimalClient } from "./MinimalClientContext.js";
import {
  iterateReadableStream,
  parseStreamedResponse,
} from "./util/streamutils.js";

export function createTimeseriesProperty<T extends number | string>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
): TimeSeriesProperty<T> {
  const getFirstPoint = async () => {
    return OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint(
      client,
      await client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
    ) as Promise<TimeSeriesPoint<T>>;
  };

  const getLastPoint = async () => {
    return OntologiesV2.TimeSeriesPropertiesV2.getLastPoint(
      client,
      await client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
    ) as Promise<TimeSeriesPoint<T>>;
  };

  const getAllPoints = async (
    query?: TimeSeriesQuery,
  ): Promise<Array<TimeSeriesPoint<T>>> => {
    return getAllTimeSeriesPoints(
      client,
      objectApiName,
      primaryKey,
      propertyName,
      query,
    );
  };

  const asyncIterPoints = (
    query?: TimeSeriesQuery,
  ): AsyncGenerator<TimeSeriesPoint<T>> => {
    return iterateTimeSeriesPoints(
      client,
      objectApiName,
      primaryKey,
      propertyName,
      query,
    );
  };

  return new TimeSeriesProperty<T>(
    getFirstPoint,
    getLastPoint,
    getAllPoints,
    asyncIterPoints,
  );
}

async function getAllTimeSeriesPoints<T extends string | number>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
  body?: TimeSeriesQuery,
): Promise<Array<TimeSeriesPoint<T>>> {
  const allPoints: Array<TimeSeriesPoint<T>> = [];

  for await (
    const point of iterateTimeSeriesPoints(
      client,
      objectApiName,
      primaryKey,
      propertyName,
      body,
    )
  ) {
    allPoints.push({
      time: point.time,
      value: point.value as T,
    });
  }
  return allPoints;
}

async function* iterateTimeSeriesPoints<T extends string | number>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
  body?: TimeSeriesQuery,
): AsyncGenerator<TimeSeriesPoint<T>, any, unknown> {
  const utf8decoder = new TextDecoder("utf-8");

  const streamPointsIterator = await OntologiesV2.TimeSeriesPropertiesV2
    .streamPoints(
      client,
      await client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
      body ? { range: getTimeRange(body) } : {},
    );

  const reader = streamPointsIterator.stream().getReader();
  for await (
    const point of parseStreamedResponse(iterateReadableStream(reader))
  ) {
    yield {
      time: point.time,
      value: point.value as T,
    };
  }
}

function getTimeRange(body: TimeSeriesQuery): TimeRange {
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
