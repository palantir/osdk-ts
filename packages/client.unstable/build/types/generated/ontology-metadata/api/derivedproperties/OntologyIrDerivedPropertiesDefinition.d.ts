import type { OntologyIrAggregatedPropertiesDefinition } from "./OntologyIrAggregatedPropertiesDefinition.js";
import type { OntologyIrLinkedPropertiesDefinition } from "./OntologyIrLinkedPropertiesDefinition.js";
export interface OntologyIrDerivedPropertiesDefinition_linkedProperties {
	type: "linkedProperties";
	linkedProperties: OntologyIrLinkedPropertiesDefinition;
}
export interface OntologyIrDerivedPropertiesDefinition_aggregatedProperties {
	type: "aggregatedProperties";
	aggregatedProperties: OntologyIrAggregatedPropertiesDefinition;
}
export type OntologyIrDerivedPropertiesDefinition = OntologyIrDerivedPropertiesDefinition_linkedProperties | OntologyIrDerivedPropertiesDefinition_aggregatedProperties;
