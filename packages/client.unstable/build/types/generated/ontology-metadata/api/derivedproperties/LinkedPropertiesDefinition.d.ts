import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { LinkDefinition } from "./LinkDefinition.js";
import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
/**
* A derived property definition that references property types on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface LinkedPropertiesDefinition {
	propertyTypeMapping: Record<PropertyTypeRid, PropertyTypeIdentifier>;
	linkDefinition: LinkDefinition;
}
