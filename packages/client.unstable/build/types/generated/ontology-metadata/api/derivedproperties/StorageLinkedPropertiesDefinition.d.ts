import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { StorageLinkDefinition } from "./StorageLinkDefinition.js";
import type { StoragePropertyTypeIdentifier } from "./StoragePropertyTypeIdentifier.js";
export interface StorageLinkedPropertiesDefinition {
	propertyTypeMapping: Record<PropertyTypeRid, StoragePropertyTypeIdentifier>;
	linkDefinition: StorageLinkDefinition;
}
