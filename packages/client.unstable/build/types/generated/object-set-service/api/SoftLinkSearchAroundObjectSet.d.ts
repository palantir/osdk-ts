import type { ObjectSet } from "./ObjectSet.js";
import type { PropertyMapping } from "./PropertyMapping.js";
/**
* ObjectSet containing all objects that are linked to objects in the provided object set, using property
* mappings provided at runtime as opposed to providing a predefined relation.
*/
export interface SoftLinkSearchAroundObjectSet {
	objectSet: ObjectSet;
	propertyMapping: PropertyMapping;
}
