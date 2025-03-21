import * as _osdk_shared_client from '@osdk/shared.client';
import { ActionDefinition, ActionMetadata, ApplyActionOptions, ActionReturnTypeForOptions, ApplyBatchActionOptions, ActionParam, DataValueClientToWire, QueryDefinition, CompileTimeMetadata, QueryDataTypeDefinition, ObjectQueryDataType, QueryResult, ObjectSetQueryDataType, DataValueWireToClient, QueryParam, ObjectTypeDefinition, ObjectSet, InterfaceDefinition, ObjectMetadata, InterfaceMetadata, QueryMetadata } from '@osdk/api';
import { MinimalObjectSet, Experiment, ExperimentFns } from '@osdk/api/unstable';
import { SharedClient } from '@osdk/shared.client2';

type NOOP<T> = T extends (...args: any[]) => any ? T : T extends abstract new (...args: any[]) => any ? T : {
    [K in keyof T]: T[K];
};

type NullableProps<T extends Record<string, {
    nullable?: boolean;
}>> = keyof {
    [K in keyof T as T[K]["nullable"] extends true ? K : never]: "";
};

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type PartialByNotStrict<T, K> = K extends keyof T ? PartialBy<T, K> : "never";

type BaseType<APD extends Pick<ActionMetadata.Parameter<any>, "type">> = APD["type"] extends ActionMetadata.DataType.Object<infer TTargetType> ? ActionParam.ObjectType<TTargetType> : APD["type"] extends ActionMetadata.DataType.ObjectSet<infer TTargetType> ? ActionParam.ObjectSetType<TTargetType> : APD["type"] extends ActionMetadata.DataType.Struct<infer TStructType> ? ActionParam.StructType<TStructType> : APD["type"] extends keyof DataValueClientToWire ? ActionParam.PrimitiveType<APD["type"]> : never;
type MaybeArrayType$1<APD extends ActionMetadata.Parameter<any>> = APD["multiplicity"] extends true ? Array<BaseType<APD>> : BaseType<APD>;
type NotOptionalParams$1<X extends ActionParametersDefinition> = {
    [P in keyof X]: MaybeArrayType$1<X[P]>;
};
type OsdkActionParameters<X extends ActionParametersDefinition> = NullableProps<X> extends never ? NotOptionalParams$1<X> : PartialBy<NotOptionalParams$1<X>, NullableProps<X>>;
type CompileTimeActionMetadata<T extends ActionDefinition<any>> = NonNullable<T["__DefinitionMetadata"]>;
type ActionSignatureFromDef<T extends ActionDefinition<any>> = {
    applyAction: [
        CompileTimeActionMetadata<T>["signatures"]["applyAction"]
    ] extends [never] ? ActionSignature<CompileTimeActionMetadata<T>["parameters"]> : CompileTimeActionMetadata<T>["signatures"]["applyAction"];
    batchApplyAction: [
        CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"]
    ] extends [
        never
    ] ? BatchActionSignature<CompileTimeActionMetadata<T>["parameters"]> : CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"];
};
type ActionParametersDefinition = Record<any, ActionMetadata.Parameter<any>>;
type ActionSignature<X extends Record<any, ActionMetadata.Parameter<any>>> = <A extends NOOP<OsdkActionParameters<X>>, OP extends ApplyActionOptions>(args: A, options?: OP) => Promise<ActionReturnTypeForOptions<OP>>;
type BatchActionSignature<X extends Record<any, ActionMetadata.Parameter<any>>> = <A extends NOOP<OsdkActionParameters<X>>[], OP extends ApplyBatchActionOptions>(args: A, options?: OP) => Promise<ActionReturnTypeForOptions<OP>>;

type QuerySignatureFromDef<T extends QueryDefinition<any>> = {
    executeFunction: NonNullable<T["__DefinitionMetadata"]> extends never ? QuerySignature<T> : NonNullable<T["__DefinitionMetadata"]>["signature"];
};
type QuerySignature<T extends QueryDefinition<any>> = keyof CompileTimeMetadata<T>["parameters"] extends never ? () => Promise<QueryReturnType<CompileTimeMetadata<T>["output"]>> : (params: QueryParameterType<CompileTimeMetadata<T>["parameters"]>) => Promise<QueryReturnType<CompileTimeMetadata<T>["output"]>>;
type QueryParameterType<T extends Record<any, QueryDataTypeDefinition>> = PartialByNotStrict<NotOptionalParams<T>, OptionalQueryParams<T>>;
type QueryReturnType<T extends QueryDataTypeDefinition> = T extends ObjectQueryDataType<infer TTargetType> ? QueryResult.ObjectType<TTargetType> : T extends ObjectSetQueryDataType<infer TTargetType> ? QueryResult.ObjectSetType<TTargetType> : T["type"] extends keyof DataValueWireToClient ? QueryResult.PrimitiveType<T["type"]> : never;
type OptionalQueryParams<T extends Record<any, QueryDataTypeDefinition>> = {
    [K in keyof T]: T[K] extends {
        nullable: true;
    } ? never : K;
}[keyof T];
type NotOptionalParams<T extends Record<any, QueryDataTypeDefinition>> = {
    [K in keyof T]: MaybeArrayType<T[K]>;
};
type MaybeArrayType<T extends QueryDataTypeDefinition> = T["multiplicity"] extends true ? ReadonlyArray<QueryBaseType<T>> : QueryBaseType<T>;
type QueryBaseType<T extends QueryDataTypeDefinition> = T extends ObjectQueryDataType<infer TTargetType> ? QueryParam.ObjectType<TTargetType> : T extends ObjectSetQueryDataType<infer TTargetType> ? QueryParam.ObjectSetType<TTargetType> : T["type"] extends keyof DataValueClientToWire ? QueryParam.PrimitiveType<T["type"]> : never;

type OldSharedClient = _osdk_shared_client.SharedClient;
interface Client extends SharedClient, OldSharedClient {
    <Q extends ObjectTypeDefinition>(o: Q): unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"];
    <Q extends (InterfaceDefinition)>(o: Q): unknown extends CompileTimeMetadata<Q>["objectSet"] ? MinimalObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"];
    <Q extends ActionDefinition<any>>(o: Q): ActionSignatureFromDef<Q>;
    <Q extends QueryDefinition<any>>(o: Q): QuerySignatureFromDef<Q>;
    <Q extends Experiment<"2.0.8"> | Experiment<"2.1.0"> | Experiment<"2.2.0">>(experiment: Q): ExperimentFns<Q>;
    fetchMetadata<Q extends (ObjectTypeDefinition | InterfaceDefinition | ActionDefinition<any> | QueryDefinition<any>)>(o: Q): Promise<Q extends ObjectTypeDefinition ? ObjectMetadata : Q extends InterfaceDefinition ? InterfaceMetadata : Q extends ActionDefinition<any> ? ActionMetadata : Q extends QueryDefinition<any> ? QueryMetadata : never>;
}

export type { ActionSignatureFromDef as A, Client as C };
