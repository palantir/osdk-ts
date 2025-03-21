import type { OntologyIrFunctionGeneratedNotificationBody } from "./OntologyIrFunctionGeneratedNotificationBody.js";
import type { OntologyIrTemplateNotificationBody } from "./OntologyIrTemplateNotificationBody.js";
export interface OntologyIrActionNotificationBody_templateNotification {
	type: "templateNotification";
	templateNotification: OntologyIrTemplateNotificationBody;
}
export interface OntologyIrActionNotificationBody_functionGenerated {
	type: "functionGenerated";
	functionGenerated: OntologyIrFunctionGeneratedNotificationBody;
}
/**
* The body of an action's notification
*/
export type OntologyIrActionNotificationBody = OntologyIrActionNotificationBody_templateNotification | OntologyIrActionNotificationBody_functionGenerated;
