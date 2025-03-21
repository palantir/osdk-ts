import type { NotificationResultTypeLinkModification } from "./NotificationResultTypeLinkModification.js";
/**
* An action notification's structured short body.
*/
export interface StructuredShortBodyModification {
	heading: string;
	content: string;
	links: Array<NotificationResultTypeLinkModification>;
}
