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

import type {
  DatetimeFormat,
  DatetimeLocalizedFormat,
  DatetimeTimezone,
} from "@osdk/api";
import type { DatetimeLocalizedFormatType } from "@osdk/foundry.ontologies";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { resolvePropertyReference } from "./propertyFormattingUtils.js";

/**
 * Formats a date/timestamp value according to the specified formatting rule
 */
export function formatDateTime(
  value: Date,
  format: DatetimeFormat,
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  locale: string,
  userTimezoneOverride?: string,
): string | undefined {
  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date.getTime())) {
    return undefined;
  }

  const resolvedTimezone = resolveTimezone(
    timezone,
    objectData,
    userTimezoneOverride,
  );

  switch (format.type) {
    case "localizedFormat":
      return formatLocalized(date, format, locale, resolvedTimezone);
    case "stringFormat":
      // TODO - pattern formatting
      return undefined;
    default:
      format satisfies never;
      return undefined;
  }
}

const INVALID_DATE_STRING = "Invalid date or timezone";

function formatLocalized(
  date: Date,
  format: DatetimeLocalizedFormat,
  locale: string,
  timezone: string | undefined,
): string | undefined {
  if (format.format === "DATE_FORMAT_ISO_INSTANT") {
    return date.toISOString();
  }
  if (format.format === "DATE_FORMAT_RELATIVE_TO_NOW") {
    // TODO (relative time formatting)
    return undefined;
  }

  const options = getLocalizedFormatOptions(format.format);
  try {
    return new Intl.DateTimeFormat(
      locale,
      timezone ? { ...options, timeZone: timezone } : options,
    ).format(date);
  } catch (_e) {
    // If a property reference is an invalid timezone we specifically say that it's invalid instead of returning undefined;
    return INVALID_DATE_STRING;
  }
}

function getLocalizedFormatOptions(
  format: Exclude<
    DatetimeLocalizedFormatType,
    "DATE_FORMAT_RELATIVE_TO_NOW" | "DATE_FORMAT_ISO_INSTANT"
  >,
): Intl.DateTimeFormatOptions {
  switch (format) {
    case "DATE_FORMAT_DATE":
      return FORMAT_DATE;

    case "DATE_FORMAT_YEAR_AND_MONTH":
      return FORMAT_YEAR_AND_MONTH;

    case "DATE_FORMAT_DATE_TIME":
      return FORMAT_DATE_TIME;

    case "DATE_FORMAT_DATE_TIME_SHORT":
      return FORMAT_DATE_TIME_SHORT;

    case "DATE_FORMAT_TIME":
      return FORMAT_TIME;

    default:
      format satisfies never;
      return {};
  }
}

const FORMAT_DATE: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
};

const FORMAT_YEAR_AND_MONTH: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

const FORMAT_DATE_TIME: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const FORMAT_DATE_TIME_SHORT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_TIME: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

function resolveTimezone(
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  userTimezoneOverride?: string,
): string | undefined {
  if (userTimezoneOverride != null) {
    return userTimezoneOverride;
  }
  if (timezone == null) {
    return undefined;
  }

  switch (timezone.type) {
    case "user":
      return undefined;
    case "static":
      return resolvePropertyReference(timezone.zoneId, objectData);
    default:
      timezone satisfies never;
      return undefined;
  }
}
