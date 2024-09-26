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

export const TimeDurationMapping = {
  "sec": "SECONDS",
  "seconds": "SECONDS",
  "min": "MINUTES",
  "minute": "MINUTES",
  "minutes": "MINUTES",
  "hr": "HOURS",
  "hrs": "HOURS",
  "hour": "HOURS",
  "hours": "HOURS",
  "day": "DAYS",
  "days": "DAYS",
  "wk": "WEEKS",
  "week": "WEEKS",
  "weeks": "WEEKS",
  "mos": "MONTHS",
  "month": "MONTHS",
  "months": "MONTHS",
  "yr": "YEARS",
  "year": "YEARS",
  "years": "YEARS",
} satisfies Record<
  string,
  | "YEARS"
  | "MONTHS"
  | "WEEKS"
  | "DAYS"
  | "HOURS"
  | "MINUTES"
  | "SECONDS"
>;
