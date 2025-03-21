import type { FunctionGeneratedNotificationBody } from "./FunctionGeneratedNotificationBody.js";
import type { TemplateNotificationBody } from "./TemplateNotificationBody.js";
export interface ActionNotificationBody_templateNotification {
	type: "templateNotification";
	templateNotification: TemplateNotificationBody;
}
export interface ActionNotificationBody_functionGenerated {
	type: "functionGenerated";
	functionGenerated: FunctionGeneratedNotificationBody;
}
/**
* The body of an action's notification
*/
export type ActionNotificationBody = ActionNotificationBody_templateNotification | ActionNotificationBody_functionGenerated;
