import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { UserValue } from "./UserValue.js";
export interface NotificationTemplateInputValue_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValue;
}
export interface NotificationTemplateInputValue_recipientValue {
	type: "recipientValue";
	recipientValue: UserValue;
}
export interface NotificationTemplateInputValue_actionTriggererValue {
	type: "actionTriggererValue";
	actionTriggererValue: UserValue;
}
/**
* All the types that can be used as a value for a Notification template's inputs.
*/
export type NotificationTemplateInputValue = NotificationTemplateInputValue_logicRuleValue | NotificationTemplateInputValue_recipientValue | NotificationTemplateInputValue_actionTriggererValue;
