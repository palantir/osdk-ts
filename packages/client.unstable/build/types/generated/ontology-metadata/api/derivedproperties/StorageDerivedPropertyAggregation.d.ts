import type { StorageLinkedCollection } from "./StorageLinkedCollection.js";
import type { StorageLinkedCountMetric } from "./StorageLinkedCountMetric.js";
import type { StoragePropertyTypeIdentifier } from "./StoragePropertyTypeIdentifier.js";
export interface StorageDerivedPropertyAggregation_count {
	type: "count";
	count: StorageLinkedCountMetric;
}
export interface StorageDerivedPropertyAggregation_avg {
	type: "avg";
	avg: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_max {
	type: "max";
	max: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_min {
	type: "min";
	min: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_sum {
	type: "sum";
	sum: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_approximateCardinality {
	type: "approximateCardinality";
	approximateCardinality: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_exactCardinality {
	type: "exactCardinality";
	exactCardinality: StoragePropertyTypeIdentifier;
}
export interface StorageDerivedPropertyAggregation_collectList {
	type: "collectList";
	collectList: StorageLinkedCollection;
}
export interface StorageDerivedPropertyAggregation_collectSet {
	type: "collectSet";
	collectSet: StorageLinkedCollection;
}
export type StorageDerivedPropertyAggregation = StorageDerivedPropertyAggregation_count | StorageDerivedPropertyAggregation_avg | StorageDerivedPropertyAggregation_max | StorageDerivedPropertyAggregation_min | StorageDerivedPropertyAggregation_sum | StorageDerivedPropertyAggregation_approximateCardinality | StorageDerivedPropertyAggregation_exactCardinality | StorageDerivedPropertyAggregation_collectList | StorageDerivedPropertyAggregation_collectSet;
