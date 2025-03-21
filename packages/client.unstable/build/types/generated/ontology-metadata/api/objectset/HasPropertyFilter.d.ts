import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a HasPropertyFilter iff it has a property with the provided PropertyId.
*/
export interface HasPropertyFilter {
	propertyId: PropertyTypeId;
}
