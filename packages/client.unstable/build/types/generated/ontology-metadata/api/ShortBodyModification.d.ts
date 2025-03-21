import type { StructuredShortBodyModification } from "./StructuredShortBodyModification.js";
export interface ShortBodyModification_basic {
	type: "basic";
	basic: StructuredShortBodyModification;
}
/**
* An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
* templating.
*/
export type ShortBodyModification = ShortBodyModification_basic;
