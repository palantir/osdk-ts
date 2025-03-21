import type { NotificationRecipient } from "./NotificationRecipient.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
export interface OntologyIrFunctionExecutionWithRecipientInput_logicRuleValue {
	type: "logicRuleValue";
	logicRuleValue: OntologyIrLogicRuleValue;
}
export interface OntologyIrFunctionExecutionWithRecipientInput_recipient {
	type: "recipient";
	recipient: NotificationRecipient;
}
/**
* Encapsulates either a LogicRuleValue or a NotificationRecipient.
*/
export type OntologyIrFunctionExecutionWithRecipientInput = OntologyIrFunctionExecutionWithRecipientInput_logicRuleValue | OntologyIrFunctionExecutionWithRecipientInput_recipient;
