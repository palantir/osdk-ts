import type { FunctionRuleModification } from "./FunctionRuleModification.js";
/**
* Notification recipients determined from a Function execution.
*/
export interface FunctionGeneratedActionNotificationRecipientsModification {
	functionExecution: FunctionRuleModification;
}
