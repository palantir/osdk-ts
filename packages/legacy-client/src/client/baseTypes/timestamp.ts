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

import { DateTime, Duration } from "luxon";
import { LocalDate } from "./localDate";
/**
 * Type representing an instant in time.
 * Offset is always UTC+00:00
 */
export class Timestamp {
  public type = "Timestamp" as const;

  /**
   * Returns a Timestamp representing the current time in UTC.
   */
  static now(): Timestamp {
    return new Timestamp(DateTime.utc());
  }

  /**
   * Parse timestamp from an ISO 8601 string.
   * Ambiguous input is assumed to be in UTC.
   *
   * @param dateTimeString
   */
  static fromISOString(dateTimeString: string): Timestamp {
    // TODO check setZone behaviour
    return new Timestamp(
      DateTime.fromISO(dateTimeString, { zone: "utc", setZone: true }),
    );
  }

  /**
   * Returns a Timestamp representing milliseconds from epoch in UTC.
   *
   * @param milliseconds number of milliseconds since Unix epoch
   */
  static fromEpochMilli(milliseconds: number): Timestamp {
    return new Timestamp(DateTime.fromMillis(milliseconds, { zone: "utc" }));
  }

  /**
   * Creates a Timestamp in UTC from a JS Date.
   *
   * @param date
   */
  static fromJsDate(date: Date): Timestamp {
    return new Timestamp(DateTime.fromJSDate(date, { zone: "utc" }));
  }

  private constructor(private dateTime: DateTime) {
  }

  /**
   * Gets year in the current timezone offset.
   */
  getYear(): number {
    return this.dateTime.year;
  }

  /**
   * Gets month (1-12) in the current timezone offset.
   */
  getMonth(): number {
    return this.dateTime.month;
  }

  /**
   * Gets day of month (1-31) in the current timezone offset.
   */
  getDayOfMonth(): number {
    return this.dateTime.day;
  }

  /**
   * Gets hours (0-23) in the current timezone offset.
   */
  getHours(): number {
    return this.dateTime.hour;
  }

  /**
   * Gets minutes (0-59) in the current timezone offset.
   */
  getMinutes(): number {
    return this.dateTime.minute;
  }

  /**
   * Gets seconds (0-59) in the current timezone offset.
   */
  getSeconds(): number {
    return this.dateTime.second;
  }

  /**
   * Gets milliseconds (0-999) in the current timezone offset.
   */
  getMilliseconds(): number {
    return this.dateTime.millisecond;
  }

  /**
   * A time-zone offset from Greenwich/UTC in minutes.
   */
  getTimezoneOffset(): number {
    return this.dateTime.offset;
  }

  /**
   * Gets milliseconds from epoch.
   */
  getTime(): number {
    return this.dateTime.valueOf();
  }

  /**
   * Returns the epoch time in millisecond.
   */
  valueOf(): number {
    return this.getTime();
  }

  /**
   * Checks if the timestamp represents to the same instant in time as another timestamp.
   */
  isEqual(other: Timestamp): boolean {
    return this.getTime() === other.getTime();
  }

  /**
   * Returns a javascript Date for the same instant in time.
   */
  toJsDate(): Date {
    return this.dateTime.toJSDate();
  }

  /**
   * Returns a LocalDate for the day in the current timezone offset.
   */
  toLocalDate(): LocalDate {
    return LocalDate.of(this.getYear(), this.getMonth(), this.getDayOfMonth());
  }

  /**
   * Converts timestamp to an ISO 8601 string.
   * The timezone-offset is maintained.
   */
  toISOString(): string {
    return this.dateTime.toISO()!;
  }

  /**
   * Returns new Timestamp with milliseconds subtracted from it.
   */
  minusMilliseconds(millisecondsToSubtract: number): Timestamp {
    return new Timestamp(this.dateTime.minus(millisecondsToSubtract));
  }

  /**
   * Returns new Timestamp with seconds subtracted from it.
   */
  minusSeconds(secondsToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ seconds: secondsToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with minutes subtracted from it.
   */
  minusMinutes(minutesToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ minutes: minutesToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with hours subtracted from it.
   */
  minusHours(hoursToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ hours: hoursToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with days subtracted from it.
   */
  minusDays(daysToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ days: daysToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with weeks subtracted from it.
   */
  minusWeeks(weeksToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ weeks: weeksToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with months subtracted from it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  minusMonths(monthsToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ months: monthsToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with years subtracted from it.
   */
  minusYears(yearsToSubtract: number): Timestamp {
    const duration = Duration.fromObject({ years: yearsToSubtract });
    return new Timestamp(this.dateTime.minus(duration));
  }

  /**
   * Returns new Timestamp with milliseconds added to it.
   */
  plusMilliseconds(millisecondsToAdd: number): Timestamp {
    const duration = Duration.fromObject({ milliseconds: millisecondsToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with seconds added to it.
   */
  plusSeconds(secondsToAdd: number): Timestamp {
    const duration = Duration.fromObject({ seconds: secondsToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with minutes added to it.
   */
  plusMinutes(minutesToAdd: number): Timestamp {
    const duration = Duration.fromObject({ minutes: minutesToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with hours added to it.
   */
  plusHours(hoursToAdd: number): Timestamp {
    const duration = Duration.fromObject({ hours: hoursToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with days added to it.
   */
  plusDays(daysToAdd: number): Timestamp {
    const duration = Duration.fromObject({ days: daysToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with weeks added to it.
   */
  plusWeeks(weeksToAdd: number): Timestamp {
    const duration = Duration.fromObject({ weeks: weeksToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with months added to it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  plusMonths(monthsToAdd: number): Timestamp {
    const duration = Duration.fromObject({ months: monthsToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }

  /**
   * Returns new Timestamp with years added to it.
   */
  plusYears(yearsToAdd: number): Timestamp {
    const duration = Duration.fromObject({ years: yearsToAdd });
    return new Timestamp(this.dateTime.plus(duration));
  }
}
