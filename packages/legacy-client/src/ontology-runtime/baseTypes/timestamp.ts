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

import type { LocalDate } from "./localDate";
/**
 * Type representing an instant in time.
 * Offset is always UTC+00:00
 */
export class Timestamp {
  type: "Timestamp";
  /**
   * Returns a Timestamp representing the current time in UTC.
   */
  static now(): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Parse timestamp from an ISO 8601 string.
   * Ambiguous input is assumed to be in UTC.
   *
   * @param dateTimeString
   */
  static fromISOString(dateTimeString: string): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns a Timestamp representing milliseconds from epoch in UTC.
   *
   * @param milliseconds number of milliseconds since Unix epoch
   */
  static fromEpochMilli(milliseconds: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Creates a Timestamp in UTC from a JS Date.
   *
   * @param date
   */
  static fromJsDate(date: Date): Timestamp {
    throw new Error("not implemented");
  }

  private dateTime;
  private constructor() {
    throw new Error("not implemented");
  }

  /**
   * Gets year in the current timezone offset.
   */
  getYear(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets month (1-12) in the current timezone offset.
   */
  getMonth(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets day of month (1-31) in the current timezone offset.
   */
  getDayOfMonth(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets hours (0-23) in the current timezone offset.
   */
  getHours(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets minutes (0-59) in the current timezone offset.
   */
  getMinutes(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets seconds (0-59) in the current timezone offset.
   */
  getSeconds(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets milliseconds (0-999) in the current timezone offset.
   */
  getMilliseconds(): number {
    throw new Error("not implemented");
  }

  /**
   * A time-zone offset from Greenwich/UTC in minutes.
   */
  getTimezoneOffset(): number {
    throw new Error("not implemented");
  }

  /**
   * Gets milliseconds from epoch.
   */
  getTime(): number {
    throw new Error("not implemented");
  }

  /**
   * Returns the epoch time in millisecond.
   */
  valueOf(): number {
    throw new Error("not implemented");
  }

  /**
   * Checks if the timestamp represents to the same instant in time as another timestamp.
   */
  isEqual(other: Timestamp): boolean {
    throw new Error("not implemented");
  }

  /**
   * Returns a javascript Date for the same instant in time.
   */
  toJsDate(): Date {
    throw new Error("not implemented");
  }

  /**
   * Returns a LocalDate for the day in the current timezone offset.
   */
  toLocalDate(): LocalDate {
    throw new Error("not implemented");
  }

  /**
   * Converts timestamp to an ISO 8601 string.
   * The timezone-offset is maintained.
   */
  toISOString(): string {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with milliseconds subtracted from it.
   */
  minusMilliseconds(millisecondsToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with seconds subtracted from it.
   */
  minusSeconds(secondsToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with minutes subtracted from it.
   */
  minusMinutes(minutesToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with hours subtracted from it.
   */
  minusHours(hoursToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with days subtracted from it.
   */
  minusDays(daysToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with weeks subtracted from it.
   */
  minusWeeks(weeksToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with months subtracted from it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  minusMonths(monthsToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with years subtracted from it.
   */
  minusYears(yearsToSubtract: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with milliseconds added to it.
   */
  plusMilliseconds(millisecondsToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with seconds added to it.
   */
  plusSeconds(secondsToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with minutes added to it.
   */
  plusMinutes(minutesToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with hours added to it.
   */
  plusHours(hoursToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with days added to it.
   */
  plusDays(daysToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with weeks added to it.
   */
  plusWeeks(weeksToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with months added to it.
   * If the day of the month on the original date is greater than the number of days in the final month,
   * the day of the month will change to the last day in the final month.
   */
  plusMonths(monthsToAdd: number): Timestamp {
    throw new Error("not implemented");
  }

  /**
   * Returns new Timestamp with years added to it.
   */
  plusYears(yearsToAdd: number): Timestamp {
    throw new Error("not implemented");
  }
}
