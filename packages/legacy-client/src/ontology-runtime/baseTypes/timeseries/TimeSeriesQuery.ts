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

import type {
  StreamTimeSeriesPointsRequest,
  TimeRange,
} from "@osdk/gateway/types";
import type { Timestamp } from "../timestamp";
import type { TimeSeriesDuration } from "./TimeSeriesDuration";
import { DurationUnit, WhenUnit } from "./TimeSeriesDuration";
import { TimeSeriesTerminalOperations } from "./TimeSeriesTerminalOperations";

export class TimeSeriesQuery<T extends string | number>
  extends TimeSeriesTerminalOperations<T>
{
  /**
   * Creates a query to grab Time Series points from a specified duration in years from today.
   *
   * @param value a number representing the duration of years.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromYearsAgo(5)
   *                          .all();
   */
  fromYearsAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.YEARS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in months from today.
   *
   * @param value a number representing the duration of months.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromMonthsAgo(5)
   *                          .all();
   */
  fromMonthsAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.MONTHS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in weeks from today.
   *
   * @param value a number representing the duration of weeks.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromWeeksAgo(5)
   *                          .all();
   */
  fromWeeksAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.WEEKS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in days from today.
   *
   * @param value a number representing the duration of days.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromDaysAgo(5)
   *                          .all();
   */
  fromDaysAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({ when: WhenUnit.BEFORE, unit: DurationUnit.DAYS, value });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in hours from today.
   *
   * @param value a number representing the duration of hours.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromHoursAgo(5)
   *                          .all();
   */
  fromHoursAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.HOURS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in minutes from today.
   *
   * @param value a number representing the duration of minutes.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromMinutesAgo(5)
   *                          .all();
   */
  fromMinutesAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.MINUTES,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in seconds from today.
   *
   * @param value a number representing the duration of seconds.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromSecondsAgo(5)
   *                          .all();
   */
  fromSecondsAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.SECONDS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points from a specified duration in milliseconds from today.
   *
   * @param value a number representing the duration of milliseconds.
   * @example
   * // from (currentTime - value) to currentTime
   * const allPoints = object.property
   *                          .points
   *                          .fromMillisecondsAgo(5)
   *                          .all();
   */
  fromMillisecondsAgo(value: number): TimeSeriesTerminalOperations<T> {
    return this.from({
      when: WhenUnit.BEFORE,
      unit: DurationUnit.MILLISECONDS,
      value,
    });
  }

  /**
   * Creates a query to grab Time Series points between a specified start and end time.
   *
   * @param range a query representing the specified start and time of the range of points.
   * @example
   * const startTime = Timestamp.fromISOString("YYYY-MM-DDTHH:MM:SSZ");
   * const endTime = Timestamp.fromISOString("YYYY-MM-DDTHH:MM:SSZ");
   * const allPoints = object.property.points.range({startTime, endTime}).all()
   */
  range(
    range: {
      startTime?: Timestamp;
      endTime: Timestamp;
    } | {
      startTime: Timestamp;
      endTime?: Timestamp;
    },
  ): TimeSeriesTerminalOperations<T> {
    let body: StreamTimeSeriesPointsRequest = {};
    if (Object.keys(range).length !== 0) {
      const absoluteRange = { type: "absolute" } as TimeRange;
      if (range.startTime) {
        absoluteRange.startTime = range?.startTime?.toISOString();
      }
      if (range.endTime) {
        absoluteRange.endTime = range?.endTime?.toISOString();
      }
      body = { range: absoluteRange };
    } else {
      throw new Error("Argument .range() needs at least one input.");
    }
    return new TimeSeriesTerminalOperations<T>(
      this.getAuth(),
      this.stack,
      this.propertyName,
      this.apiName,
      this.primaryKey,
      this.getOntologyMetadata(),
      body,
    );
  }

  private from(from: TimeSeriesDuration): TimeSeriesTerminalOperations<T> {
    let body: StreamTimeSeriesPointsRequest = {};
    if (Object.keys(from).length !== 0) {
      body = { range: { type: "relative", startTime: from } };
    } else {
      throw new Error("Argument .from() needs at least one input.");
    }
    return new TimeSeriesTerminalOperations<T>(
      this.getAuth(),
      this.stack,
      this.propertyName,
      this.apiName,
      this.primaryKey,
      this.getOntologyMetadata(),
      body,
    );
  }
}
