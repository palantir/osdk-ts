import type { OntologyIrObjectPropertyReference } from "./OntologyIrObjectPropertyReference.js";
/**
* Because complex objects can't be used as map keys over the wire, this is used in link definitions
*/
export interface OntologyIrPropertyToPropertyMapping {
	from: OntologyIrObjectPropertyReference;
	to: OntologyIrObjectPropertyReference;
}
