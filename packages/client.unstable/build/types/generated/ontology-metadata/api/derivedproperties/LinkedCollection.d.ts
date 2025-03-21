import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
/**
* A collection of values of a property type.
*/
export interface LinkedCollection {
	linkedProperty: PropertyTypeIdentifier;
	limit: number;
}
