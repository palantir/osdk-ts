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

import type {
  CompileTimeMetadata,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { AggregatableKeys } from "../aggregate/AggregatableKeys.js";
import { TimeDurationMapping } from "../mapping/DurationMapping.js";
import type { GroupByMapper } from "./GroupByMapper.js";

export type GroupByClause<
  Q extends ObjectOrInterfaceDefinition<any, any>,
> = {
  [P in AggregatableKeys<Q>]?: GroupByEntry<Q, P>;
};

type BaseGroupByValue = "exact" | { $exactWithLimit: number };
export type GroupByRange<T> = [T, T];

export type StringGroupByValue = BaseGroupByValue;

export type NumericGroupByValue = BaseGroupByValue | {
  $fixedWidth: number;
} | { $ranges: GroupByRange<number>[] };

export type TimestampGroupByValue =
  | BaseGroupByValue
  | { $ranges: GroupByRange<string>[] }
  | { $duration: TimestampDurationGroupBy };

export type DateGroupByValue =
  | BaseGroupByValue
  | { $ranges: GroupByRange<string>[] }
  | { $duration: DatetimeDurationGroupBy };

export type BooleanGroupByValue = BaseGroupByValue;

export type TimestampTimeUnits =
  | DateTimeUnits
  | "SECONDS"
  | "MINUTES"
  | "HOURS";

export type DateTimeUnits = "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "QUARTERS";
export const DurationMapping = {
  ...TimeDurationMapping,
  "quarter": "QUARTERS",
  "quarters": "QUARTERS",
} satisfies Record<string, DateTimeUnits | TimestampTimeUnits>;

interface TimeValueMapping {
  SECONDS: number;
  MINUTES: number;
  HOURS: number;
  DAYS: number;
  WEEKS: 1;
  MONTHS: 1;
  YEARS: 1;
  QUARTERS: 1;
}

type DurationGroupBy<A> = {
  [K in keyof typeof DurationMapping]: typeof DurationMapping[K] extends A
    ? [TimeValueMapping[typeof DurationMapping[K]], K]
    : never;
}[keyof typeof DurationMapping];

type TimestampDurationGroupBy = DurationGroupBy<TimestampTimeUnits>;
type DatetimeDurationGroupBy = DurationGroupBy<DateTimeUnits>;

type GroupByEntry<
  Q extends ObjectOrInterfaceDefinition,
  P extends AggregatableKeys<Q>,
> = CompileTimeMetadata<Q>["properties"][P]["type"] extends keyof GroupByMapper
  ? GroupByMapper[CompileTimeMetadata<Q>["properties"][P]["type"]]
  : never;

export type AllGroupByValues = GroupByMapper[keyof GroupByMapper];
