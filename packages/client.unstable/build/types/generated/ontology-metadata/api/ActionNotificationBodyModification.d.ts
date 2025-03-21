import type { FunctionGeneratedNotificationBodyModification } from "./FunctionGeneratedNotificationBodyModification.js";
import type { TemplateNotificationBodyModification } from "./TemplateNotificationBodyModification.js";
export interface ActionNotificationBodyModification_templateNotification {
	type: "templateNotification";
	templateNotification: TemplateNotificationBodyModification;
}
export interface ActionNotificationBodyModification_functionGenerated {
	type: "functionGenerated";
	functionGenerated: FunctionGeneratedNotificationBodyModification;
}
/**
* The body of an action's notification
*/
export type ActionNotificationBodyModification = ActionNotificationBodyModification_templateNotification | ActionNotificationBodyModification_functionGenerated;
