import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { LinkDefinitionModification } from "./LinkDefinitionModification.js";
import type { PropertyTypeIdentifierInRequest } from "./PropertyTypeIdentifierInRequest.js";
/**
* A derived property definition that references property types on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface LinkedPropertiesDefinitionModification {
	propertyTypeMapping: Record<PropertyTypeId, PropertyTypeIdentifierInRequest>;
	linkDefinition: LinkDefinitionModification;
}
