import type { ComparisonOperator } from "./ComparisonOperator.js";
import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValue } from "./ConditionValue.js";
export interface ComparisonCondition {
	operator: ComparisonOperator;
	left: ConditionValue;
	right: ConditionValue;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
