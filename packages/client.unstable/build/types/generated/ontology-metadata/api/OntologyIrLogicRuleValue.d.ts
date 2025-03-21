import type { CurrentTime } from "./CurrentTime.js";
import type { CurrentUser } from "./CurrentUser.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { OntologyIrInterfaceParameterPropertyValue } from "./OntologyIrInterfaceParameterPropertyValue.js";
import type { OntologyIrStaticValue } from "./OntologyIrStaticValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { UniqueIdentifier } from "./UniqueIdentifier.js";
import type { WebhookOutputParamName } from "./WebhookOutputParamName.js";
export interface OntologyIrLogicRuleValue_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface OntologyIrLogicRuleValue_staticValue {
	type: "staticValue";
	staticValue: OntologyIrStaticValue;
}
export interface OntologyIrLogicRuleValue_objectParameterPropertyValue {
	type: "objectParameterPropertyValue";
	objectParameterPropertyValue: ObjectParameterPropertyValue;
}
export interface OntologyIrLogicRuleValue_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: OntologyIrInterfaceParameterPropertyValue;
}
export interface OntologyIrLogicRuleValue_currentUser {
	type: "currentUser";
	currentUser: CurrentUser;
}
export interface OntologyIrLogicRuleValue_currentTime {
	type: "currentTime";
	currentTime: CurrentTime;
}
export interface OntologyIrLogicRuleValue_uniqueIdentifier {
	type: "uniqueIdentifier";
	uniqueIdentifier: UniqueIdentifier;
}
export interface OntologyIrLogicRuleValue_synchronousWebhookOutput {
	type: "synchronousWebhookOutput";
	synchronousWebhookOutput: WebhookOutputParamName;
}
/**
* These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
* effects.
*/
export type OntologyIrLogicRuleValue = OntologyIrLogicRuleValue_parameterId | OntologyIrLogicRuleValue_staticValue | OntologyIrLogicRuleValue_objectParameterPropertyValue | OntologyIrLogicRuleValue_interfaceParameterPropertyValue | OntologyIrLogicRuleValue_currentUser | OntologyIrLogicRuleValue_currentTime | OntologyIrLogicRuleValue_uniqueIdentifier | OntologyIrLogicRuleValue_synchronousWebhookOutput;
