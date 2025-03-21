import type { StringConditionValue } from "./StringConditionValue.js";
export interface StringComparisonOperator_contains {
	type: "contains";
	contains: StringConditionValue;
}
export interface StringComparisonOperator_startsWith {
	type: "startsWith";
	startsWith: StringConditionValue;
}
export interface StringComparisonOperator_endsWith {
	type: "endsWith";
	endsWith: StringConditionValue;
}
export interface StringComparisonOperator_exactly {
	type: "exactly";
	exactly: StringConditionValue;
}
export type StringComparisonOperator = StringComparisonOperator_contains | StringComparisonOperator_startsWith | StringComparisonOperator_endsWith | StringComparisonOperator_exactly;
