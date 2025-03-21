import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";
export interface QueryMetadata {
	type: "query";
	apiName: string;
	description?: string;
	displayName?: string;
	version: string;
	parameters: Record<string, QueryParameterDefinition<any>>;
	output: QueryDataTypeDefinition;
	rid: string;
}
export interface QueryCompileTimeMetadata<T> {
	signature: T;
}
export interface QueryDefinition<T = any> {
	type: "query";
	apiName: string;
	osdkMetadata?: OsdkMetadata;
	__DefinitionMetadata?: QueryCompileTimeMetadata<T> & QueryMetadata;
}
export type QueryParameterDefinition<T_Target extends ObjectTypeDefinition = any> = {
	description?: string
} & QueryDataTypeDefinition<T_Target>;
export type QueryDataTypeDefinition<T_Target extends ObjectTypeDefinition = any> = PrimitiveDataType | ObjectQueryDataType<T_Target> | ObjectSetQueryDataType<T_Target> | SetQueryDataType | UnionQueryDataType | StructQueryDataType | TwoDimensionalAggregationDataType | ThreeDimensionalAggregationDataType | MapDataType;
export type BaseQueryDataTypeDefinition<T extends string> = {
	multiplicity?: boolean
	nullable?: boolean
	type: T
};
export type WireQueryDataTypes = "double" | "float" | "integer" | "long" | "boolean" | "string" | "date" | "timestamp" | "attachment";
export type PrimitiveDataType<Q extends WireQueryDataTypes = WireQueryDataTypes> = BaseQueryDataTypeDefinition<Q>;
export interface ObjectQueryDataType<T_Target extends ObjectTypeDefinition = never> extends BaseQueryDataTypeDefinition<"object"> {
	object: string;
	__OsdkTargetType?: T_Target;
}
export interface ObjectSetQueryDataType<T_Target extends ObjectTypeDefinition = never> extends BaseQueryDataTypeDefinition<"objectSet"> {
	objectSet: string;
	__OsdkTargetType?: T_Target;
}
export interface SetQueryDataType extends BaseQueryDataTypeDefinition<"set"> {
	set: QueryDataTypeDefinition;
}
export interface UnionQueryDataType extends BaseQueryDataTypeDefinition<"union"> {
	union: ReadonlyArray<QueryDataTypeDefinition>;
}
export interface StructQueryDataType extends BaseQueryDataTypeDefinition<"struct"> {
	struct: Record<string, QueryDataTypeDefinition>;
}
export interface TwoDimensionalAggregationDataType extends BaseQueryDataTypeDefinition<"twoDimensionalAggregation"> {
	twoDimensionalAggregation: TwoDimensionalQueryAggregationDefinition;
}
export interface ThreeDimensionalAggregationDataType extends BaseQueryDataTypeDefinition<"threeDimensionalAggregation"> {
	threeDimensionalAggregation: ThreeDimensionalQueryAggregationDefinition;
}
export interface MapDataType extends BaseQueryDataTypeDefinition<"map"> {
	keyType: QueryDataTypeDefinition;
	valueType: QueryDataTypeDefinition;
}
export type AggregationKeyDataType<V = any> = SimpleAggregationKeyDataType<V> | RangeAggregationKeyDataType<V>;
export interface SimpleAggregationKeyDataType<V = any> {
	keyType: Exclude<AggregationKeyTypes, "range">;
	valueType: V;
}
export interface RangeAggregationKeyDataType<V = any> {
	keyType: "range";
	keySubtype: AggregationRangeKeyTypes;
	valueType: V;
}
export type TwoDimensionalQueryAggregationDefinition = AggregationKeyDataType<AggregationValueTypes>;
export type ThreeDimensionalQueryAggregationDefinition = AggregationKeyDataType<TwoDimensionalQueryAggregationDefinition>;
export type AggregationKeyTypes = "boolean" | "string" | "date" | "double" | "integer" | "timestamp" | "range";
export type AggregationRangeKeyTypes = "date" | "double" | "integer" | "timestamp";
export type AggregationValueTypes = "date" | "double" | "timestamp";
