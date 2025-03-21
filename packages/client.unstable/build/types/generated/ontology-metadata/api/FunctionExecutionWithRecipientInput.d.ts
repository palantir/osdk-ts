import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { NotificationRecipient } from "./NotificationRecipient.js";
export interface FunctionExecutionWithRecipientInput_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: LogicRuleValue;
}
export interface FunctionExecutionWithRecipientInput_recipient {
	type: "recipient";
	recipient: NotificationRecipient;
}
/**
* Encapsulates either a LogicRuleValue or a NotificationRecipient.
*/
export type FunctionExecutionWithRecipientInput = FunctionExecutionWithRecipientInput_logicRuleValue | FunctionExecutionWithRecipientInput_recipient;
