import type { BasicEmailBody } from "./BasicEmailBody.js";
export interface EmailBody_basic {
	type: "basic";
	basic: BasicEmailBody;
}
/**
* An action notification's email body. Uses Handlebars templating.
*/
export type EmailBody = EmailBody_basic;
