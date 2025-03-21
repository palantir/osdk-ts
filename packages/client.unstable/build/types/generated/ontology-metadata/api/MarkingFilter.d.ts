import type { MarkingTypesFilter } from "./MarkingTypesFilter.js";
export interface MarkingFilter_markingTypes {
	type: "markingTypes";
	markingTypes: MarkingTypesFilter;
}
/**
* A filter on what user markings to process in the Marking condition.
*/
export type MarkingFilter = MarkingFilter_markingTypes;
