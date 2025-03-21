import type { ComparisonOperator } from "./ComparisonOperator.js";
import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValueModification } from "./ConditionValueModification.js";
export interface ComparisonConditionModification {
	operator: ComparisonOperator;
	left: ConditionValueModification;
	right: ConditionValueModification;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
