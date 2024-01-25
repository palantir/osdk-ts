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

import type { LocalDate } from "../../../baseTypes/index.js";
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
} from "../Aggregations.js";
import { GroupKeyType } from "./GroupKeyType.js";
export interface LocalDateGroupBy<T extends BucketKey> {
  /** Divides objects into groups according to specified ranges. */
  ranges: (ranges: Array<Range<LocalDate>>) => Bucketing<T, Range<Rangeable>>;
  /**
   * Bucket results by days.
   *
   * @param numberOfDays number of days to bucket by. Must be a whole number
   */
  byDays(numberOfDays?: number): Bucketing<T, Duration<LocalDate>>;
  /**
   * Bucket results by weeks.
   */
  byWeek(): Bucketing<T, Duration<LocalDate>>;
  /**
   * Bucket results by months.
   */
  byMonth(): Bucketing<T, Duration<LocalDate>>;
  /**
   * Bucket results by quarter.
   */
  byQuarter(): Bucketing<T, Duration<LocalDate>>;
  /**
   * Bucket results by year.
   */
  byYear(): Bucketing<T, Duration<LocalDate>>;
  /**
   * Divides objects into groups according to an exact value.
   * If omitted, the default maxGroupCount is 10,000.
   */
  exact: (maxGroupCount?: number) => Bucketing<T, Range<LocalDate>>;
}

export const LocalDateGroupBy = (
  propertyApiName: string,
): LocalDateGroupBy<string> => ({
  exact: (
    maxGroupCount?: number,
  ): ExactValueBucketing<string, Range<LocalDate>> => ({
    type: "Bucketing",
    kind: "ExactValueBucketing",
    propertyApiName,
    keyDataType: GroupKeyType.DATE,
    maxGroupCount,
  }),

  byDays: (numberOfDays?: number): DurationBucketing<string, LocalDate> =>
    getLocalDateGroupBy(propertyApiName, TimeUnit.DAYS, numberOfDays),

  byWeek: (): DurationBucketing<string, LocalDate> =>
    getLocalDateGroupBy(propertyApiName, TimeUnit.WEEKS),

  byMonth: (): DurationBucketing<string, LocalDate> =>
    getLocalDateGroupBy(propertyApiName, TimeUnit.MONTHS),

  byQuarter: (): DurationBucketing<string, LocalDate> =>
    getLocalDateGroupBy(propertyApiName, TimeUnit.QUARTERS),

  byYear: (): DurationBucketing<string, LocalDate> =>
    getLocalDateGroupBy(propertyApiName, TimeUnit.YEARS),

  ranges: (
    ranges: Array<Range<LocalDate>>,
  ): RangeBucketing<string, Range<Rangeable>> => ({
    type: "Bucketing",
    kind: "RangeBucketing",
    propertyApiName,
    keyDataType: GroupKeyType.DATE,
    ranges,
  }),
});

function getLocalDateGroupBy(
  propertyApiName: string,
  unit: TimeUnit,
  value: number = 1,
): DurationBucketing<string, LocalDate> {
  return {
    type: "Bucketing",
    kind: "DurationBucketing",
    keyDataType: GroupKeyType.DATE,
    propertyApiName,
    unit,
    value,
  };
}
