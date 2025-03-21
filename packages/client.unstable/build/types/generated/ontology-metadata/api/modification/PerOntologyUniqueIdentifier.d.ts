import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
export interface PerOntologyUniqueIdentifier_objectTypeId {
	type: "objectTypeId";
	objectTypeId: ObjectTypeId;
}
export interface PerOntologyUniqueIdentifier_objectTypeApiName {
	type: "objectTypeApiName";
	objectTypeApiName: ObjectTypeApiName;
}
export interface PerOntologyUniqueIdentifier_linkTypeId {
	type: "linkTypeId";
	linkTypeId: LinkTypeId;
}
/**
* A union type representing user-provided identifiers that have some uniqueness constraints at the level of a
* single Ontology.
*/
export type PerOntologyUniqueIdentifier = PerOntologyUniqueIdentifier_objectTypeId | PerOntologyUniqueIdentifier_objectTypeApiName | PerOntologyUniqueIdentifier_linkTypeId;
