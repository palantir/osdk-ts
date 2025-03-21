import type { AggregatedPropertiesDefinition } from "./AggregatedPropertiesDefinition.js";
import type { LinkedPropertiesDefinition } from "./LinkedPropertiesDefinition.js";
export interface DerivedPropertiesDefinition_linkedProperties {
	type: "linkedProperties";
	linkedProperties: LinkedPropertiesDefinition;
}
export interface DerivedPropertiesDefinition_aggregatedProperties {
	type: "aggregatedProperties";
	aggregatedProperties: AggregatedPropertiesDefinition;
}
export type DerivedPropertiesDefinition = DerivedPropertiesDefinition_linkedProperties | DerivedPropertiesDefinition_aggregatedProperties;
