import type { ObjectTypeIdentifier } from "../ObjectTypeIdentifier.js";
import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
/**
* An ObjectTypeIdentifier with its PropertyTypeIdentifier(s) to report usage for.
*/
export interface ObjectTypeAndPropertyTypeIdentifiers {
	objectTypeIdentifier: ObjectTypeIdentifier;
	propertyTypeIdentifiers: Array<PropertyTypeIdentifier>;
}
