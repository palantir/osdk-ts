import type { SecurityGroupComparisonOperator } from "./SecurityGroupComparisonOperator.js";
import type { SecurityGroupComparisonValueModification } from "./SecurityGroupComparisonValueModification.js";
export interface SecurityGroupComparisonConditionModification {
	operator: SecurityGroupComparisonOperator;
	left: SecurityGroupComparisonValueModification;
	right: SecurityGroupComparisonValueModification;
}
