import type { LinkedCollectionModification } from "./LinkedCollectionModification.js";
import type { LinkedCountMetric } from "./LinkedCountMetric.js";
import type { PropertyTypeIdentifierInRequest } from "./PropertyTypeIdentifierInRequest.js";
export interface DerivedPropertyAggregationModification_count {
	type: "count";
	count: LinkedCountMetric;
}
export interface DerivedPropertyAggregationModification_avg {
	type: "avg";
	avg: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_max {
	type: "max";
	max: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_min {
	type: "min";
	min: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_sum {
	type: "sum";
	sum: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_approximateCardinality {
	type: "approximateCardinality";
	approximateCardinality: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_exactCardinality {
	type: "exactCardinality";
	exactCardinality: PropertyTypeIdentifierInRequest;
}
export interface DerivedPropertyAggregationModification_collectList {
	type: "collectList";
	collectList: LinkedCollectionModification;
}
export interface DerivedPropertyAggregationModification_collectSet {
	type: "collectSet";
	collectSet: LinkedCollectionModification;
}
/**
* An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
*/
export type DerivedPropertyAggregationModification = DerivedPropertyAggregationModification_count | DerivedPropertyAggregationModification_avg | DerivedPropertyAggregationModification_max | DerivedPropertyAggregationModification_min | DerivedPropertyAggregationModification_sum | DerivedPropertyAggregationModification_approximateCardinality | DerivedPropertyAggregationModification_exactCardinality | DerivedPropertyAggregationModification_collectList | DerivedPropertyAggregationModification_collectSet;
