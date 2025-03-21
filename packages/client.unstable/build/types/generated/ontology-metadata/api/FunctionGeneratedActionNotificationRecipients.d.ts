import type { FunctionRule } from "./FunctionRule.js";
/**
* Notification recipients determined from a Function execution.
*/
export interface FunctionGeneratedActionNotificationRecipients {
	functionExecution: FunctionRule;
}
