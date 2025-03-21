import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { NotificationRecipient } from "./NotificationRecipient.js";
export interface FunctionExecutionWithRecipientInputModification_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValueModification;
}
export interface FunctionExecutionWithRecipientInputModification_recipient {
	type: "recipient";
	recipient: NotificationRecipient;
}
/**
* Encapsulates either a LogicRuleValueModification or a NotificationRecipient.
*/
export type FunctionExecutionWithRecipientInputModification = FunctionExecutionWithRecipientInputModification_logicRuleValue | FunctionExecutionWithRecipientInputModification_recipient;
