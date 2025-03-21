import type { StringComparisonOperator } from "./StringComparisonOperator.js";
import type { ValueReference } from "./ValueReference.js";
/**
* Compare a string to a set of static values.
*/
export interface StringComparisonCondition {
	property: ValueReference;
	operator: StringComparisonOperator;
	caseSensitive: boolean;
}
