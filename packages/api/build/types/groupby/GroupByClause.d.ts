import type { AggregatableKeys } from "../aggregate/AggregatableKeys.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { GroupByMapper } from "./GroupByMapper.js";
export type GroupByClause<Q extends ObjectOrInterfaceDefinition> = { [P in AggregatableKeys<Q>]? : GroupByEntry<Q, P> };
type BaseGroupByValue = "exact" | {
	$exactWithLimit: number
} | ExactGroupByWithOptions;
type ExactGroupByWithOptions = {
	$exact: {
		$limit?: number
		$defaultValue?: string
	}
};
export type GroupByRange<T> = [T, T];
export type StringGroupByValue = BaseGroupByValue;
export type NumericGroupByValue = BaseGroupByValue | {
	$fixedWidth: number
} | {
	$ranges: GroupByRange<number>[]
};
export type TimestampGroupByValue = BaseGroupByValue | {
	$ranges: GroupByRange<string>[]
} | {
	$duration: TimestampDurationGroupBy
};
export type DateGroupByValue = BaseGroupByValue | {
	$ranges: GroupByRange<string>[]
} | {
	$duration: DatetimeDurationGroupBy
};
export type BooleanGroupByValue = BaseGroupByValue;
export type TimestampTimeUnits = DateTimeUnits | "SECONDS" | "MINUTES" | "HOURS";
export type DateTimeUnits = "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "QUARTERS";
export declare const DurationMapping: {
	quarter: "QUARTERS"
	quarters: "QUARTERS"
	sec: "SECONDS"
	seconds: "SECONDS"
	min: "MINUTES"
	minute: "MINUTES"
	minutes: "MINUTES"
	hr: "HOURS"
	hrs: "HOURS"
	hour: "HOURS"
	hours: "HOURS"
	day: "DAYS"
	days: "DAYS"
	wk: "WEEKS"
	week: "WEEKS"
	weeks: "WEEKS"
	mos: "MONTHS"
	month: "MONTHS"
	months: "MONTHS"
	yr: "YEARS"
	year: "YEARS"
	years: "YEARS"
};
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
type DurationGroupBy<A> = { [K in keyof typeof DurationMapping] : typeof DurationMapping[K] extends A ? [TimeValueMapping[typeof DurationMapping[K]], K] : never }[keyof typeof DurationMapping];
type TimestampDurationGroupBy = DurationGroupBy<TimestampTimeUnits>;
type DatetimeDurationGroupBy = DurationGroupBy<DateTimeUnits>;
type GroupByEntry<
	Q extends ObjectOrInterfaceDefinition,
	P extends AggregatableKeys<Q>
> = CompileTimeMetadata<Q>["properties"][P]["type"] extends keyof GroupByMapper ? GroupByMapper[CompileTimeMetadata<Q>["properties"][P]["type"]] : never;
export type AllGroupByValues = GroupByMapper[keyof GroupByMapper];
export {};
