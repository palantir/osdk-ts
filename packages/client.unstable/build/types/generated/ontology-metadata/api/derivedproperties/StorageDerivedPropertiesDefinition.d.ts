import type { StorageAggregatedPropertiesDefinition } from "./StorageAggregatedPropertiesDefinition.js";
import type { StorageLinkedPropertiesDefinition } from "./StorageLinkedPropertiesDefinition.js";
export interface StorageDerivedPropertiesDefinition_linkedProperties {
	type: "linkedProperties";
	linkedProperties: StorageLinkedPropertiesDefinition;
}
export interface StorageDerivedPropertiesDefinition_aggregatedProperties {
	type: "aggregatedProperties";
	aggregatedProperties: StorageAggregatedPropertiesDefinition;
}
export type StorageDerivedPropertiesDefinition = StorageDerivedPropertiesDefinition_linkedProperties | StorageDerivedPropertiesDefinition_aggregatedProperties;
