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

import type { Timestamp } from "../../../baseTypes";
import {
  type Bucketing,
  type BucketKey,
  type Duration,
  type DurationBucketing,
  type ExactValueBucketing,
  type Range,
  type Rangeable,
  type RangeBucketing,
  TimeUnit,
} from "../Aggregations";
import { GroupKeyType } from "./GroupKeyType";

export interface TimestampGroupBy<TBucketKey extends BucketKey> {
  /** Divides objects into groups according to specified ranges. */
  ranges: (
    ranges: Array<Range<Timestamp>>,
  ) => Bucketing<TBucketKey, Range<Rangeable>>;
  /**
   * Bucket results by milliseconds.
   *
   * @param numberOfMilliseconds number of milliseconds to bucket by. Must be a whole number
   */
  byMilliseconds(
    numberOfMilliseconds?: number,
  ): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by seconds.
   *
   * @param numberOfSeconds number of seconds to bucket by. Must be a whole number
   */
  bySeconds(
    numberOfSeconds?: number,
  ): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by minutes.
   *
   * @param numberOfMinutes number of minutes to bucket by. Must be a whole number
   */
  byMinutes(
    numberOfMinutes?: number,
  ): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by hours.
   *
   * @param numberOfHours number of hours to bucket by. Must be a whole number
   */
  byHours(numberOfHours?: number): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by days.
   *
   * @param numberOfDays number of days to bucket by. Must be a whole number
   */
  byDays(numberOfDays?: number): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by week.
   */
  byWeek(): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by month.
   */
  byMonth(): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by year.
   */
  byYear(): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Bucket results by quarter.
   */
  byQuarter(): Bucketing<TBucketKey, Duration<Timestamp>>;
  /**
   * Divides objects into groups according to an exact value.
   * If omitted, the default maxGroupCount is 10,000.
   */
  exact: (maxGroupCount?: number) => Bucketing<TBucketKey, Range<Timestamp>>;
}

export const TimestampGroupBy = (
  propertyApiName: string,
): TimestampGroupBy<string> => ({
  exact: (
    maxGroupCount?: number,
  ): ExactValueBucketing<string, Range<Timestamp>> => ({
    type: "Bucketing",
    kind: "ExactValueBucketing",
    keyDataType: GroupKeyType.TIMESTAMP,
    propertyApiName,
    maxGroupCount,
  }),

  byMilliseconds: (
    numberOfMilliseconds: number = 1,
  ): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(
      propertyApiName,
      TimeUnit.MILLISECONDS,
      numberOfMilliseconds,
    ),

  bySeconds: (
    numberOfSeconds: number = 1,
  ): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.SECONDS, numberOfSeconds),

  byMinutes: (
    numberOfMinutes: number = 1,
  ): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.MINUTES, numberOfMinutes),

  byHours: (numberOfHours: number = 1): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.HOURS, numberOfHours),

  byDays: (numberOfDays: number = 1): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.DAYS, numberOfDays),

  byWeek: (): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.WEEKS),

  byMonth: (): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.MONTHS),

  byQuarter: (): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.QUARTERS),

  byYear: (): DurationBucketing<string, Timestamp> =>
    getTimestampBucketing(propertyApiName, TimeUnit.YEARS),

  ranges: (
    ranges: Array<Range<Timestamp>>,
  ): RangeBucketing<string, Range<Rangeable>> => ({
    type: "Bucketing",
    kind: "RangeBucketing",
    keyDataType: GroupKeyType.TIMESTAMP,
    propertyApiName,
    ranges,
  }),
});

function getTimestampBucketing(
  propertyApiName: string,
  unit: TimeUnit,
  value: number = 1,
): DurationBucketing<string, Timestamp> {
  return {
    type: "Bucketing",
    kind: "DurationBucketing",
    keyDataType: GroupKeyType.TIMESTAMP,
    propertyApiName,
    unit,
    value,
  };
}
