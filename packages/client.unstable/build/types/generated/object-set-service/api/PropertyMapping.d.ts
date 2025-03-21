import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
/**
* A mapping from the property of one ObjectType to the property of another. The two properties must share
* the same Shared Property Type. One of the properties must be a primary key.
*/
export interface PropertyMapping {
	fromProperty: PropertyTypeIdentifier;
	toProperty: PropertyTypeIdentifier;
}
