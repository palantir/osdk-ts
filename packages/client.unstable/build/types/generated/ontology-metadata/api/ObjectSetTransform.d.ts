import type { ObjectSetFilter } from "./objectset/ObjectSetFilter.js";
import type { ObjectSetSearchAround } from "./ObjectSetSearchAround.js";
export interface ObjectSetTransform_propertyFilter {
	type: "propertyFilter";
	propertyFilter: ObjectSetFilter;
}
export interface ObjectSetTransform_searchAround {
	type: "searchAround";
	searchAround: ObjectSetSearchAround;
}
/**
* Transforms an ObjectSet by Filtering or performing a SearchAround.
*/
export type ObjectSetTransform = ObjectSetTransform_propertyFilter | ObjectSetTransform_searchAround;
