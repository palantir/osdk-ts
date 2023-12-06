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

import { type OntologyDefinition } from "@osdk/api";
import { streamPoints } from "@osdk/gateway/requests";
import type { StreamTimeSeriesPointsRequest } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { TimeSeriesPoint } from "../baseTypes";
import { Timestamp } from "../baseTypes";
import type { TimeSeriesError } from "../errors";
import { handleTimeSeriesError, TimeSeriesErrorHandler } from "../errors";
import type { Result } from "../Result";
import {
  iterateReadableStream,
  parseStreamedResponse,
} from "./util/parseStreamedResponse";
import { wrapResult } from "./util/wrapResult";

export async function getAllTimeSeriesPoints<T extends string | number>(
  client: ClientContext<OntologyDefinition<any>>,
  apiName: string,
  primaryKey: any,
  propertyName: string,
  body: StreamTimeSeriesPointsRequest,
): Promise<Result<Array<TimeSeriesPoint<T>>, TimeSeriesError>> {
  return wrapResult(
    async () => {
      const streamPointsIterator = await streamPoints(
        createOpenApiRequest(client.stack, client.fetch, undefined, true),
        client.ontology.metadata.ontologyApiName,
        apiName,
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
          time: Timestamp.fromISOString(point.time),
          value: point.value as T,
        });
      }
      return allPoints;
    },
    e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
  );
}
