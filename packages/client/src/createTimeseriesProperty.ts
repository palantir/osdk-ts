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
  type TimeSeriesProperty,
  type TimeSeriesQuery,
} from "@osdk/client.api";
import type {
  RelativeTime,
  RelativeTimeRange,
  StreamTimeSeriesPointsRequest,
} from "@osdk/internal.foundry";
import { Ontologies, OntologiesV2 } from "@osdk/internal.foundry";
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
  return {
    async getFirstPoint() {
      return OntologiesV2.OntologyObjectsV2.getFirstPoint(
        client,
        await client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
      ) as Promise<TimeSeriesPoint<T>>;
    },
    async getLastPoint() {
      return OntologiesV2.OntologyObjectsV2.getLastPoint(
        client,
        await client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
      ) as Promise<TimeSeriesPoint<T>>;
    },
    async getAllPoints(query: TimeSeriesQuery) {
      return getAllTimeSeriesPoints(
        client,
        objectApiName,
        primaryKey,
        propertyName,
        query,
      );
    },

    asyncIterPoints(query: TimeSeriesQuery) {
      return iterateTimeSeriesPoints(
        client,
        objectApiName,
        primaryKey,
        propertyName,
        query,
      );
    },
  };
}

async function getAllTimeSeriesPoints<T extends string | number>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
  body: TimeSeriesQuery,
): Promise<Array<TimeSeriesPoint<T>>> {
  const relativeTime: RelativeTime = body.$before
    ? {
      when: "BEFORE",
      value: body.$before,
      unit: TimeseriesDurationMapping[body.$unit],
    }
    : {
      when: "AFTER",
      value: body.$after!,
      unit: TimeseriesDurationMapping[body.$unit],
    };
  const streamPointsIterator = await OntologiesV2.OntologyObjectsV2
    .streamPoints(
      client,
      await client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
      { range: { type: "relative", startTime: relativeTime } },
    );

  const allPoints: Array<TimeSeriesPoint<T>> = [];

  const reader = streamPointsIterator.stream().getReader();
  for await (
    const point of parseStreamedResponse(iterateReadableStream(reader))
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
  body: TimeSeriesQuery,
): AsyncGenerator<TimeSeriesPoint<T>, any, unknown> {
  const relativeTime: RelativeTime = body.$before
    ? {
      when: "BEFORE",
      value: body.$before,
      unit: TimeseriesDurationMapping[body.$unit],
    }
    : {
      when: "AFTER",
      value: body.$after!,
      unit: TimeseriesDurationMapping[body.$unit],
    };
  const streamPointsResponse = await OntologiesV2.OntologyObjectsV2
    .streamPoints(
      client,
      await client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
      { range: { type: "relative", startTime: relativeTime } },
    );

  const reader = streamPointsResponse.stream().getReader();
  const streamPointsIterator = iterateReadableStream(reader);
  const firstChunk = await streamPointsIterator.next();

  const remainingChunksPromise: Promise<any[]> = new Promise(
    (resolve, _reject) => {
      const remainingPoints = processStream(streamPointsIterator);
      resolve(remainingPoints);
    },
  );

  yield {
    time: (firstChunk.value as any).time as string,
    value: (firstChunk.value as any).value as T,
  };
  const remainingChunks = await remainingChunksPromise;
  for (const point of remainingChunks) {
    yield {
      time: point.time,
      value: point.value as T,
    };
  }
}

async function processStream<T extends string | number>(
  streamIterator: AsyncGenerator<any, any, unknown>,
): Promise<any[]> {
  const allPoints: Array<TimeSeriesPoint<T>> = [];
  for await (const points of streamIterator) {
    for (const point of points) {
      allPoints.push(point);
    }
  }
  return allPoints;
}
