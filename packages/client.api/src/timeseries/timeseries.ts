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

export interface TimeSeriesPoint<T extends string | number> {
  time: string;
  value: T;
}

export interface TimeSeriesProperty<T extends number | string> {
  getFirstPoint(): Promise<TimeSeriesPoint<T>>;
  getLastPoint(): Promise<TimeSeriesPoint<T>>;
  getAllPoints(query?: TimeSeriesQuery): Promise<Array<TimeSeriesPoint<T>>>;
  asyncIterPoints(query?: TimeSeriesQuery): AsyncGenerator<TimeSeriesPoint<T>>;
}
