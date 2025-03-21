import type { ActionNotificationBodyFunctionExecutionModification } from "./ActionNotificationBodyFunctionExecutionModification.js";
/**
* The body of a notification based on the result of a function execution.
*/
export interface FunctionGeneratedNotificationBodyModification {
	functionExecution: ActionNotificationBodyFunctionExecutionModification;
}
