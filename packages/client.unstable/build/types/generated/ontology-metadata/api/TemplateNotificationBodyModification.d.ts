import type { EmailBodyModification } from "./EmailBodyModification.js";
import type { HandlebarsInputName } from "./HandlebarsInputName.js";
import type { NotificationTemplateInputValueModification } from "./NotificationTemplateInputValueModification.js";
import type { ShortBodyModification } from "./ShortBodyModification.js";
/**
* The body of a notification based on a template.
*/
export interface TemplateNotificationBodyModification {
	inputs: Record<HandlebarsInputName, NotificationTemplateInputValueModification>;
	emailBody: EmailBodyModification;
	shortBody: ShortBodyModification;
}
