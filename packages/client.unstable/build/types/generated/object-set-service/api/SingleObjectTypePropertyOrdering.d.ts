import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { SortOrder } from "./SortOrder.js";
/**
* Ordering based on values of a property with a specified property rid.
* Sorting is not allowed on any ARRAY or GEOHASH properties as defined in the Ontology.
* Sorting on string properties is only allowed as long as the property is marked as supporting exact matching
* in the Ontology.
* Do note that this ordering is not supported for multi-object-type object sets - an exception will be thrown
* when this ordering is used together with a multi-object-type object set.
*/
export interface SingleObjectTypePropertyOrdering {
	propertyTypeRid: PropertyTypeRid;
	order: SortOrder;
}
