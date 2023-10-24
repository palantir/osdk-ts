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

import type { Timestamp } from "./timestamp";
/**
 * Type representing a calendar date.
 */
export class LocalDate {
  type: "LocalDate";
  /**
   * Returns a LocalDate representing the current date in UTC.
   */
  static now(): LocalDate {
    throw new Error("not implemented");
  }
  /**
   * Converts an ISO 8601 string to LocalDate
   *
   * @param dateString string of format YYYY-MM-dd
   */
  static fromISOString(dateString: string): LocalDate {
    throw new Error("not implemented");
  }
  /**
   * Returns instance of LocalDate from year, month and day.
   *
   * @param year year
   * @param month month of year, from 1 (January) to 12 (December)
   * @param day day of month, from 1 to 31
   */
  static of(year: number, month: number, day: number): LocalDate {
    throw new Error("not implemented");
  }

  private dateTime;
  /**
   * Represents a date as year-month-day.
   * Does not represent a time as it's not associated with any timezone.
   *
   * @param year year
   * @param month month of year, from 1 (January) to 12 (December)
   * @param day day of month, from 1 to 31
   */
  private constructor() {
    throw new Error("not implemented");
  }
  /**
   * Gets the year (YYYY) field.
   */
  getYear(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets the month field (1-12).
   */
  getMonth(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets the day field (1-31).
   */
  getDayOfMonth(): number {
    throw new Error("not implemented");
  }

  /**
   * Convert to ISO 8601 string (YYYY-MM-dd).
   */
  toISOString(): string {
    throw new Error("not implemented");
  }

  /**
   * Gets the ISO day of the week, where Monday = 1 and Sunday = 7.
   */
  getISOWeekday(): number {
    throw new Error("not implemented");
  }

  /**
   * Returns a new Date representing the start of the day in provided timezone offset (defaults to UTC).
   *
   * @param utcOffset offset from UTC eg: "+08:00". Defaults to +00:00
   */
  toJsDate(utcOffset?: string): Date {
    throw new Error("not implemented");
  }

  /**
   * Returns a new Timestamp representing the start of the day in provided timezone offset (defaults to UTC).
   *
   * @param utcOffset offset from UTC eg: "+08:00"
   */
  toTimestamp(utcOffset?: string): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns the epoch time in millisecond for start of the day in UTC.
   */
  valueOf(): number {
    throw new Error("not implemented");
  }

  /**
   * Checks if the timestamp represents to the same day.
   */
  isEqual(other: LocalDate): boolean {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with days subtracted from it.
   */
  minusDays(daysToSubtract: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with weeks subtracted from it.
   */
  minusWeeks(weeksToSubtract: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with months subtracted from it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  minusMonths(monthsToSubtract: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with years subtracted from it.
   */
  minusYears(yearsToSubtract: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with days added to it.
   */
  plusDays(daysToAdd: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with weeks added to it.
   */
  plusWeeks(weeksToAdd: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with months added to it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  plusMonths(monthsToAdd: number): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Returns new LocalDate with years added to it.
   */
  plusYears(yearsToAdd: number): LocalDate {
    throw new Error("not implemented");
  }
}
