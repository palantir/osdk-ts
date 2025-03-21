import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace incrementPersonAge {
	interface Signature {
		(query: incrementPersonAge.Parameters): Promise<incrementPersonAge.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly person: {
			readonly age?: QueryParam.PrimitiveType<"integer">
			readonly firstName: QueryParam.PrimitiveType<"string">
			readonly lastName: QueryParam.PrimitiveType<"string">
		};
	}
	interface ReturnType {
		age?: QueryResult.PrimitiveType<"integer">;
		firstName: QueryResult.PrimitiveType<"string">;
		lastName: QueryResult.PrimitiveType<"string">;
	}
}
export interface incrementPersonAge extends QueryDefinition<incrementPersonAge.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "incrementPersonAge"
		displayName: "incrementAge"
		rid: "ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d"
		type: "query"
		version: "0.0.9"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			person: {
				nullable: false
				struct: {
					firstName: {
						type: "string"
						nullable: false
					}
					lastName: {
						type: "string"
						nullable: false
					}
					age: {
						type: "integer"
						nullable: true
					}
				}
				type: "struct"
			}
		}
		output: {
			nullable: false
			struct: {
				firstName: {
					type: "string"
					nullable: false
				}
				lastName: {
					type: "string"
					nullable: false
				}
				age: {
					type: "integer"
					nullable: true
				}
			}
			type: "struct"
		}
		signature: incrementPersonAge.Signature
	};
	apiName: "incrementPersonAge";
	type: "query";
	version: "0.0.9";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const incrementPersonAge: incrementPersonAge;
