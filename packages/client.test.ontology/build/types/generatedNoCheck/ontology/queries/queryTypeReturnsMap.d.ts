import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Employee } from "../objects/Employee.js";
export declare namespace queryTypeReturnsMap {
	interface Signature {
		(query: queryTypeReturnsMap.Parameters): Promise<queryTypeReturnsMap.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly peopleMap: Record<ObjectSpecifier<Employee>, QueryParam.PrimitiveType<"string">>;
	}
	type ReturnType = Record<ObjectSpecifier<Employee>, QueryResult.PrimitiveType<"float">>;
}
export interface queryTypeReturnsMap extends QueryDefinition<queryTypeReturnsMap.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "queryTypeReturnsMap"
		rid: "ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdd2"
		type: "query"
		version: "0.1.1"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			peopleMap: {
				keyType: {
					type: "object"
					object: "Employee"
					nullable: false
				}
				nullable: false
				type: "map"
				valueType: {
					type: "string"
					nullable: false
				}
			}
		}
		output: {
			keyType: {
				type: "object"
				object: "Employee"
				nullable: false
			}
			nullable: false
			type: "map"
			valueType: {
				type: "float"
				nullable: false
			}
		}
		signature: queryTypeReturnsMap.Signature
	};
	apiName: "queryTypeReturnsMap";
	type: "query";
	version: "0.1.1";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const queryTypeReturnsMap: queryTypeReturnsMap;
