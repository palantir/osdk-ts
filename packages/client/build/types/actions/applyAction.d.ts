import type { ActionDefinition, ActionEditResponse, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions, DataValueClientToWire } from "@osdk/api";
import type { BatchApplyActionResponseV2, SyncApplyActionResponseV2 } from "@osdk/foundry.ontologies";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialBy } from "../util/partialBy.js";
type BaseType<APD extends Pick<ActionMetadata.Parameter<any>, "type">> = APD["type"] extends ActionMetadata.DataType.Object<infer TTargetType> ? ActionParam.ObjectType<TTargetType> : APD["type"] extends ActionMetadata.DataType.ObjectSet<infer TTargetType> ? ActionParam.ObjectSetType<TTargetType> : APD["type"] extends ActionMetadata.DataType.Struct<infer TStructType> ? ActionParam.StructType<TStructType> : APD["type"] extends keyof DataValueClientToWire ? ActionParam.PrimitiveType<APD["type"]> : never;
type MaybeArrayType<APD extends ActionMetadata.Parameter<any>> = APD["multiplicity"] extends true ? Array<BaseType<APD>> : BaseType<APD>;
type NotOptionalParams<X extends ActionParametersDefinition> = { [P in keyof X] : MaybeArrayType<X[P]> };
export type OsdkActionParameters<X extends ActionParametersDefinition> = NullableProps<X> extends never ? NotOptionalParams<X> : PartialBy<NotOptionalParams<X>, NullableProps<X>>;
export type CompileTimeActionMetadata<T extends ActionDefinition<any>> = NonNullable<T["__DefinitionMetadata"]>;
export type ActionSignatureFromDef<T extends ActionDefinition<any>> = {
	applyAction: [CompileTimeActionMetadata<T>["signatures"]["applyAction"]] extends [never] ? ActionSignature<CompileTimeActionMetadata<T>["parameters"]> : CompileTimeActionMetadata<T>["signatures"]["applyAction"]
	batchApplyAction: [CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"]] extends [never] ? BatchActionSignature<CompileTimeActionMetadata<T>["parameters"]> : CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"]
};
type ActionParametersDefinition = Record<any, ActionMetadata.Parameter<any>>;
export type ActionSignature<X extends Record<any, ActionMetadata.Parameter<any>>> = <
	A extends NOOP<OsdkActionParameters<X>>,
	OP extends ApplyActionOptions
>(args: A, options?: OP) => Promise<ActionReturnTypeForOptions<OP>>;
export type BatchActionSignature<X extends Record<any, ActionMetadata.Parameter<any>>> = <
	A extends NOOP<OsdkActionParameters<X>>[],
	OP extends ApplyBatchActionOptions
>(args: A, options?: OP) => Promise<ActionReturnTypeForOptions<OP>>;
export declare function applyAction<
	AD extends ActionDefinition<any>,
	P extends OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]> | OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>[],
	Op extends P extends OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>[] ? ApplyBatchActionOptions : ApplyActionOptions
>(client: MinimalClient, action: AD, parameters?: P, options?: Op): Promise<ActionReturnTypeForOptions<Op>>;
export declare function remapActionResponse(response: SyncApplyActionResponseV2 | BatchApplyActionResponseV2): ActionEditResponse | undefined;
export {};
