import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { DerivedPropertyAggregation } from "./DerivedPropertyAggregation.js";
import type { LinkDefinition } from "./LinkDefinition.js";
/**
* A derived property that references aggregations on a linked object type.
* The linked object type is specified by a LinkDefinition.
*/
export interface AggregatedPropertiesDefinition {
	propertyTypeMapping: Record<PropertyTypeRid, DerivedPropertyAggregation>;
	linkDefinition: LinkDefinition;
}
