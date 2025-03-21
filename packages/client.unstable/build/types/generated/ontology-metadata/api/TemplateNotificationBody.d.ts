import type { EmailBody } from "./EmailBody.js";
import type { HandlebarsInputName } from "./HandlebarsInputName.js";
import type { NotificationTemplateInputValue } from "./NotificationTemplateInputValue.js";
import type { ShortBody } from "./ShortBody.js";
/**
* The body of a notification based on a template.
*/
export interface TemplateNotificationBody {
	inputs: Record<HandlebarsInputName, NotificationTemplateInputValue>;
	emailBody: EmailBody;
	shortBody: ShortBody;
}
