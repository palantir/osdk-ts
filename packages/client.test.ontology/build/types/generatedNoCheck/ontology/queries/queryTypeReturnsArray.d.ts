import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace queryTypeReturnsArray {
	interface Signature {
		(query: queryTypeReturnsArray.Parameters): Promise<queryTypeReturnsArray.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly people: ReadonlyArray<QueryParam.PrimitiveType<"string">>;
	}
	type ReturnType = Array<QueryResult.PrimitiveType<"string">>;
}
export interface queryTypeReturnsArray extends QueryDefinition<queryTypeReturnsArray.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "queryTypeReturnsArray"
		rid: "ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdda"
		type: "query"
		version: "0.1.1"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			people: {
				multiplicity: true
				nullable: false
				type: "string"
			}
		}
		output: {
			multiplicity: true
			nullable: false
			type: "string"
		}
		signature: queryTypeReturnsArray.Signature
	};
	apiName: "queryTypeReturnsArray";
	type: "query";
	version: "0.1.1";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const queryTypeReturnsArray: queryTypeReturnsArray;
