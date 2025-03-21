import type { OntologyIrSecurityGroupComparisonValue } from "./OntologyIrSecurityGroupComparisonValue.js";
import type { SecurityGroupComparisonOperator } from "./SecurityGroupComparisonOperator.js";
export interface OntologyIrSecurityGroupComparisonCondition {
	operator: SecurityGroupComparisonOperator;
	left: OntologyIrSecurityGroupComparisonValue;
	right: OntologyIrSecurityGroupComparisonValue;
}
