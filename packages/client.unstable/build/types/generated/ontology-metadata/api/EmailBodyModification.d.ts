import type { BasicEmailBodyModification } from "./BasicEmailBodyModification.js";
export interface EmailBodyModification_basic {
	type: "basic";
	basic: BasicEmailBodyModification;
}
/**
* An action notification's email body. Uses Handlebars templating.
*/
export type EmailBodyModification = EmailBodyModification_basic;
