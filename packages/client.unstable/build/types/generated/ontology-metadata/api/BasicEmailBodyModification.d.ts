import type { NotificationResultTypeLinkModification } from "./NotificationResultTypeLinkModification.js";
/**
* A basic action notification's email body. Uses Handlebars templating.
*/
export interface BasicEmailBodyModification {
	subject: string;
	emailContent: string;
	links: Array<NotificationResultTypeLinkModification>;
}
