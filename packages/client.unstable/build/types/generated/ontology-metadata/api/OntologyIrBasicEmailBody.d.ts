import type { OntologyIrNotificationResultTypeLink } from "./OntologyIrNotificationResultTypeLink.js";
/**
* A basic action notification's email body. Uses Handlebars templating.
*/
export interface OntologyIrBasicEmailBody {
	subject: string;
	emailContent: string;
	links: Array<OntologyIrNotificationResultTypeLink>;
}
