import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Employee } from "../objects/Employee.js";
export declare namespace incrementPersonAgeComplex {
	interface Signature {
		(query: incrementPersonAgeComplex.Parameters): Promise<incrementPersonAgeComplex.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly person: {
			readonly age?: QueryParam.PrimitiveType<"integer">
			readonly firstName: QueryParam.PrimitiveType<"string">
			readonly lastName: QueryParam.PrimitiveType<"string">
			readonly object: QueryParam.ObjectType<Employee>
		};
	}
	interface ReturnType {
		age?: QueryResult.PrimitiveType<"integer">;
		firstName: QueryResult.PrimitiveType<"string">;
		lastName: QueryResult.PrimitiveType<"string">;
		object: QueryResult.ObjectType<Employee>;
	}
}
export interface incrementPersonAgeComplex extends QueryDefinition<incrementPersonAgeComplex.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "incrementPersonAgeComplex"
		displayName: "incrementAgeComplex"
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
					object: {
						type: "object"
						object: "Employee"
						nullable: false
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
				object: {
					type: "object"
					object: "Employee"
					nullable: false
				}
			}
			type: "struct"
		}
		signature: incrementPersonAgeComplex.Signature
	};
	apiName: "incrementPersonAgeComplex";
	type: "query";
	version: "0.0.9";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const incrementPersonAgeComplex: incrementPersonAgeComplex;
