import type { OntologyIrNotificationResultTypeLink } from "./OntologyIrNotificationResultTypeLink.js";
/**
* An action notification's structured short body.
*/
export interface OntologyIrStructuredShortBody {
	heading: string;
	content: string;
	links: Array<OntologyIrNotificationResultTypeLink>;
}
