import type { FunctionGeneratedActionNotificationRecipientsModification } from "./FunctionGeneratedActionNotificationRecipientsModification.js";
import type { ParameterActionNotificationRecipientsModification } from "./ParameterActionNotificationRecipientsModification.js";
export interface ActionNotificationRecipientsModification_parameter {
	type: "parameter";
	parameter: ParameterActionNotificationRecipientsModification;
}
export interface ActionNotificationRecipientsModification_functionGenerated {
	type: "functionGenerated";
	functionGenerated: FunctionGeneratedActionNotificationRecipientsModification;
}
/**
* A notification's recipients.
*/
export type ActionNotificationRecipientsModification = ActionNotificationRecipientsModification_parameter | ActionNotificationRecipientsModification_functionGenerated;
