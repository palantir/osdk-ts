import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace acceptsThreeDimensionalAggregationFunction {
	interface Signature {
		(query: acceptsThreeDimensionalAggregationFunction.Parameters): Promise<acceptsThreeDimensionalAggregationFunction.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly aggFunction: QueryParam.ThreeDimensionalAggregationType<"string", QueryParam.RangeKey<"timestamp">, "double">;
	}
	type ReturnType = QueryResult.ThreeDimensionalAggregationType<"string", QueryResult.RangeKey<"timestamp">, "double">;
}
export interface acceptsThreeDimensionalAggregationFunction extends QueryDefinition<acceptsThreeDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "acceptsThreeDimensionalAggregationFunction"
		displayName: "acceptsThreeDimensionalAggregation"
		rid: "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968"
		type: "query"
		version: "0.11.0"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			aggFunction: {
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
		}
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
		signature: acceptsThreeDimensionalAggregationFunction.Signature
	};
	apiName: "acceptsThreeDimensionalAggregationFunction";
	type: "query";
	version: "0.11.0";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const acceptsThreeDimensionalAggregationFunction: acceptsThreeDimensionalAggregationFunction;
