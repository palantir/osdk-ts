import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace acceptsTwoDimensionalAggregationFunction {
	interface Signature {
		(query: acceptsTwoDimensionalAggregationFunction.Parameters): Promise<acceptsTwoDimensionalAggregationFunction.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly aggFunction: QueryParam.TwoDimensionalAggregationType<"string", "double">;
	}
	type ReturnType = QueryResult.TwoDimensionalAggregationType<"string", "double">;
}
export interface acceptsTwoDimensionalAggregationFunction extends QueryDefinition<acceptsTwoDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "acceptsTwoDimensionalAggregationFunction"
		displayName: "acceptsTwoDimensionalAggregation"
		rid: "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968"
		type: "query"
		version: "0.11.0"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			aggFunction: {
				nullable: false
				twoDimensionalAggregation: {
					keyType: "string"
					valueType: "double"
				}
				type: "twoDimensionalAggregation"
			}
		}
		output: {
			nullable: false
			twoDimensionalAggregation: {
				keyType: "string"
				valueType: "double"
			}
			type: "twoDimensionalAggregation"
		}
		signature: acceptsTwoDimensionalAggregationFunction.Signature
	};
	apiName: "acceptsTwoDimensionalAggregationFunction";
	type: "query";
	version: "0.11.0";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const acceptsTwoDimensionalAggregationFunction: acceptsTwoDimensionalAggregationFunction;
