import type { DateFilterValue } from "./DateFilterValue.js";
import type { DecimalFilterValue } from "./DecimalFilterValue.js";
import type { DoubleFilterValue } from "./DoubleFilterValue.js";
import type { IntegerFilterValue } from "./IntegerFilterValue.js";
import type { LongFilterValue } from "./LongFilterValue.js";
import type { TimestampFilterValue } from "./TimestampFilterValue.js";
export interface RangeAggregationFilterValue_integer {
	type: "integer";
	integer: IntegerFilterValue;
}
export interface RangeAggregationFilterValue_long {
	type: "long";
	long: LongFilterValue;
}
export interface RangeAggregationFilterValue_double {
	type: "double";
	double: DoubleFilterValue;
}
export interface RangeAggregationFilterValue_decimal {
	type: "decimal";
	decimal: DecimalFilterValue;
}
export interface RangeAggregationFilterValue_date {
	type: "date";
	date: DateFilterValue;
}
export interface RangeAggregationFilterValue_timestamp {
	type: "timestamp";
	timestamp: TimestampFilterValue;
}
/**
* A value used by a range aggregation filter to compare to object fields when filtering objects.
*/
export type RangeAggregationFilterValue = RangeAggregationFilterValue_integer | RangeAggregationFilterValue_long | RangeAggregationFilterValue_double | RangeAggregationFilterValue_decimal | RangeAggregationFilterValue_date | RangeAggregationFilterValue_timestamp;
