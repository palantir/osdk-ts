import type { InterfaceParameterPropertyValue } from "./InterfaceParameterPropertyValue.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterLength } from "./ParameterLength.js";
import type { StaticValue } from "./StaticValue.js";
import type { UserProperty } from "./UserProperty.js";
export interface ConditionValue_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface ConditionValue_staticValue {
	type: "staticValue";
	staticValue: StaticValue;
}
export interface ConditionValue_objectParameterPropertyValue {
	type: "objectParameterPropertyValue";
	objectParameterPropertyValue: ObjectParameterPropertyValue;
}
export interface ConditionValue_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
export interface ConditionValue_userProperty {
	type: "userProperty";
	userProperty: UserProperty;
}
export interface ConditionValue_parameterLength {
	type: "parameterLength";
	parameterLength: ParameterLength;
}
export type ConditionValue = ConditionValue_parameterId | ConditionValue_staticValue | ConditionValue_objectParameterPropertyValue | ConditionValue_interfaceParameterPropertyValue | ConditionValue_userProperty | ConditionValue_parameterLength;
