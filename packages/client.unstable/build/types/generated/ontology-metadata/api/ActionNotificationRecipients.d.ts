import type { FunctionGeneratedActionNotificationRecipients } from "./FunctionGeneratedActionNotificationRecipients.js";
import type { ParameterActionNotificationRecipients } from "./ParameterActionNotificationRecipients.js";
export interface ActionNotificationRecipients_parameter {
	type: "parameter";
	parameter: ParameterActionNotificationRecipients;
}
export interface ActionNotificationRecipients_functionGenerated {
	type: "functionGenerated";
	functionGenerated: FunctionGeneratedActionNotificationRecipients;
}
/**
* A notification's recipients.
*/
export type ActionNotificationRecipients = ActionNotificationRecipients_parameter | ActionNotificationRecipients_functionGenerated;
