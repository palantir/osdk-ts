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
  Attachment,
  TimeSeriesPoint,
  TimeSeriesProperty,
} from "@osdk/client.api";
import type {
  StreamTimeSeriesPointsRequest} from "@osdk/internal.foundry";
import {
  Ontologies,
  OntologiesV2
} from "@osdk/internal.foundry";
import type { MinimalClient } from "./MinimalClientContext.js";

export function createTimeseriesProperty<T extends number | string>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
  body: StreamTimeSeriesPointsRequest,
): TimeSeriesProperty<T> {
  return {
    async getFirstPoint() {
      return OntologiesV2.OntologyObjectsV2.getFirstPoint(
        client,
        client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
      ) as Promise<TimeSeriesPoint<T>>;
    },
    async getLastPoint() {
      return OntologiesV2.OntologyObjectsV2.getLastPoint(
        client,
        client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
      ) as Promise<TimeSeriesPoint<T>>;
    },
    async getAllPoints() {
      return OntologiesV2.OntologyObjectsV2.streamPoints(
        client,
        client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
        body,
      );
    },

    asyncIterPoints() {
      return OntologiesV2.OntologyObjectsV2.streamPoints(
        client,
        client.ontologyRid,
        objectApiName,
        primaryKey,
        propertyName,
        body,
      );
    },
  };
}

async function getAllTimeSeriesPoints<T extends string | number>(
  client: MinimalClient,
  objectApiName: string,
  primaryKey: any,
  propertyName: string,
  body: StreamTimeSeriesPointsRequest,
): Promise<Array<TimeSeriesPoint<T>>> {
  const streamPointsIterator = await OntologiesV2.OntologyObjectsV2
    .streamPoints(
      client,
      client.ontologyRid,
      objectApiName,
      primaryKey,
      propertyName,
      body,
    );

  const allPoints: Array<TimeSeriesPoint<T>> = [];

  const reader = streamPointsIterator.getReader();
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
