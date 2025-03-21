import type { QueryDefinition, QueryResult, VersionBound } from "@osdk/client";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace getTodoCount {
	interface Signature {
		(): Promise<getTodoCount.ReturnType>;
	}
	type ReturnType = QueryResult.PrimitiveType<"integer">;
}
export interface getTodoCount extends QueryDefinition<getTodoCount.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "getTodoCount"
		rid: "query.rid2"
		type: "query"
		version: "0.1.2"
		parameters: {}
		output: {
			nullable: false
			type: "integer"
		}
		signature: getTodoCount.Signature
	};
	apiName: "getTodoCount";
	type: "query";
	version: "0.1.2";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const getTodoCount: getTodoCount;
