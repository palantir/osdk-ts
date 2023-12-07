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

import type { OntologyDefinition } from "@osdk/api";
import type { StreamTimeSeriesPointsRequest as StreamPointsBody } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { getAllTimeSeriesPoints } from "../../../client/net/getAllTimeSeriesPoints";
import { iterateTimeSeriesPoints } from "../../../client/net/iterateTimeSeriesPoints";
import type { TimeSeriesError } from "../../errors";
import type { Result } from "../../Result";
import type { TimeSeriesPoint } from "./TimeSeriesPoint";

export interface TimeSeriesTerminalOperations<T extends number | string> {
  /**
   * Get all the Time Series points.
   *
   * @example
   * const allPoints = object.property.points.all()
   */
  all(): Promise<Result<Array<TimeSeriesPoint<T>>>>;

  /**
   * Create an iterator to asynchronously iterate through Time Series points.
   *
   * @example
   * // Create iterator
   * const timeSeriesIterator = object.property.points.iterate();
   *
   * // Iterate through Time Series
   * for await (const point of timeSeriesIterator) {
   *         // Handle Time Series Point
   * }
   */
  iterate(): TimeSeriesIterator<T>;
}

export function createTimeSeriesTerminalOperations<T extends number | string>(
  client: ClientContext<OntologyDefinition<any>>,
  propertyName: string,
  apiName: string,
  primaryKey: string,
  body: StreamPointsBody = {},
) {
  return {
    all(): Promise<Result<Array<TimeSeriesPoint<T>>>> {
      return getAllTimeSeriesPoints(
        client,
        apiName,
        primaryKey,
        propertyName,
        body,
      );
    },
    iterate(): TimeSeriesIterator<T> {
      return iterateTimeSeriesPoints(
        client,
        apiName,
        primaryKey,
        propertyName,
        body,
      );
    },
  };
}
export type TimeSeriesIterator<T extends string | number> = AsyncGenerator<
  Result<TimeSeriesPoint<T>, TimeSeriesError>,
  any,
  unknown
>;
