import type { OntologyIrPropertyTypeIdentifier } from "./OntologyIrPropertyTypeIdentifier.js";
/**
* A collection of values of a property type.
*/
export interface OntologyIrLinkedCollection {
	linkedProperty: OntologyIrPropertyTypeIdentifier;
	limit: number;
}
