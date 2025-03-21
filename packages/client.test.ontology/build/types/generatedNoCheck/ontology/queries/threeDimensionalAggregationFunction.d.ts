import type { QueryDefinition, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace threeDimensionalAggregationFunction {
	interface Signature {
		(): Promise<threeDimensionalAggregationFunction.ReturnType>;
	}
	type ReturnType = QueryResult.ThreeDimensionalAggregationType<"string", QueryResult.RangeKey<"timestamp">, "double">;
}
export interface threeDimensionalAggregationFunction extends QueryDefinition<threeDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "threeDimensionalAggregationFunction"
		displayName: "threeDimensionalAggregation"
		rid: "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968"
		type: "query"
		version: "0.11.0"
		parameters: {}
		output: {
			nullable: false
			threeDimensionalAggregation: {
				keyType: "string"
				valueType: {
					keyType: "range"
					keySubtype: "timestamp"
					valueType: "double"
				}
			}
			type: "threeDimensionalAggregation"
		}
		signature: threeDimensionalAggregationFunction.Signature
	};
	apiName: "threeDimensionalAggregationFunction";
	type: "query";
	version: "0.11.0";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const threeDimensionalAggregationFunction: threeDimensionalAggregationFunction;
