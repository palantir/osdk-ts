import type { CurrentTime } from "./CurrentTime.js";
import type { CurrentUser } from "./CurrentUser.js";
import type { InterfaceParameterPropertyValueModification } from "./InterfaceParameterPropertyValueModification.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { StaticValue } from "./StaticValue.js";
import type { UniqueIdentifier } from "./UniqueIdentifier.js";
import type { WebhookOutputParamName } from "./WebhookOutputParamName.js";
export interface LogicRuleValueModification_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface LogicRuleValueModification_staticValue {
	type: "staticValue";
	staticValue: StaticValue;
}
export interface LogicRuleValueModification_objectParameterPropertyValue {
	type: "objectParameterPropertyValue";
	objectParameterPropertyValue: ObjectParameterPropertyValue;
}
export interface LogicRuleValueModification_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: InterfaceParameterPropertyValueModification;
}
export interface LogicRuleValueModification_currentUser {
	type: "currentUser";
	currentUser: CurrentUser;
}
export interface LogicRuleValueModification_currentTime {
	type: "currentTime";
	currentTime: CurrentTime;
}
export interface LogicRuleValueModification_uniqueIdentifier {
	type: "uniqueIdentifier";
	uniqueIdentifier: UniqueIdentifier;
}
export interface LogicRuleValueModification_synchronousWebhookOutput {
	type: "synchronousWebhookOutput";
	synchronousWebhookOutput: WebhookOutputParamName;
}
/**
* These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
* effects.
*/
export type LogicRuleValueModification = LogicRuleValueModification_parameterId | LogicRuleValueModification_staticValue | LogicRuleValueModification_objectParameterPropertyValue | LogicRuleValueModification_interfaceParameterPropertyValue | LogicRuleValueModification_currentUser | LogicRuleValueModification_currentTime | LogicRuleValueModification_uniqueIdentifier | LogicRuleValueModification_synchronousWebhookOutput;
