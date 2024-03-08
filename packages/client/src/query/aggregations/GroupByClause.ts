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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { AggregatableKeys } from "./AggregatableKeys.js";
import type { GroupByMapper } from "./GroupByMapper.js";

export type GroupByClause<
  Q extends ObjectOrInterfaceDefinition<any, any>,
> = {
  [P in AggregatableKeys<Q>]?: GroupByEntry<Q, P>;
};
export type StringGroupByValue = "exact" | { exactWithLimit: number };

export type GroupByRange<T> = [T, T];
export type DurationGroupBy = [number, keyof typeof TimeUnitMapping];

export type NumericGroupByValue = "exact" | { exactWithLimit: number } | {
  fixedWidth: number;
} | { ranges: GroupByRange<number>[] };

export type TimestampGroupByValue =
  | "exact"
  | { ranges: GroupByRange<string>[] }
  | { duration: DurationGroupBy };

export type TimeUnit =
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS"
  | "QUARTERS";

export const TimeUnitMapping = {
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
  "quarter": "QUARTERS",
  "quarters": "QUARTERS",
} satisfies Record<string, TimeUnit>;

type GroupByEntry<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  P extends AggregatableKeys<Q>,
> = Q["properties"][P]["type"] extends keyof GroupByMapper
  ? GroupByMapper[Q["properties"][P]["type"]]
  : never;

export type AllGroupByValues = GroupByMapper[keyof GroupByMapper];
