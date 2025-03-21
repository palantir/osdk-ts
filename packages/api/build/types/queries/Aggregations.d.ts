import type { DataValueClientToWire, DataValueWireToClient } from "../mapping/DataValueMapping.js";
import type { AggregationKeyTypes, AggregationRangeKeyTypes, AggregationValueTypes } from "../ontology/QueryDefinition.js";
export type Range<T extends AllowedBucketTypes> = {
	startValue?: T
	endValue: T
} | {
	startValue: T
	endValue?: T
};
export type AllowedBucketTypes = string | number | boolean;
export type AllowedBucketKeyTypes = AllowedBucketTypes | Range<AllowedBucketTypes>;
export type TwoDimensionalAggregation<
	T extends AllowedBucketKeyTypes,
	U extends AllowedBucketTypes
> = {
	key: T
	value: U
}[];
export type ThreeDimensionalAggregation<
	T extends AllowedBucketKeyTypes,
	U extends AllowedBucketKeyTypes,
	V extends AllowedBucketTypes
> = {
	key: T
	groups: {
		key: U
		value: V
	}[]
}[];
export type AggKeyWireToClient<
	T extends AggregationKeyTypes,
	S extends AggregationRangeKeyTypes = never
> = T extends keyof DataValueWireToClient ? DataValueWireToClient[T] : T extends "range" ? S extends keyof DataValueWireToClient ? Range<DataValueWireToClient[S]> : never : never;
export type AggKeyClientToWire<
	T extends AggregationKeyTypes,
	S extends AggregationRangeKeyTypes = never
> = T extends keyof DataValueClientToWire ? DataValueClientToWire[T] : T extends "range" ? S extends keyof DataValueClientToWire ? Range<DataValueClientToWire[S]> : never : never;
export type AggValueWireToClient<T extends AggregationValueTypes> = T extends keyof DataValueWireToClient ? DataValueWireToClient[T] : never;
export type AggValueClientToWire<T extends AggregationValueTypes> = T extends keyof DataValueClientToWire ? DataValueClientToWire[T] : never;
