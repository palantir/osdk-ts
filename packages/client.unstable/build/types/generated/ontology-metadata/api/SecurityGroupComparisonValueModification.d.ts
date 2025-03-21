import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { SecurityGroupComparisonConstant } from "./SecurityGroupComparisonConstant.js";
import type { SecurityGroupComparisonUserProperty } from "./SecurityGroupComparisonUserProperty.js";
export interface SecurityGroupComparisonValueModification_constant {
	type: "constant";
	constant: SecurityGroupComparisonConstant;
}
export interface SecurityGroupComparisonValueModification_property {
	type: "property";
	property: PropertyTypeId;
}
export interface SecurityGroupComparisonValueModification_userProperty {
	type: "userProperty";
	userProperty: SecurityGroupComparisonUserProperty;
}
export type SecurityGroupComparisonValueModification = SecurityGroupComparisonValueModification_constant | SecurityGroupComparisonValueModification_property | SecurityGroupComparisonValueModification_userProperty;
