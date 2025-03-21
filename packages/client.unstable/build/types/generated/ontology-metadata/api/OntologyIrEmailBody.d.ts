import type { OntologyIrBasicEmailBody } from "./OntologyIrBasicEmailBody.js";
export interface OntologyIrEmailBody_basic {
	type: "basic";
	basic: OntologyIrBasicEmailBody;
}
/**
* An action notification's email body. Uses Handlebars templating.
*/
export type OntologyIrEmailBody = OntologyIrEmailBody_basic;
