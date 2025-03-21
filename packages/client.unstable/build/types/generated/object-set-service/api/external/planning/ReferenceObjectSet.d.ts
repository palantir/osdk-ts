import type { LogicalObjectSetId } from "./LogicalObjectSetId.js";
/**
* A reference to another logical Object Set. Used to avoid re-defining the whole Object Set.
*/
export interface ReferenceObjectSet {
	id: LogicalObjectSetId;
}
