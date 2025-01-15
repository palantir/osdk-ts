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
  TimeSeriesPoint,
  TimeSeriesProperty,
  TimeSeriesQuery,
} from "@osdk/api";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { MinimalClient } from "./MinimalClientContext.js";
import { asyncIterPointsHelper, getTimeRange } from "./util/timeseriesUtils.js";

export class TimeSeriesPropertyImpl<T extends number | string>
  implements TimeSeriesProperty<T>
{
  #triplet: [string, any, string];
  #client: MinimalClient;

  constructor(
    client: MinimalClient,
    objectApiName: string,
    primaryKey: any,
    propertyName: string,
  ) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }

  public async getFirstPoint(): Promise<TimeSeriesPoint<T>> {
    return OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
    ) as Promise<TimeSeriesPoint<T>>;
  }

  public async getLastPoint(): Promise<TimeSeriesPoint<T>> {
    return OntologiesV2.TimeSeriesPropertiesV2.getLastPoint(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
    ) as Promise<TimeSeriesPoint<T>>;
  }

  public async getAllPoints(
    query?: TimeSeriesQuery,
  ): Promise<TimeSeriesPoint<T>[]> {
    const allPoints: Array<TimeSeriesPoint<T>> = [];

    for await (const point of this.asyncIterPoints(query)) {
      allPoints.push(point);
    }
    return allPoints;
  }

  public async *asyncIterPoints(
    query?: TimeSeriesQuery,
  ): AsyncGenerator<
    {
      time: any;
      value: T;
    },
    void,
    unknown
  > {
    const streamPointsIterator = await OntologiesV2.TimeSeriesPropertiesV2
      .streamPoints(
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
