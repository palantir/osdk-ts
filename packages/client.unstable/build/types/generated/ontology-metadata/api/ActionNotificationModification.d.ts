import type { ActionNotificationBodyModification } from "./ActionNotificationBodyModification.js";
import type { ActionNotificationRecipientsModification } from "./ActionNotificationRecipientsModification.js";
/**
* A notification that will be triggered on successful completion of an action.
*/
export interface ActionNotificationModification {
	toRecipients: ActionNotificationRecipientsModification;
	body: ActionNotificationBodyModification;
}
