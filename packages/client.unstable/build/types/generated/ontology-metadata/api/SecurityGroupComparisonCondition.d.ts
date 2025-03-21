import type { SecurityGroupComparisonOperator } from "./SecurityGroupComparisonOperator.js";
import type { SecurityGroupComparisonValue } from "./SecurityGroupComparisonValue.js";
export interface SecurityGroupComparisonCondition {
	operator: SecurityGroupComparisonOperator;
	left: SecurityGroupComparisonValue;
	right: SecurityGroupComparisonValue;
}
