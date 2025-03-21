import type { ObjectTypeRid } from "../ObjectTypeRid.js";
export interface OntologyEntityIdentifiers_objectTypeRids {
	type: "objectTypeRids";
	objectTypeRids: Array<ObjectTypeRid>;
}
/**
* A union to represent identifiers for different types of Ontology entities.
*/
export type OntologyEntityIdentifiers = OntologyEntityIdentifiers_objectTypeRids;
