import type { NotificationResultTypeLink } from "./NotificationResultTypeLink.js";
/**
* A basic action notification's email body. Uses Handlebars templating.
*/
export interface BasicEmailBody {
	subject: string;
	emailContent: string;
	links: Array<NotificationResultTypeLink>;
}
