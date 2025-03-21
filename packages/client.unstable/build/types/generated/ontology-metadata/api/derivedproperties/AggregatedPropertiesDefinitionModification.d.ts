import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { DerivedPropertyAggregationModification } from "./DerivedPropertyAggregationModification.js";
import type { LinkDefinitionModification } from "./LinkDefinitionModification.js";
/**
* A derived property that references aggregations on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface AggregatedPropertiesDefinitionModification {
	propertyTypeMapping: Record<PropertyTypeId, DerivedPropertyAggregationModification>;
	linkDefinition: LinkDefinitionModification;
}
