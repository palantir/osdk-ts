import type { CurrentTime } from "./CurrentTime.js";
import type { CurrentUser } from "./CurrentUser.js";
import type { InterfaceParameterPropertyValue } from "./InterfaceParameterPropertyValue.js";
import type { ObjectParameterPropertyValue } from "./ObjectParameterPropertyValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { StaticValue } from "./StaticValue.js";
import type { UniqueIdentifier } from "./UniqueIdentifier.js";
import type { WebhookOutputParamName } from "./WebhookOutputParamName.js";
export interface LogicRuleValue_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface LogicRuleValue_staticValue {
	type: "staticValue";
	staticValue: StaticValue;
}
export interface LogicRuleValue_objectParameterPropertyValue {
	type: "objectParameterPropertyValue";
	objectParameterPropertyValue: ObjectParameterPropertyValue;
}
export interface LogicRuleValue_interfaceParameterPropertyValue {
	type: "interfaceParameterPropertyValue";
	interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}
export interface LogicRuleValue_currentUser {
	type: "currentUser";
	currentUser: CurrentUser;
}
export interface LogicRuleValue_currentTime {
	type: "currentTime";
	currentTime: CurrentTime;
}
export interface LogicRuleValue_uniqueIdentifier {
	type: "uniqueIdentifier";
	uniqueIdentifier: UniqueIdentifier;
}
export interface LogicRuleValue_synchronousWebhookOutput {
	type: "synchronousWebhookOutput";
	synchronousWebhookOutput: WebhookOutputParamName;
}
/**
* These are the possible values that can be passed into LogicRules as well as Notification and Webhook side
* effects.
*/
export type LogicRuleValue = LogicRuleValue_parameterId | LogicRuleValue_staticValue | LogicRuleValue_objectParameterPropertyValue | LogicRuleValue_interfaceParameterPropertyValue | LogicRuleValue_currentUser | LogicRuleValue_currentTime | LogicRuleValue_uniqueIdentifier | LogicRuleValue_synchronousWebhookOutput;
