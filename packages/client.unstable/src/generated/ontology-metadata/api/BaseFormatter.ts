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

import type { DateFormatter } from "./DateFormatter.js";
import type { KnownFormatter } from "./KnownFormatter.js";
import type { NumberFormatter } from "./NumberFormatter.js";
import type { StringFormatter } from "./StringFormatter.js";
import type { TimeDependentFormatter } from "./TimeDependentFormatter.js";
import type { TimestampFormatter } from "./TimestampFormatter.js";
export interface BaseFormatter_knownFormatter {
  type: "knownFormatter";
  knownFormatter: KnownFormatter;
}

export interface BaseFormatter_number {
  type: "number";
  number: NumberFormatter;
}

export interface BaseFormatter_timestamp {
  type: "timestamp";
  timestamp: TimestampFormatter;
}

export interface BaseFormatter_date {
  type: "date";
  date: DateFormatter;
}

export interface BaseFormatter_string {
  type: "string";
  string: StringFormatter;
}

export interface BaseFormatter_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentFormatter;
}
/**
 * The basic formatting behavior.
 */
export type BaseFormatter =
  | BaseFormatter_knownFormatter
  | BaseFormatter_number
  | BaseFormatter_timestamp
  | BaseFormatter_date
  | BaseFormatter_string
  | BaseFormatter_timeDependent;
