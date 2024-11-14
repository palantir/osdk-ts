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

const isoRegex =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;

/**
 * Extracts the date from a ISO 8601 formatted date time string. Throws if the input is not in the correct format.
 * @param dateTime An ISO 8601 formatted date time string
 * @returns The date part of the input string
 */
export const extractDate = (dateTime: string) => {
  if (!isoRegex.test(dateTime)) {
    throw new Error(
      `Invalid date format. Expected ISO 8601 format, but received: ${dateTime}`,
    );
  }

  return dateTime.split(
    "T",
  )[0];
};

/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in UTC time.
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
export const extractDateInUTC = (date: Date) => {
  const inputDate = new Date(date);

  return inputDate.toISOString().split(
    "T",
  )[0];
};

/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in the local time zone.
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
export const extractDateInLocalTime = (date: Date) => {
  return generateOffsetUtcString(date).split(
    "T",
  )[0];
};

/** @internal */
export const generateOffsetUtcString = (date: Date) => {
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() - offsetMs).toISOString();
};
