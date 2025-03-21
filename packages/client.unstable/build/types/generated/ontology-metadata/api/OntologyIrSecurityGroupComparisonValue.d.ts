import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { SecurityGroupComparisonConstant } from "./SecurityGroupComparisonConstant.js";
import type { SecurityGroupComparisonUserProperty } from "./SecurityGroupComparisonUserProperty.js";
export interface OntologyIrSecurityGroupComparisonValue_constant {
	type: "constant";
	constant: SecurityGroupComparisonConstant;
}
export interface OntologyIrSecurityGroupComparisonValue_property {
	type: "property";
	property: ObjectTypeFieldApiName;
}
export interface OntologyIrSecurityGroupComparisonValue_userProperty {
	type: "userProperty";
	userProperty: SecurityGroupComparisonUserProperty;
}
export type OntologyIrSecurityGroupComparisonValue = OntologyIrSecurityGroupComparisonValue_constant | OntologyIrSecurityGroupComparisonValue_property | OntologyIrSecurityGroupComparisonValue_userProperty;
