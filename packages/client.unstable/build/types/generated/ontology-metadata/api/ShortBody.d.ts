import type { StructuredShortBody } from "./StructuredShortBody.js";
export interface ShortBody_basic {
	type: "basic";
	basic: StructuredShortBody;
}
/**
* An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
* templating.
*/
export type ShortBody = ShortBody_basic;
