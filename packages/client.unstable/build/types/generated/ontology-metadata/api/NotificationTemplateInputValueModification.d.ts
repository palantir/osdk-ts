import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { UserValue } from "./UserValue.js";
export interface NotificationTemplateInputValueModification_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValueModification;
}
export interface NotificationTemplateInputValueModification_recipientValue {
	type: "recipientValue";
	recipientValue: UserValue;
}
export interface NotificationTemplateInputValueModification_actionTriggererValue {
	type: "actionTriggererValue";
	actionTriggererValue: UserValue;
}
/**
* All the types that can be used as a value for a Notification template's inputs.
*/
export type NotificationTemplateInputValueModification = NotificationTemplateInputValueModification_logicRuleValue | NotificationTemplateInputValueModification_recipientValue | NotificationTemplateInputValueModification_actionTriggererValue;
