import type { LinkedCollection } from "./LinkedCollection.js";
import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";
export interface DerivedPropertyAggregation_count {
	type: "count";
	count: LinkedCountMetric;
}
export interface DerivedPropertyAggregation_avg {
	type: "avg";
	avg: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_max {
	type: "max";
	max: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_min {
	type: "min";
	min: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_sum {
	type: "sum";
	sum: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_approximateCardinality {
	type: "approximateCardinality";
	approximateCardinality: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_exactCardinality {
	type: "exactCardinality";
	exactCardinality: PropertyTypeIdentifier;
}
export interface DerivedPropertyAggregation_collectList {
	type: "collectList";
	collectList: LinkedCollection;
}
export interface DerivedPropertyAggregation_collectSet {
	type: "collectSet";
	collectSet: LinkedCollection;
}
/**
* An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
*/
export type DerivedPropertyAggregation = DerivedPropertyAggregation_count | DerivedPropertyAggregation_avg | DerivedPropertyAggregation_max | DerivedPropertyAggregation_min | DerivedPropertyAggregation_sum | DerivedPropertyAggregation_approximateCardinality | DerivedPropertyAggregation_exactCardinality | DerivedPropertyAggregation_collectList | DerivedPropertyAggregation_collectSet;
