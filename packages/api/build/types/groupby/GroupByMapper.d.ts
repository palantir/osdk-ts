import type { BooleanGroupByValue, DateGroupByValue, NumericGroupByValue, StringGroupByValue, TimestampGroupByValue } from "./GroupByClause.js";
export interface GroupByMapper {
	string: StringGroupByValue;
	short: NumericGroupByValue;
	float: NumericGroupByValue;
	decimal: NumericGroupByValue;
	byte: NumericGroupByValue;
	double: NumericGroupByValue;
	integer: NumericGroupByValue;
	timestamp: TimestampGroupByValue;
	datetime: DateGroupByValue;
	boolean: BooleanGroupByValue;
}
