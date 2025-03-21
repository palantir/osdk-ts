import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { StorageDerivedPropertyAggregation } from "./StorageDerivedPropertyAggregation.js";
import type { StorageLinkDefinition } from "./StorageLinkDefinition.js";
export interface StorageAggregatedPropertiesDefinition {
	propertyTypeMapping: Record<PropertyTypeRid, StorageDerivedPropertyAggregation>;
	linkDefinition: StorageLinkDefinition;
}
