import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OntologyIrLinkDefinition } from "./OntologyIrLinkDefinition.js";
import type { OntologyIrPropertyTypeIdentifier } from "./OntologyIrPropertyTypeIdentifier.js";
/**
* A derived property definition that references property types on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface OntologyIrLinkedPropertiesDefinition {
	propertyTypeMapping: Record<ObjectTypeFieldApiName, OntologyIrPropertyTypeIdentifier>;
	linkDefinition: OntologyIrLinkDefinition;
}
