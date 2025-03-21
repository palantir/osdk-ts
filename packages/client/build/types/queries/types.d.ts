import type { CompileTimeMetadata, DataValueClientToWire, DataValueWireToClient, ObjectQueryDataType, ObjectSetQueryDataType, QueryDataTypeDefinition, QueryDefinition, QueryParam, QueryResult } from "@osdk/api";
import type { PartialByNotStrict } from "../util/partialBy.js";
export type QuerySignatureFromDef<T extends QueryDefinition<any>> = {
	executeFunction: NonNullable<T["__DefinitionMetadata"]> extends never ? QuerySignature<T> : NonNullable<T["__DefinitionMetadata"]>["signature"]
};
export type QuerySignature<T extends QueryDefinition<any>> = keyof CompileTimeMetadata<T>["parameters"] extends never ? () => Promise<QueryReturnType<CompileTimeMetadata<T>["output"]>> : (params: QueryParameterType<CompileTimeMetadata<T>["parameters"]>) => Promise<QueryReturnType<CompileTimeMetadata<T>["output"]>>;
export type QueryParameterType<T extends Record<any, QueryDataTypeDefinition>> = PartialByNotStrict<NotOptionalParams<T>, OptionalQueryParams<T>>;
export type QueryReturnType<T extends QueryDataTypeDefinition> = T extends ObjectQueryDataType<infer TTargetType> ? QueryResult.ObjectType<TTargetType> : T extends ObjectSetQueryDataType<infer TTargetType> ? QueryResult.ObjectSetType<TTargetType> : T["type"] extends keyof DataValueWireToClient ? QueryResult.PrimitiveType<T["type"]> : never;
type OptionalQueryParams<T extends Record<any, QueryDataTypeDefinition>> = { [K in keyof T] : T[K] extends {
	nullable: true
} ? never : K }[keyof T];
type NotOptionalParams<T extends Record<any, QueryDataTypeDefinition>> = { [K in keyof T] : MaybeArrayType<T[K]> };
type MaybeArrayType<T extends QueryDataTypeDefinition> = T["multiplicity"] extends true ? ReadonlyArray<QueryBaseType<T>> : QueryBaseType<T>;
type QueryBaseType<T extends QueryDataTypeDefinition> = T extends ObjectQueryDataType<infer TTargetType> ? QueryParam.ObjectType<TTargetType> : T extends ObjectSetQueryDataType<infer TTargetType> ? QueryParam.ObjectSetType<TTargetType> : T["type"] extends keyof DataValueClientToWire ? QueryParam.PrimitiveType<T["type"]> : never;
export {};
