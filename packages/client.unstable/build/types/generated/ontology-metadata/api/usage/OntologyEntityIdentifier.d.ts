import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeWithProperties } from "./ObjectTypeWithProperties.js";
export interface OntologyEntityIdentifier_objectTypeWithProperties {
	type: "objectTypeWithProperties";
	objectTypeWithProperties: ObjectTypeWithProperties;
}
export interface OntologyEntityIdentifier_linkType {
	type: "linkType";
	linkType: LinkTypeRid;
}
/**
* A union to represent identifiers for different types of Ontology entities.
*/
export type OntologyEntityIdentifier = OntologyEntityIdentifier_objectTypeWithProperties | OntologyEntityIdentifier_linkType;
