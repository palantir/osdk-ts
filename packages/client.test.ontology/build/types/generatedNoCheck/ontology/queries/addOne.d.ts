import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace addOne {
	interface Signature {
		(query: addOne.Parameters): Promise<addOne.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly n: QueryParam.PrimitiveType<"integer">;
	}
	type ReturnType = QueryResult.PrimitiveType<"integer">;
}
export interface addOne extends QueryDefinition<addOne.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "addOne"
		displayName: "myFunction"
		rid: "ri.function-registry.main.function.abd64ff3-276e-48c5-afee-5a6ef0b2ea47"
		type: "query"
		version: "0.0.9"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			n: {
				nullable: false
				type: "integer"
			}
		}
		output: {
			nullable: false
			type: "integer"
		}
		signature: addOne.Signature
	};
	apiName: "addOne";
	type: "query";
	version: "0.0.9";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const addOne: addOne;
