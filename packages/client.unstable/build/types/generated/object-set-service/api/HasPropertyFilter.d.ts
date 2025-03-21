import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a HasPropertyFilter iff it has a non-null property with the provided PropertyId.
*/
export interface HasPropertyFilter {
	propertyId: PropertyId;
}
