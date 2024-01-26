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

import type { TimeSeriesError } from "../../errors";
import type { Result } from "../../Result";
import type { TimeSeriesPoint } from "./TimeSeriesPoint";
import type { TimeSeriesQuery } from "./TimeSeriesQuery";

export interface TimeSeries<T extends number | string> {
  type: "TimeSeries";
  /**
   * Queries the First Point of the Time Series.
   */
  getFirstPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>>;
  /**
   * Queries the Last Point of the Time Series.
   */
  getLastPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>>;
  /**
   * Queries a stream of Time Series points using different operations and filters.
   *
   * @example
   * const allPoints = object.property.points.all();
   * const iterator = object.property.points.iterate();
   * const allPointFrom = object.property.points.from({...}).all();
   * const allPointsRange = object.property.points.range({...}).all();
   */
  readonly points: TimeSeriesQuery<T>;
}
