import type { DerivedProperties } from "./DerivedProperties.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetFilter } from "./ObjectSetFilter.js";
/**
* Object Set containing objects in provided Object Set that match the provided filter.
*/
export interface FilteredObjectSet {
	filter: ObjectSetFilter;
	objectSet: ObjectSet;
	runtimeDerivedProperties: DerivedProperties | undefined;
}
