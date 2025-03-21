import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { SecurityGroupComparisonConstant } from "./SecurityGroupComparisonConstant.js";
import type { SecurityGroupComparisonUserProperty } from "./SecurityGroupComparisonUserProperty.js";
export interface SecurityGroupComparisonValue_constant {
	type: "constant";
	constant: SecurityGroupComparisonConstant;
}
export interface SecurityGroupComparisonValue_property {
	type: "property";
	property: PropertyTypeRid;
}
export interface SecurityGroupComparisonValue_userProperty {
	type: "userProperty";
	userProperty: SecurityGroupComparisonUserProperty;
}
export type SecurityGroupComparisonValue = SecurityGroupComparisonValue_constant | SecurityGroupComparisonValue_property | SecurityGroupComparisonValue_userProperty;
