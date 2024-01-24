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

import { DateTime, Duration, FixedOffsetZone } from "luxon";
import { Timestamp } from "./timestamp.js";

/**
 * Type representing a calendar date.
 */
export class LocalDate {
  public type = "LocalDate" as const;

  /**
   * Returns a LocalDate representing the current date in UTC.
   */
  public static now(): LocalDate {
    return LocalDate.fromDateTime(DateTime.utc());
  }

  /**
   * Converts an ISO 8601 string to LocalDate
   *
   * @param dateString string of format YYYY-MM-dd
   */
  static fromISOString(dateString: string): LocalDate {
    if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      throw new Error(`${dateString} doesn't match expected YYYY-MM-DD format`);
    }
    return LocalDate.fromDateTime(
      DateTime.fromISO(dateString, { zone: "utc" }),
    );
  }
  /**
   * Returns instance of LocalDate from year, month and day.
   *
   * @param year year
   * @param month month of year, from 1 (January) to 12 (December)
   * @param day day of month, from 1 to 31
   */
  static of(year: number, month: number, day: number): LocalDate {
    return new LocalDate(year, month, day);
  }

  private static fromDateTime(dateTime: DateTime) {
    return LocalDate.of(dateTime.year, dateTime.month, dateTime.day);
  }

  // Internally represent the date as start of day (UTC).
  private dateTime: DateTime;

  /**
   * Represents a date as year-month-day.
   * Does not represent a time as it's not associated with any timezone.
   *
   * @param year year
   * @param month month of year, from 1 (January) to 12 (December)
   * @param day day of month, from 1 to 31
   */
  private constructor(year: number, month: number, day: number) {
    this.dateTime = DateTime.utc(year, month, day);
  }

  /**
   * Gets the year (YYYY) field.
   */
  getYear(): number {
    return this.dateTime.year;
  }

  /**
   * Gets the month field (1-12).
   */
  getMonth(): number {
    return this.dateTime.month;
  }

  /**
   * Gets the day field (1-31).
   */
  getDayOfMonth(): number {
    return this.dateTime.day;
  }

  /**
   * Convert to ISO 8601 string (YYYY-MM-dd).
   */
  toISOString(): string {
    return this.dateTime.toISODate()!;
  }

  /**
   * Gets the ISO day of the week, where Monday = 1 and Sunday = 7.
   */
  getISOWeekday(): number {
    return this.dateTime.weekday;
  }

  /**
   * Returns a new Date representing the start of the day in provided timezone offset (defaults to UTC).
   *
   * @param utcOffset offset from UTC eg: "+08:00". Defaults to +00:00
   */
  toJsDate(utcOffset?: string): Date {
    return this.toTimestamp(utcOffset).toJsDate();
  }

  /**
   * Returns a new Timestamp representing the start of the day in provided timezone offset (defaults to UTC).
   *
   * @param utcOffset offset from UTC eg: "+08:00"
   */
  toTimestamp(utcOffset?: string): Timestamp {
    // parse offset into the equivalent UTC offset zone
    const zone = FixedOffsetZone.parseSpecifier("UTC" + utcOffset);
    // manipulate the date time - override the zone keeping the local time constant (midnight)
    const dateTimeWithOverriddenZone = this.dateTime.setZone(zone, {
      keepLocalTime: true,
    });
    return Timestamp.fromISOString(dateTimeWithOverriddenZone.toISO()!);
  }

  /**
   * Returns the epoch time in millisecond for start of the day in UTC.
   */
  valueOf(): number {
    return this.toTimestamp().valueOf();
  }

  /**
   * Checks if the timestamp represents to the same day.
   */
  isEqual(other: LocalDate): boolean {
    return this.toISOString() === other.toISOString();
  }

  /**
   * Returns new LocalDate with days subtracted from it.
   */
  minusDays(daysToSubtract: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.minus(Duration.fromObject({ days: daysToSubtract })),
    );
  }

  /**
   * Returns new LocalDate with weeks subtracted from it.
   */
  minusWeeks(weeksToSubtract: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.minus(Duration.fromObject({ weeks: weeksToSubtract })),
    );
  }

  /**
   * Returns new LocalDate with months subtracted from it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  minusMonths(monthsToSubtract: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.minus(Duration.fromObject({ months: monthsToSubtract })),
    );
  }

  /**
   * Returns new LocalDate with years subtracted from it.
   */
  minusYears(yearsToSubtract: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.minus(Duration.fromObject({ years: yearsToSubtract })),
    );
  }

  /**
   * Returns new LocalDate with days added to it.
   */
  plusDays(daysToAdd: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.plus(Duration.fromObject({ days: daysToAdd })),
    );
  }

  /**
   * Returns new LocalDate with weeks added to it.
   */
  plusWeeks(weeksToAdd: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.plus(Duration.fromObject({ weeks: weeksToAdd })),
    );
  }

  /**
   * Returns new LocalDate with months added to it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  plusMonths(monthsToAdd: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.plus(Duration.fromObject({ months: monthsToAdd })),
    );
  }

  /**
   * Returns new LocalDate with years added to it.
   */
  plusYears(yearsToAdd: number): LocalDate {
    return LocalDate.fromDateTime(
      this.dateTime.plus(Duration.fromObject({ years: yearsToAdd })),
    );
  }
}
