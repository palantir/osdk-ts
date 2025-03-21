import type { CompileTimeMetadata, ObjectOrInterfaceDefinition, OsdkBase, PrimaryKeyType, QueryDefinition } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { QueryParameterType, QueryReturnType } from "./types.js";
export declare function applyQuery<
	QD extends QueryDefinition<any>,
	P extends QueryParameterType<CompileTimeMetadata<QD>["parameters"]>
>(client: MinimalClient, query: QD, params?: P): Promise<QueryReturnType<CompileTimeMetadata<QD>["output"]>>;
export declare function createQueryObjectResponse<Q extends ObjectOrInterfaceDefinition>(primaryKey: PrimaryKeyType<Q>, objectDef: Q): OsdkBase<Q>;
