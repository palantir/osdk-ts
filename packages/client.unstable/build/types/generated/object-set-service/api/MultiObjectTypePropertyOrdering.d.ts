import type { PropertyId } from "./PropertyId.js";
import type { SortOrder } from "./SortOrder.js";
/**
* Ordering based on values of a property with a specified property id which can be present on multiple object
* types. May also reference derived properties.
* Sorting is not allowed on any ARRAY or GEOHASH properties as defined in the Ontology.
* Sorting on string properties is only allowed as long as the property is marked as supporting exact matching
* in the Ontology.
* Do note that in case of multi-object-type object sets, the property has to exist on all involved object types
* and has to be of the same type.
*/
export interface MultiObjectTypePropertyOrdering {
	propertyId: PropertyId;
	order: SortOrder;
}
