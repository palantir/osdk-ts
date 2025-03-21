import type { LogicalObjectSet } from "./LogicalObjectSet.js";
import type { LogicalObjectSetId } from "./LogicalObjectSetId.js";
/**
* A logical Object Set and its identifier.
*/
export interface NamedLogicalObjectSet {
	id: LogicalObjectSetId;
	objectSet: LogicalObjectSet;
}
