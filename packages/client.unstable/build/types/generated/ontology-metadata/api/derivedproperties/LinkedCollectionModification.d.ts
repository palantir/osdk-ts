import type { PropertyTypeIdentifierInRequest } from "./PropertyTypeIdentifierInRequest.js";
/**
* A collection of values of a property type.
*/
export interface LinkedCollectionModification {
	linkedProperty: PropertyTypeIdentifierInRequest;
	limit: number;
}
