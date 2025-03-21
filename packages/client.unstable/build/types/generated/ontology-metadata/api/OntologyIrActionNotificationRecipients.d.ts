import type { OntologyIrFunctionGeneratedActionNotificationRecipients } from "./OntologyIrFunctionGeneratedActionNotificationRecipients.js";
import type { OntologyIrParameterActionNotificationRecipients } from "./OntologyIrParameterActionNotificationRecipients.js";
export interface OntologyIrActionNotificationRecipients_parameter {
	type: "parameter";
	parameter: OntologyIrParameterActionNotificationRecipients;
}
export interface OntologyIrActionNotificationRecipients_functionGenerated {
	type: "functionGenerated";
	functionGenerated: OntologyIrFunctionGeneratedActionNotificationRecipients;
}
/**
* A notification's recipients.
*/
export type OntologyIrActionNotificationRecipients = OntologyIrActionNotificationRecipients_parameter | OntologyIrActionNotificationRecipients_functionGenerated;
