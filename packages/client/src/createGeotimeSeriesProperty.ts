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
import { asyncIterPointsHelper, getTimeRange } from "./util/timeseriesUtils.js";

export class GeotimeSeriesPropertyImpl<T extends GeoJSON.Point>
  implements GeotimeSeriesProperty<T>
{
  #triplet: [string, any, string];
  #client: MinimalClient;
  lastFetchedValue: TimeSeriesPoint<T> | undefined;

  constructor(
    client: MinimalClient,
    objectApiName: string,
    primaryKey: any,
    propertyName: string,
  ) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }

  public async getLatestValue() {
    const latestPointPromise = OntologiesV2.TimeSeriesValueBankProperties
      .getLatestValue(
        this.#client,
        await this.#client.ontologyRid,
        ...this.#triplet,
      ) as Promise<TimeSeriesPoint<T>>;

    latestPointPromise.then(latestPoint => this.lastFetchedValue = latestPoint);

    return latestPointPromise;
  }

  public async getAllValues(query?: TimeSeriesQuery) {
    const allPoints: Array<TimeSeriesPoint<T>> = [];

    for await (const point of this.asyncIterValues(query)) {
      allPoints.push(point);
    }
    return allPoints;
  }

  public async *asyncIterValues(
    query?: TimeSeriesQuery,
  ) {
    const streamPointsIterator = await OntologiesV2
      .TimeSeriesValueBankProperties.streamValues(
        this.#client,
        await this.#client.ontologyRid,
        ...this.#triplet,
        query ? { range: getTimeRange(query) } : {},
      );

    for await (
      const timeseriesPoint of asyncIterPointsHelper<T>(streamPointsIterator)
    ) {
      yield timeseriesPoint;
    }
  }
}
