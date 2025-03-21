import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { PropertyTypeIdWithObjectTypeId } from "./PropertyTypeIdWithObjectTypeId.js";
export interface OntologyEntityId_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeIdWithObjectTypeId;
}
export interface OntologyEntityId_objectType {
	type: "objectType";
	objectType: ObjectTypeId;
}
export interface OntologyEntityId_linkType {
	type: "linkType";
	linkType: LinkTypeId;
}
/**
* The id representation of an entity.
*/
export type OntologyEntityId = OntologyEntityId_propertyType | OntologyEntityId_objectType | OntologyEntityId_linkType;
