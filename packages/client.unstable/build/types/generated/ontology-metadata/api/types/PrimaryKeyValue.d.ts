import type { BooleanValue } from "./BooleanValue.js";
import type { DateValue } from "./DateValue.js";
import type { DoubleValue } from "./DoubleValue.js";
import type { IntegerValue } from "./IntegerValue.js";
import type { LongValue } from "./LongValue.js";
import type { StringValue } from "./StringValue.js";
import type { TimestampValue } from "./TimestampValue.js";
export interface PrimaryKeyValue_boolean {
	type: "boolean";
	boolean: BooleanValue;
}
export interface PrimaryKeyValue_integer {
	type: "integer";
	integer: IntegerValue;
}
export interface PrimaryKeyValue_long {
	type: "long";
	long: LongValue;
}
export interface PrimaryKeyValue_double {
	type: "double";
	double: DoubleValue;
}
export interface PrimaryKeyValue_string {
	type: "string";
	string: StringValue;
}
export interface PrimaryKeyValue_date {
	type: "date";
	date: DateValue;
}
export interface PrimaryKeyValue_timestamp {
	type: "timestamp";
	timestamp: TimestampValue;
}
export type PrimaryKeyValue = PrimaryKeyValue_boolean | PrimaryKeyValue_integer | PrimaryKeyValue_long | PrimaryKeyValue_double | PrimaryKeyValue_string | PrimaryKeyValue_date | PrimaryKeyValue_timestamp;
