import type { BooleanFilterValue } from "./BooleanFilterValue.js";
import type { DateFilterValue } from "./DateFilterValue.js";
import type { DecimalFilterValue } from "./DecimalFilterValue.js";
import type { DoubleFilterValue } from "./DoubleFilterValue.js";
import type { IntegerFilterValue } from "./IntegerFilterValue.js";
import type { LongFilterValue } from "./LongFilterValue.js";
import type { StringFilterValue } from "./StringFilterValue.js";
import type { TimestampFilterValue } from "./TimestampFilterValue.js";
export interface AggregationFilterValue_string {
	type: "string";
	string: StringFilterValue;
}
export interface AggregationFilterValue_integer {
	type: "integer";
	integer: IntegerFilterValue;
}
export interface AggregationFilterValue_long {
	type: "long";
	long: LongFilterValue;
}
export interface AggregationFilterValue_double {
	type: "double";
	double: DoubleFilterValue;
}
export interface AggregationFilterValue_decimal {
	type: "decimal";
	decimal: DecimalFilterValue;
}
export interface AggregationFilterValue_boolean {
	type: "boolean";
	boolean: BooleanFilterValue;
}
export interface AggregationFilterValue_date {
	type: "date";
	date: DateFilterValue;
}
export interface AggregationFilterValue_timestamp {
	type: "timestamp";
	timestamp: TimestampFilterValue;
}
/**
* A value used by an aggregation filter to compare to object fields when filtering objects.
*/
export type AggregationFilterValue = AggregationFilterValue_string | AggregationFilterValue_integer | AggregationFilterValue_long | AggregationFilterValue_double | AggregationFilterValue_decimal | AggregationFilterValue_boolean | AggregationFilterValue_date | AggregationFilterValue_timestamp;
