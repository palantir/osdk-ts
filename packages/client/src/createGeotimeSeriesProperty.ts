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

import type {
  GeotimeSeriesProperty,
  TimeSeriesPoint,
  TimeSeriesProperty,
  TimeSeriesQuery,
} from "@osdk/api";
import { TimeseriesDurationMapping } from "@osdk/api";
import type { TimeRange } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { MinimalClient } from "./MinimalClientContext.js";
import {
  iterateReadableStream,
  parseStreamedResponse,
} from "./util/streamutils.js";

export class GeotimeSeriesPropertyImpl<T extends GeoJSON.Point>
  implements GeotimeSeriesProperty<T>
{
  #triplet: [string, any, string];
  #client: MinimalClient;
  lastFetchedPoint: TimeSeriesPoint<T>;

  constructor(
    client: MinimalClient,
    objectApiName: string,
    primaryKey: any,
    propertyName: string,
    lastFetchedPoint: TimeSeriesPoint<T>,
  ) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
    this.lastFetchedPoint = lastFetchedPoint;
  }

  public async getLastPoint() {
    return OntologiesV2.TimeSeriesValueBankProperties.getLatestValue(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
    ) as Promise<TimeSeriesPoint<T>>;
  }

  public async getAllPoints(query?: TimeSeriesQuery) {
    const allPoints: Array<TimeSeriesPoint<T>> = [];

    for await (const point of this.asyncIterPoints(query)) {
      allPoints.push({
        time: point.time,
        value: point.value as T,
      });
    }
    return allPoints;
  }

  public async *asyncIterPoints(
    query?: TimeSeriesQuery,
  ) {
    const streamPointsIterator = await OntologiesV2
      .TimeSeriesValueBankProperties.streamValues(
        this.#client,
        await this.#client.ontologyRid,
        ...this.#triplet,
        query ? { range: getTimeRange(query) } : {},
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
