/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { PropertyTypeReferenceOrStringConstant } from "./PropertyValueFormattingUtils.js";

export interface PropertyDateFormattingRule {
  type: "date";
  format: DatetimeFormat;
}

export interface PropertyTimestampFormattingRule {
  type: "timestamp";
  format: DatetimeFormat;
  displayTimezone: DatetimeTimezone;
}

export type DatetimeFormat = DatetimeStringFormat | DatetimeLocalizedFormat;

/**
 * A custom date format pattern.
 */
export interface DatetimeStringFormat {
  type: "stringFormat";
  pattern: string;
}

/**
 * Predefined localized date/time formats.
 */
export interface DatetimeLocalizedFormat {
  type: "localizedFormat";
  format: DatetimeLocalizedFormatType;
}

export type DatetimeLocalizedFormatType =
  | "DATE_FORMAT_RELATIVE_TO_NOW"
  | "DATE_FORMAT_DATE"
  | "DATE_FORMAT_YEAR_AND_MONTH"
  | "DATE_FORMAT_DATE_TIME"
  | "DATE_FORMAT_DATE_TIME_SHORT"
  | "DATE_FORMAT_TIME"
  | "DATE_FORMAT_ISO_INSTANT";

export type DatetimeTimezone = DatetimeTimezoneStatic | DatetimeTimezoneUser;

export interface DatetimeTimezoneStatic {
  type: "static";
  zoneId: PropertyTypeReferenceOrStringConstant;
}

/**
 * Use the user's local timezone.
 */
export interface DatetimeTimezoneUser {
  type: "user";
}
