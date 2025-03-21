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

import invariant from "tiny-invariant";
const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;

/**
 * Extracts the date from a ISO 8601 formatted date time string. Throws if the input is not in the correct format.
 *
 * @param dateTime An ISO 8601 formatted date time string
 * @returns The date part of the input string
 */
export const extractDate = dateTime => {
  !(dateTime.length < 33) ? process.env.NODE_ENV !== "production" ? invariant(false, "Invalid date format. Provided input is too long.") : invariant(false) : void 0;
  !isoRegex.test(dateTime) ? process.env.NODE_ENV !== "production" ? invariant(false, `Invalid date format. Expected ISO 8601 format, but received ${dateTime}`) : invariant(false) : void 0;
  return extractDateFromIsoString(dateTime);
};

/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in UTC time.
 *
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
export const extractDateInUTC = date => {
  return extractDateFromIsoString(date.toISOString());
};

/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in the local time zone.
 *
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
export const extractDateInLocalTime = date => {
  return extractDateFromIsoString(generateOffsetUtcString(date));
};

/** @internal */
export const generateOffsetUtcString = date => {
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() - offsetMs).toISOString();
};
const extractDateFromIsoString = dateTime => {
  return dateTime.split("T")[0];
};
//# sourceMappingURL=datetimeConverters.js.map