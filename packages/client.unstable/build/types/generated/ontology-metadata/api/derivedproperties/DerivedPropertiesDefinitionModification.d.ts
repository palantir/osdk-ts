import type { AggregatedPropertiesDefinitionModification } from "./AggregatedPropertiesDefinitionModification.js";
import type { LinkedPropertiesDefinitionModification } from "./LinkedPropertiesDefinitionModification.js";
export interface DerivedPropertiesDefinitionModification_linkedProperties {
	type: "linkedProperties";
	linkedProperties: LinkedPropertiesDefinitionModification;
}
export interface DerivedPropertiesDefinitionModification_aggregatedProperties {
	type: "aggregatedProperties";
	aggregatedProperties: AggregatedPropertiesDefinitionModification;
}
export type DerivedPropertiesDefinitionModification = DerivedPropertiesDefinitionModification_linkedProperties | DerivedPropertiesDefinitionModification_aggregatedProperties;
