import type { ActionNotificationBody } from "./ActionNotificationBody.js";
import type { ActionNotificationRecipients } from "./ActionNotificationRecipients.js";
/**
* A notification that will be triggered on successful completion of an action.
*/
export interface ActionNotification {
	toRecipients: ActionNotificationRecipients;
	body: ActionNotificationBody;
}
