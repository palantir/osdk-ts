import type { OntologyIrActionNotificationBody } from "./OntologyIrActionNotificationBody.js";
import type { OntologyIrActionNotificationRecipients } from "./OntologyIrActionNotificationRecipients.js";
/**
* A notification that will be triggered on successful completion of an action.
*/
export interface OntologyIrActionNotification {
	toRecipients: OntologyIrActionNotificationRecipients;
	body: OntologyIrActionNotificationBody;
}
