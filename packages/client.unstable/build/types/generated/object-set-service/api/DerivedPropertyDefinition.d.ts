import type { CalculatedPropertyDefinition } from "./CalculatedPropertyDefinition.js";
import type { LinkedObjectPropertyDefinition } from "./LinkedObjectPropertyDefinition.js";
import type { LinkedObjectsAggregationPropertyDefinition } from "./LinkedObjectsAggregationPropertyDefinition.js";
export interface DerivedPropertyDefinition_linkedObjectProperty {
	type: "linkedObjectProperty";
	linkedObjectProperty: LinkedObjectPropertyDefinition;
}
export interface DerivedPropertyDefinition_linkedObjectsAggregationProperty {
	type: "linkedObjectsAggregationProperty";
	linkedObjectsAggregationProperty: LinkedObjectsAggregationPropertyDefinition;
}
export interface DerivedPropertyDefinition_calculatedProperty {
	type: "calculatedProperty";
	calculatedProperty: CalculatedPropertyDefinition;
}
/**
* The definition of a derived property. It can be a linked object property,
* linked objects aggregation property or a calculated property.
*/
export type DerivedPropertyDefinition = DerivedPropertyDefinition_linkedObjectProperty | DerivedPropertyDefinition_linkedObjectsAggregationProperty | DerivedPropertyDefinition_calculatedProperty;
