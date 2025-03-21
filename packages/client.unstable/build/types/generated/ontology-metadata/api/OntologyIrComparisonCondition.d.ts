import type { ComparisonOperator } from "./ComparisonOperator.js";
import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
export interface OntologyIrComparisonCondition {
	operator: ComparisonOperator;
	left: OntologyIrConditionValue;
	right: OntologyIrConditionValue;
	displayMetadata: ConditionDisplayMetadata | undefined;
}
