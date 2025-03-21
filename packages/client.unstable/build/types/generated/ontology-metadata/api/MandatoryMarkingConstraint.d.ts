import type { MarkingId } from "./MarkingId.js";
/**
* All mandatory marking properties linked to this datasource must only contain values within this set. It must have at least one marking specified. Note that Organization MarkingIds are not allowed in this set.
*/
export interface MandatoryMarkingConstraint {
	markingIds: Array<MarkingId>;
}
