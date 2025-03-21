import type { MarkingType } from "./MarkingType.js";
/**
* The type of user markings to use in the markings condition check. This can be the users CBAC or
* MANDATORY markings.
*/
export interface MarkingTypesFilter {
	markingTypes: Array<MarkingType>;
}
