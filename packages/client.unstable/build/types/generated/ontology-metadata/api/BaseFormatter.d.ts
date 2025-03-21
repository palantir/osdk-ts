import type { BooleanFormatter } from "./BooleanFormatter.js";
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
export interface BaseFormatter_boolean {
	type: "boolean";
	boolean: BooleanFormatter;
}
/**
* The basic formatting behavior.
*/
export type BaseFormatter = BaseFormatter_knownFormatter | BaseFormatter_number | BaseFormatter_timestamp | BaseFormatter_date | BaseFormatter_string | BaseFormatter_timeDependent | BaseFormatter_boolean;
