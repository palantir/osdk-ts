import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OntologyIrDerivedPropertyAggregation } from "./OntologyIrDerivedPropertyAggregation.js";
import type { OntologyIrLinkDefinition } from "./OntologyIrLinkDefinition.js";
/**
* A derived property that references aggregations on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface OntologyIrAggregatedPropertiesDefinition {
	propertyTypeMapping: Record<ObjectTypeFieldApiName, OntologyIrDerivedPropertyAggregation>;
	linkDefinition: OntologyIrLinkDefinition;
}
