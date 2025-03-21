import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
export interface DeprecationOntologyEntityIdentifier_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export interface DeprecationOntologyEntityIdentifier_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
/**
* A union to represent identifiers for different types of Ontology entities.
*/
export type DeprecationOntologyEntityIdentifier = DeprecationOntologyEntityIdentifier_objectTypeRid | DeprecationOntologyEntityIdentifier_linkTypeRid;
