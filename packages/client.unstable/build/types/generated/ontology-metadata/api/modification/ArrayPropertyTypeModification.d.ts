import type { TypeForModification } from "./TypeForModification.js";
/**
* Duplicate of ArrayPropertyType in ontology-metadata-api, with the exception of the case where subtype is a
* struct.
*/
export interface ArrayPropertyTypeModification {
	subtype: TypeForModification;
}
