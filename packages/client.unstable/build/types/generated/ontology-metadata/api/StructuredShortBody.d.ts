import type { NotificationResultTypeLink } from "./NotificationResultTypeLink.js";
/**
* An action notification's structured short body.
*/
export interface StructuredShortBody {
	heading: string;
	content: string;
	links: Array<NotificationResultTypeLink>;
}
