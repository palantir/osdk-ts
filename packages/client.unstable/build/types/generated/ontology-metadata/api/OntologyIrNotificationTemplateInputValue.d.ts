import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { UserValue } from "./UserValue.js";
export interface OntologyIrNotificationTemplateInputValue_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: OntologyIrLogicRuleValue;
}
export interface OntologyIrNotificationTemplateInputValue_recipientValue {
	type: "recipientValue";
	recipientValue: UserValue;
}
export interface OntologyIrNotificationTemplateInputValue_actionTriggererValue {
	type: "actionTriggererValue";
	actionTriggererValue: UserValue;
}
/**
* All the types that can be used as a value for a Notification template's inputs.
*/
export type OntologyIrNotificationTemplateInputValue = OntologyIrNotificationTemplateInputValue_logicRuleValue | OntologyIrNotificationTemplateInputValue_recipientValue | OntologyIrNotificationTemplateInputValue_actionTriggererValue;
