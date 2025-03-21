import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { OntologyIrInterfaceParameterPropertyValue } from "./OntologyIrInterfaceParameterPropertyValue.js";
import type { OntologyIrStaticValue } from "./OntologyIrStaticValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterLength } from "./ParameterLength.js";
import type { UserProperty } from "./UserProperty.js";
export interface OntologyIrConditionValue_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface OntologyIrConditionValue_staticValue {
	type: "staticValue";
	staticValue: OntologyIrStaticValue;
}
export interface OntologyIrConditionValue_objectParameterPropertyValue {
	type: "objectParameterPropertyValue";
	objectParameterPropertyValue: ObjectParameterPropertyValue;
}
export interface OntologyIrConditionValue_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}
export interface OntologyIrConditionValue_userProperty {
	type: "userProperty";
	userProperty: UserProperty;
}
export interface OntologyIrConditionValue_parameterLength {
	type: "parameterLength";
	parameterLength: ParameterLength;
}
export type OntologyIrConditionValue = OntologyIrConditionValue_parameterId | OntologyIrConditionValue_staticValue | OntologyIrConditionValue_objectParameterPropertyValue | OntologyIrConditionValue_interfaceParameterPropertyValue | OntologyIrConditionValue_userProperty | OntologyIrConditionValue_parameterLength;
