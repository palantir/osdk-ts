import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { LogicalObjectSetFilter } from "./LogicalObjectSetFilter.js";
/**
* Object Set containing objects from the Object Type Rid which match the given filter.
*/
export interface FilteredObjectSet {
	objectType: ObjectTypeRid;
	filter: LogicalObjectSetFilter;
}
