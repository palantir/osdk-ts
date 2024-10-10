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

import { TimeDurationMapping } from "../mapping/DurationMapping.js";

export type TimeSeriesQuery =
  | {
    $before: number;
    $unit: keyof typeof TimeseriesDurationMapping;
    $after?: never;
    $startTime?: never;
    $endTime?: never;
  }
  | {
    $after: number;
    $unit: keyof typeof TimeseriesDurationMapping;
    $before?: never;
    $startTime?: never;
    $endTime?: never;
  }
  | {
    $startTime: string;
    $endTime?: string;
    $before?: never;
    $after?: never;
    $unit?: never;
  }
  | {
    $startTime?: string;
    $endTime: string;
    $before?: never;
    $after?: never;
    $unit?: never;
  };

export type TimeseriesDurationUnits =
  | "YEARS"
  | "MONTHS"
  | "WEEKS"
  | "DAYS"
  | "HOURS"
  | "MINUTES"
  | "SECONDS"
  | "MILLISECONDS";

export const TimeseriesDurationMapping = {
  "ms": "MILLISECONDS",
  "milliseconds": "MILLISECONDS",
  ...TimeDurationMapping,
} satisfies Record<string, TimeseriesDurationUnits>;

export interface TimeSeriesPoint<T extends string | number | GeoJSON.Point> {
  time: string;
  value: T;
}

export interface TimeSeriesProperty<T extends number | string> {
  /**
   * Queries the first point of the Timeseries
   */
  getFirstPoint: () => Promise<TimeSeriesPoint<T>>;
  /**
   * Queries the last point of the Timeseries
   */
  getLastPoint: () => Promise<TimeSeriesPoint<T>>;
  /**
     * Loads all points, within the given time range if that's provided
     * @param query - a query representing either an absolute or relative range of time
     * @example
     *  const points = await employee.employeeStatus?.getAllPoints({
        $after: 1,
        $unit: "month",
      });
     */
  getAllPoints: (
    query?: TimeSeriesQuery,
  ) => Promise<Array<TimeSeriesPoint<T>>>;
  /**
     * Returns an async iterator to load all points
     * within the given time range if that's provided
     * @param query - a query representing either an absolute or relative range of time
     * @example
     *  const iterator = employee.employeeStatus?.asyncIter({
        $after: 1,
        $unit: "month",
      });
      for await (const point of iterator) {
          // Handle time series point
      }
     */
  asyncIterPoints: (
    query?: TimeSeriesQuery,
  ) => AsyncGenerator<TimeSeriesPoint<T>>;
}

export interface GeotimeSeriesProperty<T extends GeoJSON.Point> {
  /**
   * Queries the last point of the Timeseries
   */
  getLatestValue: () => Promise<TimeSeriesPoint<T>>;
  /**
     * Loads all points, within the given time range if that's provided
     * @param query - a query representing either an absolute or relative range of time
     * @example
     *  const points = await employee.employeeStatus?.getAllPoints({
        $after: 1,
        $unit: "month",
      });
     */
  getAllValues: (
    query?: TimeSeriesQuery,
  ) => Promise<Array<TimeSeriesPoint<T>>>;
  /**
     * Returns an async iterator to load all points
     * within the given time range if that's provided
     * @param query - a query representing either an absolute or relative range of time
     * @example
     *  const iterator = employee.employeeStatus?.asyncIter({
        $after: 1,
        $unit: "month",
      });
      for await (const point of iterator) {
          // Handle time series point
      }
     */
  asyncIterValues: (
    query?: TimeSeriesQuery,
  ) => AsyncGenerator<TimeSeriesPoint<T>>;

  /**
   * The most recently fetched value for the latest point in the GTSR.
   * This will not be loaded automatically upon object load, but will be refreshed every time
   * getLatestValue() is called
   */
  lastFetchedValue: TimeSeriesPoint<T> | undefined;
}
