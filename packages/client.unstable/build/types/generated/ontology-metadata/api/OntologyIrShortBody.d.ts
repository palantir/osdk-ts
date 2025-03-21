import type { OntologyIrStructuredShortBody } from "./OntologyIrStructuredShortBody.js";
export interface OntologyIrShortBody_basic {
	type: "basic";
	basic: OntologyIrStructuredShortBody;
}
/**
* An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
* templating.
*/
export type OntologyIrShortBody = OntologyIrShortBody_basic;
