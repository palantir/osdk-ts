import type { HandlebarsInputName } from "./HandlebarsInputName.js";
import type { OntologyIrEmailBody } from "./OntologyIrEmailBody.js";
import type { OntologyIrNotificationTemplateInputValue } from "./OntologyIrNotificationTemplateInputValue.js";
import type { OntologyIrShortBody } from "./OntologyIrShortBody.js";
/**
* The body of a notification based on a template.
*/
export interface OntologyIrTemplateNotificationBody {
	inputs: Record<HandlebarsInputName, OntologyIrNotificationTemplateInputValue>;
	emailBody: OntologyIrEmailBody;
	shortBody: OntologyIrShortBody;
}
